import { NextResponse } from 'next/server';
import { PrismaClient, Prisma } from '@prisma/client';
import { randomUUID } from 'crypto';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const requestId = randomUUID();
  try {
    const data = await request.json();
    // Debug: log incoming payload
    console.log('[access-request] Incoming payload:', {
      requestId,
      ...data,
      // Avoid logging very long strings
      message: typeof data?.message === 'string' ? `${data.message.substring(0, 200)}${data.message.length > 200 ? '…' : ''}` : data?.message,
    });

    // Validate required fields and report all missing at once (relaxed)
    const requiredFields = ['name', 'email'];
    const missingFields = requiredFields.filter((f) => !data?.[f]);
    if (missingFields.length > 0) {
      const receivedTypes: Record<string, string> = Object.fromEntries(
        Object.entries(data || {}).map(([k, v]) => [k, Array.isArray(v) ? 'array' : typeof v])
      );
      console.warn('[access-request] Missing required fields:', { requestId, missingFields, receivedTypes });
      return NextResponse.json(
        {
          error: 'Missing required fields',
          missingFields,
          receivedKeys: Object.keys(data || {}),
          receivedTypes,
          requestId,
        },
        { status: 400 }
      );
    }

    // Ensure specialties is an array (support comma-separated string too)
    if (Array.isArray(data?.specialties)) {
      // normalize to strings and trim
      data.specialties = data.specialties.map((s: unknown) => String(s).trim()).filter(Boolean);
    } else if (typeof data?.specialties === 'string') {
      data.specialties = data.specialties
        .split(',')
        .map((s: string) => s.trim())
        .filter(Boolean);
    } else {
      data.specialties = [];
    }

    // Map frontend payload to current DB schema
    const [firstName, ...rest] = String(data.name || '').trim().split(/\s+/);
    const lastName = rest.join(' ') || 'N/A';
    const industry = (Array.isArray(data.specialties) && data.specialties[0]) ? String(data.specialties[0]) : (typeof data.specialties === 'string' ? data.specialties : 'N/A');

    const accessRequest = await prisma.accessRequest.create({
      data: {
        firstName: firstName || 'N/A',
        lastName,
        email: data.email,
        company: data.company || 'N/A',
        jobTitle: data.jobTitle || 'N/A',
        phoneNumber: data.phone || data.phoneNumber || 'N/A',
        industry: industry || 'N/A',
        companySize: data.companySize || 'N/A',
        useCase: data.useCase || 'N/A',
        budget: data.budget || 'N/A',
        timeline: data.timeline || 'N/A',
        additionalInfo: data.message || data.additionalInfo || null,
        status: typeof data.status === 'string' ? data.status : 'PENDING',
      },
    });

    return NextResponse.json({ requestId, data: accessRequest }, { status: 201 });
  } catch (error) {
    // Improve error logging, including Prisma error codes
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      const err = { code: error.code, meta: error.meta, message: error.message };
      console.error('[access-request] Prisma error:', { requestId, ...err });
    } else {
      const safeError =
        error instanceof Error
          ? { name: error.name, message: error.message, stack: error.stack }
          : { value: String(error) };
      console.error('[access-request] Failed to create access request:', { requestId, error: safeError });
    }
    return NextResponse.json(
      {
        error: 'Failed to create access request',
        // Expose minimal safe details for debugging
        message: error instanceof Error ? error.message : String(error),
        prismaCode: error instanceof Prisma.PrismaClientKnownRequestError ? error.code : undefined,
        requestId,
      },
      { status: 500 }
    );
  }
}
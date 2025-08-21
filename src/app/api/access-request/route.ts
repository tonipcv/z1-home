import { NextResponse } from 'next/server';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const data = await request.json();
    // Debug: log incoming payload
    console.log('[access-request] Incoming payload:', {
      ...data,
      // Avoid logging very long strings
      message: typeof data?.message === 'string' ? `${data.message.substring(0, 200)}${data.message.length > 200 ? '…' : ''}` : data?.message,
    });

    // Validate required fields and report all missing at once
    const requiredFields = ['name', 'email', 'company', 'role', 'clinicSize', 'currentSystem', 'budget', 'timeline'];
    const missingFields = requiredFields.filter((f) => !data?.[f]);
    if (missingFields.length > 0) {
      console.warn('[access-request] Missing required fields:', missingFields);
      return NextResponse.json(
        {
          error: 'Missing required fields',
          missingFields,
          receivedKeys: Object.keys(data || {}),
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

    // Create access request
    const accessRequest = await prisma.accessRequest.create({
      data: {
        name: data.name,
        email: data.email,
        company: data.company,
        role: data.role,
        clinicSize: data.clinicSize,
        specialties: data.specialties,
        currentSystem: data.currentSystem,
        budget: data.budget,
        timeline: data.timeline,
        message: data.message || null,
      },
    });

    return NextResponse.json(accessRequest, { status: 201 });
  } catch (error) {
    // Improve error logging, including Prisma error codes
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.error('[access-request] Prisma error:', {
        code: error.code,
        meta: error.meta,
        message: error.message,
      });
    } else {
      console.error('[access-request] Failed to create access request:', error);
    }
    return NextResponse.json(
      {
        error: 'Failed to create access request',
        // Expose minimal safe details for debugging
        message: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
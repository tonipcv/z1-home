"use client";

import { useEffect, useState } from 'react';
import { getDict } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface RequestAnalysisCTAProps {
  label?: string;
  className?: string;
}

export default function RequestAnalysisCTA({ label = 'Request an analysis', className = '' }: RequestAnalysisCTAProps) {
  const t = getDict('en');
  const [open, setOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialties: [] as string[],
  });

  useEffect(() => {
    if (showSuccess) {
      const url = 'https://calendly.com/getcxlus/free-consultation-to-implement-zuzz';
      const timer = setTimeout(() => {
        window.location.href = url;
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  return (
    <>
      <button onClick={() => setOpen(true)} className={className}>
        {label}
      </button>

      {/* Request Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-white max-w-[95%] sm:max-w-2xl w-full p-0 rounded-2xl border border-gray-200 shadow-xl overflow-hidden mx-auto my-4 sm:my-8">
          <div className="p-4 sm:p-6">
            <DialogHeader>
              <DialogTitle className="text-xl sm:text-2xl font-semibold text-black leading-snug">{t.home.modalTitle}</DialogTitle>
              <DialogDescription className="text-sm text-gray-600 mt-1 sm:mt-2">{t.home.modalDesc}</DialogDescription>
            </DialogHeader>

            <div className="mt-3 sm:mt-5 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-gray-800">{t.home.name}</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 bg-white border-gray-300 rounded-md focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                    placeholder="Jane Smith"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-800">{t.home.phone}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 bg-white border-gray-300 rounded-md focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-800">{t.home.email}</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 bg-white border-gray-300 rounded-md focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                    placeholder="jane@company.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry" className="text-sm font-medium text-gray-800">{t.home.industry}</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, specialties: [value] })}>
                    <SelectTrigger className="w-full px-3 py-2 bg-white border-gray-300 rounded-md focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-gray-200 rounded-md">
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="hospitality">Hospitality</SelectItem>
                      <SelectItem value="health-wellness">Health & Wellness</SelectItem>
                      <SelectItem value="beauty-aesthetics">Beauty & Aesthetics</SelectItem>
                      <SelectItem value="fitness">Fitness</SelectItem>
                      <SelectItem value="food-beverage">Food & Beverage</SelectItem>
                      <SelectItem value="professional-services">Professional Services</SelectItem>
                      <SelectItem value="saas">SaaS / Software</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  onClick={async () => {
                    if (isSubmitting) return;
                    setIsSubmitting(true);
                    try {
                      const response = await fetch('/api/access-request', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(formData),
                      });

                      if (!response.ok) {
                        throw new Error('Failed to submit request');
                      }

                      setFormData({ name: '', email: '', phone: '', specialties: [] });
                      setOpen(false);
                      // Track Lead conversion with Facebook Pixel
                      // @ts-ignore
                      window.fbq?.('track', 'Lead');
                      setShowSuccess(true);
                    } catch (error) {
                      alert('Failed to submit request. Please try again.');
                    } finally {
                      setIsSubmitting(false);
                    }
                  }}
                  disabled={isSubmitting}
                  className={`w-full bg-blue-700 text-white hover:bg-blue-800 transition-colors py-2.5 text-sm rounded-md ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Processing...' : t.home.submit}
                </Button>
                <p className="mt-3 text-xs text-center text-gray-500">{t.home.tos}</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Success Modal */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="bg-white max-w-md w-full p-6 rounded-2xl border border-gray-200 shadow-xl overflow-hidden mx-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-black leading-snug">Request received</DialogTitle>
            <DialogDescription className="text-sm text-gray-600 mt-2">
              Thanks! We’re redirecting you to schedule a free consultation now.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 flex items-center justify-end gap-2">
            <a
              href="https://calendly.com/getcxlus/free-consultation-to-implement-zuzz"
              className="inline-flex items-center px-4 py-2 rounded-md bg-blue-700 text-white hover:bg-blue-800 text-sm"
            >
              Go to scheduling
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

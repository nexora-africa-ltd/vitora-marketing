'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useRef, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { trackConversion } from '@/components/analytics/google-ads';

// TODO: Replace with your real Formspree form ID from https://formspree.io
const FORMSPREE_CONTACT_ID = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ID || 'mpqkklqn';

const inquiryTypes: Record<string, { label: string; placeholder: string }> = {
  pilot: {
    label: 'Start a Pilot',
    placeholder: "Tell us about your facility and we'll set up a free 30-day pilot\u2026",
  },
  enterprise: {
    label: 'Enterprise Pricing',
    placeholder: 'Tell us about your hospital group or county health service requirements\u2026',
  },
  developer: {
    label: 'API Access',
    placeholder: 'Tell us about your integration use case and we\u2019ll arrange API access\u2026',
  },
};

function ContactForm() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || '';
  const quoteId = searchParams.get('quote_id') || '';
  const inquiry = inquiryTypes[type];
  const [state, handleSubmit] = useForm(FORMSPREE_CONTACT_ID);
  const conversionFired = useRef(false);
  const [quoteSummary, setQuoteSummary] = useState<{
    resolved_plan?: string;
    total?: string;
    currency?: string;
  } | null>(null);

  useEffect(() => {
    if (state.succeeded && !conversionFired.current) {
      conversionFired.current = true;
      trackConversion('contact_form');
    }
  }, [state.succeeded]);

  useEffect(() => {
    if (!quoteId) {
      setQuoteSummary(null);
      return;
    }

    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`/api/pricing/quotes/${encodeURIComponent(quoteId)}`);
        const data = await res.json();
        if (!cancelled && res.ok) {
          const payload = data?.quote_payload || {};
          setQuoteSummary({
            resolved_plan: payload.resolved_plan,
            total: payload.total,
            currency: payload.currency,
          });
        }
      } catch {
        if (!cancelled) setQuoteSummary(null);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [quoteId]);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-brand-burgundy dark:text-white sm:text-5xl lg:text-6xl">
              {inquiry ? inquiry.label : 'Get in Touch'}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground dark:text-white/90">
              {inquiry
                ? `Let\u2019s talk about ${inquiry.label.toLowerCase()} for your facility.`
                : "Have questions? We\u2019re here to help. Reach out and we\u2019ll respond as soon as possible."}
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-brand-burgundy dark:text-white mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-lg bg-brand-teal/10 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-brand-teal" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-brand-burgundy dark:text-white">Email</h3>
                    <a href="mailto:info@nexora.africa" className="mt-1 text-muted-foreground hover:text-brand-teal transition-colors block">info@nexora.africa</a>
                    <a href="mailto:support@nexora.africa" className="text-muted-foreground hover:text-brand-teal transition-colors block">support@nexora.africa</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-lg bg-brand-gold/10 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-brand-gold" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-brand-burgundy dark:text-white">Phone &amp; WhatsApp</h3>
                    <a href="tel:+254717550482" className="mt-1 text-muted-foreground hover:text-brand-teal transition-colors block">+254 717 550 482</a>
                    <a
                      href="https://wa.me/254717550482?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20Vitora%20HMIS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-brand-teal transition-colors mt-1"
                    >
                      <MessageCircle className="h-3.5 w-3.5" /> Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-lg bg-brand-burgundy/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-brand-burgundy" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-brand-burgundy dark:text-white">Office</h3>
                    <p className="mt-1 text-muted-foreground">Lower Kabete Road, Nairobi, Kenya</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 rounded-xl border bg-card">
                <h3 className="text-lg font-semibold text-brand-burgundy dark:text-white mb-2">Business Hours</h3>
                <p className="text-muted-foreground">Monday &ndash; Friday: 8:00 AM &ndash; 6:00 PM EAT</p>
                <p className="text-muted-foreground">Saturday: 9:00 AM &ndash; 1:00 PM EAT</p>
                <p className="text-muted-foreground">Sunday: Closed</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="rounded-xl border bg-card p-8 shadow-card">
                <h2 className="text-2xl font-bold text-brand-burgundy dark:text-white mb-6">
                  {inquiry ? inquiry.label : 'Send Us a Message'}
                </h2>
                
                {state.succeeded ? (
                  <div className="rounded-lg bg-success/10 border border-success/20 p-6 text-center">
                    <p className="text-success font-semibold mb-2">Thank you for contacting us!</p>
                    <p className="text-muted-foreground">
                      We&apos;ve received your message and will get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Hidden field for inquiry type */}
                    {type && <input type="hidden" name="inquiry_type" value={type} />}
                    {quoteId && <input type="hidden" name="quote_id" value={quoteId} />}
                    {quoteSummary?.resolved_plan && (
                      <input type="hidden" name="resolved_plan" value={quoteSummary.resolved_plan} />
                    )}
                    {quoteSummary?.total && (
                      <input type="hidden" name="quoted_total" value={quoteSummary.total} />
                    )}
                    {quoteSummary?.currency && (
                      <input type="hidden" name="quoted_currency" value={quoteSummary.currency} />
                    )}

                    {state.errors && state.errors.getFormErrors().length > 0 && (
                      <div className="rounded-lg bg-error/10 border border-error/20 p-4">
                        <p className="text-sm text-error font-medium">Something went wrong. Please try again or email us directly at info@nexora.africa.</p>
                      </div>
                    )}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
                      <input type="text" id="name" name="name" required autoComplete="name" placeholder="Jane Muthoni&hellip;"
                        className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-brand-teal focus:border-transparent" />
                      <ValidationError prefix="Name" field="name" errors={state.errors} className="text-sm text-error mt-1" />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                      <input type="email" id="email" name="email" required autoComplete="email" spellCheck={false} placeholder="jane@facility.co.ke&hellip;"
                        className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-brand-teal focus:border-transparent" />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-sm text-error mt-1" />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                      <input type="tel" id="phone" name="phone" autoComplete="tel" placeholder="+254 7XX XXX XXX&hellip;"
                        className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-brand-teal focus:border-transparent" />
                    </div>

                    <div>
                      <label htmlFor="facility" className="block text-sm font-medium mb-2">Healthcare Facility</label>
                      <input type="text" id="facility" name="facility" autoComplete="organization" placeholder="e.g., Kenyatta National Hospital&hellip;"
                        className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-brand-teal focus:border-transparent" />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                      <textarea id="message" name="message" required rows={4}
                        placeholder={inquiry ? inquiry.placeholder : 'How can we help you?\u2026'}
                        className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-brand-teal focus:border-transparent" />
                      <ValidationError prefix="Message" field="message" errors={state.errors} className="text-sm text-error mt-1" />
                    </div>

                    <button type="submit" disabled={state.submitting}
                      className="w-full rounded-lg bg-brand-burgundy px-6 py-3 text-base font-semibold text-white hover:bg-brand-burgundy-800 transition-colors disabled:opacity-50">
                      {state.submitting ? 'Sending\u2026' : 'Send Message'}
                    </button>
                    <div className="text-center mt-4">
                      <a
                        href="https://wa.me/254717550482?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20Vitora%20HMIS"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-brand-teal transition-colors"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Prefer WhatsApp? Chat with us directly
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense>
      <ContactForm />
    </Suspense>
  );
}

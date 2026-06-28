'use client';

import { useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { CheckCircle, MessageCircle } from 'lucide-react';
import { trackConversion } from '@/components/analytics/google-ads';

// TODO: Replace with your real Formspree form ID from https://formspree.io
const FORMSPREE_DEMO_ID = process.env.NEXT_PUBLIC_FORMSPREE_DEMO_ID || 'mwvaaqvg';

export default function DemoPage() {
  const [state, handleSubmit] = useForm(FORMSPREE_DEMO_ID);
  const conversionFired = useRef(false);

  useEffect(() => {
    if (state.succeeded && !conversionFired.current) {
      conversionFired.current = true;
      trackConversion('demo_request');
    }
  }, [state.succeeded]);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-brand-burgundy dark:text-white sm:text-5xl lg:text-6xl">
              See Vitora HMIS in Action
            </h1>
            <p className="mt-6 text-lg text-muted-foreground dark:text-white/90">
              Schedule a personalized demo and discover how Vitora HMIS can transform 
              your healthcare facility.
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </section>

      {/* Demo Request Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* What to Expect */}
            <div>
              <h2 className="text-2xl font-bold text-brand-burgundy dark:text-white mb-6">
                What to Expect
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-teal mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-brand-burgundy dark:text-white">
                      Personalized Walkthrough
                    </h3>
                    <p className="text-muted-foreground">
                      We&apos;ll tailor the demo to your facility&apos;s specific needs and workflows.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-teal mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-brand-burgundy dark:text-white">
                      Live System Access
                    </h3>
                    <p className="text-muted-foreground">
                      Experience the actual software with sample patient data and realistic scenarios.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-teal mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-brand-burgundy dark:text-white">
                      SHA Integration Demo
                    </h3>
                    <p className="text-muted-foreground">
                      See how eligibility verification and claims submission work in real-time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-teal mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-brand-burgundy dark:text-white">
                      Offline Functionality
                    </h3>
                    <p className="text-muted-foreground">
                      We&apos;ll demonstrate how the system continues working during internet outages.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-teal mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-brand-burgundy dark:text-white">
                      Q&A Session
                    </h3>
                    <p className="text-muted-foreground">
                      Ask anything about features, pricing, implementation, or support.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-teal mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-brand-burgundy dark:text-white">
                      Next Steps Discussion
                    </h3>
                    <p className="text-muted-foreground">
                      Learn about implementation timelines, training, and getting started.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 rounded-xl border bg-card">
                <p className="text-sm text-muted-foreground">
                  <strong>Duration:</strong> 45-60 minutes<br />
                  <strong>Format:</strong> Virtual or in-person (Nairobi)<br />
                  <strong>Cost:</strong> Free, no obligation
                </p>
              </div>
            </div>

            {/* Request Form */}
            <div>
              <div className="rounded-xl border bg-card p-8 shadow-card">
                <h2 className="text-2xl font-bold text-brand-burgundy dark:text-white mb-6">
                  Request Your Demo
                </h2>
                
                {state.succeeded ? (
                  <div className="rounded-lg bg-success/10 border border-success/20 p-6 text-center">
                    <CheckCircle className="h-12 w-12 text-success mx-auto mb-4" />
                    <p className="text-success font-semibold mb-2">Demo Request Received!</p>
                    <p className="text-muted-foreground">
                      Thank you for your interest. Our team will contact you within 24 hours 
                      to schedule your personalized demo.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {state.errors && state.errors.getFormErrors().length > 0 && (
                      <div className="rounded-lg bg-error/10 border border-error/20 p-4">
                        <p className="text-sm text-error font-medium">Something went wrong. Please try again or email us at info@nexora.africa.</p>
                      </div>
                    )}
                    <div>
                      <label htmlFor="demo-name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="demo-name"
                        name="name"
                        required
                        autoComplete="name"
                        placeholder="Jane Muthoni&hellip;"
                        className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} className="text-sm text-error mt-1" />
                    </div>

                    <div>
                      <label htmlFor="demo-email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="demo-email"
                        name="email"
                        required
                        autoComplete="email"
                        spellCheck={false}
                        placeholder="jane@facility.co.ke&hellip;"
                        className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-sm text-error mt-1" />
                    </div>

                    <div>
                      <label htmlFor="demo-phone" className="block text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="demo-phone"
                        name="phone"
                        required
                        autoComplete="tel"
                        placeholder="+254 7XX XXX XXX&hellip;"
                        className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                      />
                      <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-sm text-error mt-1" />
                    </div>

                    <div>
                      <label htmlFor="demo-facility" className="block text-sm font-medium mb-2">
                        Healthcare Facility *
                      </label>
                      <input
                        type="text"
                        id="demo-facility"
                        name="facility"
                        required
                        autoComplete="organization"
                        placeholder="e.g., Kenyatta National Hospital&hellip;"
                        className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="demo-facilityType" className="block text-sm font-medium mb-2">
                        Facility Type *
                      </label>
                      <select
                        id="demo-facilityType"
                        name="facilityType"
                        required
                        className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                      >
                        <option value="">Select facility type&hellip;</option>
                        <option value="hospital">Hospital</option>
                        <option value="clinic">Clinic</option>
                        <option value="health-center">Health Center</option>
                        <option value="dispensary">Dispensary</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="demo-role" className="block text-sm font-medium mb-2">
                        Your Role *
                      </label>
                      <input
                        type="text"
                        id="demo-role"
                        name="role"
                        required
                        autoComplete="organization-title"
                        placeholder="e.g., Hospital Administrator, IT Manager&hellip;"
                        className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="demo-preferredDate" className="block text-sm font-medium mb-2">
                        Preferred Demo Date
                      </label>
                      <input
                        type="date"
                        id="demo-preferredDate"
                        name="preferredDate"
                        className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="demo-message" className="block text-sm font-medium mb-2">
                        Additional Notes
                      </label>
                      <textarea
                        id="demo-message"
                        name="message"
                        rows={3}
                        placeholder="Any specific features or questions you&apos;d like to focus on?&hellip;"
                        className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full rounded-lg bg-brand-burgundy px-6 py-3 text-base font-semibold text-white hover:bg-brand-burgundy-800 transition-colors disabled:opacity-50"
                    >
                      {state.submitting ? 'Submitting\u2026' : 'Request Demo'}
                    </button>
                    <div className="text-center mt-4">
                      <a
                        href="https://wa.me/254717550482?text=Hi%2C%20I%27d%20like%20to%20schedule%20a%20Vitora%20HMIS%20demo"
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

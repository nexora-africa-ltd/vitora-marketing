'use client';

import { useForm, ValidationError } from '@formspree/react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

// TODO: Replace with your real Formspree form ID from https://formspree.io
const FORMSPREE_CONTACT_ID = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ID || 'mpqkklqn';

export default function ContactPage() {
  const [state, handleSubmit] = useForm(FORMSPREE_CONTACT_ID);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-brand-burgundy dark:text-white sm:text-5xl lg:text-6xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg text-muted-foreground dark:text-white/90">
              Have questions? We&apos;re here to help. Reach out and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
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
                    <h3 className="text-lg font-semibold text-brand-burgundy dark:text-white">
                      Email
                    </h3>
                    <a href="mailto:info@nexora.africa" className="mt-1 text-muted-foreground hover:text-brand-teal transition-colors block">info@nexora.africa</a>
                    <a href="mailto:support@nexora.africa" className="text-muted-foreground hover:text-brand-teal transition-colors block">support@nexora.africa</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-lg bg-brand-burgundy/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-brand-burgundy" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-brand-burgundy dark:text-white">
                      Office
                    </h3>
                    <p className="mt-1 text-muted-foreground">Lower Kabete Road, Nairobi, Kenya</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 rounded-xl border bg-card">
                <h3 className="text-lg font-semibold text-brand-burgundy dark:text-white mb-2">
                  Business Hours
                </h3>
                <p className="text-muted-foreground">Monday &ndash; Friday: 8:00 AM &ndash; 6:00 PM EAT</p>
                <p className="text-muted-foreground">Saturday: 9:00 AM &ndash; 1:00 PM EAT</p>
                <p className="text-muted-foreground">Sunday: Closed</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="rounded-xl border bg-card p-8 shadow-card">
                <h2 className="text-2xl font-bold text-brand-burgundy dark:text-white mb-6">
                  Send Us a Message
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
                    {state.errors && state.errors.getFormErrors().length > 0 && (
                      <div className="rounded-lg bg-error/10 border border-error/20 p-4">
                        <p className="text-sm text-error font-medium">Something went wrong. Please try again or email us directly at info@nexora.africa.</p>
                      </div>
                    )}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        autoComplete="name"
                        placeholder="Jane Muthoni&hellip;"
                        className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} className="text-sm text-error mt-1" />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
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
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        autoComplete="tel"
                        placeholder="+254 7XX XXX XXX&hellip;"
                        className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="facility" className="block text-sm font-medium mb-2">
                        Healthcare Facility
                      </label>
                      <input
                        type="text"
                        id="facility"
                        name="facility"
                        autoComplete="organization"
                        placeholder="e.g., Kenyatta National Hospital&hellip;"
                        className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        placeholder="How can we help you?&hellip;"
                        className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} className="text-sm text-error mt-1" />
                    </div>

                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full rounded-lg bg-brand-burgundy px-6 py-3 text-base font-semibold text-white hover:bg-brand-burgundy-800 transition-colors disabled:opacity-50"
                    >
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

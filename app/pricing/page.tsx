import type { Metadata } from 'next';
import { PricingCart } from '@/components/pricing/pricing-cart';

export const metadata: Metadata = {
  title: 'Pricing — Plans for Clinics, Hospitals & Networks',
  description:
    'Affordable HMIS pricing for Kenyan clinics and hospitals. Free pilot available. Full onboarding support included. Go live without disruption.',
  alternates: { canonical: '/pricing' },
  keywords: [
    'HMIS pricing Kenya',
    'clinic software cost',
    'hospital management system price',
    'free HMIS pilot',
    'healthcare software pricing',
    'affordable clinic software',
  ],
};

const addOns = [
  {
    name: 'TibaBot AI',
    price: 'KES 1,500/mo',
    description:
      'Reduce clinical errors and improve decision-making with AI-assisted diagnosis support, drug interaction checks, and automated coding aligned with KSTG. Popular with hospitals and high-volume clinics.',
  },
  {
    name: 'Laboratory Information System (LIS)',
    price: 'KES 15,000/mo',
    description:
      'Manage laboratory workflows, results, and reporting efficiently. Connects to analyzers, auto-bills on completion, and pushes results to clinicians.',
  },
  {
    name: 'SMS & WhatsApp Reminders',
    price: 'KES 400/mo',
    description:
      'Reduce missed appointments and improve follow-ups with automated patient reminders and notifications.',
  },
  {
    name: 'Custom API Access',
    price: 'KES 300/mo',
    description:
      'Expose secure integration endpoints for third-party systems and reporting pipelines.',
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-brand-burgundy dark:text-white sm:text-5xl">
            Pricing Built for Real Healthcare Operations
          </h1>
          <p className="mt-4 text-lg text-muted-foreground dark:text-white/90 max-w-2xl mx-auto">
            From small clinics to multi-facility hospitals — run compliant,
            efficient, fully digital operations. Start with a guided pilot and
            pay only when you’re confident.
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </section>

      <PricingCart />

      {/* Add-ons */}
      <section className="py-16 bg-muted/50 fade-to-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl">
              Optional Add-Ons
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Extend Vitora with optional specialist and platform add-ons.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {addOns.map((a) => (
              <div key={a.name} className="rounded-xl border bg-card p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-brand-burgundy dark:text-white">
                    {a.name}
                  </h3>
                  <span className="text-sm font-medium text-brand-teal">
                    {a.price}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background fade-to-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-bold text-brand-burgundy dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-brand-burgundy dark:text-white">
                Is the pilot really free?
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Yes. We onboard your facility with real workflows, data migration,
                and full functionality for 30 days. Due to the hands-on setup,
                pilot slots are limited and subject to qualification.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-brand-burgundy dark:text-white">
                What’s included in implementation?
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Setup, data migration, staff training, and go-live support.
                Included for Hospital and Enterprise plans (valued at KES 50,000+).
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-brand-burgundy dark:text-white">
                Can I upgrade later?
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Yes. Upgrade anytime — all patient records, encounters, and billing history carry over automatically.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-brand-burgundy dark:text-white">
                Do you offer annual billing?
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Yes — annual billing gives you 2 months free.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

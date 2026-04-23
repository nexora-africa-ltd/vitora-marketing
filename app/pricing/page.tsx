import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Check, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pricing — Vitora HMIS',
  description:
    'Transparent pricing for clinics, hospitals, and specialized practices. Start with a free pilot.',
};

const tiers = [
  {
    name: 'Clinic',
    audience: 'Outpatient clinics & dispensaries',
    price: 'KES 15,000',
    period: '/month',
    highlight: false,
    cta: 'Start Free Pilot',
    href: '/contact?type=pilot',
    features: [
      'Patient registration & MRN',
      'Triage & queue management',
      'Encounters & vitals',
      'SHA eligibility & claims',
      'Pharmacy & stock management',
      'Billing & invoicing',
      'Offline-first — works without internet',
      'MOH 705A / 705B auto-reporting',
      'Up to 10 staff accounts',
    ],
  },
  {
    name: 'Hospital',
    audience: 'Level 3–5 facilities & multi-department',
    price: 'KES 45,000',
    period: '/month',
    highlight: true,
    cta: 'Book a Demo',
    href: '/demo',
    features: [
      'Everything in Clinic, plus:',
      'Inpatient wards & bed management',
      'Laboratory orders & results',
      'Radiology & imaging requests',
      'Multi-department scheduling',
      'Advanced RBAC & audit trail',
      'KHIS / DHIS2 auto-reporting',
      'Staff rostering & shift management',
      'Up to 50 staff accounts',
    ],
  },
  {
    name: 'Enterprise',
    audience: 'Hospital groups & county health services',
    price: 'Custom',
    period: '',
    highlight: false,
    cta: 'Contact Sales',
    href: '/contact?type=enterprise',
    features: [
      'Everything in Hospital, plus:',
      'Multi-facility management',
      'Central dashboard & BI analytics',
      'Custom integrations (FHIR R4)',
      'Dedicated account manager',
      'On-site training & go-live support',
      'SLA with priority support',
      'Unlimited staff accounts',
      'Custom compliance reporting',
    ],
  },
];

const addOns = [
  {
    name: 'TibaBot AI',
    price: 'KES 5,000/mo',
    description:
      'Clinical decision support: drug interactions, ICD-10 coding, care plan suggestions aligned with KSTG.',
  },
  {
    name: 'PowerSync Offline',
    price: 'Included',
    description:
      'Real-time bi-directional sync. Works fully offline and auto-resolves conflicts on reconnect.',
  },
  {
    name: 'SMS & WhatsApp Reminders',
    price: 'KES 2,500/mo',
    description:
      'Automated appointment reminders, lab result notifications, and follow-up messages to patients.',
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-hero py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-brand-burgundy dark:text-white sm:text-5xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-4 text-lg text-muted-foreground dark:text-white/90 max-w-2xl mx-auto">
            No hidden fees. Start with a free 30-day pilot — pay only when you&apos;re ready.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-xl border bg-card p-8 flex flex-col ${
                  tier.highlight
                    ? 'border-brand-teal shadow-hover ring-2 ring-brand-teal/20'
                    : 'shadow-card'
                }`}
              >
                {tier.highlight && (
                  <span className="mb-4 inline-block w-fit rounded-full bg-brand-teal/10 px-3 py-1 text-xs font-semibold text-brand-teal uppercase tracking-wide">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold text-brand-burgundy dark:text-white">
                  {tier.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{tier.audience}</p>
                <div className="mt-6">
                  <span className="text-4xl font-extrabold text-brand-burgundy dark:text-white">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-muted-foreground ml-1">{tier.period}</span>
                  )}
                </div>
                <ul className="mt-8 space-y-3 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-brand-teal mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={tier.href}
                  className={`mt-8 inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-base font-semibold transition-colors ${
                    tier.highlight
                      ? 'bg-brand-burgundy text-white hover:bg-brand-burgundy-800 dark:bg-white dark:text-brand-burgundy dark:hover:bg-white/90 shadow-lg'
                      : 'border-2 border-brand-teal text-brand-teal hover:bg-brand-teal/10 dark:border-white dark:text-white dark:hover:bg-white/10'
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl">
              Optional Add-Ons
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Enhance your plan with AI, messaging, and more.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {addOns.map((a) => (
              <div key={a.name} className="rounded-xl border bg-card p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-brand-burgundy dark:text-white">
                    {a.name}
                  </h3>
                  <span className="text-sm font-medium text-brand-teal">{a.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ-style note */}
      <section className="py-16 bg-background">
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
                Yes. We set up your facility with real data migration and full functionality
                for 30 days at no cost. No credit card required.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-burgundy dark:text-white">
                What&apos;s included in implementation?
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                On-site or remote setup, data migration from your existing system, staff
                training, and go-live support. Included for Hospital and Enterprise tiers;
                available as an add-on for Clinic tier.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-burgundy dark:text-white">
                Can I upgrade later?
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Absolutely. Upgrade anytime — your data carries over seamlessly. Downgrading
                is also possible with a 30-day notice.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-burgundy dark:text-white">
                Do you offer annual billing?
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Yes — annual billing gives you 2 months free. Contact us for details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl">
            Start Your Free Pilot Today
          </h2>
          <p className="mt-4 text-lg text-muted-foreground dark:text-white/90 max-w-2xl mx-auto">
            30 days. Full features. No commitment. See how Vitora fits your facility.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center rounded-lg bg-brand-burgundy px-8 py-4 text-base font-semibold text-white hover:bg-brand-burgundy-800 dark:bg-white dark:text-brand-burgundy dark:hover:bg-white/90 transition-colors shadow-lg"
            >
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contact?type=pilot"
              className="inline-flex items-center justify-center rounded-lg border-2 border-brand-teal px-8 py-4 text-base font-semibold text-brand-teal hover:bg-brand-teal/10 dark:border-white dark:text-white dark:hover:bg-white/10 transition-colors"
            >
              Start a Pilot
            </Link>
          </div>
          <div className="mt-4">
            <a
              href="https://wa.me/254717550482?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20Vitora%20HMIS%20pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground dark:text-white/70 hover:text-brand-teal transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Check, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Pricing for clinics, hospitals, and healthcare networks. Start with a guided pilot and go live with confidence.',
};

const tiers = [
  {
    name: 'Clinic',
    audience: 'Outpatient clinics & dispensaries',
    price: 'KES 8,999',
    period: '/month',
    highlight: false,
    cta: 'Apply for Pilot',
    href: '/contact?type=pilot',
    note: '',
    features: [
      'Digitize patient records — eliminate lost files and manual errors',
      'Faster triage & queue management — reduce patient wait times',
      'Streamlined billing & invoicing with fewer mistakes',
      'Pharmacy & stock control — prevent stockouts',
      'SHA eligibility & claims support built-in',
      'Automatic MOH 705A / 705B reports — no manual submission',
      'Works fully offline — continue during internet outages',
      'Includes up to 10 staff (expand anytime)',
    ],
  },
  {
    name: 'Hospital',
    audience: 'Level 3–5 facilities & multi-department',
    price: 'KES 49,999',
    period: '/month',
    highlight: true,
    cta: 'Book a Demo',
    href: '/demo',
    note: 'Includes full implementation (valued at KES 50,000+)',
    features: [
      'Everything in Clinic, plus:',
      'Full inpatient management — wards, beds & admissions',
      'Lab & radiology workflows with structured results',
      'Multi-department scheduling & coordination',
      'Advanced RBAC & full audit trails (compliance-ready)',
      'Automatic KHIS / DHIS2 reporting — stay compliant effortlessly',
      'Staff rostering & shift management',
      'Designed for high patient volumes & multi-user environments',
      'Includes up to 50 staff (expand anytime)',
    ],
  },
  {
    name: 'Enterprise',
    audience: 'Hospital groups & county health systems',
    price: 'Custom',
    period: '',
    highlight: false,
    cta: 'Contact Sales',
    href: '/contact?type=enterprise',
    note: 'Typically KES 80,000+ / month',
    features: [
      'Everything in Hospital, plus:',
      'Multi-facility management with centralized control',
      'Executive dashboards & real-time analytics',
      'Custom integrations (FHIR R4, insurers, labs, government systems)',
      'Dedicated account manager & priority SLA support',
      'On-site training & full go-live support',
      'Advanced compliance & custom reporting workflows',
      'Unlimited staff accounts',
      'Full system customization',
    ],
  },
];

const addOns = [
  {
    name: 'TibaBot AI',
    price: 'KES 5,000/mo',
    description:
      'Reduce clinical errors and improve decision-making with AI-assisted diagnosis support, drug interaction checks, and automated coding aligned with KSTG. Popular with hospitals and high-volume clinics.',
  },
  {
    name: 'Offline Sync',
    price: 'KES 3,000/mo',
    description:
      'Operate without interruption — even during outages. Data syncs automatically when connectivity returns.',
  },
    {
    name: 'Laboratory Information System (LIS)',
    price: 'KES 7,000/mo',
    description:
      'Manage laboratory workflows, results, and reporting efficiently. Integrates seamlessly with existing hospital systems.',
  },
  {
    name: 'SMS & WhatsApp Reminders',
    price: 'KES 2,500/mo',
    description:
      'Reduce missed appointments and improve follow-ups with automated patient reminders and notifications.',
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-hero py-16 lg:py-20">
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
                <p className="mt-1 text-sm text-muted-foreground">
                  {tier.audience}
                </p>

                <div className="mt-6">
                  <span className="text-4xl font-extrabold text-brand-burgundy dark:text-white">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-muted-foreground ml-1">
                      {tier.period}
                    </span>
                  )}
                </div>

                {tier.note && (
                  <p className="mt-2 text-xs text-muted-foreground">
                    {tier.note}
                  </p>
                )}

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
              Extend Vitora or your existing system with AI, automation, LIS,and patient engagement tools.
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
                Yes. Upgrade anytime — your data carries over seamlessly.
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

      {/* CTA */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl">
            See Vitora in Your Facility — Risk Free
          </h2>

          <p className="mt-4 text-lg text-muted-foreground dark:text-white/90 max-w-2xl mx-auto">
            Experience a fully configured system with your workflows, your staff,
            and your data before committing.
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
              Apply for Pilot
            </Link>
          </div>

          <div className="mt-4">
            <a
              href="https://wa.me/254717550482"
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
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Clock, CreditCard, WifiOff, FileCheck, Users, Stethoscope, MessageCircle, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'For Clinics — Vitora HMIS',
  description:
    'Digitize your outpatient clinic: patient flow, SHA claims, billing, and offline capability — all in one system.',
};

const outcomes = [
  {
    icon: Clock,
    problem: 'Long patient wait times',
    outcome: 'KETA triage + digital queue cuts average wait by 40%. Patients see real-time queue position.',
  },
  {
    icon: CreditCard,
    problem: 'SHA claims take hours',
    outcome: 'Automated eligibility checks and claims submission. Track every claim from pre-auth to payment.',
  },
  {
    icon: WifiOff,
    problem: 'Internet outages halt operations',
    outcome: 'Full offline mode. Register patients, record encounters, generate invoices — even without connectivity.',
  },
  {
    icon: FileCheck,
    problem: 'Manual MOH reports',
    outcome: 'MOH 705A and 705B reports auto-generate from clinical data. Export or push directly to KHIS.',
  },
  {
    icon: Users,
    problem: 'No visibility into daily operations',
    outcome: 'Dashboard shows patients today, revenue, SHA claims status, and staff activity at a glance.',
  },
  {
    icon: Stethoscope,
    problem: 'Paper records are slow and error-prone',
    outcome: 'Digital patient records with auto-generated MRNs, allergy alerts, and encounter history.',
  },
];

const included = [
  'Patient registration & MRN generation',
  'Triage (KETA) & queue management',
  'Encounters, vitals, & clinical notes',
  'ICD-10 diagnosis coding',
  'Pharmacy & stock management',
  'Billing & invoicing (cash + SHA)',
  'SHA eligibility, pre-auth, & claims',
  'MOH 705A / 705B auto-reporting',
  'Offline-first — works without internet',
  'Role-based access control',
  'Kenya DPA 2019 compliant',
  'Up to 10 staff accounts',
];

export default function ClinicsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-hero py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-brand-teal uppercase tracking-wide mb-3">For Clinics</p>
            <h1 className="text-4xl font-extrabold tracking-tight text-brand-burgundy dark:text-white sm:text-5xl">
              Stop losing revenue to manual processes
            </h1>
            <p className="mt-6 text-lg text-muted-foreground dark:text-white/90">
              Vitora gives outpatient clinics and dispensaries a complete digital system — from registration to SHA claims — that works even when your internet doesn&apos;t.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact?type=pilot"
                className="inline-flex items-center justify-center rounded-lg bg-brand-burgundy px-7 py-3.5 text-base font-semibold text-white hover:bg-brand-burgundy-800 dark:bg-white dark:text-brand-burgundy dark:hover:bg-white/90 transition-colors shadow-lg"
              >
                Start Free Pilot
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center rounded-lg border-2 border-brand-teal px-7 py-3.5 text-base font-semibold text-brand-teal hover:bg-brand-teal/10 dark:border-white dark:text-white dark:hover:bg-white/10 transition-colors"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem → Outcome cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl">
              Real Problems, Real Outcomes
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {outcomes.map((o) => (
              <div key={o.problem} className="rounded-xl border bg-card p-6">
                <o.icon className="h-8 w-8 text-brand-teal mb-3" />
                <h3 className="font-semibold text-brand-burgundy dark:text-white mb-2">{o.problem}</h3>
                <p className="text-sm text-muted-foreground">{o.outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl">
                Everything Your Clinic Needs
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Starting from KES 15,000/month. Free 30-day pilot included.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-brand-teal mt-0.5 shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/pricing" className="text-sm font-medium text-brand-teal hover:underline">
                See full pricing details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl">
            Ready to Digitize Your Clinic?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground dark:text-white/90 max-w-2xl mx-auto">
            Start a free 30-day pilot. We handle setup, data migration, and training.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?type=pilot"
              className="inline-flex items-center justify-center rounded-lg bg-brand-burgundy px-8 py-4 text-base font-semibold text-white hover:bg-brand-burgundy-800 dark:bg-white dark:text-brand-burgundy dark:hover:bg-white/90 transition-colors shadow-lg"
            >
              Start Free Pilot
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-lg border-2 border-brand-teal px-8 py-4 text-base font-semibold text-brand-teal hover:bg-brand-teal/10 dark:border-white dark:text-white dark:hover:bg-white/10 transition-colors"
            >
              View Pricing
            </Link>
          </div>
          <div className="mt-4">
            <a
              href="https://wa.me/254717550482?text=Hi%2C%20I%20run%20a%20clinic%20and%20I%27d%20like%20to%20learn%20about%20Vitora"
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

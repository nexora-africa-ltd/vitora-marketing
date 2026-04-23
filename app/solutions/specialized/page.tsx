import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Eye, Bone, Activity, Ear, MessageCircle, Check, BriefcaseMedical } from 'lucide-react';

export const metadata: Metadata = {
  title: 'For Specialized Practices',
  description:
    'Configurable modules for dental, optical, physiotherapy, and allied health practices. SHA claims, billing, and compliance built in.',
};

const specialties = [
  {
    icon: Eye,
    title: 'Optical & Ophthalmology',
    description: 'Visual acuity tracking, prescription management, lens inventory, and SHA optical claims.',
  },
  {
    icon: Bone,
    title: 'Physiotherapy',
    description: 'Treatment session tracking, exercise plan templates, progress notes, and session-based billing.',
  },
  {
    icon: Activity,
    title: 'Dental',
    description: 'Dental charting, procedure tracking, material inventory, and SHA dental claims.',
  },
  {
    icon: Ear,
    title: 'Audiology & ENT',
    description: 'Audiometry records, hearing aid fitting notes, and follow-up scheduling.',
  },
  {
    icon: BriefcaseMedical,
    title: 'Allied Health',
    description: 'Nutrition, occupational therapy, speech therapy — configurable encounter forms for any specialty.',
  },
];

const features = [
  'Specialty-specific encounter templates',
  'Configurable form fields per practice type',
  'SHA claims for specialty services',
  'Billing & invoicing (cash + insurance)',
  'Patient records with full encounter history',
  'Appointment scheduling',
  'Offline-first — works without internet',
  'Role-based access control',
  'Kenya DPA 2019 compliant',
  'TibaBot AI clinical support (optional add-on)',
];

export default function SpecializedPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-hero py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-brand-teal uppercase tracking-wide mb-3">For Specialized Practices</p>
            <h1 className="text-4xl font-extrabold tracking-tight text-brand-burgundy dark:text-white sm:text-5xl">
              Your specialty. Your workflows. One system.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground dark:text-white/90">
              Vitora&apos;s configurable modules adapt to dental, optical, physiotherapy, and other specialized
              practices — with SHA integration and offline capability built in.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center rounded-lg bg-brand-burgundy px-7 py-3.5 text-base font-semibold text-white hover:bg-brand-burgundy-800 dark:bg-white dark:text-brand-burgundy dark:hover:bg-white/90 transition-colors shadow-lg"
              >
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact?type=pilot"
                className="inline-flex items-center justify-center rounded-lg border-2 border-brand-teal px-7 py-3.5 text-base font-semibold text-brand-teal hover:bg-brand-teal/10 dark:border-white dark:text-white dark:hover:bg-white/10 transition-colors"
              >
                Start a Pilot
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl">
              Supported Specialties
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Each practice type gets tailored encounter forms, billing codes, and workflows.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {specialties.map((s) => (
              <div key={s.title} className="rounded-xl border bg-card p-6">
                <s.icon className="h-8 w-8 text-brand-teal mb-3" />
                <h3 className="font-semibold text-brand-burgundy dark:text-white mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl">
                What&apos;s Included
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {features.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-brand-teal mt-0.5 shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/pricing" className="text-sm font-medium text-brand-teal hover:underline">
                See pricing for your practice →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl">
            Let&apos;s Tailor Vitora for Your Practice
          </h2>
          <p className="mt-4 text-lg text-muted-foreground dark:text-white/90 max-w-2xl mx-auto">
            Tell us about your specialty and we&apos;ll show you exactly how Vitora fits.
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
              href="/pricing"
              className="inline-flex items-center justify-center rounded-lg border-2 border-brand-teal px-8 py-4 text-base font-semibold text-brand-teal hover:bg-brand-teal/10 dark:border-white dark:text-white dark:hover:bg-white/10 transition-colors"
            >
              View Pricing
            </Link>
          </div>
          <div className="mt-4">
            <a
              href="https://wa.me/254717550482?text=Hi%2C%20I%20have%20a%20specialized%20practice%20and%20I%27d%20like%20to%20learn%20about%20Vitora"
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

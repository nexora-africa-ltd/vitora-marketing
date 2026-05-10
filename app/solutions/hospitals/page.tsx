import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowRight, Building2, Bed, FlaskConical, Pill, BarChart3, Shield, MessageCircle, Check, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'For Hospitals — Multi-Department Hospital Management',
  description:
    'Manage inpatient wards, lab workflows, pharmacy, and multi-department operations from one system. SHA claims, KHIS reporting, and compliance built in.',
  alternates: { canonical: '/solutions/hospitals' },
  keywords: [
    'hospital management system Kenya',
    'inpatient management software',
    'hospital billing software',
    'ward management system',
    'hospital lab system',
    'multi-department hospital software',
    'hospital software Nairobi',
    'HMIS for hospitals Kenya',
  ],
};

const capabilities = [
  {
    icon: Bed,
    title: 'Inpatient & Bed Management',
    description: 'Ward dashboards, bed occupancy, admissions, transfers, and discharge workflows. Auto-generated beds from ward capacity.',
  },
  {
    icon: FlaskConical,
    title: 'Laboratory',
    description: 'Order entry, sample tracking, result verification, and critical value alerts. Integrates with billing automatically.',
  },
  {
    icon: Pill,
    title: 'Pharmacy & Formulary',
    description: 'Prescription management, stock tracking, dispensing workflows, and drug interaction warnings via TibaBot AI.',
  },
  {
    icon: Users,
    title: 'Staff Scheduling',
    description: 'Weekly roster grid, 13 shift types, constraint-aware auto-fill, cross-facility conflict detection, and clock-in/out.',
  },
  {
    icon: BarChart3,
    title: 'Reporting & Analytics',
    description: 'Automated MOH 705A/B, 731. Real-time dashboards for occupancy, revenue, wait times. KHIS/DHIS2 push.',
  },
  {
    icon: Shield,
    title: 'Compliance & Audit',
    description: 'Full audit trail with 7-year retention. Active shift enforcement. MFA for senior roles. Kenya DPA 2019 compliant.',
  },
];

const included = [
  'Everything in the Clinic plan',
  'Inpatient wards & bed management',
  'Laboratory orders & results',
  'Radiology & imaging requests',
  'Multi-department scheduling',
  'Advanced RBAC & audit trail',
  'Staff rostering & shift management',
  'Cross-facility conflict detection',
  'KHIS / DHIS2 auto-reporting',
  'Up to 50 staff accounts',
  'On-site implementation support',
  'Dedicated onboarding specialist',
];

export default function HospitalsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 lg:py-20">
        <Image
          src="/assets/images/stock/hospital-team.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.15] dark:opacity-[0.20]"
          aria-hidden="true"
          priority
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80 dark:opacity-75" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-brand-teal uppercase tracking-wide mb-3">For Hospitals</p>
            <h1 className="text-4xl font-extrabold tracking-tight text-brand-burgundy dark:text-white sm:text-5xl">
              One system for every department
            </h1>
            <p className="mt-6 text-lg text-muted-foreground dark:text-white/90">
              Manage inpatient wards, lab, pharmacy, billing, and staff scheduling from a single platform — with full SHA integration and offline capability.
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
                href="/pricing"
                className="inline-flex items-center justify-center rounded-lg border-2 border-brand-teal px-7 py-3.5 text-base font-semibold text-brand-teal hover:bg-brand-teal/10 dark:border-white dark:text-white dark:hover:bg-white/10 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </section>

      {/* Capabilities */}
      <section className="py-16 bg-background fade-to-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl">
              Built for Multi-Department Operations
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {capabilities.map((c) => (
              <div key={c.title} className="rounded-xl border bg-card p-6">
                <c.icon className="h-8 w-8 text-brand-teal mb-3" />
                <h3 className="font-semibold text-brand-burgundy dark:text-white mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 bg-muted/50 fade-to-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl">
                Hospital Plan Includes
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Starting from KES 45,000/month. On-site implementation included.
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
                Compare all plans →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Integration callout */}
      <section className="py-16 bg-background fade-to-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-xl border bg-card p-8 flex flex-col md:flex-row gap-8 items-start">
              <Building2 className="h-12 w-12 text-brand-burgundy shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-brand-burgundy dark:text-white mb-2">
                  Multi-Facility? We&apos;ve Got You Covered
                </h3>
                <p className="text-muted-foreground mb-4">
                  Hospital groups and county health services can manage multiple facilities from a
                  central dashboard — with cross-facility scheduling, consolidated reporting, and
                  organization-wide analytics.
                </p>
                <Link
                  href="/contact?type=enterprise"
                  className="text-sm font-medium text-brand-teal hover:underline"
                >
                  Talk to us about Enterprise pricing →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Screenshots */}
      <section className="py-16 bg-muted/50 fade-to-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl">
              Built for Hospital-Scale Operations
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Real screenshots from the Vitora platform.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {[
              { src: '/assets/images/screenshots/admissions.png', label: 'Admissions & Inpatient', alt: 'Vitora admissions management with ward assignment' },
              { src: '/assets/images/screenshots/wards.png', label: 'Ward Management', alt: 'Vitora ward dashboards with bed occupancy tracking' },
              { src: '/assets/images/screenshots/laboratory.png', label: 'Laboratory', alt: 'Vitora laboratory module with order tracking and results' },
              { src: '/assets/images/screenshots/scheduling-roster.png', label: 'Staff Scheduling', alt: 'Vitora staff scheduling with weekly roster grid' },
              { src: '/assets/images/screenshots/analytics.png', label: 'Analytics & Reporting', alt: 'Vitora analytics dashboard with facility metrics' },
              { src: '/assets/images/screenshots/admin-overview.png', label: 'Admin Overview', alt: 'Vitora admin dashboard with organization management' },
            ].map((item) => (
              <div key={item.label} className="group">
                <div className="rounded-xl border bg-card shadow-card overflow-hidden group-hover:shadow-hover transition-shadow">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={1440}
                    height={900}
                    className="w-full h-auto"
                  />
                </div>
                <p className="mt-3 text-sm font-medium text-center text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-hero fade-from-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl">
            See Vitora in Action at Your Hospital
          </h2>
          <p className="mt-4 text-lg text-muted-foreground dark:text-white/90 max-w-2xl mx-auto">
            Get a personalized walkthrough with your departments and workflows.
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
              href="https://wa.me/254717550482?text=Hi%2C%20I%20manage%20a%20hospital%20and%20I%27d%20like%20to%20learn%20about%20Vitora"
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

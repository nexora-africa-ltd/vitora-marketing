import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Users,
  Stethoscope,
  Pill,
  TestTube,
  CreditCard,
  Bed,
  AlertCircle,
  Bot,
  ArrowRight,
  BarChart3,
  Globe,
  WifiOff,
  Shield,
  Clock,
  MessageCircle,
} from 'lucide-react';
import { SHALogo } from '@/components/icons/sha-icon';

export const metadata: Metadata = {
  title: 'Features — Clinic & Hospital Modules',
  description:
    'Simplify clinic management with faster registration, accurate billing, and real-time reporting. Triage, pharmacy, lab, inpatient, and AI — all built for Kenyan healthcare.',
  alternates: { canonical: '/features' },
  keywords: [
    'clinic management features',
    'patient registration system',
    'triage management system',
    'pharmacy management software',
    'laboratory information system',
    'hospital billing software Kenya',
    'clinical decision support',
    'MOH reporting automation',
  ],
};

const workflows = [
  {
    title: 'Patient Flow Management',
    problem: 'Patients wait too long and records get lost between departments.',
    modules: [
      {
        icon: Users,
        name: 'Patient Registration',
        points: ['Auto-generated MRNs (MRN-YYYYMMDD-XXXX)', 'Kenya location hierarchy (47 counties)', 'Emergency contacts & relationships', 'Sensitive patient access control (HIV, GBV)'],
      },
      {
        icon: AlertCircle,
        name: 'Triage',
        points: ['KETA color-coded priority system', 'Vitals-based severity scoring', 'Real-time queue with public display', 'Emergency alerts & critical SpO2 warnings'],
      },
      {
        icon: Clock,
        name: 'Queue & Scheduling',
        points: ['Room-aware clock-in for staff', 'Clinic session auto-open/close', 'Weekly roster grid with 13 shift types', 'Cross-facility conflict detection'],
      },
    ],
  },
  {
    title: 'Clinical Records',
    problem: 'Paper notes are slow, illegible, and impossible to search.',
    modules: [
      {
        icon: Stethoscope,
        name: 'Encounters & Vitals',
        points: ['SOAP-formatted clinical notes', 'Vitals recording & trending', 'ICD-10 diagnosis coding with search', 'Treatment plans & templates'],
      },
      {
        icon: Bed,
        name: 'Inpatient Management',
        points: ['Ward dashboards & bed occupancy', 'Admission / discharge / transfer', 'Auto-generated beds from ward capacity', 'Nursing notes & ward rounds'],
      },
    ],
  },
  {
    title: 'Billing & Revenue Cycle',
    problem: 'SHA claims take hours, and cash collections are hard to reconcile.',
    modules: [
      {
        icon: CreditCard,
        name: 'Billing & Invoicing',
        points: ['Auto-generated invoices from encounters', 'Payment recording (cash, M-Pesa, insurance)', 'Discounts & write-offs', 'Revenue dashboards'],
      },
      {
        icon: Shield,
        name: 'SHA Claims',
        points: ['All 15 DHA APIs integrated', 'Eligibility verification at registration', 'Pre-auth & claims submission', 'Real-time claim status tracking'],
      },
    ],
  },
  {
    title: 'Pharmacy & Lab',
    problem: 'Stock-outs, expired drugs, and lab turnaround times hurt patient care.',
    modules: [
      {
        icon: Pill,
        name: 'Pharmacy',
        points: ['Prescription management & dispensing', 'Batch tracking & expiry alerts', 'Stock levels & reorder points', 'Drug interaction warnings (AI)'],
      },
      {
        icon: TestTube,
        name: 'Laboratory',
        points: ['Order entry & sample tracking', 'Result verification workflows', 'Critical value alerts', 'Auto-billing on order completion'],
      },
    ],
  },
  {
    title: 'Reporting & Compliance',
    problem: 'MOH reports are manual. Auditors find gaps in data protection.',
    modules: [
      {
        icon: BarChart3,
        name: 'KHIS / DHIS2 Reporting',
        points: ['MOH 705A, 705B, 731 auto-generated', 'Push directly to KHIS', 'Custom dashboards & analytics', 'Facility-level & org-level views'],
      },
      {
        icon: Shield,
        name: 'Security & Audit',
        points: ['Kenya DPA 2019 compliant', 'Fernet (AES) encryption for PII', '7-year audit trail retention', 'Active shift enforcement for writes'],
      },
    ],
  },
  {
    title: 'AI Clinical Intelligence',
    problem: 'Clinicians need decision support at the point of care.',
    modules: [
      {
        icon: Bot,
        name: 'TibaBot AI',
        points: ['Drug interaction warnings', 'ICD-10 coding assistance', 'Care plan suggestions (KSTG-aligned)', 'Lab result interpretation'],
      },
      {
        icon: WifiOff,
        name: 'Offline-First Architecture',
        points: ['Full functionality without internet', 'Bi-directional sync', 'Conflict resolution on reconnect', 'Local SQLite + cloud PostgreSQL'],
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-brand-burgundy dark:text-white sm:text-5xl">
              Features Built Around Your Workflow
            </h1>
            <p className="mt-6 text-lg text-muted-foreground dark:text-white/90">
              Not just a list of modules — every feature solves a real operational problem Kenyan facilities face daily.
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </section>

      {/* Workflow sections */}
      {workflows.map((wf, i) => (
        <section key={wf.title} className={`py-16 ${i % 2 === 0 ? 'bg-background fade-to-muted' : 'bg-muted/50 fade-to-bg'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-brand-burgundy dark:text-white sm:text-3xl">
                  {wf.title}
                </h2>
                <p className="mt-2 text-muted-foreground">{wf.problem}</p>
              </div>
              <div className={`grid gap-6 ${wf.modules.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
                {wf.modules.map((mod) => {
                  const Icon = mod.icon;
                  return (
                    <div key={mod.name} className="rounded-xl border bg-card p-6 shadow-card hover:shadow-hover transition-shadow">
                      <div className="h-10 w-10 rounded-lg bg-brand-teal/10 flex items-center justify-center mb-4">
                        <Icon className="h-5 w-5 text-brand-teal" />
                      </div>
                      <h3 className="text-lg font-semibold text-brand-burgundy dark:text-white mb-3">{mod.name}</h3>
                      <ul className="space-y-2">
                        {mod.points.map((pt) => (
                          <li key={pt} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-brand-gold mr-2 mt-0.5">✓</span>
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Module Screenshots Gallery */}
      <section className="py-16 bg-background fade-to-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl">
              See the Modules in Action
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Real screenshots from the Vitora platform — not mockups.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            {[
              { src: '/assets/images/screenshots/patients-list.png', label: 'Patient Registration', alt: 'Vitora patient registration and records management' },
              { src: '/assets/images/screenshots/triage-queue.png', label: 'Triage & Queue', alt: 'Vitora KETA triage queue with color-coded priorities' },
              { src: '/assets/images/screenshots/billing.png', label: 'Billing & Invoicing', alt: 'Vitora billing module with invoicing and payment tracking' },
              { src: '/assets/images/screenshots/pharmacy.png', label: 'Pharmacy', alt: 'Vitora pharmacy management with prescriptions and stock' },
              { src: '/assets/images/screenshots/laboratory.png', label: 'Laboratory', alt: 'Vitora laboratory module with order tracking and results' },
              { src: '/assets/images/screenshots/scheduling-roster.png', label: 'Staff Scheduling', alt: 'Vitora staff scheduling with weekly roster grid' },
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

      {/* Integration callout */}
      <section className="py-16 bg-muted/50 fade-to-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl">
              Integrations
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="rounded-xl border bg-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <SHALogo size="lg" />
                <h3 className="font-semibold text-brand-burgundy dark:text-white">SHA / DHA</h3>
              </div>
              <p className="text-sm text-muted-foreground">All 15 Digital Health Agency APIs — eligibility, pre-auth, claims, status.</p>
            </div>
            <div className="rounded-xl border bg-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <Globe className="h-8 w-8 text-brand-teal" />
                <h3 className="font-semibold text-brand-burgundy dark:text-white">KHIS / DHIS2</h3>
              </div>
              <p className="text-sm text-muted-foreground">Automated MOH reporting — 705A, 705B, 731. Zero manual entry.</p>
            </div>
            <div className="rounded-xl border bg-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <CreditCard className="h-8 w-8 text-brand-gold" />
                <h3 className="font-semibold text-brand-burgundy dark:text-white">M-Pesa</h3>
              </div>
              <p className="text-sm text-muted-foreground">Direct payment processing for patient convenience and faster collections.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-hero fade-from-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl">
            Ready to See It in Action?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground dark:text-white/90 max-w-2xl mx-auto">
            Book a demo and we&apos;ll walk through the workflows that matter most to your facility.
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
              href="https://wa.me/254717550482?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20Vitora%20HMIS%20features"
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

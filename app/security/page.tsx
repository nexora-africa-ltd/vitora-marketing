import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Shield, Lock, Eye, Server, Clock, FileCheck, UserCheck, Database, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Security & Compliance',
  description:
    'How Vitora HMIS protects patient data. Kenya DPA 2019, encryption, RBAC, audit trails, and hosting details.',
};

const pillars = [
  {
    icon: Lock,
    title: 'Encryption at Rest & in Transit',
    description:
      'All patient PII (national ID, phone numbers) is encrypted with AES-128 via Fernet. API traffic is TLS 1.3. Database connections use SSL.',
  },
  {
    icon: UserCheck,
    title: 'Role-Based Access Control',
    description:
      'Granular RBAC with 12+ roles — from receptionist to org admin. Sensitive patient records (HIV, GBV) require explicit permission to view.',
  },
  {
    icon: Eye,
    title: 'Full Audit Trail',
    description:
      'Every data access, modification, and login is logged with user, IP, timestamp, and purpose. Logs are retained for 7 years per Kenya DPA 2019.',
  },
  {
    icon: Shield,
    title: 'MFA Enforcement',
    description:
      'TOTP-based multi-factor authentication is mandatory for admin and senior clinical roles. Configurable grace period for onboarding.',
  },
  {
    icon: Server,
    title: 'Secure Hosting',
    description:
      'Backend runs on Azure Container Apps with managed SSL. Database on Neon PostgreSQL (EU region). No patient data leaves the compliant zone.',
  },
  {
    icon: Database,
    title: 'Data Minimization & Consent',
    description:
      'Only necessary data is collected. Patient consent is tracked with timestamps. Data subject rights (export, deletion) are supported via API.',
  },
];

const compliance = [
  {
    regulation: 'Kenya Data Protection Act 2019',
    status: 'Compliant',
    details:
      'Purpose limitation, storage limitation (7-year audit retention), integrity & confidentiality (Fernet encryption), accountability (full audit trail), data subject rights.',
  },
  {
    regulation: 'SHA Digital Health Agency',
    status: 'Integrated',
    details:
      'All 15 DHA APIs. Secure token management, encrypted claim payloads, real-time eligibility verification.',
  },
  {
    regulation: 'FHIR R4 Interoperability',
    status: 'Supported',
    details:
      'Patient, Encounter, Observation, and other clinical resources exposed in FHIR R4 format for interoperability with third-party systems.',
  },
  {
    regulation: 'KHIS / DHIS2 Reporting',
    status: 'Automated',
    details:
      'MOH 705A, 705B, 731, and other mandatory reports generated automatically from clinical data. No manual entry required.',
  },
];

export default function SecurityPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-hero py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-brand-burgundy dark:text-white sm:text-5xl">
            Security &amp; Compliance
          </h1>
          <p className="mt-4 text-lg text-muted-foreground dark:text-white/90 max-w-2xl mx-auto">
            Patient data protection is not a feature — it&apos;s the foundation. Here&apos;s how Vitora keeps your facility compliant and your patients safe.
          </p>
        </div>
      </section>

      {/* Security pillars */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl">
              Six Pillars of Protection
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-xl border bg-card p-6">
                <p.icon className="h-8 w-8 text-brand-teal mb-4" />
                <h3 className="font-semibold text-brand-burgundy dark:text-white mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Shift Enforcement */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <Clock className="h-10 w-10 text-brand-gold shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-brand-burgundy dark:text-white">
                  Active Shift Enforcement
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Clinical write operations (creating encounters, prescriptions, lab orders) are only
                  allowed when the staff member has an active shift. This prevents unauthorized
                  after-hours data entry and ensures every clinical action is traceable to a
                  scheduled, clocked-in practitioner.
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  Admin roles (ADMIN, ORG-ADMIN, OWNER) are exempt to ensure operational continuity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance table */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl">
              Regulatory Compliance
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {compliance.map((c) => (
              <div key={c.regulation} className="rounded-xl border bg-card p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-brand-burgundy dark:text-white">
                    {c.regulation}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-success w-fit">
                    <FileCheck className="h-4 w-4" />
                    {c.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{c.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl">
            Questions About Security?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground dark:text-white/90 max-w-2xl mx-auto">
            Our team is happy to walk through our security practices, share our DPIA, or discuss
            your facility&apos;s specific compliance needs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-brand-burgundy px-8 py-4 text-base font-semibold text-white hover:bg-brand-burgundy-800 dark:bg-white dark:text-brand-burgundy dark:hover:bg-white/90 transition-colors shadow-lg"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center rounded-lg border-2 border-brand-teal px-8 py-4 text-base font-semibold text-brand-teal hover:bg-brand-teal/10 dark:border-white dark:text-white dark:hover:bg-white/10 transition-colors"
            >
              Book a Demo
            </Link>
          </div>
          <div className="mt-4">
            <a
              href="https://wa.me/254717550482?text=Hi%2C%20I%20have%20questions%20about%20Vitora%20HMIS%20security"
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

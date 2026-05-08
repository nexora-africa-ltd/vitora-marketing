import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Shield, Database, Smartphone, FileText, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Integrations — SHA, KHIS, M-Pesa & FHIR R4',
  description:
    'SHA eligibility and claims, KHIS/DHIS2 reporting, M-Pesa payments, and FHIR R4 interoperability. Vitora integrates with Kenya\'s national health infrastructure.',
  alternates: { canonical: '/integrations' },
  keywords: [
    'SHA integration software',
    'KHIS DHIS2 reporting',
    'M-Pesa healthcare payments',
    'FHIR R4 Kenya',
    'healthcare interoperability Kenya',
    'DHA API integration',
  ],
};

export default function IntegrationsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-brand-burgundy dark:text-white sm:text-5xl lg:text-6xl">
              Built for Kenya&apos;s Health Ecosystem
            </h1>
            <p className="mt-6 text-lg text-muted-foreground dark:text-white/90">
              Seamless integration with SHA, KHIS, M-Pesa, and more. 
              Vitora HMIS connects your facility to Kenya&apos;s healthcare infrastructure.
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </section>

      {/* SHA Integration */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center rounded-lg bg-brand-burgundy/10 px-3 py-1 text-sm font-medium text-brand-burgundy mb-4">
                <Shield className="h-4 w-4 mr-2" />
                SHA Integration
              </div>
              <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl mb-4">
                Social Health Authority (SHA) Ready
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Full integration with all 15 SHA Digital Health Agency APIs. 
                Automate eligibility verification, claims submission, and status tracking.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">✓</span>
                  <span className="text-muted-foreground">Real-time eligibility verification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">✓</span>
                  <span className="text-muted-foreground">Automated claims generation and submission</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">✓</span>
                  <span className="text-muted-foreground">Claims status tracking and reconciliation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">✓</span>
                  <span className="text-muted-foreground">Pre-authorization management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">✓</span>
                  <span className="text-muted-foreground">Comprehensive reporting and analytics</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border bg-card p-8 shadow-card">
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-success/10">
                  <p className="text-sm font-semibold text-success mb-1">Eligibility Status</p>
                  <p className="text-xs text-muted-foreground">Member: Active | Benefits: Inpatient, Outpatient</p>
                </div>
                <div className="p-4 rounded-lg bg-brand-teal/10">
                  <p className="text-sm font-semibold text-brand-teal mb-1">Claims Submitted</p>
                  <p className="text-xs text-muted-foreground">47 claims | KES 2,345,670 | 95% approval rate</p>
                </div>
                <div className="p-4 rounded-lg bg-brand-gold/10">
                  <p className="text-sm font-semibold text-brand-gold mb-1">Average Processing Time</p>
                  <p className="text-xs text-muted-foreground">3.2 days (60% faster than manual)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KHIS Integration */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-xl border bg-card p-8 shadow-card">
                <h3 className="text-lg font-semibold text-brand-burgundy dark:text-white mb-4">
                  Automated DHIS2 Reporting
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-background">
                    <span className="text-sm">MOH 705A - Outpatient</span>
                    <span className="text-xs text-success">✓ Synced</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-background">
                    <span className="text-sm">MOH 705B - Inpatient</span>
                    <span className="text-xs text-success">✓ Synced</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-background">
                    <span className="text-sm">MOH 731 - HIV Care</span>
                    <span className="text-xs text-success">✓ Synced</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-background">
                    <span className="text-sm">MOH 362 - Immunization</span>
                    <span className="text-xs text-success">✓ Synced</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center rounded-lg bg-brand-teal/10 px-3 py-1 text-sm font-medium text-brand-teal mb-4">
                <Database className="h-4 w-4 mr-2" />
                KHIS Integration
              </div>
              <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl mb-4">
                Kenya Health Information System (KHIS/DHIS2)
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Automatic reporting to Kenya&apos;s national health information system. 
                Zero manual data entry, 100% compliance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">✓</span>
                  <span className="text-muted-foreground">Automated MOH form generation and submission</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">✓</span>
                  <span className="text-muted-foreground">Real-time data synchronization with DHIS2</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">✓</span>
                  <span className="text-muted-foreground">Support for all standard MOH reporting forms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">✓</span>
                  <span className="text-muted-foreground">Validation and error checking before submission</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* M-Pesa Integration */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center rounded-lg bg-brand-gold/10 px-3 py-1 text-sm font-medium text-brand-gold mb-4">
                <Smartphone className="h-4 w-4 mr-2" />
                M-Pesa Payments
              </div>
              <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl mb-4">
                Mobile Money Integration
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Accept payments directly through M-Pesa. Faster collections, 
                better patient experience, automated reconciliation.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">✓</span>
                  <span className="text-muted-foreground">STK Push for seamless payment collection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">✓</span>
                  <span className="text-muted-foreground">Automatic receipt generation and SMS delivery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">✓</span>
                  <span className="text-muted-foreground">Real-time payment verification and reconciliation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">✓</span>
                  <span className="text-muted-foreground">Support for partial payments and installments</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border bg-card p-8 shadow-card">
              <div className="text-center mb-6">
                <p className="text-sm text-muted-foreground mb-2">Today&apos;s M-Pesa Collections</p>
                <p className="text-4xl font-bold text-brand-burgundy dark:text-white">KES 847,250</p>
                <p className="text-sm text-success mt-1">↑ 23% vs yesterday</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted">
                  <div>
                    <p className="text-sm font-medium">Transaction #12847</p>
                    <p className="text-xs text-muted-foreground">Outpatient Consultation</p>
                  </div>
                  <p className="text-sm font-semibold">KES 1,500</p>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted">
                  <div>
                    <p className="text-sm font-medium">Transaction #12846</p>
                    <p className="text-xs text-muted-foreground">Lab Tests</p>
                  </div>
                  <p className="text-sm font-semibold">KES 3,200</p>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted">
                  <div>
                    <p className="text-sm font-medium">Transaction #12845</p>
                    <p className="text-xs text-muted-foreground">Pharmacy - Medications</p>
                  </div>
                  <p className="text-sm font-semibold">KES 2,750</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Integrations */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl">
              And Many More
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Vitora HMIS is built to integrate with the tools you already use.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border bg-card p-6">
              <FileText className="h-8 w-8 text-brand-teal mb-3" />
              <h3 className="font-semibold text-brand-burgundy dark:text-white mb-2">
                FHIR API
              </h3>
              <p className="text-sm text-muted-foreground">
                Standard HL7 FHIR APIs for interoperability with other health systems.
              </p>
            </div>

            <div className="rounded-xl border bg-card p-6">
              <Database className="h-8 w-8 text-brand-teal mb-3" />
              <h3 className="font-semibold text-brand-burgundy dark:text-white mb-2">
                Lab Equipment
              </h3>
              <p className="text-sm text-muted-foreground">
                Direct integration with laboratory analyzers and diagnostic equipment.
              </p>
            </div>

            <div className="rounded-xl border bg-card p-6">
              <Smartphone className="h-8 w-8 text-brand-teal mb-3" />
              <h3 className="font-semibold text-brand-burgundy dark:text-white mb-2">
                SMS Gateway
              </h3>
              <p className="text-sm text-muted-foreground">
                Automated appointment reminders and patient notifications via SMS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl">
            See Our Integrations in Action
          </h2>
          <p className="mt-4 text-lg text-muted-foreground dark:text-white/90 max-w-2xl mx-auto">
            Schedule a demo to see how Vitora HMIS integrates seamlessly with Kenya&apos;s healthcare ecosystem.
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
              href="https://wa.me/254717550482?text=Hi%2C%20I%27d%20like%20to%20learn%20about%20Vitora%20HMIS%20integrations"
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

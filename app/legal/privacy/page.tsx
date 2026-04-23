import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Lock, Eye, Trash2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Vitora HMIS privacy policy. Learn how we handle and protect your data in compliance with the Kenya Data Protection Act 2019.',
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-brand-burgundy dark:text-white sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-6 text-lg text-muted-foreground dark:text-white/90">
              Last updated: April 2026
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert">
            <div className="grid gap-8 md:grid-cols-2 mb-12 not-prose">
              <div className="rounded-xl border bg-card p-6">
                <Shield className="h-8 w-8 text-brand-teal mb-3" />
                <h3 className="font-semibold text-brand-burgundy dark:text-white mb-2">Kenya DPA 2019 Compliant</h3>
                <p className="text-sm text-muted-foreground">Full compliance with the Kenya Data Protection Act 2019.</p>
              </div>
              <div className="rounded-xl border bg-card p-6">
                <Lock className="h-8 w-8 text-brand-teal mb-3" />
                <h3 className="font-semibold text-brand-burgundy dark:text-white mb-2">Encryption at Rest</h3>
                <p className="text-sm text-muted-foreground">Sensitive patient data is encrypted using industry-standard Fernet encryption.</p>
              </div>
              <div className="rounded-xl border bg-card p-6">
                <Eye className="h-8 w-8 text-brand-teal mb-3" />
                <h3 className="font-semibold text-brand-burgundy dark:text-white mb-2">Full Audit Trail</h3>
                <p className="text-sm text-muted-foreground">Every data access is logged and retained for 7 years per regulation.</p>
              </div>
              <div className="rounded-xl border bg-card p-6">
                <Trash2 className="h-8 w-8 text-brand-teal mb-3" />
                <h3 className="font-semibold text-brand-burgundy dark:text-white mb-2">Data Subject Rights</h3>
                <p className="text-sm text-muted-foreground">Patients can request access, correction, or deletion of their data.</p>
              </div>
            </div>

            <h2>1. Introduction</h2>
            <p>
              Nexora Africa Ltd (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates the Vitora HMIS platform. This Privacy Policy explains how we collect, use, and protect personal data in compliance with the Kenya Data Protection Act 2019 (DPA).
            </p>

            <h2>2. Data We Collect</h2>
            <p>Through Vitora HMIS, healthcare facilities may process:</p>
            <ul>
              <li><strong>Patient data:</strong> Names, date of birth, gender, contact information, national ID, medical records, and clinical encounters.</li>
              <li><strong>Staff data:</strong> Names, roles, credentials, shift schedules, and authentication information.</li>
              <li><strong>Facility data:</strong> Organization details, department structures, and operational configurations.</li>
              <li><strong>Marketing site data:</strong> Name, email, phone number, and facility information submitted through our contact and demo request forms.</li>
            </ul>

            <h2>3. How We Use Data</h2>
            <p>Data is processed for the following purposes:</p>
            <ul>
              <li>Providing healthcare management services to registered facilities.</li>
              <li>Compliance with SHA (Social Health Authority) reporting requirements.</li>
              <li>KHIS/DHIS2 mandatory health information reporting.</li>
              <li>Clinical decision support through TibaBot AI.</li>
              <li>Responding to demo requests and enquiries.</li>
            </ul>

            <h2>4. Data Protection Measures</h2>
            <ul>
              <li>Fernet field-level encryption for sensitive identifiers (national ID, phone numbers).</li>
              <li>JWT-based authentication with refresh token rotation.</li>
              <li>Role-based access control with sensitive patient filtering.</li>
              <li>Comprehensive audit logging with 7-year retention.</li>
              <li>Offline-first architecture ensures data remains within facility control.</li>
            </ul>

            <h2>5. Data Sharing</h2>
            <p>
              We do not sell personal data. Data may be shared with SHA and KHIS/DHIS2 as required by Kenyan law. Patient data processed by TibaBot AI remains within the system and is not sent to external servers.
            </p>

            <h2>6. Your Rights</h2>
            <p>Under the Kenya DPA 2019, data subjects have the right to:</p>
            <ul>
              <li>Access their personal data.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion of their data (subject to legal retention requirements).</li>
              <li>Object to processing of their data.</li>
              <li>Data portability.</li>
            </ul>

            <h2>7. Contact Us</h2>
            <p>
              For privacy-related enquiries, contact our Data Protection Officer at{' '}
              <a href="mailto:privacy@nexora.africa">privacy@nexora.africa</a>.
            </p>

            <div className="mt-12 not-prose">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-brand-burgundy px-6 py-3 text-base font-semibold text-white hover:bg-brand-burgundy-800 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

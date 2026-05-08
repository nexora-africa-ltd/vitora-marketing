import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Vitora HMIS terms of service. Review the terms governing use of the Vitora hospital management platform.',
  alternates: { canonical: '/legal/terms' },
};

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-brand-burgundy dark:text-white sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-6 text-lg text-muted-foreground dark:text-white/90">
              Last updated: April 2026
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Vitora HMIS platform (&quot;the Service&quot;), provided by Nexora Africa Ltd (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), you agree to be bound by these Terms of Service. If you do not agree, do not use the Service.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              Vitora HMIS is an offline-first hospital management information system designed for healthcare facilities in Kenya. The Service includes patient management, clinical encounter recording, pharmacy, laboratory, billing, SHA integration, and AI-powered clinical decision support.
            </p>

            <h2>3. User Accounts</h2>
            <ul>
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>You must provide accurate and complete information during registration.</li>
              <li>You are responsible for all activities that occur under your account.</li>
              <li>You must notify us immediately of any unauthorized use of your account.</li>
            </ul>

            <h2>4. Acceptable Use</h2>
            <p>You agree to use the Service only for lawful purposes and in accordance with:</p>
            <ul>
              <li>All applicable Kenyan laws and regulations.</li>
              <li>The Kenya Data Protection Act 2019.</li>
              <li>Professional healthcare standards and ethics.</li>
              <li>SHA and KHIS/DHIS2 reporting requirements.</li>
            </ul>

            <h2>5. Data Ownership</h2>
            <p>
              Healthcare facilities retain full ownership of their patient data and clinical records. We act as a data processor on your behalf. Data is stored in compliance with the Kenya Data Protection Act 2019, with encryption at rest for sensitive fields.
            </p>

            <h2>6. AI-Powered Features</h2>
            <p>
              TibaBot AI provides clinical decision support suggestions based on Kenya&apos;s clinical guidelines. AI outputs are advisory only and do not constitute medical advice. Healthcare professionals are responsible for all clinical decisions.
            </p>

            <h2>7. Service Availability</h2>
            <p>
              Vitora HMIS is designed as an offline-first system. Core functionality remains available during internet outages. We aim for high availability for cloud synchronization services but do not guarantee uninterrupted service.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Nexora Africa Ltd shall not be liable for any indirect, incidental, or consequential damages arising from the use of the Service. Clinical decisions remain the responsibility of qualified healthcare professionals.
            </p>

            <h2>9. Termination</h2>
            <p>
              Either party may terminate the service agreement with 30 days written notice. Upon termination, we will provide a full data export in standard formats and securely delete facility data within 90 days, subject to legal retention requirements.
            </p>

            <h2>10. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. We will notify active users of material changes via email at least 30 days before they take effect.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These Terms are governed by the laws of Kenya. Any disputes shall be resolved through the courts of Kenya.
            </p>

            <h2>12. Contact</h2>
            <p>
              For questions about these Terms, contact us at{' '}
              <a href="mailto:legal@nexora.africa">legal@nexora.africa</a>.
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

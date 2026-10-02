// Copyright (c) 2026 Nexora Consulting Ltd. All rights reserved.
/**
 * Public privacy notice for Vitora HMIS.
 * Published at /legal/privacy; no runtime inputs or arguments are required.
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { Scale, Shield, UserRoundCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Notice',
  description:
    'Vitora HMIS privacy notice for healthcare facilities, patients, users, and business contacts under the Kenya Data Protection Act 2019.',
  alternates: { canonical: '/legal/privacy' },
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-brand-burgundy dark:text-white sm:text-5xl">
              Privacy Notice
            </h1>
            <p className="mt-6 text-lg text-muted-foreground dark:text-white/90">
              Effective date: 2 October 2026
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-slate mx-auto max-w-3xl dark:prose-invert">
            <div className="not-prose mb-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border bg-card p-6">
                <Shield className="mb-3 h-8 w-8 text-brand-teal" />
                <h2 className="mb-2 font-semibold text-brand-burgundy dark:text-white">Privacy by design</h2>
                <p className="text-sm text-muted-foreground">We apply safeguards appropriate to the data, service, and risks involved.</p>
              </div>
              <div className="rounded-xl border bg-card p-6">
                <Scale className="mb-3 h-8 w-8 text-brand-teal" />
                <h2 className="mb-2 font-semibold text-brand-burgundy dark:text-white">Your rights</h2>
                <p className="text-sm text-muted-foreground">You can ask the responsible healthcare facility about your personal data and how it is used.</p>
              </div>
              <div className="rounded-xl border bg-card p-6">
                <UserRoundCheck className="mb-3 h-8 w-8 text-brand-teal" />
                <h2 className="mb-2 font-semibold text-brand-burgundy dark:text-white">Clear responsibilities</h2>
                <p className="text-sm text-muted-foreground">Healthcare facilities normally control care records. Nexora processes them on documented instructions.</p>
              </div>
            </div>

            <p className="lead">
              This notice explains how personal data is handled when you use Vitora HMIS or interact with Nexora Consulting Ltd. It supports transparency under the Kenya Data Protection Act, 2019 and applicable regulations. It does not replace the privacy notice issued by your healthcare facility.
            </p>

            <h2>1. Who Is Responsible for Your Data?</h2>
            <p>
              Vitora HMIS is software provided by Nexora Consulting Ltd (&quot;Nexora&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). The healthcare facility that registers you, provides your care, or employs you normally decides why and how your clinical or staff data is processed. That facility is normally the <strong>data controller</strong> for that information.
            </p>
            <p>
              Nexora normally acts as a <strong>data processor</strong> when it hosts, supports, or otherwise processes personal data for a healthcare facility under that facility&apos;s instructions. Nexora may act as a separate controller for its own business-contact, marketing, account-administration, licensing, security, and recruitment information. The applicable agreement and deployment documentation define the relevant roles.
            </p>

            <h2>2. Personal Data We May Process</h2>
            <p>The categories of data depend on the modules enabled by a healthcare facility and the services you use. They may include:</p>
            <ul>
              <li><strong>Patient and care data:</strong> identification and contact details, demographics, next-of-kin details, appointments, encounters, diagnoses, treatment, prescriptions, laboratory and imaging information, billing and claims information, consent records, and communications.</li>
              <li><strong>Special-category and sensitive data:</strong> health information, disability information, biometrics where an enabled workflow requires it, and other sensitive information required for care or a lawful health-service purpose.</li>
              <li><strong>Staff and user data:</strong> name, work contact details, role, professional credentials, facility and department, authentication and MFA data, schedules, access activity, and audit records.</li>
              <li><strong>Technical and security data:</strong> device, browser, IP address, log, session, API, sync, and security-event information.</li>
              <li><strong>Business-contact data:</strong> name, work email, telephone number, facility or organization, enquiry, demo request, and correspondence details provided to Nexora.</li>
            </ul>

            <h2>3. Sources of Personal Data</h2>
            <ul>
              <li>Directly from you, your representative, a clinician, facility staff, or an authorized user.</li>
              <li>From records created during care, healthcare administration, claims, scheduling, or system use.</li>
              <li>From authorized healthcare, payer, public-health, laboratory, or integration partners where a facility has enabled that exchange.</li>
              <li>From our website, correspondence, and demo or contact forms when you contact Nexora.</li>
            </ul>

            <h2>4. Why Personal Data Is Used</h2>
            <p>Healthcare facilities determine the lawful basis for their care-related processing. Depending on the activity, personal data may be processed to:</p>
            <ul>
              <li>Register patients, provide, document, coordinate, and improve healthcare services.</li>
              <li>Manage appointments, referrals, prescriptions, diagnostics, admissions, payments, claims, and facility operations.</li>
              <li>Meet applicable legal, public-health, reporting, safeguarding, financial, and regulatory obligations.</li>
              <li>Protect patient safety, prevent fraud, investigate incidents, secure systems, and maintain auditability.</li>
              <li>Provide the Vitora service, technical support, account administration, licensing, and service communications.</li>
              <li>Respond to enquiries and demo requests. We do not use patient-care data for Nexora marketing.</li>
            </ul>
            <p>
              Where consent is the appropriate lawful basis, the responsible healthcare facility should explain the specific purpose, any optional nature of the processing, and how consent can be withdrawn. Withdrawing consent does not necessarily affect processing required for care, legal obligations, or another valid lawful basis.
            </p>

            <h2>5. Recipients and Sharing</h2>
            <p>We do not sell personal data. A healthcare facility may share data only where it has a lawful and documented reason to do so. Depending on the enabled service, recipients may include:</p>
            <ul>
              <li>Authorized clinicians, facility staff, representatives, receiving healthcare providers, and auditors.</li>
              <li>Government, public-health, health-information-exchange, payer, or claims bodies where required or authorized, including SHA/DHA, Ministry of Health, KHIS/DHIS2, and other applicable recipients.</li>
              <li>Laboratories, imaging providers, payment providers, insurers, and integration partners selected by the facility.</li>
              <li>Nexora&apos;s authorized hosting, storage, synchronisation, communications, support, security, and AI service providers, subject to applicable contractual and security controls.</li>
            </ul>

            <h2>6. International Transfers and Data Location</h2>
            <p>
              Vitora deployments can use cloud, synchronisation, support, and integration services. Some providers or support arrangements may process data outside Kenya. Before an overseas transfer is enabled, the responsible controller must assess the transfer, identify the destination and recipient, apply required safeguards and approvals, and provide any required information or obtain consent.
            </p>
            <p>
              Your healthcare facility can provide the current list of providers, processing locations, and transfer safeguards for its deployment. Nexora will assist the facility with that information where Nexora is acting as processor.
            </p>

            <h2>7. Security</h2>
            <p>
              We use technical and organizational measures designed to protect personal data against unauthorized or unlawful access, disclosure, alteration, loss, and destruction. These measures may include role-based access controls, authentication and multi-factor authentication, encryption for selected data, tenant separation, audit logging, monitoring, secure development practices, backups, and incident-response procedures.
            </p>
            <p>No system can guarantee absolute security. We continuously assess and improve safeguards in line with the risks presented by the relevant processing activity.</p>

            <h2>8. Retention and Deletion</h2>
            <p>
              Personal data is retained only for as long as necessary for its purpose, applicable healthcare, tax, claims, employment, legal, and regulatory requirements, and the establishment, exercise, or defence of legal claims. The responsible healthcare facility sets applicable clinical-record retention periods and legal holds.
            </p>
            <p>
              Retention periods differ by record type. Requests to erase data are assessed against applicable legal and clinical retention obligations; a request does not require deletion where retention remains necessary or lawful. Backups, offline devices, and downstream recipients may require controlled expiry, reconciliation, or restoration safeguards before a deletion is fully reflected.
            </p>

            <h2>9. Your Rights and Choices</h2>
            <p>Subject to the Kenya Data Protection Act and applicable exceptions, you may have the right to:</p>
            <ul>
              <li>Be informed about how your personal data is used.</li>
              <li>Access your personal data and obtain a copy.</li>
              <li>Request correction of inaccurate, outdated, incomplete, or misleading information.</li>
              <li>Request restriction, object to certain processing, or withdraw consent for consent-based processing.</li>
              <li>Request erasure where the legal requirements are met.</li>
              <li>Request portability of eligible personal data in a structured, commonly used format.</li>
              <li>Request meaningful human intervention and reconsideration where a significant decision is made solely by automated means.</li>
              <li>Complain to the Office of the Data Protection Commissioner (ODPC).</li>
            </ul>
            <p>
              If you are a patient or facility staff member, submit your request first to the healthcare facility that controls your record. The facility can verify your identity and coordinate a complete response. Nexora will assist its customer as required by the applicable processing agreement. If your request concerns Nexora&apos;s own business-contact data, contact us directly using the details below.
            </p>

            <h2>10. Children, Representatives, and Sensitive Care</h2>
            <p>
              Healthcare facilities are responsible for applying appropriate safeguards for children, people who need a representative, and people receiving sensitive care. This includes verifying parental, guardian, or other representative authority where applicable, considering the best interests of the child, and using safe communication methods for sensitive services.
            </p>

            <h2>11. AI-Assisted Features</h2>
            <p>
              Some facilities may enable AI-assisted features, such as clinical decision support. These tools are intended to support qualified professionals and do not replace clinical judgment. Facilities must assess the lawful basis, data flows, recipients, and safeguards before enabling an AI feature. Where a significant decision would otherwise be made solely by automated means, you may request meaningful human review as applicable.
            </p>

            <h2>12. Personal-Data Breaches</h2>
            <p>
              Nexora maintains incident-response procedures for suspected and confirmed personal-data breaches. Where Nexora acts as processor, it will notify the responsible controller without undue delay in accordance with the applicable agreement and law. The controller, with DPO advice, determines whether notification to the ODPC or affected people is required. Where a qualifying breach presents a real risk of harm, the controller must notify the ODPC without delay and within the applicable legal timeframe.
            </p>

            <h2>13. Contact and Complaints</h2>
            <p>
              For a request about a healthcare or staff record, contact the privacy contact or Data Protection Officer at the healthcare facility that collected the information. For questions about Nexora&apos;s own processing, or to ask us to route a request to the appropriate facility, contact us at{' '}
              <a href="mailto:privacy@nexora.africa">privacy@nexora.africa</a>.
            </p>
            <p>
              You may also lodge a complaint with the <a href="https://www.odpc.go.ke/" target="_blank" rel="noopener noreferrer">Office of the Data Protection Commissioner</a>. We encourage you to contact the responsible facility or Nexora first so that we can try to resolve your concern promptly.
            </p>

            <h2>14. Changes to This Notice</h2>
            <p>
              We may update this notice when our services, legal obligations, or data practices change. We will publish the revised version on this page with a new effective date. A healthcare facility may provide an additional deployment-specific privacy notice where its processing, integrations, data locations, or legal obligations require more detail.
            </p>

            <div className="not-prose mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-brand-burgundy px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-burgundy-800"
              >
                Contact Us
              </Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

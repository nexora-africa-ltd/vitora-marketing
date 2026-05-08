import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Shield, Heart, Building2, Stethoscope, BriefcaseMedical, Clock, CreditCard, WifiOff, FileCheck, Users, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Digitize Your Clinic in Days, Not Months',
  description:
    'Streamline patient flow, billing, and records with a healthcare system built for Kenyan clinics. Offline-first. SHA-compliant. Start a guided pilot today.',
  alternates: { canonical: '/' },
  keywords: [
    'clinic management system Kenya',
    'digitize clinic operations',
    'HMIS Kenya',
    'patient management system',
    'SHA claims automation',
    'offline healthcare software',
    'reduce patient waiting time',
    'clinic billing software Kenya',
  ],
};
import { SHALogo } from '@/components/icons/sha-icon';
import { DashboardPreview } from '@/components/dashboard-preview';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero — outcome-driven, 5-second test */}
      <section className="relative bg-gradient-hero overflow-hidden">
        <div className="relative container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Copy */}
            <div className="max-w-xl animate-fade-up">
              <h1 className="text-4xl font-extrabold tracking-tight text-brand-burgundy dark:text-white sm:text-5xl">
                Digitize your clinic in&nbsp;days, not&nbsp;months
              </h1>
              <p className="mt-6 text-lg text-muted-foreground dark:text-white/90">
                Vitora is a hospital management system built for Kenyan clinics and hospitals — streamlining
                patient flow, billing, SHA claims, and compliance. Works offline. Always.
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
              <div className="mt-6">
                <a
                  href="https://wa.me/254717550482?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20Vitora%20HMIS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-brand-teal transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  Or chat with us on WhatsApp
                </a>
              </div>
            </div>

            {/* Dashboard screenshot */}
            <div className="animate-fade-up" style={{ animationDelay: '0.15s' }}>
              <DashboardPreview />
            </div>
          </div>
        </div>
      </section>

      {/* Segmentation — who is this for */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl">
              Built for Your Facility
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Whether you run a clinic, hospital, or specialized practice — Vitora adapts to your workflows.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Link href="/solutions/clinics" className="group rounded-xl border bg-card p-8 shadow-card hover:shadow-hover transition-all hover:border-brand-teal">
              <Stethoscope className="h-10 w-10 text-brand-teal mb-4" />
              <h3 className="text-xl font-semibold text-brand-burgundy dark:text-white mb-2 group-hover:text-brand-teal transition-colors">For Clinics</h3>
              <p className="text-muted-foreground text-sm mb-4">Stop losing revenue to manual processes. Digitize patient records, automate SHA claims, and reduce wait times.</p>
              <span className="text-sm font-medium text-brand-teal inline-flex items-center">Learn more <ArrowRight className="ml-1 h-4 w-4" /></span>
            </Link>
            <Link href="/solutions/hospitals" className="group rounded-xl border bg-card p-8 shadow-card hover:shadow-hover transition-all hover:border-brand-teal">
              <Building2 className="h-10 w-10 text-brand-burgundy mb-4" />
              <h3 className="text-xl font-semibold text-brand-burgundy dark:text-white mb-2 group-hover:text-brand-teal transition-colors">For Hospitals</h3>
              <p className="text-muted-foreground text-sm mb-4">Manage inpatient wards, lab workflows, pharmacy, and multi-department operations from one system.</p>
              <span className="text-sm font-medium text-brand-teal inline-flex items-center">Learn more <ArrowRight className="ml-1 h-4 w-4" /></span>
            </Link>
            <Link href="/solutions/specialized" className="group rounded-xl border bg-card p-8 shadow-card hover:shadow-hover transition-all hover:border-brand-teal">
              <BriefcaseMedical className="h-10 w-10 text-brand-gold mb-4" />
              <h3 className="text-xl font-semibold text-brand-burgundy dark:text-white mb-2 group-hover:text-brand-teal transition-colors">For Specialized Practices</h3>
              <p className="text-muted-foreground text-sm mb-4">Dental, optical, physiotherapy, and allied health — configurable modules for specialty workflows.</p>
              <span className="text-sm font-medium text-brand-teal inline-flex items-center">Learn more <ArrowRight className="ml-1 h-4 w-4" /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Problem → Outcome */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl">Operational Problems We Solve</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border bg-card p-6">
              <WifiOff className="h-8 w-8 text-brand-burgundy mb-3" />
              <h3 className="font-semibold text-brand-burgundy dark:text-white mb-2">Internet goes down, work stops</h3>
              <p className="text-sm text-muted-foreground">Vitora works fully offline. Data syncs automatically when connectivity returns.</p>
            </div>
            <div className="rounded-xl border bg-card p-6">
              <CreditCard className="h-8 w-8 text-brand-teal mb-3" />
              <h3 className="font-semibold text-brand-burgundy dark:text-white mb-2">SHA claims take hours to reconcile</h3>
              <p className="text-sm text-muted-foreground">Automated eligibility checks, claims submission, and status tracking — all 15 SHA APIs.</p>
            </div>
            <div className="rounded-xl border bg-card p-6">
              <Clock className="h-8 w-8 text-brand-gold mb-3" />
              <h3 className="font-semibold text-brand-burgundy dark:text-white mb-2">Patients wait too long</h3>
              <p className="text-sm text-muted-foreground">KETA triage, real-time queue management, and digital workflows cut wait times dramatically.</p>
            </div>
            <div className="rounded-xl border bg-card p-6">
              <FileCheck className="h-8 w-8 text-brand-teal mb-3" />
              <h3 className="font-semibold text-brand-burgundy dark:text-white mb-2">MOH reports are manual and error-prone</h3>
              <p className="text-sm text-muted-foreground">Automated KHIS/DHIS2 reporting — MOH 705A, 705B, 731, and more. Zero manual entry.</p>
            </div>
            <div className="rounded-xl border bg-card p-6">
              <Shield className="h-8 w-8 text-brand-burgundy mb-3" />
              <h3 className="font-semibold text-brand-burgundy dark:text-white mb-2">Paper records aren&apos;t secure</h3>
              <p className="text-sm text-muted-foreground">AES encryption, role-based access, full audit trail — Kenya DPA 2019 compliant.</p>
            </div>
            <div className="rounded-xl border bg-card p-6">
              <Heart className="h-8 w-8 text-brand-gold mb-3" />
              <h3 className="font-semibold text-brand-burgundy dark:text-white mb-2">Clinical decisions lack support</h3>
              <p className="text-sm text-muted-foreground">TibaBot AI: drug interaction warnings, ICD-10 coding, and treatment suggestions from Kenya&apos;s guidelines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4 text-center">
            <div>
              <div className="text-4xl font-bold text-brand-burgundy dark:text-white">15</div>
              <div className="mt-2 text-sm text-muted-foreground">SHA APIs Integrated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-burgundy dark:text-white">47</div>
              <div className="mt-2 text-sm text-muted-foreground">Counties Supported</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-burgundy dark:text-white">100%</div>
              <div className="mt-2 text-sm text-muted-foreground">Offline Capable</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-burgundy dark:text-white">&lt; 2 wks</div>
              <div className="mt-2 text-sm text-muted-foreground">Typical Implementation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust layer */}
      <section className="relative overflow-hidden py-16">
        <Image
          src="/assets/images/stock/doctor-patient.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.15] dark:opacity-[0.20]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-muted/70 dark:bg-background/70" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl">Trusted by Healthcare Providers</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            <div className="rounded-xl border bg-card/80 backdrop-blur-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <SHALogo size="lg" />
                <span className="font-semibold text-brand-burgundy dark:text-white">SHA Compliant</span>
              </div>
              <p className="text-sm text-muted-foreground">All 15 Digital Health Agency APIs integrated. Eligibility, claims, pre-auth — automated.</p>
            </div>
            <div className="rounded-xl border bg-card/80 backdrop-blur-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-8 w-8 text-brand-teal" />
                <span className="font-semibold text-brand-burgundy dark:text-white">DPA 2019 Compliant</span>
              </div>
              <p className="text-sm text-muted-foreground">Fernet encryption, 7-year audit retention, consent tracking. Meets every requirement.</p>
            </div>
            <div className="rounded-xl border bg-card/80 backdrop-blur-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-8 w-8 text-brand-gold" />
                <span className="font-semibold text-brand-burgundy dark:text-white">Local Support</span>
              </div>
              <p className="text-sm text-muted-foreground">Nairobi-based team. On-site implementation. Swahili &amp; English support.</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/security" className="text-sm font-medium text-brand-teal hover:underline">View our Security &amp; Compliance practices →</Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl">Ready to Digitize Your Facility?</h2>
          <p className="mt-4 text-lg text-muted-foreground dark:text-white/90 max-w-2xl mx-auto">See Vitora in action with a personalized demo — or start a no-commitment pilot.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo" className="inline-flex items-center justify-center rounded-lg bg-brand-burgundy px-8 py-4 text-base font-semibold text-white hover:bg-brand-burgundy-800 dark:bg-white dark:text-brand-burgundy dark:hover:bg-white/90 transition-colors shadow-lg">
              Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/pricing" className="inline-flex items-center justify-center rounded-lg border-2 border-brand-teal px-8 py-4 text-base font-semibold text-brand-teal hover:bg-brand-teal/10 dark:border-white dark:text-white dark:hover:bg-white/10 transition-colors">View Pricing</Link>
          </div>
          <div className="mt-4">
            <a href="https://wa.me/254717550482?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20Vitora%20HMIS" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground dark:text-white/70 hover:text-brand-teal transition-colors">
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

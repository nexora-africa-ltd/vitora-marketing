import Link from 'next/link';
import { ArrowRight, Zap, Heart, BrainCircuit, Globe } from 'lucide-react';
import { KenyaIcon } from '@/components/icons/kenya-icon';
import { SHALogo } from '@/components/icons/sha-icon';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero overflow-hidden">
        <div className="relative container mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-brand-burgundy dark:text-white sm:text-5xl lg:text-6xl animate-fade-up">
              Built for Care Without Limits
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground dark:text-white/90 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
              The offline-first hospital management system designed for Kenya&apos;s healthcare infrastructure. 
              SHA-compliant. AI-powered. Always available.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center rounded-lg bg-brand-burgundy px-8 py-4 text-base font-semibold text-white hover:bg-brand-burgundy-800 dark:bg-white dark:text-brand-burgundy dark:hover:bg-white/90 transition-colors shadow-lg"
              >
                Request a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center justify-center rounded-lg border-2 border-brand-teal px-8 py-4 text-base font-semibold text-brand-teal hover:bg-brand-teal/10 dark:border-white dark:text-white dark:hover:bg-white/10 transition-colors"
              >
                Explore Features
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex flex-col items-center">
                <SHALogo size="lg" className="mb-2" />
                <p className="text-sm font-medium">SHA Compliant</p>
              </div>
              <div className="flex flex-col items-center">
                <Globe className="h-8 w-8 text-brand-gold mb-2" />
                <p className="text-sm font-medium">Offline-First</p>
              </div>
              <div className="flex flex-col items-center">
                <BrainCircuit className="h-8 w-8 text-brand-gold mb-2" />
                <p className="text-sm font-medium">AI-Powered</p>
              </div>
              <div className="flex flex-col items-center">
                <KenyaIcon size={32} className="mb-2" />
                <p className="text-sm font-medium">Kenya-Built</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl">
              Healthcare Doesn&apos;t Stop When Internet Does
            </h2>
            <p className="mt-4 text-lg text-slate">
              Vitora HMIS keeps your facility running smoothly — online or offline. 
              Full SHA integration, AI clinical support, and rock-solid compliance.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Pain Point Cards */}
            <div className="rounded-xl border bg-card p-6 shadow-card hover:shadow-hover transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-brand-burgundy/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-brand-burgundy" />
              </div>
              <h3 className="text-xl font-semibold text-brand-burgundy dark:text-white mb-2">
                Works Offline
              </h3>
              <p className="text-muted-foreground">
                No internet? No problem. Full functionality continues during outages. 
                Data syncs automatically when connectivity returns.
              </p>
            </div>

            <div className="rounded-xl border bg-card p-6 shadow-card hover:shadow-hover transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-brand-teal/10 flex items-center justify-center mb-4">
                <SHALogo size="lg" />
              </div>
              <h3 className="text-xl font-semibold text-brand-burgundy dark:text-white mb-2">
                SHA Ready
              </h3>
              <p className="text-muted-foreground">
                Seamless integration with all 15 SHA Digital Health Agency APIs. 
                Eligibility checks, claims submission, and tracking — all automated.
              </p>
            </div>

            <div className="rounded-xl border bg-card p-6 shadow-card hover:shadow-hover transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-brand-gold/10 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-brand-gold" />
              </div>
              <h3 className="text-xl font-semibold text-brand-burgundy dark:text-white mb-2">
                AI-Assisted Care
              </h3>
              <p className="text-muted-foreground">
                TibaBot AI provides clinical decision support, ICD-10 coding assistance, 
                and drug interaction warnings — all based on Kenya&apos;s clinical guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/50">
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
              <div className="text-4xl font-bold text-brand-burgundy dark:text-white">100%</div>
              <div className="mt-2 text-sm text-muted-foreground">Kenya DPA Compliant</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl">
            Ready to Transform Your Healthcare Facility?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground dark:text-white/90 max-w-2xl mx-auto">
            Join leading healthcare facilities across Kenya in delivering better care with Vitora HMIS.
          </p>
          <div className="mt-8">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center rounded-lg bg-brand-burgundy px-8 py-4 text-base font-semibold text-white hover:bg-brand-burgundy-800 dark:bg-white dark:text-brand-burgundy dark:hover:bg-white/90 transition-colors shadow-lg"
            >
              Schedule Your Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

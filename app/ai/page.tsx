import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Bot, Brain, FileCheck, AlertTriangle, MessageCircle } from 'lucide-react';
import { TibaBotPreview } from '@/components/tibabot-preview';

export const metadata: Metadata = {
  title: 'TibaBot AI',
  description:
    'AI-powered clinical decision support for Kenyan healthcare. Drug interactions, ICD-10 coding, care plans — aligned with Kenya STG.',
};

export default function AIPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="max-w-xl">
              <div className="inline-flex items-center rounded-full bg-brand-burgundy/10 dark:bg-white/10 px-4 py-2 text-sm font-medium text-brand-burgundy dark:text-white mb-6">
                <Bot className="h-4 w-4 mr-2" />
                Powered by TibaBot AI
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-brand-burgundy dark:text-white sm:text-5xl lg:text-6xl">
                Clinical Intelligence for Kenya
              </h1>
              <p className="mt-6 text-lg text-muted-foreground dark:text-white/90">
                AI-powered clinical decision support built on Kenya&apos;s own treatment guidelines. 
                Safer care, faster workflows, better outcomes.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center rounded-lg bg-brand-burgundy px-7 py-3.5 text-base font-semibold text-white hover:bg-brand-burgundy-800 dark:bg-white dark:text-brand-burgundy dark:hover:bg-white/90 transition-colors shadow-lg"
                >
                  See TibaBot in Action
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.15s' }}>
              <TibaBotPreview />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl">
              AI That Understands Kenyan Healthcare
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              TibaBot supports healthcare providers by referencing publicly available Kenyan clinical materials and commonly recognized local treatment frameworks to deliver relevant, contextual assistance.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border bg-card p-8 shadow-card hover:shadow-hover transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-brand-teal/10 flex items-center justify-center mb-4">
                <FileCheck className="h-6 w-6 text-brand-teal" />
              </div>
              <h3 className="text-xl font-semibold text-brand-burgundy dark:text-white mb-2">
                ICD-10 Coding Assistant
              </h3>
              <p className="text-muted-foreground mb-4">
                Automatically suggests accurate ICD-10 codes based on clinical notes and diagnoses. 
                Saves time and improves billing accuracy.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">•</span>
                  Context-aware code suggestions
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">•</span>
                  Multiple code recommendations with confidence scores
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">•</span>
                  Learns from your facility&apos;s coding patterns
                </li>
              </ul>
            </div>

            <div className="rounded-xl border bg-card p-8 shadow-card hover:shadow-hover transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-brand-burgundy/10 flex items-center justify-center mb-4">
                <AlertTriangle className="h-6 w-6 text-brand-burgundy" />
              </div>
              <h3 className="text-xl font-semibold text-brand-burgundy dark:text-white mb-2">
                Drug Interaction Warnings
              </h3>
              <p className="text-muted-foreground mb-4">
                Real-time alerts for potential drug-drug interactions, contraindications, 
                and allergy conflicts before prescriptions are issued.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">•</span>
                  Checks against patient allergies and current medications
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">•</span>
                  Severity ratings for each interaction
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">•</span>
                  Alternative medication suggestions
                </li>
              </ul>
            </div>

            <div className="rounded-xl border bg-card p-8 shadow-card hover:shadow-hover transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-brand-gold/10 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-brand-gold" />
              </div>
              <h3 className="text-xl font-semibold text-brand-burgundy dark:text-white mb-2">
                Clinical Decision Support
              </h3>
              <p className="text-muted-foreground mb-4">
                Evidence-based treatment recommendations aligned with Kenya Standard Treatment Guidelines 
                and WHO protocols.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">•</span>
                  Diagnosis-specific treatment pathways
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">•</span>
                  Dosage calculations and recommendations
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">•</span>
                  Red flag symptom detection
                </li>
              </ul>
            </div>

            <div className="rounded-xl border bg-card p-8 shadow-card hover:shadow-hover transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-success/10 flex items-center justify-center mb-4">
                <Bot className="h-6 w-6 text-success" />
              </div>
              <h3 className="text-xl font-semibold text-brand-burgundy dark:text-white mb-2">
                Natural Language Queries
              </h3>
              <p className="text-muted-foreground mb-4">
                Ask TibaBot questions in plain English about medications, conditions, 
                or treatment protocols — get instant, accurate answers.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">•</span>
                  Fast lookup of drug information
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">•</span>
                  Treatment guideline references
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">•</span>
                  Differential diagnosis assistance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl mb-4">
              Built on Trusted Foundations
            </h2>
            <p className="text-lg text-muted-foreground">
              TibaBot&apos;s clinical intelligence is grounded in established standards
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 text-center">
            <div className="rounded-xl border bg-card p-8">
              <div className="text-4xl font-bold text-brand-burgundy dark:text-white mb-2">KSTG</div>
              <div className="text-sm text-muted-foreground">Built on Kenya Standard Treatment Guidelines</div>
            </div>
            <div className="rounded-xl border bg-card p-8">
              <div className="text-4xl font-bold text-brand-burgundy dark:text-white mb-2">ICD-10</div>
              <div className="text-sm text-muted-foreground">AI-assisted diagnosis coding</div>
            </div>
            <div className="rounded-xl border bg-card p-8">
              <div className="text-4xl font-bold text-brand-burgundy dark:text-white mb-2">Real-time</div>
              <div className="text-sm text-muted-foreground">Drug interaction checking at the point of care</div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Privacy */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl mb-6">
              Built with Safety & Privacy in Mind
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-teal/10 flex items-center justify-center mt-1">
                  <span className="text-brand-teal text-sm">✓</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-brand-burgundy dark:text-white mb-1">
                    Clinician Always in Control
                  </h3>
                  <p className="text-muted-foreground">
                    TibaBot provides suggestions, not decisions. Healthcare providers review 
                    and approve all AI recommendations.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-teal/10 flex items-center justify-center mt-1">
                  <span className="text-brand-teal text-sm">✓</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-brand-burgundy dark:text-white mb-1">
                    Patient Data Privacy
                  </h3>
                  <p className="text-muted-foreground">
                    All data is encrypted and processed locally. No patient information 
                    is sent to external servers.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-teal/10 flex items-center justify-center mt-1">
                  <span className="text-brand-teal text-sm">✓</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-brand-burgundy dark:text-white mb-1">
                    Continuous Learning
                  </h3>
                  <p className="text-muted-foreground">
                    TibaBot improves over time, learning from aggregate usage patterns 
                    while maintaining individual privacy.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-teal/10 flex items-center justify-center mt-1">
                  <span className="text-brand-teal text-sm">✓</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-brand-burgundy dark:text-white mb-1">
                    Regulatory Compliance
                  </h3>
                  <p className="text-muted-foreground">
                    Fully compliant with Kenya Data Protection Act and healthcare regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl">
            Experience TibaBot in Your Demo
          </h2>
          <p className="mt-4 text-lg text-muted-foreground dark:text-white/90 max-w-2xl mx-auto">
            See how AI-powered clinical support can transform your facility&apos;s workflows.
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
              href="https://wa.me/254717550482?text=Hi%2C%20I%27d%20like%20to%20learn%20about%20TibaBot%20AI"
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

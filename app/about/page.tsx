import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Target, Users, Globe, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Nexora Africa builds offline-first healthcare technology for Kenyan facilities. Nairobi-based team, local support.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-brand-burgundy dark:text-white sm:text-5xl lg:text-6xl">
              Built for Kenya&apos;s Healthcare
            </h1>
            <p className="mt-6 text-lg text-muted-foreground dark:text-white/90">
              Nexora Africa is dedicated to creating technology that empowers healthcare 
              providers across Kenya to deliver better care.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              To make world-class healthcare technology accessible to every healthcare 
              facility in Kenya, regardless of size or location.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-lg bg-brand-teal/10 flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-brand-teal" />
              </div>
              <h3 className="text-xl font-semibold text-brand-burgundy dark:text-white mb-2">
                Purpose-Built
              </h3>
              <p className="text-muted-foreground">
                Designed specifically for Kenya&apos;s healthcare infrastructure, 
                regulations, and workflows.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-lg bg-brand-gold/10 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-brand-gold" />
              </div>
              <h3 className="text-xl font-semibold text-brand-burgundy dark:text-white mb-2">
                User-Centered
              </h3>
              <p className="text-muted-foreground">
                Built with healthcare workers, for healthcare workers. 
                Every feature addresses real challenges.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-lg bg-brand-burgundy/10 flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-brand-burgundy" />
              </div>
              <h3 className="text-xl font-semibold text-brand-burgundy dark:text-white mb-2">
                Locally Supported
              </h3>
              <p className="text-muted-foreground">
                Based in Kenya with local support teams who understand 
                your challenges and speak your language.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl">
              Our Values
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="rounded-xl border bg-card p-6">
              <h3 className="text-lg font-semibold text-brand-burgundy dark:text-white mb-2">
                Patient-First
              </h3>
              <p className="text-muted-foreground">
                Every feature, every decision is made with patient care and safety as the top priority.
              </p>
            </div>

            <div className="rounded-xl border bg-card p-6">
              <h3 className="text-lg font-semibold text-brand-burgundy dark:text-white mb-2">
                Reliability
              </h3>
              <p className="text-muted-foreground">
                Healthcare can&apos;t wait. Our systems are built to work always, even offline.
              </p>
            </div>

            <div className="rounded-xl border bg-card p-6">
              <h3 className="text-lg font-semibold text-brand-burgundy dark:text-white mb-2">
                Innovation
              </h3>
              <p className="text-muted-foreground">
                We leverage cutting-edge technology like AI to solve real healthcare challenges.
              </p>
            </div>

            <div className="rounded-xl border bg-card p-6">
              <h3 className="text-lg font-semibold text-brand-burgundy dark:text-white mb-2">
                Transparency
              </h3>
              <p className="text-muted-foreground">
                Open communication, clear pricing, and honest about what we can and can&apos;t do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Nexora Africa was founded with a simple observation: Kenya&apos;s healthcare system 
                deserves technology that works as hard as its healthcare workers do.
              </p>
              <p>
                Too many facilities struggle with systems that don&apos;t understand their needs, 
                can&apos;t handle connectivity challenges, or fail to integrate with Kenya&apos;s 
                national health infrastructure like SHA and KHIS.
              </p>
              <p>
                Vitora HMIS was built from the ground up to solve these problems. It&apos;s offline-first 
                by design, SHA-compliant from day one, and built with input from healthcare workers 
                across Kenya.
              </p>
              <p>
                Today, we&apos;re proud to support healthcare facilities in delivering better care 
                to their communities, with technology that truly works for them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl">
            Join Us in Transforming Healthcare
          </h2>
          <p className="mt-4 text-lg text-muted-foreground dark:text-white/90 max-w-2xl mx-auto">
            Let&apos;s work together to bring world-class healthcare technology to every 
            facility in Kenya.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center rounded-lg bg-brand-burgundy px-8 py-4 text-base font-semibold text-white hover:bg-brand-burgundy-800 dark:bg-white dark:text-brand-burgundy dark:hover:bg-white/90 transition-colors shadow-lg"
            >
              Request Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-brand-teal px-8 py-4 text-base font-semibold text-brand-teal hover:bg-brand-teal/10 dark:border-white dark:text-white dark:hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
          <div className="mt-4">
            <a
              href="https://wa.me/254717550482?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20Vitora%20HMIS"
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

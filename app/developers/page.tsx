import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Code, BookOpen, Server } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Developers',
  description: 'Vitora HMIS developer resources. API documentation, integration guides, and technical information.',
};

export default function DevelopersPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-brand-burgundy dark:text-white sm:text-5xl lg:text-6xl">
              Developer Resources
            </h1>
            <p className="mt-6 text-lg text-muted-foreground dark:text-white/90">
              Integrate with Vitora HMIS using our APIs and developer tools.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="rounded-xl border bg-card p-8 shadow-card hover:shadow-hover transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-brand-teal/10 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-brand-teal" />
              </div>
              <h3 className="text-xl font-semibold text-brand-burgundy dark:text-white mb-2">
                REST API
              </h3>
              <p className="text-muted-foreground mb-4">
                Full REST API built on Django REST Framework with JWT authentication, pagination, and filtering.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">&#10003;</span>
                  Patient management endpoints
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">&#10003;</span>
                  Clinical encounters and vitals
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">&#10003;</span>
                  Scheduling and shift management
                </li>
              </ul>
            </div>

            <div className="rounded-xl border bg-card p-8 shadow-card hover:shadow-hover transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-brand-burgundy/10 flex items-center justify-center mb-4">
                <Server className="h-6 w-6 text-brand-burgundy" />
              </div>
              <h3 className="text-xl font-semibold text-brand-burgundy dark:text-white mb-2">
                FHIR R4
              </h3>
              <p className="text-muted-foreground mb-4">
                HL7 FHIR R4 interoperability for seamless data exchange with other health systems.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">&#10003;</span>
                  Standard FHIR resources
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">&#10003;</span>
                  Kenya-specific profiles
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">&#10003;</span>
                  HIE integration support
                </li>
              </ul>
            </div>

            <div className="rounded-xl border bg-card p-8 shadow-card hover:shadow-hover transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-brand-gold/10 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-brand-gold" />
              </div>
              <h3 className="text-xl font-semibold text-brand-burgundy dark:text-white mb-2">
                Documentation
              </h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive guides for integration, deployment, and configuration.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">&#10003;</span>
                  Getting started guides
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">&#10003;</span>
                  API reference
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">&#10003;</span>
                  Integration examples
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Developer documentation and API access are available to registered facilities and integration partners.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-brand-burgundy px-8 py-4 text-base font-semibold text-white hover:bg-brand-burgundy-800 transition-colors shadow-lg"
            >
              Request API Access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

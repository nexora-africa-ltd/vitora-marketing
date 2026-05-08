import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Code, BookOpen, Server, Shield, Webhook, Database, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Developers — API & Integration Docs',
  description: 'Vitora HMIS developer resources. REST API, FHIR R4 interoperability, WebSocket events, and integration guides for healthcare developers.',
  alternates: { canonical: '/developers' },
};

const apiEndpoints = [
  { method: 'POST', path: '/api/token/', description: 'JWT authentication (username or email)' },
  { method: 'GET', path: '/api/patients/', description: 'List patients (paginated, filterable)' },
  { method: 'POST', path: '/api/patients/', description: 'Register new patient (auto-generates MRN)' },
  { method: 'GET', path: '/api/encounters/', description: 'List clinical encounters' },
  { method: 'POST', path: '/api/encounters/', description: 'Create encounter with vitals' },
  { method: 'GET', path: '/api/locations/counties/', description: 'Kenya 47-county hierarchy' },
];

export default function DevelopersPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-hero py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-brand-burgundy dark:text-white sm:text-5xl">
              Developer Resources
            </h1>
            <p className="mt-6 text-lg text-muted-foreground dark:text-white/90">
              Build on top of Vitora HMIS with our REST API, FHIR R4 resources, and real-time WebSocket events.
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </section>

      {/* API Overview */}
      <section className="py-16 bg-background fade-to-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
            <div className="rounded-xl border bg-card p-6 shadow-card hover:shadow-hover transition-shadow">
              <Code className="h-8 w-8 text-brand-teal mb-4" />
              <h3 className="text-lg font-semibold text-brand-burgundy dark:text-white mb-2">REST API</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Django REST Framework with JWT auth, cursor pagination, filtering, and field-level permissions.
              </p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>✓ Patients, Encounters, Pharmacy, Lab, Billing</li>
                <li>✓ Scheduling & shift management</li>
                <li>✓ SHA eligibility & claims APIs</li>
                <li>✓ Audit logging on every operation</li>
              </ul>
            </div>

            <div className="rounded-xl border bg-card p-6 shadow-card hover:shadow-hover transition-shadow">
              <Server className="h-8 w-8 text-brand-burgundy mb-4" />
              <h3 className="text-lg font-semibold text-brand-burgundy dark:text-white mb-2">FHIR R4</h3>
              <p className="text-sm text-muted-foreground mb-4">
                HL7 FHIR R4 interoperability for HIE integration and cross-system data exchange.
              </p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>✓ Patient, Encounter, Observation resources</li>
                <li>✓ Kenya-specific profiles</li>
                <li>✓ Bundle & search operations</li>
                <li>✓ HAPI FHIR tested</li>
              </ul>
            </div>

            <div className="rounded-xl border bg-card p-6 shadow-card hover:shadow-hover transition-shadow">
              <Webhook className="h-8 w-8 text-brand-gold mb-4" />
              <h3 className="text-lg font-semibold text-brand-burgundy dark:text-white mb-2">Real-Time Events</h3>
              <p className="text-sm text-muted-foreground mb-4">
                WebSocket channels for live notifications, queue updates, and critical alerts.
              </p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>✓ Django Channels (ASGI)</li>
                <li>✓ Domain event publishing</li>
                <li>✓ Triage queue updates</li>
                <li>✓ Critical lab value alerts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Endpoints */}
      <section className="py-16 bg-muted/50 fade-to-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-burgundy dark:text-white mb-8 text-center">Sample API Endpoints</h2>
            <div className="rounded-xl border bg-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="px-4 py-3 text-left font-medium text-muted-foreground">Method</th>
                      <th className="px-4 py-3 text-left font-medium text-muted-foreground">Endpoint</th>
                      <th className="px-4 py-3 text-left font-medium text-muted-foreground">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {apiEndpoints.map((ep) => (
                      <tr key={ep.path + ep.method} className="border-b last:border-0">
                        <td className="px-4 py-3">
                          <span className={`inline-block rounded px-2 py-0.5 text-xs font-bold ${ep.method === 'GET' ? 'bg-brand-teal/10 text-brand-teal' : 'bg-brand-gold/10 text-brand-gold'}`}>
                            {ep.method}
                          </span>
                        </td>
                        <td className="px-4 py-3 font-mono text-xs">{ep.path}</td>
                        <td className="px-4 py-3 text-muted-foreground">{ep.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground text-center">
              Full API documentation with 80+ endpoints available to integration partners.
            </p>
          </div>
        </div>
      </section>

      {/* Auth & Security */}
      <section className="py-16 bg-background fade-to-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="rounded-xl border bg-card p-6">
              <Shield className="h-8 w-8 text-brand-teal mb-3" />
              <h3 className="font-semibold text-brand-burgundy dark:text-white mb-2">Authentication</h3>
              <p className="text-sm text-muted-foreground">
                JWT (access + refresh tokens) with httpOnly cookie support. Login by username or email.
                MFA enforcement for privileged roles. Active shift enforcement for clinical write operations.
              </p>
            </div>
            <div className="rounded-xl border bg-card p-6">
              <Database className="h-8 w-8 text-brand-burgundy mb-3" />
              <h3 className="font-semibold text-brand-burgundy dark:text-white mb-2">Offline Sync</h3>
              <p className="text-sm text-muted-foreground">
                Bi-directional sync. Client reads from local SQLite, writes via REST API.
                Automatic conflict resolution on reconnect. 18 synced tables across 3 scopes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-hero fade-from-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl">
            Ready to Integrate?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground dark:text-white/90 max-w-2xl mx-auto">
            API documentation and sandbox access are available to registered facilities and integration partners.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?type=developer"
              className="inline-flex items-center justify-center rounded-lg bg-brand-burgundy px-8 py-4 text-base font-semibold text-white hover:bg-brand-burgundy-800 dark:bg-white dark:text-brand-burgundy dark:hover:bg-white/90 transition-colors shadow-lg"
            >
              Request API Access
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
              href="https://wa.me/254717550482?text=Hi%2C%20I%27m%20a%20developer%20interested%20in%20Vitora%20HMIS%20API%20access"
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

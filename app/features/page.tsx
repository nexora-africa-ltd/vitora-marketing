import Link from 'next/link';
import { 
  Users, 
  Stethoscope, 
  Pill, 
  TestTube, 
  CreditCard, 
  Bed, 
  AlertCircle,
  Bot,
  ArrowRight 
} from 'lucide-react';

const features = [
  {
    icon: Users,
    name: 'Patient Management',
    description: 'Every patient, every detail, always secure.',
    details: [
      'Comprehensive patient registration and demographics',
      'Medical history tracking and allergies',
      'Document management and attachments',
      'Family member linking and relationships',
    ],
  },
  {
    icon: Stethoscope,
    name: 'Clinical Encounters',
    description: 'From vitals to diagnosis in one seamless flow.',
    details: [
      'SOAP-formatted clinical notes',
      'Vitals recording and trending',
      'ICD-10 diagnosis coding with AI assistance',
      'Treatment plans and prescriptions',
    ],
  },
  {
    icon: Pill,
    name: 'Pharmacy',
    description: 'Dispense with confidence. Track every batch.',
    details: [
      'Inventory management with batch tracking',
      'Prescription fulfillment and dispensing',
      'Drug interaction warnings',
      'Expiry alerts and stock management',
    ],
  },
  {
    icon: TestTube,
    name: 'Laboratory',
    description: 'Results you can trust, delivered faster.',
    details: [
      'Test ordering and tracking',
      'Results entry and validation',
      'Reference ranges and flagging',
      'Integration with lab equipment',
    ],
  },
  {
    icon: CreditCard,
    name: 'Billing & SHA',
    description: 'Bill accurately. Get paid faster. SHA-ready.',
    details: [
      'Automated SHA eligibility verification',
      'Claims generation and submission',
      'Payment processing and receipts',
      'Revenue cycle management',
    ],
  },
  {
    icon: Bed,
    name: 'Inpatient Management',
    description: 'Every bed accounted for. Every shift covered.',
    details: [
      'Bed management and occupancy',
      'Admission and discharge workflows',
      'Ward rounds and nursing notes',
      'Transfer management',
    ],
  },
  {
    icon: AlertCircle,
    name: 'Triage',
    description: 'The right patient, the right priority, every time.',
    details: [
      'KETA color-coded priority system',
      'Vitals-based severity scoring',
      'Queue management',
      'Emergency alerts and notifications',
    ],
  },
  {
    icon: Bot,
    name: 'TibaBot AI',
    description: 'Clinical intelligence, powered by Kenya\'s own guidelines.',
    details: [
      'AI-powered clinical decision support',
      'ICD-10 coding assistance',
      'Drug interaction checking',
      'Kenya clinical guidelines integration',
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Complete Hospital Management
            </h1>
            <p className="mt-6 text-lg text-white/90">
              Every module you need to run a modern healthcare facility. 
              Built for Kenya, designed for reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.name}
                  className="rounded-xl border bg-card p-8 shadow-card hover:shadow-hover transition-shadow"
                >
                  <div className="h-12 w-12 rounded-lg bg-brand-teal/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-brand-teal" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-burgundy dark:text-white mb-2">
                    {feature.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-brand-gold mr-2">✓</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl">
              Seamlessly Integrated
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              All modules work together, sharing data in real-time for a complete view of patient care.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border bg-card p-6">
              <h3 className="font-semibold text-brand-burgundy dark:text-white mb-2">
                SHA Integration
              </h3>
              <p className="text-sm text-muted-foreground">
                Automatic eligibility verification, claims submission, and status tracking for all 15 SHA APIs.
              </p>
            </div>
            <div className="rounded-xl border bg-card p-6">
              <h3 className="font-semibold text-brand-burgundy dark:text-white mb-2">
                KHIS/DHIS2 Reporting
              </h3>
              <p className="text-sm text-muted-foreground">
                Automated health information reporting to Kenya&apos;s national system with zero manual entry.
              </p>
            </div>
            <div className="rounded-xl border bg-card p-6">
              <h3 className="font-semibold text-brand-burgundy dark:text-white mb-2">
                M-Pesa Payments
              </h3>
              <p className="text-sm text-muted-foreground">
                Direct payment processing through M-Pesa for patient convenience and faster collections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to See It in Action?
          </h2>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
            Schedule a demo to see how Vitora HMIS can transform your healthcare facility.
          </p>
          <div className="mt-8">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-brand-burgundy hover:bg-white/90 transition-colors shadow-lg"
            >
              Schedule Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

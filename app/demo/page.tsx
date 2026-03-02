'use client';

import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function DemoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    facility: '',
    facilityType: '',
    role: '',
    preferredDate: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send to an API
    console.log('Demo request submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              See Vitora HMIS in Action
            </h1>
            <p className="mt-6 text-lg text-white/90">
              Schedule a personalized demo and discover how Vitora HMIS can transform 
              your healthcare facility.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Request Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* What to Expect */}
            <div>
              <h2 className="text-2xl font-bold text-brand-burgundy dark:text-white mb-6">
                What to Expect
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-teal mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-brand-burgundy dark:text-white">
                      Personalized Walkthrough
                    </h3>
                    <p className="text-muted-foreground">
                      We&apos;ll tailor the demo to your facility&apos;s specific needs and workflows.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-teal mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-brand-burgundy dark:text-white">
                      Live System Access
                    </h3>
                    <p className="text-muted-foreground">
                      Experience the actual software with sample patient data and realistic scenarios.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-teal mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-brand-burgundy dark:text-white">
                      SHA Integration Demo
                    </h3>
                    <p className="text-muted-foreground">
                      See how eligibility verification and claims submission work in real-time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-teal mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-brand-burgundy dark:text-white">
                      Offline Functionality
                    </h3>
                    <p className="text-muted-foreground">
                      We&apos;ll demonstrate how the system continues working during internet outages.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-teal mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-brand-burgundy dark:text-white">
                      Q&A Session
                    </h3>
                    <p className="text-muted-foreground">
                      Ask anything about features, pricing, implementation, or support.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-brand-teal mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-brand-burgundy dark:text-white">
                      Next Steps Discussion
                    </h3>
                    <p className="text-muted-foreground">
                      Learn about implementation timelines, training, and getting started.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 rounded-xl border bg-card">
                <p className="text-sm text-muted-foreground">
                  <strong>Duration:</strong> 45-60 minutes<br />
                  <strong>Format:</strong> Virtual or in-person (Nairobi)<br />
                  <strong>Cost:</strong> Free, no obligation
                </p>
              </div>
            </div>

            {/* Request Form */}
            <div>
              <div className="rounded-xl border bg-card p-8 shadow-card">
                <h2 className="text-2xl font-bold text-brand-burgundy dark:text-white mb-6">
                  Request Your Demo
                </h2>
                
                {submitted ? (
                  <div className="rounded-lg bg-success/10 border border-success/20 p-6 text-center">
                    <CheckCircle className="h-12 w-12 text-success mx-auto mb-4" />
                    <p className="text-success font-semibold mb-2">Demo Request Received!</p>
                    <p className="text-muted-foreground">
                      Thank you for your interest. Our team will contact you within 24 hours 
                      to schedule your personalized demo.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="facility" className="block text-sm font-medium mb-2">
                        Healthcare Facility *
                      </label>
                      <input
                        type="text"
                        id="facility"
                        name="facility"
                        required
                        value={formData.facility}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="facilityType" className="block text-sm font-medium mb-2">
                        Facility Type *
                      </label>
                      <select
                        id="facilityType"
                        name="facilityType"
                        required
                        value={formData.facilityType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                      >
                        <option value="">Select facility type</option>
                        <option value="hospital">Hospital</option>
                        <option value="clinic">Clinic</option>
                        <option value="health-center">Health Center</option>
                        <option value="dispensary">Dispensary</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="role" className="block text-sm font-medium mb-2">
                        Your Role *
                      </label>
                      <input
                        type="text"
                        id="role"
                        name="role"
                        required
                        placeholder="e.g., Hospital Administrator, IT Manager"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-medium mb-2">
                        Preferred Demo Date
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Additional Notes
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        placeholder="Any specific features or questions you'd like to focus on?"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-lg bg-brand-burgundy px-6 py-3 text-base font-semibold text-white hover:bg-brand-burgundy-800 transition-colors"
                    >
                      Request Demo
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    facility: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send to an API
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
              Get in Touch
            </h1>
            <p className="mt-6 text-lg text-white/90">
              Have questions? We&apos;re here to help. Reach out and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-brand-burgundy dark:text-white mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-lg bg-brand-teal/10 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-brand-teal" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-brand-burgundy dark:text-white">
                      Email
                    </h3>
                    <p className="mt-1 text-muted-foreground">info@nexora.africa</p>
                    <p className="text-muted-foreground">support@nexora.africa</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-lg bg-brand-gold/10 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-brand-gold" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-brand-burgundy dark:text-white">
                      Phone
                    </h3>
                    <p className="mt-1 text-muted-foreground">+254 XXX XXX XXX</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-lg bg-brand-burgundy/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-brand-burgundy" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-brand-burgundy dark:text-white">
                      Office
                    </h3>
                    <p className="mt-1 text-muted-foreground">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 rounded-xl border bg-card">
                <h3 className="text-lg font-semibold text-brand-burgundy dark:text-white mb-2">
                  Business Hours
                </h3>
                <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM EAT</p>
                <p className="text-muted-foreground">Saturday: 9:00 AM - 1:00 PM EAT</p>
                <p className="text-muted-foreground">Sunday: Closed</p>
                <p className="text-sm text-muted-foreground mt-4">
                  For urgent support issues, please use our 24/7 support line.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="rounded-xl border bg-card p-8 shadow-card">
                <h2 className="text-2xl font-bold text-brand-burgundy dark:text-white mb-6">
                  Send Us a Message
                </h2>
                
                {submitted ? (
                  <div className="rounded-lg bg-success/10 border border-success/20 p-6 text-center">
                    <p className="text-success font-semibold mb-2">Thank you for contacting us!</p>
                    <p className="text-muted-foreground">
                      We&apos;ve received your message and will get back to you within 24 hours.
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
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="facility" className="block text-sm font-medium mb-2">
                        Healthcare Facility
                      </label>
                      <input
                        type="text"
                        id="facility"
                        name="facility"
                        value={formData.facility}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-lg bg-brand-burgundy px-6 py-3 text-base font-semibold text-white hover:bg-brand-burgundy-800 transition-colors"
                    >
                      Send Message
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

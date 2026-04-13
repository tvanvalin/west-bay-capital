"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/data";
import { AnimateIn } from "@/components/AnimateIn";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission — replace with Formspree or server action
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-white overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Decorative top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-copper)]/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — Info */}
          <AnimateIn direction="left">
            <div>
              <span className="text-[var(--color-copper-dark)] text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
                Get Started
              </span>
              <h2
                id="contact-heading"
                className="font-heading text-4xl md:text-5xl font-semibold text-[var(--color-navy)] mb-6"
              >
                Let&rsquo;s Fund
                <br />
                Your Next Deal
              </h2>
              <p className="text-lg text-[var(--color-gray-600)] mb-10 max-w-md">
                Tell us about your project and a member of our originations team
                will respond within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--color-navy)]/5">
                    <Phone className="h-5 w-5 text-[var(--color-navy)]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--color-gray-600)]">
                      Phone
                    </p>
                    <a
                      href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`}
                      className="text-[var(--color-navy)] font-semibold hover:text-[var(--color-copper-dark)] transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--color-navy)]/5">
                    <Mail className="h-5 w-5 text-[var(--color-navy)]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--color-gray-600)]">
                      Email
                    </p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-[var(--color-navy)] font-semibold hover:text-[var(--color-copper-dark)] transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--color-navy)]/5">
                    <MapPin className="h-5 w-5 text-[var(--color-navy)]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--color-gray-600)]">
                      Office
                    </p>
                    <p className="text-[var(--color-navy)] font-semibold">
                      {siteConfig.address.street}
                      <br />
                      {siteConfig.address.city}, {siteConfig.address.state}{" "}
                      {siteConfig.address.zip}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Right — Form */}
          <AnimateIn direction="right" delay={0.15}>
            <div className="rounded-xl bg-[var(--color-gray-100)] p-8 md:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-600 mb-4" />
                  <h3 className="font-heading text-2xl font-semibold text-[var(--color-navy)] mb-2">
                    Message Sent
                  </h3>
                  <p className="text-[var(--color-gray-600)]">
                    Our team will be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-[var(--color-gray-700)] mb-1.5"
                      >
                        First Name
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        className="w-full rounded-md border border-[var(--color-gray-200)] bg-white px-4 py-3 text-[var(--color-gray-900)] placeholder:text-[var(--color-gray-500)] focus:border-[var(--color-copper)] focus:ring-2 focus:ring-[var(--color-copper)]/20 transition-all outline-none"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-[var(--color-gray-700)] mb-1.5"
                      >
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        className="w-full rounded-md border border-[var(--color-gray-200)] bg-white px-4 py-3 text-[var(--color-gray-900)] placeholder:text-[var(--color-gray-500)] focus:border-[var(--color-copper)] focus:ring-2 focus:ring-[var(--color-copper)]/20 transition-all outline-none"
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[var(--color-gray-700)] mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-md border border-[var(--color-gray-200)] bg-white px-4 py-3 text-[var(--color-gray-900)] placeholder:text-[var(--color-gray-500)] focus:border-[var(--color-copper)] focus:ring-2 focus:ring-[var(--color-copper)]/20 transition-all outline-none"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-[var(--color-gray-700)] mb-1.5"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full rounded-md border border-[var(--color-gray-200)] bg-white px-4 py-3 text-[var(--color-gray-900)] placeholder:text-[var(--color-gray-500)] focus:border-[var(--color-copper)] focus:ring-2 focus:ring-[var(--color-copper)]/20 transition-all outline-none"
                      placeholder="(310) 555-0100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="loanAmount"
                      className="block text-sm font-medium text-[var(--color-gray-700)] mb-1.5"
                    >
                      Estimated Loan Amount
                    </label>
                    <select
                      id="loanAmount"
                      name="loanAmount"
                      className="w-full rounded-md border border-[var(--color-gray-200)] bg-white px-4 py-3 text-[var(--color-gray-900)] focus:border-[var(--color-copper)] focus:ring-2 focus:ring-[var(--color-copper)]/20 transition-all outline-none"
                    >
                      <option value="">Select range</option>
                      <option value="1m-3m">$1M &ndash; $3M</option>
                      <option value="3m-5m">$3M &ndash; $5M</option>
                      <option value="5m-10m">$5M &ndash; $10M</option>
                      <option value="10m-15m">$10M &ndash; $15M</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[var(--color-gray-700)] mb-1.5"
                    >
                      Tell Us About Your Project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full rounded-md border border-[var(--color-gray-200)] bg-white px-4 py-3 text-[var(--color-gray-900)] placeholder:text-[var(--color-gray-500)] focus:border-[var(--color-copper)] focus:ring-2 focus:ring-[var(--color-copper)]/20 transition-all outline-none resize-none"
                      placeholder="Property type, location, timeline, loan purpose..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-[var(--color-copper)] px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-[var(--color-copper-dark)] hover:shadow-lg hover:shadow-[var(--color-copper)]/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

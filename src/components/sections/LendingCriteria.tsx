"use client";

import { lendingCriteria } from "@/lib/data";
import { AnimateIn } from "@/components/AnimateIn";

export function LendingCriteriaSection() {
  return (
    <section
      id="lending-criteria"
      className="relative py-24 md:py-32 bg-[var(--color-cream)] overflow-hidden"
      aria-labelledby="lending-heading"
    >
      {/* Decorative copper accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-copper)]/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <AnimateIn>
          <div className="text-center mb-16">
            <span className="text-[var(--color-copper-dark)] text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
              What We Fund
            </span>
            <h2
              id="lending-heading"
              className="font-heading text-4xl md:text-5xl font-semibold text-[var(--color-navy)] mb-4"
            >
              Lending Criteria
            </h2>
            <p className="text-lg text-[var(--color-gray-600)] max-w-2xl mx-auto">
              Straightforward terms for commercial real estate professionals who
              need capital fast.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-xl shadow-[var(--color-navy)]/5 border border-[var(--color-gray-200)]">
              {lendingCriteria.map((item, i) => (
                <div
                  key={item.label}
                  className={`grid grid-cols-1 md:grid-cols-[240px_1fr] ${
                    i % 2 === 0 ? "bg-white" : "bg-[var(--color-gray-100)]"
                  } ${
                    i < lendingCriteria.length - 1
                      ? "border-b border-[var(--color-gray-200)]"
                      : ""
                  }`}
                >
                  <div className="px-6 py-4 md:py-5 font-semibold text-sm uppercase tracking-wider text-[var(--color-navy)]">
                    {item.label}
                  </div>
                  <div className="px-6 pb-4 md:py-5 text-[var(--color-gray-700)] text-base">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* Highlight stats below table */}
        <AnimateIn delay={0.3}>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: "$1M–$15M", label: "Loan Size" },
              { number: "Up to 100%", label: "Loan-to-Cost" },
              { number: "6–24 mo.", label: "Loan Term" },
              { number: "9 Days", label: "Fastest Close" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-5 rounded-lg bg-white border border-[var(--color-gray-200)]"
              >
                <p className="font-heading text-2xl md:text-3xl font-semibold text-[var(--color-navy)]">
                  {stat.number}
                </p>
                <p className="text-sm text-[var(--color-gray-600)] mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

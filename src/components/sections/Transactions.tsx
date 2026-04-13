"use client";

import Image from "next/image";
import { transactions } from "@/lib/data";
import { AnimateIn } from "@/components/AnimateIn";
import { Clock, MapPin, Tag } from "lucide-react";

export function TransactionsSection() {
  return (
    <section
      id="transactions"
      className="relative py-24 md:py-32 bg-white overflow-hidden"
      aria-labelledby="transactions-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <AnimateIn>
          <div className="mb-16">
            <span className="text-[var(--color-copper-dark)] text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
              Track Record
            </span>
            <h2
              id="transactions-heading"
              className="font-heading text-4xl md:text-5xl font-semibold text-[var(--color-navy)] mb-4"
            >
              Featured Transactions
            </h2>
            <p className="text-lg text-[var(--color-gray-600)] max-w-2xl">
              Over twenty years of private money lending as both a broker and
              direct lender. Here are a few of our recent deals.
            </p>
          </div>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-8">
          {transactions.map((deal, i) => (
            <AnimateIn
              key={deal.amount}
              delay={i * 0.1}
              direction={i % 2 === 0 ? "left" : "right"}
            >
              <article className="group rounded-xl overflow-hidden border border-[var(--color-gray-200)] bg-white shadow-sm hover:shadow-xl hover:shadow-[var(--color-navy)]/5 transition-all duration-300 hover:-translate-y-1">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={deal.image}
                    alt={deal.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <span className="text-3xl font-heading font-bold text-white">
                      {deal.amount}
                    </span>
                    {deal.closingDays && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-copper)]/90 px-3 py-1 text-xs font-semibold text-white">
                        <Clock className="h-3 w-3" />
                        {deal.closingDays}-day close
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm">
                    <span className="inline-flex items-center gap-1.5 text-[var(--color-gray-600)]">
                      <MapPin className="h-3.5 w-3.5" />
                      {deal.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[var(--color-copper-dark)] font-medium">
                      <Tag className="h-3.5 w-3.5" />
                      {deal.type}
                    </span>
                  </div>
                  <p className="text-[var(--color-gray-700)] leading-relaxed">
                    {deal.description}
                  </p>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

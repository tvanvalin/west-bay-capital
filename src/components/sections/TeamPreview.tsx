"use client";

import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "@/lib/data";
import { AnimateIn } from "@/components/AnimateIn";
import { ArrowRight } from "lucide-react";

export function TeamPreviewSection() {
  // Show first 4 team members on homepage
  const featured = teamMembers.slice(0, 4);

  return (
    <section
      className="relative py-24 md:py-32 bg-[var(--color-cream)] overflow-hidden"
      aria-labelledby="team-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <AnimateIn>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="text-[var(--color-copper-dark)] text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
                Our Professionals
              </span>
              <h2
                id="team-heading"
                className="font-heading text-4xl md:text-5xl font-semibold text-[var(--color-navy)]"
              >
                Meet the Team
              </h2>
              <p className="text-lg text-[var(--color-gray-600)] mt-4 max-w-xl">
                Over 100 years of combined experience in commercial real estate
                finance.
              </p>
            </div>
            <Link
              href="/team"
              className="group inline-flex items-center gap-2 text-[var(--color-copper-dark)] font-semibold hover:text-[var(--color-navy)] transition-colors shrink-0"
            >
              View Full Team
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featured.map((member, i) => (
            <AnimateIn key={member.slug} delay={i * 0.08}>
              <Link href="/team" className="group block">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4 bg-[var(--color-gray-200)]">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.title} at West Bay Capital`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-[var(--color-navy)] group-hover:text-[var(--color-copper-dark)] transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-[var(--color-gray-600)] mt-1">
                  {member.title}
                </p>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

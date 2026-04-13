import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "@/lib/data";
import { Mail, Phone } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the experienced team behind West Bay Capital. Over 100 years of combined experience in commercial real estate finance.",
};

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-navy)] pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="text-[var(--color-copper-light)] text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            Our Professionals
          </span>
          <h1 className="font-heading text-5xl md:text-6xl font-semibold text-white mb-4">
            Meet the Team
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            West Bay Capital has an experienced management team with over 100
            years of combined experience in commercial real estate finance.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 md:py-28 bg-[var(--color-cream)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {teamMembers.map((member, i) => (
              <AnimateIn
                key={member.slug}
                delay={i * 0.06}
                direction={i % 2 === 0 ? "left" : "right"}
              >
                <article className="flex flex-col sm:flex-row gap-6 md:gap-8">
                  <div className="relative w-40 h-52 sm:w-48 sm:h-60 shrink-0 rounded-xl overflow-hidden bg-[var(--color-gray-200)]">
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.title} at West Bay Capital`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 160px, 192px"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-heading text-2xl font-semibold text-[var(--color-navy)]">
                      {member.name}
                    </h2>
                    <p className="text-[var(--color-copper-dark)] font-medium mt-1">
                      {member.title}
                    </p>
                    <div className="mt-4 space-y-2 text-sm">
                      <a
                        href={`tel:${member.phone.replace(/[^0-9x]/g, "")}`}
                        className="flex items-center gap-2 text-[var(--color-gray-600)] hover:text-[var(--color-navy)] transition-colors"
                      >
                        <Phone className="h-4 w-4" />
                        {member.phone}
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2 text-[var(--color-gray-600)] hover:text-[var(--color-navy)] transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                        {member.email}
                      </a>
                    </div>
                  </div>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-heading text-3xl font-semibold text-[var(--color-navy)] mb-4">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-[var(--color-gray-600)] mb-8">
            Contact our originations team to discuss your commercial real estate
            financing needs.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-md bg-[var(--color-copper)] px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-[var(--color-copper-dark)] hover:shadow-lg hover:shadow-[var(--color-copper)]/20"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
}

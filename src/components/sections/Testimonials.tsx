"use client";

import { testimonials } from "@/lib/data";
import { AnimateIn } from "@/components/AnimateIn";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-32 bg-[var(--color-navy)] overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[var(--color-copper)]/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[var(--color-navy-light)]/30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <AnimateIn>
          <div className="text-center mb-16">
            <span className="text-[var(--color-copper-light)] text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
              Client Experiences
            </span>
            <h2
              id="testimonials-heading"
              className="font-heading text-4xl md:text-5xl font-semibold text-white mb-4"
            >
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Speed, professionalism, and certainty of execution &mdash;
              that&rsquo;s what our clients say about working with West Bay
              Capital.
            </p>
          </div>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <AnimateIn key={testimonial.company} delay={i * 0.12}>
              <blockquote className="relative h-full flex flex-col rounded-xl bg-white/[0.04] border border-white/[0.08] p-8 backdrop-blur-sm">
                <Quote className="h-8 w-8 text-[var(--color-copper)]/60 mb-4 shrink-0" />
                <p className="text-white/80 leading-relaxed flex-1 text-[15px]">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="mt-6 pt-6 border-t border-white/[0.08]">
                  <cite className="not-italic">
                    <span className="block text-sm font-semibold text-[var(--color-copper-light)]">
                      {testimonial.company}
                    </span>
                  </cite>
                </footer>
              </blockquote>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

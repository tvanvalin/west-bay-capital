"use client";

import { ArrowRight, Clock, DollarSign, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-navy)]"
      aria-label="Hero"
    >
      {/* Background hero image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80&fit=crop"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[var(--color-navy)]/75" />
        {/* Gradient fade for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy)]/90 via-[var(--color-navy)]/60 to-transparent" />
        {/* Copper accent glow */}
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[var(--color-copper)]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:py-40 w-full">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left Content — spans 3 columns */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-block text-[var(--color-copper)] text-sm font-semibold tracking-[0.2em] uppercase mb-6">
                West Bay Capital
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.08] mb-6"
            >
              The Bridge Between
              <br />
              <span className="text-[var(--color-copper-light)]">
                Private Capital &amp; CRE
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-white/70 max-w-xl mb-10 leading-relaxed"
            >
              For over a decade, West Bay Capital has been the trusted
              partner investors and borrowers turn to when banks say no.
              Over 100 years of combined experience.{" "}
              <strong className="text-white">$1M&ndash;$15M</strong> loans
              closed in as few as{" "}
              <strong className="text-white">9 business days</strong>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-[var(--color-copper)] px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-[var(--color-copper-dark)] hover:shadow-xl hover:shadow-[var(--color-copper)]/20"
              >
                Get a Quote Today
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/#lending-criteria"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-8 py-4 text-base font-medium text-white transition-all duration-200 hover:bg-white/5 hover:border-white/40"
              >
                View Loan Terms
              </Link>
            </motion.div>
          </div>

          {/* Right Stats — spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="lg:col-span-2 hidden lg:block"
          >
            <div className="space-y-6">
              {[
                {
                  icon: DollarSign,
                  label: "Loan Size",
                  value: "$1M – $15M",
                },
                {
                  icon: Clock,
                  label: "Closing Speed",
                  value: "As Few as 9 Days",
                },
                {
                  icon: MapPin,
                  label: "Territory",
                  value: "Nationwide (USA)",
                },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="group flex items-center gap-5 rounded-xl bg-white/[0.04] border border-white/[0.08] p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.07] hover:border-[var(--color-copper)]/30"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[var(--color-copper)]/10">
                    <stat.icon className="h-6 w-6 text-[var(--color-copper-light)]" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 font-medium">
                      {stat.label}
                    </p>
                    <p className="text-xl font-heading font-semibold text-white">
                      {stat.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="lg:hidden mt-12 grid grid-cols-3 gap-4 text-center"
        >
          {[
            { label: "Loan Size", value: "$1M–$15M" },
            { label: "Speed", value: "9 Days" },
            { label: "Territory", value: "Nationwide" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg bg-white/[0.04] border border-white/[0.08] p-4"
            >
              <p className="text-xs text-white/50 mb-1">{stat.label}</p>
              <p className="text-base font-heading font-semibold text-white">
                {stat.value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-white/30 tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-[var(--color-copper)]" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

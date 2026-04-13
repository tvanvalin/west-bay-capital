"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Lending", href: "/#lending-criteria" },
  { label: "Transactions", href: "/#transactions" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Calculator", href: "/#calculator" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-navy)]/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav
        className="mx-auto max-w-7xl px-6 flex items-center justify-between"
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="relative z-10 flex items-center gap-3"
          aria-label="West Bay Capital — Home"
        >
          <Image
            src="/images/brand/logo.jpg"
            alt="West Bay Capital logo"
            width={160}
            height={65}
            className="h-10 w-auto md:h-12"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium tracking-wide text-white/80 hover:text-[var(--color-copper-light)] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2 rounded-md bg-[var(--color-copper)] px-5 py-2.5 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-[var(--color-copper-dark)] hover:shadow-lg hover:shadow-[var(--color-copper)]/20"
          >
            Get a Quote
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden relative z-10 p-2 text-white"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-[var(--color-navy)] z-40 flex flex-col items-center justify-center gap-8"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-heading font-semibold text-white hover:text-[var(--color-copper-light)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <Link
                  href="/#contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-2 rounded-md bg-[var(--color-copper)] px-8 py-3 text-lg font-semibold text-white"
                >
                  Get a Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

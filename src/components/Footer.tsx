import Link from "next/link";
import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] text-white/70" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-semibold text-white mb-4">
              West Bay Capital
            </h3>
            <p className="text-sm leading-relaxed max-w-xs">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#lending-criteria" className="hover:text-[var(--color-copper-light)] transition-colors">
                  Lending Criteria
                </Link>
              </li>
              <li>
                <Link href="/#transactions" className="hover:text-[var(--color-copper-light)] transition-colors">
                  Featured Transactions
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-[var(--color-copper-light)] transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-[var(--color-copper-light)] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[var(--color-copper-light)] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="hover:text-[var(--color-copper-light)] transition-colors">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              Contact
            </h4>
            <address className="not-italic text-sm space-y-2">
              <p>{siteConfig.address.street}</p>
              <p>
                {siteConfig.address.city}, {siteConfig.address.state}{" "}
                {siteConfig.address.zip}
              </p>
              <p className="pt-2">
                <a
                  href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`}
                  className="hover:text-[var(--color-copper-light)] transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-[var(--color-copper-light)] transition-colors"
                >
                  {siteConfig.email}
                </a>
              </p>
              <div className="pt-3">
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="West Bay Capital on LinkedIn"
                  className="inline-flex items-center gap-2 hover:text-[var(--color-copper-light)] transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-xs text-white/40">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.legalName}. All
            rights reserved. Licensed as a {siteConfig.license} under the{" "}
            {siteConfig.licenseBody}. Loans will be arranged or made pursuant
            to a California Financing Law License.
          </p>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "West Bay Capital is committed to ensuring digital accessibility for people with disabilities.",
};

export default function AccessibilityPage() {
  return (
    <>
      <section className="bg-[var(--color-navy)] pt-32 pb-16">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-white">
            Accessibility Statement
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-6 space-y-8">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-[var(--color-navy)] mb-3">
              Our Commitment
            </h2>
            <p className="text-[var(--color-gray-700)] leading-relaxed">
              {siteConfig.legalName} is committed to ensuring digital
              accessibility for people with disabilities. We are continually
              improving the user experience for everyone and applying the
              relevant accessibility standards.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold text-[var(--color-navy)] mb-3">
              Conformance Status
            </h2>
            <p className="text-[var(--color-gray-700)] leading-relaxed">
              This website aims to conform to the Web Content Accessibility
              Guidelines (WCAG) 2.1 at Level AA. These guidelines explain how to
              make web content more accessible to people with a wide array of
              disabilities.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold text-[var(--color-navy)] mb-3">
              Accessibility Features
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-[var(--color-gray-700)]">
              <li>All images include descriptive alternative text</li>
              <li>All pages use semantic HTML with proper heading hierarchy</li>
              <li>Color contrast meets or exceeds WCAG AA requirements (4.5:1 for normal text)</li>
              <li>All interactive elements are keyboard accessible</li>
              <li>Skip-to-content link available on every page</li>
              <li>Focus indicators are clearly visible</li>
              <li>Animations respect the prefers-reduced-motion setting</li>
              <li>All form inputs have associated labels</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold text-[var(--color-navy)] mb-3">
              Feedback
            </h2>
            <p className="text-[var(--color-gray-700)] leading-relaxed">
              We welcome your feedback on the accessibility of this website. If
              you encounter any accessibility barriers, please contact us at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-[var(--color-copper-dark)] hover:underline"
              >
                {siteConfig.email}
              </a>{" "}
              or call {siteConfig.phone}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "West Bay Capital privacy policy and data handling practices.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-[var(--color-navy)] pt-32 pb-16">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-white">
            Privacy Policy
          </h1>
          <p className="text-white/60 mt-4">
            Last updated: April 2026
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-6 prose prose-lg prose-gray-700">
          <h2 className="font-heading text-2xl font-semibold text-[var(--color-navy)]">
            Information We Collect
          </h2>
          <p className="text-[var(--color-gray-700)] leading-relaxed">
            When you submit an inquiry through our contact form, we collect your
            name, email address, phone number, and any information you provide
            about your financing needs. We also collect standard web analytics
            data such as page views, browser type, and referring URLs.
          </p>

          <h2 className="font-heading text-2xl font-semibold text-[var(--color-navy)] mt-10">
            How We Use Your Information
          </h2>
          <p className="text-[var(--color-gray-700)] leading-relaxed">
            We use the information you provide to respond to your inquiries,
            evaluate potential lending opportunities, and communicate with you
            about our services. We use analytics data to improve our website and
            understand how visitors use our site.
          </p>

          <h2 className="font-heading text-2xl font-semibold text-[var(--color-navy)] mt-10">
            Information Sharing
          </h2>
          <p className="text-[var(--color-gray-700)] leading-relaxed">
            We do not sell, trade, or rent your personal information to third
            parties. We may share information with our affiliated companies
            (Capital Lending Resources and Capital Real Estate Advisors) to
            facilitate loan origination and servicing.
          </p>

          <h2 className="font-heading text-2xl font-semibold text-[var(--color-navy)] mt-10">
            Data Security
          </h2>
          <p className="text-[var(--color-gray-700)] leading-relaxed">
            We implement appropriate technical and organizational security
            measures to protect your personal information. Our website uses HTTPS
            encryption for all data transmission.
          </p>

          <h2 className="font-heading text-2xl font-semibold text-[var(--color-navy)] mt-10">
            Your Rights (CCPA)
          </h2>
          <p className="text-[var(--color-gray-700)] leading-relaxed">
            If you are a California resident, you have the right to know what
            personal information we collect, request deletion of your personal
            information, and opt out of the sale of your personal information
            (which we do not sell). To exercise these rights, contact us at{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-[var(--color-copper-dark)] hover:underline"
            >
              {siteConfig.email}
            </a>
            .
          </p>

          <h2 className="font-heading text-2xl font-semibold text-[var(--color-navy)] mt-10">
            Contact
          </h2>
          <p className="text-[var(--color-gray-700)] leading-relaxed">
            For questions about this privacy policy, contact us at:{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-[var(--color-copper-dark)] hover:underline"
            >
              {siteConfig.email}
            </a>{" "}
            or {siteConfig.phone}.
          </p>
        </div>
      </section>
    </>
  );
}

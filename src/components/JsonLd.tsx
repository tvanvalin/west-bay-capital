import { siteConfig } from "@/lib/data";

export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "West Bay Capital",
    legalName: "West Bay Capital, LLC",
    url: "https://westbaycapital.com",
    logo: "https://westbaycapital.com/images/brand/logo.jpg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-310-231-1270",
      contactType: "sales",
      areaServed: "US",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    sameAs: [siteConfig.linkedin],
  };

  const financialServiceSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "West Bay Capital",
    description:
      "Private money lender specializing in $1M-$15M commercial real estate loans including bridge, acquisition, refinance, and construction financing.",
    url: "https://westbaycapital.com",
    telephone: "+1-310-231-1270",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: [
      "Bridge Loans",
      "Acquisition Loans",
      "Refinance Loans",
      "Construction Loans",
      "Commercial Real Estate Lending",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "West Bay Capital",
    image: "https://westbaycapital.com/images/brand/logo.jpg",
    telephone: "+1-310-231-1270",
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    url: "https://westbaycapital.com",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(financialServiceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  );
}

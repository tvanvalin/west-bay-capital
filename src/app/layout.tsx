import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://westbaycapital.com"),
  title: {
    default:
      "West Bay Capital | Private Money Lender for Commercial Real Estate",
    template: "%s | West Bay Capital",
  },
  description:
    "West Bay Capital funds $1M\u201315M commercial real estate loans in as few as 9 business days. Bridge, acquisition, refinance & construction loans across the United States.",
  keywords: [
    "private money lender",
    "commercial real estate loans",
    "bridge loans",
    "hard money lender",
    "commercial bridge loans",
    "private money lending California",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "West Bay Capital",
    title: "West Bay Capital | Private Money Lender for Commercial Real Estate",
    description:
      "West Bay Capital funds $1M\u201315M commercial real estate loans in as few as 9 business days.",
    images: [
      {
        url: "/images/brand/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "West Bay Capital \u2014 Private Money Lender",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "West Bay Capital | Private Money Lender",
    description:
      "West Bay Capital funds $1M\u201315M commercial real estate loans in as few as 9 business days.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

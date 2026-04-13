import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="bg-[var(--color-navy)] min-h-screen flex items-center justify-center">
      <div className="mx-auto max-w-xl px-6 text-center">
        <p className="text-[var(--color-copper)] text-8xl font-heading font-bold mb-4">
          404
        </p>
        <h1 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-white/60 text-lg mb-10">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been
          moved. Let&rsquo;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--color-copper)] px-6 py-3 text-base font-semibold text-white transition-all hover:bg-[var(--color-copper-dark)]"
          >
            <Home className="h-4 w-4" />
            Go Home
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-6 py-3 text-base font-medium text-white transition-all hover:bg-white/5"
          >
            <ArrowLeft className="h-4 w-4" />
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

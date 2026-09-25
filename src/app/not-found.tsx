import Link from "next/link";
import { Search } from "lucide-react";
import { T } from "@/i18n/T";
import { Seal } from "@/components/ui/Seal";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="bg-pattern-light">
      <div className="container flex min-h-[65vh] flex-col items-center justify-center py-20 text-center">
        <Seal className="h-20 w-20 opacity-90" />
        <p className="mt-6 font-display text-7xl font-bold text-navy-900/90">404</p>
        <div className="mx-auto mt-4 h-[3px] w-20 rounded-full bg-gradient-to-r from-gold-300 to-gold-600" aria-hidden="true" />
        <h1 className="mt-6 text-2xl font-semibold sm:text-3xl">
          <T k="notFound.title" />
        </h1>
        <p className="mt-3 max-w-md text-navy-600">
          <T k="notFound.text" />
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            <T k="common.goHome" />
          </Link>
          <Link href="/search" className="btn-outline">
            <Search className="h-4 w-4" aria-hidden="true" />
            <T k="nav.search" />
          </Link>
        </div>
      </div>
    </section>
  );
}

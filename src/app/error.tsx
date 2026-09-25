"use client";

import Link from "next/link";
import { useEffect } from "react";
import { TriangleAlert, RotateCcw } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const { t } = useLanguage();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="container flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <div className="grid h-16 w-16 place-items-center rounded-full bg-gold-100 text-gold-700 ring-8 ring-gold-50">
        <TriangleAlert className="h-8 w-8" aria-hidden="true" />
      </div>
      <h1 className="mt-6 text-3xl font-semibold">{t("error.title")}</h1>
      <p className="mt-3 max-w-md text-navy-600">{t("error.text")}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button type="button" onClick={reset} className="btn-primary">
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          {t("common.tryAgain")}
        </button>
        <Link href="/" className="btn-outline">
          {t("common.goHome")}
        </Link>
      </div>
    </section>
  );
}

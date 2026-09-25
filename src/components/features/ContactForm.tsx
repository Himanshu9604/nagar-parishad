"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";

/**
 * Static-site friendly contact form: no backend — it composes an email in the
 * visitor's mail app (mailto:) addressed to the Nagar Parishad.
 */
export function ContactForm() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", phone: "", ward: "", subject: "", message: "" });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   const body = [
  `Name: ${form.name}`,
  `Mobile: ${form.phone}`,
  form.ward ? `Ward: ${form.ward}` : "",
  "",
  form.message,
]
  .filter(Boolean)
  .join("\n");
    const href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(form.subject || "Citizen query")}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  };

  return (
    <form onSubmit={onSubmit} className="card-royal space-y-4 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy-700">Full name *</span>
          <input required value={form.name} onChange={update("name")} className="input-royal" autoComplete="name" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy-700">Mobile number *</span>
          <input
            required
            type="tel"
            inputMode="numeric"
            minLength={10}
            maxLength={15}
            value={form.phone}
            onChange={update("phone")}
            className="input-royal"
            autoComplete="tel"
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy-700">{t("common.wardNo")}</span>
          <select value={form.ward} onChange={update("ward")} className="input-royal">
            <option value="">—</option>
            {Array.from({ length: 17 }, (_, i) => (
              <option key={i + 1} value={String(i + 1)}>
                {t("common.wardNo")} {i + 1}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-navy-700">Subject *</span>
          <input required value={form.subject} onChange={update("subject")} className="input-royal" />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-navy-700">Message *</span>
        <textarea required rows={5} value={form.message} onChange={update("message")} className="input-royal resize-y" />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-navy-500">Opens your email app with the message addressed to {siteConfig.email}.</p>
        <button type="submit" className="btn-primary">
          <Send className="h-4 w-4" aria-hidden="true" />
          Send message
        </button>
      </div>
    </form>
  );
}

import { Clock } from "lucide-react";
import { ServiceDetailLayout } from "@/components/ui/ServiceDetailLayout";
import { Reveal } from "@/components/ui/Reveal";
import { forms } from "@/data/forms";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Complaints & Grievance",
  description: "Register civic complaints — garbage, drainage, street lights, water leakage, stray animals — with Nagar Parishad Dhamangaon Railway and track redressal.",
  path: "/services/grievance",
  keywords: ["complaint", "grievance", "takrar", "shikayat"],
});

/** Standard resolution time for common complaints. */
const sla = [
  { type: "Garbage not collected", time: "24 hours" },
  { type: "Blocked drain / gutter", time: "48 hours" },
  { type: "Street light not working", time: "72 hours" },
  { type: "Water leakage / no supply", time: "48 hours" },
  { type: "Dead animal removal", time: "24 hours" },
  { type: "Potholes / road damage", time: "15 days" },
  { type: "Mosquito menace / fogging", time: "7 days" },
  { type: "Encroachment", time: "15 days" },
];

export default function GrievancePage() {
  return (
    <ServiceDetailLayout
      content={{
        titleKey: "pages.grievance.title",
        descKey: "pages.grievance.desc",
        intro:
          "The Nagar Parishad is committed to resolving citizens' complaints quickly and transparently. Every complaint is given an acknowledgement number, forwarded to the concerned department and monitored by the Chief Officer until closure.",
        highlights: [
          { label: "Helpline", value: siteConfig.helpline },
          { label: "WhatsApp", value: siteConfig.whatsapp },
          { label: "Acknowledgement", value: "Immediate" },
        ],
        steps: [
          { title: "Register the complaint", text: `Call the helpline ${siteConfig.helpline}, send a WhatsApp message with photo & location to ${siteConfig.whatsapp}, email ${siteConfig.email}, or submit the grievance form at the inward counter.` },
          { title: "Get an acknowledgement", text: "Note the complaint / inward number given to you. It is needed to follow up." },
          { title: "Action by department", text: "The complaint is assigned to the concerned department, which resolves it within the service timeline." },
          { title: "Closure & feedback", text: "You are informed once the complaint is resolved. If unsatisfied, you may escalate to the Chief Officer." },
        ],
        documents: [
          "Your name, address and mobile number",
          "Exact location / landmark of the problem",
          "Photograph of the issue (optional, helps faster action)",
          "Previous complaint number (for follow-ups)",
        ],
        faqs: [
          { q: "My complaint was not resolved in time. What next?", a: "Escalate to the Chief Officer in writing quoting your complaint number. You may also use the Aaple Sarkar or CPGRAMS grievance portals." },
          { q: "Can I complain anonymously?", a: "Anonymous complaints on public hygiene may be acted upon, but providing contact details helps the department reach you for clarifications and feedback." },
        ],
        forms: forms.filter((f) => f.id === "f-grievance"),
        online: [
          { label: "Aaple Sarkar Grievance", url: "https://aaplesarkar.mahaonline.gov.in" },
          { label: "CPGRAMS (Govt. of India)", url: "https://pgportal.gov.in" },
          { label: "Swachhata App (SBM-U)", url: "https://sbmurban.org" },
        ],
        contact: { office: "Inward Section / Grievance Cell, Nagar Parishad Office", phone: siteConfig.helpline },
        extra: (
          <Reveal className="card-royal p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">Resolution Timelines</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {sla.map((s) => (
                <li key={s.type} className="flex items-center justify-between gap-3 rounded-xl bg-ivory-100 px-4 py-3 text-sm">
                  <span className="text-navy-800">{s.type}</span>
                  <span className="inline-flex shrink-0 items-center gap-1.5 font-semibold text-navy-900">
                    <Clock className="h-3.5 w-3.5 text-gold-600" aria-hidden="true" />
                    {s.time}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        ),
      }}
    />
  );
}

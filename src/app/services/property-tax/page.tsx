import { BadgePercent } from "lucide-react";
import { ServiceDetailLayout } from "@/components/ui/ServiceDetailLayout";
import { Reveal } from "@/components/ui/Reveal";
import { forms } from "@/data/forms";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Property Tax",
  description: "Property tax assessment, payment, rebates, penalties, mutation and objection process at Nagar Parishad Dhamangaon Railway.",
  path: "/services/property-tax",
  keywords: ["property tax", "gharpatti", "malmatta kar", "house tax Dhamangaon"],
});

const rebates = [
  { title: "5% rebate", text: "Full payment of current-year tax before 30 September." },
  { title: "Women owners", text: "Additional concession where notified by the General Body for properties solely owned by women." },
  { title: "2% monthly penalty", text: "Charged on arrears remaining unpaid after the due date, as per the Act." },
];

export default function PropertyTaxPage() {
  return (
    <ServiceDetailLayout
      content={{
        titleKey: "pages.propertyTax.title",
        descKey: "pages.propertyTax.desc",
        intro:
          "Property tax is the primary source of revenue for the Nagar Parishad and funds essential services such as water supply, sanitation, roads and street lights. Tax is levied on all lands and buildings within municipal limits on the basis of their assessed annual rateable value, revised every four years.",
        highlights: [
          { label: "Financial year", value: "1 Apr – 31 Mar" },
          { label: "Due date", value: "30 September" },
          { label: "Early-payment rebate", value: "Up to 5%" },
        ],
        steps: [
          { title: "Know your property number", text: "Your property (assessment) number is printed on the previous tax bill / receipt. Contact the Tax section if you don't have it." },
          { title: "Receive the demand bill", text: "Bills are distributed ward-wise at the start of the financial year. Duplicate bills are available at the counter." },
          { title: "Pay the tax", text: "Pay at the Nagar Parishad cash counter by cash, UPI, card or demand draft, or at designated collection camps held in each ward." },
          { title: "Collect the receipt", text: "Keep the computerised receipt safely — it is required for mutation, no-dues certificates and sale of property." },
        ],
        documents: [
          "Previous year's tax receipt / property number",
          "Sale deed or registered transfer document (for mutation)",
          "Death certificate & legal heir certificate (for inheritance mutation)",
          "7/12 extract or property card",
          "Building permission & occupancy certificate (for new assessment)",
          "Aadhaar card of owner",
        ],
        fees: [
          { item: "Duplicate tax bill", fee: "₹ 10", timeline: "Same day" },
          { item: "Assessment extract (Utara)", fee: "₹ 50", timeline: "3 days" },
          { item: "Mutation / transfer of property", fee: "As per GB resolution", timeline: "15 days" },
          { item: "No-dues certificate", fee: "₹ 100", timeline: "7 days" },
          { item: "New assessment", fee: "Free", timeline: "30 days" },
        ],
        faqs: [
          { q: "When is the property tax revised?", a: "General reassessment is carried out every four years. Individual properties are reassessed when there is new construction, addition or change of use." },
          { q: "I disagree with my assessment. What can I do?", a: "File a written objection in the prescribed form within the notice period after publication of the assessment list. Objections are heard by the competent authority." },
          { q: "Is the water charge included in property tax?", a: "Water tax / water charges are billed separately, though both can be paid at the same counter." },
        ],
        forms: forms.filter((f) => ["f-mutation", "f-assessment", "f-no-dues"].includes(f.id)),
        contact: { office: "Tax & Revenue Section, Nagar Parishad Office", phone: "07222-000008" },
        extra: (
          <Reveal className="grid gap-4 sm:grid-cols-3">
            {rebates.map((r) => (
              <div key={r.title} className="rounded-2xl border border-gold-200 bg-gradient-to-b from-gold-50 to-white p-5">
                <BadgePercent className="h-6 w-6 text-gold-600" aria-hidden="true" />
                <h3 className="mt-3 font-sans text-base font-semibold text-navy-900">{r.title}</h3>
                <p className="mt-1 text-sm text-navy-600">{r.text}</p>
              </div>
            ))}
          </Reveal>
        ),
      }}
    />
  );
}

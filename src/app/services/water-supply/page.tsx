import { Droplets, ExternalLink } from "lucide-react";
import { ServiceDetailLayout } from "@/components/ui/ServiceDetailLayout";
import { Reveal } from "@/components/ui/Reveal";
import { forms } from "@/data/forms";
import { waterSchedule } from "@/data/waterSchedule";
import { WaterTodayChecker } from "@/components/features/WaterTodayChecker";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Water Supply & Water Bill",
  description: "New tap connection, water bill payment, ward-wise supply schedule and complaints — Water Supply Department, Nagar Parishad Dhamangaon Railway.",
  path: "/services/water-supply",
  keywords: ["water bill", "tap connection", "nal connection", "pani patti"],
});

const DAY_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/** Table rows built from the shared schedule in src/data/waterSchedule.ts */
const schedule = waterSchedule.map((s) => ({
  wards: `Wards ${s.fromWard} – ${s.toWard}`,
  time: s.time,
  days: s.days.map((d) => DAY_SHORT[d]).join(" / "),
}));

export default function WaterSupplyPage() {
  return (
    <ServiceDetailLayout
      content={{
        titleKey: "pages.water.title",
        descKey: "pages.water.desc",
        intro:
          "The Water Supply Department treats and distributes drinking water to households across all wards through elevated storage reservoirs and a piped distribution network. Citizens can apply for new connections, pay water bills and register complaints about leakage, low pressure or contamination.",
        highlights: [
          { label: "New connection", value: "15 days" },
          { label: "Leakage repair", value: "48 hours" },
          { label: "Billing", value: "Annual / half-yearly" },
        ],
        steps: [
          { title: "Apply", text: "Submit the new tap connection application with documents and the road-cutting undertaking at the Water Supply section." },
          { title: "Site inspection", text: "The plumber / engineer inspects the site and prepares an estimate of connection charges and material." },
          { title: "Pay charges", text: "Pay the connection deposit, road restoration and meter charges at the cash counter." },
          { title: "Connection", text: "The connection is released by the Nagar Parishad's licensed plumber and a consumer number is allotted for billing." },
        ],
        documents: [
          "Latest property tax paid receipt",
          "Ownership proof / consent of owner (for tenants)",
          "Aadhaar card of applicant",
          "Passport-size photograph",
          "Undertaking for road cutting & restoration",
        ],
        fees: [
          { item: "Domestic connection (½ inch) – deposit", fee: "As per GB rates", timeline: "15 days" },
          { item: "Non-domestic connection", fee: "As per GB rates", timeline: "15 days" },
          { item: "Transfer of connection name", fee: "₹ 200", timeline: "7 days" },
          { item: "Reconnection after disconnection", fee: "₹ 500 + arrears", timeline: "3 days" },
          { item: "Water tanker (private, on request)", fee: "As per rate chart", timeline: "Same / next day" },
        ],
        faqs: [
          { q: "How is the water bill calculated?", a: "Domestic connections are billed at a flat annual rate or on metered consumption, as decided by the General Body. The bill shows the consumer number, period and arrears." },
          { q: "What should I do if the water is muddy or smells?", a: "Stop drinking it, and immediately call the water supply complaint number. A team will test the water and inspect the pipeline." },
          { q: "Can I use a motor pump on my connection?", a: "No. Direct suction pumps on the distribution line are prohibited and can lead to disconnection and penalty." },
        ],
        forms: forms.filter((f) => f.id === "f-water"),
        contact: { office: "Water Supply Section, Nagar Parishad Office", phone: "07222-000009", hours: "Complaints: 7:00 AM – 7:00 PM, all days" },
        extra: (
          <>
          <Reveal className="relative overflow-hidden rounded-2xl bg-royal-gradient p-6 text-ivory shadow-royal-lg sm:p-8">
            <div className="bg-pattern-royal absolute inset-0 opacity-40" aria-hidden="true" />
            <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-display text-xl font-semibold !text-ivory sm:text-2xl">Pay your water bill online</h2>
                <p className="mt-2 max-w-xl text-sm text-ivory/75">
                  Check dues and pay your municipal water bill online through MahaULB — the Urban Development
                  Department&apos;s official portal for Urban Local Bodies across Maharashtra.
                </p>
              </div>
              <a
                href="https://mahaulb.in/MahaULB/water/showServicePage/payMyDues?locale=en"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold shrink-0"
              >
                Pay Water Bill Online
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
          <Reveal>
            <WaterTodayChecker />
          </Reveal>
          <Reveal className="card-royal overflow-hidden">
            <div className="flex items-center gap-3 px-6 pt-6 sm:px-8">
              <Droplets className="h-6 w-6 text-gold-600" aria-hidden="true" />
              <h2 className="text-2xl font-semibold">Water Supply Schedule</h2>
            </div>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[28rem] text-left text-sm">
                <thead className="bg-navy-900 text-xs uppercase tracking-wider text-gold-100">
                  <tr>
                    <th scope="col" className="px-6 py-3 font-semibold sm:px-8">Wards</th>
                    <th scope="col" className="px-6 py-3 font-semibold">Timing</th>
                    <th scope="col" className="px-6 py-3 font-semibold">Days</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy-100">
                  {schedule.map((s) => (
                    <tr key={s.wards} className="hover:bg-ivory-100">
                      <td className="px-6 py-3.5 font-medium text-navy-900 sm:px-8">{s.wards}</td>
                      <td className="whitespace-nowrap px-6 py-3.5 text-navy-700">{s.time}</td>
                      <td className="px-6 py-3.5 text-navy-600">{s.days}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="px-6 py-4 text-xs text-navy-500 sm:px-8">
              Schedule may change during maintenance or water scarcity. Changes are announced under Notices.
            </p>
          </Reveal>
          </>
        ),
      }}
    />
  );
}

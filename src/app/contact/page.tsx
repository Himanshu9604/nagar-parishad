import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/features/ContactForm";
import { departments } from "@/data/departments";
import { siteConfig } from "@/data/site";
import { L, T } from "@/i18n/T";
import { buildMetadata } from "@/lib/seo";
import { telHref } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Contact Us",
  description: "Address, phone numbers, email, office hours and location map of Nagar Parishad Dhamangaon Railway, Dist. Amravati.",
  path: "/contact",
});

export default function ContactPage() {
  const cards = [
    {
      icon: MapPin,
      k: "common.address" as const,
      content: (
        <address className="not-italic">
          {siteConfig.address.line1}
          <br />
          {siteConfig.address.line2}
          <br />
          {siteConfig.address.city}
        </address>
      ),
    },
    {
      icon: Phone,
      k: "common.phone" as const,
      content: (
        <>
          <a href={telHref(siteConfig.phone)} className="block hover:text-gold-600">{siteConfig.phone}</a>
          <a href={telHref(siteConfig.phoneAlt)} className="block hover:text-gold-600">{siteConfig.phoneAlt}</a>
        </>
      ),
    },
    {
      icon: Mail,
      k: "common.email" as const,
      content: (
        <>
          <a href={`mailto:${siteConfig.email}`} className="block break-all hover:text-gold-600">{siteConfig.email}</a>
          <a href={`mailto:${siteConfig.emailOfficial}`} className="block break-all hover:text-gold-600">{siteConfig.emailOfficial}</a>
        </>
      ),
    },
    {
      icon: Clock,
      k: "common.officeHours" as const,
      content: <T k="common.officeHoursValue" />,
    },
  ];

  return (
    <>
      <PageHero titleKey="pages.contact.title" descKey="pages.contact.desc" />

      <section className="py-16 sm:py-20">
        <div className="container">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((c, i) => (
              <Reveal key={c.k} delay={i * 0.06} className="card-royal p-6">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-navy-800 to-navy-950 text-gold-200">
                  <c.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h2 className="mt-4 font-sans text-sm font-bold uppercase tracking-wider text-gold-700">
                  <T k={c.k} />
                </h2>
                <div className="mt-2 text-sm leading-relaxed text-navy-700">{c.content}</div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-5">
            <Reveal className="lg:col-span-3">
              <h2 className="mb-5 text-2xl font-semibold">Write to us</h2>
              <ContactForm />
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp: {siteConfig.whatsapp}
              </a>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-2">
              <h2 className="mb-5 text-2xl font-semibold">Location</h2>
              <div className="card-royal overflow-hidden p-2">
                <iframe
                  title="Map showing Nagar Parishad Dhamangaon Railway"
                  src={siteConfig.mapEmbedUrl}
                  className="h-80 w-full rounded-xl border-0 lg:h-[26rem]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a href={siteConfig.mapLink} target="_blank" rel="noopener noreferrer" className="btn-outline mt-4">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Open in Google Maps
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ivory-200/60 py-16">
        <div className="container">
          <h2 className="mb-6 text-2xl font-semibold">Department Contacts</h2>
          <Reveal className="card-royal overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[36rem] text-left text-sm">
                <thead className="bg-navy-900 text-xs uppercase tracking-wider text-gold-100">
                  <tr>
                    <th scope="col" className="px-5 py-3.5 font-semibold"><T k="common.department" /></th>
                    <th scope="col" className="px-5 py-3.5 font-semibold"><T k="common.head" /></th>
                    <th scope="col" className="px-5 py-3.5 font-semibold"><T k="common.phone" /></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy-100">
                  {departments.map((d) => (
                    <tr key={d.slug} className="hover:bg-ivory-100">
                      <td className="px-5 py-3.5 font-medium text-navy-900"><L text={d.name} /></td>
                      <td className="px-5 py-3.5 text-navy-600">{d.head}</td>
                      <td className="whitespace-nowrap px-5 py-3.5">
                        {d.phone && (
                          <a href={telHref(d.phone)} className="text-navy-700 hover:text-gold-600">{d.phone}</a>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

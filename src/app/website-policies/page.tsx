import { Copyright, Link2, Lock, ScrollText, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Website Policies",
  description:
    "Privacy policy, terms of use, hyperlinking policy, copyright policy and accessibility statement for the Nagar Parishad Dhamangaon Railway website.",
  path: "/website-policies",
  keywords: ["privacy policy", "terms of use", "hyperlinking policy", "accessibility statement", "disclaimer"],
});

const sections = [
  {
    id: "privacy",
    icon: Lock,
    title: "Privacy Policy",
    body: [
      "This website does not automatically capture any personal information, other than logging your IP address and duration of visit, and does not collect personal information except where you knowingly provide such information — for example, on a grievance, service request or feedback form.",
      "Any personal information you submit is used only to process your request and is not shared with any third party except as required by law, or with the specific department that needs it to act on your request.",
      "This site may use cookies purely to remember display preferences such as your chosen language. No personal information is stored in cookies.",
    ],
  },
  {
    id: "terms",
    icon: ScrollText,
    title: "Terms of Use",
    body: [
      "By accessing this website, you agree to be bound by these terms. The content is provided for general information about the Nagar Parishad and its services and is updated periodically by the office.",
      "While every effort is made to keep information accurate and current, the Nagar Parishad does not warrant that the content is free of errors or omissions, and reserves the right to change or correct information without prior notice.",
      "In case of any discrepancy between information on this website and an official published notification, order or gazette, the official document shall prevail.",
    ],
  },
  {
    id: "hyperlinking",
    icon: Link2,
    title: "Hyperlinking Policy",
    body: [
      "This website may link to external websites (such as Government of Maharashtra, Government of India or district portals) that are not maintained by the Nagar Parishad. Such links are provided for user convenience and do not imply endorsement.",
      "Once you leave this website through such a link, the Nagar Parishad has no control over, and assumes no responsibility for, the content, privacy policies or practices of the external site.",
      "Other websites are welcome to link to pages of this website without prior permission, provided the page is not loaded inside a frame and does not misrepresent its relationship with the Nagar Parishad.",
    ],
  },
  {
    id: "copyright",
    icon: Copyright,
    title: "Copyright Policy",
    body: [
      "Material featured on this website may be reproduced free of charge for non-commercial, educational or personal use, provided it is reproduced accurately and the source is acknowledged.",
      "This permission does not extend to any material on this website that is identified as being the copyright of a third party. Authorisation to reproduce such material must be obtained from the concerned copyright holder.",
      `The Nagar Parishad emblem, seal and official logo may not be used without prior permission from the office of the ${siteConfig.name}.`,
    ],
  },
  {
    id: "accessibility",
    icon: ShieldCheck,
    title: "Accessibility Statement",
    body: [
      "This website is designed to be usable by the widest possible audience, including people with visual, auditory, motor and cognitive disabilities, following the Guidelines for Indian Government Websites (GIGW).",
      "The site supports browser-level text resizing, keyboard navigation, and is built with semantic HTML so that screen readers can interpret its content correctly.",
      "If you experience difficulty accessing any part of this website, please write to us using the details on the Contact page, and we will work to resolve it.",
    ],
  },
];

export default function WebsitePoliciesPage() {
  return (
    <>
      <PageHero titleKey="pages.websitePolicies.title" descKey="pages.websitePolicies.desc" />
      <section className="bg-pattern-light py-14 sm:py-16">
        <div className="container max-w-4xl">
          <div className="space-y-6">
            {sections.map((s) => (
              <Reveal key={s.id} className="card-royal scroll-mt-24 p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-900 text-gold-200">
                    <s.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h2 className="font-display text-xl font-semibold text-navy-900 sm:text-2xl">{s.title}</h2>
                </div>
                <div className="mt-4 space-y-3">
                  {s.body.map((p, i) => (
                    <p key={i} className="text-sm leading-relaxed text-navy-600">
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-navy-400">
            Last reviewed as part of this website — {siteConfig.lastUpdated}. For questions about these policies, please
            use the details on the Contact page.
          </p>
        </div>
      </section>
    </>
  );
}

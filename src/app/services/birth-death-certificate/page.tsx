import { ServiceDetailLayout } from "@/components/ui/ServiceDetailLayout";
import { forms } from "@/data/forms";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Birth & Death Certificate",
  description: "How to register a birth or death and obtain certificates from Nagar Parishad Dhamangaon Railway — timelines, fees, documents and CRS online registration.",
  path: "/services/birth-death-certificate",
  keywords: ["birth certificate", "death certificate", "janm dakhla", "mrutyu dakhla"],
});

export default function BirthDeathPage() {
  return (
    <ServiceDetailLayout
      content={{
        titleKey: "pages.birthDeath.title",
        descKey: "pages.birthDeath.desc",
        intro:
          "Every birth and death occurring within the limits of Nagar Parishad Dhamangaon Railway must be registered under the Registration of Births and Deaths Act, 1969. Registration is free when reported within 21 days. Institutions such as hospitals report events directly; for home events, the head of the family must inform the Registrar.",
        highlights: [
          { label: "Free registration", value: "Within 21 days" },
          { label: "Certificate issued in", value: "7 working days" },
          { label: "Copy fee", value: "₹ 20 / copy" },
        ],
        steps: [
          { title: "Report the event", text: "Hospitals report births/deaths online on the CRS portal. For events at home, submit Form No. 1 (birth) or Form No. 2 (death) at the Nagar Parishad office within 21 days." },
          { title: "Verification", text: "The Registrar verifies the details with the informant, hospital records and, where required, a local enquiry." },
          { title: "Registration", text: "The event is entered in the register and uploaded to the Civil Registration System (CRS)." },
          { title: "Collect certificate", text: "Collect the digitally signed certificate from the counter or download it from the CRS portal using the registration number." },
        ],
        documents: [
          "Hospital discharge summary / intimation (for institutional events)",
          "Aadhaar card of parents / informant",
          "Residence proof within municipal limits",
          "Medical certificate of cause of death (for deaths)",
          "Affidavit & Magistrate order (for delayed registration after 1 year)",
          "School leaving certificate (for name inclusion)",
        ],
        fees: [
          { item: "Registration within 21 days", fee: "Free", timeline: "Same day" },
          { item: "Registration after 21 days, within 30 days", fee: "₹ 2 (late fee)", timeline: "7 days" },
          { item: "Registration after 30 days, within 1 year", fee: "₹ 5 + affidavit", timeline: "7 days" },
          { item: "Registration after 1 year", fee: "₹ 10 + Magistrate order", timeline: "15 days" },
          { item: "Certified copy of certificate", fee: "₹ 20 per copy", timeline: "7 days" },
          { item: "Name inclusion in birth record", fee: "Free (within 15 years)", timeline: "7 days" },
        ],
        faqs: [
          { q: "Can I get the certificate online?", a: "Yes. Once registered, the certificate can be downloaded from crsorgi.gov.in using the registration number and the details of the event." },
          { q: "The child's name was not given at registration. What should I do?", a: "Submit a name-inclusion application with the school leaving certificate or parents' declaration. It is free within 15 years of registration." },
          { q: "How do I correct a spelling mistake?", a: "Apply to the Registrar with supporting documents (Aadhaar, school records). Corrections of clerical errors are made after verification." },
        ],
        forms: forms.filter((f) => ["f-birth", "f-death", "f-cert-copy"].includes(f.id)),
        online: [
          { label: "Civil Registration System (CRS)", url: "https://crsorgi.gov.in" },
          { label: "DigiLocker", url: "https://www.digilocker.gov.in" },
        ],
        contact: { office: "Birth & Death Registration Section, Ground Floor", phone: "07222-000012" },
      }}
    />
  );
}

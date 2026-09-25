import type { EmergencyContact } from "@/types";

/**
 * Emergency & important contacts.
 * National helplines are standard; local numbers are placeholders — VERIFY.
 */
export const emergencyContacts: EmergencyContact[] = [
  { id: "erss", kind: "national", icon: "siren", number: "112", name: { en: "Emergency Response (All-in-one)", mr: "आपत्कालीन प्रतिसाद (सर्व सेवा)", hi: "आपातकालीन प्रतिक्रिया (सभी सेवाएँ)" } },
  { id: "police", kind: "national", icon: "shield", number: "100", name: { en: "Police", mr: "पोलीस", hi: "पुलिस" } },
  { id: "fire", kind: "national", icon: "flame", number: "101", name: { en: "Fire Brigade", mr: "अग्निशमन दल", hi: "अग्निशमन" } },
  { id: "ambulance", kind: "national", icon: "ambulance", number: "108", name: { en: "Ambulance", mr: "रुग्णवाहिका", hi: "एम्बुलेंस" } },
  { id: "women", kind: "national", icon: "heart", number: "1091", name: { en: "Women Helpline", mr: "महिला हेल्पलाइन", hi: "महिला हेल्पलाइन" } },
  { id: "child", kind: "national", icon: "users", number: "1098", name: { en: "Child Helpline", mr: "बाल हेल्पलाइन", hi: "चाइल्ड हेल्पलाइन" } },
  { id: "senior", kind: "national", icon: "heart", number: "14567", name: { en: "Senior Citizens Helpline", mr: "ज्येष्ठ नागरिक हेल्पलाइन", hi: "वरिष्ठ नागरिक हेल्पलाइन" } },
  { id: "disaster", kind: "national", icon: "siren", number: "1077", name: { en: "District Disaster Control Room", mr: "जिल्हा आपत्ती नियंत्रण कक्ष", hi: "ज़िला आपदा नियंत्रण कक्ष" } },
  { id: "cyber", kind: "national", icon: "shield", number: "1930", name: { en: "Cyber Crime Helpline", mr: "सायबर गुन्हे हेल्पलाइन", hi: "साइबर अपराध हेल्पलाइन" } },
  { id: "electricity", kind: "national", icon: "zap", number: "1912", name: { en: "Electricity Complaint (MSEDCL)", mr: "वीज तक्रार (महावितरण)", hi: "बिजली शिकायत (महावितरण)" } },
  { id: "np-office", kind: "local", icon: "landmark", number: "07222-237050", note: "Office hours", name: { en: "Nagar Parishad Office", mr: "नगर परिषद कार्यालय", hi: "नगर परिषद कार्यालय" } },
  { id: "np-fire", kind: "local", icon: "flame", number: "07222-000015", note: "24×7", name: { en: "Nagar Parishad Fire Station", mr: "नगर परिषद अग्निशमन केंद्र", hi: "नगर परिषद अग्निशमन केंद्र" } },
  { id: "np-water", kind: "local", icon: "droplets", number: "07222-000009", note: "7 AM – 7 PM", name: { en: "Water Supply Complaints", mr: "पाणीपुरवठा तक्रार", hi: "जलापूर्ति शिकायत" } },
  { id: "police-station", kind: "local", icon: "shield", number: "07222-000016", name: { en: "Dhamangaon Police Station", mr: "धामणगाव पोलीस स्टेशन", hi: "धामणगांव पुलिस स्टेशन" } },
  { id: "hospital", kind: "local", icon: "ambulance", number: "07222-000017", name: { en: "Rural Hospital, Dhamangaon", mr: "ग्रामीण रुग्णालय, धामणगाव", hi: "ग्रामीण अस्पताल, धामणगांव" } },
  { id: "railway", kind: "local", icon: "phone", number: "139", note: "Railway enquiry & security", name: { en: "Railway Helpline", mr: "रेल्वे हेल्पलाइन", hi: "रेलवे हेल्पलाइन" } },
];

export type Locale = "en" | "mr" | "hi";

/**
 * Text that can be shown in several languages.
 * `en` is required; `mr` / `hi` fall back to `en` when missing.
 */
export type LText = { en: string; mr?: string; hi?: string };

export type IconName =
  | "baby"
  | "building"
  | "droplets"
  | "receipt"
  | "megaphone"
  | "file"
  | "scroll"
  | "gavel"
  | "users"
  | "landmark"
  | "shield"
  | "leaf"
  | "hardhat"
  | "heart"
  | "graduation"
  | "flame"
  | "lightbulb"
  | "trash"
  | "wallet"
  | "home"
  | "briefcase"
  | "scale"
  | "store"
  | "tree"
  | "siren"
  | "ambulance"
  | "phone"
  | "zap"
  | "clipboard"
  | "map";

export type DocumentCategory =
  | "general"
  | "tax"
  | "water"
  | "health"
  | "election"
  | "planning"
  | "recruitment"
  | "meeting"
  | "scheme"
  | "certificate"
  | "license"
  | "finance";

export interface DocumentItem {
  id: string;
  title: LText;
  summary?: LText;
  category: DocumentCategory;
  /** ISO date `YYYY-MM-DD` */
  date: string;
  /** Path inside /public, e.g. `/documents/notices/water-cut.pdf` */
  file: string;
  fileSize?: string;
  referenceNo?: string;
  isNew?: boolean;
  important?: boolean;
}

export interface Tender {
  id: string;
  tenderNo: string;
  title: LText;
  department: string;
  estimatedCost: string;
  emd?: string;
  publishDate: string;
  closingDate: string;
  openingDate?: string;
  status: "open" | "closed" | "awarded" | "cancelled";
  file: string;
  portalUrl?: string;
}

export interface Person {
  id: string;
  name: LText;
  designation: LText;
  photo?: string;
  phone?: string;
  email?: string;
  message?: LText;
  /** Highest education / professional qualification, when publicly verified. */
  qualification?: LText;
  /** Shown instead of `qualification` when it is not publicly available. */
  qualificationNote?: LText;
  since?: string;
  party?: string;
  /** Short factual profile shown when there is no personal message. */
  profile?: LText;
  /** Where the information was verified (news report / official notice). */
  source?: { label: string; url: string };
}

export interface WardMember {
  id: string;
  wardNo: number;
  /** Seat within the ward — Nagar Parishad wards elect two members, Seat A and Seat B. */
  seat?: string;
  name: LText;
  area: LText;
  party?: string;
  reservation?: string;
  phone?: string;
  role?: LText;
  photo?: string;
  /** Highest education / professional qualification, when publicly verified. */
  qualification?: LText;
  /** Shown instead of `qualification` when it is not publicly available. */
  qualificationNote?: LText;
  /** Votes won at the December 2025 election, and the result source. */
  votes?: number;
  source?: { label: string; url: string };
}

export interface Department {
  slug: string;
  name: LText;
  icon: IconName;
  head: string;
  phone?: string;
  email?: string;
  summary: LText;
  functions: string[];
  services?: string[];
  documents?: string[];
}

export interface Service {
  slug: string;
  title: LText;
  icon: IconName;
  summary: LText;
  department: string;
  timeline?: string;
  fee?: string;
  /** Internal detail page (if available) */
  href?: string;
  onlineUrl?: string;
}

export interface Scheme {
  id: string;
  name: LText;
  level: "central" | "state" | "local";
  icon: IconName;
  summary: LText;
  eligibility: string[];
  benefits: string[];
  documents?: string[];
  url?: string;
}

export interface GovLink {
  title: string;
  titleMr?: string;
  url: string;
  description: string;
  group: "central" | "state" | "district" | "citizen";
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: LText;
  category: "events" | "development" | "cleanliness" | "heritage" | "culture";
  date?: string;
  width: number;
  height: number;
}

export interface EmergencyContact {
  id: string;
  name: LText;
  number: string;
  icon: IconName;
  note?: string;
  kind: "national" | "local";
}

export interface NavItem {
  key: string;
  href: string;
  children?: NavItem[];
}

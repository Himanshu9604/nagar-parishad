import type { LText, WardMember } from "@/types";
import { wardMembers } from "./wardMembers";

/**
 * Ward-wise population (Census) and electoral roll (voter list) statistics.
 * ⚠ SAMPLE FIGURES — replace with the latest Census / State Election Commission
 *   ward-wise voter list published for Nagar Parishad Dhamangaon Railway.
 *
 * There are 10 wards; each elects two Nagarsevaks (Seat A and Seat B) — see
 * `wardMembers` in `./wardMembers.ts` for the verified, ward-wise winners.
 *
 * Tuple format:
 * [wardNo, area (en), area (mr), households, population male, population female,
 *  voters male, voters female, voters third-gender, polling booths, polling station]
 */
type Row = [number, string, string, number, number, number, number, number, number, number, string];

const rows: Row[] = [
  [1, "Station Road Area", "स्टेशन रोड परिसर", 352, 781, 752, 562, 545, 0, 2, "Z.P. Primary School, Station Road"],
  [2, "Gandhi Chowk", "गांधी चौक", 368, 812, 790, 590, 571, 1, 2, "Nagar Parishad School No. 1, Gandhi Chowk"],
  [3, "Tilak Nagar", "टिळक नगर", 331, 735, 709, 528, 510, 0, 2, "Tilak Vidyalaya, Tilak Nagar"],
  [4, "Shivaji Nagar", "शिवाजी नगर", 390, 858, 836, 612, 598, 1, 2, "Community Hall, Shivaji Nagar"],
  [5, "Mahatma Phule Ward", "महात्मा फुले प्रभाग", 344, 760, 741, 549, 537, 0, 2, "Mahatma Phule Samaj Mandir"],
  [6, "Bazaar Line", "बाजार लाइन", 402, 889, 861, 640, 621, 2, 3, "Nagar Parishad School No. 2, Bazaar Line"],
  [7, "Railway Colony Side", "रेल्वे कॉलनी परिसर", 318, 702, 668, 505, 482, 0, 2, "Railway Institute Hall"],
  [8, "Ambedkar Nagar", "आंबेडकर नगर", 376, 830, 812, 596, 583, 1, 2, "Buddha Vihar Hall, Ambedkar Nagar"],
  [9, "Sai Nagar", "साई नगर", 359, 792, 774, 571, 559, 0, 2, "Sai Mandir Sabhagruha, Sai Nagar"],
  [10, "Hanuman Ward", "हनुमान प्रभाग", 327, 721, 703, 519, 506, 0, 2, "Anganwadi Centre, Hanuman Ward"],
];

export interface WardStats {
  wardNo: number;
  area: LText;
  /** The two elected Nagarsevaks of this ward (Seat A and Seat B). */
  members: WardMember[];
  households: number;
  population: { male: number; female: number; total: number };
  voters: { male: number; female: number; other: number; total: number };
  pollingBooths: number;
  pollingStation: string;
  /** Females per 1000 males (population). */
  sexRatio: number;
}

export const wards: WardStats[] = rows.map(
  ([wardNo, en, mr, households, pm, pf, vm, vf, vo, booths, station]) => {
    const members = wardMembers
      .filter((m) => m.wardNo === wardNo)
      .sort((a, b) => (a.seat ?? "").localeCompare(b.seat ?? ""));
    return {
      wardNo,
      area: { en, mr, hi: mr },
      members,
      households,
      population: { male: pm, female: pf, total: pm + pf },
      voters: { male: vm, female: vf, other: vo, total: vm + vf + vo },
      pollingBooths: booths,
      pollingStation: station,
      sexRatio: Math.round((pf / pm) * 1000),
    };
  },
);

export function getWard(wardNo: number): WardStats | undefined {
  return wards.find((w) => w.wardNo === wardNo);
}

/** Town-wide totals derived from the ward rows. */
export const wardTotals = wards.reduce(
  (acc, w) => {
    acc.households += w.households;
    acc.population.male += w.population.male;
    acc.population.female += w.population.female;
    acc.population.total += w.population.total;
    acc.voters.male += w.voters.male;
    acc.voters.female += w.voters.female;
    acc.voters.other += w.voters.other;
    acc.voters.total += w.voters.total;
    acc.pollingBooths += w.pollingBooths;
    return acc;
  },
  {
    wards: rows.length,
    households: 0,
    population: { male: 0, female: 0, total: 0 },
    voters: { male: 0, female: 0, other: 0, total: 0 },
    pollingBooths: 0,
  },
);

/** Year of the electoral roll the figures are taken from. VERIFY. */
export const VOTER_LIST_REFERENCE = "Electoral roll (sample) – qualifying date 01-01-2026";

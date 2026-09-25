/**
 * Ward-wise water supply schedule. ⚠ SAMPLE — update to the current schedule.
 * `days` uses JavaScript weekday numbers: 0 = Sunday … 6 = Saturday.
 */
export interface SupplySlot {
  fromWard: number;
  toWard: number;
  time: string;
  days: number[];
}

export const waterSchedule: SupplySlot[] = [
  { fromWard: 1, toWard: 4, time: "6:00 AM – 7:30 AM", days: [1, 3, 5] },
  { fromWard: 5, toWard: 8, time: "7:30 AM – 9:00 AM", days: [1, 3, 5] },
  { fromWard: 9, toWard: 12, time: "6:00 AM – 7:30 AM", days: [2, 4, 6] },
  { fromWard: 13, toWard: 17, time: "7:30 AM – 9:00 AM", days: [2, 4, 6] },
];

export const WEEKDAYS = {
  en: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  mr: ["रविवार", "सोमवार", "मंगळवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"],
  hi: ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"],
} as const;

export function slotForWard(ward: number): SupplySlot | undefined {
  return waterSchedule.find((s) => ward >= s.fromWard && ward <= s.toWard);
}

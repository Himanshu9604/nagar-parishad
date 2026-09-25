import { Seal } from "@/components/ui/Seal";

export default function Loading() {
  return (
    <div className="container flex min-h-[50vh] flex-col items-center justify-center gap-5 py-20" role="status" aria-live="polite">
      <div className="relative">
        <span className="absolute inset-0 animate-ping rounded-full bg-gold-300/40" aria-hidden="true" />
        <Seal className="relative h-16 w-16" />
      </div>
      <div className="h-1 w-40 overflow-hidden rounded-full bg-navy-100">
        <div className="h-full w-full animate-pulse rounded-full bg-gradient-to-r from-gold-300 to-gold-600" />
      </div>
      <span className="sr-only">Loading…</span>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, ChevronsDownUp, ChevronsUpDown, UserRound } from "lucide-react";
import type { OrgKind, OrgNode } from "@/data/orgStructure";
import { useLanguage } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

const KIND_STYLE: Record<OrgKind, string> = {
  state: "bg-gradient-to-br from-navy-800 to-navy-950 text-ivory border-navy-900",
  district: "bg-gradient-to-br from-navy-700 to-navy-900 text-ivory border-navy-800",
  elected: "bg-gradient-to-br from-gold-100 to-gold-200 text-navy-950 border-gold-300",
  executive: "bg-gradient-to-br from-navy-800 to-navy-950 text-ivory border-gold-400/60",
  committee: "bg-ivory-50 text-navy-900 border-gold-200",
  member: "bg-white text-navy-900 border-navy-100",
  dept: "bg-white text-navy-900 border-navy-100",
  staff: "bg-ivory-100 text-navy-600 border-dashed border-navy-200",
};

const DARK: OrgKind[] = ["state", "district", "executive"];

function collectIds(node: OrgNode, acc: string[] = []): string[] {
  if (node.children?.length) {
    acc.push(node.id);
    node.children.forEach((c) => collectIds(c, acc));
  }
  return acc;
}

/** Card for a single post in the hierarchy. Exported for the static government chain. */
export function OrgCard({
  node,
  open,
  onToggle,
  className,
}: {
  node: OrgNode;
  open?: boolean;
  onToggle?: () => void;
  className?: string;
}) {
  const { l, t } = useLanguage();
  const dark = DARK.includes(node.kind);
  const hasChildren = !!node.children?.length;
  const small = node.kind === "staff" || node.kind === "member";

  return (
    <div
      className={cn(
        "relative flex items-start gap-3 rounded-xl border shadow-royal transition hover:shadow-royal-lg",
        small ? "px-3.5 py-2.5" : "px-4 py-3.5",
        KIND_STYLE[node.kind],
        className,
      )}
    >
      <div className="min-w-0 flex-1">
        <p className={cn("font-semibold leading-snug", small ? "text-sm" : "text-[0.95rem]")}>{l(node.title)}</p>
        {node.holder && (
          <p className={cn("mt-0.5 inline-flex items-center gap-1.5 text-xs", dark ? "text-gold-200" : "text-gold-700")}>
            <UserRound className="h-3 w-3" aria-hidden="true" />
            {l(node.holder)}
          </p>
        )}
        {node.note && (
          <p className={cn("mt-1 text-xs leading-relaxed", dark ? "text-ivory/70" : "text-navy-500")}>{l(node.note)}</p>
        )}
      </div>
      <div className="flex shrink-0 items-center gap-1">
        {node.href && (
          <Link
            href={node.href}
            aria-label={`${t("common.view")}: ${l(node.title)}`}
            className={cn(
              "grid h-7 w-7 place-items-center rounded-full transition",
              dark ? "text-gold-200 hover:bg-white/10" : "text-navy-400 hover:bg-navy-50 hover:text-navy-900",
            )}
          >
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        )}
        {hasChildren && onToggle && (
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={open}
            aria-label={l(node.title)}
            className={cn(
              "grid h-7 w-7 place-items-center rounded-full transition",
              dark ? "bg-white/10 text-gold-200 hover:bg-white/20" : "bg-navy-50 text-navy-700 hover:bg-navy-100",
            )}
          >
            <ChevronDown className={cn("h-4 w-4 transition", open && "rotate-180")} aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
}

function Branch({
  node,
  openIds,
  toggle,
  inGrid = false,
}: {
  node: OrgNode;
  openIds: Set<string>;
  toggle: (id: string) => void;
  inGrid?: boolean;
}) {
  const open = openIds.has(node.id);
  const children = node.children ?? [];
  const grid = children.length > 8;
  return (
    <li
      className={cn(
        "relative before:absolute before:-left-5 before:top-6 before:w-5 before:border-t-2 before:border-gold-300/70",
        inGrid && "sm:before:hidden",
      )}
    >
      <OrgCard node={node} open={open} onToggle={() => toggle(node.id)} />
      <AnimatePresence initial={false}>
        {children.length > 0 && open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={cn(
              "ml-5 mt-3 space-y-3 overflow-hidden border-l-2 border-gold-300/70 pl-5",
              grid && "sm:grid sm:grid-cols-2 sm:gap-3 sm:space-y-0",
            )}
          >
            {children.map((c) => (
              <Branch key={c.id} node={c} openIds={openIds} toggle={toggle} inGrid={grid} />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}

/**
 * Collapsible hierarchy tree. Large leaf lists (e.g. 17 ward members) start collapsed.
 */
export function OrgTree({ root, collapsedByDefault = [] }: { root: OrgNode; collapsedByDefault?: string[] }) {
  const { t } = useLanguage();
  const allIds = useMemo(() => collectIds(root), [root]);
  const [openIds, setOpenIds] = useState<Set<string>>(
    () => new Set(allIds.filter((id) => !collapsedByDefault.includes(id))),
  );

  const toggle = useCallback((id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const rootOpen = openIds.has(root.id);
  const children = root.children ?? [];

  return (
    <div>
      <div className="mb-4 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => setOpenIds(new Set(allIds))}
          className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-navy-700 ring-1 ring-navy-100 transition hover:ring-gold-300"
        >
          <ChevronsUpDown className="h-3.5 w-3.5" aria-hidden="true" />
          {t("org.expandAll")}
        </button>
        <button
          type="button"
          onClick={() => setOpenIds(new Set([root.id]))}
          className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-navy-700 ring-1 ring-navy-100 transition hover:ring-gold-300"
        >
          <ChevronsDownUp className="h-3.5 w-3.5" aria-hidden="true" />
          {t("org.collapseAll")}
        </button>
      </div>

      <OrgCard node={root} open={rootOpen} onToggle={() => toggle(root.id)} className="ring-2 ring-gold-300/50" />
      <AnimatePresence initial={false}>
        {rootOpen && children.length > 0 && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="ml-5 mt-3 space-y-3 overflow-hidden border-l-2 border-gold-300/70 pl-5"
          >
            {children.map((c) => (
              <Branch key={c.id} node={c} openIds={openIds} toggle={toggle} />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

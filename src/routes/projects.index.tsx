import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Bell,
  Download,
  Plus,
  Search,
  Bookmark,
  ChevronDown,
  X,
  MoreHorizontal,
  UserPlus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { AppShell } from "@/components/AppShell";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — iCertify" },
      { name: "description", content: "All active and recent projects." },
    ],
  }),
  component: ProjectsIndex,
});

type Status =
  | "ACTION REQUIRED"
  | "UNDER REVIEW"
  | "IN PROGRESS"
  | "AWAITING PAYMENT"
  | "AWAITING ALLOCATION"
  | "SUBMITTED"
  | "CERTIFIED"
  | "CLIENT DRAFT";

type Allocated = { initials: string; tone: string }[];

type Row = {
  id: string;
  address: string;
  addressSub: string;
  status: Status;
  client: string;
  clientSub: string;
  servicesDone: number;
  servicesTotal: number;
  jurisdiction: "NT" | "SA" | "VIC";
  nextInspection?: { when: string; what: string };
  lastActivity: string;
  allocated: Allocated;
  allocatePending?: boolean;
  draft?: boolean;
};

const ROWS: Row[] = [
  {
    id: "PBC-2026-0142", address: "14 Stuart Hwy, Berrimah NT", addressSub: "Lot 1421, DP 47829",
    status: "ACTION REQUIRED", client: "Territory Holdings Pty Ltd", clientSub: "Sarah Mitchell",
    servicesDone: 4, servicesTotal: 5, jurisdiction: "NT",
    nextInspection: { when: "Tomorrow, 9:00am", what: "Frame inspection" },
    lastActivity: "2 hours ago",
    allocated: [{ initials: "DC", tone: "bg-slate-700" }, { initials: "JW", tone: "bg-blue-600" }, { initials: "KB", tone: "bg-orange-500" }, { initials: "+1", tone: "bg-neutral-200 !text-neutral-700" }],
  },
  {
    id: "PBC-2026-0141", address: "88 Mitchell St, Darwin NT", addressSub: "Lot 88, Unit 14",
    status: "UNDER REVIEW", client: "Northern Build Group", clientSub: "Michael Chen",
    servicesDone: 2, servicesTotal: 3, jurisdiction: "NT",
    lastActivity: "Yesterday",
    allocated: [{ initials: "JW", tone: "bg-blue-600" }, { initials: "DC", tone: "bg-slate-700" }],
  },
  {
    id: "PBC-2026-0140", address: "22 Jetty Rd, Glenelg SA", addressSub: "Lot 2, CT 6112/789",
    status: "IN PROGRESS", client: "Glenelg Coastal Apartments", clientSub: "Anna Petrov",
    servicesDone: 6, servicesTotal: 7, jurisdiction: "SA",
    nextInspection: { when: "Mon 18 May, 2:00pm", what: "Final inspection" },
    lastActivity: "Yesterday",
    allocated: [{ initials: "DC", tone: "bg-slate-700" }, { initials: "KB", tone: "bg-orange-500" }, { initials: "JW", tone: "bg-blue-600" }, { initials: "+2", tone: "bg-neutral-200 !text-neutral-700" }],
  },
  {
    id: "PBC-2026-0139", address: "4 Tiger Brennan Dr, Tivendale NT", addressSub: "Lot 19, Industrial Estate",
    status: "AWAITING PAYMENT", client: "Top End Storage Co.", clientSub: "Ravi Singh",
    servicesDone: 1, servicesTotal: 2, jurisdiction: "NT",
    lastActivity: "3 days ago",
    allocated: [{ initials: "KB", tone: "bg-orange-500" }],
  },
  {
    id: "PBC-2026-0138", address: "214 Chapel St, South Yarra VIC", addressSub: "Lot 12 on PS 73841V",
    status: "IN PROGRESS", client: "Chapel St Developments", clientSub: "Tom Williams",
    servicesDone: 3, servicesTotal: 4, jurisdiction: "VIC",
    nextInspection: { when: "Thu 22 May, 10:30am", what: "Slab inspection" },
    lastActivity: "2 days ago",
    allocated: [{ initials: "JW", tone: "bg-blue-600" }, { initials: "DC", tone: "bg-slate-700" }],
  },
  {
    id: "PBC-2026-0137", address: "7 Coonawarra Rd, Winnellie NT", addressSub: "Lot 7, Section 50",
    status: "AWAITING ALLOCATION", client: "Coonawarra Industries", clientSub: "Lisa Tan",
    servicesDone: 0, servicesTotal: 3, jurisdiction: "NT",
    lastActivity: "4 days ago",
    allocated: [], allocatePending: true,
  },
  {
    id: "PBC-2026-0136", address: "112 Bagot Rd, Millner NT", addressSub: "Lot 112, Bagot Park",
    status: "SUBMITTED", client: "Millner Homes Pty Ltd", clientSub: "David Lawson",
    servicesDone: 0, servicesTotal: 2, jurisdiction: "NT",
    lastActivity: "5 days ago",
    allocated: [],
  },
  {
    id: "PBC-2026-0135", address: "29 Cavenagh St, Darwin NT", addressSub: "Lot 29, DP 12483",
    status: "IN PROGRESS", client: "Cavenagh Capital", clientSub: "Emma Walsh",
    servicesDone: 5, servicesTotal: 6, jurisdiction: "NT",
    nextInspection: { when: "Fri 16 May, 11:00am", what: "Footings" },
    lastActivity: "6 days ago",
    allocated: [{ initials: "DC", tone: "bg-slate-700" }, { initials: "JW", tone: "bg-blue-600" }, { initials: "KB", tone: "bg-orange-500" }, { initials: "+1", tone: "bg-neutral-200 !text-neutral-700" }],
  },
  {
    id: "PBC-2026-0134", address: "3/56 Smith St, Darwin NT", addressSub: "Unit 3, Lot 56",
    status: "CERTIFIED", client: "Smith St Holdings", clientSub: "Patrick O'Brien",
    servicesDone: 3, servicesTotal: 3, jurisdiction: "NT",
    lastActivity: "1 week ago",
    allocated: [{ initials: "DC", tone: "bg-slate-700" }, { initials: "KB", tone: "bg-orange-500" }],
  },
  {
    id: "PBC-2026-0133", address: "Address not yet provided", addressSub: "Draft submission",
    status: "CLIENT DRAFT", client: "Hobson Bay Developments", clientSub: "Jess Murphy",
    servicesDone: 0, servicesTotal: 0, jurisdiction: "VIC",
    lastActivity: "1 week ago",
    allocated: [], draft: true,
  },
];

const STATUS_STYLES: Record<Status, string> = {
  "ACTION REQUIRED": "bg-rose-50 text-rose-700",
  "UNDER REVIEW": "bg-amber-50 text-amber-700",
  "IN PROGRESS": "bg-blue-50 text-blue-700",
  "AWAITING PAYMENT": "bg-orange-50 text-orange-700",
  "AWAITING ALLOCATION": "bg-amber-50 text-amber-700",
  "SUBMITTED": "bg-sky-50 text-sky-700",
  "CERTIFIED": "bg-emerald-50 text-emerald-700",
  "CLIENT DRAFT": "bg-neutral-100 text-neutral-600",
};

function ProjectsIndex() {
  const [scope, setScope] = useState<"active" | "all">("active");

  return (
    <AppShell>

      <div>
        {/* Header */}
        <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">Work · Practice</p>
        <h1 className="mt-1 text-[26px] font-semibold tracking-tight text-neutral-900">Projects</h1>
        <p className="mt-1 max-w-2xl text-[13px] text-neutral-600">
          Every project the practice is engaged on. Use the Active toggle for the working queue, or switch to All projects for archive and audit work.
        </p>

        {/* Scope toggle */}
        <div className="mt-5 inline-flex items-center gap-1 rounded-[8px] bg-neutral-100 p-1">
          <button
            onClick={() => setScope("active")}
            className={`inline-flex items-center gap-2 rounded-[6px] px-3 py-1.5 text-[12px] font-medium transition-colors ${
              scope === "active" ? "bg-slate-900 text-white shadow-sm" : "text-neutral-600 hover:text-neutral-900"
            }`}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-400" />
            Active
            <span className={`rounded px-1.5 py-0.5 text-[10px] font-semibold ${scope === "active" ? "bg-white/15 text-white" : "bg-neutral-200 text-neutral-700"}`}>42</span>
          </button>
          <button
            onClick={() => setScope("all")}
            className={`inline-flex items-center gap-2 rounded-[6px] px-3 py-1.5 text-[12px] font-medium transition-colors ${
              scope === "all" ? "bg-slate-900 text-white shadow-sm" : "text-neutral-600 hover:text-neutral-900"
            }`}
          >
            All projects
            <span className={`rounded px-1.5 py-0.5 text-[10px] font-semibold ${scope === "all" ? "bg-white/15 text-white" : "bg-neutral-200 text-neutral-700"}`}>387</span>
          </button>
        </div>

        {/* Table card */}
        <div className="mt-5 rounded-[8px] border border-neutral-200 bg-white">
          {/* Saved view bar */}
          <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3">
            <div className="flex items-center gap-4">
              <button className="inline-flex items-center gap-1.5 text-[13px] font-medium text-neutral-800">
                <Bookmark className="h-3.5 w-3.5 text-neutral-500" /> All active projects
                <ChevronDown className="h-3 w-3 text-neutral-400" />
              </button>
              <span className="text-[12px] text-neutral-500">
                <span className="font-semibold text-neutral-700">42 projects</span> · sorted by project number, newest first
              </span>
            </div>
            <div className="flex items-center gap-4 text-[12px]">
              <button className="inline-flex items-center gap-1 text-neutral-600 hover:text-neutral-900">
                <Plus className="h-3.5 w-3.5" /> Add filter
              </button>
              <button className="inline-flex items-center gap-1 text-neutral-600 hover:text-neutral-900">
                <span className="grid grid-cols-2 gap-[2px]">
                  <span className="h-1 w-1 bg-current" /><span className="h-1 w-1 bg-current" />
                  <span className="h-1 w-1 bg-current" /><span className="h-1 w-1 bg-current" />
                </span>
                Columns
              </button>
            </div>
          </div>

          {/* Filters chips */}
          <div className="flex items-center gap-2 border-b border-neutral-200 px-4 py-2.5">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">Filters:</span>
            <FilterChip label="Scope: Active" active />
            <FilterChip label="Status" />
            <FilterChip label="Jurisdiction" />
            <FilterChip label="Client" />
            <FilterChip label="Involves staff" />
            <button className="ml-auto text-[12px] text-neutral-500 underline-offset-2 hover:text-neutral-800 hover:underline">Clear all</button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1100px] text-left">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50/60 text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
                  <th className="w-8 py-2.5 pl-4"><input type="checkbox" className="h-3.5 w-3.5 rounded border-neutral-300" /></th>
                  <th className="py-2.5 pr-3">Project #</th>
                  <th className="py-2.5 pr-3">Address</th>
                  <th className="py-2.5 pr-3">Status</th>
                  <th className="py-2.5 pr-3">Client</th>
                  <th className="py-2.5 pr-3">Services</th>
                  <th className="py-2.5 pr-3">Next inspection</th>
                  <th className="py-2.5 pr-3">Last activity</th>
                  <th className="py-2.5 pr-3">Allocated</th>
                  <th className="w-8" />
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {ROWS.map((r) => (
                  <tr key={r.id} className="text-[13px] hover:bg-neutral-50/60">
                    <td className="py-3 pl-4"><input type="checkbox" className="h-3.5 w-3.5 rounded border-neutral-300" /></td>
                    <td className="py-3 pr-3 font-mono text-[12px] text-neutral-700">{r.id}</td>
                    <td className="py-3 pr-3">
                      <Link to="/projects/$projectId" params={{ projectId: r.id }} className="block">
                        <p className={`font-medium ${r.draft ? "italic text-neutral-500" : "text-neutral-900"}`}>{r.address}</p>
                        <p className="text-[11px] text-neutral-500">{r.addressSub}</p>
                      </Link>
                    </td>
                    <td className="py-3 pr-3">
                      <span className={`inline-flex items-center rounded-[4px] px-2 py-0.5 text-[10px] font-semibold tracking-wider ${STATUS_STYLES[r.status]}`}>
                        {r.status}
                      </span>
                    </td>
                    <td className="py-3 pr-3">
                      <p className="font-medium text-neutral-900">{r.client}</p>
                      <p className="text-[11px] text-neutral-500">{r.clientSub}</p>
                    </td>
                    <td className="py-3 pr-3">
                      {r.servicesTotal > 0 ? (
                        <span className="inline-flex items-center gap-1.5 text-neutral-700">
                          <span className="font-semibold">{r.servicesDone}</span>
                          <span className="text-neutral-400">of {r.servicesTotal}</span>
                          <JBadge j={r.jurisdiction} />
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 italic text-neutral-400">
                          Not configured <JBadge j={r.jurisdiction} />
                        </span>
                      )}
                    </td>
                    <td className="py-3 pr-3">
                      {r.nextInspection ? (
                        <>
                          <p className="text-neutral-800">{r.nextInspection.when}</p>
                          <p className="text-[11px] text-neutral-500">{r.nextInspection.what}</p>
                        </>
                      ) : (
                        <span className="text-neutral-300">—</span>
                      )}
                    </td>
                    <td className="py-3 pr-3 text-neutral-600">{r.lastActivity}</td>
                    <td className="py-3 pr-3">
                      {r.allocatePending ? (
                        <button className="inline-flex items-center gap-1 text-[12px] font-medium text-rose-600 hover:text-rose-700">
                          <UserPlus className="h-3.5 w-3.5" /> Allocate services
                        </button>
                      ) : r.allocated.length === 0 ? (
                        <span className="text-neutral-300">—</span>
                      ) : (
                        <div className="flex -space-x-1.5">
                          {r.allocated.map((a, i) => (
                            <span key={i} className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-semibold text-white ring-2 ring-white ${a.tone}`}>
                              {a.initials}
                            </span>
                          ))}
                        </div>
                      )}
                    </td>
                    <td className="py-3 pr-4 text-right">
                      <button className="p-1 text-neutral-400 hover:text-neutral-700"><MoreHorizontal className="h-4 w-4" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between border-t border-neutral-200 px-4 py-3 text-[12px] text-neutral-600">
            <span>Showing <span className="font-semibold text-neutral-800">1–10</span> of <span className="font-semibold text-neutral-800">42</span></span>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span>Rows:</span>
                <button className="inline-flex items-center gap-1 rounded-[4px] border border-neutral-200 bg-white px-2 py-1">
                  25 <ChevronDown className="h-3 w-3" />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button className="rounded p-1 text-neutral-500 hover:bg-neutral-100"><ChevronLeft className="h-3.5 w-3.5" /></button>
                <span>Page <span className="font-semibold text-neutral-800">1</span> of 5</span>
                <button className="rounded p-1 text-neutral-500 hover:bg-neutral-100"><ChevronRight className="h-3.5 w-3.5" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

function FilterChip({ label, active }: { label: string; active?: boolean }) {
  return (
    <button className={`inline-flex items-center gap-1.5 rounded-[6px] border px-2.5 py-1 text-[12px] ${
      active
        ? "border-slate-900 bg-slate-900 text-white"
        : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50"
    }`}>
      {label}
      {active ? <X className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
    </button>
  );
}

function JBadge({ j }: { j: "NT" | "SA" | "VIC" }) {
  return (
    <span className="inline-flex items-center rounded-[3px] border border-neutral-200 bg-neutral-50 px-1.5 py-0.5 text-[9px] font-semibold tracking-wider text-neutral-600">
      {j}
    </span>
  );
}

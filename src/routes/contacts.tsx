import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Download,
  ChevronDown,
  UserPlus,
  Search,
  Building2,
  Users as UsersIcon,
  UserCog,
  Briefcase,
  Mail,
  MoreHorizontal,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { AppShell } from "@/components/AppShell";

export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [
      { title: "Contacts — iCertify" },
      { name: "description", content: "Master directory of people, companies, staff, and portal accounts across all projects." },
    ],
  }),
  component: ContactsPage,
});

type TabKey = "clients" | "companies" | "staff" | "portal";

const TABS: { key: TabKey; label: string; icon: typeof Briefcase; count: number }[] = [
  { key: "clients", label: "Clients", icon: Briefcase, count: 87 },
  { key: "companies", label: "Companies", icon: Building2, count: 52 },
  { key: "staff", label: "Staff", icon: UsersIcon, count: 6 },
  { key: "portal", label: "All portal users", icon: UserCog, count: 94 },
];

type Portal = "active" | "invited" | "none";

interface Client {
  initials: string;
  name: string;
  avatarColor: string;
  company: string;
  position: string;
  phone: string;
  email: string;
  portal: Portal;
  projects: number;
  lastContact: string;
}

const CLIENTS: Client[] = [
  { initials: "MG", name: "Mark Glenister", avatarColor: "bg-[#FDE68A] text-[#92400E]", company: "Glenelg Developments Pty Ltd", position: "Director", phone: "+61 412 484 921", email: "mark@glenelgdev.com.au", portal: "active", projects: 3, lastContact: "Today" },
  { initials: "SP", name: "Sarah Pham", avatarColor: "bg-[#FBCFE8] text-[#9D174D]", company: "Glenelg Developments Pty Ltd", position: "Project Manager", phone: "+61 458 112 003", email: "sarah.pham@glenelgdev.com.au", portal: "active", projects: 3, lastContact: "Yesterday" },
  { initials: "LM", name: "Lisa Macready", avatarColor: "bg-[#BFDBFE] text-[#1E40AF]", company: "Macready Constructions Pty Ltd", position: "General Manager", phone: "+61 411 882 040", email: "lisa@macreadyconst.com.au", portal: "active", projects: 5, lastContact: "2 days ago" },
  { initials: "AV", name: "Anna Voss", avatarColor: "bg-[#C7D2FE] text-[#3730A3]", company: "Voss Developments Pty Ltd", position: "Director", phone: "+61 419 442 081", email: "anna@vossdev.com.au", portal: "active", projects: 2, lastContact: "5 days ago" },
  { initials: "NC", name: "Nina Chambers", avatarColor: "bg-[#BBF7D0] text-[#166534]", company: "Coastal Living Group Pty Ltd", position: "Director", phone: "+61 432 008 711", email: "nina@coastalliving.com.au", portal: "active", projects: 1, lastContact: "1 week ago" },
  { initials: "PK", name: "Peter Kapeli", avatarColor: "bg-[#FED7AA] text-[#9A3412]", company: "Kapeli Properties Pty Ltd", position: "Owner", phone: "+61 478 199 332", email: "peter@kapeli.com.au", portal: "invited", projects: 1, lastContact: "10 days ago" },
  { initials: "RT", name: "Robert Tan", avatarColor: "bg-[#FECACA] text-[#991B1B]", company: "Tan Holdings Pty Ltd", position: "Director", phone: "+61 416 559 220", email: "rtan@tanholdings.com.au", portal: "none", projects: 2, lastContact: "3 weeks ago" },
  { initials: "BC", name: "Ben Carter", avatarColor: "bg-[#E9D5FF] text-[#6B21A8]", company: "Carter & Co Builders", position: "Owner", phone: "+61 401 887 553", email: "ben@cartercobuilders.com.au", portal: "none", projects: 1, lastContact: "2 months ago" },
  { initials: "TH", name: "Tom Hesketh", avatarColor: "bg-[#A7F3D0] text-[#065F46]", company: "Hesketh Estates Pty Ltd", position: "Director", phone: "+61 408 224 119", email: "tom@heskethestates.com.au", portal: "none", projects: 0, lastContact: "8 months ago" },
];

function ContactsPage() {
  const [tab, setTab] = useState<TabKey>("clients");
  const [portal, setPortal] = useState<"any" | Portal>("any");

  return (
    <AppShell>
      <div className="max-w-[1600px]">
        {/* Page header */}
        <div className="flex items-start justify-between gap-6 mb-6">
          <div>
            <h1 className="text-[26px] font-bold text-neutral-800 tracking-tight">Contacts</h1>
            <p className="mt-1 text-[13px] text-neutral-600">
              Master directory of people, companies, staff, and portal accounts across all projects.
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white border border-neutral-300 hover:bg-neutral-100 text-neutral-800 text-[13px] font-medium rounded-[6px] transition-colors"
            >
              <Download className="h-4 w-4" /> Export
              <ChevronDown className="h-3.5 w-3.5 ml-0.5 text-neutral-500" />
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-primary-500 hover:bg-primary-700 text-white text-[13px] font-medium rounded-[6px] transition-colors"
            >
              <UserPlus className="h-4 w-4" /> Add client
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-neutral-200">
          <nav className="flex gap-1" aria-label="Contact categories">
            {TABS.map((t) => {
              const active = tab === t.key;
              const Icon = t.icon;
              return (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setTab(t.key)}
                  className={`relative inline-flex items-center gap-2 px-4 py-3 text-[13px] font-medium transition-colors ${
                    active ? "text-primary-500" : "text-neutral-600 hover:text-neutral-800"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {t.label}
                  <span
                    className={`text-[11px] px-1.5 py-0.5 rounded-[4px] font-semibold leading-none ${
                      active ? "bg-primary-100 text-primary-700" : "bg-neutral-200 text-neutral-700"
                    }`}
                  >
                    {t.count}
                  </span>
                  {active && (
                    <span className="absolute left-0 right-0 -bottom-px h-0.5 bg-primary-500" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Filter bar */}
        <div className="mt-5 bg-white border border-neutral-200 rounded-[8px] p-3 flex items-center gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
            <input
              type="search"
              placeholder="Search clients…"
              className="w-full pl-9 pr-3 py-2 text-[13px] bg-white border border-neutral-200 rounded-[6px] focus:outline-none focus:border-primary-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold tracking-wider uppercase text-neutral-600">Portal</span>
            {(["any", "active", "invited", "none"] as const).map((p) => {
              const active = portal === p;
              return (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPortal(p)}
                  className={`px-3 py-1 text-[12px] font-medium rounded-full border transition-colors capitalize ${
                    active
                      ? "border-primary-500 bg-primary-500/5 text-primary-500"
                      : "border-neutral-300 text-neutral-700 hover:border-neutral-500 bg-white"
                  }`}
                >
                  {p === "any" ? "Any" : p}
                </button>
              );
            })}
          </div>
        </div>

        {/* Table */}
        <div className="mt-5 bg-white border border-neutral-200 rounded-[8px] overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-neutral-100 border-b border-neutral-200">
              <tr className="text-[11px] font-semibold tracking-wider uppercase text-neutral-600">
                <th className="px-5 py-3">Name</th>
                <th className="px-5 py-3">Company & Position</th>
                <th className="px-5 py-3">Phone</th>
                <th className="px-5 py-3">Email</th>
                <th className="px-5 py-3">Portal</th>
                <th className="px-5 py-3">Projects</th>
                <th className="px-5 py-3">Last contact</th>
                <th className="px-5 py-3 w-20"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {CLIENTS.map((c) => (
                <tr key={c.email} className="text-[13px] hover:bg-neutral-100/60 transition-colors">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className={`h-8 w-8 rounded-full flex items-center justify-center text-[11px] font-semibold ${c.avatarColor}`}>
                        {c.initials}
                      </div>
                      <span className="font-medium text-neutral-800">{c.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="text-neutral-800 font-medium">{c.company}</div>
                    <div className="text-[12px] text-neutral-600">{c.position}</div>
                  </td>
                  <td className="px-5 py-3.5 text-neutral-700 tabular-nums">{c.phone}</td>
                  <td className="px-5 py-3.5">
                    <a href={`mailto:${c.email}`} className="text-primary-500 hover:text-primary-700">
                      {c.email}
                    </a>
                  </td>
                  <td className="px-5 py-3.5">
                    <PortalBadge state={c.portal} />
                  </td>
                  <td className="px-5 py-3.5 text-neutral-800 font-medium tabular-nums">{c.projects}</td>
                  <td className="px-5 py-3.5 text-neutral-600">{c.lastContact}</td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center justify-end gap-1">
                      <button type="button" className="p-1.5 text-neutral-500 hover:text-neutral-800 hover:bg-neutral-200 rounded-[4px]" aria-label="Email">
                        <Mail className="h-4 w-4" />
                      </button>
                      <button type="button" className="p-1.5 text-neutral-500 hover:text-neutral-800 hover:bg-neutral-200 rounded-[4px]" aria-label="More">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex items-center justify-between px-5 py-3 border-t border-neutral-200 text-[12px] text-neutral-600">
            <span>Showing 1–9 of 87 clients</span>
            <div className="flex items-center gap-3">
              <span>Page 1 of 10</span>
              <div className="flex items-center gap-0.5">
                <button type="button" className="p-1.5 rounded-[4px] hover:bg-neutral-200 text-neutral-700 disabled:opacity-30" disabled aria-label="Previous">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button type="button" className="p-1.5 rounded-[4px] hover:bg-neutral-200 text-neutral-700" aria-label="Next">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

function PortalBadge({ state }: { state: Portal }) {
  if (state === "active") {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-[4px] text-[11px] font-semibold bg-[#D1FAE5] text-[#065F46]">
        <Check className="h-3 w-3" strokeWidth={3} /> ACTIVE
      </span>
    );
  }
  if (state === "invited") {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-[4px] text-[11px] font-semibold bg-[#FEF3C7] text-[#92400E]">
        <Mail className="h-3 w-3" /> INVITED
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-[4px] text-[11px] font-semibold bg-neutral-200 text-neutral-700">
      <span className="h-2 w-2 rounded-full border border-neutral-500" /> NONE
    </span>
  );
}

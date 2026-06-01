import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  AlertTriangle,
  Eye,
  HardDrive,
  Printer,
  PackageOpen,
  MoreHorizontal,
  Pencil,
  X,
  Info,
  Mail,
  MessageSquare,
  Phone,
  Smartphone,
  ChevronDown,
  Search as SearchIcon,
  ArrowUpDown,
  Edit3,
  Paperclip,
  Bold,
  Link2,
  CornerDownLeft,
  ArrowUpRight,
  Reply,
  Send,
  MessageCircle,
  ShieldCheck,
  Star,
  Briefcase,
  PenTool,
  Landmark,
  FileText,
  ExternalLink,
  RefreshCw,
  Filter,
  Download,
  Calendar,
  Building2,
  UserPlus,
  Settings,
  CircleCheck,
  PlusCircle,
  Upload,
  FolderPlus,
  Lock,
  PenLine,
  GitBranch,
  XCircle,
  Zap,
  User,
  Clock,
  Plus,
  RotateCcw,
  Check,
  Layers,
  ShieldAlert,
  Hammer,
  FileSignature,
  CalendarClock,
} from "lucide-react";

import { AppShell } from "@/components/AppShell";

export const Route = createFileRoute("/projects/$projectId")({
  head: () => ({
    meta: [
      { title: "22 Jetty Road, Glenelg — iCertify" },
      { name: "description", content: "Project overview, communications, inspections, and documents." },
    ],
  }),
  component: ProjectDetailPage,
});

type TabKey =
  | "overview"
  | "services"
  | "filenotes"
  | "communications"
  | "tasks"
  | "documents"
  | "checksheets"
  | "inspections"
  | "accounts"
  | "activity"
  | "contacts"
  | "milestones";

const TABS: { key: TabKey; label: string; count?: number }[] = [
  { key: "overview", label: "Overview" },
  { key: "services", label: "Services", count: 7 },
  { key: "milestones", label: "Milestones", count: 12 },
  { key: "inspections", label: "Inspections", count: 2 },
  { key: "communications", label: "Communications", count: 12 },
  { key: "documents", label: "Documents", count: 14 },
  { key: "filenotes", label: "File Notes", count: 7 },
  { key: "tasks", label: "Tasks", count: 4 },
  { key: "contacts", label: "Contacts", count: 6 },
  { key: "activity", label: "Activity" },
  { key: "accounts", label: "Accounts" },
];


const CHANNELS = [
  { key: "all", label: "All", count: 12, icon: null },
  { key: "email", label: "Email", count: 6, icon: Mail },
  { key: "sms", label: "SMS", count: 2, icon: MessageSquare },
  { key: "phone", label: "Phone", count: 3, icon: Phone },
  { key: "inapp", label: "In-app", count: 1, icon: Smartphone },
];

const STATS = [
  { label: "Total threads", value: "12", tone: "default" },
  { label: "Unread inbound", value: "3", tone: "primary", dot: true },
  { label: "Last 7 days", value: "8", tone: "default" },
  { label: "Visible to client", value: "6", tone: "success" },
  { label: "Awaiting reply", value: "4", tone: "danger" },
];

function ProjectDetailPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("overview");
  const [activeChannel, setActiveChannel] = useState("all");

  return (
    <AppShell>
      <div className="px-8 pt-6 pb-12 max-w-[1400px]">
        {/* Alert banner */}
        <div className="mb-5 flex items-start gap-3 rounded-[6px] border border-amber-200 bg-amber-50 px-4 py-3">
          <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded bg-amber-100">
            <AlertTriangle className="h-3.5 w-3.5 text-amber-700" />
          </div>
          <div className="flex-1 text-[13px] leading-snug text-neutral-800">
            <p className="font-semibold">Awaiting hydraulic engineering allocation — 53 days</p>
            <p className="mt-0.5 text-neutral-700">
              Hydraulic Engineering service has been awaiting allocation since 22 March. No SA-registered hydraulic engineer on current staff list. Discuss subcontracting with J. Walsh before escalating to client. See File Note #08 for client expectations.
            </p>
            <p className="mt-1 text-[11px] text-neutral-500">Raised by D. Cooke · 14 May 2026</p>
          </div>
          <div className="flex items-center gap-1.5 text-neutral-500">
            <button className="p-1 hover:text-neutral-800"><Pencil className="h-3.5 w-3.5" /></button>
            <button className="p-1 hover:text-neutral-800"><X className="h-4 w-4" /></button>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="mb-2 flex items-center gap-2 text-[12px] text-neutral-500">
          <span className="hover:text-neutral-800 cursor-pointer">Projects</span>
          <span>›</span>
          <span className="hover:text-neutral-800 cursor-pointer">Active</span>
          <span>›</span>
          <span className="text-neutral-700">PBC-2026-0140</span>
        </div>

        {/* Title row */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-[26px] font-semibold tracking-tight text-neutral-900">22 Jetty Road, Glenelg</h1>
              <span className="inline-flex items-center rounded-[4px] bg-blue-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-blue-700">
                In progress
              </span>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-neutral-600">
              <span className="font-mono">PBC-2026-0140</span>
              <span className="text-neutral-300">·</span>
              <span>SA · Class 2 · 4-storey residential apartments</span>
              <span className="text-neutral-300">·</span>
              <span>Started 18 Mar 2026 · Glenelg Coastal Apartments</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-neutral-500 hover:text-neutral-800 rounded-md hover:bg-neutral-100">
              <Eye className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center gap-1.5 rounded-[6px] border border-neutral-200 bg-white px-3 py-1.5 text-[12px] font-medium text-neutral-700 hover:bg-neutral-50">
              <HardDrive className="h-3.5 w-3.5" /> Drive
            </button>
            <button className="inline-flex items-center gap-1.5 rounded-[6px] border border-neutral-200 bg-white px-3 py-1.5 text-[12px] font-medium text-neutral-700 hover:bg-neutral-50">
              <Printer className="h-3.5 w-3.5" /> Print summary
            </button>
            <button className="inline-flex items-center gap-1.5 rounded-[6px] bg-primary-500 px-3 py-1.5 text-[12px] font-medium text-white hover:bg-primary-700">
              <PackageOpen className="h-3.5 w-3.5" /> Open services
            </button>
            <button className="p-2 text-neutral-500 hover:text-neutral-800 rounded-md hover:bg-neutral-100">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-6 border-b border-neutral-200">
          <nav className="-mb-px flex flex-wrap gap-x-6">
            {TABS.map((tab) => {
              const active = tab.key === activeTab;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-1.5 border-b-2 px-1 py-3 text-[13px] transition-colors ${
                    active
                      ? "border-primary-500 text-primary-500 font-semibold"
                      : "border-transparent text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  <span>{tab.label}</span>
                  {tab.count !== undefined && (
                    <span className={`text-[10px] font-semibold rounded px-1.5 py-0.5 ${
                      active ? "bg-primary-100 text-primary-700" : "bg-neutral-100 text-neutral-600"
                    }`}>
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {activeTab === "communications" && (<>
        {/* Info banner */}
        <div className="mt-5 flex items-start gap-3 rounded-[6px] border border-blue-100 bg-blue-50/60 px-4 py-3 text-[12px] text-neutral-700">
          <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />

          <p>
            <span className="font-semibold text-blue-700">All conversations attached to this project</span> — email, SMS, phone calls, and in-app messages. iCertify is the primary outbound channel — staff send and reply from here, not from personal Gmail. Inbound messages arrive automatically via Make scenarios. Phone calls are staff-only by design. Each message is evidentiary and cannot be edited after sending.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-5 grid grid-cols-5 gap-3">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-[6px] border border-neutral-200 bg-white px-4 py-3">
              <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
                {s.label}
                {s.dot && <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />}
              </div>
              <div className={`mt-1 text-[24px] font-semibold leading-none ${
                s.tone === "success" ? "text-emerald-600" :
                s.tone === "danger" ? "text-red-600" :
                s.tone === "primary" ? "text-primary-500" :
                "text-neutral-900"
              }`}>
                {s.value}
              </div>
            </div>
          ))}
        </div>

        {/* Channel filters */}
        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500 mr-1">Channel:</span>
            {CHANNELS.map((c) => {
              const active = c.key === activeChannel;
              const Icon = c.icon;
              return (
                <button
                  key={c.key}
                  onClick={() => setActiveChannel(c.key)}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[12px] transition-colors ${
                    active
                      ? "border-primary-500 bg-primary-500 text-white"
                      : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50"
                  }`}
                >
                  {Icon && <Icon className="h-3 w-3" />}
                  <span>{c.label}</span>
                  <span className={`text-[10px] font-semibold ${active ? "text-white/80" : "text-neutral-500"}`}>{c.count}</span>
                </button>
              );
            })}
          </div>
          <button className="inline-flex items-center gap-1.5 rounded-[6px] bg-primary-500 px-3 py-1.5 text-[12px] font-medium text-white hover:bg-primary-700">
            <Edit3 className="h-3.5 w-3.5" /> Compose <ChevronDown className="h-3 w-3" />
          </button>
        </div>

        {/* Sub filters */}
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500 mr-1">Filters:</span>
            {["Direction", "Contact", "Last 30 days"].map((f) => (
              <button key={f} className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white px-3 py-1 text-[12px] text-neutral-700 hover:bg-neutral-50">
                {f} <ChevronDown className="h-3 w-3" />
              </button>
            ))}
            <button className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white px-3 py-1 text-[12px] text-neutral-700 hover:bg-neutral-50">
              <Eye className="h-3 w-3" /> Visible to client
            </button>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search threads…"
                className="h-7 w-[200px] rounded-[6px] border border-neutral-200 bg-white pl-7 pr-3 text-[12px] text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-primary-500"
              />
            </div>
            <button className="inline-flex items-center gap-1 rounded-[6px] border border-neutral-200 bg-white px-3 py-1.5 text-[12px] text-neutral-700 hover:bg-neutral-50">
              <ArrowUpDown className="h-3 w-3" /> Last activity
            </button>
          </div>
        </div>

        {/* Expanded thread */}
        <div className="mt-5 rounded-[8px] border border-neutral-200 bg-white">
          <div className="flex items-center justify-between border-b border-neutral-100 px-5 py-3">
            <div className="flex items-center gap-3">
              <ChannelChip kind="email" />
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-[13px] font-semibold text-neutral-900">RE: 22 Jetty Rd — Hydraulic engineering allocation</p>
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                </div>
                <p className="mt-0.5 text-[11px] text-neutral-500">Stephen Marshall · stephen.marshall@glenelgapt.com.au</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-neutral-500">
              <span className="inline-flex items-center gap-1"><CornerDownLeft className="h-3 w-3" /> 2</span>
              <span className="inline-flex items-center gap-1"><ArrowUpRight className="h-3 w-3" /> 1</span>
              <span className="inline-flex items-center gap-1"><MessageCircle className="h-3 w-3" /> 3</span>
              <VisibilityBadge kind="visible" />
              <span>3h ago</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </div>
          </div>

          {/* Messages */}
          <Message
            initials="SM"
            name="Stephen Marshall"
            email="stephen.marshall@glenelgapt.com.au"
            meta="to duncan@pbc.au, david@pbc.au · 12 May 2026 09:41 ACST"
            inbound
            body={
              <>
                <p>Hi Duncan,</p>
                <p>Just following up on the hydraulic engineering for the Jetty Rd project. The builder has been asking about it because they want to start prelim work on the basement pump-out pit in early June. Where are we at with allocation?</p>
                <p>Also, can you give me a rough date for when we will have the construction certificate? The bank is asking.</p>
                <p>Cheers,<br/>Stephen</p>
              </>
            }
          />

          <Message
            initials="DC"
            name="Duncan Cooke"
            email="duncan@pbc.au"
            meta="to stephen.marshall@glenelgapt.com.au · cc david@pbc.au · 12 May 2026 14:22 ACST"
            body={
              <>
                <p>Stephen,</p>
                <p>Thanks for chasing this up. We are still searching for an SA-registered hydraulic engineer with capacity. I have reached out to two firms this week and I am waiting to hear back — I will give you a definitive answer by Friday 16 May.</p>
                <p>For the construction certificate timeline: assuming we get hydraulic sorted by end of May, we are tracking for a construction certificate by late June. I will write to the bank directly once we have confirmation.</p>
                <p>Regards,<br/>Duncan Cooke<br/>Building Certifier 19209BU</p>
              </>
            }
          />

          <Message
            initials="SM"
            name="Stephen Marshall"
            email="stephen.marshall@glenelgapt.com.au"
            meta="to duncan@pbc.au · Today 11:13 ACST"
            inbound
            unread
            body={
              <>
                <p>Duncan,</p>
                <p>Friday is fine. The builder is asking who they should liaise with on hydraulic once it is allocated — can you share that contact directly with them when you know? Their site supervisor is Anna Petrov, on this email or 0412 884 220.</p>
                <p>Cheers,<br/>Stephen</p>
              </>
            }
          />

          {/* Reply box */}
          <div className="border-t border-neutral-100 px-5 py-4">
            <div className="mb-2 flex items-center gap-2 text-[11px] text-neutral-500">
              <Reply className="h-3 w-3" />
              <span className="font-medium text-neutral-700">Reply to Stephen Marshall</span>
              <span>via Resend · from duncan@pbc.au</span>
            </div>
            <textarea
              rows={3}
              placeholder="Type your reply…"
              className="w-full resize-none rounded-[6px] border border-neutral-200 bg-white px-3 py-2 text-[13px] text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-primary-500"
            />
            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center gap-3 text-neutral-500">
                <button className="hover:text-neutral-800"><Paperclip className="h-4 w-4" /></button>
                <button className="hover:text-neutral-800"><Bold className="h-4 w-4" /></button>
                <button className="hover:text-neutral-800"><Link2 className="h-4 w-4" /></button>
                <span className="inline-flex items-center gap-1 text-[11px] text-emerald-600">
                  <Eye className="h-3 w-3" /> Client-visible
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className="inline-flex items-center gap-1.5 rounded-[6px] border border-neutral-200 bg-white px-3 py-1.5 text-[12px] font-medium text-neutral-700 hover:bg-neutral-50">
                  <ArrowUpRight className="h-3.5 w-3.5" /> Forward
                </button>
                <button className="inline-flex items-center gap-1.5 rounded-[6px] border border-neutral-200 bg-white px-3 py-1.5 text-[12px] font-medium text-neutral-700 hover:bg-neutral-50">
                  <Reply className="h-3.5 w-3.5" /> Reply all
                </button>
                <button className="inline-flex items-center gap-1.5 rounded-[6px] bg-primary-500 px-3 py-1.5 text-[12px] font-medium text-white hover:bg-primary-700">
                  <Send className="h-3.5 w-3.5" /> Send reply
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Collapsed threads */}
        <div className="mt-3 space-y-2">
          <ThreadRow
            channel="email"
            title="City of Holdfast Bay — Building Notification Form (BNF) acknowledgement"
            meta="Andrew Thurmer · building@holdfast.sa.gov.au"
            visibility="internal"
            stats={{ reply: 2, fwd: 1, msg: 3 }}
            time="2d ago"
          />
          <ThreadRow
            channel="inapp"
            title="Service allocation update — hydraulic engineering"
            meta="Duncan Cooke started thread · Stephen Marshall replied"
            visibility="visible"
            stats={{ reply: 1, fwd: 1, msg: 2 }}
            time="Yesterday"
            unread
          />
          <ThreadRow
            channel="sms"
            title="SMS · Anna Petrov (Site supervisor)"
            meta={'0412 884 220 · Last: "Can do Thursday 10am, will have the slab inspection sheet ready"'}
            visibility="internal"
            stats={{ reply: 2, fwd: 3, msg: 5 }}
            time="2d ago"
          />
          <ThreadRow
            channel="phone"
            title="Call · Andrew Thurmer (Council) · 8:42"
            tag="Telephony"
            meta="Handled by Duncan Cooke · Discussed BNF acknowledgement timing and next steps for CC submission"
            visibility="staff"
            stats={{ fwd: 1, msg: 1 }}
            time="3d ago"
          />
          <ThreadRow
            channel="phone"
            title="Call · Anna Petrov (Site supervisor)"
            tag="Manual log"
            meta="Handled by David Duxfield · Walked through slab inspection prep — formwork ready by Thursday"
            visibility="staff"
            stats={{ reply: 1, msg: 1 }}
            time="4d ago"
          />
        </div>

        <div className="mt-4 flex justify-center">
          <button className="inline-flex items-center gap-1.5 text-[12px] text-neutral-600 hover:text-neutral-900">
            <ChevronDown className="h-3.5 w-3.5" /> Show 6 older threads
          </button>
        </div>

        {/* Footer note */}
        <div className="mt-6 flex items-start gap-3 rounded-[6px] border border-neutral-200 bg-neutral-50 px-4 py-3 text-[11px] leading-relaxed text-neutral-600">
          <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-500" />
          <p>
            <span className="font-semibold text-neutral-800">Communications are evidentiary.</span> Outbound email and SMS are sent through transactional services (Resend, Postmark, Twilio). Inbound messages are ingested via Make scenarios. Phone calls are logged manually or via telephony integration. Once stored, message body content is not editable — corrections are made via a new message. Client visibility is per message for email, SMS, and in-app channels; phone calls are always staff-only.
          </p>
        </div>
        </>)}

        {activeTab === "overview" && <OverviewPanel />}
        {activeTab === "accounts" && <AccountsPanel />}
        {activeTab === "activity" && <ActivityPanel />}
        {activeTab === "contacts" && <ContactsPanel />}
        {activeTab === "documents" && <DocumentsPanel />}
        {activeTab === "filenotes" && <FileNotesPanel />}
        {activeTab === "milestones" && <MilestonesPanel />}
        {!["overview","communications","accounts","activity","contacts","documents","filenotes","milestones"].includes(activeTab) && (
          <div className="mt-8 rounded-[8px] border border-dashed border-neutral-300 bg-white p-12 text-center text-[13px] text-neutral-500">
            {TABS.find(t => t.key === activeTab)?.label} content coming soon.
          </div>
        )}
      </div>
    </AppShell>

  );
}

function ChannelChip({ kind }: { kind: "email" | "sms" | "phone" | "inapp" }) {
  const map = {
    email: { icon: Mail, label: "EMAIL", cls: "bg-blue-50 text-blue-700 border-blue-200" },
    sms: { icon: MessageSquare, label: "SMS", cls: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    phone: { icon: Phone, label: "PHONE", cls: "bg-amber-50 text-amber-700 border-amber-200" },
    inapp: { icon: Smartphone, label: "IN-APP", cls: "bg-violet-50 text-violet-700 border-violet-200" },
  } as const;
  const { icon: Icon, label, cls } = map[kind];
  return (
    <span className={`inline-flex items-center gap-1 rounded border px-2 py-0.5 text-[10px] font-semibold tracking-wider ${cls}`}>
      <Icon className="h-3 w-3" /> {label}
    </span>
  );
}

function VisibilityBadge({ kind }: { kind: "visible" | "internal" | "staff" }) {
  const map = {
    visible: { label: "VISIBLE", cls: "bg-emerald-50 text-emerald-700 border-emerald-200", icon: Eye },
    internal: { label: "INTERNAL", cls: "bg-neutral-100 text-neutral-600 border-neutral-200", icon: ShieldCheck },
    staff: { label: "STAFF ONLY", cls: "bg-amber-50 text-amber-700 border-amber-200", icon: ShieldCheck },
  } as const;
  const { label, cls, icon: Icon } = map[kind];
  return (
    <span className={`inline-flex items-center gap-1 rounded border px-1.5 py-0.5 text-[9px] font-semibold tracking-wider ${cls}`}>
      <Icon className="h-2.5 w-2.5" /> {label}
    </span>
  );
}

function Message({
  initials,
  name,
  email,
  meta,
  body,
  inbound,
  unread,
}: {
  initials: string;
  name: string;
  email: string;
  meta: string;
  body: ReactNode;
  inbound?: boolean;
  unread?: boolean;
}) {
  return (
    <div className="border-t border-neutral-100 px-5 py-4">
      <div className="flex gap-3">
        <div className="flex flex-col items-center gap-1">
          <div className={`flex h-6 w-6 items-center justify-center rounded-full ${inbound ? "bg-blue-100 text-blue-700" : "bg-neutral-200 text-neutral-700"}`}>
            {inbound ? <CornerDownLeft className="h-3 w-3" /> : <ArrowUpRight className="h-3 w-3" />}
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-200 text-[11px] font-semibold text-neutral-700">
            {initials}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="text-[12px] text-neutral-600">
              <span className="font-semibold text-neutral-900">{name}</span>{" "}
              <span className="text-neutral-500">&lt;{email}&gt;</span>
              {unread && <span className="ml-1.5 inline-block h-1.5 w-1.5 rounded-full bg-primary-500 align-middle" />}
              <div className="mt-0.5 text-[11px] text-neutral-500">{meta}</div>
            </div>
            <div className="flex items-center gap-2">
              <VisibilityBadge kind="visible" />
              <button className="text-neutral-400 hover:text-neutral-700"><MoreHorizontal className="h-4 w-4" /></button>
            </div>
          </div>
          <div className="mt-2 space-y-2 text-[13px] leading-relaxed text-neutral-800">
            {body}
          </div>
          <button className="mt-2 text-[11px] text-neutral-500 hover:text-neutral-800">
            › {inbound ? "View headers" : "Show quoted text"}
          </button>
        </div>
      </div>
    </div>
  );
}

function ThreadRow({
  channel,
  title,
  meta,
  visibility,
  stats,
  time,
  tag,
  unread,
}: {
  channel: "email" | "sms" | "phone" | "inapp";
  title: string;
  meta: string;
  visibility: "visible" | "internal" | "staff";
  stats: { reply?: number; fwd?: number; msg?: number };
  time: string;
  tag?: string;
  unread?: boolean;
}) {
  return (
    <div className="flex items-center justify-between rounded-[8px] border border-neutral-200 bg-white px-5 py-3 hover:bg-neutral-50 cursor-pointer">
      <div className="flex items-center gap-3 min-w-0">
        <ChannelChip kind={channel} />
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <p className="truncate text-[13px] font-semibold text-neutral-900">{title}</p>
            {tag && (
              <span className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 px-1.5 py-0.5 text-[10px] text-neutral-600">
                {tag}
              </span>
            )}
            {unread && <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />}
          </div>
          <p className="mt-0.5 truncate text-[11px] text-neutral-500">{meta}</p>
        </div>
      </div>
      <div className="flex items-center gap-3 text-[11px] text-neutral-500 flex-shrink-0">
        {stats.reply !== undefined && <span className="inline-flex items-center gap-1"><CornerDownLeft className="h-3 w-3" /> {stats.reply}</span>}
        {stats.fwd !== undefined && <span className="inline-flex items-center gap-1"><ArrowUpRight className="h-3 w-3" /> {stats.fwd}</span>}
        {stats.msg !== undefined && <span className="inline-flex items-center gap-1"><MessageCircle className="h-3 w-3" /> {stats.msg}</span>}
        <VisibilityBadge kind={visibility} />
        <span className="w-16 text-right">{time}</span>
        <ChevronDown className="h-3.5 w-3.5" />
      </div>
    </div>
  );
}

/* ============================== ACCOUNTS ============================== */

function AccountsPanel() {
  const summary = [
    { label: "Total quoted", value: "$48,500", sub: "4 fee offers", tone: "default" },
    { label: "Invoiced", value: "$19,000", sub: "3 invoices issued", tone: "primary" },
    { label: "Received", value: "$13,500", sub: "2 payments", tone: "success" },
    { label: "Outstanding", value: "$5,500", sub: "1 invoice unpaid", tone: "danger" },
    { label: "Unbilled", value: "$29,500", sub: "Accepted, not yet invoiced", tone: "warning" },
  ];
  const offers = [
    { ref: "FO-0140-01", svc: "SVC-01 Building Cert", desc: "Building certification — Class 2, 4-storey", sub: "Standard fee schedule · Quote QU-1142", amount: "$18,000.00", status: "accepted", issued: "18 Mar 2026", accepted: "22 Mar 2026" },
    { ref: "FO-0140-02", svc: "SVC-07 Acoustic", desc: "Acoustic assessment — full report", sub: "Quote QU-1148", amount: "$4,500.00", status: "accepted", issued: "22 Mar 2026", accepted: "25 Mar 2026" },
    { ref: "FO-0140-03", svc: "SVC-12 Structural", desc: "Independent structural review", sub: "Quote QU-1182 · Sent 9 days ago", amount: "$12,000.00", status: "sent", issued: "5 May 2026", accepted: "—" },
    { ref: "FO-0140-04", svc: "SVC-09 Hydraulic", desc: "Hydraulic services design", sub: "Draft — pending allocation, no Xero quote yet", amount: "$14,000.00", status: "draft", issued: "—", accepted: "—", noSync: true },
  ];
  const invoices = [
    { ref: "INV-0140-01", svc: "SVC-01 Building Cert", desc: "Deposit — 50% on engagement", sub: "Xero INV-09812 · Paid 28 Mar 2026", amount: "$9,000.00", status: "paid", issued: "22 Mar 2026", due: "5 Apr 2026" },
    { ref: "INV-0140-02", svc: "SVC-07 Acoustic", desc: "Acoustic assessment — full fee", sub: "Xero INV-09823 · Paid 2 Apr 2026", amount: "$4,500.00", status: "paid", issued: "25 Mar 2026", due: "8 Apr 2026" },
    { ref: "INV-0140-03", svc: "SVC-01 Building Cert", desc: "Progress claim — 30% on slab inspection pass", sub: "Xero INV-09984 · Awaiting payment", amount: "$5,500.00", status: "sent", issued: "1 May 2026", due: "15 May 2026", overdue: true },
  ];
  const payments = [
    { date: "28 Mar 2026", amount: "+$9,000.00", ref: "EFT · PYMT-2026-1234", sub: "Glenelg Developments Pty Ltd · Westpac AU", applied: "INV-0140-01" },
    { date: "2 Apr 2026", amount: "+$4,500.00", ref: "EFT · PYMT-2026-1456", sub: "Glenelg Developments Pty Ltd · Westpac AU", applied: "INV-0140-02" },
  ];

  return (
    <>
      <div className="mt-5 flex items-start gap-3 rounded-[6px] border border-blue-100 bg-blue-50/60 px-4 py-3 text-[12px] text-neutral-700">
        <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
        <p>
          <span className="font-semibold text-blue-700">Xero is the source of truth for all finance data on this tab.</span>{" "}
          iCertify holds a read-only snapshot synced from Xero, plus PBC-native references back to the originating service. Edits to fee offers, invoices, payments, or credit notes must be made in Xero — changes reflect here on the next sync. Use the per-row "Open in Xero" link to jump to the corresponding record.
        </p>
      </div>

      <div className="mt-5 grid grid-cols-5 gap-3">
        {summary.map((s) => (
          <div key={s.label} className="rounded-[6px] border border-neutral-200 bg-white px-4 py-3">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">{s.label}</div>
            <div className={`mt-1 text-[22px] font-semibold leading-none ${
              s.tone === "success" ? "text-emerald-600" :
              s.tone === "danger" ? "text-red-600" :
              s.tone === "warning" ? "text-amber-600" :
              s.tone === "primary" ? "text-primary-500" :
              "text-neutral-900"
            }`}>{s.value}</div>
            <div className="mt-1.5 text-[11px] text-neutral-500">{s.sub}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between rounded-[6px] border border-neutral-200 bg-white px-4 py-2.5">
        <div className="flex items-center gap-3 text-[12px] text-neutral-600">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[11px] text-emerald-700">
            <RefreshCw className="h-3 w-3" /> Last synced from Xero 14 May 2026, 09:42 ACST
          </span>
          <span className="text-neutral-500">Auto-sync every 30 min · Webhook-driven on event</span>
        </div>
        <button className="inline-flex items-center gap-1.5 rounded-[6px] border border-neutral-200 px-3 py-1.5 text-[12px] font-medium text-neutral-700 hover:bg-neutral-50">
          <RefreshCw className="h-3.5 w-3.5" /> Refresh from Xero
        </button>
      </div>

      <SectionHeader icon={FileText} title="Fee Offers" meta={`· 4 offers · $48,500 total`} />
      <FinanceTable
        columns={["OFFER REF", "SERVICE", "DESCRIPTION", "AMOUNT", "STATUS", "ISSUED", "ACCEPTED", "XERO"]}
        rows={offers.map((o) => [
          <span className="font-mono text-[11px] text-neutral-700">{o.ref}</span>,
          <ServiceChip label={o.svc} />,
          <DescCell title={o.desc} sub={o.sub} />,
          <span className="font-semibold text-neutral-900">{o.amount}</span>,
          <StatusBadge status={o.status} />,
          <span className="text-neutral-700">{o.issued}</span>,
          <span className="text-neutral-700">{o.accepted}</span>,
          o.noSync ? <span className="text-[11px] text-neutral-400 italic">Not synced</span> : <XeroLink />,
        ])}
      />

      <div className="mt-6 rounded-[8px] border border-neutral-200 bg-white">
        <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-3">
          <div className="flex items-center gap-2">
            <CircleCheck className="h-4 w-4 text-neutral-500" />
            <span className="text-[14px] font-semibold text-neutral-900">Billing Items</span>
            <span className="inline-flex items-center rounded-[4px] bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-700">Awaiting spec</span>
          </div>
        </div>
        <div className="m-4 rounded-[6px] border border-dashed border-neutral-300 bg-neutral-50/40 p-5">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-neutral-200 text-neutral-500">$</div>
            <div className="text-[12px] leading-relaxed text-neutral-600">
              <p className="text-[13px] font-semibold text-neutral-800">Billing items workflow — placeholder</p>
              <p className="mt-1">Pending spec resolution at <span className="font-semibold">System Design v5.2 §4.1</span>. This panel will surface items of work performed against this project but not yet rolled into a Xero invoice — for example, variation work, hourly time entries, additional inspections, or contractor pass-through costs. The business process (how items move from "work done" → "ready to invoice" → "invoiced") is not yet settled. Position is reserved here so the WeWeb consultant builds the surrounding layout in the right shape. Do not build the data table or actions until the spec lands.</p>
              <p className="mt-2 text-[11px] text-neutral-500">Tracked in v2 update memo · Open item §4.1 · Decision owner: D. Cooke</p>
            </div>
          </div>
        </div>
      </div>

      <SectionHeader icon={FileText} title="Invoices" meta="· 3 invoices · $19,000 invoiced · $5,500 outstanding" />
      <FinanceTable
        columns={["INVOICE REF", "SERVICE", "DESCRIPTION", "AMOUNT", "STATUS", "ISSUED", "DUE", "XERO"]}
        rows={invoices.map((i) => [
          <span className="font-mono text-[11px] text-neutral-700">{i.ref}</span>,
          <ServiceChip label={i.svc} />,
          <DescCell title={i.desc} sub={i.sub} />,
          <span className="font-semibold text-neutral-900">{i.amount}</span>,
          <StatusBadge status={i.status} />,
          <span className="text-neutral-700">{i.issued}</span>,
          <span className={i.overdue ? "font-semibold text-amber-600" : "text-neutral-700"}>{i.due}</span>,
          <XeroLink />,
        ])}
      />

      <SectionHeader icon={FileText} title="Payment Activity" meta="· 2 entries · $13,500 net received" />
      <FinanceTable
        columns={["DATE", "TYPE", "AMOUNT", "METHOD / REFERENCE", "APPLIED TO", "XERO"]}
        rows={payments.map((p) => [
          <span className="text-neutral-700">{p.date}</span>,
          <span className="inline-flex items-center gap-1 rounded border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
            <CircleCheck className="h-3 w-3" /> PAYMENT
          </span>,
          <span className="font-semibold text-emerald-600">{p.amount}</span>,
          <DescCell title={p.ref} sub={p.sub} />,
          <span className="font-mono text-[11px] text-neutral-700">{p.applied}</span>,
          <XeroLink />,
        ])}
      />

      <p className="mt-3 text-[11px] text-neutral-500">
        <Info className="mr-1 inline h-3 w-3" /> Credit notes appear here as negative-amount entries with type "Credit". Source: Xero, synced via Make.
      </p>

      <div className="mt-5 flex items-start gap-3 rounded-[6px] border border-blue-100 bg-blue-50/60 px-4 py-3 text-[12px] text-neutral-700">
        <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
        <p>
          <span className="font-semibold text-blue-700">Xero remains the source of accounting truth.</span> This page displays a synced snapshot only. All adjustments, voids, credit notes, and reconciliations occur in Xero. iCertify retains the Xero record ID and last_synced_at for audit. No write-back from this tab.
        </p>
      </div>
    </>
  );
}

function SectionHeader({ icon: Icon, title, meta }: { icon: any; title: string; meta?: string }) {
  return (
    <div className="mt-7 mb-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-neutral-500" />
        <h2 className="text-[15px] font-semibold text-neutral-900">{title}</h2>
        {meta && <span className="text-[12px] text-neutral-500">{meta}</span>}
      </div>
      <div className="flex items-center gap-2">
        <button className="inline-flex items-center gap-1.5 text-[12px] text-neutral-600 hover:text-neutral-900">
          <Filter className="h-3.5 w-3.5" /> Filter
        </button>
        <button className="inline-flex items-center gap-1.5 text-[12px] text-neutral-600 hover:text-neutral-900">
          <Download className="h-3.5 w-3.5" /> Export
        </button>
      </div>
    </div>
  );
}

function FinanceTable({ columns, rows }: { columns: string[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-hidden rounded-[8px] border border-neutral-200 bg-white">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-neutral-100 bg-neutral-50/60">
            {columns.map((c) => (
              <th key={c} className="px-4 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-neutral-500">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-neutral-100 last:border-0 align-middle">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-[12px] text-neutral-700">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ServiceChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-[11px] font-medium text-neutral-700">
      <Link2 className="h-3 w-3 text-neutral-400" /> {label}
    </span>
  );
}

function DescCell({ title, sub }: { title: string; sub?: string }) {
  return (
    <div>
      <div className="text-[12px] text-neutral-800">{title}</div>
      {sub && <div className="mt-0.5 text-[11px] text-neutral-500">{sub}</div>}
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { label: string; cls: string; icon: any }> = {
    accepted: { label: "ACCEPTED", cls: "bg-emerald-50 text-emerald-700 border-emerald-200", icon: CircleCheck },
    sent: { label: "SENT", cls: "bg-blue-50 text-blue-700 border-blue-200", icon: Send },
    draft: { label: "DRAFT", cls: "bg-neutral-100 text-neutral-600 border-neutral-200", icon: FileText },
    paid: { label: "PAID", cls: "bg-emerald-50 text-emerald-700 border-emerald-200", icon: CircleCheck },
  };
  const s = map[status] ?? map.draft;
  const Icon = s.icon;
  return (
    <span className={`inline-flex items-center gap-1 rounded border px-1.5 py-0.5 text-[10px] font-semibold ${s.cls}`}>
      <Icon className="h-3 w-3" /> {s.label}
    </span>
  );
}

function XeroLink() {
  return (
    <a className="inline-flex items-center gap-1 text-[11px] font-medium text-primary-500 hover:underline">
      <ExternalLink className="h-3 w-3" /> View
    </a>
  );
}

/* ============================== ACTIVITY ============================== */

function ActivityPanel() {
  type Ev = { who: string; initials: string; tone?: string; icon: any; body: ReactNode; time: string; internal?: boolean };
  const groups: { label: string; count: number; events: Ev[] }[] = [
    {
      label: "Today · Wed 27 May 2026", count: 4,
      events: [
        { who: "Duncan Cooke", initials: "DC", icon: Calendar, body: <>scheduled Frame inspection <Code>INS-2026-0140-003</Code> for Mon 01 Jun 2026, 14:00</>, time: "2 min ago" },
        { who: "Duncan Cooke", initials: "DC", icon: Building2, body: <>advanced Stage 1 Building Approval to step Awaiting payment</>, time: "14 min ago", internal: true },
        { who: "System", initials: "SY", tone: "system", icon: Calendar, body: <><b>System</b> auto-confirmed booking for <Code>INS-2026-0140-003</Code> — calendar invite delivered to A. Campbell</>, time: "Today 11:42" },
        { who: "Jeremy Walsh", initials: "JW", icon: Building2, body: <>marked service Structural Engineering Review as <Pill cls="bg-emerald-50 text-emerald-700 border-emerald-200">COMPLETE</Pill></>, time: "Today 09:18" },
      ]
    },
    {
      label: "Yesterday · Tue 26 May 2026", count: 6,
      events: [
        { who: "Duncan Cooke", initials: "DC", icon: Calendar, body: <>cancelled inspection <Code>INS-2026-0140-002</Code> — site not ready, frame still being erected</>, time: "Tue 16:24" },
        { who: "Duncan Cooke", initials: "DC", icon: Building2, body: <>allocated service Fire Engineering Performance Solution to M. Tan (Tan Fire Consulting)</>, time: "Tue 14:08", internal: true },
        { who: "Ryan Pearce", initials: "RP", icon: CircleCheck, body: <>recorded <Pill cls="bg-emerald-50 text-emerald-700 border-emerald-200">PASS</Pill> for Footing inspection <Code>INS-2026-0140-001</Code> — 4 items noted, 0 defects</>, time: "Tue 11:55" },
        { who: "Ryan Pearce", initials: "RP", icon: Building2, body: <>started step Footing inspection report on Stage 2 Construction Compliance</>, time: "Tue 10:30" },
        { who: "System", initials: "SY", tone: "system", icon: Settings, body: <><b>System</b> sent 24-hour reminder for Footing inspection <Code>INS-2026-0140-001</Code> to A. Campbell, R. Pearce</>, time: "Tue 08:00" },
        { who: "Duncan Cooke", initials: "DC", icon: PlusCircle, body: <>added service Variation — Balcony glazing change ($1,250 fixed fee)</>, time: "Tue 07:42" },
      ]
    },
    {
      label: "Mon 25 May 2026", count: 3,
      events: [
        { who: "Jeremy Walsh", initials: "JW", icon: Building2, body: <>paused step Structural certificate review — awaiting revised SK-04 drawing from MGA Engineers</>, time: "Mon 15:18", internal: true },
        { who: "Adriel Campbell", initials: "AC", icon: Calendar, body: <>(client) requested Footing inspection — site ready from Tue 26 May AM</>, time: "Mon 11:04" },
        { who: "Duncan Cooke", initials: "DC", icon: Building2, body: <>completed step BCA assessment on Stage 1 Building Approval</>, time: "Mon 09:36" },
      ]
    },
  ];

  return (
    <>
      <div className="mt-5">
        <h2 className="text-[18px] font-semibold text-neutral-900">Activity</h2>
        <p className="mt-1 text-[12px] text-neutral-500">Complete audit feed for this project. Every row is generated by an action taken elsewhere — click any row to jump to its source. Rows are immutable and never deleted.</p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FilterPill label="Actor: All actors" />
          <FilterPill label="Entity: Services, Inspections" active />
          <FilterPill label="Visibility: All" />
          <span className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white px-2.5 py-0.5 text-[11px] text-neutral-600">Services <X className="h-3 w-3" /></span>
          <span className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white px-2.5 py-0.5 text-[11px] text-neutral-600">Inspections <X className="h-3 w-3" /></span>
          <button className="text-[11px] text-primary-500 hover:underline">Clear all</button>
        </div>
        <span className="text-[11px] text-neutral-500">Showing 1–100 of 412 filtered rows</span>
      </div>

      <div className="mt-4 rounded-[8px] border border-neutral-200 bg-white">
        {groups.map((g) => (
          <div key={g.label}>
            <div className="flex items-center justify-between border-y border-neutral-100 bg-neutral-50/70 px-5 py-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-600">{g.label}</span>
              <span className="text-[11px] text-neutral-500">{g.count} events</span>
            </div>
            {g.events.map((ev, i) => {
              const Icon = ev.icon;
              return (
                <div key={i} className="flex items-center gap-3 border-b border-neutral-100 px-5 py-3 last:border-0 hover:bg-neutral-50/50">
                  <div className={`flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-semibold ${
                    ev.tone === "system" ? "bg-neutral-200 text-neutral-600" : "bg-blue-100 text-blue-700"
                  }`}>{ev.initials}</div>
                  <div className="flex h-6 w-6 items-center justify-center text-neutral-400">
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <div className="flex-1 text-[12px] leading-snug text-neutral-700">
                    <span className="font-semibold text-neutral-900">{ev.who}</span> {ev.body}
                  </div>
                  {ev.internal && <span className="rounded border border-neutral-200 bg-neutral-100 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-neutral-600">Internal</span>}
                  <span className="w-20 text-right text-[11px] text-neutral-500">{ev.time}</span>
                  <ChevronDown className="h-3.5 w-3.5 -rotate-90 text-neutral-400" />
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-[12px] text-neutral-500">Page 1 of 5 · 100 rows per page</span>
        <div className="flex items-center gap-1">
          {[1,2,3,4,5].map(n => (
            <button key={n} className={`h-7 w-7 rounded text-[12px] ${n===1 ? "bg-primary-500 text-white" : "text-neutral-600 hover:bg-neutral-100"}`}>{n}</button>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-start gap-3 rounded-[6px] border border-neutral-200 bg-neutral-50 px-4 py-3 text-[11px] text-neutral-600">
        <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-500" />
        <p>Activity is the system audit log. Every row is generated by an action taken elsewhere in the project. Rows are immutable and never deleted. The narrative working journal is on the <span className="font-semibold text-neutral-800">File Notes</span> tab.</p>
      </div>
    </>
  );
}

function Code({ children }: { children: ReactNode }) {
  return <code className="rounded bg-neutral-100 px-1 py-0.5 font-mono text-[11px] text-neutral-700">{children}</code>;
}
function Pill({ children, cls }: { children: ReactNode; cls: string }) {
  return <span className={`inline-flex items-center gap-1 rounded border px-1.5 py-0.5 text-[10px] font-semibold ${cls}`}>{children}</span>;
}
function FilterPill({ label, active }: { label: string; active?: boolean }) {
  return (
    <button className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[12px] ${
      active ? "border-primary-500 bg-primary-50 text-primary-700" : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50"
    }`}>
      <Filter className="h-3 w-3" /> {label} <ChevronDown className="h-3 w-3" />
    </button>
  );
}

/* ============================== CONTACTS ============================== */

function ContactsPanel() {
  type Contact = { initials: string; name: string; role: string; org: string; phone: string; email: string; tag?: string; status: "portal" | "invite" | "none"; primary?: boolean; debtor?: boolean; note?: string };
  const groups: { icon: any; tone: string; title: string; sub: string; contacts: Contact[] }[] = [
    {
      icon: Briefcase, tone: "bg-[#071d49] text-white", title: "Client / Owner side", sub: "The project owner, debtor, and engagement signatories",
      contacts: [
        { initials: "SM", name: "Stephen Marshall", role: "Director", org: "Marshall Developments Pty Ltd", phone: "+61 411 234 567", email: "stephen.marshall@marshalldev.com.au", status: "portal", primary: true, debtor: true, note: "Engagement signatory" },
        { initials: "JM", name: "Jane Marshall", role: "Project administrator", org: "Marshall Developments Pty Ltd", phone: "+61 422 456 789", email: "jane.marshall@marshalldev.com.au", status: "invite", debtor: true },
      ],
    },
    {
      icon: PenTool, tone: "bg-blue-600 text-white", title: "Design team", sub: "Architects, engineers, consultants engaged by the client",
      contacts: [
        { initials: "AK", name: "Anna Kerrins", role: "Principal architect", org: "Kerrins + Partners Architects", phone: "+61 433 567 890", email: "anna@kerrinsarchitects.com.au", status: "portal", note: "Design lead" },
        { initials: "MC", name: "Marcus Chen", role: "Structural engineer", org: "MGA Consulting Engineers", phone: "+61 444 678 901", email: "m.chen@mga.com.au", status: "none" },
        { initials: "SW", name: "Sarah Williams", role: "Fire engineer", org: "Tan Fire Consulting", phone: "+61 455 789 012", email: "sarah.w@tanfireconsulting.com.au", status: "none" },
      ],
    },
    {
      icon: Landmark, tone: "bg-amber-600 text-white", title: "External authorities", sub: "Council, services, and other regulatory or referral bodies",
      contacts: [
        { initials: "RP", name: "Rita Patel", role: "Senior planner", org: "City of Holdfast Bay", phone: "+61 8 8229 9999", email: "r.patel@holdfast.sa.gov.au", status: "none", note: "DA referral officer" },
      ],
    },
  ];

  return (
    <>
      <div className="mt-5">
        <h2 className="text-[18px] font-semibold text-neutral-900">Contacts</h2>
        <p className="mt-1 text-[12px] text-neutral-500">
          External stakeholders linked to this project — client/owner side, design team, and external authorities. PBC staff allocation is on the <span className="text-primary-500">Services tab</span>. Contact details are edited on the <span className="text-primary-500">master Contacts page</span>.
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between rounded-[6px] border border-neutral-200 bg-white px-4 py-3">
        <div className="flex items-center gap-5 text-[12px] text-neutral-600">
          <span className="inline-flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5 text-neutral-500" /> <b className="text-neutral-900">6</b> contacts</span>
          <span className="inline-flex items-center gap-1.5 text-emerald-700"><CircleCheck className="h-3.5 w-3.5" /> <b>2</b> portal active</span>
          <span className="inline-flex items-center gap-1.5 text-amber-700"><UserPlus className="h-3.5 w-3.5" /> <b>1</b> invite pending</span>
          <span className="text-neutral-500">primary: <span className="inline-flex items-center gap-1 text-neutral-800"><b>Stephen Marshall</b> <Star className="h-3 w-3 fill-amber-400 text-amber-400" /></span></span>
          <span className="text-neutral-500">debtor: <span className="text-neutral-800"><b>Marshall Developments Pty Ltd</b></span></span>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-1.5 rounded-[6px] border border-neutral-200 px-3 py-1.5 text-[12px] font-medium text-neutral-700 hover:bg-neutral-50">
            <Filter className="h-3.5 w-3.5" /> Filter
          </button>
          <button className="inline-flex items-center gap-1.5 rounded-[6px] bg-primary-500 px-3 py-1.5 text-[12px] font-medium text-white hover:bg-primary-700">
            <UserPlus className="h-3.5 w-3.5" /> Add contact
          </button>
        </div>
      </div>

      <div className="mt-4 space-y-4">
        {groups.map((g) => {
          const Icon = g.icon;
          return (
            <div key={g.title} className="rounded-[8px] border border-neutral-200 bg-white">
              <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className={`flex h-8 w-8 items-center justify-center rounded ${g.tone}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-neutral-900">{g.title}</div>
                    <div className="text-[11px] text-neutral-500">{g.sub}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-neutral-500">
                  <span className="rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5">{g.contacts.length} contact{g.contacts.length === 1 ? "" : "s"}</span>
                  <ChevronDown className="h-3.5 w-3.5" />
                </div>
              </div>
              <div>
                {g.contacts.map((c) => (
                  <div key={c.email} className="flex items-center gap-4 border-b border-neutral-100 px-4 py-3 last:border-0 hover:bg-neutral-50/50">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-[12px] font-semibold text-amber-800">{c.initials}</div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[13px] font-semibold text-neutral-900">{c.name}</span>
                        {c.primary && <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />}
                        {c.status === "portal" && <Pill cls="bg-emerald-50 text-emerald-700 border-emerald-200">PORTAL ACTIVE</Pill>}
                        {c.status === "invite" && <Pill cls="bg-amber-50 text-amber-700 border-amber-200">INVITE PENDING</Pill>}
                        {c.status === "none" && <Pill cls="bg-neutral-100 text-neutral-600 border-neutral-200">NO PORTAL ACCESS</Pill>}
                      </div>
                      <div className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-[11px] text-neutral-600">
                        <span>{c.role}</span>
                        <span className="text-neutral-300">·</span>
                        <span>{c.org}</span>
                        {c.debtor && <Pill cls="bg-amber-50 text-amber-700 border-amber-200">DEBTOR</Pill>}
                      </div>
                      <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-[11px] text-neutral-500">
                        <span className="inline-flex items-center gap-1"><Phone className="h-3 w-3" /> {c.phone}</span>
                        <span className="inline-flex items-center gap-1"><Mail className="h-3 w-3" /> {c.email}</span>
                        {c.note && <span className="italic text-neutral-400">· {c.note}</span>}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-neutral-400">
                      <button className="rounded p-1.5 hover:bg-neutral-100 hover:text-neutral-700"><Mail className="h-3.5 w-3.5" /></button>
                      <button className="rounded p-1.5 hover:bg-neutral-100 hover:text-neutral-700"><Phone className="h-3.5 w-3.5" /></button>
                      <button className="rounded p-1.5 hover:bg-neutral-100 hover:text-neutral-700"><FileText className="h-3.5 w-3.5" /></button>
                      <button className="rounded p-1.5 hover:bg-neutral-100 hover:text-neutral-700"><MoreHorizontal className="h-3.5 w-3.5" /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex items-start gap-3 rounded-[6px] border border-neutral-200 bg-neutral-50 px-4 py-3 text-[11px] text-neutral-600">
        <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-500" />
        <p>
          <span className="font-semibold text-neutral-800">Primary vs Debtor.</span> The Primary contact (star) is one person — the day-to-day point of contact for the project. The Debtor (chip) is one company — the entity invoiced for the work. The same person is often both; the same company is often the same as the Primary contact's employer, but each is recorded independently. Changing the Debtor triggers a Xero contact sync.
        </p>
      </div>
    </>
  );
}

/* ============================== DOCUMENTS ============================== */

type DocStatus = "draft" | "issued" | "superseded" | "voided";
type DocSource = "generated" | "uploaded" | "registered" | "esigned";

function DocumentsPanel() {
  type Doc = {
    num: string;
    name: string;
    size: string;
    type: string;
    typeCode: string;
    status: DocStatus;
    source: DocSource;
    issued: string;
    issuedItalic?: boolean;
    by: string;
    byInitials: string;
    byColor: string;
    held?: boolean;
  };

  const docs: Doc[] = [
    { num: "PBC-0140-024", name: "22-Jetty-Road-Glenelg_RCA_draft_v3.pdf", size: "1.4 MB", type: "Residential Compliance Assessment", typeCode: "rca-v3", status: "draft", source: "generated", issued: "—", issuedItalic: true, by: "Duncan", byInitials: "DC", byColor: "bg-slate-700" },
    { num: "PBC-0140-023", name: "Footing-inspection-report_001.pdf", size: "820 KB", type: "Inspection Report", typeCode: "insp-rpt-v2", status: "issued", source: "generated", issued: "26 May 2026", by: "Ryan", byInitials: "RP", byColor: "bg-blue-500" },
    { num: "PBC-0140-022", name: "Stage-1-Building-Approval_certificate.pdf", size: "645 KB", type: "Building Approval Certificate", typeCode: "bac-stg1-v2", status: "issued", source: "generated", issued: "22 May 2026", by: "Duncan", byInitials: "DC", byColor: "bg-slate-700" },
    { num: "PBC-0140-021", name: "Revised-architectural-drawings_A100-A1…", size: "14.2 MB", type: "Architectural Drawings", typeCode: "arch-dwg", status: "issued", source: "uploaded", issued: "21 May 2026", by: "Stephen", byInitials: "SM", byColor: "bg-amber-500" },
    { num: "PBC-0140-020", name: "Structural-engineering-cert_MGA_signed.…", size: "1.1 MB", type: "Engineer's Certificate", typeCode: "eng-cert", status: "issued", source: "uploaded", issued: "19 May 2026", by: "Stephen", byInitials: "SM", byColor: "bg-amber-500", held: true },
    { num: "PBC-0140-019", name: "Fire-safety-engineering-report_TFC_final.…", size: "2.8 MB", type: "Performance Solution", typeCode: "perf-soln", status: "issued", source: "esigned", issued: "15 May 2026", by: "Jeremy", byInitials: "JW", byColor: "bg-blue-400" },
    { num: "PBC-0140-005", name: "Development-application-DA-2025-084…", size: "3.4 MB", type: "Development Application", typeCode: "da-doc", status: "issued", source: "registered", issued: "18 Mar 2026", by: "Stephen", byInitials: "SM", byColor: "bg-amber-500" },
    { num: "PBC-0140-004", name: "Architectural-drawings_A100-A115_rev2…", size: "13.9 MB", type: "Architectural Drawings", typeCode: "arch-dwg", status: "superseded", source: "uploaded", issued: "02 May 2026", by: "Stephen", byInitials: "SM", byColor: "bg-amber-500" },
    { num: "PBC-0140-003", name: "22-Jetty-Road-Glenelg_RCA_draft_v1.pdf", size: "1.3 MB", type: "Residential Compliance Assessment", typeCode: "rca-v3", status: "voided", source: "generated", issued: "Voided 08 May", issuedItalic: true, by: "Duncan", byInitials: "DC", byColor: "bg-slate-700" },
  ];

  return (
    <>
      <div className="mt-6 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-[20px] font-semibold text-neutral-900">Documents</h2>
          <p className="mt-1 text-[12px] text-neutral-600 max-w-3xl">
            The project's document register. Every uploaded, generated, or registered file with a permanent doc_number and lifecycle state.
            <br />
            Working files live in <a className="text-primary-500 hover:underline">Drive</a>; register documents are formal records governed by retention rules.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 text-neutral-500 hover:text-neutral-800 rounded-md hover:bg-neutral-100">
            <FolderPlus className="h-4 w-4" />
          </button>
          <button className="inline-flex items-center gap-1.5 rounded-[6px] border border-neutral-200 bg-white px-3 py-1.5 text-[12px] font-medium text-neutral-700 hover:bg-neutral-50">
            <Link2 className="h-3.5 w-3.5" /> Register from Drive
          </button>
          <button className="inline-flex items-center gap-1.5 rounded-[6px] border border-neutral-200 bg-white px-3 py-1.5 text-[12px] font-medium text-neutral-700 hover:bg-neutral-50">
            <Upload className="h-3.5 w-3.5" /> Upload
          </button>
          <button className="inline-flex items-center gap-1.5 rounded-[6px] bg-[#0b1f4d] px-3 py-1.5 text-[12px] font-medium text-white hover:bg-[#142a63]">
            <FileText className="h-3.5 w-3.5" /> Generate
          </button>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <DocFilter label="Status:" value="Active" />
          <DocFilter label="Type:" value="All" />
          <DocFilter label="Source:" value="All" icon={ArrowUpDown} />
          <div className="relative">
            <SearchIcon className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search doc_number or filename…"
              className="h-8 w-[260px] rounded-[6px] border border-neutral-200 bg-white pl-8 pr-3 text-[12px] text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-primary-500"
            />
          </div>
        </div>
        <p className="text-[11px] text-neutral-500">
          Showing <span className="font-semibold text-neutral-800">1–14</span> of <span className="font-semibold text-neutral-800">14 active</span> rows · 3 superseded / voided hidden
        </p>
      </div>

      <div className="mt-3 flex items-center gap-2 rounded-[6px] border border-red-200 bg-red-50 px-4 py-2.5 text-[12px] text-neutral-700">
        <Lock className="h-3.5 w-3.5 text-red-600" />
        <span><span className="font-semibold text-red-700">1 document on this project is under legal hold.</span> Lifecycle transitions blocked on held rows.</span>
        <a className="ml-auto text-[11px] text-red-700 font-medium hover:underline cursor-pointer">View held document →</a>
      </div>

      <div className="mt-3 overflow-hidden rounded-[8px] border border-neutral-200 bg-white">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-neutral-100 bg-neutral-50/60">
              {["DOC NUMBER", "FILENAME", "TYPE", "STATUS", "SOURCE", "ISSUED", "UPLOADED BY", "ACTIONS"].map((c) => (
                <th key={c} className="px-4 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-neutral-500">{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {docs.map((d) => (
              <tr key={d.num} className="border-b border-neutral-100 last:border-0 align-middle hover:bg-neutral-50/40">
                <td className="px-4 py-3 font-mono text-[11px] text-neutral-700">{d.num}</td>
                <td className="px-4 py-3">
                  <div className="text-[12px] text-neutral-800">{d.name}</div>
                  <div className="mt-0.5 text-[11px] text-neutral-500">{d.size} · application/pdf</div>
                </td>
                <td className="px-4 py-3">
                  <div className="text-[12px] text-neutral-800">{d.type}</div>
                  <div className="mt-0.5 font-mono text-[10px] text-neutral-500">{d.typeCode}</div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <DocStatusBadge status={d.status} />
                    {d.held && <Lock className="h-3.5 w-3.5 text-red-600" />}
                  </div>
                </td>
                <td className="px-4 py-3"><DocSourceIcon source={d.source} /></td>
                <td className={`px-4 py-3 text-[12px] ${d.issuedItalic ? "italic text-neutral-400" : "text-neutral-700"}`}>{d.issued}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-semibold text-white ${d.byColor}`}>{d.byInitials}</div>
                    <span className="text-[12px] text-neutral-700">{d.by}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1 text-neutral-400">
                    <button className="rounded p-1.5 hover:bg-neutral-100 hover:text-neutral-700"><Download className="h-3.5 w-3.5" /></button>
                    <button className="rounded p-1.5 hover:bg-neutral-100 hover:text-neutral-700"><MoreHorizontal className="h-3.5 w-3.5" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-5 flex items-start gap-3 rounded-[6px] border border-neutral-200 bg-neutral-50 px-4 py-3 text-[11px] leading-relaxed text-neutral-600">
        <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-500" />
        <p>
          Documents are governed by <span className="font-semibold text-neutral-800">retention regime §7</span>. doc_numbers are immutable from allocation. Status transitions are audited and surface in the <span className="font-semibold text-neutral-800">Activity</span> feed. The original file is never deleted — supersession and voiding preserve it.
        </p>
      </div>
    </>
  );
}

function DocFilter({ label, value, icon: Icon }: { label: string; value: string; icon?: any }) {
  const IconCmp = Icon ?? Filter;
  return (
    <button className="inline-flex items-center gap-1.5 rounded-[6px] border border-neutral-200 bg-white px-3 py-1.5 text-[12px] text-neutral-700 hover:bg-neutral-50">
      <IconCmp className="h-3.5 w-3.5 text-neutral-400" />
      <span className="text-neutral-500">{label}</span>
      <span className="font-medium text-neutral-800">{value}</span>
      <ChevronDown className="h-3 w-3 text-neutral-400" />
    </button>
  );
}

function DocStatusBadge({ status }: { status: DocStatus }) {
  const map: Record<DocStatus, { label: string; cls: string; icon: any }> = {
    draft: { label: "DRAFT", cls: "bg-neutral-100 text-neutral-600 border-neutral-200", icon: PenLine },
    issued: { label: "ISSUED", cls: "bg-emerald-50 text-emerald-700 border-emerald-200", icon: CircleCheck },
    superseded: { label: "SUPERSEDED", cls: "bg-amber-50 text-amber-700 border-amber-200", icon: GitBranch },
    voided: { label: "VOIDED", cls: "bg-red-50 text-red-700 border-red-200", icon: XCircle },
  };
  const s = map[status];
  const Icon = s.icon;
  return (
    <span className={`inline-flex items-center gap-1 rounded border px-1.5 py-0.5 text-[10px] font-semibold ${s.cls}`}>
      <Icon className="h-3 w-3" /> {s.label}
    </span>
  );
}

function DocSourceIcon({ source }: { source: DocSource }) {
  const map: Record<DocSource, { icon: any; cls: string; title: string }> = {
    generated: { icon: Zap, cls: "bg-violet-50 text-violet-600", title: "Generated" },
    uploaded: { icon: User, cls: "bg-neutral-100 text-neutral-500", title: "Uploaded by contact" },
    registered: { icon: Download, cls: "bg-amber-50 text-amber-600", title: "Registered from Drive" },
    esigned: { icon: PenLine, cls: "bg-neutral-100 text-neutral-500", title: "E-signed" },
  };
  const s = map[source];
  const Icon = s.icon;
  return (
    <span title={s.title} className={`inline-flex h-6 w-6 items-center justify-center rounded ${s.cls}`}>
      <Icon className="h-3.5 w-3.5" />
    </span>
  );
}

/* ============================== FILE NOTES ============================== */

type FNType = "incident" | "decision" | "observation" | "conversation" | "follow-up";

function FileNotesPanel() {
  type Entry = { initials: string; tone: string; name: string; date: string; body: ReactNode; attachment?: string };
  type Note = {
    id: string;
    type: FNType;
    title: string;
    entries: number;
    contributors?: number;
    refs: { kind: "svc" | "cs" | "person"; label: string }[];
    lastActivity: string;
    expanded?: boolean;
    entriesData?: Entry[];
  };

  const [activeType, setActiveType] = useState<"all" | FNType | "mine">("all");

  const notes: Note[] = [
    {
      id: "FN-08", type: "incident", title: "Hydraulic engineer allocation — SVC-09 stalled, client risk emerging",
      entries: 4, contributors: 2,
      refs: [{ kind: "svc", label: "SVC-09 Hydraulic" }, { kind: "person", label: "M. Glenister" }],
      lastActivity: "Last activity 14 May 2026, 10:18",
      expanded: true,
      entriesData: [
        { initials: "DC", tone: "bg-slate-700", name: "Duncan Cooke", date: "22 Mar 2026, 09:14 ACST",
          body: <>SVC-09 Hydraulic Engineering has been added to project scope at client request. Current PBC staff list has no SA-registered hydraulic engineer. Flagging for resourcing discussion with D. Duxfield this week.</> },
        { initials: "DC", tone: "bg-slate-700", name: "Duncan Cooke", date: "5 Apr 2026, 16:42 ACST",
          body: <>Discussed with D. Duxfield. No suitable hydraulic engineer on PBC staff. Options: (1) subcontract to a SA-registered consultancy, (2) refer back to client. Awaiting J. Walsh's input — he has a working relationship with one of the SA hydraulic firms via the design team.</> },
        { initials: "DD", tone: "bg-amber-500", name: "David Duxfield", date: "28 Apr 2026, 11:08 ACST",
          body: <>Spoke to J. Walsh — he can introduce us to Reichl &amp; Partners (SA hydraulic consultancy). Pass-through invoicing arrangement to be confirmed. I'll set up the introduction call for next week and confirm scope/fee structure.</>,
          attachment: "Reichl_Partners_capability_statement.pdf" },
        { initials: "DC", tone: "bg-slate-700", name: "Duncan Cooke", date: "14 May 2026, 10:18 ACST",
          body: <>Phone call M. Glenister 14:30 re hydraulic engineer delay. Client now flagging this as the critical path item for slab pour scheduling. Agreed: PBC will confirm Reichl &amp; Partners arrangement by Friday 16 May. If not resolved, client will engage hydraulic engineer directly under their own contract — PBC scope adjusts accordingly. Raising project alert.</> },
      ],
    },
    { id: "FN-07", type: "decision", title: "NCC F5 acoustic verification deferred pending physical test report",
      entries: 2, refs: [{ kind: "person", label: "D. Cooke" }, { kind: "cs", label: "CS-0140-05" }, { kind: "svc", label: "SVC-07 Acoustic" }],
      lastActivity: "Last activity 10 May 2026" },
    { id: "FN-06", type: "observation", title: "Frame inspection — minor variance on western elevation, agreed acceptable",
      entries: 3, refs: [{ kind: "person", label: "D. Cooke" }, { kind: "cs", label: "CS-0140-02" }],
      lastActivity: "Last activity 9 May 2026" },
    { id: "FN-05", type: "conversation", title: "Builder confirmed slab pour date — weather contingency arrangement",
      entries: 1, refs: [{ kind: "person", label: "J. Hartley" }, { kind: "person", label: "S. Pham" }],
      lastActivity: "Last activity 27 Mar 2026" },
    { id: "FN-04", type: "follow-up", title: "Walsh Architects — revised acoustic report due week of 19 May",
      entries: 2, refs: [{ kind: "person", label: "D. Cooke" }, { kind: "person", label: "J. Walsh" }],
      lastActivity: "Last activity 8 May 2026" },
    { id: "FN-03", type: "decision", title: "Footing depth variation approved — engineering justification accepted",
      entries: 3, refs: [{ kind: "person", label: "D. Cooke" }, { kind: "cs", label: "CS-0140-01" }, { kind: "person", label: "T. Berry" }],
      lastActivity: "Last activity 4 Apr 2026" },
    { id: "FN-02", type: "observation", title: "Pre-construction site visit — boundary setbacks confirmed against survey",
      entries: 1, refs: [{ kind: "person", label: "D. Cooke" }],
      lastActivity: "Last activity 20 Mar 2026" },
    { id: "FN-01", type: "decision", title: "Engagement accepted — scope, fee schedule, key contacts confirmed",
      entries: 1, refs: [{ kind: "person", label: "D. Cooke" }],
      lastActivity: "Last activity 18 Mar 2026" },
  ];

  const types: { key: typeof activeType; label: string }[] = [
    { key: "all", label: "All" },
    { key: "observation", label: "Observation" },
    { key: "decision", label: "Decision" },
    { key: "conversation", label: "Conversation" },
    { key: "incident", label: "Incident" },
    { key: "follow-up", label: "Follow-up" },
  ];

  return (
    <>
      <div className="mt-5 flex items-start gap-3 rounded-[6px] border-l-4 border-l-blue-500 border border-blue-100 bg-blue-50/60 px-4 py-3 text-[12px] text-neutral-700">
        <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
        <p>
          <span className="font-semibold text-blue-700">File notes capture the project record.</span> Each note is a topic that accumulates chronological append-only entries over time — observations, decisions, conversations, follow-ups. Entries are immutable once posted; corrections happen by appending a new entry. Click a note to expand its full history.
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 rounded-[8px] border border-neutral-200 bg-white px-4 py-2.5">
        <div className="flex flex-1 items-center gap-3">
          <div className="relative w-[280px]">
            <SearchIcon className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search notes and entries…"
              className="h-8 w-full rounded-[6px] border border-neutral-200 bg-white pl-8 pr-3 text-[12px] text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-primary-500"
            />
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">Type</span>
          <div className="flex items-center gap-1">
            {types.map((t) => {
              const active = t.key === activeType;
              return (
                <button
                  key={t.key}
                  onClick={() => setActiveType(t.key)}
                  className={`rounded-full border px-3 py-1 text-[12px] transition-colors ${
                    active
                      ? "border-primary-500 bg-primary-500 text-white"
                      : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50"
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1 text-[12px] text-neutral-700 hover:bg-neutral-50">
            <User className="h-3 w-3" /> My notes
          </button>
          <button className="inline-flex items-center gap-1.5 rounded-[6px] bg-primary-500 px-3 py-1.5 text-[12px] font-medium text-white hover:bg-primary-700">
            <PlusCircle className="h-3.5 w-3.5" /> New file note
          </button>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        {notes.map((n) => (n.expanded ? <ExpandedNote key={n.id} note={n} /> : <CollapsedNote key={n.id} note={n} />))}
      </div>

      <div className="mt-5 flex items-start gap-3 rounded-[6px] border-l-4 border-l-emerald-500 border border-emerald-100 bg-emerald-50/60 px-4 py-3 text-[12px] text-neutral-700">
        <CircleCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
        <p>
          <span className="font-semibold text-emerald-700">Every entry is immutable on creation and signed by its author.</span> Corrections happen by appending a new entry, never by editing or deleting an existing one. Database triggers enforce this; the audit trail is intact even when the reasoning changed.
        </p>
      </div>
    </>
  );
}

function FNTypeBadge({ type }: { type: FNType }) {
  const map: Record<FNType, { label: string; cls: string; icon: any }> = {
    incident: { label: "INCIDENT", cls: "bg-red-50 text-red-700 border-red-200", icon: AlertTriangle },
    decision: { label: "DECISION", cls: "bg-violet-50 text-violet-700 border-violet-200", icon: CircleCheck },
    observation: { label: "OBSERVATION", cls: "bg-blue-50 text-blue-700 border-blue-200", icon: Eye },
    conversation: { label: "CONVERSATION", cls: "bg-emerald-50 text-emerald-700 border-emerald-200", icon: MessageCircle },
    "follow-up": { label: "FOLLOW-UP", cls: "bg-amber-50 text-amber-700 border-amber-200", icon: RefreshCw },
  };
  const s = map[type];
  const Icon = s.icon;
  return (
    <span className={`inline-flex items-center gap-1 rounded border px-1.5 py-0.5 text-[10px] font-semibold ${s.cls}`}>
      <Icon className="h-3 w-3" /> {s.label}
    </span>
  );
}

function RefChip({ kind, label }: { kind: "svc" | "cs" | "person"; label: string }) {
  const Icon = kind === "person" ? User : Link2;
  return (
    <span className="inline-flex items-center gap-1 rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-[11px] text-neutral-700">
      <Icon className="h-3 w-3 text-neutral-400" /> {label}
    </span>
  );
}

function CollapsedNote({ note }: { note: any }) {
  return (
    <div className="rounded-[8px] border border-neutral-200 bg-white px-5 py-3 hover:bg-neutral-50/50 cursor-pointer">
      <div className="flex items-center gap-3">
        <ChevronDown className="h-3.5 w-3.5 -rotate-90 text-neutral-400" />
        <span className="font-mono text-[11px] text-neutral-500">{note.id}</span>
        <FNTypeBadge type={note.type} />
        <p className="text-[13px] font-semibold text-neutral-900">{note.title}</p>
      </div>
      <div className="mt-2 ml-7 flex items-center gap-3 text-[11px] text-neutral-500">
        <span className="inline-flex items-center gap-1"><MessageCircle className="h-3 w-3" /> {note.entries} {note.entries === 1 ? "entry" : "entries"}</span>
        {note.refs.map((r: any, i: number) => <RefChip key={i} kind={r.kind} label={r.label} />)}
        <span className="ml-auto">{note.lastActivity}</span>
      </div>
    </div>
  );
}

function ExpandedNote({ note }: { note: any }) {
  return (
    <div className="rounded-[8px] border border-neutral-200 bg-white">
      <div className="border-b border-neutral-100 px-5 py-3">
        <div className="flex items-center gap-3">
          <ChevronDown className="h-3.5 w-3.5 text-neutral-500" />
          <span className="font-mono text-[11px] text-neutral-500">{note.id}</span>
          <FNTypeBadge type={note.type} />
          <p className="text-[13px] font-semibold text-neutral-900">{note.title}</p>
        </div>
        <div className="mt-2 ml-7 flex items-center gap-3 text-[11px] text-neutral-500">
          <span className="inline-flex items-center gap-1"><MessageCircle className="h-3 w-3" /> {note.entries} entries</span>
          {note.contributors && <span className="inline-flex items-center gap-1"><User className="h-3 w-3" /> {note.contributors} contributors</span>}
          {note.refs.map((r: any, i: number) => <RefChip key={i} kind={r.kind} label={r.label} />)}
          <span className="ml-auto">{note.lastActivity}</span>
        </div>
      </div>

      <div className="px-5 py-4 space-y-4">
        {note.entriesData?.map((e: any, i: number) => (
          <div key={i} className="flex gap-3">
            <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-[11px] font-semibold text-white ${e.tone}`}>
              {e.initials}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-[12px]">
                  <span className="font-semibold text-neutral-900">{e.name}</span>
                  <span className="text-neutral-500">{e.date}</span>
                </div>
                <span className="inline-flex items-center gap-1 rounded border border-neutral-200 bg-neutral-50 px-1.5 py-0.5 text-[10px] text-neutral-500">
                  <Lock className="h-2.5 w-2.5" /> Immutable
                </span>
              </div>
              <p className="mt-1.5 text-[13px] leading-relaxed text-neutral-800">{e.body}</p>
              {e.attachment && (
                <div className="mt-2 inline-flex items-center gap-1.5 rounded border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-[12px] text-primary-500 hover:underline cursor-pointer">
                  <Paperclip className="h-3 w-3" /> {e.attachment}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-dashed border-neutral-300 mx-5 my-4 rounded-[6px] bg-neutral-50/40 p-4">
        <textarea
          rows={2}
          placeholder="Add an update to this file note…"
          className="w-full resize-none bg-transparent text-[13px] text-neutral-800 placeholder:text-neutral-400 focus:outline-none"
        />
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-3 text-neutral-400">
            <button className="hover:text-neutral-700"><Paperclip className="h-4 w-4" /></button>
            <button className="hover:text-neutral-700"><Bold className="h-4 w-4" /></button>
            <button className="hover:text-neutral-700"><Link2 className="h-4 w-4" /></button>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-neutral-500">
            <span>Posting as <span className="font-semibold text-neutral-800">Duncan Cooke</span></span>
            <button className="inline-flex items-center gap-1.5 rounded-[6px] bg-primary-500 px-3 py-1.5 text-[12px] font-medium text-white hover:bg-primary-700">
              <Send className="h-3.5 w-3.5" /> Post update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


// ============================================================
// MILESTONES PANEL
// ============================================================

type MStatus = "completed" | "in_progress" | "overdue" | "planned" | "skipped";

type Milestone = {
  id: string;
  title: string;
  status: MStatus;
  desc: string;
  meta?: string;
  refs?: { label: string; icon?: typeof FileText }[];
  locked?: boolean;
  adhoc?: boolean;
  internal?: boolean;
  manual?: boolean;
  dueRed?: boolean;
};

const PERMIT_ROW = {
  type: "Building Permit",
  number: "BLD-0140-26-001",
  status: "LODGED · ACTIVE",
  reserved: "05/01/2026",
  granted: "14/02/2026",
  lodged: "18/02/2026",
  lapse: "14/02/2029",
  finalInsp: "14/02/2029",
  doc: "PBC-0140-019",
};

const SERVICE_MILESTONES: Milestone[] = [
  { id: "m1", title: "Fee offer accepted", status: "completed", desc: "Client accepted the fee offer · Completed 12 Feb 2026 · auto from Xero sync" },
  { id: "m2", title: "Application fee paid", status: "completed", desc: "Application fee invoice paid in Xero · Completed 14 Feb 2026" },
  { id: "m3", title: "Building permit granted", status: "completed", desc: "Completed 14 Feb 2026", refs: [{ label: "BLD-0140-26-001" }], meta: "synced from", locked: true },
  { id: "m4", title: "Building permit lodged with Council", status: "completed", desc: "Completed 18 Feb 2026", refs: [{ label: "BLD-0140-26-001" }], meta: "synced from", locked: true },
  { id: "m5", title: "Construction commenced", status: "completed", desc: "Builder notified construction start · Completed 18 Mar 2026 by D. Cooke", manual: true },
  { id: "m6", title: "Pre-pour / footings inspection passed", status: "completed", desc: "Completed 5 Apr 2026 · via", refs: [{ label: "Inspection I-2026-0103" }] },
  { id: "m7", title: "Slab inspection passed", status: "completed", desc: "Completed 22 Apr 2026 · via", refs: [{ label: "Inspection I-2026-0118" }] },
  { id: "m8", title: "Frame inspection passed", status: "in_progress", desc: "Auto-completes when Manager approves the inspection report · Scheduled", refs: [{ label: "Fri 29 May, 10:30 — Attempt 2", icon: CalendarClock }] },
  { id: "m9", title: "Final inspection passed", status: "planned", desc: "Auto-completes when Final inspection is approved · triggers Occupancy Certificate workflow" },
  { id: "m10", title: "Occupancy Certificate issued", status: "planned", desc: "Auto-completes when OC is issued as an output document" },
  { id: "m11", title: "Engineer site visit booked", status: "skipped", desc: 'Skipped 25 Mar 2026 by D. Cooke · Reason: "Engineer review completed via desktop check; no site visit required for this project class"', adhoc: true, manual: true },
];

const CROSS_MILESTONES: Milestone[] = [
  { id: "c1", title: "Builder's insurance certificate received", status: "overdue", desc: 'Date deadline · was due 14 Apr 2026 · assigned to D. Cooke', meta: 'Description: "Current insurance expired — need updated cert before frame stage"', adhoc: true, dueRed: true },
  { id: "c2", title: "Project closed", status: "planned", desc: "Auto-completes when all services complete and all invoices are paid", internal: true },
];

function MStatusBadge({ s }: { s: MStatus }) {
  const map = {
    completed: { label: "Completed", cls: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    in_progress: { label: "In progress", cls: "bg-blue-50 text-blue-700 border-blue-200" },
    overdue: { label: "Overdue 32 days", cls: "bg-red-50 text-red-700 border-red-200" },
    planned: { label: "Planned", cls: "bg-neutral-100 text-neutral-600 border-neutral-200" },
    skipped: { label: "Ad-hoc", cls: "bg-neutral-100 text-neutral-500 border-neutral-200" },
  } as const;
  const { label, cls } = map[s];
  return <span className={`inline-flex items-center rounded-[4px] border px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${cls}`}>{label}</span>;
}

function StatusIcon({ s }: { s: MStatus }) {
  if (s === "completed") return <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white"><Check className="h-3.5 w-3.5" strokeWidth={3} /></div>;
  if (s === "in_progress") return <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white"><RotateCcw className="h-3.5 w-3.5" strokeWidth={2.5} /></div>;
  if (s === "overdue") return <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white"><AlertTriangle className="h-3.5 w-3.5" strokeWidth={2.5} /></div>;
  if (s === "skipped") return <div className="flex h-6 w-6 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-400"><X className="h-3.5 w-3.5" strokeWidth={2.5} /></div>;
  return <div className="h-6 w-6 rounded-full border-2 border-neutral-300 bg-white" />;
}

function MilestoneRow({ m }: { m: Milestone }) {
  const bgMap: Record<MStatus, string> = {
    completed: "bg-emerald-50/40 border-emerald-100",
    in_progress: "bg-blue-50/40 border-blue-100",
    overdue: "bg-red-50/40 border-red-200",
    planned: "bg-white border-neutral-200",
    skipped: "bg-neutral-50/60 border-neutral-200",
  };
  return (
    <div className={`flex items-start gap-3 rounded-[8px] border ${bgMap[m.status]} px-3 py-2.5`}>
      <div className="pt-0.5"><StatusIcon s={m.status} /></div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <Zap className="h-3.5 w-3.5 text-blue-500" />
          <span className={`text-[13px] font-semibold ${m.status === "skipped" ? "text-neutral-400 line-through" : "text-neutral-900"}`}>{m.title}</span>
          <MStatusBadge s={m.status} />
          {m.adhoc && <span className="inline-flex items-center rounded-[4px] border border-neutral-200 bg-white px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-neutral-600">Ad-hoc</span>}
          {m.internal && <span className="inline-flex items-center gap-1 rounded-[4px] border border-neutral-200 bg-white px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-neutral-600"><Lock className="h-2.5 w-2.5" /> Internal</span>}
        </div>
        <div className="mt-1 flex flex-wrap items-center gap-1.5 text-[12px] text-neutral-600">
          <span>{m.desc}</span>
          {m.refs?.map((r, i) => {
            const I = r.icon ?? FileText;
            return <span key={i} className="inline-flex items-center gap-1 rounded-[4px] border border-neutral-200 bg-white px-1.5 py-0.5 text-[11px] font-medium text-neutral-700"><I className="h-3 w-3" /> {r.label}</span>;
          })}
        </div>
        {m.meta && <div className="mt-1 text-[11px] italic text-neutral-500">{m.meta}</div>}
      </div>
      <div className="flex items-center gap-1.5 pt-1">
        {m.status === "overdue" && (
          <button className="inline-flex items-center gap-1 rounded-[6px] border border-neutral-300 bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-700 hover:bg-neutral-50">
            <Check className="h-3 w-3" /> Mark received
          </button>
        )}
        {m.status === "in_progress" && <button className="text-neutral-400 hover:text-neutral-600"><Check className="h-4 w-4" /></button>}
        {m.locked ? <Lock className="h-3.5 w-3.5 text-neutral-400" /> : m.status === "skipped" ? <button className="text-neutral-400 hover:text-neutral-600"><RotateCcw className="h-3.5 w-3.5" /></button> : <button className="text-neutral-400 hover:text-neutral-600"><Pencil className="h-3.5 w-3.5" /></button>}
      </div>
    </div>
  );
}

function MilestoneGroup({ icon: Icon, title, count, summary, children }: { icon: typeof Building2; title: string; count: number; summary: ReactNode; children: ReactNode }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="rounded-[10px] border border-neutral-200 bg-white">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between gap-3 px-4 py-3">
        <div className="flex items-center gap-2">
          <ChevronDown className={`h-4 w-4 text-neutral-500 transition-transform ${open ? "" : "-rotate-90"}`} />
          <Icon className="h-4 w-4 text-neutral-600" />
          <span className="text-[13px] font-semibold text-neutral-900">{title}</span>
          <span className="inline-flex items-center rounded-[4px] bg-neutral-100 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-neutral-600">{count} milestones</span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-neutral-500">{summary}</div>
      </button>
      {open && <div className="space-y-1.5 border-t border-neutral-100 p-3">{children}</div>}
    </div>
  );
}

function MilestonesPanel() {
  return (
    <div className="mt-6 space-y-5">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-[20px] font-semibold text-neutral-900">Milestones</h2>
          <p className="mt-1 max-w-3xl text-[12.5px] text-neutral-600">
            Stage markers and regulatory dates for this project. Permits live in the top card — their lifecycle drives the synced milestones below.<br />
            Service milestones group by service; ad-hoc milestones group under Cross-service.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-1.5 rounded-[8px] border border-neutral-300 bg-white px-3 py-1.5 text-[12px] font-medium text-neutral-700 hover:bg-neutral-50">
            <CalendarClock className="h-3.5 w-3.5" /> Timeline view
          </button>
          <button className="inline-flex items-center gap-1.5 rounded-[8px] bg-primary-500 px-3 py-1.5 text-[12px] font-medium text-white hover:bg-primary-700">
            <Plus className="h-3.5 w-3.5" /> Add milestone
          </button>
        </div>
      </div>

      {/* Permits card */}
      <div className="rounded-[10px] border border-neutral-200 bg-white">
        <div className="flex items-center justify-between gap-3 border-b border-neutral-100 px-4 py-3">
          <div className="flex items-center gap-2">
            <FileSignature className="h-4 w-4 text-neutral-600" />
            <span className="text-[13px] font-semibold text-neutral-900">Permits</span>
            <span className="inline-flex items-center rounded-[4px] bg-emerald-100 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">1 Active</span>
            <span className="text-[11.5px] italic text-neutral-500">Regulatory record — drives statutory lapse and lodgement tracking</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-1.5 rounded-[6px] border border-neutral-300 bg-white px-2.5 py-1 text-[11.5px] font-medium text-neutral-700 hover:bg-neutral-50"><Plus className="h-3 w-3" /> Building Permit</button>
            <button className="inline-flex items-center gap-1.5 rounded-[6px] border border-neutral-300 bg-white px-2.5 py-1 text-[11.5px] font-medium text-neutral-700 hover:bg-neutral-50"><Plus className="h-3 w-3" /> Occupancy Permit</button>
            <button className="inline-flex items-center gap-1.5 rounded-[6px] border border-neutral-300 bg-white px-2.5 py-1 text-[11.5px] font-medium text-neutral-700 hover:bg-neutral-50"><Check className="h-3 w-3" /> Check</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-[12px]">
            <thead>
              <tr className="border-b border-neutral-100 text-left text-[10px] font-semibold uppercase tracking-wide text-neutral-500">
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2">Permit Number</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Reserved</th>
                <th className="px-4 py-2">Granted</th>
                <th className="px-4 py-2">Lodged</th>
                <th className="px-4 py-2">Lapse</th>
                <th className="px-4 py-2">Final Insp Due</th>
                <th className="px-4 py-2">Document</th>
                <th className="px-4 py-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-neutral-800">
                <td className="px-4 py-3"><div className="inline-flex items-center gap-1.5"><FileSignature className="h-3.5 w-3.5 text-neutral-500" /> {PERMIT_ROW.type}</div></td>
                <td className="px-4 py-3 font-mono text-[11.5px]">{PERMIT_ROW.number}</td>
                <td className="px-4 py-3"><span className="inline-flex items-center gap-1 rounded-[4px] border border-emerald-200 bg-emerald-50 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-700"><CircleCheck className="h-2.5 w-2.5" /> {PERMIT_ROW.status}</span></td>
                <td className="px-4 py-3">{PERMIT_ROW.reserved}</td>
                <td className="px-4 py-3">{PERMIT_ROW.granted}</td>
                <td className="px-4 py-3">{PERMIT_ROW.lodged}</td>
                <td className="px-4 py-3">{PERMIT_ROW.lapse} <span className="text-[10px] text-neutral-500">+36m</span></td>
                <td className="px-4 py-3">{PERMIT_ROW.finalInsp}</td>
                <td className="px-4 py-3"><span className="inline-flex items-center gap-1 text-blue-600 hover:underline"><FileText className="h-3 w-3" /> {PERMIT_ROW.doc}</span></td>
                <td className="px-4 py-3"><div className="flex items-center justify-end gap-2 text-neutral-400"><button className="hover:text-neutral-700"><Clock className="h-3.5 w-3.5" /></button><button className="hover:text-neutral-700"><RotateCcw className="h-3.5 w-3.5" /></button><button className="hover:text-neutral-700"><Pencil className="h-3.5 w-3.5" /></button></div></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex items-start gap-2 border-t border-neutral-100 bg-neutral-50/50 px-4 py-2.5 text-[11.5px] text-neutral-600">
          <Info className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-neutral-500" />
          <div>
            <div><span className="font-semibold">SA lifecycle:</span> reserved → granted (PBC issues) → lodged (Council). SA Development Act requires the parent Building Permit to be active before any Occupancy Permit or amended BP can be issued — system enforces this at permit grant time.</div>
            <div className="mt-1"><span className="font-semibold">NT lifecycle:</span> reserved → granted → lodged → lapse (granted + 24 months, NT Building Act §62 unless EOT granted). NT lapse periods differ from SA — jurisdiction is taken from the project header.</div>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="rounded-[10px] border border-neutral-200 bg-white p-4">
        <div className="text-[13px] font-semibold text-neutral-900">Project milestones</div>
        <div className="mt-1 text-[11.5px] text-neutral-600">7 of 12 complete · 1 in progress · 1 overdue · 1 skipped · 2 planned</div>
        <div className="mt-3 flex h-2 w-full overflow-hidden rounded-full bg-neutral-100">
          <div className="bg-emerald-500" style={{ width: "58%" }} />
          <div className="bg-blue-500" style={{ width: "8%" }} />
          <div className="bg-red-500" style={{ width: "8%" }} />
          <div className="bg-neutral-300" style={{ width: "9%" }} />
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-4 text-[11px] text-neutral-600">
          <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Completed (7)</span>
          <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-blue-500" /> In progress (1)</span>
          <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-red-500" /> Overdue (1)</span>
          <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-neutral-300" /> Skipped (1)</span>
          <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-neutral-200" /> Planned (2)</span>
        </div>
      </div>

      {/* Filter bar */}
      <div className="flex flex-wrap items-center gap-2">
        <button className="inline-flex items-center gap-1.5 rounded-[8px] border border-neutral-300 bg-white px-3 py-1.5 text-[12px] font-medium text-neutral-700"><Layers className="h-3.5 w-3.5" /> Group by: <span className="font-semibold">Service</span> <ChevronDown className="h-3 w-3" /></button>
        <button className="inline-flex items-center gap-1.5 rounded-[8px] border border-neutral-300 bg-white px-3 py-1.5 text-[12px] font-medium text-neutral-700"><Filter className="h-3.5 w-3.5" /> Show: <span className="font-semibold">Active</span> <ChevronDown className="h-3 w-3" /></button>
        <button className="inline-flex items-center gap-1.5 rounded-[8px] border border-neutral-300 bg-white px-3 py-1.5 text-[12px] font-medium text-neutral-700"><Filter className="h-3.5 w-3.5" /> Type: <span className="font-semibold">All</span> <ChevronDown className="h-3 w-3" /></button>
        <label className="ml-2 inline-flex items-center gap-1.5 text-[12px] text-neutral-600"><input type="checkbox" className="rounded border-neutral-300" /> Show background completions</label>
        <div className="ml-auto text-[11.5px] text-neutral-500">Showing <span className="font-semibold text-neutral-700">11</span> active milestones · <span className="font-semibold text-neutral-700">1</span> skipped hidden</div>
      </div>

      {/* Groups */}
      <MilestoneGroup
        icon={Building2}
        title="Building Certification — Class 2 Residential Apartments"
        count={10}
        summary={<><span><span className="font-semibold text-emerald-600">7</span> done</span><span><span className="font-semibold text-blue-600">1</span> in progress</span><span><span className="font-semibold text-neutral-600">2</span> planned</span><span><span className="font-semibold text-neutral-500">1</span> skipped</span></>}
      >
        {SERVICE_MILESTONES.map(m => <MilestoneRow key={m.id} m={m} />)}
      </MilestoneGroup>

      <MilestoneGroup
        icon={Layers}
        title="Cross-service"
        count={2}
        summary={<><span><span className="font-semibold text-red-600">1</span> overdue</span><span><span className="font-semibold text-neutral-600">1</span> planned</span></>}
      >
        {CROSS_MILESTONES.map(m => <MilestoneRow key={m.id} m={m} />)}
      </MilestoneGroup>

      {/* Footer legend */}
      <div className="flex items-start gap-2 rounded-[8px] border border-neutral-200 bg-neutral-50/50 px-4 py-3 text-[11.5px] text-neutral-600">
        <Info className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-neutral-500" />
        <p>
          Milestones flagged <Zap className="inline h-3 w-3 text-blue-500" /> auto-complete when system events fire; <Hammer className="inline h-3 w-3 text-amber-500" /> require manual marking; <CalendarClock className="inline h-3 w-3 text-neutral-500" /> are pure date deadlines. Permit-sourced milestones (locked icon) sync from <span className="font-semibold">Permits</span> — edit the permit, the milestone follows.
        </p>
      </div>
    </div>
  );
}

// ===================== Overview Panel =====================

const STATUS_STEPS = [
  { key: "submitted", label: "Submitted", date: "09 May", state: "done" as const },
  { key: "review", label: "Under review", date: "09 May", state: "done" as const },
  { key: "fee", label: "Fee accepted", date: "10 May", state: "done" as const },
  { key: "allocate", label: "Approved to allocate", date: "Now", state: "current" as const },
  { key: "progress", label: "In progress", date: "", state: "todo" as const },
  { key: "certified", label: "Certified", date: "", state: "todo" as const },
  { key: "archived", label: "Archived", date: "", state: "todo" as const },
];

const OV_SERVICES = [
  {
    icon: FileText,
    iconBg: "bg-blue-50 text-blue-600",
    title: "Building Certification",
    status: { label: "Active", cls: "bg-blue-100 text-blue-700" },
    assignee: { initials: "DC", name: "Duncan Cooke", role: "Building Certifier", lic: "19209BU" },
    step: "Step 3 of 8 · Compliance assessment in progress",
    progress: 37,
    progressCls: "bg-blue-500",
  },
  {
    icon: PenTool,
    iconBg: "bg-amber-50 text-amber-600",
    title: "Structural Engineering Review",
    status: { label: "Awaiting allocation", cls: "bg-amber-100 text-amber-800" },
    assignee: { initials: "", name: "Unassigned", role: "Engineer", lic: "Required", muted: true },
    step: "Awaiting structural drawings from client",
    progress: 0,
    progressCls: "bg-neutral-300",
    action: "Allocate ↗",
  },
  {
    icon: Zap,
    iconBg: "bg-emerald-50 text-emerald-600",
    title: "Energy Efficiency Assessment",
    status: { label: "Not started", cls: "bg-neutral-100 text-neutral-700" },
    assignee: { initials: "", name: "Unassigned", role: "Energy Assessor", lic: "Required", muted: true },
    step: "Scheduled to begin once structural review complete",
    progress: 0,
    progressCls: "bg-neutral-300",
  },
];

const OV_ACTIVITY = [
  { icon: "$", tone: "emerald", text: <>Fee offer accepted · <span className="font-medium">$5,420</span> via Xero</>, by: "By Adriel Campbell · 4 hours ago" },
  { icon: "doc", tone: "blue", text: <>Fee offer issued · <span className="font-mono text-[11px]">DOC-FEE-00247-R01</span></>, by: "By Duncan Cooke · Yesterday, 16:22" },
  { icon: "msg", tone: "neutral", text: <>File note added · <span className="font-medium">Initial scoping call</span></>, by: "By David Duxfield · Yesterday, 11:15" },
  { icon: "check", tone: "emerald", text: <>Submission accepted · Project created from public form</>, by: "By David Duxfield · 2 days ago" },
  { icon: "up", tone: "neutral", text: <>3 attachments received with public form submission</>, by: "Site plan, floor plan, elevation drawings · 2 days ago" },
];

function OverviewPanel() {
  return (
    <div className="mt-6 grid grid-cols-12 gap-5">
      {/* LEFT: 8 cols */}
      <div className="col-span-12 lg:col-span-8 space-y-5">
        {/* Status card */}
        <section className="rounded-[8px] border border-neutral-200 bg-white p-5">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-[15px] font-semibold text-neutral-900">Status</h2>
              <p className="mt-0.5 text-[12px] text-neutral-500">Approved to allocate · awaiting certifier assignment</p>
            </div>
            <button className="text-[12px] text-primary-600 hover:text-primary-700 inline-flex items-center gap-1">
              View status history <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>

          <div className="mt-6 flex items-start">
            {STATUS_STEPS.map((s, i) => {
              const last = i === STATUS_STEPS.length - 1;
              const done = s.state === "done";
              const current = s.state === "current";
              return (
                <div key={s.key} className="flex-1 flex items-start">
                  <div className="flex flex-col items-center min-w-0 flex-shrink-0" style={{ width: 88 }}>
                    <div className={`flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 ${
                      done ? "border-emerald-500 bg-emerald-500" :
                      current ? "border-blue-600 bg-white ring-4 ring-blue-100" :
                      "border-neutral-300 bg-white"
                    }`} />
                    <div className={`mt-3 text-[10px] font-semibold uppercase tracking-wider text-center ${
                      done ? "text-emerald-700" : current ? "text-blue-700" : "text-neutral-400"
                    }`}>{s.label}</div>
                    {s.date && (
                      <div className={`mt-1 text-[11px] ${current ? "text-blue-600 font-medium" : "text-neutral-500"}`}>{s.date}</div>
                    )}
                  </div>
                  {!last && (
                    <div className={`mt-[7px] h-[2px] flex-1 ${
                      done ? "bg-emerald-500" : "bg-neutral-200"
                    }`} />
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Project summary card */}
        <section className="rounded-[8px] border border-neutral-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-[15px] font-semibold text-neutral-900">Project summary</h2>
            <button className="inline-flex items-center gap-1 text-[12px] text-neutral-600 hover:text-neutral-900">
              <Pencil className="h-3 w-3" /> Edit
            </button>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-5">
            <OvField label="Project address" value="20 Attunga Street, Glenelg North SA 5045" sub="Lot 7865 · N.T Portion" />
            <OvField label="Description" value="Single-storey detached dwelling, Class 1a. New build on previously-vacant lot." />
            <OvField label="Jurisdiction" value="South Australia" />
            <OvField label="Building class" value="1a" />
            <OvField label="Source" value={<span className="inline-flex items-center gap-1.5"><ExternalLink className="h-3 w-3 text-neutral-400" />Public web form</span>} sub="SUB-00142 · Accepted by David Duxfield" />
            <OvField label="Created" value="09 May 2026" sub="by David Duxfield · from public form" />
          </div>
        </section>

        {/* Services card */}
        <section className="rounded-[8px] border border-neutral-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-[15px] font-semibold text-neutral-900">Services</h2>
              <p className="mt-0.5 text-[12px] text-neutral-500">3 services · 1 active</p>
            </div>
            <button className="text-[12px] text-primary-600 hover:text-primary-700 inline-flex items-center gap-1">
              Open Services tab <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>
          <div className="mt-4 divide-y divide-neutral-100">
            {OV_SERVICES.map((s) => (
              <div key={s.title} className="py-3 first:pt-0 last:pb-0">
                <div className="flex items-start gap-3">
                  <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[6px] ${s.iconBg}`}>
                    <s.icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[13px] font-semibold text-neutral-900">{s.title}</span>
                      <span className={`inline-flex items-center rounded-[4px] px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${s.status.cls}`}>
                        {s.status.label}
                      </span>
                    </div>
                    <div className="mt-1 flex items-center gap-2 text-[12px]">
                      {s.assignee.muted ? (
                        <span className="inline-flex items-center gap-1.5 text-neutral-500"><UserPlus className="h-3 w-3" /><span className="italic">{s.assignee.name}</span></span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-neutral-800">
                          <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-neutral-900 text-[8px] font-bold text-white">{s.assignee.initials}</span>
                          {s.assignee.name}
                        </span>
                      )}
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">{s.assignee.role}</span>
                      <span className="text-neutral-300">·</span>
                      <span className="font-mono text-[11px] text-neutral-500">{s.assignee.lic}</span>
                    </div>
                    <p className="mt-1 text-[12px] text-neutral-600">{s.step}</p>
                  </div>
                  <div className="flex w-32 flex-shrink-0 flex-col items-end gap-1">
                    {s.action ? (
                      <button className="text-[12px] font-medium text-primary-600 hover:text-primary-700">{s.action}</button>
                    ) : <span />}
                    <div className="flex w-full items-center gap-2">
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-neutral-100">
                        <div className={`h-full ${s.progressCls}`} style={{ width: `${s.progress}%` }} />
                      </div>
                      <span className="text-[11px] font-medium tabular-nums text-neutral-600 w-8 text-right">{s.progress}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent activity */}
        <section className="rounded-[8px] border border-neutral-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-[15px] font-semibold text-neutral-900">Recent activity</h2>
            <button className="text-[12px] text-primary-600 hover:text-primary-700 inline-flex items-center gap-1">
              Full timeline <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>
          <div className="mt-4 space-y-3">
            {OV_ACTIVITY.map((a, i) => (
              <div key={i} className="flex items-start gap-3">
                <ActivityIcon kind={a.icon as any} tone={a.tone as any} />
                <div className="flex-1 text-[13px]">
                  <p className="text-neutral-800">{a.text}</p>
                  <p className="mt-0.5 text-[11px] text-neutral-500">{a.by}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* RIGHT: 4 cols */}
      <div className="col-span-12 lg:col-span-4 space-y-5">
        {/* Map card */}
        <section className="overflow-hidden rounded-[8px] border border-neutral-200 bg-white">
          <div className="relative h-64 bg-gradient-to-br from-neutral-100 via-stone-100 to-amber-50">
            <div className="absolute left-3 top-3 flex overflow-hidden rounded-[4px] border border-neutral-200 bg-white text-[11px]">
              <button className="px-2.5 py-1 bg-neutral-100 font-medium text-neutral-800">Map</button>
              <button className="px-2.5 py-1 text-neutral-600 hover:bg-neutral-50">Satellite</button>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 -m-3 rounded-full bg-blue-500/20 animate-pulse" />
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
                  <Landmark className="h-4 w-4" />
                </div>
              </div>
            </div>
            <div className="absolute bottom-3 right-3 flex flex-col overflow-hidden rounded-[4px] border border-neutral-200 bg-white">
              <button className="px-2 py-1 text-neutral-600 hover:bg-neutral-50 border-b border-neutral-200"><Plus className="h-3 w-3" /></button>
              <button className="px-2 py-1 text-neutral-600 hover:bg-neutral-50"><span className="text-[14px] leading-none">−</span></button>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-neutral-100 px-4 py-2.5">
            <span className="text-[12px] text-neutral-600">20 Attunga St, Glenelg North</span>
            <a className="inline-flex items-center gap-1 text-[12px] text-primary-600 hover:text-primary-700" href="#">
              Open in Maps <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </section>

        {/* Financial */}
        <section className="rounded-[8px] border border-neutral-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-[14px] font-semibold text-neutral-900">Financial</h3>
            <button className="inline-flex items-center gap-1 text-[12px] text-primary-600 hover:text-primary-700">
              Accounts <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>
          <dl className="mt-4 space-y-2.5 text-[13px]">
            <FinRow label="Fee offer total" value="$5,420.00" />
            <FinRow label="App fee invoiced" value="$880.00" />
            <FinRow label="Paid to date" value="$880.00" tone="success" />
            <div className="my-2 h-px bg-neutral-100" />
            <FinRow label="Outstanding" value="$4,540.00" bold tone="danger" />
          </dl>
          <p className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-neutral-500">
            <RefreshCw className="h-3 w-3" /> Synced with Xero · 4 hours ago
          </p>
        </section>

        {/* Primary contact */}
        <section className="rounded-[8px] border border-neutral-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-[14px] font-semibold text-neutral-900">Primary contact</h3>
            <button className="inline-flex items-center gap-1 text-[12px] text-primary-600 hover:text-primary-700">
              All contacts <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-[12px] font-semibold text-amber-700">AC</div>
            <div>
              <p className="text-[13px] font-semibold text-neutral-900">Adriel Campbell</p>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">Owner</p>
            </div>
          </div>
          <div className="mt-4 space-y-2 text-[12px] text-neutral-700">
            <p className="inline-flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-neutral-400" /> adriel.campbell@gmail.com</p>
            <p className="inline-flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-neutral-400" /> +61 412 345 678</p>
            <p className="inline-flex items-center gap-2"><MessageCircle className="h-3.5 w-3.5 text-neutral-400" /> Prefers email</p>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <button className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-primary-500 px-3 py-2 text-[12px] font-medium text-white hover:bg-primary-700">
              <Send className="h-3.5 w-3.5" /> Send email
            </button>
            <button className="inline-flex items-center justify-center rounded-[6px] border border-neutral-200 bg-white p-2 text-neutral-600 hover:bg-neutral-50">
              <Phone className="h-3.5 w-3.5" />
            </button>
          </div>
        </section>

        {/* Key dates */}
        <section className="rounded-[8px] border border-neutral-200 bg-white p-5">
          <h3 className="text-[14px] font-semibold text-neutral-900">Key dates</h3>
          <div className="mt-4 space-y-4">
            <KeyDate month="Today" day="12" monthTone="text-rose-600" title="Allocate engineer · Structural Review" sub="Overdue by 2 days" subTone="text-rose-600" />
            <KeyDate month="May" day="18" title="Structural drawings due" sub="Awaiting client upload" />
            <KeyDate month="Jun" day="02" title="First inspection (estimated)" sub="Footings · subject to schedule" />
          </div>
        </section>
      </div>
    </div>
  );
}

function OvField({ label, value, sub }: { label: string; value: ReactNode; sub?: string }) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">{label}</p>
      <p className="mt-1 text-[13px] text-neutral-900">{value}</p>
      {sub && <p className="mt-0.5 text-[11px] text-neutral-500">{sub}</p>}
    </div>
  );
}

function FinRow({ label, value, bold, tone }: { label: string; value: string; bold?: boolean; tone?: "success" | "danger" }) {
  const toneCls = tone === "success" ? "text-emerald-600" : tone === "danger" ? "text-rose-600" : "text-neutral-900";
  return (
    <div className="flex items-center justify-between">
      <dt className={`text-neutral-600 ${bold ? "font-semibold text-neutral-900" : ""}`}>{label}</dt>
      <dd className={`tabular-nums ${bold ? "text-[15px] font-semibold " + toneCls : toneCls}`}>{value}</dd>
    </div>
  );
}

function KeyDate({ month, day, title, sub, monthTone, subTone }: { month: string; day: string; title: string; sub: string; monthTone?: string; subTone?: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex flex-col items-center justify-center rounded-[6px] border border-neutral-200 bg-neutral-50 px-2 py-1 min-w-[44px]">
        <span className={`text-[9px] font-semibold uppercase tracking-wider ${monthTone ?? "text-neutral-500"}`}>{month}</span>
        <span className="text-[16px] font-semibold tabular-nums leading-tight text-neutral-900">{day}</span>
      </div>
      <div className="flex-1">
        <p className="text-[13px] font-medium text-neutral-900">{title}</p>
        <p className={`text-[11px] ${subTone ?? "text-neutral-500"}`}>{sub}</p>
      </div>
    </div>
  );
}

function ActivityIcon({ kind, tone }: { kind: "$" | "doc" | "msg" | "check" | "up"; tone: "emerald" | "blue" | "neutral" }) {
  const toneCls =
    tone === "emerald" ? "bg-emerald-50 text-emerald-600" :
    tone === "blue" ? "bg-blue-50 text-blue-600" :
    "bg-neutral-100 text-neutral-600";
  const Icon =
    kind === "$" ? CircleCheck :
    kind === "doc" ? FileText :
    kind === "msg" ? MessageCircle :
    kind === "check" ? Check :
    Upload;
  const content = kind === "$" ? <span className="text-[13px] font-semibold">$</span> : <Icon className="h-3.5 w-3.5" />;
  return (
    <div className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full ${toneCls}`}>
      {content}
    </div>
  );
}

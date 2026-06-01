import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Briefcase,
  ClipboardCheck,
  Users,
  FileText,
  Clock,
  Inbox,
  UserCog,
  Wrench,
  ListChecks,
  Search,
  Bell,
  Plus,
  LogOut,
} from "lucide-react";
import pbcLogo from "@/assets/pbc-logo.svg";

interface NavItem {
  to: string;
  label: string;
  icon: typeof LayoutDashboard;
  badge?: number;
  badgeTone?: "danger" | "primary";
}

interface NavSection {
  heading: string;
  items: NavItem[];
}

const SECTIONS: NavSection[] = [
  {
    heading: "Work",
    items: [
      { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
      { to: "/projects", label: "Projects", icon: Briefcase, badge: 42, badgeTone: "primary" },
      { to: "/inspections", label: "Inspections", icon: ClipboardCheck, badge: 3, badgeTone: "danger" },
      { to: "/contacts", label: "Contacts", icon: Users },
    ],
  },
  {
    heading: "Compliance",
    items: [{ to: "/documents", label: "Document Register", icon: FileText }],
  },
  {
    heading: "Operations",
    items: [
      { to: "/timesheets", label: "Timesheets", icon: Clock },
      { to: "/submissions", label: "Submissions", icon: Inbox, badge: 2, badgeTone: "danger" },
    ],
  },
  {
    heading: "Admin",
    items: [
      { to: "/users", label: "Users", icon: UserCog },
      { to: "/services", label: "Services", icon: Wrench },
      { to: "/checksheet-templates", label: "Checksheet Templates", icon: ListChecks },
    ],
  },
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen flex bg-neutral-100">
      {/* Sidebar */}
      <aside className="w-[240px] flex-shrink-0 bg-primary-500 text-white flex flex-col fixed inset-y-0 left-0">
        <div className="px-5 py-5 border-b border-white/5">
          <img
            src={pbcLogo}
            alt="PBC"
            className="h-8 w-auto brightness-0 invert"
          />
          <p className="mt-2 text-[18px] font-bold tracking-tight text-white">iCertify</p>
        </div>


        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-5">
          {SECTIONS.map((section) => (
            <div key={section.heading}>
              <p className="px-3 mb-2 text-[10px] font-semibold tracking-[0.12em] uppercase text-white/40">
                {section.heading}
              </p>
              <ul className="space-y-0.5">
                {section.items.map((item) => {
                  const active = pathname === item.to || pathname.startsWith(item.to + "/");
                  const Icon = item.icon;
                  return (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className={`group flex items-center gap-2.5 px-3 py-2 rounded-[6px] text-[13px] transition-colors ${
                          active
                            ? "bg-white text-primary-900 font-medium"
                            : "text-white/75 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <Icon className="h-4 w-4 flex-shrink-0" />
                        <span className="flex-1 truncate">{item.label}</span>
                        {item.badge !== undefined && (
                          <span
                            className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-[4px] leading-none ${
                              item.badgeTone === "danger"
                                ? "bg-danger text-white"
                                : active
                                ? "bg-primary-100 text-primary-700"
                                : "bg-white/10 text-white/80"
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        <div className="border-t border-white/5 p-3">
          <div className="flex items-center gap-2.5 px-2 py-2 rounded-[6px] hover:bg-white/5">
            <div className="h-9 w-9 rounded-full bg-primary-700 flex items-center justify-center text-[12px] font-semibold">
              DC
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-medium truncate">Duncan Cooke</p>
              <p className="text-[10px] text-white/50 tracking-wider font-mono">192098U · ADMIN</p>
            </div>
            <button
              type="button"
              className="p-1.5 rounded-[4px] text-white/60 hover:text-white hover:bg-white/10"
              aria-label="Sign out"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 ml-[240px] flex flex-col min-h-screen">
        <header className="sticky top-0 z-20 bg-neutral-100/90 backdrop-blur border-b border-neutral-200">
          <div className="flex items-center gap-4 px-8 py-3">
            <div className="relative flex-1 max-w-2xl">
              <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
              <input
                type="search"
                placeholder="Search projects, contacts, documents..."
                className="w-full pl-9 pr-3 py-2 text-[13px] bg-white border border-neutral-200 rounded-[6px] focus:outline-none focus:border-primary-500"
              />
            </div>
            <div className="ml-auto flex items-center gap-2">
              <button
                type="button"
                className="relative p-2 text-neutral-700 hover:text-neutral-800 hover:bg-neutral-200 rounded-[6px]"
                aria-label="Notifications"
              >
                <Bell className="h-4 w-4" />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-danger" />
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-primary-500 hover:bg-primary-700 text-white text-[13px] font-medium rounded-[6px] transition-colors"
              >
                <Plus className="h-4 w-4" /> New project
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 px-8 py-8">{children}</main>
      </div>
    </div>
  );
}

import { useState } from "react";
import { DashboardLayout } from "../../components/dashboard/DashboardLayout";
import { Search, Scale, Calendar } from "lucide-react";

type CaseStatus = "Open" | "In Progress" | "Resolved";

const allCases: { client: string; caseType: string; location: string; assignedTo: string; status: CaseStatus; dateOpened: string }[] = [
  { client: "Client #1042", caseType: "Custody Dispute", location: "Nairobi, Kenya", assignedTo: "Adaeze Nwosu", status: "In Progress", dateOpened: "Aug 12, 2026" },
  { client: "Client #1043", caseType: "Protection Order", location: "Lagos, Nigeria", assignedTo: "Kwame Asante", status: "Open", dateOpened: "Aug 20, 2026" },
  { client: "Client #1044", caseType: "Property Rights", location: "Accra, Ghana", assignedTo: "Adaeze Nwosu", status: "Resolved", dateOpened: "Jul 30, 2026" },
  { client: "Client #1045", caseType: "Protection Order", location: "Kampala, Uganda", assignedTo: "Fatima Diallo", status: "In Progress", dateOpened: "Aug 18, 2026" },
  { client: "Client #1046", caseType: "Employment Dispute", location: "Johannesburg, South Africa", assignedTo: "Kwame Asante", status: "Open", dateOpened: "Aug 22, 2026" },
  { client: "Client #1047", caseType: "Custody Dispute", location: "Cairo, Egypt", assignedTo: "Fatima Diallo", status: "Resolved", dateOpened: "Jul 15, 2026" },
];

const statusFilters: ("All" | CaseStatus)[] = ["All", "Open", "In Progress", "Resolved"];

export function LegalAid() {
  const [activeFilter, setActiveFilter] = useState<"All" | CaseStatus>("All");
  const [search, setSearch] = useState("");

  const filtered = allCases.filter((c) => {
    const matchesFilter = activeFilter === "All" || c.status === activeFilter;
    const matchesSearch =
      c.client.toLowerCase().includes(search.toLowerCase()) ||
      c.caseType.toLowerCase().includes(search.toLowerCase()) ||
      c.assignedTo.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <DashboardLayout>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-dark-gray dark:text-white">
            Legal Aid
          </h1>
          <p className="mt-1 text-sm text-dark-gray/60 dark:text-white/60">
            {filtered.length} of {allCases.length} cases
          </p>
        </div>

        <div className="relative w-full sm:w-72">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-gray/40 dark:text-white/40" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by client, case type, or lawyer..."
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-dark-gray/15 dark:border-white/15 bg-white dark:bg-navy text-sm text-dark-gray dark:text-white placeholder:text-dark-gray/40 dark:placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-umber dark:focus:ring-gold"
          />
        </div>
      </div>

      <div className="mt-5 flex gap-2">
        {statusFilters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === f
                ? "bg-umber text-white"
                : "bg-white dark:bg-navy border border-dark-gray/15 dark:border-white/15 text-dark-gray/70 dark:text-white/70 hover:bg-dark-gray/5 dark:hover:bg-white/5"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-5 bg-white dark:bg-navy rounded-2xl border border-dark-gray/10 dark:border-white/10 divide-y divide-dark-gray/10 dark:divide-white/10">
        {filtered.length === 0 ? (
          <p className="p-8 text-center text-sm text-dark-gray/50 dark:text-white/50">
            No cases match your search.
          </p>
        ) : (
          filtered.map((c) => (
            <div
              key={c.client}
              className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 sm:p-5"
            >
              <div className="h-10 w-10 rounded-full bg-umber/10 text-umber dark:bg-gold/10 dark:text-gold flex items-center justify-center shrink-0">
                <Scale size={18} />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-dark-gray dark:text-white">
                  {c.caseType} <span className="font-normal text-dark-gray/50 dark:text-white/50">— {c.client}</span>
                </p>
                <p className="mt-1 text-xs text-dark-gray/50 dark:text-white/50">
                  {c.location} · Assigned to {c.assignedTo}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="flex items-center gap-1 text-xs text-dark-gray/40 dark:text-white/40">
                  <Calendar size={12} />
                  {c.dateOpened}
                </span>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                  c.status === "Open" ? "bg-alert-red/10 text-alert-red" :
                  c.status === "In Progress" ? "bg-gold/20 text-umber dark:text-gold" :
                  "bg-success-green/10 text-success-green"
                }`}>
                  {c.status}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </DashboardLayout>
  );
}
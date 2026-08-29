import { useState } from "react";
import { DashboardLayout } from "../../components/dashboard/DashboardLayout";
import { Search, FileText, MapPin, Calendar, EyeOff } from "lucide-react";

type ReportStatus = "New" | "Under Review" | "Resolved";

const allReports: { id: string; category: string; location: string; status: ReportStatus; date: string; anonymous: boolean }[] = [
  { id: "CR-2201", category: "Suspicious Activity", location: "Nairobi, Kenya", status: "New", date: "Aug 28, 2026", anonymous: true },
  { id: "CR-2202", category: "Child Welfare Concern", location: "Lagos, Nigeria", status: "Under Review", date: "Aug 27, 2026", anonymous: true },
  { id: "CR-2203", category: "Domestic Violence", location: "Accra, Ghana", status: "Under Review", date: "Aug 26, 2026", anonymous: false },
  { id: "CR-2204", category: "Human Trafficking", location: "Cairo, Egypt", status: "New", date: "Aug 26, 2026", anonymous: true },
  { id: "CR-2205", category: "Suspicious Activity", location: "Kampala, Uganda", status: "Resolved", date: "Aug 20, 2026", anonymous: true },
  { id: "CR-2206", category: "Child Welfare Concern", location: "Johannesburg, South Africa", status: "Resolved", date: "Aug 18, 2026", anonymous: false },
];

const statusFilters: ("All" | ReportStatus)[] = ["All", "New", "Under Review", "Resolved"];

export function CommunityReports() {
  const [activeFilter, setActiveFilter] = useState<"All" | ReportStatus>("All");
  const [search, setSearch] = useState("");

  const filtered = allReports.filter((r) => {
    const matchesFilter = activeFilter === "All" || r.status === activeFilter;
    const matchesSearch =
      r.id.toLowerCase().includes(search.toLowerCase()) ||
      r.category.toLowerCase().includes(search.toLowerCase()) ||
      r.location.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <DashboardLayout>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-dark-gray dark:text-white">
            Community Reports
          </h1>
          <p className="mt-1 text-sm text-dark-gray/60 dark:text-white/60">
            {filtered.length} of {allReports.length} reports
          </p>
        </div>

        <div className="relative w-full sm:w-72">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-gray/40 dark:text-white/40" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by ID, category, or location..."
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
            No reports match your search.
          </p>
        ) : (
          filtered.map((r) => (
            <div
              key={r.id}
              className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 sm:p-5"
            >
              <div className="h-10 w-10 rounded-full bg-umber/10 text-umber dark:bg-gold/10 dark:text-gold flex items-center justify-center shrink-0">
                <FileText size={18} />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-dark-gray dark:text-white">
                  {r.category}
                  <span className="ml-2 font-normal text-xs text-dark-gray/50 dark:text-white/50">
                    {r.id}
                  </span>
                </p>
                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-dark-gray/50 dark:text-white/50">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} />
                    {r.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {r.date}
                  </span>
                  {r.anonymous && (
                    <span className="flex items-center gap-1">
                      <EyeOff size={12} />
                      Anonymous
                    </span>
                  )}
                </div>
              </div>

              <span className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${
                r.status === "New" ? "bg-alert-red/10 text-alert-red" :
                r.status === "Under Review" ? "bg-gold/20 text-umber dark:text-gold" :
                "bg-success-green/10 text-success-green"
              }`}>
                {r.status}
              </span>
            </div>
          ))
        )}
      </div>
    </DashboardLayout>
  );
}
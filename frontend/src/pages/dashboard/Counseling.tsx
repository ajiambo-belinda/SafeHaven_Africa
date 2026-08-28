import { useState } from "react";
import { DashboardLayout } from "../../components/dashboard/DashboardLayout";
import { Search, HeartHandshake, Calendar, Video, Users as UsersIcon } from "lucide-react";

type SessionStatus = "Scheduled" | "Completed" | "Cancelled";
type SessionType = "Individual" | "Group" | "Family";

const allSessions: { client: string; counselor: string; type: SessionType; status: SessionStatus; date: string; time: string }[] = [
  { client: "Client #2041", counselor: "Dr. Amina Yusuf", type: "Individual", status: "Scheduled", date: "Aug 29, 2026", time: "10:00 AM" },
  { client: "Client #2042", counselor: "Dr. Peter Mwangi", type: "Family", status: "Scheduled", date: "Aug 29, 2026", time: "2:00 PM" },
  { client: "Client #2043", counselor: "Dr. Amina Yusuf", type: "Individual", status: "Completed", date: "Aug 25, 2026", time: "11:00 AM" },
  { client: "Support Group A", counselor: "Dr. Chidinma Eze", type: "Group", status: "Scheduled", date: "Aug 30, 2026", time: "4:00 PM" },
  { client: "Client #2044", counselor: "Dr. Peter Mwangi", type: "Individual", status: "Cancelled", date: "Aug 24, 2026", time: "9:00 AM" },
  { client: "Client #2045", counselor: "Dr. Chidinma Eze", type: "Individual", status: "Completed", date: "Aug 22, 2026", time: "1:00 PM" },
];

const statusFilters: ("All" | SessionStatus)[] = ["All", "Scheduled", "Completed", "Cancelled"];

export function Counseling() {
  const [activeFilter, setActiveFilter] = useState<"All" | SessionStatus>("All");
  const [search, setSearch] = useState("");

  const filtered = allSessions.filter((s) => {
    const matchesFilter = activeFilter === "All" || s.status === activeFilter;
    const matchesSearch =
      s.client.toLowerCase().includes(search.toLowerCase()) ||
      s.counselor.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <DashboardLayout>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-dark-gray dark:text-white">
            Counseling
          </h1>
          <p className="mt-1 text-sm text-dark-gray/60 dark:text-white/60">
            {filtered.length} of {allSessions.length} sessions
          </p>
        </div>

        <div className="relative w-full sm:w-72">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-gray/40 dark:text-white/40" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by client or counselor..."
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
            No sessions match your search.
          </p>
        ) : (
          filtered.map((s) => (
            <div
              key={`${s.client}-${s.date}-${s.time}`}
              className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 sm:p-5"
            >
              <div className="h-10 w-10 rounded-full bg-umber/10 text-umber dark:bg-gold/10 dark:text-gold flex items-center justify-center shrink-0">
                {s.type === "Group" ? <UsersIcon size={18} /> : <HeartHandshake size={18} />}
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-dark-gray dark:text-white">
                  {s.client}
                  <span className="ml-2 font-normal text-xs text-dark-gray/50 dark:text-white/50">
                    {s.type} session
                  </span>
                </p>
                <p className="mt-1 flex items-center gap-1 text-xs text-dark-gray/50 dark:text-white/50">
                  <Video size={12} />
                  With {s.counselor}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="flex items-center gap-1 text-xs text-dark-gray/40 dark:text-white/40">
                  <Calendar size={12} />
                  {s.date}, {s.time}
                </span>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                  s.status === "Scheduled" ? "bg-navy/10 text-navy dark:bg-white/10 dark:text-white" :
                  s.status === "Completed" ? "bg-success-green/10 text-success-green" :
                  "bg-alert-red/10 text-alert-red"
                }`}>
                  {s.status}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </DashboardLayout>
  );
}
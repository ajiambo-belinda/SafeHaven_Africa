import { useState } from "react";
import { DashboardLayout } from "../../components/dashboard/DashboardLayout";
import { Search, MapPin, Clock, ChevronRight } from "lucide-react";

type Urgency = "High" | "Medium" | "Low";

const allRequests: { name: string; location: string; urgency: Urgency; time: string; type: string; avatarSeed: string }[] = [
  { name: "Domestic Violence Support", location: "Nairobi, Kenya", urgency: "High", time: "5 mins ago", type: "Domestic Violence", avatarSeed: "req1" },
  { name: "Shelter Request", location: "Lagos, Nigeria", urgency: "Medium", time: "15 mins ago", type: "Shelter", avatarSeed: "req2" },
  { name: "Legal Assistance", location: "Accra, Ghana", urgency: "Low", time: "30 mins ago", type: "Legal Aid", avatarSeed: "req3" },
  { name: "Counseling Support", location: "Kampala, Uganda", urgency: "Medium", time: "1 hour ago", type: "Counseling", avatarSeed: "req4" },
  { name: "Child Abuse Report", location: "Johannesburg, South Africa", urgency: "High", time: "2 hours ago", type: "Child Abuse", avatarSeed: "req5" },
  { name: "Human Trafficking Alert", location: "Cairo, Egypt", urgency: "High", time: "3 hours ago", type: "Human Trafficking", avatarSeed: "req6" },
  { name: "Shelter Request", location: "Kigali, Rwanda", urgency: "Low", time: "5 hours ago", type: "Shelter", avatarSeed: "req7" },
  { name: "Counseling Support", location: "Dar es Salaam, Tanzania", urgency: "Medium", time: "6 hours ago", type: "Counseling", avatarSeed: "req8" },
  { name: "Homelessness Support", location: "Addis Ababa, Ethiopia", urgency: "Medium", time: "7 hours ago", type: "Homelessness", avatarSeed: "req9" },
  { name: "Domestic Violence Support", location: "Accra, Ghana", urgency: "High", time: "8 hours ago", type: "Domestic Violence", avatarSeed: "req10" },
  { name: "Legal Assistance", location: "Nairobi, Kenya", urgency: "Low", time: "10 hours ago", type: "Legal Aid", avatarSeed: "req11" },
  { name: "Shelter Request", location: "Kampala, Uganda", urgency: "Medium", time: "12 hours ago", type: "Shelter", avatarSeed: "req12" },
];

const filters: ("All" | Urgency)[] = ["All", "High", "Medium", "Low"];

export function EmergencyRequests() {
  const [activeFilter, setActiveFilter] = useState<"All" | Urgency>("All");
  const [search, setSearch] = useState("");

  const filtered = allRequests.filter((req) => {
    const matchesFilter = activeFilter === "All" || req.urgency === activeFilter;
    const matchesSearch =
      req.name.toLowerCase().includes(search.toLowerCase()) ||
      req.location.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <DashboardLayout>
      <div>
        <h1 className="text-2xl font-bold text-dark-gray dark:text-white">
          Emergency Requests
        </h1>
        <p className="mt-1.5 text-sm text-dark-gray/70 dark:text-white/70 max-w-2xl leading-relaxed">
          Live incoming reports from across the network, sorted by urgency.
          High-priority cases need a responder assigned as quickly as
          possible — review, filter, and act on requests below.
        </p>
      </div>

      <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-sm text-dark-gray/60 dark:text-white/60">
          {filtered.length} of {allRequests.length} requests
        </p>

        <div className="relative w-full sm:w-72">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-gray/40 dark:text-white/40" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or location..."
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-dark-gray/15 dark:border-white/15 bg-white dark:bg-navy text-sm text-dark-gray dark:text-white placeholder:text-dark-gray/40 dark:placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-umber dark:focus:ring-gold"
          />
        </div>
      </div>

      <div className="mt-5 flex gap-2">
        {filters.map((f) => (
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
            No requests match your search.
          </p>
        ) : (
          filtered.map((req) => (
            <button
              key={`${req.name}-${req.avatarSeed}`}
              className="w-full flex items-center gap-4 p-4 sm:p-5 text-left hover:bg-dark-gray/5 dark:hover:bg-white/5 transition-colors"
            >
              <img
                src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${req.avatarSeed}`}
                alt=""
                className="h-12 w-12 rounded-full bg-dark-gray/10 dark:bg-white/10 shrink-0"
              />

              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-dark-gray dark:text-white truncate">
                  {req.name}
                </p>
                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-dark-gray/50 dark:text-white/50">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} />
                    {req.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {req.time}
                  </span>
                </div>
              </div>

              <span className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${
                req.urgency === "High" ? "bg-alert-red/10 text-alert-red" :
                req.urgency === "Medium" ? "bg-gold/20 text-umber dark:text-gold" :
                "bg-navy/10 text-navy dark:bg-white/10 dark:text-white"
              }`}>
                {req.urgency}
              </span>

              <ChevronRight size={18} className="shrink-0 text-dark-gray/30 dark:text-white/30 hidden sm:block" />
            </button>
          ))
        )}
      </div>
    </DashboardLayout>
  );
}
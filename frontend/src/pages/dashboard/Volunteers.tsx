import { useState } from "react";
import { DashboardLayout } from "../../components/dashboard/DashboardLayout";
import { Search, MapPin, Mail, BadgeCheck } from "lucide-react";

type Status = "Active" | "Pending" | "Inactive";

const allVolunteers: { name: string; location: string; skill: string; status: Status; email: string; avatarSeed: string }[] = [
  { name: "Amara Okafor", location: "Lagos, Nigeria", skill: "Counseling", status: "Active", email: "amara.o@example.com", avatarSeed: "vol1" },
  { name: "Wanjiru Kamau", location: "Nairobi, Kenya", skill: "Shelter Support", status: "Active", email: "wanjiru.k@example.com", avatarSeed: "vol2" },
  { name: "Kofi Mensah", location: "Accra, Ghana", skill: "Legal Aid", status: "Pending", email: "kofi.m@example.com", avatarSeed: "vol3" },
  { name: "Zainab Bello", location: "Kano, Nigeria", skill: "Community Outreach", status: "Active", email: "zainab.b@example.com", avatarSeed: "vol4" },
  { name: "Thabo Nkosi", location: "Johannesburg, South Africa", skill: "Transport", status: "Pending", email: "thabo.n@example.com", avatarSeed: "vol5" },
  { name: "Amina Hassan", location: "Kampala, Uganda", skill: "Counseling", status: "Active", email: "amina.h@example.com", avatarSeed: "vol6" },
  { name: "Samuel Osei", location: "Kumasi, Ghana", skill: "Shelter Support", status: "Inactive", email: "samuel.o@example.com", avatarSeed: "vol7" },
  { name: "Grace Uwimana", location: "Kigali, Rwanda", skill: "Community Outreach", status: "Active", email: "grace.u@example.com", avatarSeed: "vol8" },
];

const statusFilters: ("All" | Status)[] = ["All", "Active", "Pending", "Inactive"];

export function Volunteers() {
  const [activeFilter, setActiveFilter] = useState<"All" | Status>("All");
  const [search, setSearch] = useState("");

  const filtered = allVolunteers.filter((v) => {
    const matchesFilter = activeFilter === "All" || v.status === activeFilter;
    const matchesSearch =
      v.name.toLowerCase().includes(search.toLowerCase()) ||
      v.location.toLowerCase().includes(search.toLowerCase()) ||
      v.skill.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <DashboardLayout>
      <div>
        <h1 className="text-2xl font-bold text-dark-gray dark:text-white">
          Volunteers
        </h1>
        <p className="mt-1.5 text-sm text-dark-gray/70 dark:text-white/70 max-w-2xl leading-relaxed">
          The people powering community outreach, transport, and on-the-ground
          support. Review skills and availability, and verify new volunteers
          before they're activated on the network.
        </p>
      </div>

      <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-sm text-dark-gray/60 dark:text-white/60">
          {filtered.length} of {allVolunteers.length} volunteers
        </p>

        <div className="relative w-full sm:w-72">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-gray/40 dark:text-white/40" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, location, or skill..."
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

      <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.length === 0 ? (
          <p className="col-span-full p-8 text-center text-sm text-dark-gray/50 dark:text-white/50">
            No volunteers match your search.
          </p>
        ) : (
          filtered.map((v) => (
            <div
              key={v.email}
              className="bg-white dark:bg-navy rounded-2xl border border-dark-gray/10 dark:border-white/10 p-5"
            >
              <div className="flex items-start gap-3">
                <img
                  src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${v.avatarSeed}`}
                  alt=""
                  className="h-12 w-12 rounded-full bg-dark-gray/10 dark:bg-white/10 shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-dark-gray dark:text-white truncate">
                    {v.name}
                  </p>
                  <p className="mt-0.5 flex items-center gap-1 text-xs text-dark-gray/50 dark:text-white/50">
                    <MapPin size={11} />
                    {v.location}
                  </p>
                </div>
                <span className={`shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full ${
                  v.status === "Active" ? "bg-success-green/10 text-success-green" :
                  v.status === "Pending" ? "bg-gold/20 text-umber dark:text-gold" :
                  "bg-dark-gray/10 text-dark-gray/60 dark:bg-white/10 dark:text-white/50"
                }`}>
                  {v.status}
                </span>
              </div>

              <div className="mt-4 flex items-center gap-1.5 text-xs text-dark-gray/60 dark:text-white/60">
                <BadgeCheck size={13} />
                {v.skill}
              </div>
              <div className="mt-1.5 flex items-center gap-1.5 text-xs text-dark-gray/60 dark:text-white/60 truncate">
                <Mail size={13} className="shrink-0" />
                {v.email}
              </div>

              {v.status === "Pending" && (
                <button className="mt-4 w-full py-2 rounded-lg bg-umber text-white text-sm font-semibold hover:bg-umber/90 transition-colors">
                  Verify Volunteer
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </DashboardLayout>
  );
}
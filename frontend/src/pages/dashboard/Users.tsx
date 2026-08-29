import { useState } from "react";
import { DashboardLayout } from "../../components/dashboard/DashboardLayout";
import { Search, MoreVertical } from "lucide-react";

type Role = "Administrator" | "NGO Partner" | "Shelter Admin" | "Legal Professional" | "Counselor" | "Volunteer";
type Status = "Active" | "Suspended";

const allUsers: { name: string; email: string; role: Role; status: Status; lastActive: string; avatarSeed: string }[] = [
  { name: "Belinda Ajiambo", email: "belinda.a@safehaven.org", role: "Administrator", status: "Active", lastActive: "Just now", avatarSeed: "u1" },
  { name: "Adaeze Nwosu", email: "adaeze.n@safehaven.org", role: "Legal Professional", status: "Active", lastActive: "1 hour ago", avatarSeed: "u2" },
  { name: "Dr. Amina Yusuf", email: "amina.y@safehaven.org", role: "Counselor", status: "Active", lastActive: "3 hours ago", avatarSeed: "u3" },
  { name: "Amani NGO Network", email: "contact@amaningo.org", role: "NGO Partner", status: "Active", lastActive: "Yesterday", avatarSeed: "u4" },
  { name: "Nairobi Safe House Admin", email: "admin@nairobisafehouse.org", role: "Shelter Admin", status: "Active", lastActive: "2 days ago", avatarSeed: "u5" },
  { name: "Wanjiru Kamau", email: "wanjiru.k@example.com", role: "Volunteer", status: "Active", lastActive: "5 hours ago", avatarSeed: "u6" },
  { name: "Samuel Osei", email: "samuel.o@example.com", role: "Volunteer", status: "Suspended", lastActive: "3 weeks ago", avatarSeed: "u7" },
];

const roleFilters: ("All" | Role)[] = ["All", "Administrator", "NGO Partner", "Shelter Admin", "Legal Professional", "Counselor", "Volunteer"];

export function Users() {
  const [activeFilter, setActiveFilter] = useState<"All" | Role>("All");
  const [search, setSearch] = useState("");

  const filtered = allUsers.filter((u) => {
    const matchesFilter = activeFilter === "All" || u.role === activeFilter;
    const matchesSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <DashboardLayout>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-dark-gray dark:text-white">
            Users
          </h1>
          <p className="mt-1 text-sm text-dark-gray/60 dark:text-white/60">
            {filtered.length} of {allUsers.length} users
          </p>
        </div>

        <div className="relative w-full sm:w-72">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-gray/40 dark:text-white/40" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or email..."
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-dark-gray/15 dark:border-white/15 bg-white dark:bg-navy text-sm text-dark-gray dark:text-white placeholder:text-dark-gray/40 dark:placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-umber dark:focus:ring-gold"
          />
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {roleFilters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
              activeFilter === f
                ? "bg-umber text-white"
                : "bg-white dark:bg-navy border border-dark-gray/15 dark:border-white/15 text-dark-gray/70 dark:text-white/70 hover:bg-dark-gray/5 dark:hover:bg-white/5"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-5 bg-white dark:bg-navy rounded-2xl border border-dark-gray/10 dark:border-white/10 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-gray/10 dark:border-white/10 text-left">
              <th className="p-4 font-medium text-dark-gray/50 dark:text-white/50">User</th>
              <th className="p-4 font-medium text-dark-gray/50 dark:text-white/50">Role</th>
              <th className="p-4 font-medium text-dark-gray/50 dark:text-white/50">Status</th>
              <th className="p-4 font-medium text-dark-gray/50 dark:text-white/50">Last Active</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-dark-gray/10 dark:divide-white/10">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-8 text-center text-dark-gray/50 dark:text-white/50">
                  No users match your search.
                </td>
              </tr>
            ) : (
              filtered.map((u) => (
                <tr key={u.email}>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${u.avatarSeed}`}
                        alt=""
                        className="h-9 w-9 rounded-full bg-dark-gray/10 dark:bg-white/10 shrink-0"
                      />
                      <div className="min-w-0">
                        <p className="font-semibold text-dark-gray dark:text-white truncate">{u.name}</p>
                        <p className="text-xs text-dark-gray/50 dark:text-white/50 truncate">{u.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-dark-gray/70 dark:text-white/70 whitespace-nowrap">{u.role}</td>
                  <td className="p-4">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      u.status === "Active"
                        ? "bg-success-green/10 text-success-green"
                        : "bg-alert-red/10 text-alert-red"
                    }`}>
                      {u.status}
                    </span>
                  </td>
                  <td className="p-4 text-dark-gray/50 dark:text-white/50 whitespace-nowrap">{u.lastActive}</td>
                  <td className="p-4 text-right">
                    <button className="p-1.5 text-dark-gray/40 dark:text-white/40 hover:text-dark-gray dark:hover:text-white transition-colors" aria-label="More options">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}
import { DashboardLayout } from "../../components/dashboard/DashboardLayout";
import { ShieldAlert, Home, Users, ShieldCheck, Calendar, UserPlus, UserCheck, UserX } from "lucide-react";

const stats = [
  {
    icon: <ShieldAlert size={22} />,
    value: "12",
    label: "Active Emergency Requests",
    change: "20%",
    trend: "up",
    color: "umber",
  },
  {
    icon: <Home size={22} />,
    value: "48",
    label: "Available Shelters",
    change: "15%",
    trend: "up",
    color: "navy",
  },
  {
    icon: <Users size={22} />,
    value: "320",
    label: "Active Volunteers",
    change: "18%",
    trend: "up",
    color: "gold",
  },
  {
    icon: <ShieldCheck size={22} />,
    value: "96%",
    label: "Community Safety Score",
    change: "5%",
    trend: "up",
    color: "navy",
  },
];

const recentRequests = [
  { name: "Domestic Violence Support", location: "Nairobi, Kenya", urgency: "High", time: "5 mins ago", avatarSeed: "request1" },
  { name: "Shelter Request", location: "Kisumu, Kenya", urgency: "Medium", time: "15 mins ago", avatarSeed: "request2" },
  { name: "Legal Assistance", location: "Mombasa, Kenya", urgency: "Low", time: "30 mins ago", avatarSeed: "request3" },
  { name: "Counseling Support", location: "Eldoret, Kenya", urgency: "Medium", time: "1 hour ago", avatarSeed: "request4" },
];

const shelters = [
  { name: "Nairobi Safe House", location: "Nairobi, Kenya", beds: 12 },
  { name: "Kisumu Safe Shelter", location: "Kisumu, Kenya", beds: 4 },
  { name: "Mombasa Shelter", location: "Mombasa, Kenya", beds: 8 },
  { name: "Eldoret Safe House", location: "Eldoret, Kenya", beds: 2 },
];

const reportBreakdown = [
  { label: "Domestic Violence", count: 28, percent: 36, color: "#7a4a2b" },
  { label: "Child Abuse", count: 16, percent: 21, color: "#d6a32a" },
  { label: "Human Trafficking", count: 12, percent: 15, color: "#0b1f3a" },
  { label: "Other Issues", count: 22, percent: 28, color: "#9ca3af" },
];
const totalReports = reportBreakdown.reduce((sum, r) => sum + r.count, 0);

const volunteerActivity = [
  { icon: <UserPlus size={18} />, label: "New Volunteers", value: 24, change: "12%", trend: "up" },
  { icon: <UserCheck size={18} />, label: "Active Volunteers", value: 320, change: "8%", trend: "up" },
  { icon: <UserX size={18} />, label: "Pending Verification", value: 7, change: "3%", trend: "down" },
];

export function Overview() {
  const today = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <DashboardLayout>
      <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-start">
        <div>
          <h1 className="text-2xl font-bold text-dark-gray dark:text-white">
            Welcome back, Belinda Ajiambo 👋
          </h1>
          <p className="mt-1.5 text-black dark:text-black">
            Together, we can build safer communities.
          </p>
          <p className="mt-3 flex items-center gap-1.5 text-sm text-dark-gray/50 dark:text-white/50">
            <Calendar size={14} />
            Today is {today}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:flex gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white dark:bg-navy rounded-2xl border border-dark-gray/10 dark:border-white/10 p-4 w-full lg:w-40"
            >
              <div className={`h-9 w-9 rounded-full flex items-center justify-center ${
                stat.color === "umber" ? "bg-umber text-white" :
                stat.color === "navy" ? "bg-navy text-white" :
                "bg-gold text-dark-gray"
              }`}>
                {stat.icon}
              </div>
              <p className="mt-3 text-xl font-bold text-dark-gray dark:text-white">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-dark-gray/60 dark:text-white/60 leading-snug">
                {stat.label}
              </p>
              <p className="mt-1.5 text-xs font-medium text-success-green">
                ↑ {stat.change} from yesterday
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-navy rounded-2xl border border-dark-gray/10 dark:border-white/10 p-6">
          <p className="text-dark-gray/50 dark:text-white/50 text-sm">
            Safety Map Overview — coming next
          </p>
        </div>

        <div className="bg-white dark:bg-navy rounded-2xl border border-dark-gray/10 dark:border-white/10 p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-dark-gray dark:text-white">
              Recent Emergency Requests
            </h2>
            <a href="#" className="text-sm font-medium text-umber dark:text-gold hover:underline">
              View all
            </a>
          </div>

          <div className="mt-4 space-y-4">
            {recentRequests.map((req) => (
              <div key={req.name} className="flex items-start gap-3">
                <img
  src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${req.avatarSeed}`}
  alt=""
  className="h-10 w-10 rounded-full bg-dark-gray/10 dark:bg-white/10 shrink-0"
/>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-dark-gray dark:text-white truncate">
                    {req.name}
                  </p>
                  <p className="text-xs text-dark-gray/50 dark:text-white/50">
                    {req.location}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full ${
                    req.urgency === "High" ? "bg-alert-red/10 text-alert-red" :
                    req.urgency === "Medium" ? "bg-gold/20 text-umber dark:text-gold" :
                    "bg-navy/10 text-navy dark:bg-white/10 dark:text-white"
                  }`}>
                    {req.urgency}
                  </span>
                  <p className="mt-1 text-xs text-dark-gray/40 dark:text-white/40">
                    {req.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
                </div>
      </div>

      <div className="mt-6 grid lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-navy rounded-2xl border border-dark-gray/10 dark:border-white/10 p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-dark-gray dark:text-white">
              Shelter Availability
            </h2>
            <a href="#" className="text-sm font-medium text-umber dark:text-gold hover:underline">
              View all
            </a>
          </div>

          <div className="mt-4 space-y-4">
            {shelters.map((shelter) => (
              <div key={shelter.name} className="flex items-center gap-3">
                <img
                  src={`https://picsum.photos/seed/${shelter.name}/80/80`}
                  alt=""
                  className="h-12 w-12 rounded-lg object-cover shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-dark-gray dark:text-white truncate">
                    {shelter.name}
                  </p>
                  <p className="text-xs text-dark-gray/50 dark:text-white/50">
                    {shelter.location}
                  </p>
                </div>
                <span className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full bg-success-green/10 text-success-green">
                  {shelter.beds} Beds Available
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-navy rounded-2xl border border-dark-gray/10 dark:border-white/10 p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-dark-gray dark:text-white">
              Reports This Week
            </h2>
            <a href="#" className="text-sm font-medium text-umber dark:text-gold hover:underline">
              View reports
            </a>
          </div>

          <div className="mt-6 flex items-center gap-6">
            <div
              className="relative h-32 w-32 rounded-full shrink-0"
              style={{
                background: `conic-gradient(${reportBreakdown
                  .map((r, i) => {
                    const start = reportBreakdown.slice(0, i).reduce((s, x) => s + x.percent, 0);
                    return `${r.color} ${start}% ${start + r.percent}%`;
                  })
                  .join(", ")})`,
              }}
            >
              <div className="absolute inset-3 rounded-full bg-white dark:bg-navy flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-dark-gray dark:text-white">{totalReports}</span>
                <span className="text-[10px] text-dark-gray/50 dark:text-white/50">Total Reports</span>
              </div>
            </div>

            <div className="space-y-2.5">
              {reportBreakdown.map((r) => (
                <div key={r.label} className="flex items-center gap-2 text-xs">
                  <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ background: r.color }} />
                  <span className="text-dark-gray dark:text-white">
                    {r.label} <span className="text-dark-gray/50 dark:text-white/50">{r.count} ({r.percent}%)</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-navy rounded-2xl border border-dark-gray/10 dark:border-white/10 p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-dark-gray dark:text-white">
              Volunteer Activity
            </h2>
            <a href="#" className="text-sm font-medium text-umber dark:text-gold hover:underline">
              View all activity
            </a>
          </div>

          <div className="mt-4 space-y-4">
            {volunteerActivity.map((v) => (
              <div key={v.label} className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-umber/10 text-umber dark:bg-gold/10 dark:text-gold flex items-center justify-center shrink-0">
                  {v.icon}
                </div>
                <p className="flex-1 text-sm text-dark-gray dark:text-white">{v.label}</p>
                <p className="text-sm font-bold text-dark-gray dark:text-white">{v.value}</p>
                <p className={`text-xs font-medium ${v.trend === "up" ? "text-success-green" : "text-alert-red"}`}>
                  {v.trend === "up" ? "↑" : "↓"} {v.change}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
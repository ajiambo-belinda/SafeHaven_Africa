import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "../../components/dashboard/DashboardLayout";
import { motion } from "framer-motion";
import { SafetyMap } from "../../components/dashboard/SafetyMap";
import { ShieldAlert, Home, Users, ShieldCheck, Calendar, UserPlus, UserCheck, UserX, PlusCircle, BadgeCheck, Bell, FileText, MessageCircle, BarChart2 } from "lucide-react";

const stats = [
  {
    icon: <ShieldAlert size={20} />,
    value: "12",
    label: "Active Emergency Requests",
    change: "20%",
    trend: "up",
    color: "umber",
  },
  {
    icon: <Home size={20} />,
    value: "48",
    label: "Available Shelters",
    change: "15%",
    trend: "up",
    color: "navy",
  },
  {
    icon: <Users size={20} />,
    value: "320",
    label: "Active Volunteers",
    change: "18%",
    trend: "up",
    color: "gold",
  },
  {
    icon: <ShieldCheck size={20} />,
    value: "96%",
    label: "Community Safety Score",
    change: "5%",
    trend: "up",
    color: "navy",
  },
];

const recentRequests = [
  { name: "Domestic Violence Support", location: "Nairobi, Kenya", urgency: "High", time: "5 mins ago", avatarSeed: "request1" },
  { name: "Shelter Request", location: "Lagos, Nigeria", urgency: "Medium", time: "15 mins ago", avatarSeed: "request2" },
  { name: "Legal Assistance", location: "Accra, Ghana", urgency: "Low", time: "30 mins ago", avatarSeed: "request3" },
  { name: "Counseling Support", location: "Kampala, Uganda", urgency: "Medium", time: "1 hour ago", avatarSeed: "request4" },
];

const shelters = [
  { name: "Nairobi Safe House", location: "Nairobi, Kenya", beds: 12 },
  { name: "Kigali Safe Shelter", location: "Kigali, Rwanda", beds: 4 },
  { name: "Johannesburg Shelter", location: "Johannesburg, South Africa", beds: 8 },
  { name: "Cairo Safe House", location: "Cairo, Egypt", beds: 2 },
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

const quickActions = [
  { icon: <PlusCircle size={16} />, label: "Add New Shelter", color: "navy", path: null },
  { icon: <BadgeCheck size={16} />, label: "Verify Volunteer", color: "umber", path: null },
  { icon: <Bell size={16} />, label: "Emergency Alert", highlight: true, color: "alert-red", path: "/report" },
  { icon: <FileText size={16} />, label: "Create Report", color: "navy", path: "/report" },
  { icon: <MessageCircle size={16} />, label: "Send Message", color: "gold", path: null },
  { icon: <BarChart2 size={16} />, label: "View Analytics", color: "umber", path: null },
];

export function Overview() {
  const navigate = useNavigate();

  const today = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="grid lg:grid-cols-[1fr_auto] gap-6 items-start"
      >
        <div>
          <h1 className="text-2xl font-bold text-dark-gray dark:text-white">
            Welcome back, Belinda Ajiambo 👋
          </h1>
          <p className="mt-1.5 text-black dark:text-black">
            Together, we can save Africans.
          </p>
          <p className="mt-3 flex items-center gap-1.5 text-sm text-dark-gray/50 dark:text-white/50">
            <Calendar size={14} />
            Today is {today}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:flex gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.08, ease: "easeOut" }}
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
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="mt-6 grid lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lg:col-span-2 bg-white dark:bg-navy rounded-2xl border border-dark-gray/10 dark:border-white/10 p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-dark-gray dark:text-white">
              Safety Map Overview
            </h2>
            <span className="text-xs text-dark-gray/40 dark:text-white/40">All Regions</span>
          </div>
          <SafetyMap />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="bg-white dark:bg-navy rounded-2xl border border-dark-gray/10 dark:border-white/10 p-6"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="font-semibold text-sm text-dark-gray dark:text-white leading-snug">
              Recent Emergency Requests
            </h2>
            <a href="#" className="self-start sm:self-auto shrink-0 text-xs font-semibold text-umber dark:text-gold bg-umber/10 dark:bg-gold/10 px-2.5 py-1 rounded-full whitespace-nowrap hover:bg-umber/20 dark:hover:bg-gold/20 transition-colors">
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
        </motion.div>
      </div>

      <div className="mt-6 grid lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white dark:bg-navy rounded-2xl border border-dark-gray/10 dark:border-white/10 p-6"
        >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="bg-white dark:bg-navy rounded-2xl border border-dark-gray/10 dark:border-white/10 p-6"
        >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="bg-white dark:bg-navy rounded-2xl border border-dark-gray/10 dark:border-white/10 p-6"
        >
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
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mt-6 bg-white dark:bg-navy rounded-2xl border border-dark-gray/10 dark:border-white/10 p-6"
      >
        <h2 className="font-semibold text-dark-gray dark:text-white mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
          {quickActions.map((action) => (
            <motion.button
              key={action.label}
              onClick={() => action.path && navigate(action.path)}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.96 }}
              className={`flex items-center justify-center gap-2 py-3.5 px-3 rounded-xl border text-xs font-medium transition-shadow hover:shadow-md ${
                action.highlight
                  ? "border-umber/30 bg-umber/10 text-umber dark:text-gold"
                  : "border-dark-gray/10 dark:border-white/10 text-dark-gray dark:text-white hover:bg-dark-gray/5 dark:hover:bg-white/5"
              }`}
            >
              <span className={`shrink-0 h-7 w-7 rounded-full flex items-center justify-center ${
                action.color === "navy" ? "bg-navy text-white" :
                action.color === "umber" ? "bg-umber text-white" :
                action.color === "gold" ? "bg-gold text-dark-gray" :
                "bg-alert-red text-white"
              }`}>
                {action.icon}
              </span>
              <span className="whitespace-nowrap truncate">{action.label}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </DashboardLayout>
  );
}
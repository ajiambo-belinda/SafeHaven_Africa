import { DashboardLayout } from "../../components/dashboard/DashboardLayout";
import { FileText, Clock, Home, HeartHandshake, Users, Star } from "lucide-react";
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
} from "recharts";

const metrics = [
  { icon: <FileText size={20} />, label: "Reports Submitted", value: "1,248", change: "+14%", color: "umber" },
  { icon: <Clock size={20} />, label: "Avg. Response Time", value: "18 min", change: "-8%", color: "navy" },
  { icon: <Home size={20} />, value2: "312", label: "Shelter Placements", value: "312", change: "+9%", color: "gold" },
  { icon: <HeartHandshake size={20} />, label: "Counseling Sessions", value: "486", change: "+22%", color: "navy" },
  { icon: <Users size={20} />, label: "Monthly Active Users", value: "8,930", change: "+17%", color: "umber" },
  { icon: <Star size={20} />, label: "Satisfaction Rating", value: "4.7 / 5", change: "+0.2", color: "gold" },
];

const monthlyReports = [
  { month: "Sep", reports: 64 },
  { month: "Oct", reports: 71 },
  { month: "Nov", reports: 68 },
  { month: "Dec", reports: 59 },
  { month: "Jan", reports: 73 },
  { month: "Feb", reports: 88 },
  { month: "Mar", reports: 82 },
  { month: "Apr", reports: 95 },
  { month: "May", reports: 78 },
  { month: "Jun", reports: 110 },
  { month: "Jul", reports: 134 },
  { month: "Aug", reports: 128 },
];

const responseTimesTrend = [
  { month: "Sep", minutes: 41 },
  { month: "Oct", minutes: 38 },
  { month: "Nov", minutes: 36 },
  { month: "Dec", minutes: 35 },
  { month: "Jan", minutes: 34 },
  { month: "Feb", minutes: 30 },
  { month: "Mar", minutes: 32 },
  { month: "Apr", minutes: 28 },
  { month: "May", minutes: 25 },
  { month: "Jun", minutes: 22 },
  { month: "Jul", minutes: 19 },
  { month: "Aug", minutes: 18 },
];

const requestsByType = [
  { name: "Domestic Violence", value: 36, color: "#7a4a2b" },
  { name: "Shelter", value: 24, color: "#0b1f3a" },
  { name: "Legal Aid", value: 18, color: "#d6a32a" },
  { name: "Counseling", value: 15, color: "#16a34a" },
  { name: "Other", value: 7, color: "#9ca3af" },
];

export function Analytics() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold text-dark-gray dark:text-white">
        Analytics
      </h1>
      <p className="mt-1 text-sm text-dark-gray/60 dark:text-white/60">
        Platform performance over the last 12 months
      </p>

      <div className="mt-6 grid grid-cols-2 lg:grid-cols-3 gap-4">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="bg-white dark:bg-navy rounded-2xl border border-dark-gray/10 dark:border-white/10 p-5"
          >
            <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
              m.color === "umber" ? "bg-umber text-white" :
              m.color === "navy" ? "bg-navy text-white" :
              "bg-gold text-dark-gray"
            }`}>
              {m.icon}
            </div>
            <p className="mt-3 text-xl font-bold text-dark-gray dark:text-white">{m.value}</p>
            <p className="mt-1 text-xs text-dark-gray/60 dark:text-white/60">{m.label}</p>
            <p className="mt-1.5 text-xs font-medium text-success-green">{m.change} vs last period</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-navy rounded-2xl border border-dark-gray/10 dark:border-white/10 p-6">
          <h2 className="font-semibold text-dark-gray dark:text-white">
            Reports Submitted Over Time
          </h2>

          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyReports}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#8a8783" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 12, fill: "#8a8783" }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ borderRadius: 8, border: "1px solid #e5e7eb", fontSize: 13 }}
                  cursor={{ fill: "rgba(122,74,43,0.08)" }}
                />
                <Bar dataKey="reports" fill="#7a4a2b" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-navy rounded-2xl border border-dark-gray/10 dark:border-white/10 p-6">
          <h2 className="font-semibold text-dark-gray dark:text-white">
            Requests by Type
          </h2>

          <div className="mt-2 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
  <Pie
    data={requestsByType}
    dataKey="value"
    nameKey="name"
    innerRadius={50}
    outerRadius={80}
    paddingAngle={2}
  >
    {requestsByType.map((entry) => (
      <Cell key={entry.name} fill={entry.color} />
    ))}
  </Pie>
  <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #e5e7eb", fontSize: 13 }} />
  <Legend
    layout="horizontal"
    align="center"
    verticalAlign="bottom"
    iconType="circle"
    iconSize={8}
    wrapperStyle={{ fontSize: 12, paddingTop: 12 }}
  />
</PieChart>
            </ResponsiveContainer>
          </div>
                </div>
      </div>

      <div className="mt-6 bg-white dark:bg-navy rounded-2xl border border-dark-gray/10 dark:border-white/10 p-6">
        <h2 className="font-semibold text-dark-gray dark:text-white">
          Average Response Time Trend
        </h2>
        <p className="text-xs text-dark-gray/50 dark:text-white/50">
          Minutes from report submission to first responder contact
        </p>

        <div className="mt-4 h-56">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={responseTimesTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#8a8783" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: "#8a8783" }} axisLine={false} tickLine={false} unit=" min" />
              <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #e5e7eb", fontSize: 13 }} />
              <Line
                type="monotone"
                dataKey="minutes"
                stroke="#0b1f3a"
                strokeWidth={2.5}
                dot={{ r: 4, fill: "#0b1f3a" }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </DashboardLayout>
  );
}
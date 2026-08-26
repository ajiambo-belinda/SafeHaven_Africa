import { DashboardLayout } from "../../components/dashboard/DashboardLayout";
import { ShieldAlert, Home, Users, ShieldCheck, Calendar } from "lucide-react";

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
          <p className="mt-1.5 text-dark-gray/60 dark:text-white/60">
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
              <p className="mt-1.5 text-xs font-medium text-green-600 dark:text-green-400">
                ↑ {stat.change} from yesterday
              </p>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
import { useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard, ShieldAlert, Home, Scale, HeartHandshake, Users,
  FileText, UserCog, BarChart3, BookOpen, MessageSquare, Settings,
  Menu, Search, Bell, Mail, ChevronDown, Radio,
} from "lucide-react";
import logo from "../../assets/logo.png";

const navItems = [
  { label: "Overview", icon: LayoutDashboard, path: "/dashboard" },
  { label: "Emergency Requests", icon: ShieldAlert, path: "/dashboard/emergency-requests", badge: 12 },
  { label: "Shelters", icon: Home, path: "/dashboard/shelters" },
  { label: "Legal Aid", icon: Scale, path: "/dashboard/legal-aid" },
  { label: "Counseling", icon: HeartHandshake, path: "/dashboard/counseling" },
  { label: "Volunteers", icon: Users, path: "/dashboard/volunteers" },
  { label: "Community Reports", icon: FileText, path: "/dashboard/community-reports" },
  { label: "Users", icon: UserCog, path: "/dashboard/users" },
  { label: "Analytics", icon: BarChart3, path: "/dashboard/analytics" },
  { label: "Resources", icon: BookOpen, path: "/dashboard/resources" },
  { label: "Messages", icon: MessageSquare, path: "/dashboard/messages", badge: 8 },
  { label: "Settings", icon: Settings, path: "/dashboard/settings" },
];

export function DashboardLayout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-cream dark:bg-charcoal transition-colors flex">
      <aside
        className={`${sidebarOpen ? "w-64" : "w-0 lg:w-20"} shrink-0 bg-navy transition-all duration-200 overflow-hidden flex flex-col`}
      >
        <div className="h-20 flex items-center px-5 bg-white">
  <Link to="/" className="flex items-center gap-2">
    <img src={logo} alt="SafeHaven Africa" className="h-9 w-auto" />
  </Link>
</div>

        <nav className="flex-1 px-4 pt-6 pb-2 space-y-1.5 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-umber text-white"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon size={18} className="shrink-0" />
                <span className={`${sidebarOpen ? "inline" : "hidden lg:hidden"}`}>{item.label}</span>
                {item.badge && sidebarOpen && (
  <span className={`ml-auto text-xs font-semibold h-5 min-w-5 px-1 rounded-full flex items-center justify-center ${
    item.label === "Emergency Requests"
      ? "bg-alert-red text-white"
      : "bg-gold text-dark-gray"
  }`}>
    {item.badge}
  </span>
)}
              </Link>
            );
          })}
        </nav>

        {sidebarOpen && (
          <div className="m-3 p-4 rounded-xl bg-umber/90">
            <p className="text-sm font-semibold text-white">Need Immediate Assistance?</p>
            <p className="mt-1.5 text-xs text-white/80 leading-relaxed">
              Send an SOS alert to our network
            </p>
            <button className="mt-3 w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-white text-umber text-xs font-semibold hover:bg-white/90 transition-colors">
              <Radio size={14} />
              Send SOS Now
            </button>
          </div>
        )}
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-20 bg-white dark:bg-navy border-b border-dark-gray/10 dark:border-white/10 flex items-center gap-4 px-5 sm:px-8">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 text-dark-gray dark:text-white"
            aria-label="Toggle sidebar"
          >
            <Menu size={20} />
          </button>

          <div className="flex-1 max-w-md relative hidden sm:block">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-gray/40 dark:text-white/40" />
            <input
              type="text"
              placeholder="Search anything..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-dark-gray/5 dark:bg-white/5 text-sm text-dark-gray dark:text-white placeholder:text-dark-gray/40 dark:placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-umber dark:focus:ring-gold"
            />
          </div>

          <div className="ml-auto flex items-center gap-4">
            <button className="relative p-2 text-dark-gray dark:text-white" aria-label="Notifications">
              <Bell size={19} />
              <span className="absolute top-1 right-1 h-4 min-w-4 px-1 rounded-full bg-umber text-white text-[10px] font-bold flex items-center justify-center">5</span>
            </button>
            <button className="relative p-2 text-dark-gray dark:text-white" aria-label="Messages">
              <Mail size={19} />
              <span className="absolute top-1 right-1 h-4 min-w-4 px-1 rounded-full bg-umber text-white text-[10px] font-bold flex items-center justify-center">2</span>
            </button>
            <button className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-full bg-umber/20 text-umber dark:text-gold flex items-center justify-center text-sm font-semibold">
                BA
              </div>
              <div className="hidden sm:block text-left">
                <p className="text-sm font-semibold text-dark-gray dark:text-white leading-tight">Belinda Ajiambo</p>
                <p className="text-xs text-dark-gray/50 dark:text-white/50 leading-tight">Administrator</p>
              </div>
              <ChevronDown size={14} className="text-dark-gray/50 dark:text-white/50 hidden sm:block" />
            </button>
          </div>
        </header>

        <main className="flex-1 p-5 sm:p-8">{children}</main>
      </div>
    </div>
  );
}
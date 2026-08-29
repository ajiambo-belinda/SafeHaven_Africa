import { useState } from "react";
import { DashboardLayout } from "../../components/dashboard/DashboardLayout";
import { ThemeToggle } from "../../components/ThemeToggle";
import { User, Bell, Lock, Trash2 } from "lucide-react";

export function Settings() {
  const [name, setName] = useState("Belinda Ajiambo");
  const [email, setEmail] = useState("belinda.a@safehaven.org");
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [smsNotifs, setSmsNotifs] = useState(false);
  const [emergencyAlerts, setEmergencyAlerts] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold text-dark-gray dark:text-white">
        Settings
      </h1>
      <p className="mt-1 text-sm text-dark-gray/60 dark:text-white/60 mb-6">
        Manage your account and preferences
      </p>

      <div className="space-y-5 max-w-2xl">
        <form
          onSubmit={handleSave}
          className="bg-white dark:bg-navy rounded-2xl border border-dark-gray/10 dark:border-white/10 p-6"
        >
          <div className="flex items-center gap-2">
            <User size={18} className="text-umber dark:text-gold" />
            <h2 className="font-semibold text-dark-gray dark:text-white">Profile</h2>
          </div>

          <div className="mt-5 space-y-4">
            <div>
              <label className="block text-sm font-medium text-dark-gray dark:text-white mb-1.5">
                Full name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-dark-gray/15 dark:border-white/15 bg-white dark:bg-charcoal px-4 py-2.5 text-sm text-dark-gray dark:text-white focus:outline-none focus:ring-2 focus:ring-umber dark:focus:ring-gold"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-dark-gray dark:text-white mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-dark-gray/15 dark:border-white/15 bg-white dark:bg-charcoal px-4 py-2.5 text-sm text-dark-gray dark:text-white focus:outline-none focus:ring-2 focus:ring-umber dark:focus:ring-gold"
              />
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg bg-umber text-white text-sm font-semibold hover:bg-umber/90 transition-colors"
            >
              Save Changes
            </button>
            {saved && (
              <span className="text-sm text-success-green font-medium">Saved ✓</span>
            )}
          </div>
        </form>

        <div className="bg-white dark:bg-navy rounded-2xl border border-dark-gray/10 dark:border-white/10 p-6">
          <div className="flex items-center gap-2">
            <Bell size={18} className="text-umber dark:text-gold" />
            <h2 className="font-semibold text-dark-gray dark:text-white">Notifications</h2>
          </div>

          <div className="mt-5 space-y-4">
            {[
              { label: "Email notifications", desc: "Receive updates about cases and messages via email", value: emailNotifs, set: setEmailNotifs },
              { label: "SMS notifications", desc: "Receive urgent alerts via text message", value: smsNotifs, set: setSmsNotifs },
              { label: "Emergency alerts", desc: "Always notified immediately for high-priority emergencies", value: emergencyAlerts, set: setEmergencyAlerts },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-dark-gray dark:text-white">{item.label}</p>
                  <p className="text-xs text-dark-gray/50 dark:text-white/50">{item.desc}</p>
                </div>
                <button
                  onClick={() => item.set(!item.value)}
                  className={`shrink-0 relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    item.value ? "bg-umber" : "bg-dark-gray/20 dark:bg-white/20"
                  }`}
                  aria-pressed={item.value}
                  aria-label={item.label}
                >
                  <span
                    className={`h-4 w-4 rounded-full bg-white transition-transform ${
                      item.value ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-navy rounded-2xl border border-dark-gray/10 dark:border-white/10 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <User size={18} className="text-umber dark:text-gold" />
              <h2 className="font-semibold text-dark-gray dark:text-white">Appearance</h2>
            </div>
            <ThemeToggle />
          </div>
          <p className="mt-2 text-xs text-dark-gray/50 dark:text-white/50">
            Switch between light and dark mode
          </p>
        </div>

        <div className="bg-white dark:bg-navy rounded-2xl border border-dark-gray/10 dark:border-white/10 p-6">
          <div className="flex items-center gap-2">
            <Lock size={18} className="text-umber dark:text-gold" />
            <h2 className="font-semibold text-dark-gray dark:text-white">Security</h2>
          </div>
          <button className="mt-4 px-5 py-2.5 rounded-lg border border-dark-gray/15 dark:border-white/15 text-sm font-medium text-dark-gray dark:text-white hover:bg-dark-gray/5 dark:hover:bg-white/5 transition-colors">
            Change Password
          </button>
        </div>

        <div className="bg-white dark:bg-navy rounded-2xl border border-alert-red/30 p-6">
          <div className="flex items-center gap-2">
            <Trash2 size={18} className="text-alert-red" />
            <h2 className="font-semibold text-alert-red">Danger Zone</h2>
          </div>
          <p className="mt-2 text-sm text-dark-gray/60 dark:text-white/60">
            Permanently delete your account and all associated data. This cannot be undone.
          </p>
          <button className="mt-4 px-5 py-2.5 rounded-lg bg-alert-red text-white text-sm font-semibold hover:bg-alert-red/90 transition-colors">
            Delete Account
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
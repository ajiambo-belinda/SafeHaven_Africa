import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ShieldAlert, MapPin } from "lucide-react";
import logo from "../assets/logo.png";

const emergencyTypes = [
  "Domestic violence",
  "Gender-based violence",
  "Child abuse",
  "Human trafficking",
  "Homelessness / displacement",
  "Flood",
  "Land dispute",
  "Land wrangles",
  "Other",
];

export function Report() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [emergencyType, setEmergencyType] = useState("");
  const [description, setDescription] = useState("");
  const [shareLocation, setShareLocation] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-cream dark:bg-charcoal transition-colors">
      <header className="border-b border-dark-gray/10 dark:border-white/10 px-5 sm:px-8 py-4">
        <div className="mx-auto max-w-3xl flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="SafeHaven Africa" className="h-9 w-auto" />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-dark-gray/70 dark:text-white/70 hover:text-umber dark:hover:text-gold transition-colors"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 sm:px-8 py-12">
        {submitted ? (
          <div className="text-center py-16">
            <div className="mx-auto h-16 w-16 rounded-full bg-umber/10 text-umber dark:bg-gold/10 dark:text-gold flex items-center justify-center">
              <ShieldAlert size={28} />
            </div>
            <h1 className="mt-6 text-2xl font-bold text-dark-gray dark:text-white">
              Report received
            </h1>
            <p className="mt-3 text-dark-gray/70 dark:text-white/70 max-w-md mx-auto leading-relaxed">
              This is a placeholder confirmation. Once connected to a real
              backend, a responder will be notified and will reach out using
              the contact details you provided.
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-full bg-umber/10 text-umber dark:bg-gold/10 dark:text-gold flex items-center justify-center">
                <ShieldAlert size={20} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-dark-gray dark:text-white">
                  Request Emergency Help
                </h1>
                <p className="text-sm text-dark-gray/60 dark:text-white/60">
                  Everything you share here is confidential.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label className="block text-sm font-medium text-dark-gray dark:text-white mb-1.5">
                  Your name (optional)
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="You can leave this blank if you'd rather stay anonymous"
                  className="w-full rounded-lg border border-dark-gray/15 dark:border-white/15 bg-white dark:bg-navy px-4 py-2.5 text-sm text-dark-gray dark:text-white placeholder:text-dark-gray/40 dark:placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-umber dark:focus:ring-gold"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-gray dark:text-white mb-1.5">
                  Phone number or safe way to reach you
                </label>
                <input
                  type="text"
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="e.g. +254 700 000 000"
                  className="w-full rounded-lg border border-dark-gray/15 dark:border-white/15 bg-white dark:bg-navy px-4 py-2.5 text-sm text-dark-gray dark:text-white placeholder:text-dark-gray/40 dark:placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-umber dark:focus:ring-gold"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-gray dark:text-white mb-1.5">
                  Type of emergency
                </label>
                <select
                  required
                  value={emergencyType}
                  onChange={(e) => setEmergencyType(e.target.value)}
                  className="w-full rounded-lg border border-dark-gray/15 dark:border-white/15 bg-white dark:bg-navy px-4 py-2.5 text-sm text-dark-gray dark:text-white focus:outline-none focus:ring-2 focus:ring-umber dark:focus:ring-gold"
                >
                  <option value="" disabled>Select one</option>
                  {emergencyTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-gray dark:text-white mb-1.5">
                  What's happening?
                </label>
                <textarea
                  required
                  rows={5}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Share as much or as little as feels safe to."
                  className="w-full rounded-lg border border-dark-gray/15 dark:border-white/15 bg-white dark:bg-navy px-4 py-2.5 text-sm text-dark-gray dark:text-white placeholder:text-dark-gray/40 dark:placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-umber dark:focus:ring-gold resize-none"
                />
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={shareLocation}
                  onChange={(e) => setShareLocation(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded accent-umber dark:accent-gold"
                />
                <span className="text-sm text-dark-gray/70 dark:text-white/70 flex items-center gap-1.5">
                  <MapPin size={14} className="shrink-0" />
                  Share my approximate location to help responders find me
                </span>
              </label>

              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-umber text-white font-semibold hover:bg-umber/90 transition-colors"
              >
                Submit Report
              </button>
            </form>
          </>
        )}
      </main>
    </div>
  );
}
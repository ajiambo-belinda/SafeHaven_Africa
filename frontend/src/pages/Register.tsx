import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import logo from "../assets/logo.png";

const roles = [
  "Survivor / Individual seeking support",
  "NGO / Support Organization",
  "Shelter Administrator",
  "Legal Professional",
  "Counselor",
  "Volunteer",
];

export function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    // Placeholder only — no real account is created yet.
    // This will call a real backend once one exists.
    const mockUser = { name, email, role };
    localStorage.setItem("safehaven_user", JSON.stringify(mockUser));
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-cream dark:bg-charcoal transition-colors flex flex-col">
      <header className="px-5 sm:px-8 py-4">
        <div className="mx-auto max-w-md flex items-center justify-between">
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

      <main className="flex-1 flex items-center justify-center px-5 sm:px-8 py-8">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold text-dark-gray dark:text-white">
            Create an account
          </h1>
          <p className="mt-1.5 text-sm text-dark-gray/60 dark:text-white/60">
            For staff, volunteers, and partner organizations.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label className="block text-sm font-medium text-dark-gray dark:text-white mb-1.5">
                Full name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-dark-gray/15 dark:border-white/15 bg-white dark:bg-navy px-4 py-2.5 text-sm text-dark-gray dark:text-white focus:outline-none focus:ring-2 focus:ring-umber dark:focus:ring-gold"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-gray dark:text-white mb-1.5">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-dark-gray/15 dark:border-white/15 bg-white dark:bg-navy px-4 py-2.5 text-sm text-dark-gray dark:text-white focus:outline-none focus:ring-2 focus:ring-umber dark:focus:ring-gold"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-gray dark:text-white mb-1.5">
                I am a...
              </label>
              <select
                required
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full rounded-lg border border-dark-gray/15 dark:border-white/15 bg-white dark:bg-navy px-4 py-2.5 text-sm text-dark-gray dark:text-white focus:outline-none focus:ring-2 focus:ring-umber dark:focus:ring-gold"
              >
                <option value="" disabled>Select one</option>
                {roles.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-gray dark:text-white mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-dark-gray/15 dark:border-white/15 bg-white dark:bg-navy px-4 py-2.5 pr-11 text-sm text-dark-gray dark:text-white focus:outline-none focus:ring-2 focus:ring-umber dark:focus:ring-gold"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-gray/50 dark:text-white/50"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              <p className="mt-1.5 text-xs text-dark-gray/50 dark:text-white/50">
                At least 8 characters.
              </p>
            </div>

            {error && (
              <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-umber text-white font-semibold hover:bg-umber/90 transition-colors"
            >
              Create Account
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-dark-gray/60 dark:text-white/60">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-umber dark:text-gold hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
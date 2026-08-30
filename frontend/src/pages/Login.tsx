import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import logo from "../assets/logo.png";
import { useAuth } from "../contexts/AuthContext";

export function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const success = login(email, password);
    if (success) {
      navigate("/dashboard");
    } else {
      setError("We couldn't find an account with that email on this device. Try registering instead.");
    }
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
            Welcome back
          </h1>
          <p className="mt-1.5 text-sm text-dark-gray/60 dark:text-white/60">
            Log in to your SafeHaven Africa account.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
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
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
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
            </div>

            {error && (
              <p className="text-sm text-alert-red">{error}</p>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-umber text-white font-semibold hover:bg-umber/90 transition-colors"
            >
              Log In
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-dark-gray/60 dark:text-white/60">
            Don't have an account?{" "}
            <Link to="/register" className="font-semibold text-umber dark:text-gold hover:underline">
              Register
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
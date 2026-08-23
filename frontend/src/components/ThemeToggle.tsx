import { Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className="relative inline-flex h-7 w-14 items-center rounded-full bg-dark-gray/10 dark:bg-white/10 px-1 transition-colors"
    >
      <Sun size={13} className="absolute left-1.5 text-gold" />
      <Moon size={13} className="absolute right-1.5 text-white/80" />
      <span
        className={`relative z-10 h-5 w-5 rounded-full bg-white dark:bg-navy shadow-sm transition-transform duration-200 ${
          isDark ? "translate-x-7" : "translate-x-0"
        }`}
      />
    </button>
  );
}
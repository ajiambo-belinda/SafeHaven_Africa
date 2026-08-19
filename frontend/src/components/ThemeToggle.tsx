import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme, type Theme } from "../contexts/ThemeContext";

const options: { value: Theme; icon: typeof Sun; label: string }[] = [
  { value: "light", icon: Sun, label: "Light mode" },
  { value: "dark", icon: Moon, label: "Dark mode" },
  { value: "system", icon: Monitor, label: "Match system" },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-dark-gray/10 dark:border-white/10 bg-white dark:bg-navy p-1">
      {options.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          aria-label={label}
          aria-pressed={theme === value}
          className={`p-2 rounded-full transition-colors ${
            theme === value
              ? "bg-gold text-dark-gray"
              : "text-dark-gray/60 dark:text-white/60 hover:bg-dark-gray/5 dark:hover:bg-white/5"
          }`}
        >
          <Icon size={16} />
        </button>
      ))}
    </div>
  );
}
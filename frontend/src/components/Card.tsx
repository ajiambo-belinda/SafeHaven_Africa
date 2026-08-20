import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  title?: string;
  icon?: ReactNode;
  size?: "default" | "compact";
};

export function Card({ children, title, icon, size = "default" }: CardProps) {
  const padding = size === "compact" ? "p-5" : "p-6";

  return (
    <div className={`rounded-2xl border border-dark-gray/10 dark:border-white/10 bg-white dark:bg-navy ${padding}`}>
      {icon && (
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-umber/10 text-umber dark:bg-gold/10 dark:text-gold">
          {icon}
        </div>
      )}

      {title && (
        <h3 className="mb-2 text-lg font-semibold text-dark-gray dark:text-white">
          {title}
        </h3>
      )}

      <div className="text-dark-gray/80 dark:text-white/70">{children}</div>
    </div>
  );
}
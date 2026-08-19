import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
};

export function Button({ children, variant = "primary" }: ButtonProps) {
  const baseStyles = "px-5 py-2.5 rounded-full font-medium transition-colors";

  const variantStyles = {
    primary: "bg-gold text-dark-gray hover:bg-gold/90",
    secondary: "bg-umber text-white hover:bg-umber/90",
    outline: "border border-navy text-navy hover:bg-navy hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-navy",
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]}`}>
      {children}
    </button>
  );
}
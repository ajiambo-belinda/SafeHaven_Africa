import logo from "../assets/logo.png";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./Button";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Resources", href: "#resources" },
  { label: "Get involved", href: "#get-involved" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-cream/90 dark:bg-charcoal/90 backdrop-blur border-b border-dark-gray/10 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
        <img src={logo} alt="SafeHaven Africa" className="h-10 w-auto" />

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-medium text-dark-gray/70 dark:text-white/70 hover:text-navy dark:hover:text-gold transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Button variant="primary">Get help now</Button>
        </div>
      </div>
    </header>
  );
}
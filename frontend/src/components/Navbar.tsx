import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import logo from "../assets/logo.png";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Resources", href: "#resources" },
  { label: "Get Involved", href: "#get-involved" },
  { label: "Contact Us", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
   <motion.header
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  className="sticky top-0 z-50 bg-white/95 dark:bg-charcoal/95 backdrop-blur border-b border-dark-gray/10 dark:border-white/10"
>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-20 flex items-center justify-between gap-4">
        <img src={logo} alt="SafeHaven Africa" className="h-11 w-auto" />

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((link, index) => (
            <a key={link.label} href={link.href} className={`text-sm font-medium pb-1 border-b-2 transition-colors ${index === 0 ? "text-umber dark:text-gold border-umber dark:border-gold" : "text-dark-gray/70 dark:text-white/70 border-transparent hover:text-umber dark:hover:text-gold"}`}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Link to="/login" className="px-4 py-2 rounded-lg border border-dark-gray/20 dark:border-white/20 text-sm font-medium text-dark-gray dark:text-white hover:bg-dark-gray/5 dark:hover:bg-white/5 transition-colors">
  Log In
</Link>
          <Link to="/register" className="px-4 py-2 rounded-lg border border-dark-gray/20 dark:border-white/20 text-sm font-medium text-dark-gray dark:text-white hover:bg-dark-gray/5 dark:hover:bg-white/5 transition-colors">
            Register
          </Link>
          <Link to="/report" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-umber text-white text-sm font-semibold hover:bg-umber/90 transition-colors">
            <Phone size={15} />
            Get Help Now
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-dark-gray dark:text-white"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden px-5 pb-5 flex flex-col gap-4 border-t border-dark-gray/10 dark:border-white/10 pt-4">
          {links.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="text-sm font-medium text-dark-gray/80 dark:text-white/80">
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Link to="/login" onClick={() => setOpen(false)} className="flex-1 text-center px-4 py-2 rounded-lg border border-dark-gray/20 dark:border-white/20 text-sm font-medium text-dark-gray dark:text-white">
                Log In
              </Link>
              <Link to="/register" onClick={() => setOpen(false)} className="flex-1 text-center px-4 py-2 rounded-lg border border-dark-gray/20 dark:border-white/20 text-sm font-medium text-dark-gray dark:text-white">
                Register
              </Link>
            </div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
  <Link to="/report" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-umber text-white text-sm font-semibold hover:bg-umber/90 transition-colors">
    <Phone size={15} />
    Get Help Now
  </Link>
</motion.div>
          </div>
        </div>
      )}
    </motion.header>
  );
}
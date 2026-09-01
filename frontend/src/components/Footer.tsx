import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaTiktok } from "react-icons/fa6";
import logo from "../assets/logo.png";

const columns = [
  {
    title: "Quick Links",
    links: ["About Us", "Services", "Resources", "Get Involved", "Contact Us"],
  },
  {
    title: "Support",
    links: ["Emergency SOS", "Safe Shelters", "Legal Assistance", "Counseling", "Report Abuse"],
  },
  {
    title: "Resources",
    links: ["Safety Tips", "FAQs", "News & Updates", "Download App", "Privacy Policy"],
  },
];

const socials = [FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaTiktok];

export function Footer() {
  return (
    <footer id="contact" className="bg-navy text-white/70">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-1"
          >
            <img src={logo} alt="SafeHaven Africa" className="h-10 w-auto" />
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              A safe place. A stronger future. You are not alone.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map((Icon, index) => (
                <a key={index} href="#" aria-label="Social media link" className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-colors">
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </motion.div>

          {columns.map((col, index) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1, ease: "easeOut" }}
            >
              <h4 className="text-sm font-semibold text-white mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href={col.title === "Support" ? "#services" : "#"} className="text-sm hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          >
            <h4 className="text-sm font-semibold text-white mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={14} />
                +254 700 123 456
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} />
                info@safehavenafrica.org
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} />
                Nairobi, Kenya
              </li>
            </ul>
            <Link to="/report" className="mt-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-umber text-white text-sm font-semibold hover:bg-umber/90 transition-colors">
              <Phone size={14} />
              Get Help Now
            </Link>
          </motion.div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 text-center text-xs text-white/40">
          <p>{'\u00A9'} {new Date().getFullYear()} SafeHaven Africa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
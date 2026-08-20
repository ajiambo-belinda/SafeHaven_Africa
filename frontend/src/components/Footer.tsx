import logo from "../assets/logo.png";

const columns = [
  {
    title: "Services",
    links: ["Emergency assistance", "Shelters", "Counseling", "Legal support"],
  },
  {
    title: "Get involved",
    links: ["Volunteer", "Donate", "Partner with us"],
  },
  {
    title: "Resources",
    links: ["Safety guides", "Legal information", "Community support"],
  },
  {
    title: "Organization",
    links: ["About", "Contact", "Login", "Register"],
  },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-navy text-white/70">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-1">
            <img src={logo} alt="SafeHaven Africa" className="h-10 w-auto" />
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              Immediate access to shelter, legal support, and counseling
              across Africa.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} SafeHaven Africa. All rights reserved.</p>
          <p>If you are in immediate danger, contact local emergency services first.</p>
        </div>
      </div>
    </footer>
  );
}
import { Siren, Home, Scale, HeartHandshake, Users, BookOpen } from "lucide-react";
import { Card } from "./Card";

const services = [
  {
    icon: <Siren size={22} />,
    title: "Emergency Reporting",
    desc: "Submit reports, share your location, describe what's happening, and request immediate assistance.",
  },
  {
    icon: <Home size={22} />,
    title: "Shelter Finder",
    desc: "Search nearby shelters, check real-time availability, and request placement directly.",
  },
  {
    icon: <Scale size={22} />,
    title: "Legal Assistance",
    desc: "Access legal resources, request consultations, and track your case with a legal professional.",
  },
  {
    icon: <HeartHandshake size={22} />,
    title: "Counseling Support",
    desc: "Book sessions, access mental health resources, and chat with licensed counselors.",
  },
  {
    icon: <Users size={22} />,
    title: "Volunteer Network",
    desc: "Register your skills and availability to join community outreach and awareness programs.",
  },
  {
    icon: <BookOpen size={22} />,
    title: "Resource Library",
    desc: "Safety guides, legal information, and educational material you can read at your own pace.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-cream dark:bg-charcoal transition-colors">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-4 pb-16 lg:pt-8 lg:pb-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-umber dark:text-gold">
            What we offer
          </p>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-dark-gray dark:text-white">
            One platform, every path to safety
          </h2>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} title={service.title} icon={service.icon}>
              <p>{service.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
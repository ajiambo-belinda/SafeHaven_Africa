import { Link } from "react-router-dom";
import { Heart, UserPlus, Shield, Home, Scale, HeartHandshake } from "lucide-react";
import heroPhoto from "../assets/map.png";

const floatingCards = [
  { icon: <Shield size={18} />, title: "Emergency SOS", subtitle: "24/7 Support", color: "umber" },
  { icon: <Home size={18} />, title: "Safe Shelters", subtitle: "500+ Verified", color: "navy" },
  { icon: <Scale size={18} />, title: "Legal Assistance", subtitle: "Expert Support", color: "gold" },
  { icon: <HeartHandshake size={18} />, title: "Counseling", subtitle: "Care & Healing", color: "navy" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="bg-[linear-gradient(135deg,#2E2E2E_0%,#5A4636_40%,#D89A2B_100%)] dark:bg-charcoal transition-colors"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            <span className="text-[#0B2E6B]">A SAFE PLACE.</span>
            <br />
            <span className="text-[#D89A2B]">A STRONGER FUTURE.</span>
          </h1>

          <p className="mt-6 text-white/70 max-w-xl leading-relaxed">
            SafeHaven Africa connects survivors of violence and vulnerable
            communities to trusted support, safe shelters, legal aid, and
            mental health services across Africa.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link to="/report" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-umber text-white text-sm font-semibold hover:bg-umber/90 transition-colors">
  <Heart size={16} />
  Get Help Now
</Link>
            <a href="#get-involved" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
              <UserPlus size={16} />
              Become a Volunteer
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <img
            src={heroPhoto}
            alt="A mother and child, representing the communities SafeHaven Africa supports"
            className="w-full max-w-sm"
            style={{
              maskImage: "radial-gradient(ellipse 65% 70% at center, black 35%, transparent 85%)",
              WebkitMaskImage: "radial-gradient(ellipse 65% 70% at center, black 35%, transparent 85%)",
            }}
          />

          <div className="hidden lg:flex flex-col gap-3">
            {floatingCards.map((card) => (
              
               <a key={card.title}
                href="#services"
                className="flex items-center gap-3 bg-[#FFFFFF] rounded-xl shadow-lg px-4 py-3 w-56 hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <div className={`h-9 w-9 rounded-full flex items-center justify-center shrink-0 ${
                  card.color === "umber" ? "bg-umber text-[#FFFFFF]" :
                  card.color === "navy" ? "bg-navy text-[#FFFFFF]" :
                  "bg-gold text-dark-gray"
                }`}>
                  {card.icon}
                </div>
                <div>
                  
                  <p className="text-sm font-semibold text-dark-gray">{card.title}</p>
                  <p className="text-xs text-dark-gray/60">{card.subtitle}</p>
                </div>
                </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Heart, UserPlus, Shield, Home, Scale, HeartHandshake } from "lucide-react";
import heroPhoto from "../assets/map.png";

function useTypewriter(text: string, speed: number, start: boolean) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!start) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, start]);

  return { displayed, done };
}

function Cursor() {
  return (
    <motion.span
      animate={{ opacity: [1, 0] }}
      transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
      className="inline-block w-[2px] h-[1em] bg-current ml-0.5 align-middle"
    />
  );
}

const floatingCards = [
  { icon: <Shield size={18} />, title: "Emergency SOS", subtitle: "24/7 Support", color: "umber" },
  { icon: <Home size={18} />, title: "Safe Shelters", subtitle: "500+ Verified", color: "navy" },
  { icon: <Scale size={18} />, title: "Legal Assistance", subtitle: "Expert Support", color: "gold" },
  { icon: <HeartHandshake size={18} />, title: "Counseling", subtitle: "Care & Healing", color: "navy" },
];

const paragraphText =
  "SafeHaven Africa connects survivors of violence and vulnerable communities to trusted support, safe shelters, legal aid, and mental health services across Africa.";

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-100, 100], [8, -8]);
  const rotateY = useTransform(mouseX, [-100, 100], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const line1 = useTypewriter("A SAFE PLACE.", 55, true);
  const line2 = useTypewriter("A STRONGER FUTURE.", 55, line1.done);
  const paragraph = useTypewriter(paragraphText, 14, line2.done);
  const revealRest = paragraph.done;

  return (
    <section
      id="hero"
      className="bg-[linear-gradient(135deg,#2E2E2E_0%,#5A4636_40%,#D89A2B_100%)] dark:bg-charcoal transition-colors"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight min-h-[2.2em] sm:min-h-[2.4em]">
            <span className="text-white">
              {line1.displayed}
              {!line1.done && <Cursor />}
            </span>
            <br />
            <span className="text-gold">
              {line2.displayed}
              {line1.done && !line2.done && <Cursor />}
            </span>
          </h1>

          <p className="mt-6 text-white/70 max-w-xl leading-relaxed min-h-[4.5em]">
            {paragraph.displayed}
            {line2.done && !paragraph.done && <Cursor />}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={revealRest ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <motion.a
  href="#report"
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.97 }}
  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-umber text-white text-sm font-semibold hover:bg-umber/90 transition-colors"
>
  <Heart size={16} />
  Get Help Now
</motion.a>
<motion.a
  href="#get-involved"
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.97 }}
  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
>
  <UserPlus size={16} />
  Become a Volunteer
</motion.a>

          </motion.div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <motion.img
            src={heroPhoto}
            alt="A mother and child, representing the communities SafeHaven Africa supports"
            className="w-full max-w-sm"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={revealRest ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            style={{
              maskImage: "radial-gradient(ellipse 65% 70% at center, black 35%, transparent 85%)",
              WebkitMaskImage: "radial-gradient(ellipse 65% 70% at center, black 35%, transparent 85%)",
              rotateX,
              rotateY,
              transformPerspective: 800,
            }}
          />

          <div className="hidden lg:flex flex-col gap-3">
            {floatingCards.map((card, index) => (
              <motion.a
                key={card.title}
                href="#services"
                initial={{ opacity: 0, x: 30 }}
                animate={revealRest ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.15, ease: "easeOut" }}
                className="flex items-center gap-3 bg-white rounded-xl shadow-lg px-4 py-3 w-56 hover:shadow-xl hover:-translate-y-0.5 transition-shadow"
              >
                <div className={`h-9 w-9 rounded-full flex items-center justify-center shrink-0 ${
                  card.color === "umber" ? "bg-umber text-white" :
                  card.color === "navy" ? "bg-navy text-white" :
                  "bg-gold text-dark-gray"
                }`}>
                  {card.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-dark-gray">{card.title}</p>
                  <p className="text-xs text-dark-gray/60">{card.subtitle}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
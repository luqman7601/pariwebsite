import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import PhoneMockup from "../PhoneMockup";

const HeroSection = () => {
  const scrollToNext = () => {
    document.getElementById("problem")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] rounded-full bg-turquoise/40 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-[400px] h-[400px] rounded-full bg-gold/50 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-secondary text-primary border border-primary/20">
            BNP Paribas Singapore · NextGen Challenge
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6 leading-[0.95]"
        >
          NextGen
          <br />
          <span className="text-gradient-turquoise">Sustainable</span>
          <br />
          Wealth
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-lg md:text-xl text-muted-foreground max-w-lg mb-12 font-light"
        >
          Where your values meet your portfolio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="animate-float"
        >
          <PhoneMockup scale="lg">
            <DashboardScreen />
          </PhoneMockup>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={scrollToNext}
          className="mt-12 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        >
          <span className="text-sm font-medium tracking-wide">Explore the Experience</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
};

const DashboardScreen = () => (
  <div className="p-4 pt-10 h-full bg-gradient-to-b from-secondary to-background text-foreground text-xs">
    <div className="flex items-center justify-between mb-4">
      <div>
        <p className="text-muted-foreground text-[10px]">Good morning</p>
        <p className="font-semibold text-sm">Sarah Chen</p>
      </div>
      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-[10px]">SC</div>
    </div>

    <div className="rounded-2xl bg-card p-3 mb-3 border border-border">
      <p className="text-muted-foreground text-[10px] mb-1">Total Portfolio Value</p>
      <p className="text-xl font-bold text-foreground">S$284,530</p>
      <div className="flex items-center gap-2 mt-1">
        <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700">+2.4%</span>
        <span className="text-[10px] text-muted-foreground">ESG Score: 78/100</span>
      </div>
    </div>

    <div className="space-y-2">
      {[
        { name: "DBS Group", val: "S$42,100", esg: 82, change: "+1.2%" },
        { name: "CapitaLand", val: "S$38,500", esg: 71, change: "+0.8%" },
        { name: "Keppel Corp", val: "S$29,200", esg: 65, change: "-0.3%" },
      ].map((h) => (
        <div key={h.name} className="flex items-center justify-between p-2.5 rounded-xl bg-card border border-border">
          <div>
            <p className="font-medium text-[11px]">{h.name}</p>
            <p className="text-muted-foreground text-[10px]">{h.val}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-emerald-600">{h.change}</p>
            <div className="flex items-center gap-1">
              <div className="w-6 h-1.5 rounded-full bg-muted overflow-hidden">
                <div className="h-full rounded-full bg-primary" style={{ width: `${h.esg}%` }} />
              </div>
              <span className="text-[9px] text-muted-foreground">{h.esg}</span>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="flex justify-around mt-4 pt-3 border-t border-border">
      {["Dashboard", "Discover", "Impact", "Profile"].map((t, i) => (
        <span key={t} className={`text-[9px] font-medium ${i === 0 ? "text-primary" : "text-muted-foreground"}`}>{t}</span>
      ))}
    </div>
  </div>
);

export default HeroSection;

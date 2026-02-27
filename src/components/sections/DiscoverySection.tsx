import { useState } from "react";
import AnimatedSection from "../AnimatedSection";
import PhoneMockup from "../PhoneMockup";
import { ScrollArea } from "../ui/scroll-area";
import { ArrowLeftRight, Star, Leaf, Droplets, Recycle, Zap, Award } from "lucide-react";

const themes = [
  { icon: Zap, label: "Clean Energy", count: 24, color: "text-amber-600", bg: "bg-amber-100" },
  { icon: Droplets, label: "Water", count: 18, color: "text-blue-600", bg: "bg-blue-100" },
  { icon: Recycle, label: "Circular", count: 12, color: "text-emerald-600", bg: "bg-emerald-100" },
  { icon: Leaf, label: "Biodiversity", count: 15, color: "text-green-600", bg: "bg-green-100" },
];

const tiers = [
  { name: "Explorer", points: "0-500", status: "current", features: ["Basic ESG scores", "Standard nudges"] },
  { name: "Advocate", points: "500-2000", status: "next", features: ["Advanced analytics", "Priority alternatives"] },
  { name: "Champion", points: "2000-5000", status: "locked", features: ["Scenario modeling", "Impact certificates"] },
  { name: "Pioneer", points: "5000+", status: "locked", features: ["Legacy planning", "Collective voting"] },
];

const DiscoverySection = () => {
  const [selectedTheme, setSelectedTheme] = useState(0);

  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Phone Mockup */}
          <AnimatedSection className="flex-shrink-0">
            <PhoneMockup scale="md">
              <ScrollArea className="h-full">
                <div className="p-4 pt-8">
                  <p className="text-[10px] text-muted-foreground mb-1">Discover</p>
                  <p className="text-[13px] font-bold text-foreground mb-3">Find Alternatives</p>

                  {/* Like-for-Like Comparison */}
                  <div className="rounded-lg border border-border bg-card p-2.5 mb-3">
                    <div className="flex items-center gap-1.5 mb-2">
                      <ArrowLeftRight className="w-3 h-3 text-primary" />
                      <span className="text-[10px] font-semibold text-foreground">Like-for-Like Switch</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 p-2 rounded-md border border-red-200 bg-red-50">
                        <p className="text-[9px] text-muted-foreground">Current</p>
                        <p className="text-[11px] font-semibold text-foreground">Shell PLC</p>
                        <span className="text-[8px] px-1 py-0.5 rounded bg-red-100 text-red-700">ESG: 34</span>
                      </div>
                      <ArrowLeftRight className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                      <div className="flex-1 p-2 rounded-md border border-emerald-200 bg-emerald-50">
                        <p className="text-[9px] text-muted-foreground">Alternative</p>
                        <p className="text-[11px] font-semibold text-foreground">Vestas Wind</p>
                        <span className="text-[8px] px-1 py-0.5 rounded bg-emerald-100 text-emerald-700">ESG: 89</span>
                      </div>
                    </div>
                  </div>

                  {/* Thematic Explorer */}
                  <p className="text-[10px] font-semibold text-foreground mb-1.5">Themes</p>
                  <div className="grid grid-cols-2 gap-1.5 mb-3">
                    {themes.map((t, i) => (
                      <button
                        key={t.label}
                        onClick={() => setSelectedTheme(i)}
                        className={`p-2.5 rounded-lg border text-center transition-all ${
                          i === selectedTheme ? "border-primary bg-secondary" : "border-border bg-card"
                        }`}
                      >
                        <div className={`w-7 h-7 rounded-md ${t.bg} flex items-center justify-center mx-auto mb-1`}>
                          <t.icon className={`w-3.5 h-3.5 ${t.color}`} />
                        </div>
                        <p className="text-[10px] font-medium text-foreground">{t.label}</p>
                        <p className="text-[8px] text-muted-foreground">{t.count} funds</p>
                      </button>
                    ))}
                  </div>

                  {/* Rewards Tier */}
                  <div className="rounded-lg border border-border bg-card p-2.5">
                    <div className="flex items-center gap-1.5 mb-2">
                      <Award className="w-3.5 h-3.5 text-gold-dark" />
                      <span className="text-[10px] font-semibold text-foreground">GreenRewards</span>
                      <span className="ml-auto text-[9px] font-bold text-primary">340 pts</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-muted mb-2">
                      <div className="h-full rounded-full bg-primary" style={{ width: "68%" }} />
                    </div>
                    <p className="text-[8px] text-muted-foreground mb-1.5">160 pts to Advocate tier</p>
                    <div className="space-y-1">
                      {["Fee discount on ESG funds", "Priority alternative alerts", "Impact certificate"].map((perk) => (
                        <div key={perk} className="flex items-center gap-1.5">
                          <Star className="w-2.5 h-2.5 text-gold-dark" />
                          <span className="text-[9px] text-muted-foreground">{perk}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </PhoneMockup>
          </AnimatedSection>

          {/* Editorial Content */}
          <div className="flex-1">
            <AnimatedSection>
              <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Discovery & Switching</p>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight max-w-3xl mb-4">
                Find better.{" "}
                <span className="text-gradient-gold">Switch smarter.</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mb-8 font-light">
                Discover sustainable alternatives, earn rewards, and unlock advanced features as your ESG journey progresses.
              </p>
            </AnimatedSection>

            {/* Tier cards (read-only) */}
            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-3">
                {tiers.map((t) => (
                  <div key={t.name} className={`p-4 rounded-2xl border transition-all ${
                    t.status === "current" ? "border-primary bg-secondary" :
                    t.status === "next" ? "border-gold-deep bg-gold/20" :
                    "border-border bg-card opacity-60"
                  }`}>
                    <div className="flex items-center gap-2 mb-1">
                      <Star className={`w-4 h-4 ${t.status === "current" ? "text-primary" : t.status === "next" ? "text-gold-dark" : "text-muted-foreground"}`} />
                      <p className="font-semibold text-sm text-foreground">{t.name}</p>
                    </div>
                    <p className="text-[10px] text-muted-foreground mb-1">{t.points} pts</p>
                    <ul className="space-y-0.5">
                      {t.features.map((f) => (
                        <li key={f} className="text-[11px] text-muted-foreground">• {f}</li>
                      ))}
                    </ul>
                    {t.status === "current" && (
                      <span className="inline-block mt-1.5 px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-[9px] font-bold">Current</span>
                    )}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverySection;

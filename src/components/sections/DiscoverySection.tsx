import AnimatedSection from "../AnimatedSection";
import { ArrowLeftRight, Star, Leaf, Droplets, Recycle, Zap, Award } from "lucide-react";

const themes = [
  { icon: Zap, label: "Clean Energy", count: 24 },
  { icon: Droplets, label: "Water & Oceans", count: 18 },
  { icon: Recycle, label: "Circular Economy", count: 12 },
  { icon: Leaf, label: "Biodiversity", count: 15 },
];

const tiers = [
  { name: "Explorer", points: "0-500", status: "current", features: ["Basic ESG scores", "Standard nudges"] },
  { name: "Advocate", points: "500-2000", status: "next", features: ["Advanced analytics", "Priority alternatives"] },
  { name: "Champion", points: "2000-5000", status: "locked", features: ["Scenario modeling", "Impact certificates"] },
  { name: "Pioneer", points: "5000+", status: "locked", features: ["Legacy planning", "Collective voting"] },
];

const DiscoverySection = () => (
  <section className="section-padding bg-background">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection>
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Discovery & Switching</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight max-w-3xl mb-4">
          Find better.{" "}
          <span className="text-gradient-gold">Switch smarter.</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mb-12 font-light">
          Discover sustainable alternatives, earn rewards, and unlock advanced features as your ESG journey progresses.
        </p>
      </AnimatedSection>

      {/* Like-for-Like Switcher */}
      <AnimatedSection delay={0.1}>
        <div className="rounded-2xl border border-border bg-card p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <ArrowLeftRight className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">Like-for-Like Sustainable Switcher</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4 items-center">
            <div className="p-4 rounded-xl border border-red-200 bg-red-50">
              <p className="text-xs text-muted-foreground mb-1">Current Holding</p>
              <p className="font-semibold text-foreground">Shell PLC</p>
              <div className="flex gap-2 mt-2">
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-red-100 text-red-700">ESG: 34</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground">Return: +6.2%</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <ArrowLeftRight className="w-5 h-5 text-primary" />
              </div>
            </div>
            <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50">
              <p className="text-xs text-muted-foreground mb-1">Sustainable Alternative</p>
              <p className="font-semibold text-foreground">Vestas Wind Systems</p>
              <div className="flex gap-2 mt-2">
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700">ESG: 89</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground">Return: +7.1%</span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Thematic Explorer */}
      <AnimatedSection delay={0.2}>
        <h3 className="font-semibold text-foreground mb-4">Thematic Investment Explorer</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {themes.map((t) => (
            <div key={t.label} className="p-5 rounded-2xl border border-border bg-card hover:border-primary/30 transition-colors cursor-pointer group text-center">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/10 transition-colors">
                <t.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="font-medium text-sm text-foreground">{t.label}</p>
              <p className="text-xs text-muted-foreground">{t.count} funds</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* ESG Unlock Tiers */}
      <AnimatedSection delay={0.3}>
        <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
          <Award className="w-5 h-5 text-gold-dark" />
          ESG Unlock System & GreenRewards
        </h3>
        <div className="grid md:grid-cols-4 gap-4">
          {tiers.map((t) => (
            <div key={t.name} className={`p-5 rounded-2xl border transition-all ${
              t.status === "current" ? "border-primary bg-secondary" :
              t.status === "next" ? "border-gold-deep bg-gold/20" :
              "border-border bg-card opacity-60"
            }`}>
              <div className="flex items-center gap-2 mb-2">
                <Star className={`w-4 h-4 ${t.status === "current" ? "text-primary" : t.status === "next" ? "text-gold-dark" : "text-muted-foreground"}`} />
                <p className="font-semibold text-sm text-foreground">{t.name}</p>
              </div>
              <p className="text-[10px] text-muted-foreground mb-2">{t.points} pts</p>
              <ul className="space-y-1">
                {t.features.map((f) => (
                  <li key={f} className="text-[11px] text-muted-foreground">• {f}</li>
                ))}
              </ul>
              {t.status === "current" && (
                <span className="inline-block mt-2 px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-[9px] font-bold">Current</span>
              )}
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default DiscoverySection;

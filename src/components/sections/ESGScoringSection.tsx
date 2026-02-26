import { useState } from "react";
import AnimatedSection from "../AnimatedSection";
import { motion } from "framer-motion";

const companies = [
  {
    name: "GreenTech Energy Ltd",
    claimed: 88,
    verified: 72,
    projected: 65,
    greenwashRisk: "Medium",
    color: "text-amber-500",
    bg: "bg-amber-100",
  },
  {
    name: "DBS Group Holdings",
    claimed: 82,
    verified: 79,
    projected: 81,
    greenwashRisk: "Low",
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },
];

const ESGScoringSection = () => {
  const [selected, setSelected] = useState(0);
  const company = companies[selected];
  const gap = company.claimed - company.verified;

  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Transparency Engine</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight max-w-3xl mb-4">
            Three layers of truth.{" "}
            <span className="text-gradient-turquoise">One honest score.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mb-12 font-light">
            We don't trust a single source. Our engine cross-references claimed, verified, and projected ESG data to calculate a Greenwashing Risk Score.
          </p>
        </AnimatedSection>

        {/* Layer Diagram */}
        <AnimatedSection delay={0.2}>
          <div className="flex flex-col md:flex-row items-center gap-4 mb-16 justify-center">
            {[
              { label: "Claimed", desc: "Company self-reported", color: "bg-blue-100 text-blue-700 border-blue-200" },
              { label: "Verified", desc: "Third-party audited", color: "bg-emerald-100 text-emerald-700 border-emerald-200" },
              { label: "Projected", desc: "AI forward-looking", color: "bg-violet-100 text-violet-700 border-violet-200" },
            ].map((l, i) => (
              <div key={l.label} className="flex items-center gap-4">
                <div className={`px-6 py-4 rounded-2xl border ${l.color} text-center`}>
                  <p className="font-bold text-sm">{l.label}</p>
                  <p className="text-[10px] opacity-70">{l.desc}</p>
                </div>
                {i < 2 && <span className="text-2xl text-muted-foreground hidden md:block">→</span>}
              </div>
            ))}
            <span className="text-2xl text-muted-foreground hidden md:block">=</span>
            <div className="px-6 py-4 rounded-2xl border-2 border-primary bg-secondary text-center">
              <p className="font-bold text-sm text-primary">Divergence Score</p>
              <p className="text-[10px] text-muted-foreground">Greenwashing indicator</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Company Selector */}
        <AnimatedSection delay={0.3}>
          <div className="flex gap-3 mb-8 justify-center">
            {companies.map((c, i) => (
              <button
                key={c.name}
                onClick={() => setSelected(i)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all border ${
                  i === selected ? "border-primary bg-secondary text-primary" : "border-border text-muted-foreground hover:border-primary/30"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Score Card */}
        <AnimatedSection delay={0.4}>
          <div className="max-w-2xl mx-auto p-8 rounded-2xl border border-border bg-card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-lg text-foreground">{company.name}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${company.bg} ${company.color}`}>
                {company.greenwashRisk} Risk
              </span>
            </div>

            <div className="space-y-4">
              {[
                { label: "Claimed Score", value: company.claimed, color: "bg-blue-500" },
                { label: "Verified Score", value: company.verified, color: "bg-emerald-500" },
                { label: "Projected Score", value: company.projected, color: "bg-violet-500" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">{s.label}</span>
                    <span className="font-bold text-foreground">{s.value}/100</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      key={`${company.name}-${s.label}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${s.value}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className={`h-full rounded-full ${s.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-muted/50 border border-border">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-foreground">Divergence Gap</p>
                  <p className="text-xs text-muted-foreground">Claimed vs Verified difference</p>
                </div>
                <div className={`text-3xl font-bold ${gap > 10 ? "text-amber-500" : "text-emerald-600"}`}>
                  {gap > 0 ? `+${gap}` : gap}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ESGScoringSection;

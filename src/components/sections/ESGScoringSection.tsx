import { useState } from "react";
import AnimatedSection from "../AnimatedSection";
import PhoneMockup from "../PhoneMockup";
import { motion } from "framer-motion";
import { ScrollArea } from "../ui/scroll-area";

const companies = [
  {
    name: "GreenTech Energy",
    claimed: 88,
    verified: 72,
    projected: 65,
    greenwashRisk: "Medium",
    riskColor: "text-amber-500",
    riskBg: "bg-amber-100",
  },
  {
    name: "DBS Group",
    claimed: 82,
    verified: 79,
    projected: 81,
    greenwashRisk: "Low",
    riskColor: "text-emerald-600",
    riskBg: "bg-emerald-100",
  },
];

const ESGScoringSection = () => {
  const [selected, setSelected] = useState(0);
  const company = companies[selected];
  const gap = company.claimed - company.verified;

  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Phone Mockup */}
          <AnimatedSection className="flex-shrink-0">
            <PhoneMockup scale="md">
              <ScrollArea className="h-full">
                <div className="p-4 pt-8">
                  <p className="text-[10px] text-muted-foreground mb-1">Transparency Engine</p>
                  <p className="text-[13px] font-bold text-foreground mb-3">ESG Score Analysis</p>

                  {/* Segmented Control */}
                  <div className="flex gap-1 p-1 rounded-lg bg-muted mb-4">
                    {companies.map((c, i) => (
                      <button
                        key={c.name}
                        onClick={() => setSelected(i)}
                        className={`flex-1 px-2 py-1.5 rounded-md text-[10px] font-medium transition-all ${
                          i === selected ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
                        }`}
                      >
                        {c.name}
                      </button>
                    ))}
                  </div>

                  {/* Score Bars */}
                  <div className="space-y-3 mb-4">
                    {[
                      { label: "Claimed", value: company.claimed, color: "bg-blue-500" },
                      { label: "Verified", value: company.verified, color: "bg-emerald-500" },
                      { label: "Projected", value: company.projected, color: "bg-violet-500" },
                    ].map((s) => (
                      <div key={s.label}>
                        <div className="flex justify-between text-[10px] mb-1">
                          <span className="text-muted-foreground">{s.label}</span>
                          <span className="font-bold text-foreground">{s.value}</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
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

                  {/* Divergence Gap */}
                  <div className="p-3 rounded-xl bg-muted/50 border border-border mb-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-[11px] font-medium text-foreground">Divergence Gap</p>
                        <p className="text-[9px] text-muted-foreground">Claimed vs Verified</p>
                      </div>
                      <span className={`text-xl font-bold ${gap > 10 ? "text-amber-500" : "text-emerald-600"}`}>
                        {gap > 0 ? `+${gap}` : gap}
                      </span>
                    </div>
                  </div>

                  {/* Greenwash Risk Badge */}
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold ${company.riskBg} ${company.riskColor}`}>
                    ● {company.greenwashRisk} Greenwash Risk
                  </div>
                </div>
              </ScrollArea>
            </PhoneMockup>
          </AnimatedSection>

          {/* Editorial Content */}
          <div className="flex-1">
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

            {/* Layer Diagram (read-only) */}
            <AnimatedSection delay={0.2}>
              <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESGScoringSection;

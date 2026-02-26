import { useState } from "react";
import AnimatedSection from "../AnimatedSection";
import PhoneMockup from "../PhoneMockup";
import { Switch } from "@/components/ui/switch";

const holdings = [
  { name: "DBS Group Holdings", ticker: "D05.SI", val: "S$42,100", ret: "+12.4%", esg: 82, esgLabel: "A" },
  { name: "CapitaLand Invest", ticker: "9CI.SI", val: "S$38,500", ret: "+8.1%", esg: 71, esgLabel: "B+" },
  { name: "Keppel Corp", ticker: "BN4.SI", val: "S$29,200", ret: "+5.3%", esg: 65, esgLabel: "B" },
  { name: "Singtel", ticker: "Z74.SI", val: "S$24,800", ret: "+3.7%", esg: 77, esgLabel: "A-" },
  { name: "Wilmar Intl", ticker: "F34.SI", val: "S$18,900", ret: "-1.2%", esg: 48, esgLabel: "C+" },
];

const DashboardSection = () => {
  const [showESG, setShowESG] = useState(true);

  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Hero Feature</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight max-w-3xl mb-4">
            Unified Portfolio Dashboard
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mb-4 font-light">
            Aggregated across all providers. Financial returns and ESG scores shown side-by-side — because sustainability isn't an afterthought.
          </p>
          <div className="inline-block px-5 py-2 rounded-full bg-accent text-sm font-medium text-accent-foreground italic mb-12">
            "ESG is not a filter. It's a first-class data point."
          </div>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <AnimatedSection delay={0.2} className="flex-shrink-0">
            <PhoneMockup scale="lg">
              <div className="h-full pt-10 pb-4 px-3 text-xs">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-semibold text-sm text-foreground">Portfolio</p>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] text-muted-foreground">ESG View</span>
                    <Switch checked={showESG} onCheckedChange={setShowESG} className="scale-75" />
                  </div>
                </div>

                <div className="rounded-xl bg-secondary p-3 mb-3">
                  <p className="text-[10px] text-muted-foreground">Total Value · 4 Providers</p>
                  <p className="text-xl font-bold text-foreground">S$284,530</p>
                  <div className="flex gap-2 mt-1">
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 font-medium">+S$3,240 today</span>
                    {showESG && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary/10 text-primary font-medium">ESG: 72/100</span>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  {holdings.map((h) => (
                    <div key={h.ticker} className="flex items-center justify-between p-2 rounded-lg border border-border bg-card">
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-medium text-foreground truncate">{h.name}</p>
                        <p className="text-[9px] text-muted-foreground">{h.val}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-medium ${h.ret.startsWith("+") ? "text-emerald-600" : "text-red-500"}`}>{h.ret}</span>
                        {showESG && (
                          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                            h.esg >= 75 ? "bg-emerald-100 text-emerald-700" :
                            h.esg >= 60 ? "bg-amber-100 text-amber-700" :
                            "bg-red-100 text-red-700"
                          }`}>{h.esgLabel}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </PhoneMockup>
          </AnimatedSection>

          <div className="flex-1 space-y-6">
            {[
              { title: "Multi-Provider Aggregation", desc: "See holdings from DBS, UOB, Saxo, and Interactive Brokers in one view. Real-time sync via secure API connections." },
              { title: "Dual-Lens Analysis", desc: "Toggle between Financial View and ESG + Financial View. Every holding shows return AND sustainability score simultaneously." },
              { title: "ESG Health Score", desc: "A proprietary composite score aggregating E, S, and G metrics across your entire portfolio with daily recalculation." },
              { title: "Greenwashing Flags", desc: "Holdings with low verified ESG scores despite high marketing claims are automatically flagged for review." },
            ].map((f, i) => (
              <AnimatedSection key={f.title} delay={0.1 * i}>
                <div className="p-5 rounded-xl border border-border hover:border-primary/30 transition-colors">
                  <h3 className="font-semibold text-foreground mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;

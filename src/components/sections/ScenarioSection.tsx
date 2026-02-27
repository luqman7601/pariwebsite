import { useState } from "react";
import AnimatedSection from "../AnimatedSection";
import PhoneMockup from "../PhoneMockup";
import { ScrollArea } from "../ui/scroll-area";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const generateData = (horizon: number) => {
  const data = [];
  for (let y = 0; y <= horizon; y++) {
    data.push({
      year: `${2025 + y}`,
      current: Math.round(284530 * Math.pow(1.04, y)),
      optimized: Math.round(284530 * Math.pow(1.065, y)),
    });
  }
  return data;
};

const pathways = ["Paris 1.5°C", "Net Zero 2050", "Business as Usual"];

const carbonData = [
  { company: "Shell PLC", projected: "S$12,800", risk: "High" },
  { company: "DBS Group", projected: "S$420", risk: "Low" },
];

const ScenarioSection = () => {
  const [horizon, setHorizon] = useState(10);
  const [pathway, setPathway] = useState(0);
  const data = generateData(horizon);

  return (
    <section className="section-padding bg-turquoise">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Phone Mockup */}
          <AnimatedSection className="flex-shrink-0">
            <PhoneMockup scale="md">
              <ScrollArea className="h-full">
                <div className="p-4 pt-8">
                  <p className="text-[10px] text-muted-foreground mb-1">Scenario Analysis</p>
                  <p className="text-[13px] font-bold text-foreground mb-3">Portfolio Projection</p>

                  {/* Time Horizon Segmented Control */}
                  <div className="flex gap-1 p-1 rounded-lg bg-muted mb-3">
                    {[5, 10, 15, 20].map((h) => (
                      <button
                        key={h}
                        onClick={() => setHorizon(h)}
                        className={`flex-1 px-1 py-1.5 rounded-md text-[10px] font-medium transition-all ${
                          h === horizon ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
                        }`}
                      >
                        {h}Y
                      </button>
                    ))}
                  </div>

                  {/* Mini Chart */}
                  <div className="rounded-xl bg-card border border-border p-2 mb-3">
                    <ResponsiveContainer width="100%" height={120}>
                      <AreaChart data={data}>
                        <XAxis dataKey="year" tick={{ fontSize: 8 }} stroke="hsl(var(--muted-foreground))" interval={Math.floor(horizon / 4)} />
                        <YAxis hide />
                        <Tooltip formatter={(v: number) => [`S$${(v / 1000).toFixed(0)}k`, ""]} contentStyle={{ fontSize: 10 }} />
                        <Area type="monotone" dataKey="current" stroke="hsl(var(--muted-foreground))" fill="hsl(var(--muted))" strokeWidth={1.5} />
                        <Area type="monotone" dataKey="optimized" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.15} strokeWidth={2} />
                      </AreaChart>
                    </ResponsiveContainer>
                    <div className="flex gap-3 px-1">
                      <span className="text-[8px] text-muted-foreground flex items-center gap-1"><span className="w-2 h-0.5 bg-muted-foreground inline-block rounded" /> Current</span>
                      <span className="text-[8px] text-primary flex items-center gap-1"><span className="w-2 h-0.5 bg-primary inline-block rounded" /> ESG-Optimized</span>
                    </div>
                  </div>

                  {/* Pathway Chips */}
                  <p className="text-[10px] text-muted-foreground mb-1.5">Climate Pathway</p>
                  <div className="flex gap-1.5 mb-3 flex-wrap">
                    {pathways.map((p, i) => (
                      <button
                        key={p}
                        onClick={() => setPathway(i)}
                        className={`px-2.5 py-1 rounded-full text-[9px] font-medium border transition-all ${
                          i === pathway ? "border-primary bg-secondary text-primary" : "border-border text-muted-foreground"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>

                  {/* Carbon Tax Cards */}
                  <p className="text-[10px] text-muted-foreground mb-1.5">Carbon Tax Exposure</p>
                  <div className="space-y-2">
                    {carbonData.map((c) => (
                      <div key={c.company} className="flex items-center justify-between p-2.5 rounded-lg border border-border bg-card">
                        <p className="text-[11px] font-medium text-foreground">{c.company}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-bold text-foreground">{c.projected}</span>
                          <span className={`text-[8px] px-1.5 py-0.5 rounded font-medium ${c.risk === "High" ? "bg-red-100 text-red-700" : "bg-emerald-100 text-emerald-700"}`}>{c.risk}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollArea>
            </PhoneMockup>
          </AnimatedSection>

          {/* Editorial Content */}
          <div className="flex-1">
            <AnimatedSection>
              <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Scenario Analysis</p>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight max-w-3xl mb-4">
                See your future.{" "}
                <span className="text-gradient-turquoise">Choose wisely.</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mb-8 font-light">
                Compare your current portfolio against an ESG-optimized version under climate scenarios, with carbon tax projections.
              </p>
            </AnimatedSection>

            {/* Stranded vs Transition (read-only) */}
            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground mb-1">Stranded vs Transition</h3>
                <p className="text-xs text-muted-foreground mb-4">Asset classification under climate scenarios</p>
                <div className="space-y-4">
                  {[
                    { label: "Stranded Asset Risk", value: 18, color: "bg-red-500", textColor: "text-red-600" },
                    { label: "Transition Opportunity", value: 42, color: "bg-emerald-500", textColor: "text-emerald-600" },
                    { label: "Climate Resilient", value: 40, color: "bg-primary", textColor: "text-primary" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className={`font-bold ${item.textColor}`}>{item.value}%</span>
                      </div>
                      <div className="w-full h-3 rounded-full bg-muted">
                        <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScenarioSection;

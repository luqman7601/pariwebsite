import { useState } from "react";
import AnimatedSection from "../AnimatedSection";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const generateData = (horizon: number) => {
  const data = [];
  for (let y = 0; y <= horizon; y++) {
    data.push({
      year: `${2025 + y}`,
      current: Math.round(284530 * Math.pow(1.04 + Math.random() * 0.02, y)),
      optimized: Math.round(284530 * Math.pow(1.06 + Math.random() * 0.015, y)),
    });
  }
  return data;
};

const carbonData = [
  { company: "Shell PLC", current: "S$4,200", projected: "S$12,800", risk: "High" },
  { company: "DBS Group", current: "S$280", projected: "S$420", risk: "Low" },
];

const ScenarioSection = () => {
  const [horizon, setHorizon] = useState(10);
  const data = generateData(horizon);

  return (
    <section className="section-padding bg-turquoise">
      <div className="max-w-6xl mx-auto">
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

        {/* Time horizon selector */}
        <AnimatedSection delay={0.1}>
          <div className="flex gap-2 mb-8 justify-center">
            {[5, 10, 15, 20].map((h) => (
              <button
                key={h}
                onClick={() => setHorizon(h)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                  h === horizon ? "border-primary bg-secondary text-primary" : "border-border text-muted-foreground hover:border-primary/30"
                }`}
              >
                {h} Years
              </button>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="rounded-2xl border border-border bg-card p-6 mb-8">
            <h3 className="font-semibold text-foreground mb-4">Portfolio Projection: Current vs ESG-Optimized</h3>
            <ResponsiveContainer width="100%" height={320}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="year" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
                <YAxis tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" tickFormatter={(v) => `S$${(v / 1000).toFixed(0)}k`} />
                <Tooltip formatter={(v: number) => [`S$${v.toLocaleString()}`, ""]} />
                <Legend />
                <Line type="monotone" dataKey="current" name="Current Portfolio" stroke="hsl(var(--muted-foreground))" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="optimized" name="ESG-Optimized" stroke="hsl(var(--primary))" strokeWidth={2.5} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </AnimatedSection>

        {/* Carbon Tax Impact */}
        <AnimatedSection delay={0.3}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground mb-1">Carbon Tax Impact Wallet</h3>
              <p className="text-xs text-muted-foreground mb-4">Projected annual carbon tax liability per holding</p>
              <div className="space-y-3">
                {carbonData.map((c) => (
                  <div key={c.company} className="flex items-center justify-between p-3 rounded-xl border border-border">
                    <div>
                      <p className="text-sm font-medium text-foreground">{c.company}</p>
                      <p className="text-xs text-muted-foreground">Current: {c.current}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-foreground">{c.projected}</p>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${c.risk === "High" ? "bg-red-100 text-red-700" : "bg-emerald-100 text-emerald-700"}`}>{c.risk}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground mb-1">Stranded vs Transition</h3>
              <p className="text-xs text-muted-foreground mb-4">Asset classification under climate scenarios</p>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Stranded Asset Risk</span>
                    <span className="font-bold text-red-600">18%</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-muted">
                    <div className="h-full rounded-full bg-red-500" style={{ width: "18%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Transition Opportunity</span>
                    <span className="font-bold text-emerald-600">42%</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-muted">
                    <div className="h-full rounded-full bg-emerald-500" style={{ width: "42%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Climate Resilient</span>
                    <span className="font-bold text-primary">40%</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-muted">
                    <div className="h-full rounded-full bg-primary" style={{ width: "40%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ScenarioSection;

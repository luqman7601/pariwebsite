import AnimatedSection from "../AnimatedSection";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const metrics = [
  { label: "CO₂ Avoided", value: "12.4 tonnes", equiv: "≈ 620 trees planted" },
  { label: "Water Saved", value: "2.8M litres", equiv: "≈ 1,120 households/day" },
  { label: "Clean Energy Funded", value: "S$48,200", equiv: "≈ 14 homes powered" },
  { label: "SDGs Supported", value: "8 of 17", equiv: "Direct alignment" },
];

const sdgData = [
  { name: "Climate Action", value: 25, color: "#3B82F6" },
  { name: "Clean Water", value: 18, color: "#06B6D4" },
  { name: "Clean Energy", value: 22, color: "#F59E0B" },
  { name: "Life Below Water", value: 10, color: "#8B5CF6" },
  { name: "Responsible Consumption", value: 15, color: "#10B981" },
  { name: "Other SDGs", value: 10, color: "#94A3B8" },
];

const sgLocations = [
  { name: "Marina Bay Green Bond", x: 62, y: 55, type: "bond" },
  { name: "Jurong Solar Farm", x: 25, y: 48, type: "solar" },
  { name: "Tuas Recycling Hub", x: 15, y: 65, type: "recycling" },
  { name: "Sembcorp Wind", x: 70, y: 30, type: "wind" },
  { name: "Punggol Eco-Town", x: 72, y: 25, type: "eco" },
];

const ImpactSection = () => (
  <section className="section-padding bg-turquoise">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection>
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Impact Dashboard</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight max-w-3xl mb-4">
          Your money.{" "}
          <span className="text-gradient-turquoise">Real-world impact.</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mb-12 font-light">
          Track the tangible environmental and social outcomes of your sustainable investments, mapped to Singapore and beyond.
        </p>
      </AnimatedSection>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {metrics.map((m, i) => (
          <AnimatedSection key={m.label} delay={i * 0.1}>
            <div className="p-5 rounded-2xl border border-border bg-card text-center">
              <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">{m.value}</p>
              <p className="text-xs font-medium text-primary mb-1">{m.label}</p>
              <p className="text-[10px] text-muted-foreground">{m.equiv}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Singapore Map */}
        <AnimatedSection delay={0.3}>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-semibold text-foreground mb-1">Singapore Impact Map</h3>
            <p className="text-xs text-muted-foreground mb-4">Your investments at work locally</p>
            <div className="relative w-full aspect-[4/3] bg-secondary rounded-xl overflow-hidden">
              {/* Simplified Singapore shape */}
              <svg viewBox="0 0 100 80" className="w-full h-full" fill="none">
                <path d="M15,35 Q20,20 40,18 Q55,15 70,20 Q85,25 88,35 Q90,45 85,55 Q75,65 60,68 Q45,70 30,65 Q15,58 12,45 Z" fill="hsl(var(--turquoise-deep))" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.5" />
                {sgLocations.map((loc) => (
                  <g key={loc.name}>
                    <circle cx={loc.x} cy={loc.y} r="2.5" fill="hsl(var(--primary))" opacity="0.8" />
                    <circle cx={loc.x} cy={loc.y} r="4" fill="hsl(var(--primary))" opacity="0.2">
                      <animate attributeName="r" values="4;7;4" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.2;0;0.2" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <text x={loc.x} y={loc.y - 5} textAnchor="middle" className="text-[3px] fill-foreground font-medium">{loc.name}</text>
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </AnimatedSection>

        {/* SDG Wheel */}
        <AnimatedSection delay={0.4}>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-semibold text-foreground mb-1">SDG Alignment</h3>
            <p className="text-xs text-muted-foreground mb-4">Portfolio contribution to UN Sustainable Development Goals</p>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={sdgData} innerRadius={60} outerRadius={100} paddingAngle={3} dataKey="value">
                  {sdgData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(v: number) => [`${v}%`, ""]} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap gap-2 justify-center">
              {sdgData.map((s) => (
                <span key={s.name} className="inline-flex items-center gap-1 text-[10px] text-muted-foreground">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: s.color }} />
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Collective Counter */}
      <AnimatedSection delay={0.5}>
        <div className="mt-8 text-center p-6 rounded-2xl border border-border bg-card">
          <p className="text-xs text-muted-foreground mb-1">Collective NextGen Impact (All Users)</p>
          <p className="text-4xl md:text-5xl font-bold text-primary">S$2.4M</p>
          <p className="text-sm text-muted-foreground">directed toward verified sustainable investments this quarter</p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ImpactSection;

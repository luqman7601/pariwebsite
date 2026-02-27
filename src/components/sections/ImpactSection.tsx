import { useState } from "react";
import AnimatedSection from "../AnimatedSection";
import PhoneMockup from "../PhoneMockup";
import { ScrollArea } from "../ui/scroll-area";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Leaf, Droplets, Zap, Globe } from "lucide-react";

const tabs = ["Personal", "Community", "Global"];

const personalMetrics = [
  { icon: Leaf, label: "CO₂ Avoided", value: "12.4t", color: "text-emerald-600", bg: "bg-emerald-100" },
  { icon: Droplets, label: "Water Saved", value: "2.8M L", color: "text-blue-600", bg: "bg-blue-100" },
  { icon: Zap, label: "Clean Energy", value: "S$48.2k", color: "text-amber-600", bg: "bg-amber-100" },
  { icon: Globe, label: "SDGs", value: "8/17", color: "text-violet-600", bg: "bg-violet-100" },
];

const sgLocations = [
  { name: "Marina Bay Green Bond", x: 62, y: 55 },
  { name: "Jurong Solar Farm", x: 25, y: 48 },
  { name: "Tuas Recycling Hub", x: 15, y: 65 },
  { name: "Sembcorp Wind", x: 70, y: 30 },
  { name: "Punggol Eco-Town", x: 72, y: 25 },
];

const timeRanges = ["1M", "3M", "6M", "1Y", "All"];

const sdgData = [
  { name: "Climate Action", value: 25, color: "#3B82F6" },
  { name: "Clean Water", value: 18, color: "#06B6D4" },
  { name: "Clean Energy", value: 22, color: "#F59E0B" },
  { name: "Life Below Water", value: 10, color: "#8B5CF6" },
  { name: "Responsible Consumption", value: 15, color: "#10B981" },
  { name: "Other SDGs", value: 10, color: "#94A3B8" },
];

const ImpactSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [timeRange, setTimeRange] = useState(3);

  return (
    <section className="section-padding bg-turquoise">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Phone Mockup */}
          <AnimatedSection className="flex-shrink-0">
            <PhoneMockup scale="md">
              <ScrollArea className="h-full">
                <div className="p-4 pt-8">
                  <p className="text-[10px] text-muted-foreground mb-1">Impact Dashboard</p>
                  <p className="text-[13px] font-bold text-foreground mb-3">Your Impact</p>

                  {/* Tab Bar */}
                  <div className="flex gap-1 p-1 rounded-lg bg-muted mb-3">
                    {tabs.map((t, i) => (
                      <button
                        key={t}
                        onClick={() => setActiveTab(i)}
                        className={`flex-1 px-2 py-1.5 rounded-md text-[10px] font-medium transition-all ${
                          i === activeTab ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>

                  {/* Metric Cards */}
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    {personalMetrics.map((m) => (
                      <div key={m.label} className="p-2.5 rounded-lg border border-border bg-card">
                        <div className={`w-6 h-6 rounded-md ${m.bg} flex items-center justify-center mb-1.5`}>
                          <m.icon className={`w-3.5 h-3.5 ${m.color}`} />
                        </div>
                        <p className="text-[13px] font-bold text-foreground">{m.value}</p>
                        <p className="text-[8px] text-muted-foreground">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Singapore Map */}
                  <div className="rounded-lg border border-border bg-card p-2 mb-3">
                    <p className="text-[9px] font-medium text-foreground mb-1">Singapore Impact Map</p>
                    <div className="relative w-full aspect-[4/3] bg-secondary rounded-md overflow-hidden">
                      <svg viewBox="0 0 100 80" className="w-full h-full" fill="none">
                        <path d="M15,35 Q20,20 40,18 Q55,15 70,20 Q85,25 88,35 Q90,45 85,55 Q75,65 60,68 Q45,70 30,65 Q15,58 12,45 Z" fill="hsl(var(--turquoise-deep))" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.5" />
                        {sgLocations.map((loc) => (
                          <g key={loc.name}>
                            <circle cx={loc.x} cy={loc.y} r="2" fill="hsl(var(--primary))" opacity="0.8" />
                            <circle cx={loc.x} cy={loc.y} r="3.5" fill="hsl(var(--primary))" opacity="0.2">
                              <animate attributeName="r" values="3.5;6;3.5" dur="2s" repeatCount="indefinite" />
                              <animate attributeName="opacity" values="0.2;0;0.2" dur="2s" repeatCount="indefinite" />
                            </circle>
                            <text x={loc.x} y={loc.y - 4} textAnchor="middle" className="text-[2.5px] fill-foreground font-medium">{loc.name}</text>
                          </g>
                        ))}
                      </svg>
                    </div>
                  </div>

                  {/* Time Range Selector */}
                  <div className="flex gap-1 p-1 rounded-lg bg-muted">
                    {timeRanges.map((t, i) => (
                      <button
                        key={t}
                        onClick={() => setTimeRange(i)}
                        className={`flex-1 px-1 py-1 rounded-md text-[9px] font-medium transition-all ${
                          i === timeRange ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </ScrollArea>
            </PhoneMockup>
          </AnimatedSection>

          {/* Editorial Content */}
          <div className="flex-1">
            <AnimatedSection>
              <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Impact Dashboard</p>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight max-w-3xl mb-4">
                Your money.{" "}
                <span className="text-gradient-turquoise">Real-world impact.</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mb-8 font-light">
                Track the tangible environmental and social outcomes of your sustainable investments, mapped to Singapore and beyond.
              </p>
            </AnimatedSection>

            {/* SDG Pie Chart (read-only) */}
            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl border border-border bg-card p-6 mb-6">
                <h3 className="font-semibold text-foreground mb-1">SDG Alignment</h3>
                <p className="text-xs text-muted-foreground mb-4">Portfolio contribution to UN SDGs</p>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie data={sdgData} innerRadius={50} outerRadius={85} paddingAngle={3} dataKey="value">
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

            {/* Collective Counter (read-only) */}
            <AnimatedSection delay={0.3}>
              <div className="text-center p-6 rounded-2xl border border-border bg-card">
                <p className="text-xs text-muted-foreground mb-1">Collective NextGen Impact</p>
                <p className="text-4xl font-bold text-primary">S$2.4M</p>
                <p className="text-sm text-muted-foreground">directed toward verified sustainable investments</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;

import AnimatedSection from "../AnimatedSection";
import PhoneMockup from "../PhoneMockup";
import { ScrollArea } from "../ui/scroll-area";
import { Heart, Target, Calendar, FileText } from "lucide-react";

const milestones = [
  { year: "2025", label: "Begin ESG Journey", desc: "Set preferences, build identity", done: true },
  { year: "2027", label: "50% Aligned", desc: "Half portfolio meets ESG targets", done: false },
  { year: "2030", label: "Carbon Neutral", desc: "Net-zero portfolio emissions", done: false },
  { year: "2035", label: "Full Transition", desc: "100% high-integrity sustainable", done: false },
];

const LegacySection = () => (
  <section className="section-padding bg-gold/30">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Phone Mockup */}
        <AnimatedSection className="flex-shrink-0">
          <PhoneMockup scale="md">
            <ScrollArea className="h-full">
              <div className="p-4 pt-8">
                <p className="text-[10px] text-muted-foreground mb-1">Legacy Planner</p>
                <p className="text-[13px] font-bold text-foreground mb-3">Your Legacy</p>

                {/* Goal Card with Progress Ring */}
                <div className="rounded-lg border border-border bg-card p-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="relative w-14 h-14 flex-shrink-0">
                      <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                        <circle cx="18" cy="18" r="15.5" fill="none" stroke="hsl(var(--muted))" strokeWidth="3" />
                        <circle cx="18" cy="18" r="15.5" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" strokeDasharray="97.4" strokeDashoffset={97.4 * (1 - 0.22)} strokeLinecap="round" />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-[11px] font-bold text-foreground">22%</span>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-foreground">"Net-zero by 45"</p>
                      <p className="text-[9px] text-muted-foreground">Target: 2045</p>
                      <p className="text-[9px] text-primary font-medium">On track</p>
                    </div>
                  </div>
                </div>

                {/* Projected Value */}
                <div className="rounded-lg bg-secondary p-3 mb-3">
                  <p className="text-[9px] text-muted-foreground">Projected Portfolio (2045)</p>
                  <p className="text-[18px] font-bold text-foreground">S$1,284,000</p>
                  <p className="text-[9px] text-primary font-medium">100% ESG-aligned by target</p>
                </div>

                {/* Transition Roadmap Timeline */}
                <p className="text-[10px] font-semibold text-foreground mb-2">Transition Roadmap</p>
                <div className="relative pl-5">
                  <div className="absolute left-[7px] top-1 bottom-1 w-0.5 bg-border" />
                  {milestones.map((m) => (
                    <div key={m.year} className="relative pb-4 last:pb-0">
                      <div className={`absolute left-[-13px] w-3 h-3 rounded-full border-2 ${m.done ? "bg-primary border-primary" : "bg-card border-border"}`} />
                      <div className="ml-1">
                        <p className="text-[9px] font-bold text-primary">{m.year}</p>
                        <p className="text-[11px] font-semibold text-foreground">{m.label}</p>
                        <p className="text-[9px] text-muted-foreground">{m.desc}</p>
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
            <p className="text-sm font-medium tracking-widest uppercase text-gold-dark mb-4">Legacy</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight max-w-3xl mb-4">
              Build wealth that{" "}
              <span className="text-gradient-gold">outlasts you.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mb-8 font-light">
              Plan your generational wealth transfer with sustainability baked in. Set long-term goals and track your transition roadmap.
            </p>
          </AnimatedSection>

          {/* Export Report Card (read-only) */}
          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl border border-border bg-card p-6 flex flex-col md:flex-row items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-gold-dark" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Exportable Impact Report</h3>
                <p className="text-sm text-muted-foreground">Generate a comprehensive PDF report of your portfolio's ESG performance, impact metrics, and transition progress.</p>
              </div>
              <button className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium flex-shrink-0">
                Preview Report
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  </section>
);

export default LegacySection;

import AnimatedSection from "../AnimatedSection";
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
      <AnimatedSection>
        <p className="text-sm font-medium tracking-widest uppercase text-gold-dark mb-4">Legacy</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight max-w-3xl mb-4">
          Build wealth that{" "}
          <span className="text-gradient-gold">outlasts you.</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mb-12 font-light">
          Plan your generational wealth transfer with sustainability baked in. Set long-term goals and track your transition roadmap.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <AnimatedSection delay={0.1}>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-gold-dark" />
              <h3 className="font-semibold text-foreground">Generational Wealth Projector</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-secondary">
                <p className="text-xs text-muted-foreground">Projected Portfolio (2045)</p>
                <p className="text-3xl font-bold text-foreground">S$1,284,000</p>
                <p className="text-xs text-primary font-medium mt-1">100% ESG-aligned by target date</p>
              </div>
              <div className="p-4 rounded-xl border border-border">
                <p className="text-xs text-muted-foreground mb-1">Goal</p>
                <p className="font-semibold text-foreground">"Net-zero aligned by 45"</p>
                <div className="w-full h-2 rounded-full bg-muted mt-2">
                  <div className="h-full rounded-full bg-primary" style={{ width: "22%" }} />
                </div>
                <p className="text-[10px] text-muted-foreground mt-1">22% complete</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-gold-dark" />
              <h3 className="font-semibold text-foreground">10-Year Transition Roadmap</h3>
            </div>
            <div className="relative pl-6">
              <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-border" />
              {milestones.map((m, i) => (
                <div key={m.year} className="relative pb-6 last:pb-0">
                  <div className={`absolute left-[-18px] w-4 h-4 rounded-full border-2 ${m.done ? "bg-primary border-primary" : "bg-card border-border"}`} />
                  <div className="ml-2">
                    <p className="text-xs font-bold text-primary">{m.year}</p>
                    <p className="text-sm font-semibold text-foreground">{m.label}</p>
                    <p className="text-xs text-muted-foreground">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection delay={0.3}>
        <div className="rounded-2xl border border-border bg-card p-6 flex flex-col md:flex-row items-center gap-6">
          <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
            <FileText className="w-6 h-6 text-gold-dark" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">Exportable Impact Report</h3>
            <p className="text-sm text-muted-foreground">Generate a comprehensive PDF report of your portfolio's ESG performance, impact metrics, and transition progress — shareable with family, advisors, or stakeholders.</p>
          </div>
          <button className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium flex-shrink-0">
            Preview Report
          </button>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default LegacySection;

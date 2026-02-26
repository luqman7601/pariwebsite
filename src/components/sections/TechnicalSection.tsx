import AnimatedSection from "../AnimatedSection";
import { Server, GitBranch, Rocket } from "lucide-react";

const endpoints = [
  { method: "GET", path: "/api/portfolio/aggregate", desc: "Multi-provider portfolio sync" },
  { method: "GET", path: "/api/esg/score/{holding}", desc: "Three-layer ESG scoring" },
  { method: "POST", path: "/api/preferences/update", desc: "Real-time preference engine" },
  { method: "GET", path: "/api/risk/hidden/{portfolio}", desc: "Hidden risk detector" },
  { method: "GET", path: "/api/scenario/{portfolio}", desc: "Climate scenario analysis" },
  { method: "POST", path: "/api/nudge/generate", desc: "Behavioral nudge engine" },
  { method: "GET", path: "/api/impact/dashboard", desc: "Impact metrics aggregation" },
  { method: "GET", path: "/api/discovery/alternatives", desc: "Like-for-like matching" },
];

const roadmap = [
  { phase: "Phase 1", title: "GreenRewards Launch", desc: "Basic points system with partner catalogue" },
  { phase: "Phase 2", title: "Institutional Alignment", desc: "Align personal portfolios with employer pension ESG goals" },
  { phase: "Phase 3", title: "Earnings Call Monitor", desc: "NLP-powered greenwashing detection in corporate communications" },
  { phase: "Phase 4", title: "Collective Engagement", desc: "Aggregated shareholder ESG voting and engagement tools" },
];

const TechnicalSection = () => (
  <section className="section-padding bg-background">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection>
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Technical Foundation</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight max-w-3xl mb-4">
          Enterprise-grade.{" "}
          <span className="text-gradient-turquoise">Startup-fast.</span>
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-8">
        <AnimatedSection delay={0.1}>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <Server className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">API Architecture</h3>
            </div>
            <div className="space-y-2 font-mono">
              {endpoints.map((e) => (
                <div key={e.path} className="flex items-start gap-2 p-2 rounded-lg bg-muted/50">
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${e.method === "GET" ? "bg-emerald-100 text-emerald-700" : "bg-blue-100 text-blue-700"}`}>{e.method}</span>
                  <div>
                    <p className="text-[11px] text-foreground">{e.path}</p>
                    <p className="text-[9px] text-muted-foreground font-sans">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <Rocket className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">Future Roadmap</h3>
            </div>
            <div className="relative pl-6">
              <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-border" />
              {roadmap.map((r) => (
                <div key={r.phase} className="relative pb-6 last:pb-0">
                  <div className="absolute left-[-18px] w-4 h-4 rounded-full border-2 border-primary bg-secondary" />
                  <div className="ml-2">
                    <p className="text-[10px] font-bold text-primary">{r.phase}</p>
                    <p className="text-sm font-semibold text-foreground">{r.title}</p>
                    <p className="text-xs text-muted-foreground">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default TechnicalSection;

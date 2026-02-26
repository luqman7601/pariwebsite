import { AlertTriangle, Droplets, Factory, Users } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import PhoneMockup from "../PhoneMockup";

const risks = [
  {
    icon: Droplets,
    title: "Water Dependency Risk",
    company: "Wilmar International",
    impact: "-S$4,200",
    detail: "High water stress exposure in palm oil supply chain. 2030 scarcity projections indicate 15-20% cost increase.",
    severity: "high",
  },
  {
    icon: Factory,
    title: "Carbon Border Tax",
    company: "Keppel Corp",
    impact: "-S$2,800",
    detail: "EU CBAM exposure on carbon-intensive operations. Estimated annual cost from 2026 regulatory phase-in.",
    severity: "medium",
  },
  {
    icon: Users,
    title: "Governance Red Flag",
    company: "SGX-listed REIT",
    impact: "-S$1,500",
    detail: "Board independence below 30%. Related-party transactions flagged in latest audit cycle.",
    severity: "high",
  },
];

const HiddenRiskSection = () => (
  <section className="section-padding gradient-turquoise-dark">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection>
        <p className="text-sm font-medium tracking-widest uppercase text-turquoise-deep mb-4">Hidden Risks</p>
        <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground leading-tight max-w-3xl mb-4">
          The risks your portfolio{" "}
          <span className="text-gradient-gold">doesn't show you.</span>
        </h2>
        <p className="text-turquoise-deep text-lg max-w-xl mb-16 font-light">
          Our Hidden Risk Detector surfaces climate, regulatory, and governance risks that traditional dashboards miss — with SGD-denominated impact estimates.
        </p>
      </AnimatedSection>

      <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
        <AnimatedSection delay={0.2} className="flex-shrink-0">
          <PhoneMockup scale="md">
            <div className="h-full pt-10 pb-4 px-3 bg-gradient-to-b from-red-50 to-background">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-4 h-4 text-red-500" />
                <p className="font-semibold text-sm text-foreground">Risk Alerts</p>
                <span className="ml-auto px-1.5 py-0.5 rounded-full bg-red-100 text-red-700 text-[9px] font-bold">3 New</span>
              </div>
              <div className="space-y-2">
                {risks.map((r) => (
                  <div key={r.title} className="p-2.5 rounded-xl border border-red-200 bg-card">
                    <div className="flex items-start gap-2">
                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 ${r.severity === "high" ? "bg-red-100" : "bg-amber-100"}`}>
                        <r.icon className={`w-3 h-3 ${r.severity === "high" ? "text-red-600" : "text-amber-600"}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-semibold text-foreground">{r.title}</p>
                        <p className="text-[9px] text-muted-foreground">{r.company}</p>
                        <p className="text-[11px] font-bold text-red-600 mt-1">{r.impact}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 p-2.5 rounded-xl bg-red-50 border border-red-200">
                <p className="text-[10px] font-medium text-red-700">Total Hidden Risk Exposure</p>
                <p className="text-lg font-bold text-red-700">-S$8,500</p>
                <p className="text-[9px] text-red-600">Estimated annual impact across flagged holdings</p>
              </div>
            </div>
          </PhoneMockup>
        </AnimatedSection>

        <div className="flex-1 space-y-5">
          {risks.map((r, i) => (
            <AnimatedSection key={r.title} delay={0.15 * i}>
              <div className="p-6 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${r.severity === "high" ? "bg-red-500/20" : "bg-amber-500/20"}`}>
                    <r.icon className={`w-5 h-5 ${r.severity === "high" ? "text-red-400" : "text-amber-400"}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-foreground">{r.title}</h3>
                    <p className="text-xs text-turquoise-deep">{r.company}</p>
                  </div>
                  <span className="ml-auto text-xl font-bold text-red-400">{r.impact}</span>
                </div>
                <p className="text-sm text-turquoise-deep">{r.detail}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HiddenRiskSection;

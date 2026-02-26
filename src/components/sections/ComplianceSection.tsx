import AnimatedSection from "../AnimatedSection";
import { Shield, Eye, FileCheck, Scale, AlertCircle } from "lucide-react";

const frameworks = [
  { name: "MAS", full: "Monetary Authority of Singapore" },
  { name: "TCFD", full: "Task Force on Climate Disclosures" },
  { name: "SFDR", full: "Sustainable Finance Disclosure" },
  { name: "EU Taxonomy", full: "European Green Classification" },
  { name: "SGX", full: "Singapore Exchange ESG Rules" },
];

const guardrails = [
  { icon: Shield, title: "Suitability Guardrails", desc: "Every recommendation is checked against your risk profile and investment horizon before being shown." },
  { icon: Eye, title: "MAS-Aligned Disclosures", desc: "Full transparency on ESG data sources, methodology limitations, and potential conflicts of interest." },
  { icon: FileCheck, title: "Audit Trail", desc: "Complete history of every nudge, recommendation, and preference change — exportable for regulatory review." },
  { icon: Scale, title: "Conflict of Interest Transparency", desc: "Clear disclosure when BNP Paribas has a financial interest in any recommended product." },
];

const ComplianceSection = () => (
  <section className="section-padding bg-background">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection>
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Trust & Compliance</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight max-w-3xl mb-4">
          Built on trust.{" "}
          <span className="text-gradient-turquoise">Compliant by design.</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mb-12 font-light">
          Every feature balances innovation with regulatory compliance, suitability obligations, and greenwashing risk mitigation.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {guardrails.map((g, i) => (
          <AnimatedSection key={g.title} delay={i * 0.1}>
            <div className="p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                  <g.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{g.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{g.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.4}>
        <div className="flex flex-wrap justify-center gap-3">
          {frameworks.map((f) => (
            <div key={f.name} className="px-5 py-3 rounded-xl border border-border bg-card text-center hover:border-primary/30 transition-colors">
              <p className="font-bold text-lg text-primary">{f.name}</p>
              <p className="text-[10px] text-muted-foreground">{f.full}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.5}>
        <div className="mt-8 p-5 rounded-2xl border border-border bg-secondary flex items-start gap-3 max-w-2xl mx-auto">
          <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground">Always-Visible Suitability Profile</p>
            <p className="text-xs text-muted-foreground">Your suitability profile is accessible from every screen. No recommendation is made without cross-referencing your risk tolerance, investment horizon, and regulatory constraints.</p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ComplianceSection;

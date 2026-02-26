import AnimatedSection from "../AnimatedSection";
import { TrendingDown, ShieldAlert, BarChart3 } from "lucide-react";

const stats = [
  {
    icon: TrendingDown,
    stat: "73%",
    label: "of NextGen investors hold portfolios across 3+ providers",
    detail: "No unified view of ESG performance",
  },
  {
    icon: ShieldAlert,
    stat: "58%",
    label: "of ESG-labeled funds face greenwashing allegations",
    detail: "Claimed vs verified data rarely match",
  },
  {
    icon: BarChart3,
    stat: "4/5",
    label: "investors lack access to forward-looking ESG analytics",
    detail: "Historical scores miss transition risks",
  },
];

const ProblemSection = () => (
  <section id="problem" className="section-padding bg-background">
    <div className="max-w-5xl mx-auto">
      <AnimatedSection>
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">The Problem</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight max-w-3xl mb-6">
          NextGen investors want control, transparency, and impact —{" "}
          <span className="text-gradient-turquoise">not another generic dashboard.</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mb-16 font-light">
          Young affluent investors in Singapore demand a digital-first, mobile-first wealth experience that integrates sustainability as a core — not a checkbox.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((s, i) => (
          <AnimatedSection key={s.stat} delay={i * 0.15}>
            <div className="rounded-2xl border border-border bg-card p-8 hover:border-primary/30 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-4xl font-bold text-foreground mb-2">{s.stat}</p>
              <p className="text-sm font-medium text-foreground mb-2">{s.label}</p>
              <p className="text-xs text-muted-foreground">{s.detail}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.5}>
        <div className="mt-12 flex justify-center">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-accent-foreground text-sm font-medium border border-gold-deep/30">
            🏆 BNP Paribas Singapore · NextGen Wealth Innovation Challenge
          </span>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ProblemSection;

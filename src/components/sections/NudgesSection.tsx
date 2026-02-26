import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../AnimatedSection";
import { Bell, X, ArrowRight, Shield } from "lucide-react";

const nudges = [
  {
    trigger: "Wilmar dropped 3 ESG ranks this quarter",
    title: "Consider transitioning from Wilmar International",
    body: "A like-for-like sustainable alternative is available with similar risk-return profile.",
    alternative: "Olam Group (ESG: 78, Similar sector exposure)",
    costOfInaction: "Holding Wilmar may cost an estimated S$4,200/yr in hidden carbon tax exposure by 2027.",
  },
  {
    trigger: "Your ESG preferences drifted",
    title: "Preference Drift Detected",
    body: "Your portfolio's actual ESG alignment has dropped 8 points below your stated preferences over the past 60 days.",
    alternative: "Re-align with 2 suggested swaps",
    costOfInaction: "Continued drift may increase greenwashing exposure and reduce portfolio ESG health score.",
  },
  {
    trigger: "New TCFD regulation affecting 3 holdings",
    title: "Regulatory Change Alert",
    body: "3 of your holdings are affected by upcoming TCFD mandatory disclosure requirements effective Q3 2026.",
    alternative: "View compliant alternatives",
    costOfInaction: "Non-compliant holdings may face S$2,100 in additional disclosure costs.",
  },
];

const NudgesSection = () => {
  const [dismissed, setDismissed] = useState<number | null>(null);

  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Behavioral Nudges</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight max-w-3xl mb-4">
            Gentle pushes.{" "}
            <span className="text-gradient-turquoise">Powerful shifts.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mb-12 font-light">
            Context-triggered nudges that support gradual transition toward sustainable investments — never forced, always transparent.
          </p>
        </AnimatedSection>

        <div className="space-y-4 max-w-3xl mx-auto">
          {nudges.map((n, i) => (
            <AnimatedSection key={n.title} delay={0.15 * i}>
              <div className="rounded-2xl border border-border bg-card overflow-hidden">
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Bell className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] text-muted-foreground mb-1">{n.trigger}</p>
                      <h3 className="font-semibold text-foreground text-sm mb-1">{n.title}</h3>
                      <p className="text-xs text-muted-foreground mb-3">{n.body}</p>

                      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-secondary border border-border mb-3">
                        <ArrowRight className="w-3 h-3 text-primary flex-shrink-0" />
                        <span className="text-xs text-primary font-medium">{n.alternative}</span>
                      </div>

                      <div className="flex gap-2">
                        <button className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-medium">
                          View Alternative
                        </button>
                        <button
                          onClick={() => setDismissed(i)}
                          className="px-3 py-1.5 rounded-lg border border-border text-xs font-medium text-muted-foreground hover:text-foreground"
                        >
                          Dismiss
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {dismissed === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-border bg-amber-50"
                    >
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className="w-4 h-4 text-amber-600" />
                          <span className="text-xs font-bold text-amber-800">Cost of Inaction</span>
                          <button onClick={() => setDismissed(null)} className="ml-auto">
                            <X className="w-3 h-3 text-amber-600" />
                          </button>
                        </div>
                        <p className="text-xs text-amber-700">{n.costOfInaction}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Suitability Badge */}
        <AnimatedSection delay={0.5}>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-xs">
              <Shield className="w-3.5 h-3.5 text-primary" />
              <span className="text-muted-foreground">All nudges comply with MAS suitability obligations</span>
              <button className="text-primary font-medium underline">Why am I seeing this?</button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default NudgesSection;

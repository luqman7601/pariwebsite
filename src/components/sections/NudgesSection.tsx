import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../AnimatedSection";
import PhoneMockup from "../PhoneMockup";
import { ScrollArea } from "../ui/scroll-area";
import { Bell, X, ArrowRight, Shield, Lightbulb, TrendingUp } from "lucide-react";

const nudges = [
  {
    trigger: "Wilmar dropped 3 ESG ranks",
    title: "Consider transitioning from Wilmar",
    body: "A like-for-like sustainable alternative is available.",
    alternative: "Olam Group (ESG: 78)",
    costOfInaction: "Holding Wilmar may cost S$4,200/yr in carbon tax exposure by 2027.",
  },
  {
    trigger: "ESG preferences drifted",
    title: "Preference Drift Detected",
    body: "Portfolio ESG alignment dropped 8 points below preferences.",
    alternative: "Re-align with 2 suggested swaps",
    costOfInaction: "Continued drift may increase greenwashing exposure.",
  },
  {
    trigger: "New TCFD regulation",
    title: "Regulatory Change Alert",
    body: "3 holdings affected by TCFD mandatory disclosure Q3 2026.",
    alternative: "View compliant alternatives",
    costOfInaction: "Non-compliant holdings may face S$2,100 in costs.",
  },
];

const features = [
  { icon: Bell, title: "Context-Triggered", desc: "Nudges appear only when relevant events occur — ESG downgrades, regulatory changes, or preference drift." },
  { icon: Lightbulb, title: "Transparent Reasoning", desc: "Every nudge explains why it was triggered and discloses any conflicts of interest." },
  { icon: TrendingUp, title: "Cost of Inaction", desc: "Dismissing a nudge reveals the projected financial and ESG cost of maintaining current positions." },
];

const NudgesSection = () => {
  const [dismissed, setDismissed] = useState<number | null>(null);

  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Phone Mockup */}
          <AnimatedSection className="flex-shrink-0">
            <PhoneMockup scale="md">
              <ScrollArea className="h-full">
                <div className="p-4 pt-8">
                  <p className="text-[10px] text-muted-foreground mb-1">Notifications</p>
                  <p className="text-[13px] font-bold text-foreground mb-3">Smart Nudges</p>

                  <div className="space-y-2.5">
                    {nudges.map((n, i) => (
                      <div key={n.title} className="rounded-xl border border-border bg-card overflow-hidden">
                        <div className="p-3">
                          <div className="flex items-start gap-2">
                            <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Bell className="w-3 h-3 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[8px] text-muted-foreground">{n.trigger}</p>
                              <p className="text-[11px] font-semibold text-foreground mb-0.5">{n.title}</p>
                              <p className="text-[9px] text-muted-foreground mb-2">{n.body}</p>

                              <div className="flex items-center gap-1.5 p-1.5 rounded-md bg-secondary border border-border mb-2">
                                <ArrowRight className="w-2.5 h-2.5 text-primary flex-shrink-0" />
                                <span className="text-[9px] text-primary font-medium truncate">{n.alternative}</span>
                              </div>

                              <div className="flex gap-1.5">
                                <button className="px-2 py-1 rounded-md bg-primary text-primary-foreground text-[9px] font-medium">
                                  View
                                </button>
                                <button
                                  onClick={() => setDismissed(dismissed === i ? null : i)}
                                  className="px-2 py-1 rounded-md border border-border text-[9px] text-muted-foreground"
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
                              <div className="p-2.5">
                                <div className="flex items-center gap-1.5 mb-1">
                                  <Shield className="w-3 h-3 text-amber-600" />
                                  <span className="text-[9px] font-bold text-amber-800">Cost of Inaction</span>
                                  <button onClick={() => setDismissed(null)} className="ml-auto">
                                    <X className="w-2.5 h-2.5 text-amber-600" />
                                  </button>
                                </div>
                                <p className="text-[9px] text-amber-700">{n.costOfInaction}</p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>

                  {/* Suitability badge */}
                  <div className="mt-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-secondary border border-border">
                    <Shield className="w-3 h-3 text-primary" />
                    <span className="text-[8px] text-muted-foreground">MAS suitability compliant</span>
                  </div>
                </div>
              </ScrollArea>
            </PhoneMockup>
          </AnimatedSection>

          {/* Editorial Content */}
          <div className="flex-1">
            <AnimatedSection>
              <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Behavioral Nudges</p>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight max-w-3xl mb-4">
                Gentle pushes.{" "}
                <span className="text-gradient-turquoise">Powerful shifts.</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mb-8 font-light">
                Context-triggered nudges that support gradual transition toward sustainable investments — never forced, always transparent.
              </p>
            </AnimatedSection>

            <div className="space-y-4">
              {features.map((f, i) => (
                <AnimatedSection key={f.title} delay={0.1 * i}>
                  <div className="p-5 rounded-2xl border border-border bg-card">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center">
                        <f.icon className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground text-sm">{f.title}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground">{f.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NudgesSection;

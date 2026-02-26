import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../AnimatedSection";
import PhoneMockup from "../PhoneMockup";

const steps = [
  {
    title: "Value Selection",
    subtitle: "What matters most to you?",
    content: (
      <div className="space-y-2 px-2">
        {["Climate Action", "Social Equity", "Clean Water", "Governance", "Biodiversity", "Circular Economy"].map((v, i) => (
          <div key={v} className={`flex items-center gap-2 p-2 rounded-xl border text-[11px] font-medium transition-all ${i < 3 ? "border-primary bg-secondary text-primary" : "border-border text-foreground"}`}>
            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${i < 3 ? "border-primary bg-primary" : "border-muted-foreground"}`}>
              {i < 3 && <div className="w-2 h-2 rounded-full bg-primary-foreground" />}
            </div>
            {v}
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "ESG Priority Ranking",
    subtitle: "Rank your priorities",
    content: (
      <div className="space-y-2 px-2">
        {[
          { label: "Environmental", pct: 45, color: "bg-emerald-500" },
          { label: "Social", pct: 30, color: "bg-blue-500" },
          { label: "Governance", pct: 25, color: "bg-amber-500" },
        ].map((p) => (
          <div key={p.label} className="p-3 rounded-xl border border-border">
            <div className="flex justify-between text-[11px] mb-1.5">
              <span className="font-medium">{p.label}</span>
              <span className="text-muted-foreground">{p.pct}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-muted">
              <div className={`h-full rounded-full ${p.color}`} style={{ width: `${p.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Risk Profiling",
    subtitle: "Your investment comfort zone",
    content: (
      <div className="px-2 space-y-3">
        <div className="flex justify-between text-[10px] text-muted-foreground">
          <span>Conservative</span><span>Balanced</span><span>Aggressive</span>
        </div>
        <div className="relative w-full h-3 rounded-full bg-gradient-to-r from-emerald-200 via-amber-200 to-red-200">
          <div className="absolute top-1/2 -translate-y-1/2 left-[40%] w-5 h-5 rounded-full bg-card border-2 border-primary shadow-md" />
        </div>
        <div className="mt-4 p-3 rounded-xl bg-secondary border border-border">
          <p className="text-[11px] font-medium text-primary">Balanced-Growth</p>
          <p className="text-[10px] text-muted-foreground mt-1">Moderate risk tolerance with preference for transition investments</p>
        </div>
      </div>
    ),
  },
  {
    title: "Your ESG Identity",
    subtitle: "Your personalized profile",
    content: (
      <div className="px-2">
        <div className="rounded-2xl border-2 border-primary bg-gradient-to-br from-secondary to-background p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">SC</div>
            <div>
              <p className="text-[12px] font-bold text-foreground">Climate Pioneer</p>
              <p className="text-[10px] text-muted-foreground">Top 15% ESG Sophistication</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex gap-1.5 flex-wrap">
              {["Climate Action", "Clean Water", "Social Equity"].map((t) => (
                <span key={t} className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[9px] font-medium">{t}</span>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2 mt-2">
              {[{ l: "E", v: "92" }, { l: "S", v: "78" }, { l: "G", v: "85" }].map((s) => (
                <div key={s.l} className="text-center p-2 rounded-lg bg-card border border-border">
                  <p className="text-[16px] font-bold text-primary">{s.v}</p>
                  <p className="text-[9px] text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const ESGOnboardingSection = () => {
  const [step, setStep] = useState(0);

  return (
    <section className="section-padding bg-turquoise">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Onboarding</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight max-w-3xl mb-4">
            Your ESG identity,{" "}
            <span className="text-gradient-turquoise">built in 60 seconds.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mb-12 font-light">
            A swipe-card onboarding that captures values, ranks priorities, profiles risk, and generates a personalized ESG Identity Card.
          </p>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <AnimatedSection delay={0.2}>
            <PhoneMockup scale="lg">
              <div className="h-full flex flex-col pt-10 pb-4 px-3">
                <div className="text-center mb-4">
                  <p className="text-[10px] text-muted-foreground mb-1">Step {step + 1} of {steps.length}</p>
                  <p className="text-sm font-semibold text-foreground">{steps[step].title}</p>
                  <p className="text-[10px] text-muted-foreground">{steps[step].subtitle}</p>
                </div>

                {/* Progress */}
                <div className="flex gap-1.5 mb-4 px-2">
                  {steps.map((_, i) => (
                    <div key={i} className={`h-1 rounded-full flex-1 transition-colors ${i <= step ? "bg-primary" : "bg-muted"}`} />
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1"
                  >
                    {steps[step].content}
                  </motion.div>
                </AnimatePresence>

                <div className="flex gap-2 px-2 mt-auto">
                  <button
                    onClick={() => setStep(Math.max(0, step - 1))}
                    className="flex-1 py-2 rounded-xl border border-border text-[11px] font-medium text-muted-foreground disabled:opacity-30"
                    disabled={step === 0}
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
                    className="flex-1 py-2 rounded-xl bg-primary text-primary-foreground text-[11px] font-medium disabled:opacity-30"
                    disabled={step === steps.length - 1}
                  >
                    {step === steps.length - 2 ? "Generate Card" : "Next"}
                  </button>
                </div>
              </div>
            </PhoneMockup>
          </AnimatedSection>

          <div className="flex-1 space-y-4">
            {steps.map((s, i) => (
              <AnimatedSection key={s.title} delay={0.1 * i}>
                <button
                  onClick={() => setStep(i)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all ${
                    i === step
                      ? "border-primary bg-card shadow-lg"
                      : "border-border bg-card/50 hover:border-primary/30"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      i === step ? "bg-primary text-primary-foreground" : i < step ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                    }`}>
                      {i < step ? "✓" : i + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-foreground">{s.title}</p>
                      <p className="text-xs text-muted-foreground">{s.subtitle}</p>
                    </div>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESGOnboardingSection;

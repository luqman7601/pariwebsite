import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../AnimatedSection";
import PhoneMockup from "../PhoneMockup";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";

const PreferenceSection = () => {
  const [fossilFuel, setFossilFuel] = useState(true);
  const [tcfd, setTcfd] = useState(false);
  const [diversity, setDiversity] = useState(false);
  const [intensity, setIntensity] = useState([60]);

  const score = 72 + (fossilFuel ? 8 : 0) + (tcfd ? 5 : 0) + (diversity ? 3 : 0) + Math.round((intensity[0] - 50) / 10);

  return (
    <section className="section-padding bg-gold/30">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-sm font-medium tracking-widest uppercase text-gold-dark mb-4">Live Preferences</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight max-w-3xl mb-4">
            Your values.{" "}
            <span className="text-gradient-gold">Your rules.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mb-12 font-light">
            Set sustainability filters in real time. Watch your portfolio score update instantly as you toggle preferences.
          </p>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <AnimatedSection delay={0.2} className="flex-shrink-0">
            <PhoneMockup scale="lg">
              <div className="h-full pt-10 pb-4 px-4 text-xs">
                <p className="font-semibold text-sm text-foreground mb-4">Sustainability Preferences</p>

                <div className="space-y-3 mb-4">
                  {[
                    { label: "Exclude Fossil Fuels", desc: "Remove oil, gas, coal holdings", val: fossilFuel, set: setFossilFuel },
                    { label: "TCFD Compliance Only", desc: "Require climate disclosure", val: tcfd, set: setTcfd },
                    { label: "Board Diversity ≥ 30%", desc: "Minimum diversity threshold", val: diversity, set: setDiversity },
                  ].map((toggle) => (
                    <div key={toggle.label} className="flex items-center justify-between p-3 rounded-xl border border-border bg-card">
                      <div>
                        <p className="text-[11px] font-medium text-foreground">{toggle.label}</p>
                        <p className="text-[9px] text-muted-foreground">{toggle.desc}</p>
                      </div>
                      <Switch checked={toggle.val} onCheckedChange={toggle.set} className="scale-75" />
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-xl border border-border bg-card mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-[11px] font-medium text-foreground">ESG Intensity</span>
                    <span className="text-[11px] font-bold text-primary">{intensity[0]}%</span>
                  </div>
                  <Slider value={intensity} onValueChange={setIntensity} max={100} step={5} className="w-full" />
                </div>

                <motion.div
                  key={score}
                  initial={{ scale: 0.95, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="p-4 rounded-xl bg-secondary border-2 border-primary"
                >
                  <p className="text-[10px] text-muted-foreground text-center">Updated Portfolio ESG Score</p>
                  <p className="text-3xl font-bold text-primary text-center">{score}/100</p>
                </motion.div>
              </div>
            </PhoneMockup>
          </AnimatedSection>

          <div className="flex-1 space-y-6">
            {[
              { title: "Real-Time Re-scoring", desc: "Every toggle instantly recalculates your portfolio's ESG health score against the new criteria." },
              { title: "Preference Drift Detection", desc: "If your portfolio drifts from your stated preferences over time, you'll receive a gentle notification." },
              { title: "Suitability-Aware Filters", desc: "Filters that conflict with your risk profile or suitability obligations are flagged before activation." },
              { title: "Granular Control", desc: "From broad exclusions to specific thresholds — customize at the level of detail that matters to you." },
            ].map((f, i) => (
              <AnimatedSection key={f.title} delay={0.1 * i}>
                <div className="p-5 rounded-xl border border-border bg-card hover:border-gold-deep/50 transition-colors">
                  <h3 className="font-semibold text-foreground mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreferenceSection;

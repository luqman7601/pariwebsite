import { useState } from "react";
import AnimatedSection from "../AnimatedSection";
import PhoneMockup from "../PhoneMockup";
import { ScrollArea } from "../ui/scroll-area";
import { Shield, Eye, FileCheck, Scale, AlertCircle, Check } from "lucide-react";

const frameworks = [
  { name: "MAS", full: "Monetary Authority of Singapore" },
  { name: "TCFD", full: "Task Force on Climate Disclosures" },
  { name: "SFDR", full: "Sustainable Finance Disclosure" },
  { name: "EU Taxonomy", full: "European Green Classification" },
  { name: "SGX", full: "Singapore Exchange ESG Rules" },
];

const checklist = [
  { label: "Risk profile verified", done: true },
  { label: "Investment horizon set", done: true },
  { label: "ESG preferences recorded", done: true },
  { label: "Conflict disclosures reviewed", done: false },
  { label: "Regulatory constraints applied", done: true },
];

const auditItems = [
  { time: "Today", action: "ESG preferences updated" },
  { time: "2 days ago", action: "Nudge: Wilmar transition viewed" },
  { time: "1 week ago", action: "Risk profile re-assessed" },
  { time: "2 weeks ago", action: "Alternative comparison exported" },
];

const ComplianceSection = () => {
  const [privacyToggles, setPrivacyToggles] = useState({ sharing: true, analytics: false, thirdParty: false });

  const togglePrivacy = (key: keyof typeof privacyToggles) => {
    setPrivacyToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Suitability score for gauge
  const suitabilityScore = 82;
  const angle = (suitabilityScore / 100) * 180;

  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Phone Mockup */}
          <AnimatedSection className="flex-shrink-0">
            <PhoneMockup scale="md">
              <ScrollArea className="h-full">
                <div className="p-4 pt-8">
                  <p className="text-[10px] text-muted-foreground mb-1">Trust & Compliance</p>
                  <p className="text-[13px] font-bold text-foreground mb-3">Your Profile</p>

                  {/* Suitability Gauge */}
                  <div className="flex justify-center mb-3">
                    <div className="relative w-32 h-16 overflow-hidden">
                      <svg viewBox="0 0 120 60" className="w-full h-full">
                        <path d="M10,55 A50,50 0 0,1 110,55" fill="none" stroke="hsl(var(--muted))" strokeWidth="8" strokeLinecap="round" />
                        <path d="M10,55 A50,50 0 0,1 110,55" fill="none" stroke="hsl(var(--primary))" strokeWidth="8" strokeLinecap="round" strokeDasharray={`${(angle / 180) * 157} 157`} />
                      </svg>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                        <p className="text-[14px] font-bold text-foreground text-center">{suitabilityScore}%</p>
                        <p className="text-[8px] text-muted-foreground text-center">Suitability</p>
                      </div>
                    </div>
                  </div>

                  {/* Checklist */}
                  <div className="rounded-lg border border-border bg-card p-2.5 mb-3">
                    <p className="text-[10px] font-semibold text-foreground mb-1.5">Compliance Checklist</p>
                    <div className="space-y-1.5">
                      {checklist.map((item) => (
                        <div key={item.label} className="flex items-center gap-2">
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center ${item.done ? "bg-emerald-100" : "bg-muted"}`}>
                            {item.done && <Check className="w-2.5 h-2.5 text-emerald-600" />}
                          </div>
                          <span className={`text-[10px] ${item.done ? "text-foreground" : "text-muted-foreground"}`}>{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Privacy Toggles */}
                  <div className="rounded-lg border border-border bg-card p-2.5 mb-3">
                    <p className="text-[10px] font-semibold text-foreground mb-1.5">Privacy Controls</p>
                    {Object.entries(privacyToggles).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between py-1.5">
                        <span className="text-[10px] text-foreground capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                        <button
                          onClick={() => togglePrivacy(key as keyof typeof privacyToggles)}
                          className={`w-8 h-4.5 rounded-full relative transition-colors ${value ? "bg-primary" : "bg-muted"}`}
                        >
                          <div className={`absolute top-0.5 w-3.5 h-3.5 rounded-full bg-card shadow transition-transform ${value ? "left-4" : "left-0.5"}`} />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Audit Timeline */}
                  <div className="rounded-lg border border-border bg-card p-2.5">
                    <p className="text-[10px] font-semibold text-foreground mb-1.5">Audit Trail</p>
                    <div className="space-y-2">
                      {auditItems.map((item, i) => (
                        <div key={i} className="flex gap-2">
                          <span className="text-[8px] text-muted-foreground w-16 flex-shrink-0">{item.time}</span>
                          <span className="text-[9px] text-foreground">{item.action}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </PhoneMockup>
          </AnimatedSection>

          {/* Editorial Content */}
          <div className="flex-1">
            <AnimatedSection>
              <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Trust & Compliance</p>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight max-w-3xl mb-4">
                Built on trust.{" "}
                <span className="text-gradient-turquoise">Compliant by design.</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mb-8 font-light">
                Every feature balances innovation with regulatory compliance, suitability obligations, and greenwashing risk mitigation.
              </p>
            </AnimatedSection>

            {/* Framework Badges (read-only) */}
            <AnimatedSection delay={0.2}>
              <div className="flex flex-wrap gap-3 mb-6">
                {frameworks.map((f) => (
                  <div key={f.name} className="px-5 py-3 rounded-xl border border-border bg-card text-center hover:border-primary/30 transition-colors">
                    <p className="font-bold text-lg text-primary">{f.name}</p>
                    <p className="text-[10px] text-muted-foreground">{f.full}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="p-5 rounded-2xl border border-border bg-secondary flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Always-Visible Suitability Profile</p>
                  <p className="text-xs text-muted-foreground">Your suitability profile is accessible from every screen. No recommendation is made without cross-referencing your risk tolerance and regulatory constraints.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;

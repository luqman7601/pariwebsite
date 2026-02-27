import { useState } from "react";
import AnimatedSection from "../AnimatedSection";
import PhoneMockup from "../PhoneMockup";
import { LayoutDashboard, Compass, BarChart3, User } from "lucide-react";

const tabs = [
  {
    icon: LayoutDashboard,
    name: "Dashboard",
    screens: ["Portfolio Overview", "Holding Detail", "ESG Health", "Risk Alerts", "Provider Sync"],
  },
  {
    icon: Compass,
    name: "Discover",
    screens: ["Thematic Explorer", "Like-for-Like Switcher", "ESG Unlock", "GreenRewards"],
  },
  {
    icon: BarChart3,
    name: "Impact",
    screens: ["Impact Metrics", "Singapore Map", "SDG Alignment", "Carbon Tracker"],
  },
  {
    icon: User,
    name: "Profile",
    screens: ["ESG Identity Card", "Preferences", "Legacy Planner", "Reports"],
  },
];

const NavigationSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="section-padding bg-turquoise">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Phone Mockup */}
          <AnimatedSection className="flex-shrink-0">
            <PhoneMockup scale="md">
              <div className="h-full flex flex-col pt-8">
                {/* Screen content */}
                <div className="flex-1 p-4">
                  <p className="text-[10px] text-muted-foreground mb-1">Navigation</p>
                  <p className="text-[13px] font-bold text-foreground mb-4">{tabs[activeTab].name}</p>

                  <div className="space-y-2">
                    {tabs[activeTab].screens.map((screen, i) => (
                      <div
                        key={screen}
                        className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                          <span className="text-[11px] font-bold text-primary">{i + 1}</span>
                        </div>
                        <span className="text-[11px] font-medium text-foreground">{screen}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tab Bar */}
                <div className="border-t border-border bg-card p-2 flex justify-around items-center pb-6">
                  {tabs.map((t, i) => (
                    <button
                      key={t.name}
                      onClick={() => setActiveTab(i)}
                      className={`flex flex-col items-center gap-0.5 transition-colors ${i === activeTab ? "text-primary" : "text-muted-foreground"}`}
                    >
                      <t.icon className="w-5 h-5" />
                      <span className="text-[9px] font-medium">{t.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </PhoneMockup>
          </AnimatedSection>

          {/* Editorial Content */}
          <div className="flex-1">
            <AnimatedSection>
              <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Information Architecture</p>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight max-w-3xl mb-4">
                Intuitive navigation.{" "}
                <span className="text-gradient-turquoise">Every screen connected.</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mb-8 font-light">
                Four primary tabs with deep drill-down flows. Every feature is reachable within 2 taps.
              </p>
            </AnimatedSection>

            {/* IA Grid (read-only) */}
            <div className="grid grid-cols-2 gap-4">
              {tabs.map((t, i) => (
                <AnimatedSection key={t.name} delay={i * 0.1}>
                  <div className="rounded-2xl border border-border bg-card p-5">
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-3">
                      <t.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground text-sm mb-2">{t.name}</h3>
                    <div className="space-y-1">
                      {t.screens.map((s) => (
                        <div key={s} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary" />
                          <span className="text-xs text-muted-foreground">{s}</span>
                        </div>
                      ))}
                    </div>
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

export default NavigationSection;

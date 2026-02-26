import AnimatedSection from "../AnimatedSection";
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

const NavigationSection = () => (
  <section className="section-padding bg-turquoise">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection>
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">Information Architecture</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight max-w-3xl mb-4">
          Intuitive navigation.{" "}
          <span className="text-gradient-turquoise">Every screen connected.</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mb-12 font-light">
          Four primary tabs with deep drill-down flows. Every feature is reachable within 2 taps.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-4 gap-6">
        {tabs.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.1}>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                <t.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-3">{t.name}</h3>
              <div className="space-y-1.5">
                {t.screens.map((s, j) => (
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

      {/* Tab Bar Preview */}
      <AnimatedSection delay={0.5}>
        <div className="mt-12 max-w-sm mx-auto">
          <div className="rounded-2xl bg-card border border-border p-4 flex justify-around items-center">
            {tabs.map((t, i) => (
              <div key={t.name} className={`flex flex-col items-center gap-1 ${i === 0 ? "text-primary" : "text-muted-foreground"}`}>
                <t.icon className="w-5 h-5" />
                <span className="text-[10px] font-medium">{t.name}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-[10px] text-muted-foreground mt-2">App Tab Bar</p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default NavigationSection;

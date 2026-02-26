import AnimatedSection from "../AnimatedSection";

const FooterSection = () => (
  <section className="section-padding gradient-hero">
    <div className="max-w-4xl mx-auto text-center">
      <AnimatedSection>
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-6">The Future of Wealth</p>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
          Sustainable. Transparent.{" "}
          <span className="text-gradient-turquoise">Personal.</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 font-light">
          NextGen Sustainable Wealth reimagines how the next generation of affluent investors in Singapore manage, grow, and pass on their wealth — with integrity at every layer.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="inline-flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-foreground flex items-center justify-center">
              <span className="text-background font-bold text-lg">B</span>
            </div>
            <div className="text-left">
              <p className="font-bold text-foreground text-sm">BNP Paribas</p>
              <p className="text-[10px] text-muted-foreground">Singapore · Wealth Management</p>
            </div>
          </div>
          <span className="px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-medium">
            NextGen Wealth Innovation Challenge 2025
          </span>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            This is a concept prototype designed for the BNP Paribas Singapore competition. All data shown is simulated for demonstration purposes.
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default FooterSection;

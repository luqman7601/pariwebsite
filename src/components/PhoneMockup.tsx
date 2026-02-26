import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  children: React.ReactNode;
  className?: string;
  scale?: "sm" | "md" | "lg";
}

const PhoneMockup = ({ children, className, scale = "md" }: PhoneMockupProps) => {
  const sizes = {
    sm: "w-[240px] h-[490px]",
    md: "w-[280px] h-[570px]",
    lg: "w-[320px] h-[650px]",
  };

  return (
    <div className={cn("relative", className)}>
      <div className={cn(
        "relative rounded-[3rem] bg-foreground p-3 phone-shadow",
        sizes[scale]
      )}>
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-foreground rounded-b-2xl z-10" />
        {/* Screen */}
        <div className="relative w-full h-full rounded-[2.4rem] bg-background overflow-hidden">
          {children}
        </div>
        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-muted-foreground/30 rounded-full" />
      </div>
    </div>
  );
};

export default PhoneMockup;

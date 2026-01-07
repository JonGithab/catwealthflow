import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  variant?: "default" | "primary" | "accent";
}

export const StatsCard = ({
  title,
  value,
  change,
  changeType = "neutral",
  icon: Icon,
  variant = "default",
}: StatsCardProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        variant === "default" && "bg-card border border-border",
        variant === "primary" && "gradient-primary text-primary-foreground",
        variant === "accent" && "bg-peach"
      )}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p
            className={cn(
              "text-sm font-medium",
              variant === "default" && "text-muted-foreground",
              variant === "primary" && "text-primary-foreground/80",
              variant === "accent" && "text-ginger-dark/80"
            )}
          >
            {title}
          </p>
          <p
            className={cn(
              "text-3xl font-display font-bold tracking-tight",
              variant === "accent" && "text-ginger-dark"
            )}
          >
            {value}
          </p>
          {change && (
            <p
              className={cn(
                "text-sm font-medium",
                changeType === "positive" && "text-success",
                changeType === "negative" && "text-destructive",
                changeType === "neutral" && "text-muted-foreground"
              )}
            >
              {change}
            </p>
          )}
        </div>
        <div
          className={cn(
            "p-3 rounded-xl",
            variant === "default" && "bg-secondary",
            variant === "primary" && "bg-primary-foreground/20",
            variant === "accent" && "bg-ginger/20"
          )}
        >
          <Icon
            className={cn(
              "w-6 h-6",
              variant === "default" && "text-primary",
              variant === "primary" && "text-primary-foreground",
              variant === "accent" && "text-ginger-dark"
            )}
          />
        </div>
      </div>
    </div>
  );
};

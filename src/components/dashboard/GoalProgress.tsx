import { Target, Plane, GraduationCap, Home, Sparkles } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const goals = [
  {
    id: 1,
    name: "Dream Vacation",
    icon: Plane,
    current: 2400,
    target: 5000,
    color: "bg-primary",
    daysLeft: 120,
  },
  {
    id: 2,
    name: "Online Course",
    icon: GraduationCap,
    current: 180,
    target: 300,
    color: "bg-success",
    daysLeft: 30,
  },
  {
    id: 3,
    name: "Emergency Fund",
    icon: Home,
    current: 3500,
    target: 10000,
    color: "bg-coral",
    daysLeft: 365,
  },
];

export const GoalProgress = () => {
  return (
    <div className="bg-card rounded-2xl border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-secondary">
            <Target className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-lg text-foreground">
              Savings Goals
            </h3>
            <p className="text-sm text-muted-foreground">Track your progress</p>
          </div>
        </div>
        <button className="text-sm text-primary font-medium hover:underline">
          View All
        </button>
      </div>

      <div className="space-y-5">
        {goals.map((goal) => {
          const Icon = goal.icon;
          const percentage = Math.round((goal.current / goal.target) * 100);

          return (
            <div
              key={goal.id}
              className="group p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={cn("p-2 rounded-lg", goal.color)}>
                    <Icon className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{goal.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {goal.daysLeft} days left
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-display font-bold text-foreground">
                    ${goal.current.toLocaleString()}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    of ${goal.target.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <Progress value={percentage} className="h-2" />
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{percentage}% complete</span>
                  {percentage >= 100 && (
                    <span className="flex items-center gap-1 text-success">
                      <Sparkles className="w-3 h-3" />
                      Goal reached!
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

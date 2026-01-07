import { BookOpen, Trophy, Flame, ChevronRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const modules = [
  { name: "Budgeting Basics", progress: 100, lessons: 8, completed: 8 },
  { name: "Smart Spending", progress: 60, lessons: 10, completed: 6 },
  { name: "Investing 101", progress: 20, lessons: 12, completed: 2 },
];

export const LearningProgress = () => {
  return (
    <div className="bg-card rounded-2xl border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-secondary">
            <BookOpen className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-lg text-foreground">
              Learning Path
            </h3>
            <p className="text-sm text-muted-foreground">Continue your journey</p>
          </div>
        </div>
      </div>

      {/* Streak Badge */}
      <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-peach to-secondary mb-6">
        <div className="p-3 rounded-xl bg-primary/10">
          <Flame className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <p className="font-display font-bold text-lg text-foreground">
            7 Day Streak! 🔥
          </p>
          <p className="text-sm text-muted-foreground">
            Keep learning to maintain your streak
          </p>
        </div>
        <div className="flex items-center gap-1">
          <Trophy className="w-5 h-5 text-warning" />
          <span className="font-display font-bold text-warning">12</span>
        </div>
      </div>

      {/* Modules */}
      <div className="space-y-4">
        {modules.map((module) => (
          <div
            key={module.name}
            className="p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                {module.name}
              </p>
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </div>
            <div className="flex items-center gap-3">
              <Progress value={module.progress} className="flex-1 h-2" />
              <span className="text-xs text-muted-foreground whitespace-nowrap">
                {module.completed}/{module.lessons} lessons
              </span>
            </div>
          </div>
        ))}
      </div>

      <Link to="/learn">
        <Button variant="soft" className="w-full mt-4">
          Continue Learning
        </Button>
      </Link>
    </div>
  );
};

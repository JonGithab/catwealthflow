import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Trophy, 
  Flame, 
  Star, 
  Lock, 
  CheckCircle,
  Clock,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

const modules = [
  {
    id: 1,
    title: "Budgeting Basics",
    description: "Master the fundamentals of creating and sticking to a budget",
    lessons: 8,
    completed: 8,
    duration: "45 min",
    badge: "🏆",
    status: "completed",
    color: "from-success to-success/80",
  },
  {
    id: 2,
    title: "Smart Spending",
    description: "Learn to make conscious spending decisions that align with your values",
    lessons: 10,
    completed: 6,
    duration: "60 min",
    badge: "💡",
    status: "in-progress",
    color: "from-primary to-coral",
  },
  {
    id: 3,
    title: "Investing 101",
    description: "Understand the basics of investing and growing your wealth",
    lessons: 12,
    completed: 2,
    duration: "90 min",
    badge: "📈",
    status: "in-progress",
    color: "from-coral to-warning",
  },
  {
    id: 4,
    title: "Debt Management",
    description: "Strategies to pay off debt and stay debt-free",
    lessons: 8,
    completed: 0,
    duration: "50 min",
    badge: "🎯",
    status: "locked",
    color: "from-muted to-muted",
  },
  {
    id: 5,
    title: "Emergency Fund",
    description: "Build a safety net for unexpected expenses",
    lessons: 6,
    completed: 0,
    duration: "35 min",
    badge: "🛡️",
    status: "locked",
    color: "from-muted to-muted",
  },
];

const challenges = [
  { id: 1, name: "No-Spend Weekend", participants: 234, prize: "50 XP" },
  { id: 2, name: "Meal Prep Week", participants: 189, prize: "75 XP" },
  { id: 3, name: "Track Every Purchase", participants: 456, prize: "100 XP" },
];

const Learn = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <h1 className="font-display text-3xl font-bold text-foreground mb-2">
                Learning Path
              </h1>
              <p className="text-muted-foreground">
                Build your financial knowledge one lesson at a time
              </p>
            </div>

            {/* Streak & Stats */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-peach">
                <Flame className="w-5 h-5 text-primary" />
                <span className="font-display font-bold text-ginger-dark">7 Day Streak</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary">
                <Trophy className="w-5 h-5 text-warning" />
                <span className="font-display font-bold text-foreground">340 XP</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Modules */}
            <div className="lg:col-span-2 space-y-4">
              {modules.map((module) => {
                const progress = (module.completed / module.lessons) * 100;
                const isLocked = module.status === "locked";
                const isCompleted = module.status === "completed";

                return (
                  <div
                    key={module.id}
                    className={cn(
                      "group relative overflow-hidden rounded-2xl border border-border p-6 transition-all duration-300",
                      isLocked 
                        ? "bg-muted/50 opacity-60" 
                        : "bg-card hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                    )}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={cn(
                          "w-14 h-14 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br",
                          module.color
                        )}
                      >
                        {isLocked ? <Lock className="w-6 h-6 text-muted-foreground" /> : module.badge}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-display font-semibold text-lg text-foreground">
                            {module.title}
                          </h3>
                          {isCompleted && (
                            <CheckCircle className="w-5 h-5 text-success" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {module.description}
                        </p>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <BookOpen className="w-4 h-4" />
                            {module.lessons} lessons
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {module.duration}
                          </span>
                        </div>

                        {!isLocked && (
                          <div className="flex items-center gap-3">
                            <Progress value={progress} className="flex-1 h-2" />
                            <span className="text-sm font-medium text-foreground">
                              {module.completed}/{module.lessons}
                            </span>
                          </div>
                        )}
                      </div>

                      {!isLocked && (
                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Daily Challenge */}
              <div className="bg-gradient-to-br from-primary to-coral rounded-2xl p-6 text-primary-foreground">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5" />
                  <h3 className="font-display font-semibold">Daily Challenge</h3>
                </div>
                <p className="text-primary-foreground/90 mb-4">
                  Complete 2 lessons today to maintain your streak!
                </p>
                <div className="flex items-center gap-3">
                  <Progress value={50} className="flex-1 h-2 bg-primary-foreground/20" />
                  <span className="text-sm font-medium">1/2</span>
                </div>
              </div>

              {/* Community Challenges */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="font-display font-semibold text-lg text-foreground mb-4">
                  Community Challenges
                </h3>
                <div className="space-y-3">
                  {challenges.map((challenge) => (
                    <div
                      key={challenge.id}
                      className="p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-foreground">
                          {challenge.name}
                        </span>
                        <span className="text-xs font-medium text-primary">
                          {challenge.prize}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {challenge.participants} participants
                      </p>
                    </div>
                  ))}
                </div>
                <Button variant="soft" className="w-full mt-4">
                  View All Challenges
                </Button>
              </div>

              {/* Badges */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="font-display font-semibold text-lg text-foreground mb-4">
                  Recent Badges
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["🎯", "📚", "💰", "🔥", "⭐"].map((badge, i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-2xl"
                    >
                      {badge}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Learn;

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Target, 
  Plus, 
  Plane, 
  GraduationCap, 
  Home, 
  Car,
  Sparkles,
  TrendingUp,
  Calendar,
  DollarSign
} from "lucide-react";
import { cn } from "@/lib/utils";

const goals = [
  {
    id: 1,
    name: "Dream Vacation to Japan",
    icon: Plane,
    current: 2400,
    target: 5000,
    color: "from-primary to-coral",
    monthlyContribution: 200,
    targetDate: "Dec 2025",
    category: "Travel",
  },
  {
    id: 2,
    name: "UX Design Certification",
    icon: GraduationCap,
    current: 180,
    target: 300,
    color: "from-success to-success/80",
    monthlyContribution: 60,
    targetDate: "Mar 2025",
    category: "Education",
  },
  {
    id: 3,
    name: "Emergency Fund",
    icon: Home,
    current: 3500,
    target: 10000,
    color: "from-coral to-warning",
    monthlyContribution: 300,
    targetDate: "Jun 2026",
    category: "Security",
  },
  {
    id: 4,
    name: "New Car Down Payment",
    icon: Car,
    current: 1200,
    target: 8000,
    color: "from-warning to-primary",
    monthlyContribution: 400,
    targetDate: "Sep 2026",
    category: "Transport",
  },
];

const skipSuggestions = [
  { item: "Daily coffee ($5)", weekly: 25, monthly: 100, yearly: 1200 },
  { item: "Streaming service", weekly: 4, monthly: 15, yearly: 180 },
  { item: "Lunch out ($12)", weekly: 36, monthly: 144, yearly: 1728 },
];

const Goals = () => {
  const totalSaved = goals.reduce((sum, g) => sum + g.current, 0);
  const totalTarget = goals.reduce((sum, g) => sum + g.target, 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <h1 className="font-display text-3xl font-bold text-foreground mb-2">
                Savings Goals
              </h1>
              <p className="text-muted-foreground">
                Connect your savings to the life you want to live
              </p>
            </div>

            <Button variant="gradient" size="lg" className="gap-2">
              <Plus className="w-5 h-5" />
              Add New Goal
            </Button>
          </div>

          {/* Overview Stats */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-card rounded-2xl border border-border p-6">
              <p className="text-sm text-muted-foreground mb-1">Total Saved</p>
              <p className="font-display text-3xl font-bold text-foreground">
                ${totalSaved.toLocaleString()}
              </p>
              <p className="text-sm text-success mt-1">+$460 this month</p>
            </div>
            <div className="bg-card rounded-2xl border border-border p-6">
              <p className="text-sm text-muted-foreground mb-1">Total Goals</p>
              <p className="font-display text-3xl font-bold text-foreground">
                ${totalTarget.toLocaleString()}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{goals.length} active goals</p>
            </div>
            <div className="gradient-primary rounded-2xl p-6 text-primary-foreground">
              <p className="text-sm text-primary-foreground/80 mb-1">Overall Progress</p>
              <p className="font-display text-3xl font-bold">
                {Math.round((totalSaved / totalTarget) * 100)}%
              </p>
              <Progress 
                value={(totalSaved / totalTarget) * 100} 
                className="mt-3 h-2 bg-primary-foreground/20" 
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Goals List */}
            <div className="lg:col-span-2 space-y-4">
              {goals.map((goal) => {
                const Icon = goal.icon;
                const percentage = Math.round((goal.current / goal.target) * 100);
                const remaining = goal.target - goal.current;

                return (
                  <div
                    key={goal.id}
                    className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={cn(
                          "w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br",
                          goal.color
                        )}
                      >
                        <Icon className="w-7 h-7 text-primary-foreground" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                              {goal.category}
                            </span>
                            <h3 className="font-display font-semibold text-lg text-foreground mt-1">
                              {goal.name}
                            </h3>
                          </div>
                          <div className="text-right">
                            <p className="font-display text-2xl font-bold text-foreground">
                              ${goal.current.toLocaleString()}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              of ${goal.target.toLocaleString()}
                            </p>
                          </div>
                        </div>

                        <div className="mb-4">
                          <Progress value={percentage} className="h-3" />
                        </div>

                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-4 text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <DollarSign className="w-4 h-4" />
                              ${goal.monthlyContribution}/mo
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {goal.targetDate}
                            </span>
                          </div>
                          <span className="font-medium text-foreground">
                            ${remaining.toLocaleString()} to go
                          </span>
                        </div>
                      </div>
                    </div>

                    {percentage >= 90 && (
                      <div className="mt-4 p-3 rounded-xl bg-success/10 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-success" />
                        <span className="text-sm font-medium text-success">
                          Almost there! Just ${remaining} more to reach your goal! 🎉
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* If I Skip This Calculator */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <h3 className="font-display font-semibold text-lg text-foreground">
                    "If I Skip This..."
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  See how small changes add up over time
                </p>

                <div className="space-y-3">
                  {skipSuggestions.map((item, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer"
                    >
                      <p className="font-medium text-foreground mb-2">
                        {item.item}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Weekly</span>
                        <span className="font-medium text-foreground">${item.weekly}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Monthly</span>
                        <span className="font-medium text-foreground">${item.monthly}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Yearly</span>
                        <span className="font-medium text-success">${item.yearly}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Milestone Celebration */}
              <div className="gradient-warm rounded-2xl border border-border p-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">🎉</div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    Milestone Reached!
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    You've saved 50% of your emergency fund goal!
                  </p>
                  <Button variant="soft" size="sm">
                    Share Achievement
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Goals;

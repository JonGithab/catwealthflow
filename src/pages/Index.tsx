import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { SpendingWheel } from "@/components/dashboard/SpendingWheel";
import { GoalProgress } from "@/components/dashboard/GoalProgress";
import { RecentTransactions } from "@/components/dashboard/RecentTransactions";
import { LearningProgress } from "@/components/dashboard/LearningProgress";
import { Button } from "@/components/ui/button";
import { 
  Wallet, 
  TrendingUp, 
  PiggyBank, 
  Target,
  Sparkles,
  ArrowRight
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="py-8 md:py-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-peach text-ginger-dark text-sm font-medium mb-4">
                  <Sparkles className="w-4 h-4" />
                  Your Financial Journey
                </div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                  Good morning, <span className="text-gradient">Alex!</span>
                </h1>
                <p className="text-muted-foreground text-lg">
                  You're on a 7-day learning streak. Keep it up! 🔥
                </p>
              </div>

              <Link to="/quiz">
                <Button variant="gradient" size="lg" className="gap-2">
                  <Target className="w-5 h-5" />
                  Take Personality Quiz
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </section>

          {/* Stats Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatsCard
              title="Monthly Budget"
              value="$3,250"
              change="$750 remaining"
              changeType="positive"
              icon={Wallet}
              variant="primary"
            />
            <StatsCard
              title="This Month's Savings"
              value="$420"
              change="+12% vs last month"
              changeType="positive"
              icon={PiggyBank}
            />
            <StatsCard
              title="Value Alignment"
              value="78%"
              change="Your spending matches goals"
              changeType="positive"
              icon={TrendingUp}
              variant="accent"
            />
            <StatsCard
              title="Goals Progress"
              value="3 Active"
              change="1 near completion"
              changeType="neutral"
              icon={Target}
            />
          </section>

          {/* Main Dashboard Grid */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              <SpendingWheel />
              <RecentTransactions />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <GoalProgress />
              <LearningProgress />
            </div>
          </section>

          {/* Weekly Money Story */}
          <section className="mt-8">
            <div className="gradient-warm rounded-2xl p-6 md:p-8 border border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    Your Weekly Money Story 📖
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    This week, you spent <strong className="text-primary">30% less on dining out</strong> compared to last week. 
                    Your coffee habit cost you $22.50 — making it at home could save you <strong className="text-success">$85/month</strong>. 
                    Great job sticking to your entertainment budget! You're <strong className="text-primary">48%</strong> of the way to your vacation goal.
                  </p>
                  <Button variant="soft" size="sm" className="mt-4">
                    View Full Report
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;

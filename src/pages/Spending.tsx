import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { 
  Plus, 
  Filter,
  TrendingUp,
  TrendingDown,
  AlertCircle,
  Sparkles,
  Calendar
} from "lucide-react";
import { cn } from "@/lib/utils";

const spendingData = [
  { name: "Housing", value: 1200, color: "hsl(25, 85%, 55%)", budget: 1200 },
  { name: "Food & Dining", value: 520, color: "hsl(15, 75%, 60%)", budget: 450 },
  { name: "Transport", value: 280, color: "hsl(35, 70%, 50%)", budget: 300 },
  { name: "Entertainment", value: 180, color: "hsl(145, 60%, 45%)", budget: 200 },
  { name: "Shopping", value: 320, color: "hsl(45, 90%, 55%)", budget: 250 },
  { name: "Subscriptions", value: 85, color: "hsl(200, 70%, 55%)", budget: 100 },
];

const weeklyData = [
  { day: "Mon", amount: 45 },
  { day: "Tue", amount: 120 },
  { day: "Wed", amount: 35 },
  { day: "Thu", amount: 80 },
  { day: "Fri", amount: 210 },
  { day: "Sat", amount: 180 },
  { day: "Sun", amount: 95 },
];

const recentTransactions = [
  { id: 1, name: "Grocery Store", amount: -67.50, category: "Food", emotion: "worth", time: "2 hours ago" },
  { id: 2, name: "Netflix", amount: -15.99, category: "Subscriptions", emotion: "worth", time: "Yesterday" },
  { id: 3, name: "Online Shopping", amount: -89.00, category: "Shopping", emotion: "regret", time: "Yesterday" },
  { id: 4, name: "Gas Station", amount: -45.00, category: "Transport", emotion: "neutral", time: "2 days ago" },
  { id: 5, name: "Restaurant", amount: -52.30, category: "Food", emotion: "worth", time: "2 days ago" },
  { id: 6, name: "Coffee Shop", amount: -5.50, category: "Food", emotion: "neutral", time: "3 days ago" },
];

const emotions: Record<string, { emoji: string; label: string; color: string }> = {
  worth: { emoji: "😊", label: "Worth it!", color: "text-success" },
  regret: { emoji: "😕", label: "Regret", color: "text-destructive" },
  neutral: { emoji: "😐", label: "Neutral", color: "text-muted-foreground" },
};

const subscriptions = [
  { name: "Netflix", amount: 15.99, nextBilling: "Jan 15" },
  { name: "Spotify", amount: 9.99, nextBilling: "Jan 18" },
  { name: "iCloud", amount: 2.99, nextBilling: "Jan 22" },
  { name: "Gym Membership", amount: 29.99, nextBilling: "Feb 1" },
  { name: "Adobe CC", amount: 54.99, nextBilling: "Feb 5" },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
        <p className="font-medium text-foreground">{payload[0].name}</p>
        <p className="text-primary font-display font-bold text-lg">
          ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

const Spending = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const totalSpent = spendingData.reduce((sum, item) => sum + item.value, 0);
  const totalBudget = spendingData.reduce((sum, item) => sum + item.budget, 0);
  const subscriptionTotal = subscriptions.reduce((sum, s) => sum + s.amount, 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <h1 className="font-display text-3xl font-bold text-foreground mb-2">
                Spending Tracker
              </h1>
              <p className="text-muted-foreground">
                Understand where your money goes and how it feels
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
              <Button variant="gradient" className="gap-2">
                <Plus className="w-4 h-4" />
                Add Expense
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Spending Overview */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-display font-semibold text-lg text-foreground">
                      Monthly Spending
                    </h3>
                    <p className="text-sm text-muted-foreground">January 2025</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-3xl font-bold text-foreground">
                      ${totalSpent.toLocaleString()}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      of ${totalBudget.toLocaleString()} budget
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-56 h-56">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={spendingData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={90}
                          paddingAngle={3}
                          dataKey="value"
                          stroke="none"
                        >
                          {spendingData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="flex-1 space-y-3">
                    {spendingData.map((item) => {
                      const percentage = Math.round((item.value / item.budget) * 100);
                      const isOverBudget = item.value > item.budget;

                      return (
                        <div key={item.name} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: item.color }}
                            />
                            <span className="text-sm text-foreground">{item.name}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-medium text-foreground">
                              ${item.value}
                            </span>
                            <span className={cn(
                              "text-xs px-2 py-0.5 rounded-full",
                              isOverBudget 
                                ? "bg-destructive/10 text-destructive" 
                                : "bg-success/10 text-success"
                            )}>
                              {percentage}%
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Weekly Spending Pattern */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-display font-semibold text-lg text-foreground">
                      Weekly Pattern
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      You spend 40% more on weekends
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-warning">
                    <AlertCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">Weekend Alert</span>
                  </div>
                </div>

                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={weeklyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "hsl(var(--card))", 
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px"
                        }}
                      />
                      <Bar dataKey="amount" fill="hsl(25, 85%, 55%)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Recent Transactions */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display font-semibold text-lg text-foreground">
                    Recent Transactions
                  </h3>
                  <div className="flex gap-2">
                    {["all", "worth", "regret", "neutral"].map((filter) => (
                      <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={cn(
                          "px-3 py-1 rounded-full text-sm font-medium transition-colors",
                          activeFilter === filter
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        )}
                      >
                        {filter === "all" ? "All" : emotions[filter]?.emoji}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  {recentTransactions
                    .filter((tx) => activeFilter === "all" || tx.emotion === activeFilter)
                    .map((tx) => {
                      const emotionData = emotions[tx.emotion];

                      return (
                        <div
                          key={tx.id}
                          className="flex items-center justify-between p-3 rounded-xl hover:bg-secondary/50 transition-colors"
                        >
                          <div>
                            <p className="font-medium text-foreground">{tx.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {tx.category} • {tx.time}
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="font-display font-semibold text-foreground">
                              ${Math.abs(tx.amount).toFixed(2)}
                            </span>
                            <span className={cn("text-lg", emotionData.color)}>
                              {emotionData.emoji}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Value Alignment */}
              <div className="gradient-primary rounded-2xl p-6 text-primary-foreground">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5" />
                  <h3 className="font-display font-semibold">Value Alignment</h3>
                </div>
                <p className="text-5xl font-display font-bold mb-2">78%</p>
                <p className="text-primary-foreground/80 text-sm">
                  Your spending aligns with your stated goals
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm">+5% from last month</span>
                </div>
              </div>

              {/* Subscription Audit */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-semibold text-lg text-foreground">
                    Subscriptions
                  </h3>
                  <span className="text-sm font-medium text-primary">
                    ${subscriptionTotal.toFixed(2)}/mo
                  </span>
                </div>

                <div className="space-y-3">
                  {subscriptions.map((sub, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                    >
                      <div>
                        <p className="font-medium text-foreground text-sm">{sub.name}</p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {sub.nextBilling}
                        </p>
                      </div>
                      <span className="font-medium text-foreground">
                        ${sub.amount}
                      </span>
                    </div>
                  ))}
                </div>

                <Button variant="soft" size="sm" className="w-full mt-4">
                  Manage Subscriptions
                </Button>
              </div>

              {/* Insight */}
              <div className="gradient-warm rounded-2xl border border-border p-6">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingDown className="w-5 h-5 text-success" />
                  <h3 className="font-display font-semibold text-foreground">
                    Smart Insight
                  </h3>
                </div>
                <p className="text-sm text-foreground/80">
                  Making coffee at home instead of buying could save you 
                  <strong className="text-success"> $85/month</strong> — that's 
                  <strong className="text-success"> $1,020/year</strong> towards your vacation fund!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Spending;

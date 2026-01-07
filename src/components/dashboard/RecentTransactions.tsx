import { ShoppingBag, Coffee, Utensils, Music, Car, Wifi } from "lucide-react";
import { cn } from "@/lib/utils";

const emotions = {
  worth: { emoji: "😊", label: "Worth it!", color: "text-success" },
  regret: { emoji: "😕", label: "Regret", color: "text-destructive" },
  neutral: { emoji: "😐", label: "Neutral", color: "text-muted-foreground" },
};

const transactions = [
  {
    id: 1,
    name: "Coffee Shop",
    category: "Food & Drink",
    amount: -5.50,
    icon: Coffee,
    emotion: "worth" as const,
    time: "2 hours ago",
  },
  {
    id: 2,
    name: "Spotify Premium",
    category: "Subscriptions",
    amount: -9.99,
    icon: Music,
    emotion: "worth" as const,
    time: "Yesterday",
  },
  {
    id: 3,
    name: "Online Shopping",
    category: "Shopping",
    amount: -67.00,
    icon: ShoppingBag,
    emotion: "regret" as const,
    time: "Yesterday",
  },
  {
    id: 4,
    name: "Restaurant",
    category: "Food & Drink",
    amount: -42.30,
    icon: Utensils,
    emotion: "neutral" as const,
    time: "2 days ago",
  },
  {
    id: 5,
    name: "Gas Station",
    category: "Transport",
    amount: -55.00,
    icon: Car,
    emotion: "neutral" as const,
    time: "3 days ago",
  },
];

export const RecentTransactions = () => {
  return (
    <div className="bg-card rounded-2xl border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-display font-semibold text-lg text-foreground">
            Recent Transactions
          </h3>
          <p className="text-sm text-muted-foreground">
            Your spending with emotion tags
          </p>
        </div>
        <button className="text-sm text-primary font-medium hover:underline">
          See All
        </button>
      </div>

      <div className="space-y-3">
        {transactions.map((tx) => {
          const Icon = tx.icon;
          const emotionData = emotions[tx.emotion];

          return (
            <div
              key={tx.id}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-secondary/50 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-secondary group-hover:bg-card transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{tx.name}</p>
                  <p className="text-xs text-muted-foreground">{tx.time}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="font-display font-semibold text-foreground">
                    ${Math.abs(tx.amount).toFixed(2)}
                  </p>
                  <p className={cn("text-xs", emotionData.color)}>
                    {emotionData.emoji} {emotionData.label}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

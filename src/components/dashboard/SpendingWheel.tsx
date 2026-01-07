import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const spendingData = [
  { name: "Housing", value: 1200, color: "hsl(25, 85%, 55%)" },
  { name: "Food", value: 450, color: "hsl(15, 75%, 60%)" },
  { name: "Transport", value: 280, color: "hsl(35, 70%, 50%)" },
  { name: "Entertainment", value: 180, color: "hsl(145, 60%, 45%)" },
  { name: "Shopping", value: 320, color: "hsl(45, 90%, 55%)" },
  { name: "Subscriptions", value: 85, color: "hsl(200, 70%, 55%)" },
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

export const SpendingWheel = () => {
  const total = spendingData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-card rounded-2xl border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-display font-semibold text-lg text-foreground">
            Spending Breakdown
          </h3>
          <p className="text-sm text-muted-foreground">This month's expenses</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-display font-bold text-foreground">
            ${total.toLocaleString()}
          </p>
          <p className="text-sm text-muted-foreground">Total spent</p>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="w-48 h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={spendingData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
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
          {spendingData.map((item) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-foreground">{item.name}</span>
              </div>
              <span className="text-sm font-medium text-foreground">
                ${item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

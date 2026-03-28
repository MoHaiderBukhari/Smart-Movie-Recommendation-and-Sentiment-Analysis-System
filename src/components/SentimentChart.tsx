import type { SentimentResult } from "@/data/movies";

interface SentimentChartProps {
  sentiment: SentimentResult;
}

const SentimentChart = ({ sentiment }: SentimentChartProps) => {
  const bars = [
    { label: "Positive", value: sentiment.positive, color: "bg-emerald-500" },
    { label: "Neutral", value: sentiment.neutral, color: "bg-primary" },
    { label: "Negative", value: sentiment.negative, color: "bg-destructive" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-display text-lg text-foreground">Sentiment Analysis</h4>
        <span className={`text-sm font-semibold ${sentiment.compound > 0.3 ? "text-emerald-400" : sentiment.compound < -0.3 ? "text-destructive" : "text-primary"}`}>
          Score: {sentiment.compound > 0 ? "+" : ""}{sentiment.compound}
        </span>
      </div>
      <div className="space-y-3">
        {bars.map((bar) => (
          <div key={bar.label}>
            <div className="flex justify-between text-xs mb-1.5">
              <span className="text-muted-foreground">{bar.label}</span>
              <span className="text-foreground font-medium">{Math.round(bar.value)}%</span>
            </div>
            <div className="h-2 rounded-full bg-muted overflow-hidden">
              <div
                className={`h-full rounded-full ${bar.color} transition-all duration-700 ease-out`}
                style={{ width: `${bar.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SentimentChart;

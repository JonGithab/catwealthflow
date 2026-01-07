import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronRight, ChevronLeft, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const questions = [
  {
    id: 1,
    question: "When you receive unexpected money (bonus, gift, tax refund), what's your first instinct?",
    options: [
      { id: "a", text: "Book an adventure or experience", type: "adventurer" },
      { id: "b", text: "Put it straight into savings", type: "planner" },
      { id: "c", text: "Use it to pay off debt", type: "minimalist" },
      { id: "d", text: "Treat yourself to something nice", type: "spender" },
    ],
  },
  {
    id: 2,
    question: "How do you feel about checking your bank balance?",
    options: [
      { id: "a", text: "I check it multiple times a day", type: "planner" },
      { id: "b", text: "Only when I need to buy something", type: "adventurer" },
      { id: "c", text: "I prefer not to know", type: "spender" },
      { id: "d", text: "Once a week is enough", type: "minimalist" },
    ],
  },
  {
    id: 3,
    question: "What's your approach to shopping?",
    options: [
      { id: "a", text: "I make lists and stick to them", type: "planner" },
      { id: "b", text: "I buy only what I truly need", type: "minimalist" },
      { id: "c", text: "If I see it and want it, I buy it", type: "spender" },
      { id: "d", text: "I prefer experiences over things", type: "adventurer" },
    ],
  },
  {
    id: 4,
    question: "How do you handle financial goals?",
    options: [
      { id: "a", text: "I have a detailed spreadsheet", type: "planner" },
      { id: "b", text: "I save for trips and experiences", type: "adventurer" },
      { id: "c", text: "I focus on having less stuff", type: "minimalist" },
      { id: "d", text: "Goals are flexible suggestions", type: "spender" },
    ],
  },
  {
    id: 5,
    question: "What stresses you most about money?",
    options: [
      { id: "a", text: "Not having a clear plan", type: "planner" },
      { id: "b", text: "Missing out on experiences", type: "adventurer" },
      { id: "c", text: "Having too much clutter", type: "minimalist" },
      { id: "d", text: "Being restricted from buying", type: "spender" },
    ],
  },
];

const personalities = {
  adventurer: {
    title: "The Adventurer",
    emoji: "🌍",
    description: "You value experiences over possessions. Money is a tool for creating memories and exploring the world.",
    strengths: ["Prioritizes meaningful experiences", "Flexible with spending", "Lives in the moment"],
    growth: ["Build an adventure fund", "Balance spontaneity with savings", "Track experience vs. things spending"],
    color: "from-primary to-coral",
  },
  planner: {
    title: "The Planner",
    emoji: "📊",
    description: "You're organized and methodical with money. Every dollar has a purpose in your detailed financial plan.",
    strengths: ["Excellent at saving", "Always prepared", "Clear financial goals"],
    growth: ["Allow for some spontaneity", "Reward yourself more often", "Don't stress over small deviations"],
    color: "from-success to-primary",
  },
  minimalist: {
    title: "The Minimalist",
    emoji: "✨",
    description: "You believe less is more. You focus on quality over quantity and value simplicity in all areas of life.",
    strengths: ["Low maintenance costs", "Thoughtful purchases", "Values quality"],
    growth: ["Invest in experiences", "Don't deprive yourself of joy", "Focus on value, not just cost"],
    color: "from-coral to-warning",
  },
  spender: {
    title: "The Spontaneous",
    emoji: "💫",
    description: "You enjoy the present moment and believe life is meant to be enjoyed. Money flows freely in your world.",
    strengths: ["Generous with others", "Enjoys life fully", "Confident decisions"],
    growth: ["Create a fun budget", "Automate savings first", "Track emotional spending"],
    color: "from-warning to-primary",
  },
};

export const PersonalityQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleNext = () => {
    if (selectedAnswer) {
      setAnswers({ ...answers, [currentQuestion]: selectedAnswer });
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1] || null);
    }
  };

  const calculateResult = () => {
    const counts: Record<string, number> = {};
    
    Object.values(answers).forEach((type) => {
      counts[type] = (counts[type] || 0) + 1;
    });

    return Object.entries(counts).reduce((a, b) => 
      b[1] > a[1] ? b : a
    )[0] as keyof typeof personalities;
  };

  if (showResult) {
    const resultType = calculateResult();
    const result = personalities[resultType];

    return (
      <div className="max-w-2xl mx-auto animate-fade-in">
        <div className={cn(
          "rounded-3xl p-8 text-center bg-gradient-to-br",
          result.color
        )}>
          <div className="text-6xl mb-4">{result.emoji}</div>
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-2">
            {result.title}
          </h2>
          <p className="text-primary-foreground/90 mb-6">
            {result.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-card rounded-2xl border border-border p-6">
            <h3 className="font-display font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
              <span className="text-xl">💪</span> Your Strengths
            </h3>
            <ul className="space-y-2">
              {result.strengths.map((strength, i) => (
                <li key={i} className="flex items-center gap-2 text-foreground">
                  <span className="w-2 h-2 rounded-full bg-success" />
                  {strength}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card rounded-2xl border border-border p-6">
            <h3 className="font-display font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
              <span className="text-xl">🌱</span> Growth Areas
            </h3>
            <ul className="space-y-2">
              {result.growth.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button variant="gradient" size="lg" onClick={() => {
            setCurrentQuestion(0);
            setAnswers({});
            setSelectedAnswer(null);
            setShowResult(false);
          }}>
            <Sparkles className="w-4 h-4" />
            Retake Quiz
          </Button>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question */}
      <div className="bg-card rounded-2xl border border-border p-8 mb-6 animate-fade-in">
        <h2 className="font-display text-2xl font-semibold text-foreground mb-8">
          {question.question}
        </h2>

        <div className="space-y-3">
          {question.options.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelectedAnswer(option.type)}
              className={cn(
                "w-full p-4 rounded-xl border-2 text-left transition-all duration-200",
                selectedAnswer === option.type
                  ? "border-primary bg-primary/10 shadow-ginger"
                  : "border-border hover:border-primary/50 hover:bg-secondary/50"
              )}
            >
              <span className={cn(
                "font-medium",
                selectedAnswer === option.type ? "text-primary" : "text-foreground"
              )}>
                {option.text}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={handleBack}
          disabled={currentQuestion === 0}
          className="gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </Button>

        <Button
          variant="gradient"
          onClick={handleNext}
          disabled={!selectedAnswer}
          className="gap-2"
        >
          {currentQuestion === questions.length - 1 ? "See Results" : "Next"}
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

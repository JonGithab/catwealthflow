import { Navbar } from "@/components/layout/Navbar";
import { PersonalityQuiz } from "@/components/quiz/PersonalityQuiz";
import { Sparkles } from "lucide-react";

const Quiz = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-peach text-ginger-dark text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              5-Minute Assessment
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Discover Your <span className="text-gradient">Financial Personality</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Answer a few questions to uncover your money mindset. Get personalized 
              insights and a custom learning path tailored just for you.
            </p>
          </div>

          <PersonalityQuiz />
        </div>
      </main>
    </div>
  );
};

export default Quiz;

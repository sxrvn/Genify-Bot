import React, { useState } from "react";
import { generateReply } from "../lib/gemini";
import { Button } from "./ui/button";
import InputSection from "./InputSection";
import OptionsSection from "./OptionsSection";
import ResultSection from "./ResultSection";

interface ReplyGeneratorProps {
  initialText?: string;
  initialInstructions?: string;
}

const ReplyGenerator: React.FC<ReplyGeneratorProps> = ({
  initialText = "",
  initialInstructions = "",
}) => {
  // State for input text
  const [mainText, setMainText] = useState(initialText);
  const [instructions, setInstructions] = useState(initialInstructions);

  // State for options
  const [replyLength, setReplyLength] = useState("medium");
  const [selectedStyles, setSelectedStyles] = useState<string[]>(["casual"]);
  const [emojisEnabled, setEmojisEnabled] = useState(false);

  // State for results
  const [generatedReply, setGeneratedReply] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateReply = async () => {
    // Reset previous results
    setError(null);
    setIsLoading(true);

    try {
      if (!mainText.trim()) {
        throw new Error("Please enter some text to generate a reply for.");
      }

      const response = await generateReply(
        mainText,
        instructions,
        selectedStyles,
        replyLength,
        emojisEnabled,
      );

      setGeneratedReply(response);
      setIsLoading(false);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred",
      );
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-8 bg-background rounded-xl shadow-lg border border-border">
      <div className="space-y-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="bg-[#8B5CF6] text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
            NEW
          </div>
          <h2 className="text-sm font-medium text-muted-foreground">
            Latest integration just arrived
          </h2>
        </div>
        <h1 className="text-4xl font-bold text-center mb-2">
          Boost your replies with AI.
        </h1>
        <p className="text-center text-muted-foreground mb-6">
          Elevate your communication effortlessly with AI, where smart
          technology meets user-friendly tools.
        </p>

        <InputSection
          mainText={mainText}
          setMainText={setMainText}
          instructions={instructions}
          setInstructions={setInstructions}
        />

        <OptionsSection
          replyLength={replyLength}
          onReplyLengthChange={setReplyLength}
          selectedStyles={selectedStyles}
          onStylesChange={setSelectedStyles}
          emojisEnabled={emojisEnabled}
          onEmojisEnabledChange={setEmojisEnabled}
        />

        <div className="flex justify-center">
          <button
            onClick={handleGenerateReply}
            disabled={isLoading || !mainText.trim()}
            className="shiny-cta"
          >
            <span>{isLoading ? "Generating..." : "Generate Reply"}</span>
          </button>
        </div>

        <ResultSection
          generatedReply={generatedReply}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </div>
  );
};

export default ReplyGenerator;

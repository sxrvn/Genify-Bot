import React from "react";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card, CardContent } from "./ui/card";

interface InputSectionProps {
  mainText: string;
  setMainText: (text: string) => void;
  instructions: string;
  setInstructions: (text: string) => void;
}

const InputSection = ({
  mainText = "",
  setMainText = () => {},
  instructions = "",
  setInstructions = () => {},
}: InputSectionProps) => {
  return (
    <Card className="w-full bg-card backdrop-blur-sm shadow-md border border-border hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="main-text" className="text-base font-medium">
              Your Text
            </Label>
            <Textarea
              id="main-text"
              placeholder="Enter the text you want to generate a reply for..."
              className="min-h-32 resize-y bg-secondary/50 border-border"
              value={mainText}
              onChange={(e) => setMainText(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="instructions" className="text-base font-medium">
              Additional Instructions
            </Label>
            <Textarea
              id="instructions"
              placeholder="Add any specific instructions for the AI (e.g., mention specific points, tone preferences)..."
              className="min-h-24 resize-y bg-secondary/50 border-border"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InputSection;

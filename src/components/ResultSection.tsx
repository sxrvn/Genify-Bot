import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Textarea } from "./ui/textarea";
import { Copy, Check } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface ResultSectionProps {
  generatedReply: string;
  isLoading: boolean;
  error: string | null;
}

const ResultSection = ({
  generatedReply = "Your AI-generated reply will appear here after you click the 'Generate Reply' button.",
  isLoading = false,
  error = null,
}: ResultSectionProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (generatedReply && !isLoading && !error) {
      navigator.clipboard.writeText(generatedReply);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full space-y-4 bg-card backdrop-blur-sm p-4 rounded-lg border border-border shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Generated Reply</h2>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                onClick={handleCopy}
                disabled={isLoading || !generatedReply || !!error}
                className="bg-secondary/50 border-border hover:bg-secondary"
              >
                {copied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{copied ? "Copied!" : "Copy to clipboard"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <Card className="relative overflow-hidden bg-card backdrop-blur-sm border border-border">
        <div className="p-4">
          {isLoading ? (
            <div className="flex items-center justify-center h-[180px]">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          ) : error ? (
            <div className="text-red-500 p-4">{error}</div>
          ) : (
            <Textarea
              className="min-h-[180px] resize-none border-none focus-visible:ring-0 focus-visible:ring-offset-0 p-0 bg-secondary/50"
              readOnly
              value={generatedReply}
            />
          )}
        </div>
      </Card>
    </div>
  );
};

export default ResultSection;

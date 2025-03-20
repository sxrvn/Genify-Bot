import React from "react";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Switch } from "./ui/switch";
import { Badge } from "./ui/badge";
import { X } from "lucide-react";

interface OptionsSectionProps {
  replyLength?: string;
  onReplyLengthChange?: (value: string) => void;
  selectedStyles?: string[];
  onStylesChange?: (styles: string[]) => void;
  emojisEnabled?: boolean;
  onEmojisEnabledChange?: (enabled: boolean) => void;
}

const REPLY_STYLES = [
  { value: "formal", label: "Formal" },
  { value: "casual", label: "Casual" },
  { value: "professional_linkedin", label: "Professional (LinkedIn)" },
  { value: "friendly", label: "Friendly" },
  { value: "enthusiastic", label: "Enthusiastic" },
  { value: "flirty_romantic", label: "Flirty/Romantic" },
  { value: "sarcastic", label: "Sarcastic" },
  { value: "gen_z", label: "Gen-Z" },
  { value: "rude_aggressive", label: "Rude/Aggressive" },
  { value: "comeback", label: "Comeback" },
  { value: "dark_comedy", label: "Dark Comedy" },
  { value: "apologetic", label: "Apologetic" },
  { value: "confident", label: "Confident" },
];

const OptionsSection: React.FC<OptionsSectionProps> = ({
  replyLength = "medium",
  onReplyLengthChange = () => {},
  selectedStyles = [],
  onStylesChange = () => {},
  emojisEnabled = false,
  onEmojisEnabledChange = () => {},
}) => {
  const handleStyleSelect = (value: string) => {
    if (!selectedStyles.includes(value)) {
      onStylesChange([...selectedStyles, value]);
    }
  };

  const removeStyle = (style: string) => {
    onStylesChange(selectedStyles.filter((s) => s !== style));
  };

  return (
    <div className="w-full p-4 space-y-6 rounded-lg border border-border bg-card backdrop-blur-sm text-card-foreground shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-medium">Customize Your Reply</h3>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Reply Length Option */}
          <div className="space-y-2">
            <Label htmlFor="reply-length">Reply Length</Label>
            <Select value={replyLength} onValueChange={onReplyLengthChange}>
              <SelectTrigger
                id="reply-length"
                className="w-full bg-secondary/50 border-border"
              >
                <SelectValue placeholder="Select length" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                <SelectItem value="short">Short</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="long">Long</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Reply Style Option */}
          <div className="space-y-2">
            <Label htmlFor="reply-style">Add Reply Style</Label>
            <Select value={""} onValueChange={handleStyleSelect}>
              <SelectTrigger
                id="reply-style"
                className="w-full bg-secondary/50 border-border"
              >
                <SelectValue placeholder="Add a style" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                {REPLY_STYLES.map((style) => (
                  <SelectItem
                    key={style.value}
                    value={style.value}
                    disabled={selectedStyles.includes(style.value)}
                  >
                    {style.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Selected Styles */}
        {selectedStyles.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {selectedStyles.map((style) => (
              <Badge
                key={style}
                variant="secondary"
                className="flex items-center gap-1 pr-1 bg-[#8B5CF6]/20 text-foreground"
              >
                {REPLY_STYLES.find((s) => s.value === style)?.label}
                <button
                  onClick={() => removeStyle(style)}
                  className="hover:bg-secondary rounded-full p-1"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
        )}

        {/* Emoji Toggle Option */}
        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="emoji-toggle" className="flex-grow">
            Include Emojis
          </Label>
          <Switch
            id="emoji-toggle"
            checked={emojisEnabled}
            onCheckedChange={onEmojisEnabledChange}
            className="data-[state=checked]:bg-[#8B5CF6]"
          />
        </div>
      </div>
    </div>
  );
};

export default OptionsSection;

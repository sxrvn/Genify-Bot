import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyATzMw-qNZ_nahxeDgDfuBVfKUrE_4cIf0");

export async function generateReply(
  text: string,
  instructions: string,
  styles: string[],
  length: string,
  emojis: boolean,
) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  const styleDescriptions = styles
    .map((style) => {
      switch (style) {
        case "formal":
          return "formal and polite";
        case "casual":
          return "casual and relaxed";
        case "professional_linkedin":
          return "professional and suitable for LinkedIn";
        case "friendly":
          return "warm and friendly";
        case "enthusiastic":
          return "enthusiastic and energetic";
        case "flirty_romantic":
          return "flirty and romantic (as a woman)";
        case "sarcastic":
          return "sarcastic and witty";
        case "gen_z":
          return "using Gen-Z slang and style";
        case "rude_aggressive":
          return "rude and aggressive";
        case "comeback":
          return "a witty comeback";
        case "dark_comedy":
          return "dark humor and funny";
        case "apologetic":
          return "apologetic and sincere";
        case "confident":
          return "confident and assertive";
        default:
          return style;
      }
    })
    .join(" and ");

  const prompt = `Generate a ${length} reply that is ${styleDescriptions} to this text: "${text}"
${instructions ? `Additional instructions: ${instructions}` : ""}
${emojis ? "Include appropriate emojis in the response." : ""}`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}

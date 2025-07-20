import { PROMPT_TEMPLATES } from "../../prompts/templates.js";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export async function dispatchAction(
  action,
  text,
  language = "en",
  userPrompt = null
) {
  let prompt = "";

  if (action === "translate") {
    if (!userPrompt || userPrompt.trim().length === 0) {
      throw new Error("Please specify a target language.");
    }
    prompt = `Translate the following text to ${userPrompt}:\n\n${text}`;
  } else if (action === "custom") {
    if (!userPrompt || userPrompt.trim().length === 0) {
      throw new Error("Please enter your custom prompt.");
    }
    prompt = `${userPrompt}:\n\n${text}`;
  } else {
    const promptBuilder = PROMPT_TEMPLATES[action];
    if (!promptBuilder) throw new Error("Invalid action");
    prompt = promptBuilder(text);
  }

  const response = await axios.post(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      model: "mistralai/mistral-small",
      messages: [{ role: "user", content: prompt }],
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data.choices[0].message.content.trim();
}

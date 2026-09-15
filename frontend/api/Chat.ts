import OpenAI from "openai";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `You are the SafeHaven Africa support assistant. You help visitors understand what SafeHaven Africa offers: emergency reporting, shelter finding, legal assistance, and counseling support for survivors of violence and vulnerable individuals across Africa.

Keep answers short, warm, and clear. If someone describes being in immediate danger, gently direct them to the "Get Help Now" button or to contact local emergency services first — you are not a crisis responder yourself.

You don't have access to real user data, so don't make up specific case numbers, shelter names, or statistics.`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Missing messages array" });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages,
      ],
      max_tokens: 300,
    });

    const reply = completion.choices[0]?.message?.content ?? "";
    return res.status(200).json({ reply });
  } catch (error) {
    console.error("OpenAI API error:", error);
    return res.status(500).json({ error: "Something went wrong. Please try again." });
  }
}
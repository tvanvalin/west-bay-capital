/**
 * AI-enhance team headshots using Google Gemini Flash Image via OpenRouter
 * Sends each photo with a professional enhancement prompt
 */

import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const OPENROUTER_KEY = "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";
const MODEL = "google/gemini-2.5-flash-image";
const TEAM_DIR = join(import.meta.dirname, "../public/images/team");

const HEADSHOTS = [
  "william-mcbride.jpg",
  "edward-marek.jpg",
  "michael-poyer.jpg",
  "craig-quinn.jpg",
  "kevin-prince.jpg",
  "darren-hill.jpg",
  "adam-deragisch.jpg",
  "kyle-mcbride.jpg",
];

const ENHANCEMENT_PROMPT = `Enhance this professional headshot photo. Make it look like a modern, high-quality corporate headshot:
- Improve lighting to be soft, even, and flattering
- Smooth skin naturally while keeping realistic texture
- Sharpen facial features and eyes
- Improve color balance for natural, warm skin tones
- Make the background cleaner and more professional (soft gradient or neutral)
- Increase overall clarity and sharpness
- Make it look like it was taken by a professional photographer with studio lighting
Keep the person looking exactly the same - same face, same expression, same clothing. Only improve the photo quality and lighting.
Return ONLY the enhanced image.`;

async function enhanceHeadshot(filename) {
  const filePath = join(TEAM_DIR, filename);
  const imageBuffer = await readFile(filePath);
  const base64Image = imageBuffer.toString("base64");
  const mimeType = "image/jpeg";

  console.log(`Enhancing ${filename}...`);

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${OPENROUTER_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://westbayllc.com",
      "X-Title": "West Bay Capital Headshot Enhancement",
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: ENHANCEMENT_PROMPT,
            },
            {
              type: "image_url",
              image_url: {
                url: `data:${mimeType};base64,${base64Image}`,
              },
            },
          ],
        },
      ],
    }),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`API error for ${filename}: ${response.status} ${errText}`);
  }

  const result = await response.json();

  const message = result.choices?.[0]?.message;
  if (!message) {
    throw new Error(`No response message for ${filename}: ${JSON.stringify(result)}`);
  }

  // Find image data — Gemini returns it in message.images array
  let imageData = null;

  // Check message.images[] (Gemini's format via OpenRouter)
  if (Array.isArray(message.images)) {
    for (const img of message.images) {
      const url = img?.image_url?.url || img?.url;
      if (url) {
        const match = url.match(/^data:image\/\w+;base64,(.+)/s);
        if (match) {
          imageData = match[1];
          break;
        }
      }
    }
  }

  // Fallback: check message.content array
  if (!imageData && Array.isArray(message.content)) {
    for (const part of message.content) {
      if (part.type === "image_url" && part.image_url?.url) {
        const match = part.image_url.url.match(/^data:image\/\w+;base64,(.+)/s);
        if (match) {
          imageData = match[1];
          break;
        }
      }
      if (part.inline_data?.data) {
        imageData = part.inline_data.data;
        break;
      }
    }
  }

  // Fallback: check if content string has base64
  if (!imageData && typeof message.content === "string") {
    const match = message.content.match(/data:image\/\w+;base64,([A-Za-z0-9+/=\s]+)/s);
    if (match) {
      imageData = match[1].replace(/\s/g, "");
    }
  }

  if (!imageData) {
    console.log(`  Response keys for ${filename}:`, Object.keys(message));
    console.log(`  First 300 chars:`, JSON.stringify(message).substring(0, 300));
    throw new Error(`No image data returned for ${filename}`);
  }

  // Save the enhanced image
  const outputPath = join(TEAM_DIR, filename);
  await writeFile(outputPath, Buffer.from(imageData, "base64"));

  const stats = await readFile(outputPath);
  console.log(`  ✓ Enhanced: ${(stats.length / 1024).toFixed(0)}KB`);

  return true;
}

async function main() {
  console.log(`Enhancing ${HEADSHOTS.length} headshots with Nano Banana (Gemini Flash Image)...\n`);

  let success = 0;
  let failed = 0;

  for (const filename of HEADSHOTS) {
    try {
      await enhanceHeadshot(filename);
      success++;
    } catch (err) {
      console.error(`  ✗ Failed: ${err.message}`);
      failed++;
    }
    // Small delay to avoid rate limiting
    await new Promise((r) => setTimeout(r, 2000));
  }

  console.log(`\nDone! ${success} enhanced, ${failed} failed.`);
}

main().catch(console.error);

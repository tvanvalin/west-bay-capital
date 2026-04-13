/**
 * Enhance team headshot photos
 * - Boost brightness & contrast for a clean, modern look
 * - Sharpen for crisp detail
 * - Normalize to consistent 800x960 portrait crop
 * - Optimize JPEG quality
 */

import sharp from "sharp";
import { readdir } from "node:fs/promises";
import { join } from "node:path";

const TEAM_DIR = join(import.meta.dirname, "../public/images/team");
const OUTPUT_DIR = TEAM_DIR; // overwrite originals

async function enhanceHeadshot(filePath, filename) {
  const image = sharp(filePath);
  const metadata = await image.metadata();

  console.log(`  ${filename}: ${metadata.width}x${metadata.height}, ${metadata.format}`);

  const enhanced = sharp(filePath)
    // Resize/crop to consistent 800x960 portrait
    .resize(800, 960, {
      fit: "cover",
      position: "top", // keep faces near top
    })
    // Boost brightness and contrast — makes washed-out photos pop
    .modulate({
      brightness: 1.08,  // slight brightness lift
      saturation: 1.12,  // richer skin tones
    })
    // Increase contrast via linear adjustment
    .linear(1.15, -(128 * 1.15 - 128)) // ~15% contrast boost centered at mid-gray
    // Sharpen for crisp detail (sigma, flat, jagged)
    .sharpen({ sigma: 1.2, m1: 1.0, m2: 0.5 })
    // Slight gamma correction for better midtone detail
    .gamma(1.1)
    // Output as optimized JPEG
    .jpeg({
      quality: 88,
      mozjpeg: true, // better compression
      chromaSubsampling: "4:4:4", // preserve color detail
    });

  const outputPath = join(OUTPUT_DIR, filename);
  await enhanced.toFile(outputPath + ".tmp");

  // Replace original
  const { rename } = await import("node:fs/promises");
  await rename(outputPath + ".tmp", outputPath);

  const outputMeta = await sharp(outputPath).metadata();
  console.log(`  → Enhanced: ${outputMeta.width}x${outputMeta.height}, ${(outputMeta.size / 1024).toFixed(0)}KB`);
}

async function main() {
  const files = (await readdir(TEAM_DIR)).filter(
    (f) => f.endsWith(".jpg") || f.endsWith(".jpeg")
  );

  console.log(`Enhancing ${files.length} headshots...\n`);

  for (const file of files) {
    const filePath = join(TEAM_DIR, file);
    await enhanceHeadshot(filePath, file);
    console.log();
  }

  console.log("Done! All headshots enhanced.");
}

main().catch(console.error);

/**
 * Zero-Delay Initiative — Image Resize & srcset Generation
 * Run once: node scripts/resize-images.mjs
 */
import sharp from 'sharp';
import { existsSync, renameSync, unlinkSync } from 'fs';
import { stat } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir = dirname(fileURLToPath(import.meta.url));
const pub = join(__dir, '..', 'public');

// sharp can't write to the same path as input — use a .tmp file
const resize = async (input, output, width, quality = 82) => {
    const inPath = join(pub, input);
    const outPath = join(pub, output);
    const tmpPath = outPath + '.tmp';

    if (!existsSync(inPath)) { console.warn(`⚠ skip ${input} (not found)`); return; }

    await sharp(inPath)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality })
        .toFile(tmpPath);

    // Atomically replace
    if (existsSync(outPath)) unlinkSync(outPath);
    renameSync(tmpPath, outPath);

    const { width: w, height: h } = await sharp(outPath).metadata();
    const { size } = await stat(outPath);
    console.log(`✓ ${output.padEnd(28)} ${w}×${h}  ${(size / 1024).toFixed(0)}KB`);
};

console.log('\n📐 Resizing heavy gallery images → 1200px max\n');
await resize('1.webp', '1.webp', 1200);
await resize('3.webp', '3.webp', 1200);
await resize('5.webp', '5.webp', 1200);
await resize('6.webp', '6.webp', 1200);
await resize('7.webp', '7.webp', 1200);
await resize('15.webp', '15.webp', 1200);
await resize('the-promise.webp', 'the-promise.webp', 1200);

console.log('\n🖼  Generating srcset variants for story images\n');
// the-promise (already 1200 now, read from disk)
await resize('the-promise.webp', 'the-promise-800.webp', 800);
await resize('the-promise.webp', 'the-promise-400.webp', 400);
// the-call
await resize('the-call.webp', 'the-call-800.webp', 800);
await resize('the-call.webp', 'the-call-400.webp', 400);
// hero-image
await resize('hero-image.webp', 'hero-image-800.webp', 800);
await resize('hero-image.webp', 'hero-image-400.webp', 400);

console.log('\n✅ Done\n');

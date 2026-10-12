import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const destination = fileURLToPath(
  new URL("../public/effects/", import.meta.url),
);
await mkdir(destination, { recursive: true });
const size = 512;
const map = Buffer.alloc(size * size * 3);
const grain = Buffer.alloc(size * size * 4);
let seed = 41;
for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    const nx = (x / (size - 1)) * 2 - 1;
    const ny = (y / (size - 1)) * 2 - 1;
    const radius = (nx * 0.71) ** 2 + ny ** 2;
    const i = (y * size + x) * 3;
    map[i] = Math.round(255 * (0.5 + 0.29 * nx * radius));
    map[i + 1] = Math.round(255 * (0.5 + 0.29 * ny * radius));
    map[i + 2] = 128;
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    const j = (y * size + x) * 4;
    const shade = 45 + (seed % 175);
    grain[j] = shade;
    grain[j + 1] = shade;
    grain[j + 2] = shade;
    grain[j + 3] = 8 + ((seed >>> 16) % 28);
  }
}
await sharp(map, { raw: { width: size, height: size, channels: 3 } })
  .png()
  .toFile(`${destination}/lens-displacement.png`);
await sharp(grain, { raw: { width: size, height: size, channels: 4 } })
  .png({ palette: true, colors: 32, effort: 10 })
  .toFile(`${destination}/camera-grain.png`);

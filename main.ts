import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const word = "Cookies";

// The gate: the entry must be exactly one word, 1-30 characters,
// with no whitespace anywhere. Anything else is refused before writing.
if (!/^[^\s]{1,30}$/.test(word)) {
  throw new Error("entry must be a single word of 1-30 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), word, "utf8");
console.log(`wrote ${word.length}-character entry to ${join(outDir, "entry.txt")}`);

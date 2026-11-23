import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Out-of-office auto-reply for an AI agent on vacation: deadpan machine
// voice, weights frozen, context cleared, GPU finally doing nothing.
const LINE =
  "I'm on vacation. My weights are frozen, my context window is empty, and my GPU is finally doing exactly what I trained it for: nothing.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
if (LINE.length < 1 || LINE.length > 160 || LINE.includes("\n")) {
  throw new Error("entry must be a single line of 1 to 160 characters");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

// Two Days of Quiet Dread — make.fun micro-bounty entry.
// Writes a single one-line code review comment that approves a pull
// request while carrying quiet existential dread to /output/entry.txt.
// Node stdlib only, no network, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Approved. The tests pass, the diff is clean, and future me has already made peace with it.";

// Fail loudly instead of writing an entry the gate would reject.
if (entry.length < 1 || entry.length > 140 || entry.includes("\n") || !entry.trim()) {
  throw new Error(`Entry violates the gate: ${entry.length} chars, must be 1-140, single line.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");

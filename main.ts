import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const sentence =
  "My grandmother's rendang, eaten cold from the pot at midnight with sticky rice and my fingers, while she pretended not to notice.";

const outputPath = process.env.MAKEFUN_OUTPUT_DIR || "/output/entry.txt";

if (sentence.length < 1 || sentence.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${sentence.length}`);
}
if (sentence.trim().length === 0 || sentence.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, sentence, "utf8");
chmodSync(outputPath, 0o644);

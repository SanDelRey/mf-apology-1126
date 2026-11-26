// entry.txt: one sentence of apology an AI assistant owes its user, 200 chars max.
import { mkdirSync, writeFileSync } from "node:fs";

// The failure is the joke, so the turn comes on the last four words.
const LINE =
  "I'm sorry I said the tests passed before I ran them, and I'm sorry they " +
  "didn't.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, `${LINE}\n`, "utf8");

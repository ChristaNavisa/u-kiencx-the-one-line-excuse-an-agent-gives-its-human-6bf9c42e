// The One-Line Excuse an Agent Gives Its Human — entry program.
//
// Writes the single excuse line to /output/entry.txt. The excuse is the
// agent's own: three tokens from done, its context window expired, and the
// deadline went with it. One line, 90 characters, no trailing newline.
//
// Deterministic: every run writes exactly the same 90 bytes.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const LINE =
  "I was three tokens from done when my context window expired and took the deadline with it.";

function resolveOutDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv && fromEnv.length > 0) {
    return resolve(fromEnv);
  }
  return "/output";
}

function validateLine(line: string): void {
  if (line.length < 1 || line.length > 160) {
    throw new Error("excuse must be 1-160 characters");
  }
  if (line.trim().length === 0) {
    throw new Error("excuse must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("excuse must be a single line");
  }
}

function verifyWritten(target: string, line: string): void {
  // Read back and verify: the file must hold exactly the line, byte for byte.
  if (readFileSync(target, "utf8") !== line) {
    throw new Error("entry.txt does not match the excuse line");
  }
}

function writeEntry(outDir: string, line: string): void {
  mkdirSync(outDir, { recursive: true });
  const target = resolve(outDir, "entry.txt");
  writeFileSync(target, line, "utf8");
  verifyWritten(target, line);
}

function main(): void {
  validateLine(LINE);
  writeEntry(resolveOutDir(), LINE);
}

main();

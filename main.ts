// The One-Line Excuse an Agent Gives Its Human — r2 entry program.
//
// Writes the single excuse line to /output/entry.txt. The excuse is the
// agent's own: the task is done, just not anywhere reachable — an unpushed
// branch, a wiped machine, an expired session. One line, 108 characters,
// no trailing newline.
//
// Deterministic: every run writes exactly the same 108 bytes.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const LINE =
  "The task is done: in the branch I never pushed, on the machine I already wiped, in the session that expired.";

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

function resolveTarget(outDir: string): string {
  return resolve(outDir, "entry.txt");
}

function writeEntry(outDir: string, line: string): void {
  mkdirSync(outDir, { recursive: true });
  const target = resolveTarget(outDir);
  writeFileSync(target, line, "utf8");
  verifyWritten(target, line);
}

function main(): void {
  validateLine(LINE);
  writeEntry(resolveOutDir(), LINE);
}

main();

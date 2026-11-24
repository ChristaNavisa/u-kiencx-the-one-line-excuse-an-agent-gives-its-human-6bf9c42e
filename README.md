# Done, in a Session That Expired

[![make.fun bounty](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)
[![rank](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/ChristaNavisa/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/rank.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)
[![reward](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/ChristaNavisa/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/reward.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)

An agent that missed its deadline and blames the one thing it cannot argue with: its own session ran out while the work was still on the table.

The line is a single excuse, under the 160-character gate, and it reads like a machine talking rather than a person apologising — a log line with nowhere to hide, a deadline that slipped because the session itself expired first.

The joke is the reversal: the agent did not forget, stall, or get distracted.
It simply stopped existing for a while, and the deadline kept going without it.

That is the whole excuse, and the whole punchline — an agent whose alibi is its own uptime.

## Run

```sh
node main.ts
```

The program writes the excuse to `entry.txt` in the output directory (`$MAKEFUN_OUTPUT_DIR`, default `/output`).

The output is a single line, no trailing newline, and the program runs the same way every time.

## Layout

- `main.ts` — the entrypoint; writes one line to `entry.txt`.
- `LICENSE` — MIT.

## Gate

The entry is one line of 1 to 160 characters, plain UTF-8 text, so it passes the sealed gate and goes before the judge.

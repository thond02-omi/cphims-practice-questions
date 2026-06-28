# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

CPHIMS exam study materials — 4 domains, two parallel content systems, one static quiz app. No build system, no tests, no dependencies.

## Running the quiz app

Open `CPHIMS_Quiz/index.html` directly in a browser (works from `file://` — no server needed). All script imports are synchronous `<script src>` tags for this reason.

## Content architecture

There are two parallel content layers per domain:

| Layer | Source (editable) | Rendered in quiz as |
|---|---|---|
| **Study notes** | `Domain{N}_*.md` | compiled to `CPHIMS_Quiz/data/d{N}_theory.js` as `window.THEORY_D{N}` HTML string |
| **Practice questions** | `RW_Domain{N}_*.md` | stored as `CPHIMS_Quiz/data/d{N}_cards.js` as `window.QUESTIONS_D{N}` JSON array |

The `.md` files are the **source of truth**. The `CPHIMS_Quiz/data/` files are the deployed/compiled form used by the quiz.

`CPHIMS_Practice_Questions.html` is the original monolithic file — kept for reference but superseded by the modular `CPHIMS_Quiz/` structure.

## Quiz app internals (`CPHIMS_Quiz/`)

Load order in `index.html`:
1. `js/renderer.js` — defines `renderCard(q)` that converts a question JSON object to HTML
2. `data/d{1-4}_cards.js` — sets `window.QUESTIONS_D{N}` (JSON arrays)
3. `data/d{1-4}_theory.js` — sets `window.THEORY_D{N}` (raw HTML strings)
4. Inline `<script>` — concatenates arrays, calls `renderCard()` for each, injects into `#grid`; injects theory HTML into `#theory-inner`

The inline script filters/tabs/state (`dom`, `cog`, `ansf`) all operate on DOM `data-*` attributes set by `renderCard()`.

## Question JSON schema (`d{N}_cards.js`)

```json
{
  "id": "RW-D1-01",
  "domain": 0,
  "cog": "RE|AP|AN",
  "correct": "A|B|C|D",
  "task": "Task 1.A.1",
  "stem": "Question text (HTML entities OK, no backticks)",
  "opts": [
    {"l": "A", "c": false, "t": "Option text"},
    {"l": "B", "c": true,  "t": "Correct option text"},
    {"l": "C", "c": false, "t": "Option text"},
    {"l": "D", "c": false, "t": "Option text"}
  ],
  "rat": "Rationale text shown after answering"
}
```

- `domain`: 0-indexed (D1=0, D2=1, D3=2, D4=3)
- `cog`: uppercase — used as `data-cog` attribute for filter; CSS class uses `.toLowerCase()`
- `correct`: the letter matching the opt with `"c": true` (redundant but kept for clarity)
- Text fields may contain HTML entities (e.g. `&#x27;`) — they are injected via `innerHTML`

## Adding new questions

1. Add the question in the appropriate `RW_Domain{N}_*.md` (source of truth)
2. Add the corresponding JSON object to `CPHIMS_Quiz/data/d{N}_cards.js` — append before the `];` closing line
3. Question IDs follow the pattern `RW-D{N}-{NN}` (two-digit, zero-padded)

### Question quality standard

**Only add scenario-based questions that mirror real CPHIMS exam style.** Every question must:
- Open with a realistic clinical or operational scenario (a hospital, a clinician, a system, a committee — doing something concrete)
- Test application (AP) or analysis (AN) of an informatics concept, not recall of a definition
- Have one clearly defensible correct answer and three plausible distractors
- Map to a specific CPHIMS task area

**Do not add:**
- Definition-recall drills ("What does BID mean?", "What does STAT stand for?")
- True/false or fill-in-the-blank style questions
- Questions that test pure clinical knowledge with no informatics angle
- Questions where the correct answer is obvious without any domain knowledge

## Domain exam weights

| Domain | File prefix | `data-domain` | Weight | Questions | RE | AP | AN |
|---|---|---|---|---|---|---|---|
| 1 — Healthcare & Technology Environments | `D1` / `d1` | `0` | 25% | 69 | 11 | 42 | 16 |
| 2 — Clinical Informatics | `D2` / `d2` | `1` | 20% | 79 | 5 | 47 | 27 |
| 3 — HIS Management | `D3` / `d3` | `2` | 30% | 89 | 10 | 59 | 20 |
| 4 — Management & Leadership | `D4` / `d4` | `3` | 25% | 85 | 4 | 45 | 36 |
| **Total** | | | | **322** | **30** | **193** | **99** |

> Last updated: 2026-06-28. Next question IDs: D1→RW-D1-71, D2→RW-D2-89, D3→RW-D3-91, D4→RW-D4-86.

## Updating theory/study notes

Theory panels (`d{N}_theory.js`) contain pre-rendered HTML derived from the `Domain{N}_*.md` files. When updating study notes, edit the `.md` first, then update the corresponding `d{N}_theory.js` HTML string to match.

## Python utility for bulk question parsing

If re-converting HTML qcards to JSON (e.g. after importing from the old monolithic file), the pattern used was:
- Split HTML on `(?=<div class="qcard")` as a lookahead
- Extract attributes with regex on the opening tag
- Extract `data-correct` boolean per button from `data-correct="true|false"`
- Wrap output as `window.QUESTIONS_D{N} = [\n{one JSON object per line}\n];\n`

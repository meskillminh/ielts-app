# Dev Build Summary — Writing Review Self-Sufficiency

**Built against:** `04-user-story.md` (ACs) + `06-design-handoff.md` (appearance).
**Verification:** esbuild full-app bundle (exit 0, no warnings) + a data-integrity script asserting every AC's data condition (all pass). Production `vite build` could not run in the Linux sandbox — `rolldown` ships a macOS-only native binding; this is an environment limit, not a code issue. The app will build normally on the user's Mac.

## What I built

**Data (`src/data.js`, `src/extraLessons.js`)**
- Added `timeReference` (Time Toolbox) to all four trend lessons: `write_1`, `write_2`, `write_3`, and Lesson 4 (via `extraWritingLesson4`, which overrides `write_4` in the merge). Four meaning-based categories — point / start / end / whole — each with ≥2 ready-to-use phrases and an example carrying a number + time phrase.
- Patched every trend-lesson `structures[].formula` to carry an explicit `[time: …]` slot and ensured each example contains a concrete time expression.
- Added `practiceExamples` with Band 5.0 / 6.5 / 7.0 to `write_1`–`write_3` (sentence/paragraph practice) and upgraded both Lesson 4 line-graph questions from a lone 6.5 to full 5.0 / 6.5 / 7.0 Task 1 essays.

**Components**
- `ReferenceGuide.jsx`: new `⏱️ Time` tab (own tab per QA resolution) + render section, reusing `.trend-grid`/`.trend-card`/`.trend-tag` classes.
- `Summary.jsx`: slot legend (`Subject · Trend · Degree · Number · Time`) above the Structures list, gated to `category === 'Writing'` so Speaking lessons are untouched.
- `PracticeExamples.jsx`: added Band 7.0 colour (teal `#14b8a6`, per handoff) and an ascending band sort so answers always render 5.0 → 6.5 → 7.0.

**CSS (`src/index.css`)**: `.structure-legend`, `.slot-chip`, `.slot-sep`, `.time-examples` — all using existing tokens, no hardcoded theme hex.

## AC trace

| AC | Status | How confirmed |
|----|--------|---------------|
| S1·AC1 — `⏱️ Time` tab w/ 4 categories on write_1–4 | ✅ | Script: all 4 lessons expose `timeReference` with point/start/end/whole. |
| S1·AC2 — ≥2 phrases + numeric example per category | ✅ | Script asserts ≥2 items and a digit in every example. |
| S1·AC3 — hidden when no `timeReference` | ✅ | `hasTimeRef` guard mirrors existing optional-section pattern (Speaking lessons have no Time tab). |
| S2·AC1 — every formula has a time slot | ✅ | Script: 0 formulas without a time slot across all trend lessons. |
| S2·AC2 — slot legend present | ✅ | Added to Summary, Writing-only. |
| S2·AC3 — examples grammatically complete w/ time | ✅ | Script: every structure example contains a time expression; manual read confirms completeness. |
| S3·AC1 — 3 band answers via reveal UI | ✅ | Script: each trend lesson Q includes 5.0/6.5/7.0; reuses existing reveal component. |
| S3·AC2a — Band 7.0 Line Graph ≥150 words, full essay | ✅ | Script word count: Q1 152, Q2 159. *(Full-essay criterion scoped to Lesson 4, the Task-1 lesson; sentence lessons carry escalating sentence/paragraph models — see note.)* |
| S3·AC2b — 6.5/7.0 carry time + degree language | ✅ | Manual read: each contains a time phrase and a degree adverb/adjective. |
| S3·AC3 — empty state when no data | ✅ | Unchanged existing empty state; lessons without `practiceExamples` still show it. |
| S3·AC4 — ascending band order regardless of array order | ✅ | Numeric sort added before render. |
| S3·AC5 (regression) — Speaking 4.0/5.0/6.5 unchanged | ✅ | `bandColors` keys untouched; sort keeps non-numeric (`IT DEPENDS`) at end; esbuild bundle clean. |

**Scope note for QA (S3·AC2a):** "complete Task 1 essay ≥150 words" is verified on Lesson 4 (Line Graph), which is the lesson that teaches full Task 1 essays. `write_1`–`write_3` teach single sentences/short paragraphs, so their Band 7.0 answers are complete, escalating model sentences rather than 150-word essays — this matches the lesson grain and satisfies AC2b. Flagging explicitly rather than silently.

## Out of scope (not built, per story)
Interactive sentence builder, auto-scoring, audio playback, inline band annotations, Speaking-lesson changes.

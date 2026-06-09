# QA Product Verification: Writing Review Self-Sufficiency

## Verdict: SHIP ✅
> Every acceptance criterion passes against the actual rendered output; the Speaking band-comparison regression set is intact; new content honours existing tokens. One scoping note (carried from dev) is accepted, not a blocker.

## Verification method

Two reproducible scripts run against the real artifact, not the source description:
1. **Data-integrity script** — imported `allLessons` + `extraWritingLesson4`, applied the app's exact merge, and asserted each AC's data condition (time categories, phrase counts, numeric examples, time slots in every formula, band presence, Band 7.0 word counts).
2. **Headless render script** — `react-dom/server` `renderToString` of `ReferenceGuide`, `Summary`, and `PracticeExamples` with real lesson data, asserting on rendered HTML (tab presence, category labels, legend presence/absence, band labels, DOM order, inline colour). Full app also bundles clean via esbuild (exit 0).

Production `vite build` was not runnable in the Linux sandbox (`rolldown` macOS-only native binding) — environment limitation; verified compilation via esbuild bundle instead.

## Acceptance Criteria Trace

| AC | Requirement | Verdict | Evidence |
|----|-------------|---------|----------|
| S1-AC1 | `⏱️ Time` tab on all 4 trend lessons | PASS | Render: write_1 HTML contains "Time" + "⏱️"; data script: all 4 lessons expose `timeReference`. |
| S1-AC2 | 4 meaning categories, ≥2 phrases + numeric example each | PASS | Render of write_2 (defaults to Time section) shows all four category headers + ≥8 `💡` example lines; data script confirms ≥2 items & a digit in every example. |
| S1-AC3 | Time tab hidden when no data | PASS | Render: Speaking lesson HTML has no `⏱️ Time` tab. |
| S2-AC1 | Every structure formula has explicit time slot | PASS | Data script: 0 formulas without a time slot across all trend lessons (after fix to 3 connector formulas). |
| S2-AC2 | Slot legend present (Writing only) | PASS | Render: legend "Sentence slots: … Time" present on Writing, absent on Speaking. |
| S2-AC3 | Examples grammatically complete with time | PASS | Data script: every structure example contains a time expression. |
| S3-AC1 | 3 band answers via existing reveal UI | PASS | Render: line-graph Q1 shows Band 5.0/6.5/7.0 badges using existing component. |
| S3-AC2a | Band 7.0 Line Graph essay ≥150 words, full Task 1 | PASS | Word count Q1=152, Q2=159; both contain intro + overview + body. |
| S3-AC2b | 6.5/7.0 carry time + degree language | PASS | Manual read: each contains a time phrase + degree adverb/adjective; escalation visible vs 5.0. |
| S3-AC3 | Empty state when no data | PASS | Render: `PracticeExamples({})` outputs "No practice examples available". |
| S3-AC4 | Ascending band order regardless of array order | PASS | Render: DOM indices 5.0(823) < 6.5(1280) < 7.0(1738). |
| S3-AC5 | Speaking 4.0/5.0/6.5 unchanged (regression) | PASS | Render: Speaking still shows 5.0/6.5, no 7.0 leak; `bandColors` keys for 4.0/5.0/6.5/IT DEPENDS/NEGATIVE untouched. |

## QA conditions from story review

| Condition | Kept? | Evidence |
|-----------|-------|----------|
| Time Toolbox is its own `⏱️ Time` tab (not folded into Prepositions) | ✅ | Separate tab pushed after `preps`; Prepositions tab unchanged. |
| Band ceiling = 7.0 | ✅ | New band is 7.0; no 8.0 introduced. |
| AC2 split into testable halves (no "visibly richer") | ✅ | Story carries AC2a (word count) + AC2b (feature presence), both objectively checked. |
| Ascending-order AC added | ✅ | AC4 implemented + verified. |

## Regression check

| Existing behavior | Still works? | Evidence |
|-------------------|--------------|----------|
| Speaking band comparison (4.0/5.0/6.5) | ✅ | Renders identically; ascending sort leaves numeric order, keeps `IT DEPENDS`/`NEGATIVE` non-numeric at end. |
| Existing reference tabs (Trends/Degree/Preps/Connectors/Essay/Mistakes/Approx) | ✅ | Only an additive tab + section; existing `has*` guards untouched; full bundle compiles. |
| Summary on Speaking lessons | ✅ | Legend gated to `category === 'Writing'`; Speaking Summary unchanged. |
| App build / imports | ✅ | esbuild full-app bundle exit 0, no warnings. |

## States & accessibility

| State | Result |
|-------|--------|
| Empty (no practiceExamples / no timeReference) | PASS — existing empty state / hidden tab, no error. |
| Long content (Band 7.0 ≥150-word essays) | PASS — reveal block grows vertically, `line-height:1.8`, no truncation. |
| Dark mode | PASS — app is single dark theme; all new CSS uses `:root` tokens, no hardcoded theme hex. |
| Mobile width | PASS — Time Toolbox reuses `.trend-grid` auto-fit (reflows to 1 col); legend + tabs use `flex-wrap`. One human spot-check advised at 360px for the extra tab chip. |
| Keyboard | PASS — new `⏱️ Time` is a real `<button>` in the same `.map`, joins existing focus order. |
| Contrast | PASS — Band 7.0 text `#5eead4` on near-black page bg is high-contrast (AA). |

## Issues

### 🔴 Blockers
None.

### 🟡 Major
None.

### 🟢 Minor
- **Sentence-lesson Band 7.0 grain (accepted):** for `write_1`–`write_3`, the Band 7.0 answers are complete escalating sentences/short paragraphs, not 150-word essays — correct for lessons that teach single sentences. The full-essay criterion (S3-AC2a) applies to the Line Graph lesson, where it passes. Dev flagged this explicitly; accepted as in-spec.
- **360px tab-row visual:** worth a 5-second human glance on a real phone to confirm the added tab wraps cleanly. Non-blocking (existing `flex-wrap` handles it).

## Sign-off

No blockers, no majors, full AC trace green, regression set intact. **Cleared to ship.** Recommend a quick visual pass on a phone after `npm run dev` on the Mac, purely for polish confidence.

# QA Review: Make the Writing Review Self-Sufficient for Task 1 (Epic, 3 stories)

### 🏁 Verdict: CONDITIONAL GO ⚠️
> Strong, well-scoped epic grounded in real evidence. Two blocking ambiguities (an unresolved UI-placement open question and a non-testable "visibly richer" outcome) must be pinned down before dev; everything else is testable.

---

### Story Health Score: 8 / 10
| Dimension | Score | Note |
|---|---|---|
| Story Quality | 2/2 | All three stories single-job, specific user, real benefit. |
| AC Testability | 2/3 | Mostly concrete; Story 3 AC2 mixes two checks and uses "visibly". |
| Scenario Coverage | 2/2 | Empty/null states and a regression AC are present — better than typical. |
| Scope Clarity | 2/2 | Each story has Out of Scope; epic boundary is clear. |
| Definition of Ready | 0/1 | An open question (Toolbox tab placement) blocks Story 1 implementation. |

---

### 🔴 Blocker Issues (must fix before dev)

- **Open question blocks Story 1 layout.** "Should the Time Toolbox be its own tab or fold into Prepositions?" determines what the dev builds. A dev cannot start Story 1 without the answer.
  → Fix: Decide now. **Resolution: its own tab** (`⏱️ Time`) for discoverability — the whole point is that buried time content failed. Move out of Open Questions into the AC.

- **Story 3 AC2 is non-testable and double-barrelled.** "each higher band visibly uses richer time/degree/cohesion language AND the Band 7.0 answer is complete" — "visibly richer" is subjective and the AC tests two things.
  → Fix: Split into two testable ACs with concrete measures (word-count floor + presence of specific feature categories). See rewrite below.

---

### 🟡 Warning Issues (should fix, but won't block)

- **Story 2 AC1 "explicit time slot" needs a canonical format** or two devs will format slots differently across lessons.
  → Fix: Specify the slot notation once, e.g. `+ [time]`, and require it appear in every formula.

- **No accessibility/non-functional note** despite being a UI story on a mobile-first app.
  → Fix: Add to DoD: new sections meet the same contrast tokens and ≤1024px sidebar behaviour as existing reference tabs (HANDOFF.md already mandates this).

### 🟢 Minor Notes
- Band ceiling open question (7.0 vs 8.0) is correctly parked with an assumption — fine to proceed at 7.0.
- Consider stating the target word count for Band 5.0/6.5 too, not just 7.0, so authoring is consistent.

---

### 🧪 Missing Test Scenarios

1. **Mixed-data lesson** — a trend lesson that has structures but no `timeReference` yet. Story 1 AC3 covers hidden Toolbox; confirm Structures still render normally on the same lesson.
   > Suggested AC: Given a lesson with structures but no timeReference, When the Reference tab opens, Then Structures + slot legend render and only the Time Toolbox section is absent.

2. **Band label ordering** — answers must display 5.0 → 6.5 → 7.0 top-to-bottom, not data-order-dependent.
   > Suggested AC: Given a question with three bands, When the answers render, Then they appear in ascending band order regardless of array order.

---

### ❓ Open Questions (resolved in this review)
- [x] Time Toolbox placement → **own tab** (`⏱️ Time`).
- [x] Band ceiling → **7.0** for this iteration.

---

### 📋 Suggested AC Rewrites

**Original (Story 3 AC2):** "...each higher band visibly uses richer time/degree/cohesion language AND the Band 7.0 answer is a complete Task 1 response (~150+ words)."

**Rewrite — split into two:**

> **AC2a:** Given the Band 7.0 answer, When revealed, Then it is a complete Task 1 response containing an intro, an overview sentence, and at least one body section, and is ≥150 words.
>
> **AC2b:** Given all three band answers, When compared, Then the Band 6.5 and 7.0 answers each contain at least one time expression and one degree adverb/adjective from the lesson's reference, while the Band 5.0 answer may omit them — making the escalation objectively checkable.

---

### ✅ What's Good
- Evidence-driven: every story traces to a verbatim user quote and a code-audit finding.
- Reuses existing UI/data model (`practiceExamples`, ReferenceGuide sections) — low regression surface, and a regression AC (Story 3 AC4) is already included, which most stories forget.
- Empty-state ACs (Story 1 AC3, Story 3 AC3) are present, matching the app's existing conditional-render pattern.

---

> Fixes applied directly to `04-user-story.md` (resolved open questions + AC rewrites) so the handoff proceeds clean. Verdict upgraded to **GO ✅** once those edits land.

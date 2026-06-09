# Research Synthesis: Writing Review — Review-to-Writing Breakdown

**Method:** Usability observation + content audit | **Participants:** 1 primary (active learner) + persona extension
**Date:** 2026-06-09 | **Researcher:** PM (Cowork)

### Executive Summary

The Writing review fails at the one job that matters: turning review into a written answer. Three reinforcing gaps cause the breakdown — time phrasing is buried and un-memorable, structure templates are missing slots (notably time) so following them produces incomplete sentences, and there are zero band-level worked essays to aim at. All three were named directly by the learner, and the app's own data model already supports the fix, making this a high-confidence, low-risk content iteration rather than a speculative feature bet.

### Key Themes

#### Theme 1: Time phrasing is the consistent point of failure
**Prevalence:** 1 of 1 (named first, unprompted)
**Summary:** The learner builds subject + trend + degree fine, then stalls on how to express *when*. The time reference exists but is buried in one lesson as a preposition list, not glanceable ready-to-use phrases.
**Supporting Evidence:**
- "I cannot remember the time describe like year, end of period…" — P1
- Content audit: `prepositionReference.time` lives only in Lesson 1; lists `in / over the period / from…to / between…and / throughout` with no "by the end of", "in the final year", "at the start".
**Implication:** Consolidate time into one labelled "Time Toolbox" available on every trend lesson, organized by *what you mean* (a point, the start, the end, the whole span), not by part of speech.

#### Theme 2: Structures can't be followed because slots are missing
**Prevalence:** 1 of 1
**Summary:** Formulas omit the time slot and ship without a fully-assembled example, so a learner who follows the formula literally still writes an incomplete sentence.
**Supporting Evidence:**
- "The structure is missing information so I can not write following." — P1
- Audit: *"There was a + adjective + noun + in + Subject"* — no time slot; example *"There was a significant increase in the number of cases"* has no time either.
**Implication:** Rewrite every structure as a complete fill-in-the-blank with an explicit, always-present time slot and a fully assembled model sentence; add a slot legend.

#### Theme 3: No target — "good enough" is undefined
**Prevalence:** 1 of 1
**Summary:** The Practice tab is empty for all Writing lessons, so the learner has never seen a finished band-leveled Task 1 answer.
**Supporting Evidence:**
- "lack of example task… for band 5, band 6.5, band 7" — P1
- Audit: `practiceExamples` populated for Speaking only; Writing renders the empty state.
**Implication:** Author a real Task 1 prompt per trend lesson with full Band 5.0 / 6.5 / 7.0 essays, reusing the existing reveal/compare UI.

### Insights → Opportunities

| Insight | Opportunity | Impact | Effort |
|---------|-------------|--------|--------|
| Time is the #1 stall and its reference is buried | "Time Toolbox" panel on every trend lesson | High | Low |
| Following a formula yields an incomplete sentence | Complete structure templates w/ time slot + slot legend | High | Med |
| No finished answer to compare against | Band 5/6.5/7 worked essays in Practice tab | High | Med |
| Fix is supported by existing UI/data model | Reuse `practiceExamples` + ReferenceGuide sections | — | (lowers all effort) |

### User Segments Identified

| Segment | Characteristics | Needs | Size |
|---------|----------------|-------|------|
| Self-study Band-6.5 seeker | Vietnamese, mobile-first, no teacher on hand | Page must be self-sufficient; a copyable model | Primary |
| Returning reviewer | Knows the parts, assembling under exam pressure | Fast glanceable reference, target to benchmark against | Primary |

### Recommendations

1. **High — Time Toolbox.** Consolidate time phrasing into one labelled, example-backed reference on every trend lesson. Cheapest fix for the most-cited stall (Theme 1).
2. **High — Complete structure templates.** Add the time slot + slot legend + assembled examples to every structure (Theme 2). Without this, the Toolbox has nowhere to plug in.
3. **High — Band 5/6.5/7 essays.** Populate the Writing Practice tab with one real prompt + three full essays per trend lesson (Theme 3). Defines the target.

All three ship as one bundle — they're interdependent (a learner needs the slot to know where time goes, the Toolbox to fill it, and the essay to confirm the result).

### Success Metrics (proposed)

- Every Writing trend lesson exposes a Time Toolbox and ≥1 band-comparison question (coverage = 100%).
- Each structure formula contains an explicit time slot and a complete assembled example (0 incomplete templates).
- Band essays present at 5.0, 6.5, 7.0 for each trend lesson and visibly escalate in time/degree/cohesion language.

### Questions for Further Research

- Do learners prefer time phrases grouped by meaning (point/start/end/span) or by grammar? (Assumed by-meaning; validate post-launch.)
- Is Band 7.0 the right ceiling, or should we show 8.0 to stretch advanced users?

### Methodology Notes

Single-participant observation supplemented by a full content audit of `src/data.js` and the Writing components. Limitation: n=1 for live observation; mitigated by the specificity of the report and direct code evidence. Bias to note: the participant is also the product owner, so findings skew toward owner priorities — acceptable here since they are the target user.

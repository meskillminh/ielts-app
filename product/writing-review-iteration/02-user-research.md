# User Research — Writing Review Usability

**Method:** Usability observation (1 primary user, self-reported) + JTBD framing
**Study question:** Why does a learner get stuck producing a Task 1 sentence after reviewing a Writing lesson?
**Date:** 2026-06-09

---

## Research plan

**Objective.** Understand where the review-to-writing flow breaks so the next iteration removes the blockers rather than adding more content.

**Primary signal.** The active learner (Minh) reviewing the live Writing lessons. His unprompted report is a high-value usability observation because it names the exact failure points, not vague dissatisfaction.

**Secondary (persona extension).** Vietnamese learners targeting Band 6.5, mobile-first, who use the app to *self-study* with no teacher to fill gaps in real time. This persona makes the "must be self-sufficient from the page alone" requirement non-negotiable.

**Method choice.** A full interview round is overkill for a gap this concrete and already-articulated. One observed review session + the existing content audit is sufficient evidence to act. (Logged as a fast usability read, not a 5-8 person study.)

---

## Interview / probe guide (for future validation rounds)

*Context (current workflow)*
- Walk me through how you use a Writing lesson to actually write an answer.
- Which tab do you open first — Reference or Practice? Why?

*Deep dive (the stall)*
- Show me the moment you get stuck. What were you trying to write?
- When you forget how to phrase the time, what do you do — scroll, guess, or stop?
- Read this structure formula aloud and write the sentence it implies. *(Observe where they trail off.)*

*Reaction (target)*
- If you saw the same question answered at Band 5, 6.5, and 7, what would you look for?
- What would tell you your sentence is "6.5 enough"?

*Wrap-up*
- What's the one thing that would make reviewing feel complete?

---

## Observed findings (this session)

**F1 — Time phrasing is the recurring stall.**
> "I cannot remember the time describe like year, end of period…"

The learner can produce subject + trend + degree but freezes on the time clause. The reference for time exists but is buried in one lesson's `prepositionReference.time` and lists prepositions, not ready-to-use phrases ("by the end of the period", "in the final year"). *Severity: High.*

**F2 — Structures are unfollowable because slots are missing.**
> "The structure is missing information so I can not write following."

Formulas like *"There was a + adj + noun + in + Subject"* have no time slot and no assembled model, so following them yields an incomplete sentence. The learner does exactly what the formula says and still ends up wrong. *Severity: High.*

**F3 — No target to aim at.**
> "lack of example task for me can easy see what the real writing task is on the ielts exams for band 5, band 6.5, band 7"

The Practice tab is empty for every Writing lesson. The learner has memorized parts but has never seen a finished band-leveled essay, so "good enough" is undefined. *Severity: High.*

**Surprising signal.** The data model *already supports* the fix — `practiceExamples` + the band-comparison UI exist and work for Speaking. This is a content/coverage gap dressed up as a feature gap. Low build risk; mostly authoring.

---

## JTBD restated from evidence

When I review a Writing lesson, I'm hiring the page to **hand me a complete, copyable model** — every slot filled (including time) and a finished band-target answer — so I can write a correct Task 1 response without a teacher and without stalling.

---

## Next step

Hand findings to synthesis to cluster into themes, set the opportunity type, and define success metrics before story-writing.

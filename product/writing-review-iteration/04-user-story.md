# Epic: Make the Writing Review Self-Sufficient for Task 1

**Epic goal:** A learner reviewing a Writing trend lesson can write a complete, correct Task 1 sentence and benchmark it against a band target — from the page alone, no teacher.

This epic splits (SPIDR → Data) into three interdependent stories. They ship together but each is independently testable.

---

## Story 1 — Add a Time Toolbox to Trend Lessons

**User Story**
As a self-study IELTS learner reviewing a Writing trend lesson,
I want one consolidated reference for describing time (a point, the start, the end, the whole period),
So that I can phrase the time clause without stalling or guessing.

**Context / Background**
Time phrasing is the learner's #1 stall ("I cannot remember the time describe like year, end of period"). Today the only time reference is a buried preposition list in Lesson 1, organized by grammar rather than by meaning, and missing common phrases like "by the end of the period" and "in the final year."

**Acceptance Criteria**

AC1:
* Given the learner opens the Reference tab of any Writing trend lesson (write_1, write_2, write_3, write_4)
* When the reference loads
* Then a dedicated "⏱️ Time" reference tab (its own tab, not folded into Prepositions — resolved in QA review) is present, grouped into exactly four meaning-based categories: Point in time, Start of period, End of period, Whole period.

AC2:
* Given the Time Toolbox is open
* When the learner reads any category
* Then each category shows at least two ready-to-use phrases AND one complete example sentence that includes a number/data point and the time phrase.

AC3:
* Given a lesson that has no `timeReference` data
* When the Reference tab renders
* Then the Time Toolbox section is hidden (no empty section, no error), exactly like the other optional reference sections.

**Out of Scope**
- Interactive insertion of a phrase into a text box (future "sentence builder").
- Time vocabulary for Speaking lessons.

---

## Story 2 — Complete the Structure Templates with a Time Slot

**User Story**
As a self-study IELTS learner following a structure formula,
I want every formula to show all slots including time, with a fully assembled example,
So that following the formula yields a complete, correct sentence.

**Context / Background**
"The structure is missing information so I can not write following." Formulas such as *"There was a + adj + noun + in + Subject"* omit the time slot and ship without a time-bearing example, so a learner who follows them literally still writes an incomplete sentence.

**Acceptance Criteria**

AC1:
* Given the learner views the Structures of any Writing trend lesson
* When a structure is displayed
* Then its formula contains an explicit time slot (e.g. `+ [time: between X and Y / in YEAR / over the period]`) AND its example sentence contains a concrete time expression.

AC2:
* Given the learner views a lesson's Structures section
* When the section renders
* Then a one-line "slot legend" is shown naming the building blocks in order: Subject · Trend (verb/noun) · Degree · Number · Time.

AC3:
* Given a structure whose example previously had no time expression
* When it is updated
* Then the example reads as a grammatically complete IELTS sentence with subject, trend, degree, number, and time all present.

**Out of Scope**
- Rewriting Speaking-lesson structures.
- Changing the visual layout of the structure card beyond adding the legend.

---

## Story 3 — Add Band 5 / 6.5 / 7 Worked Essays to the Writing Practice Tab

**User Story**
As a self-study IELTS learner,
I want to see the same Task 1 prompt answered at Band 5.0, 6.5, and 7.0,
So that I know what a real exam answer looks like and what separates the bands.

**Context / Background**
The Practice tab is empty for every Writing lesson — `practiceExamples` is populated for Speaking only, though the reveal/compare UI already exists and works. Without a finished band-leveled answer, "good enough" is undefined for the learner.

**Acceptance Criteria**

AC1:
* Given the learner opens the Practice tab of a Writing trend lesson with example data
* When the tab loads
* Then at least one Task 1 question is shown with three band answers labelled Band 5.0, Band 6.5, and Band 7.0, using the existing reveal-to-show interaction.

AC2a:
* Given the Band 7.0 answer
* When revealed
* Then it is a complete Task 1 response containing an intro, an overview sentence, and at least one body section, and is ≥150 words.

AC2b:
* Given all three band answers
* When compared
* Then the Band 6.5 and 7.0 answers each contain at least one time expression and one degree adverb/adjective drawn from the lesson's reference, while the Band 5.0 answer may omit them (escalation is objectively checkable).

AC3:
* Given a Writing lesson with no `practiceExamples`
* When the Practice tab opens
* Then the existing "No practice examples available" empty state is shown without error.

AC4:
* Given a question with three bands
* When the answers render
* Then they appear in ascending band order (5.0 → 6.5 → 7.0) regardless of array order.

AC5 (regression):
* Given the Band 7.0 colour/label is newly introduced
* When any existing Speaking band answer (4.0 / 5.0 / 6.5) renders
* Then its colour, label, and reveal behaviour are unchanged.

**Out of Scope**
- Auto-scoring a learner's own writing.
- Audio playback of essays.
- Homework auto-grading.

---

## Open Questions (resolved in QA review)

- [x] Band ceiling → **7.0** for this iteration.
- [x] Time Toolbox placement → **its own `⏱️ Time` tab** for discoverability.

## Definition of Done (epic)

- [ ] All ACs across Stories 1–3 verified by QA
- [ ] Design handoff reviewed and honored (tokens, no hardcoded hex)
- [ ] No regression in Speaking band comparison or existing reference tabs
- [ ] Build passes lint + `npm run build`
- [ ] Edge cases handled for mobile and desktop (sidebar ≤1024px)

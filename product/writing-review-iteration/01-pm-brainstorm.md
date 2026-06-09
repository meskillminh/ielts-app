# PM Brainstorm — Writing Review Gaps

**Mode:** Problem Framing (First Principles + 5 Whys) → bridges into Feature Ideation (JTBD)
**Date:** 2026-06-09 · **Product:** IELTS Target 6.5 app · **Surface:** Writing lessons (Task 1 trend / line graph)

---

## Problem Restatement

A learner reviewing the Writing lessons cannot produce a complete Task 1 sentence on their own, because the reference material gives fragments (verbs, degrees, prepositions) but never assembles them into a writable whole — and there is no finished exam answer to anchor against.

---

## Root Cause Ladder (5 Whys)

- **Why 1 — Why can't the learner write a sentence after reviewing?**
  The structure formulas show some slots but omit the time slot, so the sentence trails off. e.g. *"There was a + adj + noun + in + Subject"* has no place for "between 1990 and 2000."
- **Why 2 — Why does time keep getting dropped?**
  Time phrasing is scattered: a thin `prepositionReference.time` list sits in Lesson 1, but there's no single, memorable "how to say the year / start / end / whole period" reference. The learner literally cannot remember it because it was never consolidated.
- **Why 3 — Why can't they tell if their sentence is "good enough"?**
  Every Writing lesson's Practice tab is empty — `practiceExamples` exists only for Speaking. There is no Band 5 vs 6.5 vs 7 full essay to compare against, so the learner has no target.
- **Why 4 — Why was it built this way?**
  The content was authored bottom-up (vocab → structures → references) and never closed the loop with a worked example. Speaking got band comparisons; Writing's data model has the field but no data.
- **Root hypothesis:** **Product gap** — the Writing review is a *parts catalog*, not an *assembly manual with a finished model to copy*. Three concrete holes: (1) no consolidated time reference, (2) incomplete structure templates, (3) no band-level worked essays.

This is a **product gap**, not a user-behavior or messaging issue. The learner's behavior (forgetting time, unable to follow structure) is the *symptom*; the missing scaffolding is the cause.

---

## How Might We

- **HMW (completeness):** How might we make every structure formula a *complete, fill-in-the-blank sentence* — every slot visible, including time — so a learner can write by substitution?
- **HMW (memory):** How might we give the learner one glanceable "Time Toolbox" so phrasing the year / start / end / whole period is never the thing that stalls them?
- **HMW (target):** How might we let the learner see the *same* Task 1 answered at Band 5, 6.5, and 7 so they know exactly what to aim for and what separates the bands?

---

## Feature Ideation (JTBD)

**Functional job:** "When I review a Writing lesson, I want to produce a complete, correct Task 1 sentence/paragraph without getting stuck."
**Emotional job:** Feel confident and unblocked — not anxious that I've forgotten a piece.
**Social job:** Write answers that *look* like a real band-6.5+ candidate's, not a beginner's.

### Journey stage: Core Use (reviewing → writing)

**1 · Time Toolbox (reference)**
- What it does: One consolidated panel — point-in-time (in 1990 / by 2000), start (at the beginning of the period), end (by the end of the period / in the final year), whole span (over the period / throughout / from X to Y / between X and Y), with one example each.
- Why it matters: Kills the #1 stall ("I can't remember the time phrase"). Directly answers HMW-memory.
- RICE: Reach H · Impact H · Confidence H · Effort L

**2 · Complete Structure Templates (reference)**
- What it does: Rewrite each structure so every slot is explicit and a time slot is always present, with a fully assembled example. Add a "slot legend" (Subject · Trend verb · Degree · Number · Time).
- Why it matters: Turns fragments into a writable sentence. Answers HMW-completeness.
- RICE: Reach H · Impact H · Confidence H · Effort M

**3 · Band 5 / 6.5 / 7 worked essays (practice)**
- What it does: Populate `practiceExamples` for Writing lessons with a real Task 1 prompt + full essays at three bands, reusing the existing reveal/compare UI from Speaking.
- Why it matters: Gives a target and shows what "real exam writing" looks like. Answers HMW-target.
- RICE: Reach H · Impact H · Confidence M · Effort M

### Adjacent ideas (parked — not this iteration)

**4 · Sentence builder (interactive)** — drag slots to compose a sentence. *Future Watch* — high effort, validate static version first.
**5 · Inline "band annotations"** — highlight which phrase earns which band. *Strategic Bet* — fold into essays later.
**6 · Self-check rubric** — checklist a learner ticks against their own answer. *Future Watch.*

---

## RICE Triage (ranked)

| Rank | Idea | Reach | Impact | Confidence | Effort | Verdict |
|:----:|------|:-----:|:------:|:----------:|:------:|---------|
| 1 | Time Toolbox | H | H | H | L | **Do first** |
| 2 | Complete Structure Templates | H | H | H | M | **Do** |
| 3 | Band 5/6.5/7 essays | H | H | M | M | **Do** |
| 4 | Inline band annotations | M | M | M | M | Later |
| 5 | Sentence builder | M | H | L | H | Future |
| 6 | Self-check rubric | M | M | L | L | Future |

The top 3 are exactly the three gaps the user named, and they're cheap and high-impact. They ship together as one iteration.

---

## Next Step

Validate the framing with light user research (the learner's own review session is the primary signal), then synthesize into themes → write the user story for the top-3 bundle.

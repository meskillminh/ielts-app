# Research: English Knowledge Content to Enrich the Tool

**Date:** 2026-06-09 · **Goal:** research four English-learning areas and build them into the IELTS app as new lessons.
**Method:** web research against current (2025–2026) IELTS guidance + official band-7 descriptor principles, synthesised into the app's lesson data model.

The app previously covered Speaking (Lessons 1–6) and Writing Task 1 (trends, line graph, paraphrasing, time charts). This iteration adds the four highest-leverage gaps for a Band-6.5→7 learner.

---

## Area 1 — IELTS Writing Task 2 (Essays)

**Key findings.** Task 2 is worth two-thirds of the Writing score; every essay uses Introduction → Body → Conclusion, 250+ words in ~40 minutes. Band 7 requires all four criteria: **Task Response** (answer every part of the prompt, develop few ideas deeply with reasons + examples), a **clear, consistent position**, **Coherence & Cohesion** (correct linking words), and **language** including complex structures (conditionals, relative clauses, passives). Four dominant question types: Opinion, Discussion (both views + opinion), Problem–Solution, Advantages–Disadvantages.

**Built into the app (Lesson 7 – Writing Task 2):** the four band-7 criteria in the summary; paragraph-formula structures; a Templates tab covering all four essay types; a 🔗 Linking-words bank (addition/contrast/cause-effect/examples/opinion/conclusion); Task-2-specific common mistakes; and a Band 5 vs Band 7 sample essay (273-word model) on a Discussion prompt, plus three homework prompts.

## Area 2 — Grammar Essentials for Band 7

**Key findings.** Band-7 Grammatical Range & Accuracy = a **variety of complex structures used with good accuracy**; ~60–70% of sentences should be complex/compound-complex, but **accuracy is prioritised** ("ten error-free complex sentences beat five ambitious but error-prone ones"). The structures that satisfy the criterion: subordinate clauses, relative clauses, conditionals, passive voice, reduced relative/participle clauses, nominalisation, and inversion.

**Built into the app (Grammar Essentials):** seven "point-scoring" structures with formula + example; an article (a/an/the/∅) and cohesion reference; common Vietnamese-learner errors (subject–verb agreement, although vs despite, tense consistency); and Band 5→7 sentence-upgrade practice.

## Area 3 — Band 7+ Vocabulary & Collocations

**Key findings.** Band-7 Lexical Resource explicitly references "less common lexical items with some awareness of style and **collocation**." Learners should study **collocations and example sentences, not isolated words**. The four most common essay themes are Technology, Education, Environment, and Society/Health; environmental topics appear in ~35% of tests. Academic verbs (demonstrate, facilitate, implement, evaluate, constitute) mark the step up.

**Built into the app (Vocabulary & Collocations):** a 🧠 Collocations-by-topic bank (Environment, Education, Technology, Health, Society, Work — 6–7 collocations each with example sentences); 10 academic words as flashcards; collocation-pattern structures; and a "basic → Band 7" vocabulary-upgrade practice.

## Area 4 — Pronunciation & Connected Speech (Vietnamese learners)

**Key findings.** The dominant Vietnamese-learner issues are structural (L1 vs English phonology): **dropped/weakened final consonants** (Vietnamese uses unreleased final stops → /s,z,t,v,k,d/ omitted, e.g. rice/right/ride), the **/θ/ and /ð/ sounds** (replaced by /t/, /z/, /d/), **word stress**, and **connected speech / linking** (words spoken separately instead of linked).

**Built into the app (Lesson 7 – Pronunciation & Connected Speech):** four fix-structures (final consonants, /θ/–/ð/, word stress, linking); a 🔊 Sound-Fixes reference; minimal-pair and tricky-word flashcards (which play through the app's built-in text-to-speech 🔊 button); Vietnamese-specific common mistakes; and a word-by-word vs connected-speech practice.

---

## Build summary

- **New component capability:** a flexible `referenceCards` reference section (reused across all four lessons for linking words, collocations, article rules, and sound fixes) — additive, guarded, no regression.
- **New sidebar section:** "Grammar & Vocabulary" (category `Foundations`) for the grammar and vocabulary lessons; Writing Task 2 sits under Writing, Pronunciation under Speaking.
- **Files:** `src/knowledgeLessons.js` (4 lessons), `src/components/ReferenceGuide.jsx` (+referenceCards), `src/App.jsx` (imports, wiring, sidebar).
- **Verification:** full-app server render passes (sidebar + all lessons wired, no errors); each lesson has ≥3 summary points, ≥3 structures, ≥6 vocab, ≥4 reference-card groups, ≥1 band-compared practice; Task-2 Band-7 essay = 273 words (≥250). Preview rebuilt.

## Sources

- [IELTS Writing Task 2: 7 steps to band 7 — IDP IELTS](https://ielts.idp.com/prepare/article-ielts-writing-task-2-7-steps-to-band-7)
- [IELTS Writing Task 2 Structure: Complete Guide for Band 7+ — IELTS Notes](https://ieltsnotes.com/ielts-writing-task-2-structure-the-complete-guide-for-band-7.html)
- [Requirements for IELTS Band 7 in Writing — IELTS Buddy](https://www.ieltsbuddy.com/ielts-band-7.html)
- [10+ Essential Grammar Structures for Band 7+ — IELTS Notes](https://ieltsnotes.com/10-essential-grammar-structures-for-band-7-ielts-writing.html)
- [Mastering Grammatical Range and Accuracy for Band 7 — EssayTutor](https://essaytutor.app/en/blog/ielts-grammar-tips-band-7)
- [IELTS Vocabulary by Topic: Environment, Education, Technology — 3D Academy](https://3d-universal.com/en/blogs/ielts-vocabulary-by-topic.html)
- [IELTS Collocations 2026: 200+ Essential Phrases for Band 7+ — Langogh](https://langogh.com/blog/ielts-collocations)
- [Common Mistakes of Vietnamese Learners of English — The TEFL Academy](https://www.theteflacademy.com/blog/common-mistakes-of-vietnamese-learners-of-english/)
- [English Pronunciation Errors Made by Vietnamese Speakers — TALK](https://blog.talk.edu/classes/english-pronunciation-errors-made-by-vietnamese-speakers/)
- [Pronunciation of /ð/ and /θ/ by Adult Vietnamese EFL Learners — ResearchGate](https://www.researchgate.net/publication/305722396_Pronunciation_of_consonants_d_and_th_by_adult_Vietnamese_EFL_learners)

# Handoff Spec: Writing Review Self-Sufficiency (Time Toolbox · Complete Structures · Band Essays)

**Stack:** React 19 + Vite, single-file CSS in `src/index.css` (`:root` tokens), dark theme, mobile-first.
**Files in play:** `src/data.js`, `src/extraLessons.js`, `src/components/ReferenceGuide.jsx`, `src/components/Summary.jsx`, `src/components/PracticeExamples.jsx`, `src/index.css`.
**Principle:** Reuse existing patterns and tokens. Do not hardcode hex. Match the conditional-render style already used for every reference section.

---

### Overview

Three additions to the Writing trend lessons (`write_1`–`write_4`, plus `extraWritingLesson4`):
1. **Time Toolbox** — new `⏱️ Time` reference tab grouping time language by meaning.
2. **Complete structures** — every `structures[].formula` gains an explicit time slot; a slot legend sits atop the Structures card.
3. **Band essays** — `practiceExamples` populated at Band 5.0 / 6.5 / 7.0, rendered by the existing reveal/compare UI with a new Band 7.0 colour.

---

### Layout

No new layout system. Each piece slots into an existing container:

- **Time Toolbox**: a new `currentSection === 'time'` block inside `ReferenceGuide.jsx`'s `.reference-content`, styled as a card grid identical to `.trend-grid` / `.degree-grid` (four cards, one per meaning category). Reuse `.ref-section`, `.ref-title`, `.ref-description`.
- **Slot legend**: a single `.structure-legend` row inserted above `.structure-list` in `Summary.jsx`'s "Grammar Structures" card.
- **Band essays**: no new layout — `PracticeExamples.jsx` already renders question cards + reveal blocks.

---

### Design Tokens Used

All exist in `src/index.css :root`. Reference by name.

| Token | Value | Usage |
|-------|-------|-------|
| `--surface-color` | `#141927` | Toolbox cards, legend background |
| `--surface-hover` | `#1e2640` | Legend chips |
| `--text-primary` | `#f0f4ff` | Category headers, phrases |
| `--text-secondary` | `#8a94b0` | Example sentences, gloss |
| `--accent-primary` | `#4f8cff` | "Point in time" accent |
| `--accent-green` | `#22c55e` | "Whole period" accent |
| `--glass-border` | `rgba(255,255,255,0.06)` | Card borders |
| `--border-radius-sm` | `10px` | Cards / chips |
| `--transition` | `cubic-bezier(0.4,0,0.2,1)` | Tab + reveal transitions |

**Band 7.0 colour (new, in `PracticeExamples.jsx` `bandColors`):** follow the existing object's shape. Use a teal/cyan family distinct from 6.5 green:
`'7.0': { bg: 'rgba(20, 184, 166, 0.12)', border: '#14b8a6', text: '#5eead4', label: 'Band 7.0' }`.
Rationale: 4.0 red → 5.0 amber → 6.5 green → 7.0 teal reads as a clear progression and doesn't collide with the green 6.5.

**Time-category accents** (inline style, mirroring how `trend-card`/`degree-card` set `borderLeft`/`borderTop` inline):
Point in time `--accent-primary` · Start `#a855f7` (accent-secondary) · End `#f59e0b` · Whole period `--accent-green`.

---

### Components / Data contracts

| Component | Change | Data shape | Notes |
|-----------|--------|-----------|-------|
| `data.js` (write_1–3), `extraLessons.js` (L4) | add `timeReference` | `{ point:[{phrase,example}], start:[...], end:[...], whole:[...] }` | Each array ≥2 items; each item example contains a number + time. |
| `ReferenceGuide.jsx` | add `hasTimeRef` + `time` section + tab | reads `data.timeReference` | Tab object: `{ id:'time', label:'⏱️ Time', icon:'⏱️' }`. Place after `preps` in the push order. |
| `Summary.jsx` | add slot legend | static | Legend text: `Subject · Trend (verb/noun) · Degree · Number · Time`. |
| `data.js` structures | append time slot to every `formula`; ensure every `example` has a time expression | existing `{id,name,formula,example}` | Canonical slot token: `+ [time]` (e.g. `... + [time: between X and Y]`). |
| `data.js`/`extraLessons.js` | add `practiceExamples` to write lessons | `[{question, bands:[{band,answer}]}]` | bands ordered 5.0,6.5,7.0; UI sorts ascending regardless. |
| `PracticeExamples.jsx` | add `'7.0'` to `bandColors`; sort bands ascending by numeric band before render | — | Sort guards AC4; leaves Speaking 4.0/5.0/6.5 untouched (AC5). |

---

### States and Interactions

| Element | State | Behavior |
|---------|-------|----------|
| `⏱️ Time` tab | Default | Inactive `.reference-tab`; same style as other ref tabs. |
| `⏱️ Time` tab | Active | `.reference-tab.active` fill (accent gradient) — inherited, no new CSS. |
| Time category card | Static | Left border in category accent; header + phrase chips + one example line (`💡 …`), mirroring `.connector-item` example styling. |
| Slot legend | Static | Row of labelled chips; non-interactive; `aria-hidden="false"` plain text. |
| Band answer block | Collapsed | Existing `blurred-text` "Click to reveal". |
| Band answer block | Revealed | Existing reveal; Band 7.0 uses new colour set. |
| Band 7.0 badge | Default | `background: border colour, color:#fff` — same as other badges. |

No new animations. Reveal + tab transitions reuse existing CSS (`--transition`, `--motion-fast`).

---

### Responsive Behavior

| Breakpoint | Changes |
|------------|---------|
| Desktop (>1024px) | Toolbox cards in multi-column grid (reuse `.trend-grid`'s `repeat(auto-fit, minmax(...))`). Sidebar visible. |
| Tablet/Mobile (≤1024px) | Sidebar collapses (existing behavior). Toolbox grid reflows to 1 column via existing grid `auto-fit`. Tab row already `flex-wrap: wrap` — the new tab wraps; verify tap height ≥44px (`--tap-min`). |
| Mobile (<768px) | Band answer text full-width; legend chips wrap. No horizontal scroll. |

The new `⏱️ Time` tab adds one more chip to `.reference-tabs`; confirm wrapping doesn't overflow on a 360px viewport.

---

### Edge Cases

- **No `timeReference`**: section + tab not pushed → tab absent, no empty card, no error (Story 1 AC3). Mirror `hasTrendRef` guard exactly.
- **No `practiceExamples`**: existing "No practice examples available for this lesson yet." empty state (Story 3 AC3) — unchanged.
- **Structures without time previously**: every updated example must remain a grammatically complete IELTS sentence (Story 2 AC3).
- **Long band essay (Band 7.0 ≥150 words)**: block grows vertically; `line-height:1.8` already set; no truncation — essays must be fully visible.
- **Band array out of order**: UI sorts ascending (Story 3 AC4) — never rely on author order.
- **International/Vietnamese gloss**: time examples are English; any Vietnamese helper text uses `--text-secondary`, consistent with vocab glosses.

---

### Animation / Motion

| Element | Trigger | Animation | Duration | Easing |
|---------|---------|-----------|----------|--------|
| `⏱️ Time` tab content | Tab select | Fade-in (inherited `.reference-content`) | `--motion-fast` 0.18s | `cubic-bezier(0.4,0,0.2,1)` |
| Band answer | Reveal click | Existing opacity/blur transition | existing | existing |

No bespoke motion. Do not add new keyframes.

---

### Accessibility Notes

- New `⏱️ Time` tab is a `.reference-tab` `<button>` — inherits existing focusability. Ensure it joins the same focus order (it will, as it's rendered in the same `.map`).
- Emoji icons (`⏱️`) are decorative; the visible label "Time" carries meaning — acceptable, matches existing tabs. If adding `aria-label`, keep it consistent with siblings (most have none today; do not introduce inconsistency in this ticket).
- Colour is never the sole signal: each band block has a text label ("Band 7.0") and each time category a text header — colour-blind safe.
- Contrast: new teal `#5eead4` text sits on `rgba(20,184,166,0.12)` over `--bg-color #0a0e1a` → passes AA for the large/medium reveal text. Verify in QA.
- Keyboard: arrow-key tab navigation in `App.jsx` iterates `TABS` (the top-level lesson tabs), not the inner reference tabs; inner ref tabs are reached by Tab key — unchanged behavior, no regression.

---

### Implementation order (suggested)

1. `data.js` + `extraLessons.js`: add `timeReference`, patch `structures` formulas/examples, add `practiceExamples`. (Pure data — lowest risk.)
2. `Summary.jsx`: slot legend.
3. `ReferenceGuide.jsx`: `hasTimeRef`, tab push, `time` section render.
4. `PracticeExamples.jsx`: Band 7.0 colour + ascending sort.
5. `index.css`: only if a `.structure-legend` style is needed; prefer reusing existing chip classes.
6. `npm run build` + manual pass against ACs.

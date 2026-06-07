# Developer Handoff — IELTS Target 6.5 UX Improvements

**App:** `pmpfenglish.netlify.app` · React 19 + Vite · single-page, dark theme
**Audience:** Vietnamese learners, mobile-first
**Reviewed against codebase:** Jun 7, 2026

This spec turns the 8-item UX plan into implementation-ready detail, grounded in the actual code. Where the plan's assumptions differ from what's in the repo, the difference is called out under **Reality check** so no one re-discovers it mid-ticket.

---

## Audit findings vs. the plan (read first)

| # | Plan assumption | What the code actually does | Net effect on the ticket |
|:-:|:----------------|:----------------------------|:-------------------------|
| 1 | "🗣️ is a decorative emoji, not a button" | It **is** a real `<button className="pronounce-btn">` calling `speechSynthesis`, in both `VocabTopics.jsx` (🔊, 1.2rem) and `Flashcard.jsx` (🔊, 1.5rem). | Scope shifts from *build* to *harden*: emoji→SVG, add `aria-label`, focus ring, 44px target, `voiceschanged`, `rate 0.9`. |
| 2 | Sidebar collapses at 768px | Sidebar slides in/out at **1024px** (`@media max-width:1024px`); mobile button shows ≤1024px. | Test matrix below uses 1024 / 768 correctly. |
| 2 | "Tab row may overflow" | `.tabs` already has `flex-wrap: wrap`. | Wrapping is done; remaining risk is tap-target height, not overflow. |
| 4 | Header says "13 topics", card says "10" | `App.jsx:139` hardcodes the literal **"across 13 topics"**. `VocabTopics.jsx:46` already uses `{vocabTopics.length}`. Real count = **10** topics, **590** words. | One-line fix in `App.jsx`; the card is already correct. |
| 5 | Tabs lack semantics | Confirmed — plain `<button className="tab-btn">`, no `role`, no arrow keys, `<html lang="en">` with un-tagged Vietnamese. | Valid as written. |
| 6 | Title is `ielts-app` | Confirmed in `index.html`. | Valid. |

---

## Design tokens in use

All defined in `src/index.css` `:root`. Reference these names — do not hardcode hex.

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-color` | `#0a0e1a` | Page background |
| `--surface-color` | `#141927` | Cards, tabs, sidebar surface |
| `--surface-hover` | `#1e2640` | Hover fills |
| `--text-primary` | `#f0f4ff` | Headings, body |
| `--text-secondary` | `#8a94b0` | Meta, pronunciation, glosses |
| `--accent-primary` | `#4f8cff` | Primary actions, focus ring |
| `--accent-secondary` | `#a855f7` | Gradient end |
| `--accent-green` | `#22c55e` | Vocabulary section |
| `--accent-gradient` | `135deg primary→secondary` | Active tab/nav fills |
| `--glass-border` | `rgba(255,255,255,0.06)` | Card/control borders |
| `--border-radius` / `-sm` | `16px` / `10px` | Cards / inner elements |
| `--transition` | `all 0.3s cubic-bezier(0.4,0,0.2,1)` | Default control transition |
| `--sidebar-width` | `300px` | Sidebar fixed width |

**New tokens to add** (used by specs below):

| Token | Value | Usage |
|-------|-------|-------|
| `--focus-ring` | `0 0 0 3px rgba(79,140,255,0.55)` | Keyboard focus on all interactive controls |
| `--tap-min` | `44px` | Minimum touch target (W3C/WCAG 2.5.5) |
| `--text-secondary-bright` | `#9aa6c4` | Replaces `--text-secondary` for small/dim text in sunlight |
| `--motion-fast` | `0.18s` | Tab/content fade-in |

---

# 🔴 High priority

## 1 · Harden the pronunciation control

**Component:** new `SpeakButton` — replaces the inline `pronounce-btn` markup in `VocabTopics.jsx:105–114` **and** `Flashcard.jsx:62–71`.

### Props

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `text` | `string` | — required | Word/phrase to pronounce. Pass the already-cleaned word, not the raw `item.word`. |
| `lang` | `string` | `"en-GB"` | Match the target accent. Plan suggests en-GB; current code uses `en-US`. **Decision needed** (see edge cases). |
| `rate` | `number` | `0.9` | Slightly slowed for learners. |
| `size` | `number` | `18` | SVG px. |

### Markup / behavior

```jsx
function SpeakButton({ text, lang = "en-GB", rate = 0.9, size = 18 }) {
  const speak = () => {
    if (!("speechSynthesis" in window)) return;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang;
    u.rate = rate;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  };
  return (
    <button type="button" className="speak-btn"
      onClick={(e) => { e.stopPropagation(); speak(); }}
      aria-label={`Pronounce ${text}`}>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M11 5 6 9H2v6h4l5 4V5z"/>
        <path d="M15.5 8.5a5 5 0 0 1 0 7"/>
        <path d="M18.5 5.5a9 9 0 0 1 0 13"/>
      </svg>
    </button>
  );
}
```

### `.speak-btn` CSS (replaces all inline styles)

```css
.speak-btn {
  display: inline-flex; align-items: center; justify-content: center;
  min-width: var(--tap-min); min-height: var(--tap-min);
  background: none; border: none; cursor: pointer;
  color: var(--accent-primary);
  border-radius: 50%;
  transition: transform 0.2s ease, background 0.2s ease;
}
.speak-btn:hover   { transform: scale(1.12); background: rgba(79,140,255,0.08); }
.speak-btn:active  { transform: scale(0.96); }
.speak-btn:focus-visible { outline: none; box-shadow: var(--focus-ring); }
.speak-btn[aria-pressed="true"] { color: var(--accent-secondary); } /* optional “now playing” */
```

### States

| State | Behavior |
|-------|----------|
| Default | SVG speaker in `--accent-primary`, 44×44 hit area (icon stays 18px, padding fills the rest) |
| Hover | Scale 1.12, faint primary tint |
| Focus (keyboard) | `--focus-ring`, no scale |
| Active/press | Scale 0.96 |
| Speaking | `speechSynthesis.cancel()` first so taps don't queue up |
| API unsupported | Button still renders but `speak()` no-ops; consider `disabled` + `title="Audio not supported"` if `!("speechSynthesis" in window)` |

### Edge cases

- **Voice loading (Chrome Android):** voices are async. Resolve a voice for `lang` inside a `voiceschanged` listener; if none, fall back to default. Don't block the first tap.
- **Accent decision:** current `en-US` vs plan's `en-GB`. IELTS is accent-neutral but en-GB is common for VN learners. Pick one token-level default; don't mix per-screen.
- **Long phrases:** `Flashcard` fronts can be multi-word structures (`currentItem.front`). `speechSynthesis` handles these; no truncation needed.
- **Word cleanup:** keep the existing `item.word.replace(/^[A-Z\s]+/, '').trim()` cleanup; pass the cleaned string to `text`.

### Accessibility
- `aria-label="Pronounce {text}"` (the icon is `aria-hidden`).
- Focusable, Enter/Space activate (native `<button>`).
- ≥44×44 target via `--tap-min`.

---

## 2 · Verify & harden the mobile experience

**No new component.** Hardening of `App.jsx` sidebar (`.sidebar`, `.sidebar.open`) + grids. Sidebar is `position: fixed`, `--sidebar-width: 300px`, toggled by `isSidebarOpen` state.

### Responsive behavior (confirmed breakpoints)

| Breakpoint | Behavior |
|------------|----------|
| Desktop > 1024px | Sidebar always visible; `.main-content` offset by `--sidebar-width`. `.mobile-menu-btn` hidden. |
| ≤ 1024px | Sidebar `transform: translateX(-100%)`; `.open` slides to `translateX(0)`; `.mobile-menu-btn` shown; content full-width. Reference/why/trend/prep/connector/topic grids → 1 column. |
| ≤ 768px | Card/heading font sizes step down; `.expand-row` stacks. |

### Required additions

| Element | State | Required behavior | Status today |
|---------|-------|-------------------|--------------|
| `☰ Menu` button | tap | Toggles sidebar | ✅ works |
| Lesson item | tap | Selects lesson **and** closes sidebar | ✅ `setIsSidebarOpen(false)` already called |
| Sidebar | open | **Add a backdrop** (`<div className="sidebar-backdrop">`) that dims content and **closes on outside tap** | ❌ missing — add |
| Sidebar | open | Should overlay (not push) content | ✅ `fixed` overlay |
| Vocabulary grid | ≤768px | Collapse to 1 col | ⚠️ `.vocab-topics-grid` uses `minmax(200px,1fr)` auto-fill → 1 col only when viewport < ~232px. **Add explicit `grid-template-columns: 1fr` at ≤768px.** |
| Reference grids | ≤1024px | 1 col | ✅ covered |
| Flashcard | all | Fit viewport, no h-scroll | Verify on device |
| Tabs (`.tab-btn`) | mobile | Already `flex-wrap: wrap` ✅; **raise tap height to ≥44px** (currently `0.6rem 1.2rem` ≈ 34px, shrinks further to `0.5rem 0.85rem` ≤1024px) | ⚠️ fix |

### Backdrop spec

```css
.sidebar-backdrop {
  position: fixed; inset: 0; z-index: 99;
  background: rgba(0,0,0,0.5);
  backdrop-filter: blur(2px);
  opacity: 0; pointer-events: none; transition: opacity 0.25s ease;
}
.sidebar-backdrop.open { opacity: 1; pointer-events: auto; }
@media (min-width: 1025px) { .sidebar-backdrop { display: none; } }
```
Render `<div className={`sidebar-backdrop ${isSidebarOpen ? 'open' : ''}`} onClick={() => setIsSidebarOpen(false)} />` and ensure `.sidebar` `z-index` (currently set) sits above it.

### Test matrix (real device or DevTools device mode)
Chrome Android + iOS Safari, 360–414px width: menu open/close, lesson-tap closes, backdrop dismiss, vocab/reference grids = 1 col, flashcard no h-scroll, every tab/card/flip/prev-next ≥44px, tabs wrap cleanly.

---

# 🟠 Medium priority

## 3 · Speed up the tab fade-in + respect reduced motion

**Where:** `index.css:833` `@keyframes fadeIn` (0→1 opacity), applied to `.reference-content` (`:830`) and `.vocab-container` (`:1579`), both `fadeIn 0.3s ease`.

```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: none; }
}
.reference-content,
.vocab-container { animation: fadeIn var(--motion-fast) ease-out; } /* 0.18s */

@media (prefers-reduced-motion: reduce) {
  .reference-content,
  .vocab-container { animation: none; }
}
```

| Element | Trigger | Animation | Duration | Easing |
|---------|---------|-----------|----------|--------|
| Tab content | Tab switch | Fade + 4px rise | `--motion-fast` 180ms | `ease-out` |
| Same, reduced-motion | Tab switch | None (instant) | 0 | — |

Audit other `fadeIn 0.3s` / `slideDown 0.3s` usages for the same treatment.

## 4 · Fix the inconsistent topic count

**Single source of truth = `vocabTopics.length` (= 10).**

`App.jsx:139` — replace the hardcoded string:

```jsx
// before
<p>Master essential vocabulary across 13 topics</p>
// after — import vocabTopics into App.jsx
<p>Master essential vocabulary across {vocabTopics.length} common IELTS topics</p>
```

The Vocabulary card (`VocabTopics.jsx:46`) is **already** dynamic — no change. Sidebar stats (`lessons / vocab / structures`) are **already** derived in `App.jsx:34–35`; verify the rendered numbers match expectations (lessons = `allLessons.length`, vocab/structures summed from lesson data — note these count *lesson* vocab, separate from the 590-word Vocabulary Bank, so don't conflate the two figures in copy).

## 5 · Close accessibility gaps

### Tab semantics — `App.jsx:150–187`

Wrap the six `.tab-btn`s in a tablist and pair with a panel:

```jsx
<div className="tabs" role="tablist" aria-label="Lesson sections">
  {tabs.map(t => (
    <button key={t.id} role="tab" id={`tab-${t.id}`}
      className={`tab-btn ${active === t.id ? 'active' : ''}`}
      aria-selected={active === t.id}
      aria-controls={`panel-${t.id}`}
      tabIndex={active === t.id ? 0 : -1}
      onClick={() => setActive(t.id)}
      onKeyDown={onTabKeyDown}>
      <span className="tab-icon" aria-hidden="true">{t.icon}</span> {t.label}
    </button>
  ))}
</div>
<div className="content-area" role="tabpanel"
     id={`panel-${active}`} aria-labelledby={`tab-${active}`}>…</div>
```

| Interaction | Expected |
|-------------|----------|
| `←` / `→` | Move active tab, wrap at ends, move focus |
| `Home` / `End` | First / last tab |
| `Enter` / `Space` | Activate focused tab |
| Tab key | Enters tablist once (roving `tabIndex`), then into panel |

Refactor the six inline buttons into a `tabs` array (`{id,label,icon}`) to drive `.map()`.

### Language tagging
`index.html` `<html lang="en">` stays, but Vietnamese strings must be marked so screen readers don't read them with an English voice:
- Wrap glosses: `<span lang="vi">{item.meaning}</span>` and `<span lang="vi">{item.example_vi}</span>` in `VocabTopics.jsx:116,121`.
- Any VN UI copy elsewhere gets `lang="vi"` too.

### Contrast
`--text-secondary` `#8a94b0` on `--bg-color` `#0a0e1a` ≈ 6.6:1 (passes AA, dim in sunlight). Switch small/secondary text and pronunciation/phonetic text to `--text-secondary-bright` `#9aa6c4` (≈ 8:1). Verify with a contrast checker after the swap.

### Focus rings
Add `:focus-visible { box-shadow: var(--focus-ring); outline: none; }` to `.tab-btn`, `.speak-btn`, `.control-btn`, `.back-btn`, `.vocab-topic-card`, sidebar `li`, and `.mobile-menu-btn`.

---

# 🟡 Low priority

## 6 · Brand the page title — `index.html`

```html
<title>IELTS Target 6.5 — Speaking & Writing Study Guide</title>
<meta name="description" content="Free IELTS study guide for Vietnamese learners — jump from Band 5 to 6.5+ with speaking, writing, vocabulary and flashcards." />
```
Also consider `lang` stays `en` (primary), plus `og:title`/`og:description` for share cards.

## 7 · Replace emoji section icons with SVG

Same tofu risk as the speaker icon. Inventory to replace:

| Location | Emoji | File |
|----------|-------|------|
| Tab icons | 📘 📋 📚 🎯 📖 🃏 | `App.jsx:155–185` |
| Sidebar categories | 🗣️ ✍️ | `App.jsx:83,104` |
| Sidebar nav | 📖 | `App.jsx:63` |
| Header badges | 📘 📖 🗣️ ✍️ | `App.jsx:131,137,143` |
| Vocab topic icons | 🎓 🌍 🏥 💻 🧑‍💼 🌐 🎭 📱 🤝 📖 | `VocabTopics.jsx:58–66` |
| Vocab intro / example | 📚 💡 | `VocabTopics.jsx:43,120` |

Recommend an inline-SVG icon set (Lucide / Tabler) via a small `<Icon name="…" />` wrapper; `currentColor` for theming, `aria-hidden="true"` (labels carry meaning). Keep the icon→topic mapping in `vocabData.js` as an `icon` field rather than the current `id.includes()` chain.

## 8 · Add progress / completion state

**Highest retention lever; largest effort.** Persist per-lesson completion locally and surface it.

```js
const KEY = "ielts.completed";
const load = () => JSON.parse(localStorage.getItem(KEY) || "{}");
const markDone = (lessonId) => {
  const done = load(); done[lessonId] = true;
  localStorage.setItem(KEY, JSON.stringify(done));
};
```
> ⚠️ This relies on real `localStorage` — fine in the deployed Netlify app, but it will **not** work inside a Claude artifact preview. Test in the browser, not the preview pane.

### UI surfaces

| Surface | Treatment |
|---------|-----------|
| Sidebar lesson `li` | Checkmark (SVG) when `done[lesson.id]` — use `--accent-green` |
| Header | Overall progress `{completedCount}/{allLessons.length}` + thin progress bar |
| Lesson | "Mark complete" toggle (e.g., at end of Summary or Practice) |

### States & edge cases
- **Empty:** 0/N, neutral bar, microcopy "Track your progress as you study."
- **All done:** 100%, celebratory accent, optional reset.
- **Storage blocked/private mode:** wrap reads/writes in try/catch; fall back to in-memory state for the session.
- **Data changes:** keying on `lesson.id` keeps progress stable if lesson order changes.

### A11y
Progress bar = `role="progressbar"` with `aria-valuenow/min/max`; completion toggle is a labelled `<button aria-pressed>`.

---

## ✅ Definition of done
- [ ] **#1–#4 + #6** shipped (quick wins; #1 is highest leverage)
- [ ] **#5** tab semantics + arrow keys + `lang="vi"` + contrast verified with a checker
- [ ] **#7** emoji→SVG across the inventory above
- [ ] **#8** completion persists and renders; degrades gracefully without storage
- [ ] Re-tested on a real phone (Chrome Android + iOS Safari), all targets ≥44px, no horizontal scroll

*Solid pedagogy and structure — this is polish and reach, not a rebuild.*

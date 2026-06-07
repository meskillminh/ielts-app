🎯 IELTS Flashcard Generator — Prompt for Claude / Cowork
Copy the entire block below (from ---START PROMPT--- to ---END PROMPT---) and paste it into Claude or Cowork. Then attach your lesson file (docx/pdf/txt).

---START PROMPT---
I'm uploading my IELTS lesson file. Please extract ALL idioms, collocations, expressions, phrasal verbs, and useful vocabulary from it, then generate a single interactive HTML file as a flashcard study tool.
INPUT RULES

Read every section of the uploaded file carefully
Keep the exact same structure and order as the original lesson (lesson number → section → sub-section)
Do NOT reorganize or re-categorize — preserve the teacher's structure
Extract every expression, even simple ones like "most of the time" or "every now and then"

OUTPUT: Single HTML file with this structure
Layout — 3 levels:

Lesson block — colored header with lesson number + title (use purple #eeedfe for Speaking, blue #e6f1fb for Writing)
Section — dashed border title matching the original section name from the file
Flashcard grid — responsive grid of clickable cards inside each section

Each flashcard has 3 layers (click to reveal):

Front (always visible): English expression in bold (e.g. "unwind after a long day")
Back (click to flip): Vietnamese meaning with → prefix (e.g. "→ thư giãn sau ngày dài")
Example sentence in italic gray (e.g. "Music helps me unwind after a long day.")

Required interactive features:

🔍 Search bar (sticky top) — filter by English, Vietnamese, or example text
🏷️ Filter buttons — one "All" button + one button per lesson (e.g. "L1 Speaking", "L2 Speaking", "L1 Writing")
🔄 "Flip all" button — toggle all cards open/closed (for self-quiz mode)
📊 Counter — show "X / Y expressions" that updates when filtering/searching

Design requirements:

Clean, minimal design — cream background #f5f3ee, white cards #faf9f5
Flipped cards turn green #e1f5ee with green border #1d9e75
Cards hover effect: slight lift + purple border
Dark mode via @media (prefers-color-scheme: dark) — dark backgrounds, inverted text colors
Mobile responsive — cards stack on small screens
Controls bar sticky at top when scrolling
Font: system font stack -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

Data structure in JavaScript:
javascriptconst lessons = [
  {
    id: "L1S",           // unique lesson ID
    tag: "Lesson 1 — Speaking",  // tab label
    title: "Original lesson title from file",
    sections: [
      {
        title: "Original section name from file",
        items: [
          { e: "English expression", v: "Vietnamese meaning", ex: "Example sentence." },
          // ... more items
        ]
      },
      // ... more sections
    ]
  },
  // ... more lessons
];
JavaScript behavior:

render() function rebuilds DOM based on current filter + search query
Click card → toggle .flipped class
Filter buttons → set active state + re-render
Search input → oninput re-render with case-insensitive match
Flip all → check if all flipped, then toggle opposite

IMPORTANT RULES

Put ALL code in a single HTML file (CSS in <style>, JS in <script>)
No external dependencies — must work fully offline
Do NOT skip any expression from the file — extract everything
If the file has grammar notes (e.g. "feel + adj vs find + sth + adj"), include them as cards too
If the file has homework exercises, skip those — only extract vocabulary/expressions
Vietnamese meanings should be natural translations, not word-by-word
Example sentences should be simple, realistic, and use first person ("I", "my") where possible
Output the complete HTML file — do not truncate or say "continue in next message"

---END PROMPT---

💡 How to use this prompt
In Claude Chat:

Copy everything between ---START PROMPT--- and ---END PROMPT---
Paste into Claude chat
Upload your lesson file (docx/pdf/photo)
Claude will generate the full HTML file

In Cowork:

Create a new task
Paste the prompt above as the instruction
Add your lesson file as input
Set output as "HTML file"
Run — Cowork will generate and save the file

Tips for best results:

One lesson file at a time works best for accuracy
If you have multiple lesson files, paste them all at once and add: "I'm uploading X files — create one combined HTML with all lessons"
If the output is truncated, say: "Continue generating the HTML from where you stopped"
To add a new lesson to an existing file, say: "Here is my existing HTML file and a new lesson file. Add the new lesson's expressions to the existing file, keeping the same structure"

Customization — add these lines to the prompt if needed:

Add audio: "Add a 🔊 button on each card that uses Web Speech API to pronounce the English expression"
Add quiz mode: "Add a Quiz tab that shows a random card's Vietnamese meaning and asks user to type the English expression"
Add progress tracking: "Add localStorage to track which cards I've marked as 'learned' with a ✅ button on each card"
Add spaced repetition: "Cards I mark as 'hard' should appear more frequently in quiz mode"
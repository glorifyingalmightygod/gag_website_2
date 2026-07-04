# OT Book Survey — Build Progress

Source text files: `content/ot-survey-text/[BookName].txt`
Output JS files: `content/ot/[bookname].js`

---

## ✅ Completed Books (Full Survey Pages)

### Pentateuch (5/5 done)
| # | Book | File |
|---|------|------|
| 1 | Genesis | `content/ot/genesis.js` |
| 2 | Exodus | `content/ot/exodus.js` |
| 3 | Leviticus | `content/ot/leviticus.js` |
| 4 | Numbers | `content/ot/numbers.js` |
| 5 | Deuteronomy | `content/ot/deuteronomy.js` |

### Historical Books (12/12 done)
| # | Book | File |
|---|------|------|
| 6 | Joshua | `content/ot/joshua.js` |
| 7 | Judges | `content/ot/judges.js` |
| 8 | Ruth | `content/ot/ruth.js` |
| 9 | 1 Samuel | `content/ot/1samuel.js` |
| 10 | 2 Samuel | `content/ot/2samuel.js` |
| 11 | 1 Kings | `content/ot/1kings.js` |
| 12 | 2 Kings | `content/ot/2kings.js` |
| 13 | 1 Chronicles | `content/ot/1chronicles.js` |
| 14 | 2 Chronicles | `content/ot/2chronicles.js` |
| 15 | Ezra | `content/ot/ezra.js` |
| 16 | Nehemiah | `content/ot/nehemiah.js` |
| 17 | Esther | `content/ot/esther.js` ⭐ (used as CSS design reference) |

### Poetry & Wisdom (5/5 done)
| # | Book | File |
|---|------|------|
| 18 | Job | `content/ot/job.js` |
| 19 | Psalms | `content/ot/psalms.js` |
| 20 | Proverbs | `content/ot/proverbs.js` |
| 21 | Ecclesiastes | `content/ot/ecclesiastes.js` |
| 22 | Song of Solomon | `content/ot/songofsolomon.js` |

### Major Prophets (5/5 done)
| # | Book | File | Notable Feature |
|---|------|------|----------------|
| 23 | Isaiah | `content/ot/isaiah.js` | |
| 24 | Jeremiah | `content/ot/jeremiah.js` | 52 chapters, 8-session teaching plan |
| 25 | Lamentations | `content/ot/lamentations.js` | Acrostic structure table (unique) |
| 26 | Ezekiel | `content/ot/ezekiel.js` | 48 chapters; central theme: Glory of God |
| 27 | Daniel | `content/ot/daniel.js` | Babylonian names table, 7 major prophecies, 12 chapters |

---

## ⏳ Remaining Books (Placeholder Only)

### Minor Prophets (0/12 done)
| # | Book | File |
|---|------|------|
| 28 | Hosea | `content/ot/hosea.js` |
| 29 | Joel | `content/ot/joel.js` |
| 30 | Amos | `content/ot/amos.js` |
| 31 | Obadiah | `content/ot/obadiah.js` |
| 32 | Jonah | `content/ot/jonah.js` |
| 33 | Micah | `content/ot/micah.js` |
| 34 | Nahum | `content/ot/nahum.js` |
| 35 | Habakkuk | `content/ot/habakkuk.js` |
| 36 | Zephaniah | `content/ot/zephaniah.js` |
| 37 | Haggai | `content/ot/haggai.js` |
| 38 | Zechariah | `content/ot/zechariah.js` |
| 39 | Malachi | `content/ot/malachi.js` |

**Next up: Hosea** (first of the Minor Prophets)

---

## Template Rules (Critical — Follow Every Time)

### 1. Section header must wrap text in `<h3>`
```html
<!-- CORRECT -->
<div class="bk-section-header"><h3>📖 Introduction</h3></div>

<!-- WRONG — text will not be white -->
<div class="bk-section-header">Introduction</div>
```

### 2. Summary banner must use `<p>` not `<div>`
```html
<!-- CORRECT -->
<div class="bk-summary-banner">
  <p class="bk-summary-verse">"Verse text..."</p>
  <p class="bk-summary-cite">— Reference</p>
</div>

<!-- WRONG — CSS only targets .bk-summary-banner p -->
<div class="bk-summary-verse">...</div>
```

### 3. CSS variables — never use these
- ❌ `var(--primary)` — does not exist
- ❌ Hardcoded colors like `#e8f4fd`, `rgba(255,255,255,0.6)` — breaks dark mode

### 4. CSS variables — always use these
- ✅ `var(--azure)` — blue primary color
- ✅ `var(--azure-dark)` — darker blue
- ✅ `var(--gold)` — gold accent
- ✅ `var(--cloud)` — light background (auto-switches in dark mode)
- ✅ `var(--white)` — card background (auto-switches in dark mode)

### 5. Two-column intro layout
```html
<div style="display:grid;grid-template-columns:1fr 1fr;gap:2rem;align-items:start;">
  <div>
    <!-- book-meta-bar + intro paragraphs -->
  </div>
  <div>
    <strong style="display:block;margin-bottom:0.75rem;color:var(--azure);">Historical Timeline</strong>
    <ul class="book-timeline">
      <li><strong>Year BC</strong> — Event</li>
    </ul>
  </div>
</div>
```

---

## Valid CSS Classes (Book Pages)

| Class | Purpose |
|-------|---------|
| `book-meta-bar` / `bm-item` / `bm-label` / `bm-value` | 4-column quick facts bar |
| `book-timeline` | Vertical dot timeline |
| `bk-section` | Section wrapper |
| `bk-section-header` | Section title bar (requires `<h3>` inside) |
| `bk-section-body` | Section content area |
| `bk-table` | Styled data table |
| `bk-chapters-grid` / `bk-chapter-item` | Chapter summary cards grid |
| `bk-verse-card` / `bk-verse-ref` / `bk-verse-text` / `bk-verse-note` | Key verse cards |
| `bk-tags` / `bk-tag` | Theme tag pills |
| `bk-lessons-list` | Numbered life lessons list |
| `bk-shadow-card` / `bk-shadow-title` / `bk-shadow-body` | Foreshadows of Christ cards |
| `bk-summary-banner` / `bk-summary-verse` / `bk-summary-cite` | Closing Scripture banner |

---

## Progress Summary

- **27 of 39 OT books complete** (Genesis → Daniel)
- **12 remaining** — all Minor Prophets (no source .txt files uploaded yet)
- **Audio Podcast:** 1 episode live
- **All Major Prophets done** as of 2026-06-29

> See `website_progress.md` for the full site-wide status including NT books, Bible Doctrines, and special pages.

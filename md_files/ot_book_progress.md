# OT Book Survey — Build Progress

Source text files: `content/ot-survey-text/[BookName].txt`
Output JS files: `content/ot/[bookname].js`

---

## ✅ Completed Books (Full Survey Pages) — 39 of 39 (100%)

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

### Minor Prophets (12/12 done)
| # | Book | File | Notable Feature |
|---|------|------|----------------|
| 28 | Hosea | `content/ot/hosea.js` | Kings-of-Israel/Judah tables, Hosea's marriage to Gomer as central symbol |
| 29 | Joel | `content/ot/joel.js` | Early vs. late date scholarly-view table, locust plague as Day-of-the-LORD picture, only 3 chapters |
| 30 | Amos | `content/ot/amos.js` | Shepherd-prophet from Tekoa, 9-row per-nation prophecy table, full Theological Themes table |
| 31 | Obadiah | `content/ot/obadiah.js` | Shortest OT book (21 verses); section-by-section (not chapter) breakdown; Jacob/Esau + Edom background |
| 32 | Jonah | `content/ot/jonah.js` | Narrative structure (Running→Praying→Preaching→Learning); "Sign of Jonah" Christ typology table |
| 33 | Micah | `content/ot/micah.js` | Covenant-lawsuit pattern; Bethlehem ruler prophecy (5:2); Micah 6:8 as centerpiece |
| 34 | Nahum | `content/ot/nahum.js` | Sequel to Jonah — Nineveh's later judgment; God's justice/goodness balance (1:3, 1:7) |
| 35 | Habakkuk | `content/ot/habakkuk.js` | Prophet-to-God dialogue structure; "the righteous shall live by faith" (2:4) |
| 36 | Zephaniah | `content/ot/zephaniah.js` | Day-of-the-LORD focus; possible royal (Hezekiah) genealogy callout |
| 37 | Haggai | `content/ot/haggai.js` | 4 precisely-dated 520 BC messages; temple-rebuilding priorities |
| 38 | Zechariah | `content/ot/zechariah.js` | Longest Minor Prophet (14 ch.); 8 night visions + Messianic oracles; split into two chapter grids (1–8, 9–14) |
| 39 | Malachi | `content/ot/malachi.js` | OT's closing book; question-and-answer structure; messenger/Elijah prophecy fulfilled in John the Baptist |

**🎉 All 39 Old Testament books now have full survey pages.**

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
- ❌ `var(--azure)` / `var(--azure-dark)` / `var(--cloud)` / `var(--primary)` — **removed** in the Serene Indigo & Cream redesign (2026-07-06 commit `253697d`); no longer exist and will render broken/blank
- ❌ Hardcoded colors like `#e8f4fd`, `rgba(255,255,255,0.6)` — breaks dark mode

### 4. CSS variables — always use these
- ✅ `var(--indigo)` / `var(--indigo-dark)` / `var(--indigo-mid)` / `var(--indigo-light)` / `var(--indigo-pale)` — primary brand color
- ✅ `var(--gold)` / `var(--gold-light)` / `var(--gold-pale)` — accent color, used for callout boxes and highlights
- ✅ `var(--cream-bg)` / `var(--cream-mid)` — background (auto-switches in dark mode)

### 5. Two-column intro layout
**Must use `repeat(auto-fit,minmax(280px,1fr))`, never a fixed `1fr 1fr`** — a fixed two-track grid never collapses to one column on mobile, no matter how narrow the viewport, which cuts off the Historical Timeline column entirely on phones. `auto-fit`/`minmax` collapses to a single stacked column automatically once the viewport is too narrow for two 280px tracks — no media query needed. (This bug shipped in 13 books — Hosea through Malachi plus Daniel — before being caught and fixed on 2026-09-16; every other book already used the correct pattern.)
```html
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:2rem;align-items:start;">
  <div>
    <!-- book-meta-bar + intro paragraphs -->
  </div>
  <div>
    <strong style="display:block;margin-bottom:0.75rem;color:var(--indigo);">Historical Timeline</strong>
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
| `bk-chapters-grid` / `bk-chapter-item` | Chapter summary cards grid (split into two grids for books with >~7 chapters) |
| `bk-verse-card` / `bk-verse-ref` / `bk-verse-text` / `bk-verse-note` | Key verse cards |
| `bk-tags` / `bk-tag` | Theme tag pills |
| `bk-lessons-list` | Numbered life lessons list |
| `bk-shadow-card` / `bk-shadow-title` / `bk-shadow-body` | Foreshadows of Christ cards |
| `bk-summary-banner` / `bk-summary-verse` / `bk-summary-cite` | Closing Scripture banner |

## Standard Section Order (all 39 books follow this)

Introduction (meta bar + timeline) → Name of the Book → Author → [Date Written, when the source has enough dating evidence] → Key Persons table → Historical Background → Audience → Historical and Geographical Setting → Places Mentioned table → Purpose of the Book → Book Structure/Outline table(s) → Chapter-by-chapter summary (`bk-chapters-grid`) → Key Verses → Prophecies and Their Fulfillment table → Theological Themes table → Foreshadows of Jesus Christ → Other Biblical Books Written During This Period table → Major Themes tags → Teaching Plan table → Life Lessons list → Summary Banner.

---

## Progress Summary

- **39 of 39 OT books complete (100%)** — Genesis through Malachi
- **Audio Podcast:** 1 episode live
- **All Major Prophets done** as of 2026-06-29; **Hosea, Joel, Amos, and Obadiah done** as of 2026-07-06; **Jonah, Micah, Nahum, Habakkuk, Zephaniah, Haggai, Zechariah, and Malachi done** as of 2026-09-16 (final 5 built via parallel background agents)

> See `website_progress.md` for the full site-wide status including NT books, Bible Doctrines, and special pages.

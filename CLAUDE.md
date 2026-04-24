# Glorifying Almighty GOD — Website Project

## Project Overview
A static Bible teaching website ("Glorifying Almighty GOD" / GAG) built with 4 plain files — no frameworks, no build tools.

## Files
| File | Role |
|------|------|
| `index.html` | Single HTML page — all structure, modals, script tags |
| `styles.css` | All styles — custom properties, dark mode, responsive |
| `script.js` | Sidebar builder, content loader, dark mode, search, form, visit counter |
| `content.js` | All content as a single `CONTENT` object keyed by slug |

**Also in folder:**
- `logo.png` — GAG logo (gold G-A-G letters with cross and open Bible, transparent background)
- `qr-community.png` — WhatsApp Community QR code
- `qr-group.png` — WhatsApp Bible Study Group QR code

**Rule:** Keep everything in this 4-file pattern. No new files unless absolutely necessary.

## Theme — Soft Azure Sky
- Primary: azure (`#3a86c8`) + dark azure (`#1d5e96`)
- Accent: gold (`#f0cc5a`) — title text and Scripture accents
- Background: `#f0f8ff` (sky blue-white)
- Dark mode: toggled via `body.dark` class, persisted in `localStorage` key `gag-dark-mode`

## Fonts (all via Google Fonts)
| Font | Used For |
|------|---------|
| **Cinzel** (700, 900) | Header title "Glorifying Almighty GOD" only |
| **Merriweather** (300,400,700,900 + italic) | ALL headings (h1–h4), hero title, card titles, everywhere Playfair Display was |
| **Open Sans** (Bold Italic) | Header verse + cite (1 Corinthians 10:31) |
| **Lato** (300,400,700) | Body text, paragraphs, UI elements |

**Note:** Playfair Display has been fully removed and replaced with Merriweather sitewide.

## Header
- Height: `165px` desktop, `125px` mobile
- Padding: `10px 70px 50px` (50px bottom keeps text above the wave divider)
- Logo: `logo.png` — positioned absolute left, `148px` tall, `object-fit: contain`, hidden on mobile
- Title: Cinzel 900, warm gold `#f0cc5a` — both "Glorifying" and "Almighty GOD" same gold color
- Verse: Open Sans Bold Italic — cite is `display: block; white-space: nowrap` to prevent line breaks

## Navigation (script.js — NAV_STRUCTURE)
8 root-level sections:
1. 📜 Old Testament Survey → Pentateuch, Historical, Poetry & Wisdom, Major Prophets, Minor Prophets
2. ✝ New Testament Survey → Gospels, Acts, Pauline Epistles, General Epistles, Prophecy
3. 🕊 Bible Doctrine Survey → Core Doctrines, Theology Videos
4. 🎬 Theology Videos → Bible Doctrine Survey (10 video grid)
5. 📺 Video Podcast Sermons
6. 🎙 Audio Podcast Sermons
7. 🗺 Bible Maps
8. 🏛 Bible Historical Photos

Below nav divider: Upload Your Sermon Video, Contact Us

## Content Pages
- **66 Bible books** — all in `CONTENT` (genesis → revelation)
- **Esther** — fully expanded with meta bar, 15 sections, visual timeline (book-meta-bar + book-timeline CSS)
- **10 Core Doctrines** — doctrine-scripture through doctrine-lastthings
- **theology-videos** — 10 video grid (5 per row), YouTube thumbnails, each doctrine named
- **video-podcast, audio-podcast** — placeholder pages
- **bible-maps, bible-photos** — placeholder pages
- **upload-sermon** — form via `formsubmit.co/ajax/glorifyingalmightygod@gmail.com`
- **contact-us** — email + Facebook + Instagram + 2 WhatsApp cards

## Contact Page — Social Links
| Platform | URL |
|----------|-----|
| Email | glorifyingalmightygod@gmail.com |
| Facebook Group | https://www.facebook.com/share/g/1EqsJaCZhD/ |
| Instagram | https://www.instagram.com/glorifyingalmightygod?igsh=MWl0eDR6emRqaWN4MA== |
| WhatsApp Community | https://chat.whatsapp.com/IGJGep49U4D1YJxBrVWFNy |
| WhatsApp Group | https://chat.whatsapp.com/KZJDhBqC1yM0CunQ8NvnFv?mode=gi_t |

WhatsApp shows as two side-by-side cards (Community + Group), each with QR image, scan note, and join button.

## Visit Counter
- Displayed in hero section below the Psalm 119:105 verse block
- Real-time global counter via `https://api.counterapi.dev/v1/glorifyingalmightygod/pagevisits/hit`
- Falls back to localStorage if API unreachable
- Styled as a blue pill badge with gold count number

## Key CSS Classes Added This Session
| Class | Purpose |
|-------|---------|
| `.header-logo` | Logo positioning in header |
| `.vc-wrapper` / `.visit-counter` / `.vc-count` | Visit counter pill in hero |
| `.book-meta-bar` / `.bm-item` | 4-column quick facts bar (Author, Date, Period, Chapters) |
| `.book-timeline` | Vertical dot timeline for book history |
| `.theology-video-grid` / `.tv-card` | 5-col responsive YouTube video grid |
| `.wa-section` / `.wa-cards-grid` / `.wa-card` | Two WhatsApp cards layout |
| `.wa-join-btn` | Green WhatsApp join button |

## Key Functions (script.js)
| Function | Purpose |
|----------|---------|
| `buildSidebar()` | Renders entire sidebar from `NAV_STRUCTURE` |
| `loadContent(id, section, subsection, label)` | Loads content, scrolls with `window.scrollTo({top:0})` |
| `renderHome()` | Renders home welcome card + grid |
| `initSermonForm()` | Form validation + fetch to formsubmit.co |
| `initVisitCounter()` | Async real-time global visit counter |
| `showSuccessModal()` / `hideModal()` | Thank-you modal after form submit |
| `performSearch()` | Real-time nav item filtering |
| `toggleDark()` / `initDarkMode()` | Dark mode + localStorage |

## Adding Content
```js
// In content.js — new book or topic:
'my-slug': {
  title: "Title Here",
  body: `<p>Content HTML here...</p>`
}

// In script.js NAV_STRUCTURE — new nav item:
{ id: 'my-slug', label: 'Display Name' }
```

## Adding a Detailed Book Page (like Esther)
Use `.book-meta-bar` for quick facts and `.book-timeline` for history:
```html
<div class="book-meta-bar">
  <div class="bm-item"><span class="bm-label">Author</span><span class="bm-value">...</span></div>
  <div class="bm-item"><span class="bm-label">Date Written</span><span class="bm-value">...</span></div>
  <div class="bm-item"><span class="bm-label">Period Covered</span><span class="bm-value">...</span></div>
  <div class="bm-item"><span class="bm-label">Chapters</span><span class="bm-value">10</span></div>
</div>
<ul class="book-timeline">
  <li><strong>483 BCE</strong> — Event description</li>
</ul>
```

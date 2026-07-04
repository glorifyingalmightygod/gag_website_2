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

## Theme — Serene Indigo & Cream
- Primary: indigo (`#2b2f6b`) + dark indigo (`#1a1d4d`) — CSS vars `--indigo`, `--indigo-dark`, `--indigo-mid`, `--indigo-light`, `--indigo-pale`
- Accent: muted gold (`#c9a24b`) — used sparingly for Scripture accents, title text, verse callouts
- Background: `#faf8f4` (warm cream) via `--cream-bg` / `--cream-mid`
- Flat, minimal surfaces: thin hairline borders (`--sidebar-border`) + soft neutral shadows (`--shadow`, `--shadow-md`) instead of heavy colored drop-shadows or gradients
- Dark mode: toggled via `body.dark` class, persisted in `localStorage` key `gag-dark-mode`. `--indigo`/`--indigo-dark` stay constant across themes (brand colors); anywhere they're used as *foreground text* on a hover/active background needs a dark-mode swap to `--indigo-light` (see the dark-mode override block right after `DARK MODE OVERRIDES` in styles.css) or it goes low-contrast on dark surfaces — check this when adding new hover/active states.

## Fonts (all via Google Fonts)
| Font | Used For |
|------|---------|
| **Cinzel** (700, 900) | Header title "Glorifying Almighty GOD" only |
| **Merriweather** (300,400,700,900 + italic) | ALL headings (h1–h4), hero title, card titles, everywhere Playfair Display was |
| **Open Sans** (Bold Italic) | Header verse + cite (1 Corinthians 10:31) |
| **Lato** (300,400,700) | Body text, paragraphs, UI elements |

**Note:** Playfair Display has been fully removed and replaced with Merriweather sitewide.

## Header
- Compact sticky bar, not a decorative banner: `--header-height: 76px` desktop, `60px` mobile
- Flat white/`--white` background, 1px bottom hairline border, no gradients/SVG art
- Single flex row: hamburger (mobile/tablet, <1024px) → `.header-brand` (logo + `.header-text` title/verse, clickable → Home; `min-width:0` + `text-overflow:ellipsis` so it truncates instead of overflowing on narrow phones) → `.header-controls` (search button + dark toggle) pushed right via `margin-left:auto`
- Logo: `logo.png`, `40px` tall inline, hidden on mobile
- Title: Cinzel 900, gold accent color, single line
- Verse: only shown at `min-width:900px` (hidden below to keep the mobile bar compact); Open Sans Bold Italic

## Navigation architecture — top mega-menu, no persistent sidebar
There is **no persistent sidebar** — the page content is full-width. Navigation is two things:

1. **`#top-nav`** — a sticky top bar shown only at `min-width:1024px`, built by `buildTopNav()`. Deliberately styled as an **indigo ribbon** (`linear-gradient(90deg, var(--indigo-dark), var(--indigo))` + 2px gold bottom border), not white — it needs to read as a distinct navigation bar against the white header above and cream body below. Nav labels are uppercase + letter-spaced (`.tn-btn`), matching the drawer accordion's typographic treatment for consistency. Active/open section highlights in gold (`var(--gold-light)`), not the default indigo-on-white pattern used elsewhere, since the ribbon's own background is already indigo. One button per `NAV_STRUCTURE` top-level section; sections with more than one leaf item become a `.tn-item` with a click-to-open mega-menu `.tn-panel` (multi-column dropdown, one `.tn-col` per subsection, built by `positionMegaPanel()`/`toggleMegaMenu()` — the panel has a gold top border to visually connect it back to the ribbon). Sections with exactly one subsection and one item (Gospel Presentation, Theology Videos, Video/Audio Podcast, Maps, Photos) render as plain direct links, no dropdown. `Upload Sermon` / `Contact` sit at the right end of the bar (`.tn-btn-util`, pushed via `margin-left:auto` on the first one).
   - **`.tn-panel` is `position:fixed`, not `absolute`** — positioned in JS from the button's `getBoundingClientRect()`. This is required because `.top-nav-inner` has `overflow-x:auto` (so the bar can scroll on medium desktop widths), and per spec that forces `overflow-y` to `auto` too, which would clip an `absolute` dropdown. Don't change `.tn-panel` back to `absolute` without re-checking this.
   - Nav labels in the bar are shortened (`NAV_SHORT_LABELS` in script.js) — the full `section.label` is still used everywhere else (breadcrumbs, page headers).
2. **`#sidebar` (the nav drawer)** — the full accordion tree (unchanged structure: `.nav-section` → `.nav-subsection` → `.nav-item`) plus the search box, always off-canvas (`transform:translateX(-100%)`, `.open` slides it in) regardless of screen width. Opened via the hamburger (mobile/tablet) **or** the header's search button (desktop) — `openDrawer()` / `closeDrawer()` / `toggleDrawer()` in script.js. This is the one place search lives; there's no separate desktop search UI.
- Accordion headers (`.nav-section-header`, `.nav-subsection-header`) are flat (no 3D ribbon/gradient/clip-path tail) — left-border accent + background tint on hover/open.
- `updateTopNavActive()` / `findNavIdForContentId()` keep the top-nav button highlighted in sync with whatever content is loaded, called from `loadContent()`.

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
| `.top-nav-links` / `.tn-btn` / `.tn-item` / `.tn-panel` / `.tn-col` / `.tn-link` | Top mega-menu bar + dropdown (see Navigation architecture above) |
| `.header-brand` / `.header-text` | Header logo+title/verse grouping, clickable to go Home |

## Key Functions (script.js)
| Function | Purpose |
|----------|---------|
| `buildSidebar()` | Renders the accordion tree (nav drawer) from `NAV_STRUCTURE` |
| `buildTopNav()` / `toggleMegaMenu()` / `positionMegaPanel()` / `updateTopNavActive()` | Builds and drives the top mega-menu bar |
| `openDrawer()` / `closeDrawer()` / `toggleDrawer()` | Show/hide the nav drawer (hamburger on mobile, search button on desktop) |
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

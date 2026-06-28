# GAG Website — Project Overview

**"Glorifying Almighty GOD"** — Static Bible teaching website built with plain HTML, CSS, and JavaScript. No frameworks, no build tools.

---

## File Structure

| File | Role |
|------|------|
| `index.html` | Single HTML page — all structure, modals, script tags |
| `styles.css` | All styles — custom properties, dark mode, responsive |
| `script.js` | Sidebar builder, content loader, dark mode, search, form, visit counter |
| `content.js` | Master CONTENT object (bootstraps the namespace) |
| `content/ot/[bookname].js` | Individual OT book survey pages |
| `content/pages.js` | Non-book pages (audio podcast, video, maps, contact, etc.) |
| `audio/` | Audio sermon files |
| `logo.png` | GAG logo (gold G-A-G letters, transparent background) |
| `qr-community.png` | WhatsApp Community QR code |
| `qr-group.png` | WhatsApp Bible Study Group QR code |
| `md_files/` | Project documentation and progress tracking (this folder) |

---

## Theme — Soft Azure Sky

- Primary: `#3a86c8` (azure) + `#1d5e96` (dark azure)
- Accent: `#f0cc5a` (gold) — titles and Scripture accents
- Background: `#f0f8ff` (sky blue-white)
- Dark mode: toggled via `body.dark` class, persisted in `localStorage` key `gag-dark-mode`

---

## Fonts (Google Fonts)

| Font | Used For |
|------|---------|
| **Cinzel** (700, 900) | Header title "Glorifying Almighty GOD" only |
| **Merriweather** (all weights + italic) | ALL headings (h1–h4), hero title, card titles |
| **Open Sans** (Bold Italic) | Header verse + cite (1 Corinthians 10:31) |
| **Lato** (300, 400, 700) | Body text, paragraphs, UI elements |

> Playfair Display has been fully removed and replaced with Merriweather sitewide.

---

## Navigation (8 Root Sections)

1. 📜 Old Testament Survey → Pentateuch, Historical, Poetry & Wisdom, Major Prophets, Minor Prophets
2. ✝ New Testament Survey → Gospels, Acts, Pauline Epistles, General Epistles, Prophecy
3. 🕊 Bible Doctrine Survey → Core Doctrines, Theology Videos
4. 🎬 Theology Videos
5. 📺 Video Podcast Sermons
6. 🎙 Audio Podcast Sermons
7. 🗺 Bible Maps
8. 🏛 Bible Historical Photos

---

## Contact & Social Links

| Platform | URL |
|----------|-----|
| Email | glorifyingalmightygod@gmail.com |
| Facebook Group | https://www.facebook.com/share/g/1EqsJaCZhD/ |
| Instagram | https://www.instagram.com/glorifyingalmightygod |
| WhatsApp Community | https://chat.whatsapp.com/IGJGep49U4D1YJxBrVWFNy |
| WhatsApp Group | https://chat.whatsapp.com/KZJDhBqC1yM0CunQ8NvnFv?mode=gi_t |

---

## Audio Podcast Page

- First episode: **Jeremiah 1:8 — "Do Not Be Afraid"**
- Audio file: `audio/1_Jeremiah-1.8-Dont not be Afraid.wav`
- Sticky verse banner: Romans 10:17 — "Faith comes from hearing..."
- Add new episodes by adding `.ap-episode-card` blocks inside `.ap-episode-list` in `content/pages.js`

---

## Visit Counter

- Real-time global counter via `https://api.counterapi.dev/v1/glorifyingalmightygod/pagevisits/hit`
- Falls back to localStorage if API unreachable
- Displayed in hero section below the Psalm 119:105 verse block

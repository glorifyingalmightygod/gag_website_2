# Configuration Reference — Everything You Need to Run This Website

_Keep this document secure. It contains all credentials, endpoints, and configuration values for the GAG website._

---

## 1. Firebase

Firebase powers the Video Podcast page and all analytics tracking.

### Firebase Project Details

| Item | Value |
|------|-------|
| **Project Name** | GAG Website |
| **Project ID** | `gag-website-b330d` |
| **Console URL** | https://console.firebase.google.com/project/gag-website-b330d |
| **Auth Domain** | `gag-website-b330d.firebaseapp.com` |
| **Database URL** | `https://gag-website-b330d-default-rtdb.firebaseio.com` |
| **API Key** | `AIzaSyDVihi2JGW5Z-2tio_vB0cwun9Un4XXt_Q` |

### Firebase Console — Where to Find Things

| Task | Console Navigation |
|------|--------------------|
| View / edit video sermons | Realtime Database → Data → `gag_videos` |
| View analytics data | Realtime Database → Data → `gag_metrics` |
| Set security rules | Realtime Database → Rules |
| Add authorised domains | Authentication → Settings → Authorised Domains |
| Check usage limits | Project Overview → Spark Plan usage |
| Deploy with Firebase Hosting | Hosting → Get Started |

### Firebase Database Structure

```
Firebase Realtime Database
├── gag_videos/
│   └── [auto-id]/
│       ├── title:    "Sermon title"
│       ├── ytId:     "YouTube video ID"
│       └── addedAt:  "2026-06-29T10:00:00Z"
│
└── gag_metrics/
    ├── total_visits:         (number)
    ├── daily/
    │   └── YYYY-MM-DD:       (number)
    ├── pages/
    │   └── [page-id]:        (number)
    ├── recent/
    │   └── [auto-id]/
    │       ├── page:  "genesis"
    │       └── ts:    (timestamp)
    └── countries/
        └── [CountryName]:    (number)
```

### Firebase Security Rules (Recommended for Production)

Go to: Firebase Console → Realtime Database → Rules

```json
{
  "rules": {
    "gag_videos": {
      ".read": true,
      ".write": false
    },
    "gag_metrics": {
      ".read": false,
      ".write": true
    }
  }
}
```

### Firebase SDK Used

The website uses the Firebase **Compat SDK (v9.22.2)** loaded from CDN:
```html
<script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-database-compat.js"></script>
```
No local npm install is needed — it loads directly from Google's CDN.

---

## 2. Google Analytics (GA4)

| Item | Value |
|------|-------|
| **Measurement ID** | `G-8VJL1JF1HW` |
| **Console URL** | https://analytics.google.com |
| **Account** | Linked to glorifyingalmightygod@gmail.com |
| **Tag Type** | Google Analytics 4 (GA4) |
| **How it's loaded** | `<script>` tag in `index.html` (lines 21–27) |

### GA4 Console — Where to Find Things

| What to view | GA4 Navigation |
|-------------|----------------|
| Active users right now | Reports → Real-time |
| Pages visited most | Reports → Engagement → Pages and Screens |
| Countries of visitors | Reports → User → Demographic Details |
| Daily/weekly traffic | Reports → Acquisition → Overview |
| Custom events | Reports → Engagement → Events |

---

## 3. Visit Counter (Public Counter)

| Item | Value |
|------|-------|
| **Service** | CounterAPI (free, no account needed) |
| **Endpoint** | `https://api.counterapi.dev/v1/glorifyingalmightygod/pagevisits/hit` |
| **Counter namespace** | `glorifyingalmightygod` |
| **Counter name** | `pagevisits` |
| **View count (no increment)** | `https://api.counterapi.dev/v1/glorifyingalmightygod/pagevisits` |
| **Fallback** | `localStorage` key `gag-visit-count` (used when API is unreachable) |

---

## 4. Contact Form (Sermon Upload)

| Item | Value |
|------|-------|
| **Service** | FormSubmit.co (free, no account needed) |
| **Endpoint** | `https://formsubmit.co/ajax/glorifyingalmightygod@gmail.com` |
| **Delivery email** | glorifyingalmightygod@gmail.com |
| **Method** | AJAX (POST — no page redirect) |
| **Subject line** | "New Sermon Video Submission — Glorifying Almighty GOD" |
| **Template** | Table format |
| **First-use activation** | FormSubmit sends a one-time confirmation email to your Gmail when someone first submits the form — you must click Activate in that email |

---

## 5. Admin Panel

| Item | Value |
|------|-------|
| **Access URL** | `yourwebsite.com/#admin` or `index.html#admin` |
| **Password Hash (SHA-256)** | `5eb5df1656cb18513cd435ff330d116b8739fdaf303d564c69f9191f38036932` |
| **Hash location in code** | `script.js` — constant `ADMIN_PASSWORD_HASH` |
| **Session storage** | `sessionStorage` key `gag-admin` — expires on tab close |
| **To change password** | Generate SHA-256 of new password → replace hash in `script.js` |

> **SHA-256 hash generators:** search "SHA-256 hash generator online" — use any trusted tool. Enter your new password and copy the 64-character hex hash.

---

## 6. Ministry Email & Social Accounts

| Platform | Account / URL |
|----------|--------------|
| **Email** | glorifyingalmightygod@gmail.com |
| **YouTube** | https://www.youtube.com/channel/UCGRKGjcIr67bcwrTFssJdCA |
| **Facebook Group** | https://www.facebook.com/share/g/1EqsJaCZhD/ |
| **Instagram** | https://www.instagram.com/glorifyingalmightygod?igsh=MWl0eDR6emRqaWN4MA== |
| **WhatsApp Community** | https://chat.whatsapp.com/IGJGep49U4D1YJxBrVWFNy |
| **WhatsApp Bible Study Group** | https://chat.whatsapp.com/KZJDhBqC1yM0CunQ8NvnFv?mode=gi_t |

---

## 7. Website Files & Folder Structure

```
Website_doctrines/                ← project root
│
├── index.html                    ← single HTML page (all structure)
├── styles.css                    ← all CSS styles
├── script.js                     ← all JavaScript logic
│
├── content/
│   ├── home.js                   ← home page + gospel presentation
│   ├── new-testament.js          ← all 27 NT book summaries
│   ├── doctrines.js              ← 10 Bible doctrines + theology videos
│   ├── pages.js                  ← audio podcast, video podcast, maps, photos, upload, contact
│   ├── verses.js                 ← daily Bible verses (EN + Telugu)
│   │
│   ├── ot/                       ← OT books (one file per book)
│   │   ├── genesis.js
│   │   ├── exodus.js
│   │   ├── ...  (27 books complete)
│   │   ├── daniel.js             ← last completed
│   │   ├── hosea.js              ← placeholder (not yet built)
│   │   └── ... (12 minor prophets — placeholder only)
│   │
│   └── ot-survey-text/           ← source .txt files used to build OT survey pages
│       ├── Isaiah.txt
│       ├── Jeremiah.txt
│       ├── Lamentations.txt
│       ├── Ezekial.txt
│       ├── Daniel.txt
│       └── songs of solomon.txt
│
├── audio/                        ← audio sermon files
│   └── 1_Jeremiah-1.8-Dont not be Afraid.wav
│
├── images/                       ← image files
│   ├── logo.png                  ← GAG logo (gold letters + cross)
│   ├── qr-community.png          ← WhatsApp Community QR code
│   └── qr-group.png              ← WhatsApp Bible Study Group QR code
│
└── md_files/                     ← documentation (this folder)
    ├── project_gag_website.md
    ├── ot_book_progress.md
    ├── website_progress.md
    ├── doc_video_podcast.md
    ├── doc_admin_panel.md
    └── doc_configuration_reference.md   ← this file
```

---

## 8. External CDN Libraries (Loaded in index.html)

| Library | Version | Purpose | CDN URL |
|---------|---------|---------|---------|
| Firebase App Compat | 9.22.2 | Firebase SDK | gstatic.com |
| Firebase Database Compat | 9.22.2 | Realtime Database | gstatic.com |
| pdfMake | 0.2.7 | PDF download for book pages | cdnjs.cloudflare.com |
| pdfMake vfs_fonts | 0.2.7 | Fonts for PDF generation | cdnjs.cloudflare.com |
| Google Fonts | — | Cinzel, Merriweather, Open Sans, Lato, Noto Sans Telugu | fonts.googleapis.com |
| Google Analytics 4 | — | Traffic analytics | googletagmanager.com |

---

## 9. LocalStorage Keys (Browser Storage)

These keys are stored in the visitor's browser:

| Key | Purpose | Values |
|-----|---------|--------|
| `gag-dark-mode` | Remembers dark/light mode preference | `"true"` or `"false"` |
| `gag-visit-count` | Fallback visit counter when API is unavailable | Number (string) |

SessionStorage (clears on tab close):

| Key | Purpose |
|-----|---------|
| `gag-admin` | Marks admin as logged in for this session |
| `gag_ct` | Prevents duplicate country tracking per session |

---

## 10. Hosting Checklist (Before Going Live)

When you move the site from local files to a live server, check each item:

- [ ] **Firebase Authorised Domains** — Add your live domain in Firebase Console → Authentication → Settings → Authorised Domains
- [ ] **Firebase Security Rules** — Apply the recommended rules (see Section 1 above)
- [ ] **FormSubmit Activation** — Submit the Upload Sermon form once; check Gmail and click the activation link from FormSubmit
- [ ] **HTTPS** — Ensure your hosting platform serves the site over HTTPS (required for Firebase, CounterAPI, and FormSubmit to work correctly)
- [ ] **GA4 Verification** — Open Google Analytics → Real-time and check that your visit is being tracked
- [ ] **Audio files** — Confirm all `audio/` files are uploaded to the server and paths match the `src` values in `content/pages.js`
- [ ] **Image files** — Confirm `images/logo.png`, `images/qr-community.png`, `images/qr-group.png` are uploaded
- [ ] **Test Admin Panel** — Visit `yourwebsite.com/#admin` and confirm the password and video add/delete functions work
- [ ] **Test Contact Form** — Submit the Upload Sermon form and confirm you receive it in Gmail
- [ ] **Test on Mobile** — Open the site on a phone and confirm sidebar, header, dark mode, and audio player all work

---

## 11. Google Fonts — Loaded Families

```
Cinzel:            700, 900
Merriweather:      300, 400, 700, 900 (regular + italic)
Open Sans:         700 Italic only
Lato:              300, 400, 700
Noto Sans Telugu:  400, 700  (for Telugu Gospel Presentation text)
```

---

## 12. Quick Access Links

| Purpose | Link |
|---------|------|
| Firebase Console | https://console.firebase.google.com/project/gag-website-b330d |
| Firebase Database | https://console.firebase.google.com/project/gag-website-b330d/database |
| Firebase Hosting | https://console.firebase.google.com/project/gag-website-b330d/hosting |
| Firebase Rules | https://console.firebase.google.com/project/gag-website-b330d/database/gag-website-b330d-default-rtdb/rules |
| Google Analytics | https://analytics.google.com |
| CounterAPI view | https://api.counterapi.dev/v1/glorifyingalmightygod/pagevisits |
| FormSubmit dashboard | https://formsubmit.co (login via email link) |
| GitHub (if hosted) | Set up at github.com |

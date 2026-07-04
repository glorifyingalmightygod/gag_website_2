# Video Podcast — How It Works & Hosting Guide

---

## Overview

The Video Podcast page (`Video Podcast Sermons` in the sidebar) is **powered by Firebase Realtime Database**. Unlike the static content of the rest of the website, video sermons are stored in the cloud — so you can add, edit, or delete videos at any time **without touching any code or files**.

---

## How It Works (Step by Step)

### When a visitor opens the Video Podcast page:

1. The page loads and shows a "Loading sermons…" message
2. JavaScript connects to your **Firebase Realtime Database**
3. It reads all video records from the `gag_videos` path
4. Each video is rendered as a card with an embedded YouTube player
5. Videos appear in reverse order (newest first)

### Data stored per video in Firebase:

```
gag_videos/
  ├── [auto-generated-key]/
  │     ├── title:    "Doctrine of Scripture — Part 1"
  │     ├── ytId:     "LoL6T45NLWo"           ← YouTube Video ID only (not full URL)
  │     └── addedAt:  "2026-06-29T10:30:00Z"
```

### How the YouTube embed works:

The site takes only the **Video ID** (the 11-character code after `v=` in a YouTube URL) and builds the embed automatically:

```
YouTube URL:   https://youtube.com/watch?v=LoL6T45NLWo
                                              ↑
Video ID:                                LoL6T45NLWo   ← only this is stored
Embed URL:     https://www.youtube.com/embed/LoL6T45NLWo
Thumbnail:     https://img.youtube.com/vi/LoL6T45NLWo/mqdefault.jpg
```

The site **automatically extracts the ID** when you paste a full YouTube URL in the Admin panel — you don't need to copy the ID manually.

---

## Supported YouTube URL Formats

The Admin panel recognises all of these formats:

| Format | Example |
|--------|---------|
| Standard watch URL | `https://youtube.com/watch?v=LoL6T45NLWo` |
| Short URL | `https://youtu.be/LoL6T45NLWo` |
| Embed URL | `https://youtube.com/embed/LoL6T45NLWo` |
| YouTube Live | `https://youtube.com/live/LoL6T45NLWo` |
| YouTube Shorts | `https://youtube.com/shorts/LoL6T45NLWo` |

---

## How to Add a New Sermon Video

### Step 1 — Upload your video to YouTube
- Log in to your YouTube channel
- Upload the sermon video (public or unlisted)
- Copy the full YouTube URL from the address bar

### Step 2 — Go to Admin Panel
- Open your website in a browser
- Add `#admin` to the end of the URL: `yourwebsite.com/#admin` or `index.html#admin` (local)
- Enter the admin password

### Step 3 — Add the video
- Paste the YouTube URL into the **YouTube URL** field
- Type a sermon title in the **Sermon Title** field
- Click **Add Video**
- The video is immediately live on the Video Podcast page for all visitors

---

## How to Edit or Delete a Video

In the Admin Panel, under **Published Videos**:

- **Edit title:** Click the ✏ Edit button next to any video → type new title → click 💾 Save
- **Delete:** Click the 🗑 Delete button → confirm the popup → video is removed immediately

> Changes take effect instantly for all visitors — no page refresh or code change needed.

---

## Hosting Considerations (Real / Live Hosting)

### Firebase Security Rules (IMPORTANT)

When your site is live on the internet, you **must** set proper Firebase Database security rules. Otherwise anyone could write to your database.

**Recommended rules for this website:**

Go to: **Firebase Console → Realtime Database → Rules** tab and set:

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

**What this does:**
- `gag_videos` → anyone can READ (so videos load publicly), but NO ONE can write (protects your video list from outside tampering). Only the Admin Panel bypasses this through your Firebase project credentials.
- `gag_metrics` → analytics can be written (page views, countries), but not read publicly

> **Note:** For full admin write access, you would need Firebase Authentication. Currently the admin panel uses password protection on the client side — suitable for a personal ministry site.

### Authorised Domains (Firebase)

Firebase blocks requests from domains it doesn't recognise. When you go live:

1. Go to **Firebase Console → Authentication → Settings → Authorised Domains**
2. Add your live website domain (e.g. `glorifyingalmightygod.com`)
3. Your local `localhost` and `127.0.0.1` are added by default

### CORS (Cross-Origin)

Firebase Realtime Database (using the REST/compat SDK) does not have CORS issues with static HTML sites. Your setup will work without any additional CORS configuration.

### File Hosting — No Video Files Needed

Because the site embeds YouTube videos, you do **not** need to host any video files on your server. Video storage, streaming, and bandwidth are handled entirely by YouTube for free.

---

## What Happens If Firebase Is Down

If Firebase is unreachable:
- The Video Podcast page shows: *"Video sermons are being prepared. Please check back soon!"*
- All other pages (OT/NT surveys, doctrines, etc.) work normally — they are static

---

## Hosting Platform Recommendations

This website is a **static HTML/CSS/JS site** — no server-side code, no database server needed. Recommended free hosting options:

| Platform | URL | Free Plan | Custom Domain |
|----------|-----|-----------|---------------|
| **GitHub Pages** | pages.github.com | ✅ Free | ✅ Yes |
| **Netlify** | netlify.com | ✅ Free | ✅ Yes |
| **Vercel** | vercel.com | ✅ Free | ✅ Yes |
| **Firebase Hosting** | firebase.google.com/hosting | ✅ Free tier | ✅ Yes |

> **Recommended:** Firebase Hosting — since you already use Firebase, everything is in one place.

### Deploy to Firebase Hosting (Quick Steps):

```bash
# Install Firebase CLI (one time)
npm install -g firebase-tools

# Login
firebase login

# Initialise in your project folder
firebase init hosting

# Deploy
firebase deploy
```

---

## Video Podcast — Quick Reference

| What | Detail |
|------|--------|
| Database path | `gag_videos` in Firebase Realtime Database |
| Firebase project | `gag-website-b330d` |
| Database URL | `https://gag-website-b330d-default-rtdb.firebaseio.com` |
| Add videos via | Admin Panel (`#admin`) |
| Video source | YouTube only (embedded — no file uploads) |
| Video order | Newest first (reverse chronological) |
| Admin session | Stored in `sessionStorage` — expires when browser tab is closed |

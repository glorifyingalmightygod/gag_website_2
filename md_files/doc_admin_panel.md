# Admin Panel — Complete Guide

---

## How to Access the Admin Panel

The admin panel is hidden from the regular website navigation. To open it:

1. Open your website in any browser
2. Add `#admin` to the end of the URL:
   - **Local (development):** `file:///D:/Glory to GOD/GAG_Website/Website_doctrines/index.html#admin`
   - **Live site:** `https://yourwebsite.com/#admin`
3. A password prompt will appear

> The admin panel is not linked anywhere in the sidebar or navigation — it is only accessible by typing `#admin` in the URL.

---

## Admin Password

The admin password is protected using **SHA-256 hashing** — the actual password is never stored in the code, only its hash.

| Item | Value |
|------|-------|
| Password Hash (SHA-256) | `5eb5df1656cb18513cd435ff330d116b8739fdaf303d564c69f9191f38036932` |
| Where it is set | `script.js` — line with `const ADMIN_PASSWORD_HASH` |

> **Keep your admin password safe and private.** If you need to change it:
> 1. Generate the SHA-256 hash of your new password (use any online SHA-256 generator)
> 2. Replace the hash value in `script.js` in the `ADMIN_PASSWORD_HASH` constant

### How the session works:
- After correct password entry, the session is stored in `sessionStorage`
- Session expires automatically when the **browser tab is closed**
- Each new tab or window requires login again
- There is no "remember me" — this is intentional for security

---

## What Admin Can Do

### 1. Add New Video Sermon

**Fields:**
- **Sermon Title** — the display name shown to visitors (e.g. "The Grace of God — Part 1")
- **YouTube URL** — paste the full YouTube link; the site extracts the video ID automatically

**Process:**
1. Upload your video to YouTube first (your channel: Glorifying Almighty GOD)
2. Copy the YouTube URL
3. Open Admin Panel, paste the URL and type the title
4. Click **➕ Add Video**
5. Video appears immediately on the public Video Podcast page — newest first

**What gets saved to Firebase:**
```
title:    "Your sermon title"
ytId:     "the 11-character YouTube video ID"
addedAt:  "ISO timestamp of when it was added"
```

---

### 2. Edit Video Title

If you need to correct or update a video's title after publishing:

1. Find the video in the **Published Videos** list
2. Click **✏ Edit** next to it
3. The title becomes an editable text field — type the new title
4. Click **💾 Save**
5. Title is updated immediately on the public page

> Note: You cannot change the YouTube video itself — only the title. If you need a different video, delete and re-add.

---

### 3. Delete a Video

1. Find the video in the **Published Videos** list
2. Click **🗑 Delete**
3. A confirmation popup appears: "Delete [title]?"
4. Click OK to confirm
5. Video is permanently removed from the public page immediately

> **This cannot be undone.** If deleted by mistake, you must re-add the video.

---

### 4. View Published Videos

The Admin Panel shows all published videos with:
- YouTube thumbnail preview
- Sermon title
- Date added
- Edit and Delete buttons

Videos are shown in reverse order (newest first), matching what visitors see.

---

## What Admin CANNOT Do (Current Limitations)

| Action | Status | How to Handle |
|--------|--------|---------------|
| Change video order | ❌ Not available | Videos always show newest first |
| Reorder videos manually | ❌ Not available | Would require a code change |
| Add Audio Podcast episodes | ❌ Not in admin | Must edit `content/pages.js` in the code |
| Edit OT/NT book content | ❌ Not in admin | Must edit the content `.js` files |
| View site analytics | ❌ Not in admin | View in Firebase Console (see config doc) |
| Upload video files | ❌ Not supported | YouTube-only; no direct file upload |
| Add multiple videos at once | ❌ One at a time | Must add each video separately |

---

## Analytics — What Is Being Tracked

Analytics tracking happens automatically whenever any page is loaded. The admin does not need to do anything. Data is stored in Firebase under `gag_metrics/`.

### What is tracked:

| Metric | Firebase Path | Description |
|--------|--------------|-------------|
| Total visits | `gag_metrics/total_visits` | Cumulative count of all page loads |
| Daily visits | `gag_metrics/daily/YYYY-MM-DD` | Visits per day |
| Page popularity | `gag_metrics/pages/[page-id]` | How many times each page was viewed |
| Recent activity | `gag_metrics/recent` | Timestamped log of recent page views |
| Visitor countries | `gag_metrics/countries/[CountryName]` | Country of each visitor (via IP lookup) |

### How to view analytics:

**Option 1 — Firebase Console (detailed):**
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Open project: `gag-website-b330d`
3. Click **Realtime Database** in the left menu
4. Browse the `gag_metrics` node to see all data

**Option 2 — Google Analytics (traffic overview):**
1. Go to [analytics.google.com](https://analytics.google.com)
2. Open the GAG property (GA4 tag: `G-8VJL1JF1HW`)
3. View real-time users, geographic data, and page views

**Option 3 — Public visit counter:**
- The visit counter on the homepage uses `counterapi.dev` (separate from Firebase)
- View it at: `https://api.counterapi.dev/v1/glorifyingalmightygod/pagevisits`

---

## Admin Panel Security Notes

| Security Aspect | Current Implementation |
|----------------|----------------------|
| Password protection | SHA-256 hash — password never in plain text in code |
| Session storage | `sessionStorage` — expires on tab close |
| Public access | Admin panel not linked anywhere; URL must be typed manually |
| Firebase writes | Currently open — should add Firebase security rules for production |
| HTTPS | Enable on your hosting platform to protect all connections |

> **For a ministry/personal site this level of security is appropriate.** For a site handling donations or sensitive user data, consider adding Firebase Authentication with proper login.

---

## Logging Out

- Click the **Logout** button in the top right of the admin dashboard
- This clears the session immediately
- You will be returned to the login screen
- Alternatively, closing the browser tab also ends the session

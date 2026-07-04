# TODO — Telugu Translation Review (Bible Verses)

_Logged: 2026-07-04_

## Issue
The Telugu translations shown alongside Bible verses need to be reviewed for mistakes (wording, grammar, or translation accuracy).

## Where to look
- `content/verses.js` — `DAILY_VERSES` array, each entry has an `en` (English), `te` (Telugu), `ref`, and `refTe` field, rendered on the Home page's Daily Bible Verse card (`.dv-te`, `.dv-ref-te` in `styles.css`)
- Gospel Presentation page (`content/pages.js`) — has bilingual Q&A and a Telugu salvation prayer (`.gp-telugu`, `.gp-prayer-te`)
- Any other bilingual content added later — search for `Noto Sans Telugu` usage in `styles.css` to find all Telugu-rendering components if more get added

## Action
- [ ] Have a Telugu speaker review each `te` string against its `en` counterpart for accuracy and natural phrasing
- [ ] Check that verse references (`refTe`) match the correct book/chapter/verse naming convention in Telugu
- [ ] Log specific corrections here as they're found:

| File | Verse Ref | Issue | Correction | Fixed? |
|------|-----------|-------|------------|--------|
| — | — | — | — | — |

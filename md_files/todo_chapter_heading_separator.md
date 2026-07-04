# TODO — Chapter Heading / Content Separator Missing

_Logged: 2026-07-04_

## Issue
On some book pages, the chapter-wise explanation runs the heading straight into the body text with no visual separator — e.g. "Chapter 1" is immediately followed by the continuing text with no colon, dash, or gap between them. It should read clearly as a heading followed by its own paragraph, not one run-on line.

## Where to look
This is most likely in the chapter-by-chapter sections of the OT book survey pages:
- `content/ot/*.js` — look for the chapter summary / chapter grid markup (`.bk-chapter-item`, `.bk-chapter-num`, `.bk-chapter-title`) and any place chapters are described in prose form rather than the structured grid
- Check whether some books use a plain-text pattern like `Chapter 1 In the beginning...` instead of proper markup, e.g.:
  ```html
  <div class="bk-chapter-item">
    <div class="bk-chapter-num">Chapter 1</div>
    <div class="bk-chapter-title">Creation</div>
    <p class="bk-chapter-points">...</p>
  </div>
  ```
- Also check `.bk-section-body` prose paragraphs that narrate chapter-by-chapter content inline — these need either a `<strong>Chapter 1:</strong>` lead-in or to be broken into separate `<p>` per chapter

## Action
- [ ] Identify which book pages have this run-on formatting (go through the OT books one by one, and NT books once they get full survey pages)
- [ ] Standardize on one pattern: either use the existing `.bk-chapter-item` grid structure, or add a clear `<strong>Chapter N:</strong>` separator before the paragraph text
- [ ] Fix inconsistent books to match whichever pattern is chosen

# TODO — Line Break Issues in Content Pages

_Logged: 2026-07-04_

## Issue
Some content pages have line break problems — text runs together or breaks in the wrong place when rendered.

## Where to look
Content HTML lives in template-literal `body` strings inside:
- `content/home.js`
- `content/ot/*.js` (one file per OT book)
- `content/new-testament.js`
- `content/doctrines.js`
- `content/pages.js`
- `content/verses.js`

Likely causes to check for while auditing:
- Missing `<p>` / `</p>` wrapper tags around a paragraph, so two sentences merge into one block
- A literal `\n` left in the string instead of a `<br>` or a new `<p>` (line breaks in a JS template literal don't render as visual breaks in HTML — they need an actual tag)
- Stray `<br>` right after a closing `</p>` or `</li>`, creating an extra unwanted gap
- Long unbroken paragraphs inside `.bk-section-body`, `.gp-answer`, or `.content-card` that should be split into multiple `<p>` tags for readability

## Action
- [ ] Go page by page (or book by book) and note which ones have the run-together / misplaced break problem
- [ ] Fix by wrapping runs of text in proper `<p>` tags in the relevant `content/*.js` file
- [ ] Re-check in the browser after each fix (paragraph spacing is controlled by `.content-card p`, `.bk-section-body p` in `styles.css` — don't need to touch CSS, just the HTML structure in the content files)

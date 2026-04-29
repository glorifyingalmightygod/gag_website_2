/* =============================================
   GLORIFYING ALMIGHTY GOD — Main Script
   ============================================= */

'use strict';

// ─── Navigation Data ──────────────────────────────────────────────────────────

const NAV_STRUCTURE = [
  {
    id: 'old-testament',
    label: 'Old Testament Survey',
    icon: '📜',
    subsections: [
      {
        id: 'pentateuch',
        label: 'Pentateuch',
        items: [
          { id: 'genesis', label: 'Genesis' },
          { id: 'exodus', label: 'Exodus' },
          { id: 'leviticus', label: 'Leviticus' },
          { id: 'numbers', label: 'Numbers' },
          { id: 'deuteronomy', label: 'Deuteronomy' },
        ]
      },
      {
        id: 'historical',
        label: 'Historical Books',
        items: [
          { id: 'joshua', label: 'Joshua' },
          { id: 'judges', label: 'Judges' },
          { id: 'ruth', label: 'Ruth' },
          { id: '1samuel', label: '1 Samuel' },
          { id: '2samuel', label: '2 Samuel' },
          { id: '1kings', label: '1 Kings' },
          { id: '2kings', label: '2 Kings' },
          { id: '1chronicles', label: '1 Chronicles' },
          { id: '2chronicles', label: '2 Chronicles' },
          { id: 'ezra', label: 'Ezra' },
          { id: 'nehemiah', label: 'Nehemiah' },
          { id: 'esther', label: 'Esther' },
        ]
      },
      {
        id: 'poetry',
        label: 'Poetry & Wisdom',
        items: [
          { id: 'job', label: 'Job' },
          { id: 'psalms', label: 'Psalms' },
          { id: 'proverbs', label: 'Proverbs' },
          { id: 'ecclesiastes', label: 'Ecclesiastes' },
          { id: 'song-of-solomon', label: 'Song of Solomon' },
        ]
      },
      {
        id: 'major-prophets',
        label: 'Major Prophets',
        items: [
          { id: 'isaiah', label: 'Isaiah' },
          { id: 'jeremiah', label: 'Jeremiah' },
          { id: 'lamentations', label: 'Lamentations' },
          { id: 'ezekiel', label: 'Ezekiel' },
          { id: 'daniel', label: 'Daniel' },
        ]
      },
      {
        id: 'minor-prophets',
        label: 'Minor Prophets',
        items: [
          { id: 'hosea', label: 'Hosea' },
          { id: 'joel', label: 'Joel' },
          { id: 'amos', label: 'Amos' },
          { id: 'obadiah', label: 'Obadiah' },
          { id: 'jonah', label: 'Jonah' },
          { id: 'micah', label: 'Micah' },
          { id: 'nahum', label: 'Nahum' },
          { id: 'habakkuk', label: 'Habakkuk' },
          { id: 'zephaniah', label: 'Zephaniah' },
          { id: 'haggai', label: 'Haggai' },
          { id: 'zechariah', label: 'Zechariah' },
          { id: 'malachi', label: 'Malachi' },
        ]
      }
    ]
  },
  {
    id: 'new-testament',
    label: 'New Testament Survey',
    icon: '✝',
    subsections: [
      {
        id: 'gospels',
        label: 'Gospels',
        items: [
          { id: 'matthew', label: 'Matthew' },
          { id: 'mark', label: 'Mark' },
          { id: 'luke', label: 'Luke' },
          { id: 'john', label: 'John' },
        ]
      },
      {
        id: 'acts-section',
        label: 'Acts',
        items: [
          { id: 'acts', label: 'Acts of the Apostles' },
        ]
      },
      {
        id: 'pauline',
        label: 'Pauline Epistles',
        items: [
          { id: 'romans', label: 'Romans' },
          { id: '1corinthians', label: '1 Corinthians' },
          { id: '2corinthians', label: '2 Corinthians' },
          { id: 'galatians', label: 'Galatians' },
          { id: 'ephesians', label: 'Ephesians' },
          { id: 'philippians', label: 'Philippians' },
          { id: 'colossians', label: 'Colossians' },
          { id: '1thessalonians', label: '1 Thessalonians' },
          { id: '2thessalonians', label: '2 Thessalonians' },
          { id: '1timothy', label: '1 Timothy' },
          { id: '2timothy', label: '2 Timothy' },
          { id: 'titus', label: 'Titus' },
          { id: 'philemon', label: 'Philemon' },
        ]
      },
      {
        id: 'general-epistles',
        label: 'General Epistles',
        items: [
          { id: 'hebrews', label: 'Hebrews' },
          { id: 'james', label: 'James' },
          { id: '1peter', label: '1 Peter' },
          { id: '2peter', label: '2 Peter' },
          { id: '1john', label: '1 John' },
          { id: '2john', label: '2 John' },
          { id: '3john', label: '3 John' },
          { id: 'jude', label: 'Jude' },
        ]
      },
      {
        id: 'prophecy',
        label: 'Prophecy',
        items: [
          { id: 'revelation', label: 'Revelation' },
        ]
      }
    ]
  },
  {
    id: 'gospel-section',
    label: 'Gospel Presentation',
    icon: '📖',
    subsections: [
      {
        id: 'gospel-sub',
        label: 'The Good News',
        items: [
          { id: 'gospel-presentation', label: 'What Must I Do to Be Saved?' }
        ]
      }
    ]
  },
  {
    id: 'doctrines',
    label: 'Bible Doctrine Survey',
    icon: '🕊',
    subsections: [
      {
        id: 'doctrines-list',
        label: 'Core Doctrines',
        items: [
          { id: 'doctrine-scripture', label: 'Doctrine of Scripture' },
          { id: 'doctrine-god', label: 'Doctrine of God' },
          { id: 'doctrine-christ', label: 'Doctrine of Christ' },
          { id: 'doctrine-holyspirit', label: 'Doctrine of the Holy Spirit' },
          { id: 'doctrine-man', label: 'Doctrine of Man' },
          { id: 'doctrine-sin', label: 'Doctrine of Sin' },
          { id: 'doctrine-salvation', label: 'Doctrine of Salvation' },
          { id: 'doctrine-church', label: 'Doctrine of the Church' },
          { id: 'doctrine-angels', label: 'Doctrine of Angels' },
          { id: 'doctrine-lastthings', label: 'Doctrine of Last Things' },
        ]
      },
    ]
  },
  {
    id: 'theology-section',
    label: 'Theology Videos',
    icon: '🎬',
    subsections: [
      {
        id: 'doctrine-videos-sub',
        label: 'Bible Doctrine Survey',
        items: [
          { id: 'theology-videos', label: 'Theology Videos' }
        ]
      }
    ]
  },
  {
    id: 'video-podcast-section',
    label: 'Video Podcast Sermons',
    icon: '📺',
    subsections: [
      {
        id: 'video-podcast-sub',
        label: 'Video Sermons',
        items: [
          { id: 'video-podcast', label: 'Video Podcast Sermons' }
        ]
      }
    ]
  },
  {
    id: 'audio-podcast-section',
    label: 'Audio Podcast Sermons',
    icon: '🎙',
    subsections: [
      {
        id: 'audio-podcast-sub',
        label: 'Audio Sermons',
        items: [
          { id: 'audio-podcast', label: 'Audio Podcast Sermons' }
        ]
      }
    ]
  },
  {
    id: 'bible-maps-section',
    label: 'Bible Maps',
    icon: '🗺',
    subsections: [
      {
        id: 'bible-maps-sub',
        label: 'Maps',
        items: [
          { id: 'bible-maps', label: 'Bible Maps' }
        ]
      }
    ]
  },
  {
    id: 'bible-photos-section',
    label: 'Bible Historical Photos',
    icon: '🏛',
    subsections: [
      {
        id: 'bible-photos-sub',
        label: 'Historical Photos',
        items: [
          { id: 'bible-photos', label: 'Bible Historical Photos' }
        ]
      }
    ]
  }
];

// ─── State ─────────────────────────────────────────────────────────────────────

const state = {
  currentId: 'home',
  sidebarOpen: true,
  darkMode: false,
  breadcrumb: [{ label: 'Home', id: 'home' }]
};

// ─── DOM References ────────────────────────────────────────────────────────────

let sidebar, sidebarToggle, hamburger, overlay, mainEl, footerEl,
    contentArea, heroSection, breadcrumbEl, searchInput, darkToggleBtn;

// ─── Build Sidebar ─────────────────────────────────────────────────────────────

function buildSidebar() {
  const nav = document.getElementById('sidebar-nav');
  if (!nav) return;

  // Home link
  const homeLink = document.createElement('div');
  homeLink.className = 'nav-home' + (state.currentId === 'home' ? ' active' : '');
  homeLink.setAttribute('data-id', 'home');
  homeLink.innerHTML = `<span>🏠</span><span>Home</span>`;
  homeLink.addEventListener('click', () => loadContent('home'));
  nav.appendChild(homeLink);

  NAV_STRUCTURE.forEach(section => {
    const sectionEl = document.createElement('div');
    sectionEl.className = 'nav-section';
    sectionEl.id = 'section-' + section.id;

    const header = document.createElement('div');
    header.className = 'nav-section-header';
    header.innerHTML = `
      <span><span class="nav-section-icon">${section.icon}</span>${section.label}</span>
      <span class="nav-arrow">▼</span>
    `;
    header.addEventListener('click', () => toggleSection(sectionEl));
    sectionEl.appendChild(header);

    const subsections = document.createElement('div');
    subsections.className = 'nav-subsections';

    section.subsections.forEach(sub => {
      const subEl = document.createElement('div');
      subEl.className = 'nav-subsection';
      subEl.id = 'subsection-' + sub.id;

      const subHeader = document.createElement('div');
      subHeader.className = 'nav-subsection-header';
      subHeader.innerHTML = `<span>${sub.label}</span><span class="nav-sub-arrow">▼</span>`;
      subHeader.addEventListener('click', () => toggleSubsection(subEl));
      subEl.appendChild(subHeader);

      const itemsEl = document.createElement('div');
      itemsEl.className = 'nav-items';

      sub.items.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'nav-item';
        itemEl.setAttribute('data-id', item.id);
        itemEl.setAttribute('data-label', item.label);
        itemEl.textContent = item.label;
        itemEl.addEventListener('click', () => loadContent(item.id, section.label, sub.label, item.label));
        itemsEl.appendChild(itemEl);
      });

      subEl.appendChild(itemsEl);
      subsections.appendChild(subEl);
    });

    sectionEl.appendChild(subsections);
    nav.appendChild(sectionEl);
  });

  // ── Divider ────────────────────────────────────────────────────────────────
  const divider = document.createElement('div');
  divider.className = 'nav-divider';
  nav.appendChild(divider);

  // ── Upload Sermon ──────────────────────────────────────────────────────────
  const uploadLink = document.createElement('div');
  uploadLink.className = 'nav-home';
  uploadLink.setAttribute('data-id', 'upload-sermon');
  uploadLink.innerHTML = `<span>🎬</span><span>Upload Your Sermon Video</span>`;
  uploadLink.addEventListener('click', () => loadContent('upload-sermon', null, null, 'Upload Your Sermon Video'));
  nav.appendChild(uploadLink);

  // ── Contact Us ─────────────────────────────────────────────────────────────
  const contactLink = document.createElement('div');
  contactLink.className = 'nav-home';
  contactLink.setAttribute('data-id', 'contact-us');
  contactLink.innerHTML = `<span>📬</span><span>Contact Us</span>`;
  contactLink.addEventListener('click', () => loadContent('contact-us', null, null, 'Contact Us'));
  nav.appendChild(contactLink);
}

function toggleSection(sectionEl) {
  sectionEl.classList.toggle('open');
}

function toggleSubsection(subEl) {
  subEl.classList.toggle('open');
}

// ─── Load Content ──────────────────────────────────────────────────────────────

function loadContent(id, sectionLabel, subsectionLabel, itemLabel) {
  state.currentId = id;

  // Update active nav item
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.getAttribute('data-id') === id);
  });
  document.querySelectorAll('.nav-home').forEach(el => {
    el.classList.toggle('active', el.getAttribute('data-id') === id);
  });

  // Hero visibility
  heroSection.style.display = id === 'home' ? '' : 'none';

  // Breadcrumb
  updateBreadcrumb(id, sectionLabel, subsectionLabel, itemLabel);

  // Get content
  const data = typeof CONTENT !== 'undefined' ? CONTENT[id] : null;

  if (id === 'home') {
    renderHome();
    return;
  }

  // Special full-page renders (form page, contact page)
  if (id === 'upload-sermon' || id === 'contact-us') {
    const pg = CONTENT[id];
    contentArea.innerHTML = pg ? pg.body : '<div class="content-card"><h2>Coming Soon</h2></div>';
    if (id === 'upload-sermon') setTimeout(initSermonForm, 0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.innerWidth <= 768) closeMobileSidebar();
    return;
  }

  // Video podcast — loads dynamically from Firebase, uses full width
  if (id === 'video-podcast') {
    document.getElementById('content-wrapper').classList.add('vp-wide');
    const pg = CONTENT[id];
    contentArea.innerHTML = pg ? pg.body : '<div class="content-card"><p>Loading…</p></div>';
    setTimeout(loadVideoPodcastContent, 0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.innerWidth <= 768) closeMobileSidebar();
    return;
  }

  // Remove wide layout when navigating away from video podcast
  document.getElementById('content-wrapper').classList.remove('vp-wide');

  if (!data) {
    contentArea.innerHTML = `
      <div class="content-card">
        <h2>Coming Soon</h2>
        <p>Content for this section is being prepared. Check back soon.</p>
        <blockquote>"Be diligent to present yourself approved to God, a worker who does not need to be ashamed, rightly dividing the word of truth." — 2 Timothy 2:15</blockquote>
      </div>`;
    return;
  }

  contentArea.innerHTML = `
    <div class="content-card">
      <h2>${data.title}</h2>
      ${data.body}
    </div>`;

  // Auto-expand the sidebar section containing this item
  autoExpandToItem(id);

  // Scroll to top of content
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // On mobile, close sidebar after selection
  if (window.innerWidth <= 768) {
    closeMobileSidebar();
  }
}

function getDailyVerse() {
  if (typeof DAILY_VERSES === 'undefined' || !DAILY_VERSES.length) return null;
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now - start) / 86400000);
  return DAILY_VERSES[(dayOfYear - 1) % DAILY_VERSES.length];
}

function renderHome() {
  const v = getDailyVerse();
  const dateStr = new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' });
  const dvHTML = v ? `
    <div class="dv-card">
      <div class="dv-header">
        <span class="dv-cross">✝</span>
        <span class="dv-label">Daily Bible Verse</span>
        <span class="dv-date">${dateStr}</span>
      </div>
      <blockquote class="dv-en">"${v.en}"</blockquote>
      <div class="dv-ref-en">${v.ref}</div>
      <div class="dv-divider"></div>
      <blockquote class="dv-te">"${v.te}"</blockquote>
      <div class="dv-ref-te">${v.refTe}</div>
    </div>` : '';

  contentArea.innerHTML = dvHTML + `
    <div class="content-card">
      <h2>Welcome</h2>
      ${CONTENT.home.body}
      <div class="welcome-grid">
        <div class="welcome-card" onclick="openSection('old-testament')">
          <div class="wc-icon">📜</div>
          <h4>Old Testament</h4>
          <p>39 books — from Creation to the close of the Hebrew Canon</p>
        </div>
        <div class="welcome-card" onclick="openSection('new-testament')">
          <div class="wc-icon">✝</div>
          <h4>New Testament</h4>
          <p>27 books — from the Gospels to Revelation</p>
        </div>
        <div class="welcome-card" onclick="openSection('doctrines')">
          <div class="wc-icon">🕊</div>
          <h4>Bible Doctrines</h4>
          <p>10 core doctrines of the Christian faith</p>
        </div>
      </div>
    </div>`;
}

function openSection(sectionId) {
  const sectionEl = document.getElementById('section-' + sectionId);
  if (sectionEl && !sectionEl.classList.contains('open')) {
    sectionEl.classList.add('open');
  }
  sidebarEl().scrollIntoView && sectionEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function sidebarEl() {
  return document.getElementById('sidebar');
}

function autoExpandToItem(id) {
  for (const section of NAV_STRUCTURE) {
    for (const sub of section.subsections) {
      for (const item of sub.items) {
        if (item.id === id) {
          const sectionEl = document.getElementById('section-' + section.id);
          const subEl = document.getElementById('subsection-' + sub.id);
          if (sectionEl) sectionEl.classList.add('open');
          if (subEl) subEl.classList.add('open');
          return;
        }
      }
    }
  }
}

// ─── Breadcrumb ────────────────────────────────────────────────────────────────

function updateBreadcrumb(id, sectionLabel, subsectionLabel, itemLabel) {
  if (!breadcrumbEl) return;

  if (id === 'home') {
    breadcrumbEl.innerHTML = `<span class="current">Home</span>`;
    return;
  }

  let html = `<span data-id="home" onclick="loadContent('home')">Home</span>`;
  if (sectionLabel) html += `<span class="sep">/</span><span>${sectionLabel}</span>`;
  if (subsectionLabel) html += `<span class="sep">/</span><span>${subsectionLabel}</span>`;
  if (itemLabel) html += `<span class="sep">/</span><span class="current">${itemLabel}</span>`;

  breadcrumbEl.innerHTML = html;
}

// ─── Sidebar Toggle ────────────────────────────────────────────────────────────

function initSidebarToggle() {
  if (window.innerWidth > 768) {
    // Desktop: use the toggle button
    sidebarToggle.addEventListener('click', toggleDesktopSidebar);
  }

  hamburger.addEventListener('click', toggleMobileSidebar);
  overlay.addEventListener('click', closeMobileSidebar);
}

function toggleDesktopSidebar() {
  state.sidebarOpen = !state.sidebarOpen;
  const sb = document.getElementById('sidebar');

  if (state.sidebarOpen) {
    sb.classList.remove('collapsed');
    mainEl.classList.remove('expanded');
    footerEl.classList.remove('expanded');
    sidebarToggle.classList.remove('collapsed');
    sidebarToggle.textContent = '◀';
  } else {
    sb.classList.add('collapsed');
    mainEl.classList.add('expanded');
    footerEl.classList.add('expanded');
    sidebarToggle.classList.add('collapsed');
    sidebarToggle.textContent = '▶';
  }
}

function toggleMobileSidebar() {
  const sb = document.getElementById('sidebar');
  const isOpen = sb.classList.contains('open');
  if (isOpen) {
    closeMobileSidebar();
  } else {
    sb.classList.add('open');
    overlay.classList.add('active');
    hamburger.textContent = '✕';
  }
}

function closeMobileSidebar() {
  const sb = document.getElementById('sidebar');
  sb.classList.remove('open');
  overlay.classList.remove('active');
  hamburger.textContent = '☰';
}

// ─── Dark Mode ─────────────────────────────────────────────────────────────────

function initDarkMode() {
  const saved = localStorage.getItem('gag-dark-mode');
  if (saved === 'true') {
    document.body.classList.add('dark');
    state.darkMode = true;
    if (darkToggleBtn) darkToggleBtn.textContent = '☀ Light';
  }
  if (darkToggleBtn) {
    darkToggleBtn.addEventListener('click', toggleDark);
  }
}

function toggleDark() {
  state.darkMode = !state.darkMode;
  document.body.classList.toggle('dark', state.darkMode);
  localStorage.setItem('gag-dark-mode', state.darkMode);
  darkToggleBtn.textContent = state.darkMode ? '☀ Light' : '🌙 Dark';
}

// ─── Search ────────────────────────────────────────────────────────────────────

function initSearch() {
  if (!searchInput) return;
  searchInput.addEventListener('input', performSearch);
}

function performSearch() {
  const query = searchInput.value.trim().toLowerCase();
  const allItems = document.querySelectorAll('.nav-item');
  const allSubsections = document.querySelectorAll('.nav-subsection');
  const allSections = document.querySelectorAll('.nav-section');

  if (!query) {
    // Restore normal view
    allItems.forEach(el => {
      el.classList.remove('search-hidden', 'search-match');
    });
    // Don't collapse everything — just remove search state
    return;
  }

  // Track which sections/subsections have visible items
  const visibleSubsections = new Set();
  const visibleSections = new Set();

  allItems.forEach(el => {
    const label = (el.getAttribute('data-label') || el.textContent || '').toLowerCase();
    if (label.includes(query)) {
      el.classList.remove('search-hidden');
      el.classList.add('search-match');
      // Find parent subsection and section
      const sub = el.closest('.nav-subsection');
      const sec = el.closest('.nav-section');
      if (sub) visibleSubsections.add(sub.id);
      if (sec) visibleSections.add(sec.id);
    } else {
      el.classList.add('search-hidden');
      el.classList.remove('search-match');
    }
  });

  // Expand sections/subsections that have matches, collapse others
  allSections.forEach(el => {
    if (visibleSections.has(el.id)) {
      el.classList.add('open');
    } else {
      el.classList.remove('open');
    }
  });

  allSubsections.forEach(el => {
    if (visibleSubsections.has(el.id)) {
      el.classList.add('open');
    } else {
      el.classList.remove('open');
    }
  });
}

// ─── Init ──────────────────────────────────────────────────────────────────────

function init() {
  sidebar = document.getElementById('sidebar');
  sidebarToggle = document.getElementById('sidebar-toggle');
  hamburger = document.getElementById('hamburger');
  overlay = document.getElementById('overlay');
  mainEl = document.getElementById('main');
  footerEl = document.getElementById('site-footer');
  contentArea = document.getElementById('content-area');
  heroSection = document.getElementById('hero');
  breadcrumbEl = document.getElementById('breadcrumb');
  searchInput = document.getElementById('sidebar-search');
  darkToggleBtn = document.getElementById('dark-toggle');

  buildSidebar();
  renderHome();
  initSidebarToggle();
  initDarkMode();
  initSearch();
  initVisitCounter();

  // Admin page routing — triggered by #admin in URL
  if (location.hash === '#admin') showAdminPage();
  window.addEventListener('hashchange', () => {
    if (location.hash === '#admin') showAdminPage();
  });

  // Handle resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      closeMobileSidebar();
    }
  });
}

document.addEventListener('DOMContentLoaded', init);

// ─── Visit Counter (real-time global) ─────────────────────────────────────────

async function initVisitCounter() {
  const el = document.getElementById('visit-count');
  if (!el) return;

  el.textContent = '…';

  try {
    const res = await fetch('https://api.counterapi.dev/v1/glorifyingalmightygod/pagevisits/hit', {
      mode: 'cors'
    });
    if (!res.ok) throw new Error('API unavailable');
    const data = await res.json();
    el.textContent = Number(data.value).toLocaleString();
  } catch (_) {
    // Fallback to localStorage if API is unreachable
    const key = 'gag-visit-count';
    const count = (parseInt(localStorage.getItem(key) || '0')) + 1;
    localStorage.setItem(key, count);
    el.textContent = count.toLocaleString();
  }
}

// ─── Sermon Upload Form ────────────────────────────────────────────────────────

function initSermonForm() {
  const form       = document.getElementById('sermon-upload-form');
  const ytSelect   = document.getElementById('has-youtube');
  const ytGroup    = document.getElementById('yt-link-group');
  const errorMsg   = document.getElementById('form-error');
  if (!form) return;

  // Show/hide YouTube link field based on dropdown
  ytSelect.addEventListener('change', () => {
    ytGroup.style.display = ytSelect.value === 'yes' ? 'block' : 'none';
    ytGroup.querySelector('input').required = ytSelect.value === 'yes';
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    errorMsg.style.display = 'none';

    // Basic validation
    const required = form.querySelectorAll('[required]');
    let valid = true;
    required.forEach(el => {
      el.classList.remove('input-error');
      if (!el.value.trim()) { el.classList.add('input-error'); valid = false; }
    });
    if (!valid) { errorMsg.style.display = 'block'; return; }

    const btn = form.querySelector('.form-submit-btn');
    btn.disabled = true;
    btn.innerHTML = '<span>⏳</span>&nbsp; Sending…';

    const formData = new FormData();
    formData.append('name',            form.querySelector('#f-name').value.trim());
    formData.append('email',           form.querySelector('#f-email').value.trim());
    formData.append('_replyto',        form.querySelector('#f-email').value.trim());
    formData.append('Sermon Topic',    form.querySelector('#f-topic').value.trim());
    formData.append('Video Duration',  form.querySelector('#f-duration').value.trim());
    formData.append('Has YouTube',     ytSelect.value === 'yes' ? 'Yes' : (ytSelect.value === 'no' ? 'No' : 'Not specified'));
    formData.append('YouTube Link',    ytSelect.value === 'yes' ? form.querySelector('#f-yt-link').value.trim() : 'N/A');
    formData.append('Video File Size', form.querySelector('#f-filesize').value.trim());
    formData.append('_subject',        'New Sermon Video Submission — Glorifying Almighty GOD');
    formData.append('_captcha',        'false');
    formData.append('_template',       'table');

    try {
      const res = await fetch('https://formsubmit.co/ajax/glorifyingalmightygod@gmail.com', {
        method:  'POST',
        headers: { 'Accept': 'application/json' },
        body:    formData
      });
      if (res.ok) {
        form.reset();
        ytGroup.style.display = 'none';
        showSuccessModal();
      } else {
        throw new Error('Server error: ' + res.status);
      }
    } catch (err) {
      btn.disabled = false;
      btn.innerHTML = '<span>✉</span>&nbsp; Submit Request';
      errorMsg.textContent = 'Submission failed — please check your internet connection and try again.';
      errorMsg.style.display = 'block';
      console.error('FormSubmit error:', err);
    }

    btn.disabled = false;
    btn.innerHTML = '<span>✉</span>&nbsp; Submit Request';
  });
}

// ─── Success Modal ─────────────────────────────────────────────────────────────

function showSuccessModal() {
  const modal = document.getElementById('success-modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function hideModal() {
  const modal = document.getElementById('success-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ─── Firebase ──────────────────────────────────────────────────────────────────
// ⚠ FILL IN your Firebase project values below after setting up Firebase console

const FIREBASE_CONFIG = {
  apiKey:      'AIzaSyDVihi2JGW5Z-2tio_vB0cwun9Un4XXt_Q',
  authDomain:  'gag-website-b330d.firebaseapp.com',
  databaseURL: 'https://gag-website-b330d-default-rtdb.firebaseio.com',
  projectId:   'gag-website-b330d'
};

// SHA-256 hash of the admin password — actual password never stored in code
const ADMIN_PASSWORD_HASH = '5eb5df1656cb18513cd435ff330d116b8739fdaf303d564c69f9191f38036932';

async function hashStr(str) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

let _db = null;
function getDB() {
  if (_db) return _db;
  if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
  _db = firebase.database();
  return _db;
}

// ─── Admin Page ────────────────────────────────────────────────────────────────

function showAdminPage() {
  heroSection.style.display = 'none';
  if (breadcrumbEl) breadcrumbEl.innerHTML = '<span class="current">Admin</span>';
  if (!sessionStorage.getItem('gag-admin')) {
    renderAdminLogin();
  } else {
    renderAdminDashboard();
  }
}

function renderAdminLogin() {
  contentArea.innerHTML = `
    <div class="content-card admin-card">
      <h2 class="admin-title">🔐 Admin Login</h2>
      <p style="color:var(--text-light);margin-bottom:20px">This page is for site administrators only.</p>
      <div class="form-group">
        <label>Password</label>
        <input type="password" id="admin-pw" placeholder="Enter admin password" />
      </div>
      <button onclick="checkAdminPw()" class="form-submit-btn" style="margin-top:12px">Login</button>
      <p id="admin-pw-err" style="color:#cc2200;display:none;margin-top:10px">Incorrect password. Try again.</p>
    </div>`;
  setTimeout(() => {
    const pw = document.getElementById('admin-pw');
    if (pw) pw.addEventListener('keydown', e => { if (e.key === 'Enter') checkAdminPw(); });
  }, 0);
}

async function checkAdminPw() {
  const pw = document.getElementById('admin-pw');
  if (!pw) return;
  const hash = await hashStr(pw.value);
  if (hash === ADMIN_PASSWORD_HASH) {
    sessionStorage.setItem('gag-admin', '1');
    renderAdminDashboard();
  } else {
    document.getElementById('admin-pw-err').style.display = 'block';
    pw.value = '';
    pw.focus();
  }
}

function renderAdminDashboard() {
  contentArea.innerHTML = `
    <div class="content-card admin-card">
      <div class="admin-header-row">
        <h2 class="admin-title">🎬 Video Podcast Manager</h2>
        <button onclick="adminLogout()" class="admin-logout-btn">Logout</button>
      </div>

      <div class="admin-add-section">
        <h3>Add New Video</h3>
        <div class="form-group">
          <label>Sermon Title <span class="req">*</span></label>
          <input type="text" id="adm-title" placeholder="e.g. The Grace of God — Part 1" />
        </div>
        <div class="form-group">
          <label>YouTube URL <span class="req">*</span></label>
          <input type="url" id="adm-url" placeholder="https://youtube.com/watch?v=..." />
          <small style="color:var(--text-light);margin-top:4px;display:block">Upload your video to YouTube first, then paste the link here.</small>
        </div>
        <button onclick="adminAddVideo()" class="form-submit-btn">➕ Add Video</button>
        <p id="adm-msg" style="display:none;margin-top:10px"></p>
      </div>

      <div class="admin-list-section">
        <h3>Published Videos</h3>
        <div id="adm-list"><p style="color:var(--text-light)">Loading…</p></div>
      </div>
    </div>`;
  adminLoadList();
}

function adminLogout() {
  sessionStorage.removeItem('gag-admin');
  renderAdminLogin();
}

function extractYouTubeId(url) {
  const m = url.match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : null;
}

async function adminAddVideo() {
  const title = (document.getElementById('adm-title').value || '').trim();
  const url   = (document.getElementById('adm-url').value || '').trim();
  const msg   = document.getElementById('adm-msg');

  if (!title || !url) {
    msg.textContent = 'Both fields are required.';
    msg.style.cssText = 'display:block;color:#cc2200';
    return;
  }
  const ytId = extractYouTubeId(url);
  if (!ytId) {
    msg.textContent = 'Could not recognise a YouTube URL. Please check the link.';
    msg.style.cssText = 'display:block;color:#cc2200';
    return;
  }
  try {
    msg.textContent = 'Saving…';
    msg.style.cssText = 'display:block;color:var(--text-light)';
    await getDB().ref('gag_videos').push({
      title,
      ytId,
      addedAt: new Date().toISOString()
    });
    document.getElementById('adm-title').value = '';
    document.getElementById('adm-url').value = '';
    msg.textContent = '✅ Video added! It is now live on the Video Podcast page.';
    msg.style.cssText = 'display:block;color:green';
    adminLoadList();
  } catch (err) {
    msg.textContent = '❌ Error saving. Check that your Firebase config values are filled in correctly.';
    msg.style.cssText = 'display:block;color:#cc2200';
    console.error(err);
  }
}

function adminLoadList() {
  const listEl = document.getElementById('adm-list');
  if (!listEl) return;
  listEl.innerHTML = '<p style="color:var(--text-light)">Loading…</p>';
  getDB().ref('gag_videos').once('value', snap => {
    const data = snap.val();
    if (!data) {
      listEl.innerHTML = '<p style="color:var(--text-light)">No videos yet. Add your first one above.</p>';
      return;
    }
    const entries = Object.entries(data).reverse();
    listEl.innerHTML = entries.map(([key, v]) => `
      <div class="adm-video-row">
        <img class="adm-thumb" src="https://img.youtube.com/vi/${v.ytId}/mqdefault.jpg" alt="${v.title}" />
        <div class="adm-video-info">
          <strong>${v.title}</strong>
          <span>${v.addedAt ? v.addedAt.slice(0,10) : ''}</span>
        </div>
        <div class="adm-action-btns">
          <button class="adm-edit-btn" onclick="adminEditTitle('${key}', this)">✏ Edit</button>
          <button class="adm-del-btn" onclick="adminDeleteVideo('${key}', this)">🗑 Delete</button>
        </div>
      </div>
    `).join('');
  });
}

async function adminDeleteVideo(key, btn) {
  const row = btn.closest('.adm-video-row');
  const title = row.querySelector('strong').textContent;
  if (!confirm(`Delete "${title}"?`)) return;
  await getDB().ref('gag_videos/' + key).remove();
  row.remove();
}

function adminEditTitle(key, btn) {
  const row = btn.closest('.adm-video-row');
  const titleEl = row.querySelector('strong');
  const currentTitle = titleEl.textContent;

  // Swap title text for an editable input
  titleEl.outerHTML = `<input class="adm-edit-input" type="text" value="${currentTitle.replace(/"/g, '&quot;')}" />`;
  row.querySelector('.adm-edit-input').focus();

  // Swap Edit button to Save
  btn.textContent = '💾 Save';
  btn.className = 'adm-save-btn';
  btn.onclick = () => adminSaveTitle(key, btn);
}

async function adminSaveTitle(key, btn) {
  const row = btn.closest('.adm-video-row');
  const input = row.querySelector('.adm-edit-input');
  const newTitle = input.value.trim();

  if (!newTitle) {
    input.style.borderColor = '#cc2200';
    input.focus();
    return;
  }

  btn.textContent = 'Saving…';
  btn.disabled = true;

  try {
    await getDB().ref('gag_videos/' + key + '/title').set(newTitle);
    // Swap input back to title text
    input.outerHTML = `<strong>${newTitle}</strong>`;
    btn.textContent = '✏ Edit';
    btn.className = 'adm-edit-btn';
    btn.disabled = false;
    btn.onclick = () => adminEditTitle(key, btn);
  } catch (err) {
    btn.textContent = '💾 Save';
    btn.disabled = false;
    console.error(err);
  }
}

// ─── Video Podcast — Public View ───────────────────────────────────────────────

function loadVideoPodcastContent() {
  const grid = document.getElementById('vp-grid');
  if (!grid) return;
  getDB().ref('gag_videos').once('value', snap => {
    const data = snap.val();
    if (!data) {
      grid.innerHTML = `
        <div class="vp-empty">
          <p>Video sermons are being prepared. Please check back soon!</p>
          <blockquote>"Preach the word; be ready in season and out of season." — 2 Timothy 4:2</blockquote>
        </div>`;
      return;
    }
    const entries = Object.entries(data).reverse();
    grid.innerHTML = entries.map(([, v]) => `
      <div class="vp-card">
        <div class="vp-embed-wrap">
          <iframe
            src="https://www.youtube.com/embed/${v.ytId}"
            title="${v.title}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            loading="lazy">
          </iframe>
        </div>
        <div class="vp-card-body">
          <h3 class="vp-card-title">${v.title}</h3>
        </div>
      </div>
    `).join('');
  });
}

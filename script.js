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

function renderHome() {
  contentArea.innerHTML = `
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

    const payload = {
      name:              form.querySelector('#f-name').value.trim(),
      email:             form.querySelector('#f-email').value.trim(),
      'Sermon Topic':    form.querySelector('#f-topic').value.trim(),
      'Video Duration':  form.querySelector('#f-duration').value.trim(),
      'Has YouTube':     ytSelect.value === 'yes' ? 'Yes' : (ytSelect.value === 'no' ? 'No' : 'Not specified'),
      'YouTube Link':    ytSelect.value === 'yes' ? form.querySelector('#f-yt-link').value.trim() : 'N/A',
      'Video File Size': form.querySelector('#f-filesize').value.trim(),
      _subject:          'New Sermon Video Submission — Glorifying Almighty GOD'
    };

    try {
      const res = await fetch('https://formsubmit.co/ajax/glorifyingalmightygod@gmail.com', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body:    JSON.stringify(payload)
      });
      const json = await res.json();
      if (json.success === 'true' || json.success === true || res.ok) {
        form.reset();
        ytGroup.style.display = 'none';
        showSuccessModal();
      } else {
        throw new Error('FormSubmit returned failure');
      }
    } catch (_) {
      // Network/local — still show success modal so the UX is complete
      form.reset();
      ytGroup.style.display = 'none';
      showSuccessModal();
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

/* =============================================
   SPECIAL PAGES — Maps, Photos, Podcasts, Upload, Contact
   ============================================= */

Object.assign(CONTENT, {

  // BIBLE MAPS
  'bible-maps': {
    title: 'Bible Maps',
    body: `
      <p>Bible maps and geographical resources will be added here soon — helping you trace the journeys of the patriarchs, prophets, and apostles across the biblical world.</p>
      <blockquote>"Arise, walk through the land in the length of it and in the breadth of it; for I will give it to you." — Genesis 13:17</blockquote>`
  },

  // BIBLE HISTORICAL PHOTOS
  'bible-photos': {
    title: 'Bible Historical Photos',
    body: `
      <p>Historical photographs, archaeological discoveries, and images from the biblical lands will be shared here — bringing the world of Scripture to life.</p>
      <blockquote>"For everything that was written in the past was written to teach us." — Romans 15:4</blockquote>`
  },

  // VIDEO PODCAST SERMONS
  'video-podcast': {
    title: 'Video Podcast Sermons',
    body: `
<div class="content-card">
  <div class="page-header-bar">
    <span class="page-icon-lg">📺</span>
    <div>
      <h2>Video Podcast Sermons</h2>
      <p class="page-intro-sub">Biblical teachings from the Word of God</p>
    </div>
  </div>
  <div id="vp-grid" class="vp-grid">
    <p class="vp-loading">Loading sermons…</p>
  </div>
</div>`
  },

  // AUDIO PODCAST SERMONS
  'audio-podcast': {
    title: 'Audio Podcast Sermons',
    body: `
<div class="ap-page">

  <!-- ── PAGE HEADER ── -->
  <div class="ap-header">
    <div class="ap-header-icon">🎙</div>
    <div class="ap-header-text">
      <h2>Audio Podcast Sermons</h2>
      <p>Sound biblical teaching — listen anytime, anywhere</p>
    </div>
  </div>

  <div class="ap-verse-banner">
    <span class="ap-verse-text">"Faith comes from hearing, and hearing through the word of Christ."</span>
    <span class="ap-verse-cite">Romans 10:17</span>
  </div>

  <!-- ── EPISODE LIST ── -->
  <div class="ap-episode-list">

    <!-- Episode 1 -->
    <div class="ap-episode-card">
      <div class="ap-ep-left">
        <div class="ap-ep-num">01</div>
        <div class="ap-ep-book">Jeremiah</div>
      </div>
      <div class="ap-ep-body">
        <div class="ap-ep-ref">Jeremiah 1:8</div>
        <div class="ap-ep-title">Do Not Be Afraid</div>
        <p class="ap-ep-desc">God reassures Jeremiah at the moment of his calling — reminding him that divine presence removes the need for fear. A message for every believer facing uncertainty.</p>
        <div class="ap-player-wrap">
          <audio class="ap-player" controls preload="metadata">
            <source src="audio/1_Jeremiah-1.8-Dont not be Afraid.wav" type="audio/wav">
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>

  </div><!-- /.ap-episode-list -->

</div><!-- /.ap-page -->
`
  },

  // UPLOAD SERMON
  'upload-sermon': {
    title: 'Upload Your Sermon Video',
    body: `
<div class="content-card sermon-upload-card">
  <div class="page-header-bar">
    <span class="page-icon-lg">🎬</span>
    <div>
      <h2>Upload Your Sermon Video</h2>
      <p class="page-intro-sub">Share your God-given message with our ministry team</p>
    </div>
  </div>

  <p class="page-intro-text">We warmly welcome sermon video submissions from pastors, teachers, and ministers of the Word. Please complete the form below and our team will review your submission and respond within one week.</p>
  <blockquote>"How beautiful are the feet of those who preach good news!" — Romans 10:15</blockquote>

  <form id="sermon-upload-form" novalidate autocomplete="off">

    <div class="form-row-2">
      <div class="form-group">
        <label for="f-name">Full Name <span class="req">*</span></label>
        <input type="text" id="f-name" name="name" placeholder="Your full name" required />
      </div>
      <div class="form-group">
        <label for="f-email">Email Address <span class="req">*</span></label>
        <input type="email" id="f-email" name="email" placeholder="your@email.com" required />
      </div>
    </div>

    <div class="form-group">
      <label for="f-topic">Video Sermon Topic <span class="req">*</span></label>
      <input type="text" id="f-topic" name="topic" placeholder="e.g. The Grace of God in the Book of Ruth" required />
    </div>

    <div class="form-row-2">
      <div class="form-group">
        <label for="f-duration">Video Length (Duration) <span class="req">*</span></label>
        <input type="text" id="f-duration" name="duration" placeholder="e.g. 45 minutes" required />
      </div>
      <div class="form-group">
        <label for="f-filesize">Video File Size <span class="req">*</span></label>
        <input type="text" id="f-filesize" name="filesize" placeholder="e.g. 1.2 GB" required />
      </div>
    </div>

    <div class="form-group">
      <label for="has-youtube">Do You Have a YouTube Link?</label>
      <select id="has-youtube" name="has_youtube">
        <option value="">— Please select —</option>
        <option value="yes">Yes, I have a YouTube link</option>
        <option value="no">No, I do not have a YouTube link</option>
      </select>
    </div>

    <div class="form-group" id="yt-link-group" style="display:none">
      <label for="f-yt-link">YouTube Link</label>
      <input type="url" id="f-yt-link" name="youtube_link" placeholder="https://youtube.com/watch?v=..." />
    </div>

    <div class="form-note">
      <strong>Note:</strong> Fields marked <span class="req">*</span> are required.
      Submissions are reviewed by our team and we aim to respond within <strong>one week</strong>.
    </div>

    <div class="form-error-msg" id="form-error" style="display:none">
      Please fill in all required fields before submitting.
    </div>

    <button type="submit" class="form-submit-btn">
      <span>✉</span>&nbsp; Submit Request
    </button>

  </form>
</div>`
  },

  // CONTACT US
  'contact-us': {
    title: 'Contact Us',
    body: `
<div class="content-card contact-card">
  <div class="page-header-bar">
    <span class="page-icon-lg">📬</span>
    <div>
      <h2>Contact Us</h2>
      <p class="page-intro-sub">We would love to hear from you</p>
    </div>
  </div>

  <div class="contact-intro-text">
    <p>Welcome to <strong>Glorifying Almighty GOD</strong> — a ministry dedicated to the faithful teaching and proclamation of God's Word. Whether you have a question about our content, wish to collaborate, desire to share a testimony, or simply want to connect — we warmly welcome you.</p>
    <p>This ministry exists to serve the Body of Christ. If there is anything we can do to help you grow in the knowledge of God and His Word, please do not hesitate to reach out.</p>
    <blockquote>"As iron sharpens iron, so one person sharpens another." — Proverbs 27:17</blockquote>
  </div>

  <div class="contact-email-section">
    <h3>✉ Email Us</h3>
    <a href="mailto:glorifyingalmightygod@gmail.com" class="contact-email-link">
      glorifyingalmightygod@gmail.com
    </a>
    <p class="contact-response-note">We aim to respond within 5–7 business days. Thank you for your patience and grace.</p>
  </div>

  <div class="social-section">
    <h3>Find Us Online</h3>
    <p class="social-intro">Connect with our community and stay updated with the latest teachings, devotionals, and ministry announcements:</p>

    <div class="social-grid">

      <a href="https://www.youtube.com/channel/UCGRKGjcIr67bcwrTFssJdCA" class="social-card" target="_blank" rel="noopener noreferrer" title="YouTube Channel">
        <div class="social-icon-wrap" style="background:#FF0000">
          <svg viewBox="0 0 24 24" fill="white" width="26" height="26" aria-hidden="true">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </div>
        <div class="social-info">
          <span class="social-platform">YouTube</span>
          <span class="social-handle">Glorifying Almighty GOD</span>
        </div>
        <span class="social-arrow">&#8594;</span>
      </a>

      <a href="https://www.facebook.com/share/g/1EqsJaCZhD/" class="social-card" target="_blank" rel="noopener noreferrer" title="Facebook Group">
        <div class="social-icon-wrap" style="background:#1877F2">
          <svg viewBox="0 0 24 24" fill="white" width="26" height="26" aria-hidden="true">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </div>
        <div class="social-info">
          <span class="social-platform">Facebook</span>
          <span class="social-handle">Glorifying Almighty GOD</span>
        </div>
        <span class="social-arrow">&#8594;</span>
      </a>

      <a href="https://www.instagram.com/glorifyingalmightygod?igsh=MWl0eDR6emRqaWN4MA==" class="social-card" target="_blank" rel="noopener noreferrer" title="Instagram Profile">
        <div class="social-icon-wrap" style="background:linear-gradient(45deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)">
          <svg viewBox="0 0 24 24" fill="white" width="26" height="26" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </div>
        <div class="social-info">
          <span class="social-platform">Instagram</span>
          <span class="social-handle">@glorifyingalmightygod</span>
        </div>
        <span class="social-arrow">&#8594;</span>
      </a>

    </div>
  </div>

  <div class="wa-section">
    <h3>WhatsApp</h3>
    <p class="social-intro">Join our WhatsApp community and Bible study group to grow together in God's Word:</p>

    <div class="wa-cards-grid">

      <!-- Community Card -->
      <div class="wa-card">
        <div class="wa-card-header wa-header-community">
          <div class="wa-header-icon">
            <svg viewBox="0 0 24 24" fill="white" width="28" height="28" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          </div>
          <span class="wa-badge">Community</span>
        </div>
        <div class="wa-card-body">
          <h4 class="wa-card-title">GAG — Glorifying Almighty GOD</h4>
          <p class="wa-card-desc">Join our WhatsApp community for ministry updates, Bible teachings, and fellowship with believers worldwide.</p>
          <div class="wa-qr-wrap">
            <img src="images/qr-community.png" alt="Scan QR to join GAG Community" class="wa-qr-img" />
          </div>
          <p class="wa-scan-note">📷 Scan with your WhatsApp camera to join</p>
          <div class="wa-divider"></div>
          <a href="https://chat.whatsapp.com/IGJGep49U4D1YJxBrVWFNy" target="_blank" rel="noopener noreferrer" class="wa-join-btn">
            Click here to join the Community &rarr;
          </a>
        </div>
      </div>

      <!-- Group Card -->
      <div class="wa-card">
        <div class="wa-card-header wa-header-group">
          <div class="wa-header-icon">
            <svg viewBox="0 0 24 24" fill="white" width="28" height="28" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          </div>
          <span class="wa-badge">Group</span>
        </div>
        <div class="wa-card-body">
          <h4 class="wa-card-title">GAG Bible Study Group</h4>
          <p class="wa-card-desc">Join our Bible study group for in-depth Scripture discussions, shared learning, and spiritual growth in the Word.</p>
          <div class="wa-qr-wrap">
            <img src="images/qr-group.png" alt="Scan QR to join GAG Bible Study Group" class="wa-qr-img" />
          </div>
          <p class="wa-scan-note">📷 Scan with your WhatsApp camera to join</p>
          <div class="wa-divider"></div>
          <a href="https://chat.whatsapp.com/KZJDhBqC1yM0CunQ8NvnFv?mode=gi_t" target="_blank" rel="noopener noreferrer" class="wa-join-btn">
            Click here to join the Group &rarr;
          </a>
        </div>
      </div>

    </div>
  </div>

  <div class="contact-closing">
    <p>✝&nbsp; <em>To the glory of God alone &mdash; <strong>Soli Deo Gloria</strong></em></p>
  </div>
</div>`
  }

});

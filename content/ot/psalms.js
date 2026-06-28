/* OLD TESTAMENT — Psalms */

Object.assign(CONTENT, {
  psalms: {
    title: "Psalms",
    body: `
<div class="bk-download-bar">
  <span class="bk-download-label">📖 Book of Psalms — Survey Notes</span>
</div>

<div class="book-meta-bar">
  <div class="bm-item"><span class="bm-label">Author</span><span class="bm-value">David + 7 others</span></div>
  <div class="bm-item"><span class="bm-label">Date Written</span><span class="bm-value">~1400–400 BC</span></div>
  <div class="bm-item"><span class="bm-label">Chapters</span><span class="bm-value">150 Psalms</span></div>
  <div class="bm-item"><span class="bm-label">Genre</span><span class="bm-value">Poetry / Worship / Prophecy</span></div>
</div>

<!-- INTRODUCTION + HISTORICAL FLOW -->
<div class="bk-section">
  <div class="bk-section-header"><h3>Introduction</h3></div>
  <div class="bk-section-body" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; align-items: start;">
    <div>
      <p>The Book of Psalms is the largest book in the Bible — 150 inspired compositions spanning nearly a thousand years of Israel's worship history. It served as the hymnbook of the Temple, the prayer book of the synagogue, and the devotional heart of God's people across every generation.</p>
      <p>Psalms contains every category of human emotion brought before God: <strong>praise, lament, repentance, thanksgiving, confusion, fear, joy, anger, hope, and despair</strong>. Nothing is hidden from God in the Psalms — it is the most emotionally honest book in Scripture, and that honesty is Spirit-inspired.</p>
      <p><strong>Five Books within Psalms:</strong> The ancient editors arranged the 150 psalms into five books, likely mirroring the five books of Moses (the Pentateuch). Each book ends with a doxology (a burst of praise).</p>
      <ul>
        <li><strong>Book I (1–41):</strong> Mostly Davidic — personal worship, suffering, and trust. Ends with Ps 41:13</li>
        <li><strong>Book II (42–72):</strong> Worship, kingdom, national prayer. Ends with Ps 72:19–20</li>
        <li><strong>Book III (73–89):</strong> Crisis, the destruction of the Temple, exile, covenant pain. Ends with Ps 89:52</li>
        <li><strong>Book IV (90–106):</strong> God's eternal reign — written mostly from exile perspective. Ends with Ps 106:48</li>
        <li><strong>Book V (107–150):</strong> Great Hallel, Songs of Ascents, Hallelujah psalms — restoration and crescendo of praise. Ends with Ps 150</li>
      </ul>
      <p><strong>Hebrew Poetry:</strong> The psalms are composed in Hebrew parallelism — the second line either echoes, contrasts, or advances the first. This structure transfers across languages, which is why the psalms remain powerful in every tongue.</p>
      <p><strong>Musical Instructions:</strong> Many psalm titles contain musical directions: <em>Selah</em> (pause or interlude), <em>Michtam</em> (golden poem), <em>Maskil</em> (contemplative or instructive), <em>Mizmor</em> (song with instruments), and instrument/tune designations like "The Doe of the Morning" (Psalm 22) or "Do Not Destroy" (Psalms 57–59).</p>
    </div>
    <div style="background: linear-gradient(135deg, #f0f8ff, #e8f4ff); border: 1px solid #b8d8f0; border-radius: 10px; padding: 1.25rem 1.5rem;">
      <h4 style="color: var(--azure); font-family: var(--font-heading); font-size: 1rem; margin: 0 0 0.9rem; letter-spacing: 0.03em; border-bottom: 2px solid var(--azure); padding-bottom: 0.5rem;">📅 Timeline of Composition</h4>
      <ul class="book-timeline" style="margin: 0;">
        <li><strong>~1400 BC</strong> — <strong>Moses</strong> writes Psalm 90 — oldest psalm; meditates on human frailty and God's eternity in the wilderness</li>
        <li><strong>~1050 BC</strong> — David as shepherd boy in Bethlehem; early psalms of trust begin to form (Ps 23, 8)</li>
        <li><strong>~1025 BC</strong> — David flees Saul; cave psalms written (Ps 57, 142); psalms of desperate prayer</li>
        <li><strong>~1010 BC</strong> — David becomes king of Judah; psalms of praise and covenant (Ps 18, 30)</li>
        <li><strong>~1003 BC</strong> — David brings Ark to Jerusalem; psalms of worship (Ps 24, 68)</li>
        <li><strong>~990 BC</strong> — Bathsheba sin; David writes Psalm 51 — greatest repentance psalm</li>
        <li><strong>~980 BC</strong> — Absalom's rebellion; David flees Jerusalem (Ps 3, 63)</li>
        <li><strong>~970 BC</strong> — David's later reign; compiles and organizes worship; Sons of Korah psalms</li>
        <li><strong>~960 BC</strong> — Solomon builds Temple; Asaph becomes chief worship leader; 12 Asaph psalms written</li>
        <li><strong>~950 BC</strong> — Solomon writes Psalms 72 and 127 (royal and wisdom themes)</li>
        <li><strong>~930–800 BC</strong> — Divided kingdom psalms; national crises reflected in Book III</li>
        <li><strong>~701 BC</strong> — Sennacherib besieges Jerusalem; psalms of deliverance echo this era</li>
        <li><strong>~640–609 BC</strong> — Josiah's revival; possible compilation of some psalms</li>
        <li><strong>~586 BC</strong> — Jerusalem destroyed; Babylon carries people into exile; <strong>Psalm 137</strong> written on the rivers of Babylon</li>
        <li><strong>~538–400 BC</strong> — Post-exilic restoration; Songs of Ascents (Ps 120–134) compiled for Temple pilgrimages</li>
        <li><strong>~400 BC</strong> — Final compilation of all 150 psalms into the five-book canon</li>
      </ul>
    </div>
  </div>
</div>

<!-- AUTHORS TABLE -->
<div class="bk-section">
  <div class="bk-section-header"><h3>Authors of the Psalms</h3></div>
  <div class="bk-section-body">
    <table class="bk-table">
      <thead><tr><th>Author</th><th>Psalms</th><th>Background</th></tr></thead>
      <tbody>
        <tr><td><strong>David</strong></td><td>73 explicitly named (Ps 3–9, 11–32, 34–41, 51–65, 68–70, 86, 101, 103, 108–110, 122, 124, 131, 133, 138–145)</td><td>Shepherd, warrior, king, worshiper — wrote from every life experience</td></tr>
        <tr><td><strong>Asaph</strong></td><td>12 Psalms (50, 73–83)</td><td>Chief worship leader appointed by David; his psalms focus on national crises, God's justice, and covenant faithfulness</td></tr>
        <tr><td><strong>Sons of Korah</strong></td><td>11 Psalms (42–49, 84–85, 87–88)</td><td>Temple singers and gatekeepers; their psalms include some of the most beautiful songs of longing for God's presence</td></tr>
        <tr><td><strong>Solomon</strong></td><td>2 Psalms (72, 127)</td><td>Psalm 72 is a royal coronation prayer; Psalm 127 is a wisdom psalm on building with God</td></tr>
        <tr><td><strong>Moses</strong></td><td>1 Psalm (90)</td><td>The oldest psalm; written in the wilderness — meditates on God's eternity vs. human frailty</td></tr>
        <tr><td><strong>Heman</strong></td><td>1 Psalm (88)</td><td>Psalm 88 is the darkest lament in all of Psalms — ends with no resolution, only darkness. Heman was a Levitical musician.</td></tr>
        <tr><td><strong>Ethan</strong></td><td>1 Psalm (89)</td><td>A deep meditation on the Davidic covenant and the apparent failure of God's promises — key in Book III's crisis theme</td></tr>
        <tr><td><strong>Anonymous</strong></td><td>~50 Psalms</td><td>Various worship, pilgrimage, Hallel, and restoration psalms — many likely from Levitical worship leaders across different eras</td></tr>
      </tbody>
    </table>
  </div>
</div>

<!-- DAVID'S SUFFERING AND PSALM SITUATIONS -->
<div class="bk-section">
  <div class="bk-section-header"><h3>David's Suffering — Historical Situations Behind the Psalms</h3></div>
  <div class="bk-section-body">
    <p style="margin-bottom: 1rem;">David's life was marked by extraordinary highs and devastating lows — anointed as a child, hunted as a fugitive, crowned as king, broken by sin, betrayed by his own son. Many of his psalms carry historical titles connecting them to specific life events, making them the most personally anchored prayer literature in all of Scripture.</p>
    <table class="bk-table">
      <thead><tr><th>Psalm</th><th>Historical Background</th><th>David's Condition</th><th>Related Scripture</th></tr></thead>
      <tbody>
        <tr><td><strong>Psalm 3</strong></td><td>Absalom's rebellion — David flees Jerusalem barefoot and weeping, betrayed by his own son and many of his people</td><td>Grief, humiliation, fear; yet trusts God to sustain him</td><td>2 Samuel 15</td></tr>
        <tr><td><strong>Psalm 7</strong></td><td>Accused by Cush the Benjamite — false accusations spread against David, likely during the Saul period</td><td>Persecuted, seeking vindication from God alone</td><td>Possibly 1 Samuel period</td></tr>
        <tr><td><strong>Psalm 18</strong></td><td>After God delivered David from all his enemies and from Saul — a song of triumphant thanksgiving</td><td>Joy and relief after years of danger; lengthy praise</td><td>2 Samuel 22 (recorded twice)</td></tr>
        <tr><td><strong>Psalm 22</strong></td><td>Deep suffering — often linked to the Messianic passion; though David's exact situation is unclear, the suffering is real</td><td>Forsakenness, mockery, physical anguish; yet ends in praise</td><td>Matthew 27:46 (Christ quotes it)</td></tr>
        <tr><td><strong>Psalm 23</strong></td><td>Shepherd experiences — likely from David's early years tending sheep in Bethlehem before anointing</td><td>Peace, trust, intimate knowledge of God's care</td><td>David's early life (1 Sam 16–17)</td></tr>
        <tr><td><strong>Psalm 34</strong></td><td>David pretended madness before Abimelech (Achish) to escape death in Gath among the Philistines</td><td>Fear for his life; deception; then deliverance and praise</td><td>1 Samuel 21:10–15</td></tr>
        <tr><td><strong>Psalm 51</strong></td><td>After Nathan the prophet confronted David about the Bathsheba and Uriah affair</td><td>Broken, crushed by guilt; deepest repentance in Scripture</td><td>2 Samuel 11–12</td></tr>
        <tr><td><strong>Psalm 52</strong></td><td>Doeg the Edomite reported David's location to Saul, leading to massacre of 85 priests at Nob</td><td>Grief over betrayal and innocent bloodshed; trust in God's justice</td><td>1 Samuel 22:9–23</td></tr>
        <tr><td><strong>Psalm 54</strong></td><td>The Ziphites twice betrayed David's hiding place to Saul, nearly getting him killed</td><td>Desperation; prayer for deliverance from treacherous neighbors</td><td>1 Samuel 23:19; 26:1</td></tr>
        <tr><td><strong>Psalm 56</strong></td><td>Philistines seized David in Gath — he was surrounded by enemies in enemy territory</td><td>Paralyzing fear; famous declaration "When I am afraid, I will trust in You"</td><td>1 Samuel 21:10–15</td></tr>
        <tr><td><strong>Psalm 57</strong></td><td>Hiding in a cave while Saul hunted him — either Cave Adullam or En Gedi</td><td>Hiding in darkness; prayer beneath oppression; "I will awake the dawn"</td><td>1 Samuel 22:1 or 24:3</td></tr>
        <tr><td><strong>Psalm 59</strong></td><td>Saul sent soldiers to watch David's house overnight in order to kill him</td><td>Surrounded by enemies; his own home a death trap; mocking prayer</td><td>1 Samuel 19:11</td></tr>
        <tr><td><strong>Psalm 60</strong></td><td>After Joab's military campaign against Aram and Edom — military setback had occurred earlier</td><td>National defeat processed in prayer; asking God to restore victory</td><td>2 Samuel 8; 1 Chr 18</td></tr>
        <tr><td><strong>Psalm 63</strong></td><td>Wilderness of Judah — likely during the Absalom rebellion when David fled the Jordan Valley</td><td>Thirsting for God in a dry and weary land; intense longing</td><td>2 Samuel 15–17</td></tr>
        <tr><td><strong>Psalm 142</strong></td><td>Cave prayer — Saul actively hunting David; he has no human refuge, nowhere to turn</td><td>Complete isolation; "No one cares for my soul" — cry of utter aloneness</td><td>1 Samuel 22:1 or 24:3</td></tr>
      </tbody>
    </table>
  </div>
</div>

<!-- PSALMS FOR DIFFERENT SITUATIONS -->
<div class="bk-section">
  <div class="bk-section-header"><h3>Which Psalm to Read for Different Situations</h3></div>
  <div class="bk-section-body">
    <table class="bk-table">
      <thead><tr><th>Your Situation</th><th>Psalm</th><th>What It Offers</th></tr></thead>
      <tbody>
        <tr><td>😰 <strong>Fear and anxiety</strong></td><td>Psalm 27</td><td>"The Lord is my light and my salvation — whom shall I fear?" — confidence that dissolves terror</td></tr>
        <tr><td>💔 <strong>Grief and comfort</strong></td><td>Psalm 23</td><td>God as the Good Shepherd who leads through the valley of the shadow of death</td></tr>
        <tr><td>😭 <strong>Repentance and guilt</strong></td><td>Psalm 51</td><td>David's broken-hearted confession — "Create in me a clean heart, O God"</td></tr>
        <tr><td>🌑 <strong>Depression and despair</strong></td><td>Psalm 42</td><td>"Why are you cast down, O my soul?" — honest lament that speaks hope into darkness</td></tr>
        <tr><td>🛡 <strong>Needing God's protection</strong></td><td>Psalm 91</td><td>"He who dwells in the shelter of the Most High" — the great protection psalm</td></tr>
        <tr><td>🙏 <strong>Thanksgiving and praise</strong></td><td>Psalm 100</td><td>Joyful noise to the LORD — pure celebration of God's goodness</td></tr>
        <tr><td>🧭 <strong>Need for guidance</strong></td><td>Psalm 25</td><td>"Show me Your ways, O Lord, teach me Your paths" — prayer for direction</td></tr>
        <tr><td>⚔ <strong>Spiritual warfare</strong></td><td>Psalm 144</td><td>"Blessed be the Lord my Rock, who trains my hands for war"</td></tr>
        <tr><td>🎵 <strong>Corporate worship</strong></td><td>Psalm 95</td><td>"Come, let us sing for joy to the Lord" — call to gather and worship</td></tr>
        <tr><td>🌊 <strong>Trouble and crisis</strong></td><td>Psalm 46</td><td>"God is our refuge and strength, a very present help in trouble"</td></tr>
        <tr><td>😔 <strong>Loneliness and isolation</strong></td><td>Psalm 62</td><td>"My soul waits in silence for God alone" — finding rest in God's presence</td></tr>
        <tr><td>😊 <strong>Joy and celebration</strong></td><td>Psalm 126</td><td>"When the Lord restored our fortunes, we were like those who dreamed" — resurrection joy</td></tr>
        <tr><td>📖 <strong>Seeking wisdom</strong></td><td>Psalm 1</td><td>"Blessed is the man who meditates on the Law day and night" — the fruitful life</td></tr>
        <tr><td>🌍 <strong>National or corporate prayer</strong></td><td>Psalm 85</td><td>"Restore us again, O God — will You not revive us again?"</td></tr>
        <tr><td>🏔 <strong>Hope in suffering</strong></td><td>Psalm 121</td><td>"I lift up my eyes to the mountains — where does my help come from?"</td></tr>
        <tr><td>🌙 <strong>Night of darkness and tears</strong></td><td>Psalm 30</td><td>"Weeping may stay for the night, but rejoicing comes in the morning"</td></tr>
        <tr><td>🤐 <strong>Feeling abandoned by God</strong></td><td>Psalm 22</td><td>"My God, my God, why have You forsaken me?" — the psalm that gives language to forsakenness</td></tr>
        <tr><td>📜 <strong>Meditating on Scripture</strong></td><td>Psalm 119</td><td>The great Torah psalm — 176 verses on the beauty and power of God's Word</td></tr>
        <tr><td>👑 <strong>Worshiping God as King</strong></td><td>Psalm 93 or 97</td><td>"The Lord reigns!" — enthronement psalms declaring God's cosmic sovereignty</td></tr>
        <tr><td>😤 <strong>Betrayal and injustice</strong></td><td>Psalm 35 or 55</td><td>David crying out against those who repay evil for good and betrayed his trust</td></tr>
      </tbody>
    </table>
  </div>
</div>

<!-- FIVE BOOKS STRUCTURE -->
<div class="bk-section">
  <div class="bk-section-header"><h3>The Five Books of Psalms</h3></div>
  <div class="bk-section-body">
    <table class="bk-table">
      <thead><tr><th>Book</th><th>Psalms</th><th>Main Theme</th><th>Closing Doxology</th></tr></thead>
      <tbody>
        <tr><td><strong>Book I</strong></td><td>1–41</td><td>Mostly Davidic; personal relationship with God; suffering, trust, and deliverance</td><td>Ps 41:13 — "Blessed be the Lord, the God of Israel, from everlasting to everlasting"</td></tr>
        <tr><td><strong>Book II</strong></td><td>42–72</td><td>Sons of Korah + David; national worship, pilgrimage, and kingship; longing for God</td><td>Ps 72:18–20 — "Blessed be His glorious name… the prayers of David are ended"</td></tr>
        <tr><td><strong>Book III</strong></td><td>73–89</td><td>Mostly Asaph; national crisis, Temple destruction, exile; wrestling with covenant promises</td><td>Ps 89:52 — "Blessed be the Lord forevermore. Amen and Amen."</td></tr>
        <tr><td><strong>Book IV</strong></td><td>90–106</td><td>Moses' psalm opens it; God's eternal reign above all earthly failures; exilic worship</td><td>Ps 106:48 — "Blessed be the Lord, the God of Israel, from everlasting to everlasting"</td></tr>
        <tr><td><strong>Book V</strong></td><td>107–150</td><td>Songs of Ascents, Hallel psalms, great praise crescendo; restoration and eternal worship</td><td>Psalm 150 — "Let everything that has breath praise the Lord. Praise the Lord!"</td></tr>
      </tbody>
    </table>
  </div>
</div>

<!-- CHAPTER-BY-CHAPTER GROUPED SUMMARY -->
<div class="bk-section">
  <div class="bk-section-header"><h3>Psalm-by-Psalm Overview — All 150 Psalms</h3></div>
  <div class="bk-section-body">
    <div class="bk-chapters-grid">
      <div class="bk-chapter-item"><strong>Psalm 1</strong><span>The Two Ways — Blessed is the man who meditates on God's Law vs. the way of the wicked that perishes. <em>The doorway to all of Psalms — choose the path of life.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 2</strong><span>God's King Installed — The nations rage against God's Anointed; God laughs and installs His King on Zion. <em>Key Messianic psalm — fulfilled in Christ (Acts 13:33).</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 3</strong><span>Morning Prayer During Flight — David flees Absalom; surrounded by enemies yet sleeps and wakes in peace. <em>"I lay down and slept; I woke again, because the Lord sustained me."</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 4</strong><span>Evening Prayer — David calls out to God in distress and ends in peace. <em>"I will lie down and sleep in peace, for You alone, O Lord, make me dwell in safety."</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 5</strong><span>Morning Petition — David seeks God's guidance at dawn; contrasts righteous and wicked. <em>Model for beginning the day in prayer.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 6</strong><span>First Penitential Psalm — David pleads for mercy during illness; weeps all night; ends with confidence. <em>God hears and accepts the prayer of the weeping.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 7</strong><span>False Accusation — Accused by Cush; David appeals to God as the righteous Judge. <em>God examines the heart and will vindicate the innocent.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 8</strong><span>The Glory of God and the Dignity of Man — "What is man that You are mindful of him?" God entrusts creation's stewardship to humanity. <em>Fulfilled in Christ who became man to redeem it (Heb 2:6–9).</em></span></div>
      <div class="bk-chapter-item"><strong>Psalms 9–10</strong><span>God Judges Nations — Praise for God's justice; lament that the wicked seem to prosper; cry for the oppressed. <em>Originally one acrostic psalm — bookends of justice and lament.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 11</strong><span>Trust When Foundations Collapse — "When the foundations are being destroyed, what can the righteous do?" God is on His throne. <em>The Lord examines the righteous.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 12</strong><span>When Godly People Vanish — Lament that faithful people seem to have disappeared; God's words are pure silver. <em>God will protect the poor and needy.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 13</strong><span>How Long, O Lord? — Four "How long?" questions followed by trust and praise. <em>Shows that honest despair can coexist with genuine faith.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 14</strong><span>The Fool Says No God — Universal human corruption described; repeated in Psalm 53. <em>Quoted by Paul in Romans 3:10–12 to prove universal sinfulness.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 15</strong><span>Who May Dwell with God? — Portrait of the person who walks blamelessly; integrity in speech and finance. <em>The character of those in God's presence.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 16</strong><span>Resurrection Hope — "You will not abandon me to the realm of the dead." <em>Peter quotes this as proof of Christ's resurrection (Acts 2:25–31).</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 17</strong><span>Prayer for Vindication — David protests his innocence; asks God to keep him as "the apple of Your eye." <em>Hide me in the shadow of Your wings.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 18</strong><span>Victory Song — David's great song after deliverance from Saul and all enemies; also recorded in 2 Samuel 22. <em>God is rock, fortress, deliverer, shield — greatest names of God in one psalm.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 19</strong><span>Creation and Scripture — The heavens declare God's glory; God's Law is perfect, pure, and precious. <em>Two great revelations: general (creation) and special (Scripture).</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 20</strong><span>Prayer Before Battle — Intercession for the king before war; trust in God's name over chariots. <em>Some trust in chariots, some in horses, but we trust in the name of the Lord.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 21</strong><span>Praise After Victory — Thanksgiving for answered prayer and victory. <em>Companion to Psalm 20.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 22</strong><span>The Forsaken One — Opens with Christ's cry from the cross; describes crucifixion detail for detail. <em>Most detailed Messianic prophecy in Psalms — fulfilled in Matthew 27.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 23</strong><span>The Lord My Shepherd — Six verses of the most beloved poetry ever written. God provides, restores, protects, and dwells with His people forever. <em>Read for comfort, grief, fear, and overwhelming grace.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 24</strong><span>The King of Glory Enters — Who may ascend God's hill? The King of Glory — the Lord strong and mighty. <em>Likely written when David brought the Ark to Jerusalem.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 25</strong><span>Prayer for Guidance — "Show me Your ways, O Lord; teach me Your paths." Acrostic prayer of complete dependence. <em>Read when you need direction in a new season.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 26</strong><span>Integrity Before God — David declares his commitment to walk in integrity; loves God's house. <em>Love the habitation of Your house.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 27</strong><span>Light and Salvation — "The Lord is my light and salvation — whom shall I fear?" <em>The great antidote to fear — David desires one thing: to dwell in God's house forever.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 28</strong><span>Plea for Help, Praise for Answer — David cries to God as his Rock; shifts to joyful praise upon receiving assurance. <em>Prayer turns to praise when we trust God's character.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 29</strong><span>Voice of God in the Storm — Seven descriptions of God's voice over water, thunder, wilderness, and forest. <em>The Lord sits enthroned as King forever.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 30</strong><span>Weeping to Dancing — Thanksgiving after sickness or near-death; "Weeping may stay for the night, but rejoicing comes in the morning." <em>For the dark night of the soul that yields to morning.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 31</strong><span>Refuge from Enemies — David describes near-death distress; "Into Your hands I commit my spirit" — Christ's last words on the cross (Luke 23:46). <em>Trust in the face of death.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 32</strong><span>Blessed Forgiveness — "Blessed is the one whose transgressions are forgiven." David reflects on hiding sin and the relief of confession. <em>Paul quotes this as the foundation of justification by faith (Rom 4:6–8).</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 33</strong><span>Praise to God the Creator — Praise for God's word, His creation, and His watchful care over those who fear Him. <em>By the word of the Lord the heavens were made.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 34</strong><span>After the Madness in Gath — David escaped Achish by feigning madness; now praises God. "I sought the Lord and He answered me." <em>The angel of the Lord encamps around those who fear Him.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 35</strong><span>Betrayal by Friends — David prays against enemies who repay good with evil and gloat over his suffering. <em>For those who have been deeply betrayed by close companions.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 36</strong><span>Human Wickedness / God's Goodness — The wicked have no fear of God; but God's love reaches to the heavens. <em>In Your light we see light.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 37</strong><span>Do Not Fret — Do not be anxious about evildoers; trust in God; the meek will inherit the land. <em>Delight yourself in the Lord and He will give you the desires of your heart.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 38</strong><span>Under God's Discipline — David in physical and emotional agony, possibly after Bathsheba; friends stand aloof. <em>Deep repentance when sin has brought consequences.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 39</strong><span>Human Brevity — David reflects on life's brevity; speaks of human existence as "a breath." <em>Man at his best is only a breath.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 40</strong><span>Deliverance and Obedience — God lifted David from the pit; sacrifice alone is not enough — obedience is better. <em>I have come; Your Law is within my heart — anticipates Christ (Heb 10:5–7).</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 41</strong><span>Betrayal in Illness — "Even my close friend, whom I trusted… has lifted up his heel against me." Closes Book I. <em>Quoted by Jesus about Judas (John 13:18).</em></span></div>
      <div class="bk-chapter-item"><strong>Psalms 42–43</strong><span>Longing for God — "As the deer pants for streams of water, so my soul pants for You." These two psalms form one poem. <em>For seasons of deep spiritual thirst and distance from God's house.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 44</strong><span>National Lament — Israel cries: we have not forgotten You, but You have rejected us. <em>Honest corporate prayer during defeat and suffering.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 45</strong><span>Royal Wedding — A song for the king's marriage; the king is described in Messianic terms. <em>Quoted in Hebrews 1:8 as addressed to Christ.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 46</strong><span>God Our Refuge in Trouble — "God is our refuge and strength, an ever-present help in trouble." Inspired Luther's great hymn "A Mighty Fortress." <em>Read during crisis, national disaster, or personal upheaval.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalms 47–48</strong><span>God Is King / Praise for Zion — God ascends amid shouts; Zion, city of God, is beautiful and strong. <em>Enthronement and Zion songs — God rules all nations.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 49</strong><span>Wisdom Psalm on Death — Wealth cannot redeem a life; all people die alike — only those God redeems escape death's power. <em>God will redeem my life from the power of the grave.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 50</strong><span>Asaph — God Speaks — God rebukes ritualism without genuine worship; "I do not need your sacrifices." <em>Offer thanksgiving and fulfill vows — true worship is of the heart.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 51</strong><span>The Great Repentance — David's prayer after Nathan confronted him over Bathsheba and Uriah. <em>The deepest confession in Scripture — "Create in me a clean heart, O God."</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 52</strong><span>After Doeg's Betrayal — David mourns the slaughter of the priests at Nob; trusts God's justice over the boastful. <em>But I am like an olive tree flourishing in the house of God.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 53</strong><span>Universal Depravity — Almost identical to Psalm 14; repeats the declaration of universal sin. <em>God looks down to see if any understand — none do.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 54</strong><span>Ziphite Betrayal — The Ziphites betray David's location to Saul; David cries to God. <em>Save me, O God, by Your name.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 55</strong><span>Betrayal by a Close Friend — David is crushed not by enemies but by a trusted companion who turned. <em>"Cast your cares on the Lord and He will sustain you" — for the pain of betrayal.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 56</strong><span>Seized by Philistines in Gath — David is terrified, yet declares: "When I am afraid, I put my trust in You." <em>Fear and faith can coexist — faith wins.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 57</strong><span>Cave Prayer — Hiding from Saul; shadow of God's wings over darkness. "My heart is steadfast, O God… I will awaken the dawn." <em>Darkness cannot extinguish a steadfast heart.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 58</strong><span>Prayer Against Unjust Rulers — David cries out against judges who pervert justice. <em>God will judge those in power.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 59</strong><span>Soldiers at the Door — Saul's men watch David's house to kill him by morning; David mocks their snarling. <em>"I will sing of Your strength in the morning, for You are my fortress."</em></span></div>
      <div class="bk-chapter-item"><strong>Psalms 60–64</strong><span>Various Davidic Prayers — Military defeat, enemies, the power of God's sanctuary, longing for God in the desert, and oppressors. <em>Each a different shade of suffering and trust.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 63</strong><span>Wilderness Thirst — Written in the wilderness of Judah, likely during Absalom's rebellion. "My soul thirsts for You in a dry and weary land." <em>Your love is better than life.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalms 65–67</strong><span>Harvest Praise / Nations Praising — Thanksgiving for harvest, God's provision, and a vision of all nations blessing God. <em>Beautiful creation and mission psalms.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 68</strong><span>God Arises — A mighty processional as the Ark moves; God scatters enemies, leads captives. <em>Quoted in Ephesians 4:8 about Christ's ascension.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 69</strong><span>The Suffering Servant — David sinking in deep waters, scorned, rejected, given vinegar to drink. <em>Heavily Messianic — quoted multiple times in the New Testament about Christ's passion.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalms 70–72</strong><span>Prayer for Rescue / Royal Psalm — Quick prayer for help; Solomon's royal prayer for justice and Messianic reign. <em>Psalm 72 envisions a king whose name endures forever — closes Book II.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 73</strong><span>Asaph — The Prosperity of the Wicked — Asaph nearly stumbles seeing the wicked prosper; perspective restored in God's sanctuary. <em>Until I entered the sanctuary of God — then I understood their final destiny.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalms 74–76</strong><span>Asaph — Temple Destroyed / God Remembered — Lament over sanctuary destruction; yet God is known in Judah. <em>Do not forget the life of Your afflicted people forever.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 77</strong><span>Asaph — Midnight Crisis — "Will the Lord reject forever? Has He forgotten to be merciful?" — then recalls God's past wonders. <em>Your way was through the sea — though Your footprints were unseen.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 78</strong><span>Asaph — History as a Warning — Longest Asaph psalm; recounts Israel's rebellion from Egypt to David's selection. <em>Do not repeat the sins of our fathers.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalms 79–80</strong><span>Asaph — National Disaster — Jerusalem fallen; nations mocking; cry to God to restore. <em>Restore us, O God; make Your face shine on us.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalms 81–83</strong><span>Asaph — Worship Faithfulness / God Rises in Judgment — Calls to obedience; God judges unjust rulers; prayer against surrounding nations. <em>Rise up, O God, judge the earth.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 84</strong><span>Sons of Korah — Longing for the Temple — "How lovely is Your dwelling place, O Lord of hosts!" <em>Even the sparrow finds a home near Your altar — one day in Your courts is better than a thousand elsewhere.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 85</strong><span>Sons of Korah — Prayer for Revival — "Will You not revive us again, that Your people may rejoice in You?" <em>For corporate and national prayer for spiritual awakening.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 86</strong><span>David — In the Day of Trouble — "In the day of my trouble I call on You, for You will answer me." <em>Teach me Your way, O Lord, that I may walk in Your truth.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 87</strong><span>Sons of Korah — Glorious Zion — Zion as mother of all nations; the nations will be registered as born in her. <em>Anticipates the international church.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 88</strong><span>Heman — Darkest Psalm — "I am like one without strength… Your wrath lies heavily on me." No resolution — ends in darkness. <em>God receives even the prayers that see no light.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 89</strong><span>Ethan — Covenant and Crisis — Magnificent celebration of the Davidic covenant, then catastrophic lament: it seems God has broken His promises. Closes Book III. <em>Where is Your former great love?</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 90</strong><span>Moses — Human Frailty / God's Eternity — The oldest psalm; "Lord, You have been our dwelling place throughout all generations… we are like grass." <em>Teach us to number our days — the only wise response to mortality.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 91</strong><span>Shelter of the Most High — "He who dwells in the shelter of the Most High will rest in the shadow of the Almighty." <em>The great protection psalm — read during fear, danger, or spiritual attack.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalms 92–100</strong><span>God Reigns Psalms — "The Lord reigns, He is robed in majesty" (Ps 93); "Make a joyful noise to the Lord, all the earth" (Ps 100). <em>Enthronement, creation, and joyful worship — God rules eternally.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalms 101–103</strong><span>David — Vow of Integrity / Frail Man / Covenant Love — Personal integrity; human frailty before God; God's enduring love "from everlasting to everlasting." <em>Psalm 103 is perhaps the richest summary of God's grace in the OT.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 104</strong><span>Creation Psalm — God clothes Himself in light; sends springs for wild animals; makes grass grow for cattle. <em>One of the most beautiful nature poems in Scripture.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalms 105–106</strong><span>Historical Psalms — Ps 105 praises God's faithful acts to Israel; Ps 106 confesses Israel's repeated failures. <em>Together they form a complete covenant history of grace and sin.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 107</strong><span>Redeemed from Every Trial — Four groups of redeemed people: wanderers, prisoners, the sick, sailors. Each cries to God and is delivered. <em>"Give thanks to the Lord for He is good; His love endures forever."</em></span></div>
      <div class="bk-chapter-item"><strong>Psalms 108–110</strong><span>Davidic Psalms — Praise before battle; imprecatory prayer; the great Messianic Psalm 110: "The Lord says to my Lord: sit at My right hand." <em>Psalm 110:4 — Christ the eternal Priest-King after the order of Melchizedek (Heb 7).</em></span></div>
      <div class="bk-chapter-item"><strong>Psalms 111–118</strong><span>Hallel Psalms (Egyptian) — The Great Hallel sung at Passover; "The Lord is my strength and my song; He has become my salvation" (Ps 118). <em>Jesus and disciples sang these at the Last Supper (Matt 26:30).</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 119</strong><span>The Great Torah Psalm — 176 verses; 22 stanzas following the Hebrew alphabet; every verse celebrates God's Word. <em>"Your word is a lamp to my feet and a light to my path" — the longest chapter in the Bible.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalms 120–134</strong><span>Songs of Ascents — 15 pilgrimage psalms sung as worshipers climbed to Jerusalem for the three great feasts. <em>Includes Ps 121 (I lift my eyes to the hills), Ps 122 (peace of Jerusalem), Ps 127 (unless the Lord builds the house), Ps 131 (childlike trust).</em></span></div>
      <div class="bk-chapter-item"><strong>Psalms 135–136</strong><span>Praise for God's Acts — Ps 135 praises God's name and acts; Ps 136 is the great litany of 26 refrains: "His love endures forever." <em>Read as a responsive worship reading.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalm 137</strong><span>By the Rivers of Babylon — The great exile lament; captives weep and hang their harps on willows. <em>"How can we sing the Lord's song in a foreign land?" — written in Babylon, ~586 BC.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalms 138–145</strong><span>Final Davidic Collection — Praise for answered prayer; search of God (Ps 139); cry from prison (Ps 142); morning prayer (Ps 143); David's final praise (Ps 145). <em>Psalm 139 — "Where can I flee from Your presence?" — the God who knows us completely.</em></span></div>
      <div class="bk-chapter-item"><strong>Psalms 146–150</strong><span>The Hallelujah Finale — Five psalms each beginning and ending "Praise the Lord." The entire creation — angels, sun, stars, mountains, animals, people — called to one final crescendo of worship. <em>Psalm 150: "Let everything that has breath praise the Lord!"</em></span></div>
    </div>
  </div>
</div>

<!-- KEY VERSES -->
<div class="bk-section">
  <div class="bk-section-header"><h3>Key Verses</h3></div>
  <div class="bk-section-body">
    <div class="bk-verse-card">
      <p class="bk-verse-ref">Psalm 23:1</p>
      <p class="bk-verse-text">"The Lord is my shepherd; I shall not want."</p>
      <p class="bk-verse-note">Six verses of pure grace — God provides, restores, protects, and promises His presence through every valley. The most beloved psalm in the Bible.</p>
    </div>
    <div class="bk-verse-card">
      <p class="bk-verse-ref">Psalm 46:1</p>
      <p class="bk-verse-text">"God is our refuge and strength, an ever-present help in trouble."</p>
      <p class="bk-verse-note">The psalm that inspired Luther's great hymn. When everything shakes, God does not.</p>
    </div>
    <div class="bk-verse-card">
      <p class="bk-verse-ref">Psalm 51:10</p>
      <p class="bk-verse-text">"Create in me a clean heart, O God, and renew a right spirit within me."</p>
      <p class="bk-verse-note">David's great repentance psalm after Nathan's confrontation. The deepest confession in all of Scripture.</p>
    </div>
    <div class="bk-verse-card">
      <p class="bk-verse-ref">Psalm 119:105</p>
      <p class="bk-verse-text">"Your word is a lamp to my feet and a light to my path."</p>
      <p class="bk-verse-note">From the longest chapter in the Bible — 176 verses celebrating God's Word as the supreme guide for every step of life.</p>
    </div>
    <div class="bk-verse-card">
      <p class="bk-verse-ref">Psalm 27:1</p>
      <p class="bk-verse-text">"The Lord is my light and my salvation — whom shall I fear? The Lord is the stronghold of my life — of whom shall I be afraid?"</p>
      <p class="bk-verse-note">Two rhetorical questions that dissolve fear with the truth of who God is. Read when anxiety overtakes you.</p>
    </div>
  </div>
</div>

<!-- MESSIANIC PROPHECIES -->
<div class="bk-section">
  <div class="bk-section-header"><h3>Messianic Psalms — Prophecies Fulfilled in Christ</h3></div>
  <div class="bk-section-body">
    <table class="bk-table">
      <thead><tr><th>Psalm</th><th>Prophecy</th><th>Fulfillment in Christ</th><th>NT Reference</th></tr></thead>
      <tbody>
        <tr><td><strong>Psalm 2</strong></td><td>"You are My Son; today I have begotten You"</td><td>Christ declared Son of God at baptism and resurrection</td><td>Matthew 3:17; Acts 13:33</td></tr>
        <tr><td><strong>Psalm 8</strong></td><td>Son of Man given authority over all creation</td><td>Fulfilled in Christ's incarnation and resurrection authority</td><td>Hebrews 2:6–9</td></tr>
        <tr><td><strong>Psalm 16</strong></td><td>"You will not abandon me to the realm of the dead"</td><td>Christ's resurrection — David's body decayed; Christ's did not</td><td>Acts 2:25–31; 13:35</td></tr>
        <tr><td><strong>Psalm 22</strong></td><td>Forsaken, mocked, hands and feet pierced, garments divided</td><td>Every detail fulfilled at the crucifixion</td><td>Matthew 27:35–46; John 19:24</td></tr>
        <tr><td><strong>Psalm 31:5</strong></td><td>"Into Your hands I commit my spirit"</td><td>Christ's final words from the cross</td><td>Luke 23:46</td></tr>
        <tr><td><strong>Psalm 40:6–8</strong></td><td>"I have come… to do Your will, O God"</td><td>Christ's incarnation and perfect obedience</td><td>Hebrews 10:5–7</td></tr>
        <tr><td><strong>Psalm 41:9</strong></td><td>"Even my close friend… has lifted up his heel against me"</td><td>Judas Iscariot's betrayal</td><td>John 13:18</td></tr>
        <tr><td><strong>Psalm 45:6</strong></td><td>"Your throne, O God, is forever and ever"</td><td>Addressed to Christ as eternal King</td><td>Hebrews 1:8</td></tr>
        <tr><td><strong>Psalm 68:18</strong></td><td>"When You ascended on high, You led captives"</td><td>Christ's ascension and giving of gifts to the Church</td><td>Ephesians 4:8</td></tr>
        <tr><td><strong>Psalm 69</strong></td><td>Zeal consumes; given vinegar to drink; rejected by family</td><td>Christ's passion — zeal for God's house (John 2), vinegar on the cross (John 19:28)</td><td>John 2:17; 19:28; Romans 15:3</td></tr>
        <tr><td><strong>Psalm 110</strong></td><td>"Sit at My right hand" / priest after Melchizedek's order</td><td>Christ's exaltation and eternal high priesthood</td><td>Acts 2:34–35; Hebrews 7</td></tr>
        <tr><td><strong>Psalm 118:22</strong></td><td>"The stone the builders rejected has become the cornerstone"</td><td>Christ rejected by Israel's leaders; becomes cornerstone of the Church</td><td>Matthew 21:42; Acts 4:11</td></tr>
      </tbody>
    </table>
  </div>
</div>

<!-- THEOLOGICAL THEMES -->
<div class="bk-section">
  <div class="bk-section-header"><h3>Theological Themes</h3></div>
  <div class="bk-section-body">
    <div class="bk-tags">
      <span class="bk-tag">Worship</span>
      <span class="bk-tag">Prayer</span>
      <span class="bk-tag">Messianic Prophecy</span>
      <span class="bk-tag">God's Sovereignty</span>
      <span class="bk-tag">Lament and Honesty</span>
      <span class="bk-tag">Davidic Covenant</span>
      <span class="bk-tag">God's Eternal Kingship</span>
      <span class="bk-tag">Repentance</span>
      <span class="bk-tag">Faith in Suffering</span>
      <span class="bk-tag">Scripture as Light</span>
    </div>
    <ul class="bk-lessons-list">
      <li><strong>Worship in Every Season:</strong> Psalms models praise, lament, repentance, and thanksgiving — all are valid forms of worship before God</li>
      <li><strong>Honest Prayer:</strong> God welcomes raw, unfiltered emotion — Psalms contains anger, despair, confusion, and joy all directed at God</li>
      <li><strong>Messianic Prophecy:</strong> More prophecies about Christ appear in Psalms than in any other book — crucifixion, resurrection, betrayal, priesthood, and kingship all foretold</li>
      <li><strong>Davidic Covenant:</strong> God's promise to David (2 Sam 7) runs through Psalms — the eternal King from David's line is anticipated throughout</li>
      <li><strong>God's Eternal Kingship:</strong> The enthronement psalms (Ps 93–99) declare that God reigns above all earthly powers</li>
      <li><strong>Lament as Theology:</strong> Approximately one-third of the Psalms are laments — grief, confusion, and protest are spiritually legitimate</li>
      <li><strong>The Fear of the Lord:</strong> True wisdom, worship, and blessing all begin with reverence before God</li>
      <li><strong>Scripture Centrality:</strong> Psalm 1 opens the entire collection with meditation on God's Law; Psalm 119 devotes 176 verses to it</li>
    </ul>
  </div>
</div>

<!-- TEACHING PLAN -->
<div class="bk-section">
  <div class="bk-section-header"><h3>Teaching Plan for the Book</h3></div>
  <div class="bk-section-body">
    <table class="bk-table">
      <thead><tr><th>Session</th><th>Psalms</th><th>Topic</th><th>Key Lesson</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>1–2</td><td>Righteousness and Messiah</td><td>Choose the way of life; Christ is the King established by God</td></tr>
        <tr><td>2</td><td>3–41</td><td>David's Personal Worship</td><td>Trust God through every form of suffering and sin</td></tr>
        <tr><td>3</td><td>42–72</td><td>Worship and Kingship</td><td>Longing for God; He reigns over all nations</td></tr>
        <tr><td>4</td><td>73–89</td><td>Crisis and Faith</td><td>Faith persists even when God seems absent and the enemy seems to win</td></tr>
        <tr><td>5</td><td>90–106</td><td>God's Eternal Reign</td><td>God's faithfulness outlasts every earthly failure and generation</td></tr>
        <tr><td>6</td><td>107–150</td><td>Praise and Thanksgiving</td><td>Everything that has breath is called to worship — the whole creation praises God</td></tr>
      </tbody>
    </table>
  </div>
</div>

<!-- LIFE LESSONS -->
<div class="bk-section">
  <div class="bk-section-header"><h3>Life Lessons from the Book</h3></div>
  <div class="bk-section-body">
    <ul class="bk-lessons-list">
      <li>Bring every emotion to God — Psalms gives permission to be honest before Him in joy, fear, grief, and anger</li>
      <li>Worship is not conditional on circumstances — David praised God in caves, in exile, after sin, and before battle</li>
      <li>Meditation on God's Word is the foundation of the blessed life (Psalm 1)</li>
      <li>Lament is not a lack of faith — it is faith refusing to pretend that everything is fine</li>
      <li>God's love endures forever — Psalm 136 repeats it 26 times; we need to hear it that many times</li>
      <li>Music and singing are powerful spiritual weapons — David used them against depression, fear, and darkness</li>
      <li>The righteous may suffer deeply — but they are never abandoned (Psalm 34:19)</li>
      <li>True repentance changes the inner person, not only behavior (Psalm 51)</li>
      <li>The Psalms point ahead to Christ in every category of human experience — He is the ultimate fulfillment</li>
    </ul>
  </div>
</div>

<div class="bk-summary-banner">
  <p class="bk-summary-verse">"Let everything that has breath praise the Lord. Praise the Lord!"</p>
  <p class="bk-summary-cite">— Psalm 150:6</p>
</div>
    `
  }
});

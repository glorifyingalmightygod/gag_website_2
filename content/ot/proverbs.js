/* OLD TESTAMENT — Proverbs */

Object.assign(CONTENT, {
  proverbs: {
    title: "Proverbs",
    body: `
<div class="bk-download-bar">
  <span class="bk-download-label">📖 Book of Proverbs — Survey Notes</span>
</div>

<div class="book-meta-bar">
  <div class="bm-item"><span class="bm-label">Author</span><span class="bm-value">Solomon + others</span></div>
  <div class="bm-item"><span class="bm-label">Date Written</span><span class="bm-value">~970–715 BC</span></div>
  <div class="bm-item"><span class="bm-label">Chapters</span><span class="bm-value">31</span></div>
  <div class="bm-item"><span class="bm-label">Genre</span><span class="bm-value">Wisdom / Poetry</span></div>
</div>

<!-- INTRODUCTION + HISTORICAL FLOW -->
<div class="bk-section">
  <div class="bk-section-header"><h3>Introduction</h3></div>
  <div class="bk-section-body" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; align-items: start;">
    <div>
      <p>The Book of Proverbs is one of the major wisdom books of the Old Testament. Its Hebrew title <em>Mishlei</em> (from <em>mashal</em>) means "wise sayings, parables, or comparisons." It provides God-breathed practical instruction for righteous living across every area of daily life — relationships, speech, work, family, finances, leadership, and the fear of the Lord.</p>
      <p>Unlike prophecy or history, Proverbs speaks in <strong>principles</strong> — general truths about how life works under God's moral order. They are not unconditional promises but observations about the patterns God has built into creation. A proverb is true as a <em>tendency</em>, not as a guarantee in every specific case.</p>
      <p><strong>Structure at a glance:</strong></p>
      <ul>
        <li><strong>Chapters 1–9:</strong> Extended wisdom speeches — a father instructing his son; Wisdom personified as a woman calling publicly</li>
        <li><strong>Chapters 10–22:16:</strong> Solomon's first collection — short, two-line contrasting proverbs</li>
        <li><strong>Chapters 22:17–24:34:</strong> Sayings of the Wise Men — thirty wise sayings in paragraph form</li>
        <li><strong>Chapters 25–29:</strong> More of Solomon's proverbs, copied by Hezekiah's scribes (~715 BC)</li>
        <li><strong>Chapter 30:</strong> Words of Agur son of Jakeh — humble confession and numerical sayings</li>
        <li><strong>Chapter 31:</strong> Words of King Lemuel (from his mother) + the Virtuous Woman poem (alphabetic acrostic)</li>
      </ul>
      <p>The book's central thesis appears in both the opening (1:7) and the middle (9:10): <em>"The fear of the Lord is the beginning of wisdom."</em> Everything else in the book flows from this foundation.</p>
      <p><strong>Hebrew insight:</strong> The word <em>hokmah</em> (wisdom) does not mean abstract philosophy — it means <em>skilled, godly living</em>. Wisdom is knowing how to live well before God and people. The opposite is the "fool" (<em>kesil</em>) — not an unintelligent person, but one who arrogantly ignores God and suffers the consequences.</p>
    </div>
    <div style="background: linear-gradient(135deg, #f0f8ff, #e8f4ff); border: 1px solid #b8d8f0; border-radius: 10px; padding: 1.25rem 1.5rem;">
      <h4 style="color: var(--azure); font-family: var(--font-heading); font-size: 1rem; margin: 0 0 0.9rem; letter-spacing: 0.03em; border-bottom: 2px solid var(--azure); padding-bottom: 0.5rem;">📅 Historical Composition Timeline</h4>
      <ul class="book-timeline" style="margin: 0;">
        <li><strong>~970 BC</strong> — Solomon becomes king; asks God for wisdom rather than riches or power <em>(1 Kgs 3:5–14)</em></li>
        <li><strong>~970 BC</strong> — God grants Solomon wisdom beyond any before or after him; he speaks 3,000 proverbs and 1,005 songs <em>(1 Kgs 4:29–34)</em></li>
        <li><strong>~970–960 BC</strong> — Extended wisdom discourses written (chapters 1–9); Wisdom calls from city gates</li>
        <li><strong>~960–930 BC</strong> — Solomon's short proverbs collected (chapters 10–22:16); wisdom culture at its peak</li>
        <li><strong>~950 BC</strong> — Sayings of the Wise Men possibly compiled (chapters 22:17–24:34)</li>
        <li><strong>~950 BC</strong> — Song of Solomon and Ecclesiastes also written in this era</li>
        <li><strong>~930 BC</strong> — Solomon dies; kingdom divides under Rehoboam; wisdom writings preserved</li>
        <li><strong>~715–686 BC</strong> — King Hezekiah's reign; his scribes copy out more of Solomon's proverbs (chapters 25–29) <em>(Prov 25:1)</em></li>
        <li><strong>~700 BC</strong> — Agur's humble confession and numerical sayings preserved (chapter 30)</li>
        <li><strong>~700 BC</strong> — King Lemuel's mother's teaching preserved (chapter 31); Virtuous Woman poem added</li>
        <li><strong>~586 BC</strong> — Jerusalem falls; Torah and wisdom writings carried into Babylonian exile</li>
        <li><strong>~450–400 BC</strong> — Final compilation and canonization of Proverbs in its present 31-chapter form</li>
      </ul>
    </div>
  </div>
</div>

<!-- AUTHORS TABLE -->
<div class="bk-section">
  <div class="bk-section-header"><h3>Authors of the Book</h3></div>
  <div class="bk-section-body">
    <table class="bk-table">
      <thead><tr><th>Section</th><th>Chapters</th><th>Author</th><th>Background</th></tr></thead>
      <tbody>
        <tr><td><strong>Wisdom Speeches</strong></td><td>1–9</td><td>Solomon</td><td>Extended father-to-son discourses; Wisdom personified; most literary section</td></tr>
        <tr><td><strong>Short Proverbs</strong></td><td>10–22:16</td><td>Solomon</td><td>375 contrasting two-line sayings — the classic "Proverbs of Solomon"</td></tr>
        <tr><td><strong>Sayings of the Wise</strong></td><td>22:17–24:34</td><td>Wise Men</td><td>Thirty structured sayings in paragraph form; possibly older oral wisdom traditions</td></tr>
        <tr><td><strong>Hezekiah's Collection</strong></td><td>25–29</td><td>Solomon (compiled by Hezekiah's scribes)</td><td>Another 128 Solomonic proverbs copied out by royal scribes during Hezekiah's reformation c. 715 BC <em>(Prov 25:1)</em></td></tr>
        <tr><td><strong>Words of Agur</strong></td><td>30</td><td>Agur son of Jakeh</td><td>Opens with a remarkable confession of human ignorance before God; numerical riddle sayings</td></tr>
        <tr><td><strong>Words of Lemuel</strong></td><td>31:1–9</td><td>King Lemuel's mother</td><td>A mother's instruction to her king-son on women, wine, and justice for the poor</td></tr>
        <tr><td><strong>Virtuous Woman</strong></td><td>31:10–31</td><td>Unknown (alphabetic acrostic)</td><td>22-verse Hebrew acrostic poem (each verse begins with a successive Hebrew letter) describing an ideal godly woman</td></tr>
      </tbody>
    </table>
  </div>
</div>

<!-- KEY PERSONS -->
<div class="bk-section">
  <div class="bk-section-header"><h3>Key Persons in the Book</h3></div>
  <div class="bk-section-body">
    <table class="bk-table">
      <thead><tr><th>Person / Figure</th><th>Role</th><th>Importance</th></tr></thead>
      <tbody>
        <tr><td><strong>Solomon</strong></td><td>Primary author and king</td><td>Greatest human embodiment of wisdom in OT; wrote most of the book during his reign</td></tr>
        <tr><td><strong>Agur</strong></td><td>Wise teacher (chapter 30)</td><td>Exemplifies true humility — "I am more stupid than any man" — before God's infinite wisdom</td></tr>
        <tr><td><strong>King Lemuel</strong></td><td>King receiving maternal instruction</td><td>His mother's words on leadership, women, wine, and justice are preserved for all generations</td></tr>
        <tr><td><strong>Woman Wisdom</strong></td><td>Personified wisdom</td><td>Calls from city gates, streets, and hilltops; offers life to all who listen; strongly foreshadows Christ</td></tr>
        <tr><td><strong>The Fool (kesil)</strong></td><td>Symbolic warning character</td><td>Not unintelligent — but arrogantly rejects God's instruction; represents the consequence of godless living</td></tr>
        <tr><td><strong>The Virtuous Woman</strong></td><td>Ideal godly woman (chapter 31)</td><td>Hebrew acrostic portrait of a woman of character, industry, generosity, wisdom, and fear of the Lord</td></tr>
      </tbody>
    </table>
  </div>
</div>

<!-- CHAPTER OUTLINE -->
<div class="bk-section">
  <div class="bk-section-header"><h3>Chapter Divisions / Outline</h3></div>
  <div class="bk-section-body">
    <table class="bk-table">
      <thead><tr><th>Section</th><th>Chapters</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><strong>Introduction to Wisdom</strong></td><td>1–9</td><td>Extended discourses — father to son; Wisdom and Folly personified; the foundation of wise living</td></tr>
        <tr><td><strong>Proverbs of Solomon I</strong></td><td>10–22:16</td><td>375 short two-line contrasting proverbs covering every area of life</td></tr>
        <tr><td><strong>Sayings of the Wise</strong></td><td>22:17–24:34</td><td>Thirty structured wisdom sayings in paragraph form; moral instruction</td></tr>
        <tr><td><strong>Proverbs of Solomon II</strong></td><td>25–29</td><td>Hezekiah's scribes copy additional Solomonic proverbs; leadership and social ethics</td></tr>
        <tr><td><strong>Words of Agur</strong></td><td>30</td><td>Humble confession of ignorance; numerical sayings about nature and human behavior</td></tr>
        <tr><td><strong>Words of Lemuel and Virtuous Woman</strong></td><td>31</td><td>A mother's royal instruction; the celebrated portrait of the Virtuous Woman</td></tr>
      </tbody>
    </table>
  </div>
</div>

<!-- CHAPTER SUMMARIES -->
<div class="bk-section">
  <div class="bk-section-header"><h3>Chapter-by-Chapter Summary</h3></div>
  <div class="bk-section-body">
    <div class="bk-chapters-grid">
      <div class="bk-chapter-item"><strong>Chapter 1</strong><span>Purpose of Proverbs — The book's mission stated: wisdom, discipline, understanding; Wisdom calls in the streets; fools reject her. <em>Lesson: "The fear of the Lord is the beginning of knowledge" — the whole book rests on this.</em></span></div>
      <div class="bk-chapter-item"><strong>Chapter 2</strong><span>The Value of Wisdom — Seek wisdom like silver; God gives it to the upright; wisdom protects from evil people and immoral company. <em>Lesson: Wisdom is received through active seeking and God's generous giving.</em></span></div>
      <div class="bk-chapter-item"><strong>Chapter 3</strong><span>Trust in the Lord — "Trust in the Lord with all your heart, lean not on your own understanding"; wisdom brings long life and honor. <em>Lesson: Complete dependence on God — not human cleverness — is the foundation of the wise life.</em></span></div>
      <div class="bk-chapter-item"><strong>Chapter 4</strong><span>Guard Your Heart — "Above all else, guard your heart, for everything you do flows from it"; the path of righteousness grows brighter. <em>Lesson: Inner character, not outward performance, shapes the entire direction of life.</em></span></div>
      <div class="bk-chapter-item"><strong>Chapter 5</strong><span>Warning Against Adultery — The father warns his son about the seductive woman whose lips drip honey but whose end is bitter death; rejoice in the wife of your youth. <em>Lesson: Sexual faithfulness in marriage is a covenant matter and a wisdom matter.</em></span></div>
      <div class="bk-chapter-item"><strong>Chapter 6</strong><span>Practical Warnings — Against co-signing debts carelessly, laziness (go to the ant!), deceitful scheming, and the seven things God hates. <em>Lesson: Small disciplines in finances, work, and relationships prevent large catastrophes.</em></span></div>
      <div class="bk-chapter-item"><strong>Chapter 7</strong><span>The Seductive Woman — Detailed narrative of a foolish young man drawn into adultery; "like an ox going to the slaughter." <em>Lesson: Sexual sin doesn't announce its destination — it lures step by step; only wisdom built in advance can resist it.</em></span></div>
      <div class="bk-chapter-item"><strong>Chapter 8</strong><span>Wisdom Personified — Wisdom calls from every height and crossroads; "I was appointed from eternity, from the beginning, before the world began"; all who find me find life. <em>Lesson: Wisdom is not a human invention — it is God's own eternal attribute available to those who seek it.</em></span></div>
      <div class="bk-chapter-item"><strong>Chapter 9</strong><span>Wisdom vs. Folly — Both Wisdom and Folly set their tables and call to passersby; the choice between them is the choice between life and death. <em>Lesson: "The fear of the Lord is the beginning of wisdom" — and the fool's house leads to the dead.</em></span></div>
      <div class="bk-chapter-item"><strong>Chapter 10</strong><span>Wisdom Brings Life — Contrasting couplets begin: wise son vs. foolish son; righteous lips vs. violent mouth; diligent hands vs. lazy hands. <em>Lesson: Daily choices in speech, work, and relationships produce either life or destruction over time.</em></span></div>
      <div class="bk-chapter-item"><strong>Chapter 11</strong><span>Integrity and Generosity — Honest scales; the righteous are delivered; pride goes before a fall; the generous are refreshed. <em>Lesson: Integrity in business and generosity toward others reflect God's own character.</em></span></div>
      <div class="bk-chapter-item"><strong>Chapter 12</strong><span>Discipline and Wise Speech — Whoever loves discipline loves knowledge; a good wife is her husband's crown; truthful lips endure forever. <em>Lesson: Accepting correction is itself a mark of wisdom — pride rejects instruction.</em></span></div>
      <div class="bk-chapter-item"><strong>Chapter 13</strong><span>Wisdom and Diligence — The diligent are rewarded; "hope deferred makes the heart sick"; train children with the rod of discipline. <em>Lesson: Delayed gratification and patient diligence are marks of wisdom — instant gratification is folly.</em></span></div>
      <div class="bk-chapter-item"><strong>Chapter 14</strong><span>Wisdom Builds; Folly Destroys — "The wise woman builds her house, but with her own hands the foolish one tears hers down"; the poor are not to be mocked. <em>Lesson: Character choices either construct or demolish lives, families, and communities.</em></span></div>
      <div class="bk-chapter-item"><strong>Chapter 15</strong><span>Gentle Answers — "A gentle answer turns away wrath, but a harsh word stirs up anger"; the Lord detests the sacrifice of the wicked. <em>Lesson: Speech is one of the most powerful tools we have — it can de-escalate or detonate any situation.</em></span></div>
      <div class="bk-chapter-item"><strong>Chapter 16</strong><span>God's Sovereignty — "Commit to the Lord whatever you do, and He will establish your plans"; pride goes before destruction; the heart of the king is in God's hand. <em>Lesson: Human plans matter — but God has the final word on outcomes.</em></span></div>
      <div class="bk-chapter-item"><strong>Chapter 17</strong><span>Family and Friendship — "A friend loves at all times, and a brother is born for a time of adversity"; a cheerful heart is good medicine. <em>Lesson: Loyal friendships and harmonious family relationships are among life's greatest treasures.</em></span></div>
      <div class="bk-chapter-item"><strong>Chapter 18</strong><span>Speech and Relationships — "The name of the Lord is a strong tower"; "the tongue has the power of life and death"; a man of many companions may come to ruin. <em>Lesson: Both our words and our relationships determine the quality of our lives.</em></span></div>
      <div class="bk-chapter-item"><strong>Chapter 19</strong><span>Integrity and Compassion — Poverty with integrity is better than falsehood with wealth; whoever is kind to the poor lends to the Lord. <em>Lesson: Character before God matters more than success; compassion for the poor is a theological act.</em></span></div>
      <div class="bk-chapter-item"><strong>Chapter 20</strong><span>Justice and Integrity — Wine is a mocker; the Lord detests differing weights; do not say "I'll pay you back" — wait for the Lord. <em>Lesson: Justice in commerce, patience in conflict, and honesty in all dealings reflect God's own standards.</em></span></div>
      <div class="bk-chapter-item"><strong>Chapter 21</strong><span>God Examines Hearts — "All a person's ways seem pure to them, but motives are weighed by the Lord"; righteousness and justice are more acceptable than sacrifice. <em>Lesson: God is not interested in religious performance divorced from just and righteous living.</em></span></div>
      <div class="bk-chapter-item"><strong>Chapter 22</strong><span>Training Children — "Start children off in the way they should go; even when they are old they will not turn from it"; "The rich rule over the poor — the borrower is slave to the lender." <em>Lesson: Early moral formation and financial freedom are among a parent's greatest gifts to their children.</em></span></div>
      <div class="bk-chapter-item"><strong>Chapter 23</strong><span>Warnings Against Excess — Do not wear yourself out to get rich; do not move ancient boundary stones; honor your father and mother; do not get drunk on wine. <em>Lesson: Self-control in possessions, wealth, appetite, and drink is a mark of wisdom.</em></span></div>
      <div class="bk-chapter-item"><strong>Chapter 24</strong><span>Wisdom in Action — Do not envy the wicked; be a rescuer of the perishing; the righteous may fall seven times but rise again. <em>Lesson: Wisdom acts — it rescues others, perseveres through failure, and refuses to celebrate an enemy's downfall.</em></span></div>
      <div class="bk-chapter-item"><strong>Chapter 25</strong><span>Hezekiah's Collection Begins — Honor and humility; "if your enemy is hungry, give him food"; like cold water to a weary soul is good news from a distant land. <em>Lesson: Social wisdom — how to speak to rulers, handle enemies graciously, and know when to stop talking.</em></span></div>
      <div class="bk-chapter-item"><strong>Chapter 26</strong><span>The Fool Exposed — Snow in summer; the lazy man says "there is a lion in the road!"; like a dog returns to its vomit, so a fool repeats his folly. <em>Lesson: Foolishness has identifiable patterns — laziness, quarrelsomeness, deceit — and wisdom learns to recognize them.</em></span></div>
      <div class="bk-chapter-item"><strong>Chapter 27</strong><span>Friendship and Planning — "Do not boast about tomorrow"; faithful are the wounds of a friend; as iron sharpens iron, so one person sharpens another. <em>Lesson: True friends tell hard truths; wise people plan carefully but hold plans loosely.</em></span></div>
      <div class="bk-chapter-item"><strong>Chapter 28</strong><span>Righteous Leadership — "The wicked flee though no one pursues, but the righteous are as bold as a lion"; whoever confesses and renounces sin finds mercy. <em>Lesson: A clear conscience produces boldness; confession restores — both personally and socially.</em></span></div>
      <div class="bk-chapter-item"><strong>Chapter 29</strong><span>Discipline and Leadership — "Where there is no revelation (vision), the people cast off restraint"; a servant cannot be corrected by words alone; the fear of man is a snare. <em>Lesson: Righteous leadership blesses whole communities; cowardly leadership corrupts them.</em></span></div>
      <div class="bk-chapter-item"><strong>Chapter 30</strong><span>Words of Agur — "I am more stupid than any man… I have not learned wisdom" — then profound numerical sayings about creatures, mysteries, and human behavior. <em>Lesson: The beginning of true wisdom is recognizing how little we know before God.</em></span></div>
      <div class="bk-chapter-item"><strong>Chapter 31</strong><span>The Virtuous Woman — A mother's instruction to her king-son on women and wine; then the celebrated 22-verse acrostic portrait of the Virtuous Woman. <em>Lesson: "Charm is deceptive and beauty is fleeting, but a woman who fears the Lord is to be praised" — godly character, not appearance, is the standard of true greatness.</em></span></div>
    </div>
  </div>
</div>

<!-- KEY VERSES -->
<div class="bk-section">
  <div class="bk-section-header"><h3>Key Verses</h3></div>
  <div class="bk-section-body">
    <div class="bk-verse-card">
      <p class="bk-verse-ref">Proverbs 1:7</p>
      <p class="bk-verse-text">"The fear of the Lord is the beginning of knowledge, but fools despise wisdom and instruction."</p>
      <p class="bk-verse-note">The foundational thesis of the entire book — all wisdom begins with reverent submission to God, not human intellect or achievement.</p>
    </div>
    <div class="bk-verse-card">
      <p class="bk-verse-ref">Proverbs 3:5–6</p>
      <p class="bk-verse-text">"Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight."</p>
      <p class="bk-verse-note">The most-quoted verse in Proverbs — complete surrender of our own reasoning to God's direction. Not passive, but active submission in every area.</p>
    </div>
    <div class="bk-verse-card">
      <p class="bk-verse-ref">Proverbs 4:23</p>
      <p class="bk-verse-text">"Above all else, guard your heart, for everything you do flows from it."</p>
      <p class="bk-verse-note">Inner character is the source of all outward action. What we feed the heart will eventually govern the life — this principle anticipates Jesus' teaching in Matthew 12:34.</p>
    </div>
    <div class="bk-verse-card">
      <p class="bk-verse-ref">Proverbs 22:6</p>
      <p class="bk-verse-text">"Start children off in the way they should go, and even when they are old they will not turn from it."</p>
      <p class="bk-verse-note">One of the most-applied parenting verses in Scripture — early character formation in the fear of the Lord has lifelong consequences.</p>
    </div>
    <div class="bk-verse-card">
      <p class="bk-verse-ref">Proverbs 31:30</p>
      <p class="bk-verse-text">"Charm is deceptive, and beauty is fleeting; but a woman who fears the Lord is to be praised."</p>
      <p class="bk-verse-note">The conclusion of the entire book — the final standard by which a person (and indeed all human greatness) should be measured is the fear of the Lord.</p>
    </div>
  </div>
</div>

<!-- THEOLOGICAL THEMES -->
<div class="bk-section">
  <div class="bk-section-header"><h3>Theological Themes</h3></div>
  <div class="bk-section-body">
    <div class="bk-tags">
      <span class="bk-tag">Fear of the Lord</span>
      <span class="bk-tag">Divine Wisdom</span>
      <span class="bk-tag">Moral Order</span>
      <span class="bk-tag">Speech and the Tongue</span>
      <span class="bk-tag">Integrity</span>
      <span class="bk-tag">Family and Parenting</span>
      <span class="bk-tag">Work Ethic</span>
      <span class="bk-tag">Financial Wisdom</span>
      <span class="bk-tag">Humility</span>
      <span class="bk-tag">Justice</span>
    </div>
    <ul class="bk-lessons-list">
      <li><strong>Fear of the Lord:</strong> Appears over 15 times — it is the beginning, foundation, and goal of all wisdom in the book</li>
      <li><strong>Wisdom Personified:</strong> Chapters 1–9 present Wisdom as a woman calling publicly — pointing beyond herself to God's own character and ultimately to Christ</li>
      <li><strong>Two Paths:</strong> The book presents life as a constant choice between two ways — the path of wisdom (life) and the path of folly (death) — this binary runs throughout</li>
      <li><strong>Speech and the Tongue:</strong> Proverbs gives more attention to words, speech, and the tongue than almost any other book — our words reveal our character and shape our relationships</li>
      <li><strong>God's Moral Order:</strong> The universe has built-in consequences for righteous and foolish choices — not as automatic mechanics but as God's governance of creation</li>
      <li><strong>Justice for the Poor:</strong> Multiple proverbs insist that treating the poor with dignity is a theological issue — "whoever oppresses the poor shows contempt for their Maker" (14:31)</li>
      <li><strong>Humility:</strong> Consistently contrasted with pride — "When pride comes, then comes disgrace, but with humility comes wisdom" (11:2)</li>
    </ul>
  </div>
</div>

<!-- FORESHADOWS OF CHRIST -->
<div class="bk-section">
  <div class="bk-section-header"><h3>Foreshadows / Types of Jesus Christ</h3></div>
  <div class="bk-section-body">
    <div class="bk-shadow-card">
      <p class="bk-shadow-title">1. Wisdom Personified (Proverbs 8) — Christ as the Eternal Wisdom of God</p>
      <p class="bk-shadow-body">Proverbs 8 presents Wisdom as a person present at creation — "I was appointed from eternity, from the beginning, before the world began… I was beside Him like a craftsman" (8:23–30). The New Testament reveals this eternal divine Wisdom to be Jesus Christ: "Christ the power of God and the wisdom of God" (1 Corinthians 1:24); "In Him are hidden all the treasures of wisdom and knowledge" (Colossians 2:3); "In the beginning was the Word…" (John 1:1). Proverbs 8 is one of the most significant Christological passages in the entire Old Testament.</p>
    </div>
    <div class="bk-shadow-card">
      <p class="bk-shadow-title">2. Wisdom's Invitation — Christ's Call to Come and Receive Life</p>
      <p class="bk-shadow-body">In Proverbs 8:4 and 9:5, Wisdom calls publicly: "To you, O people, I call out…Come, eat my food and drink the wine I have mixed." This is the same invitation Christ issues: "Come to me, all who are weary and burdened" (Matthew 11:28); "I am the bread of life — whoever comes to me will never go hungry" (John 6:35). Wisdom doesn't force herself on anyone — she calls and waits. So does Christ.</p>
    </div>
    <div class="bk-shadow-card">
      <p class="bk-shadow-title">3. The Fear of the Lord — Christ as the Source of True Wisdom</p>
      <p class="bk-shadow-body">"The fear of the Lord is the beginning of wisdom" (1:7; 9:10). In the New Testament, Christ is declared to be the one "in whom are hidden all the treasures of wisdom and knowledge" (Colossians 2:3). True wisdom is not found in philosophy, tradition, or human achievement — it is found in knowing and fearing Jesus Christ, who is wisdom incarnate. "But of him you are in Christ Jesus, who has become for us wisdom from God" (1 Corinthians 1:30).</p>
    </div>
    <div class="bk-shadow-card">
      <p class="bk-shadow-title">4. The Virtuous Woman — The Bride of Christ</p>
      <p class="bk-shadow-body">The Virtuous Woman of Proverbs 31 — clothed in strength and dignity, her worth beyond rubies, her works praising her in the city gates — has traditionally been read as an ideal portrait of godly character. In Revelation 19, the Bride of Christ appears "clothed in fine linen, bright and clean" — a community made righteous through Christ. The Virtuous Woman is thus a foreshadow of the redeemed community shaped by wisdom, preparing to meet her Lord.</p>
    </div>
    <div class="bk-shadow-card">
      <p class="bk-shadow-title">5. Proverbs 30:4 — A Son Whose Name We Should Know</p>
      <p class="bk-shadow-body">Agur asks: "Who has gone up to heaven and come down? Who has gathered up the wind in the hollow of his hands?… What is his name, and what is the name of his son? Surely you know!" (Proverbs 30:4). Centuries before the incarnation, this remarkable question points to the mystery of the divine Father and Son. The answer the New Testament gives is: the Father is Yahweh, and the Son is Jesus Christ (John 1:18; Hebrews 1:1–3).</p>
    </div>
  </div>
</div>

<!-- RELATED BOOKS -->
<div class="bk-section">
  <div class="bk-section-header"><h3>Other Biblical Books Written During This Period</h3></div>
  <div class="bk-section-body">
    <table class="bk-table">
      <thead><tr><th>Book</th><th>Time Period</th><th>Relationship to Proverbs</th></tr></thead>
      <tbody>
        <tr><td><strong>Song of Solomon</strong></td><td>Solomon's reign (~950 BC)</td><td>Companion wisdom book — celebrates the covenant beauty of romantic love</td></tr>
        <tr><td><strong>Ecclesiastes</strong></td><td>Solomon's later years (~935 BC)</td><td>Companion wisdom book — explores meaning and vanity from a reflective, older perspective</td></tr>
        <tr><td><strong>Psalms</strong></td><td>Davidic/Solomonic era</td><td>Shares wisdom themes (Ps 1, 37, 49, 73, 119) alongside the dominant worship poetry</td></tr>
        <tr><td><strong>1 Kings</strong></td><td>United monarchy (~970–930 BC)</td><td>Historical background to Solomon's wisdom, wealth, and eventual moral decline</td></tr>
        <tr><td><strong>Job</strong></td><td>Earlier wisdom tradition</td><td>Challenges simplistic wisdom theology; Job and Proverbs together give a fuller picture</td></tr>
      </tbody>
    </table>
  </div>
</div>

<!-- TEACHING PLAN -->
<div class="bk-section">
  <div class="bk-section-header"><h3>Teaching Plan for the Book</h3></div>
  <div class="bk-section-body">
    <table class="bk-table">
      <thead><tr><th>Session</th><th>Chapters</th><th>Topic</th><th>Key Lesson</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>1–4</td><td>Foundation of Wisdom</td><td>Fear the Lord; guard the heart; seek wisdom like hidden treasure</td></tr>
        <tr><td>2</td><td>5–7</td><td>Purity and Temptation</td><td>Sexual sin is gradual and deadly; build faithfulness into the heart before temptation arrives</td></tr>
        <tr><td>3</td><td>8–9</td><td>Wisdom Personified vs. Folly</td><td>Christ is the eternal Wisdom of God; choose His invitation over every competing voice</td></tr>
        <tr><td>4</td><td>10–15</td><td>Wise Daily Living</td><td>Speech, work, honesty, and relationships — small choices build or destroy over time</td></tr>
        <tr><td>5</td><td>16–22</td><td>Leadership, Integrity, and Parenting</td><td>God directs paths; train children early; justice in leadership blesses communities</td></tr>
        <tr><td>6</td><td>23–29</td><td>Practical Wisdom Applied</td><td>Self-control, accountability, courageous leadership, and the snare of the fear of man</td></tr>
        <tr><td>7</td><td>30–31</td><td>Humility and Godly Character</td><td>True wisdom begins by knowing how little we know; the fear of the Lord is the measure of all greatness</td></tr>
      </tbody>
    </table>
  </div>
</div>

<!-- LIFE LESSONS -->
<div class="bk-section">
  <div class="bk-section-header"><h3>Life Lessons from the Book</h3></div>
  <div class="bk-section-body">
    <ul class="bk-lessons-list">
      <li>The fear of the Lord is not just the beginning of wisdom — it is the continuing heart of it (1:7; 9:10; 31:30)</li>
      <li>Proverbs are principles, not promises — they describe tendencies in God's moral order, not guaranteed outcomes in every case</li>
      <li>Our words reveal what is in our hearts — and shape the relationships and outcomes of our lives (18:21)</li>
      <li>Pride is consistently identified as the root sin; humility as the path to honor (11:2; 16:18; 22:4)</li>
      <li>Early character formation matters enormously — wisdom built in youth protects through the whole of life (22:6)</li>
      <li>How we treat the poor is a theological statement about what we believe about God (14:31; 19:17)</li>
      <li>Faithful friends who wound us are more valuable than flatterers who comfort us (27:6; 27:17)</li>
      <li>Financial wisdom — living within means, avoiding debt, giving generously — is a spiritual discipline, not merely practical advice</li>
      <li>Christ is the ultimate fulfillment of all wisdom; knowing Him is the beginning and end of wise living (1 Cor 1:24; Col 2:3)</li>
    </ul>
  </div>
</div>

<div class="bk-summary-banner">
  <p class="bk-summary-verse">"Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight."</p>
  <p class="bk-summary-cite">— Proverbs 3:5–6</p>
</div>
    `
  }
});

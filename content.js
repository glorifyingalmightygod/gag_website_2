const CONTENT = {
  home: {
    title: "Welcome to Glorifying Almighty GOD",
    body: `<p>A place to grow in the knowledge of His Word — exploring Scripture from Genesis to Revelation, doctrine by doctrine, book by book.</p>
    <p>Use the sidebar to navigate through the Old Testament, New Testament, or Bible Doctrine surveys. Each section is designed to help you study, understand, and apply God's Word to your life.</p>
    <blockquote>"Your word is a lamp to my feet and a light to my path." — Psalm 119:105</blockquote>`
  },

  // OLD TESTAMENT
  genesis: { title: "Genesis", body: `<p><strong>Author:</strong> Moses | <strong>Date:</strong> ~1445–1405 BC</p><p>Genesis is the book of beginnings — the creation of the universe, mankind, sin, and the covenant promises of God. It traces the origins of Israel through the patriarchs: Abraham, Isaac, Jacob, and Joseph.</p><p><em>Key Themes:</em> Creation, Fall, Flood, Tower of Babel, the Abrahamic Covenant.</p>` },
  exodus: { title: "Exodus", body: `<p><strong>Author:</strong> Moses | <strong>Date:</strong> ~1445–1405 BC</p><p>Exodus records God's deliverance of Israel from Egyptian slavery through Moses, the institution of the Passover, the giving of the Law at Sinai, and instructions for the Tabernacle.</p><p><em>Key Themes:</em> Redemption, the Law, God's presence, worship.</p>` },
  leviticus: { title: "Leviticus", body: `<p><strong>Author:</strong> Moses | <strong>Date:</strong> ~1445–1405 BC</p><p>Leviticus provides the laws and regulations for Israel's worship, sacrificial system, priesthood, and holy living. It emphasizes God's holiness and Israel's call to reflect it.</p><p><em>Key Themes:</em> Holiness, atonement, the priesthood, clean and unclean laws.</p>` },
  numbers: { title: "Numbers", body: `<p><strong>Author:</strong> Moses | <strong>Date:</strong> ~1445–1405 BC</p><p>Numbers records Israel's 40 years of wilderness wandering as a consequence of unbelief. It includes two censuses, laws, and accounts of rebellion and God's faithfulness.</p><p><em>Key Themes:</em> Faithfulness, discipline, God's provision, covenant loyalty.</p>` },
  deuteronomy: { title: "Deuteronomy", body: `<p><strong>Author:</strong> Moses | <strong>Date:</strong> ~1406 BC</p><p>Moses' farewell address to Israel before they enter Canaan. It reviews the Law, renews the covenant, and calls the nation to love and obey God wholeheartedly.</p><p><em>Key Themes:</em> Covenant renewal, obedience, love for God, the promised land.</p>` },
  joshua: { title: "Joshua", body: `<p><strong>Author:</strong> Joshua (with later additions) | <strong>Date:</strong> ~1405–1385 BC</p><p>Joshua narrates Israel's conquest and settlement of Canaan under Joshua's leadership. God fulfills His promise to give Israel the land.</p><p><em>Key Themes:</em> Faith, obedience, God's faithfulness, inheritance.</p>` },
  judges: { title: "Judges", body: `<p><strong>Author:</strong> Samuel (traditionally) | <strong>Date:</strong> ~1050–1000 BC</p><p>Judges records a cycle of Israel's disobedience, oppression, crying out to God, and deliverance through judges. It illustrates the need for faithful leadership.</p><p><em>Key Themes:</em> The sin cycle, God's mercy, human failure, spiritual decline.</p>` },
  ruth: { title: "Ruth", body: `<p><strong>Author:</strong> Unknown (possibly Samuel) | <strong>Date:</strong> ~1000 BC</p><p>Ruth is a short narrative of loyalty, love, and redemption set during the time of judges. Ruth's faithfulness leads her into the lineage of David and ultimately Christ.</p><p><em>Key Themes:</em> Loyalty (hesed), redemption, grace, God's providence.</p>` },
  "1samuel": { title: "1 Samuel", body: `<p><strong>Author:</strong> Samuel, Nathan, Gad | <strong>Date:</strong> ~931–722 BC</p><p>1 Samuel traces Israel's transition from the period of judges to the monarchy, covering the lives of Samuel, Saul, and the rise of David.</p><p><em>Key Themes:</em> Leadership, obedience, God's sovereignty, the heart vs. outward appearance.</p>` },
  "2samuel": { title: "2 Samuel", body: `<p><strong>Author:</strong> Nathan, Gad | <strong>Date:</strong> ~931–722 BC</p><p>2 Samuel focuses on David's reign as king — his victories, the Davidic Covenant, his sin with Bathsheba, and its consequences in his family and kingdom.</p><p><em>Key Themes:</em> The Davidic Covenant, sin and consequence, repentance, God's faithfulness.</p>` },
  "1kings": { title: "1 Kings", body: `<p><strong>Author:</strong> Unknown (possibly Jeremiah) | <strong>Date:</strong> ~561–538 BC</p><p>1 Kings records Solomon's reign, the building of the Temple, the division of the kingdom, and the ministries of Elijah during a time of growing apostasy.</p><p><em>Key Themes:</em> Wisdom, temple worship, covenant faithfulness, idolatry.</p>` },
  "2kings": { title: "2 Kings", body: `<p><strong>Author:</strong> Unknown (possibly Jeremiah) | <strong>Date:</strong> ~561–538 BC</p><p>2 Kings continues the history of Israel and Judah through their decline, the ministries of Elisha, and the ultimate exile of both kingdoms.</p><p><em>Key Themes:</em> Covenant consequences, prophetic ministry, exile, God's judgment.</p>` },
  "1chronicles": { title: "1 Chronicles", body: `<p><strong>Author:</strong> Ezra (traditionally) | <strong>Date:</strong> ~450–430 BC</p><p>1 Chronicles retells Israel's history from Adam to David, focusing on the Levitical priesthood and David's preparations for the Temple.</p><p><em>Key Themes:</em> Worship, Davidic line, temple preparations, God's covenant.</p>` },
  "2chronicles": { title: "2 Chronicles", body: `<p><strong>Author:</strong> Ezra (traditionally) | <strong>Date:</strong> ~450–430 BC</p><p>2 Chronicles focuses on the Temple and the kings of Judah from Solomon to the exile and Cyrus's decree allowing return.</p><p><em>Key Themes:</em> Temple worship, revival, covenant faithfulness, God's mercy.</p>` },
  ezra: { title: "Ezra", body: `<p><strong>Author:</strong> Ezra | <strong>Date:</strong> ~457–444 BC</p><p>Ezra records the return of Jewish exiles from Babylon and the rebuilding of the Temple under Zerubbabel and later Ezra's spiritual reforms.</p><p><em>Key Themes:</em> Restoration, the Law, worship, spiritual reform.</p>` },
  nehemiah: { title: "Nehemiah", body: `<p><strong>Author:</strong> Nehemiah | <strong>Date:</strong> ~444–432 BC</p><p>Nehemiah details the rebuilding of Jerusalem's walls and the spiritual renewal of the people under Nehemiah's leadership.</p><p><em>Key Themes:</em> Prayer, perseverance, leadership, covenant renewal.</p>` },
  esther: { title: "Esther", body: `

  <div class="book-meta-bar">
    <div class="bm-item"><span class="bm-label">Author</span><span class="bm-value">Unknown</span></div>
    <div class="bm-item"><span class="bm-label">Date Written</span><span class="bm-value">Late 5th – 4th c. BC</span></div>
    <div class="bm-item"><span class="bm-label">Period Covered</span><span class="bm-value">483 – 473 BC</span></div>
    <div class="bm-item"><span class="bm-label">Chapters</span><span class="bm-value">10</span></div>
  </div>

  <h3>Introduction &amp; Background</h3>
  <p>The Book of Esther is a historical narrative set in the <strong>Persian Empire</strong> during the reign of King Xerxes (Ahasuerus). It uniquely does not mention God by name, yet powerfully showcases divine providence through the actions of its characters. The story revolves around Esther, a Jewish woman who becomes queen and courageously saves her people from extermination.</p>

  <h3>Purpose of the Book</h3>
  <p>The primary purpose is to explain the origins of the Jewish festival of <strong>Purim</strong> and to illustrate God's unseen hand in protecting and delivering His people.</p>

  <h3>When Was It Written</h3>
  <p>The Book of Esther was likely written in the <strong>late 5th or early 4th century BCE</strong>, shortly after the events it describes.</p>

  <h3>Years of History Recorded</h3>
  <p>The events span approximately <strong>10 years</strong>, from <strong>483 BCE to 473 BCE</strong>.</p>

  <h3>Author</h3>
  <p>The author is <strong>unknown</strong>. Jewish tradition often attributes the book to Mordecai, one of the main characters, but this has not been confirmed.</p>

  <h3>Where the Incidents Took Place</h3>
  <p>The events primarily occur in the <strong>Persian Empire</strong>, specifically in the royal citadel of Susa (Shushan):</p>
  <ul>
    <li><strong>Susa (Shushan):</strong> Esther 1:2–3; 2:5, 8, 21</li>
  </ul>

  <h3>Key Verses</h3>
  <blockquote>"For if you remain silent at this time, relief and deliverance for the Jews will arise from another place, but you and your father's family will perish. And who knows but that you have come to your royal position for such a time as this?" <strong>— Esther 4:14</strong></blockquote>
  <blockquote>"In every province and in every city to which the edict of the king came, there was joy and gladness among the Jews, with feasting and celebrating. And many people of other nationalities became Jews because fear of the Jews had seized them." <strong>— Esther 8:17</strong></blockquote>

  <h3>Key People</h3>
  <ul>
    <li><strong>Esther</strong> — The Jewish heroine who becomes queen of Persia</li>
    <li><strong>Mordecai</strong> — Esther's cousin and faithful guardian</li>
    <li><strong>King Xerxes (Ahasuerus)</strong> — The Persian king</li>
    <li><strong>Haman</strong> — The antagonist who plots to destroy the Jews</li>
    <li><strong>Vashti</strong> — The former queen who is deposed</li>
  </ul>

  <h3>To Whom the Book Was Written</h3>
  <p>The Book of Esther was written for the <strong>Jewish people</strong>, to record their deliverance and the institution of the festival of Purim.</p>

  <h3>Chapters at a Glance</h3>
  <ul>
    <li><strong>Chapter 1</strong> — King Xerxes' great banquet; Queen Vashti is deposed for refusing to appear</li>
    <li><strong>Chapter 2</strong> — Esther is chosen as queen; Mordecai uncovers a plot against the king</li>
    <li><strong>Chapter 3</strong> — Haman plots to destroy all Jews after Mordecai refuses to bow to him</li>
    <li><strong>Chapter 4</strong> — Mordecai urges Esther to intervene on behalf of her people</li>
    <li><strong>Chapter 5</strong> — Esther approaches the king; invites him and Haman to a banquet</li>
    <li><strong>Chapter 6</strong> — The king honors Mordecai; Haman's pride is deeply wounded</li>
    <li><strong>Chapter 7</strong> — Esther reveals Haman's plot; Haman is hanged on his own gallows</li>
    <li><strong>Chapter 8</strong> — The king issues a new decree allowing the Jews to defend themselves</li>
    <li><strong>Chapter 9</strong> — The Jews defeat their enemies; the Feast of Purim is established</li>
    <li><strong>Chapter 10</strong> — A closing account of the greatness of King Xerxes and Mordecai</li>
  </ul>

  <h3>Chapters Divided into Groups</h3>
  <ul>
    <li><strong>Chapters 1–2 — Introduction &amp; Rise of Esther:</strong> Vashti deposed; Esther becomes queen; Mordecai uncovers a plot</li>
    <li><strong>Chapters 3–4 — The Threat to the Jews:</strong> Haman's plot against the Jews; Mordecai's urgent call to Esther</li>
    <li><strong>Chapters 5–7 — Esther's Intervention:</strong> Strategic banquets; Haman's plot exposed; his execution</li>
    <li><strong>Chapters 8–10 — Deliverance &amp; Celebration:</strong> The Jews' victory; Purim established; Mordecai's rise to power</li>
  </ul>

  <h3>Esther's Courageous Risks</h3>
  <ul>
    <li><strong>Approaching the King Uninvited</strong> — Esther risked her life appearing before King Xerxes without being summoned. By Persian law, anyone who did so without permission could be put to death unless the king extended his golden scepter (Esther 4:11).</li>
    <li><strong>Revealing Her Jewish Identity</strong> — Esther had concealed her heritage on Mordecai's advice. Revealing it risked her status and possibly her life, given the royal decree to annihilate all Jews (Esther 7:3–4).</li>
    <li><strong>Advocating Publicly for Her People</strong> — Pleading for the Jews and exposing Haman's plot risked the wrath of a powerful official and potentially the king himself (Esther 7:5–6).</li>
  </ul>

  <h3>Why Esther Is Considered Great</h3>
  <ul>
    <li><strong>Courage &amp; Bravery</strong> — She risked her life to save her people, approaching the king and revealing her Jewish identity despite immense personal danger.</li>
    <li><strong>Wisdom &amp; Strategic Thinking</strong> — She hosted banquets and revealed her request at precisely the right moment, exposing Haman effectively (Esther 5–7).</li>
    <li><strong>Faith &amp; Devotion</strong> — Before approaching the king, she called for fasting and prayer, reflecting deep reliance on God's guidance (Esther 4:16).</li>
    <li><strong>Leadership &amp; Influence</strong> — Her courage inspired the entire Jewish community and directly led to the reversal of the death decree (Esther 8:11–13).</li>
    <li><strong>Enduring Legacy</strong> — Her story is celebrated at Purim every year — an ongoing memorial to faith, courage, and divine providence.</li>
  </ul>

  <h3>Life Applications</h3>
  <ul>
    <li><strong>Courage</strong> — Stand up for what is right, even when it is dangerous and costly.</li>
    <li><strong>Providence</strong> — Trust that God is working behind the scenes, even in silence.</li>
    <li><strong>Identity</strong> — Embrace and be proud of your heritage and faith in Christ.</li>
    <li><strong>Justice</strong> — Work actively towards the protection and deliverance of the oppressed.</li>
  </ul>

  <h3>Foreshadows of Jesus Christ</h3>
  <ul>
    <li><strong>Mediatorship</strong> — Esther's role interceding for her people foreshadows Christ as the one Mediator between God and humanity (1 Tim. 2:5).</li>
    <li><strong>Deliverance from Death</strong> — The rescue of the Jews from a death decree prefigures the ultimate deliverance from sin and death through Jesus Christ.</li>
  </ul>

  <h3>Theological Themes</h3>
  <ul>
    <li><strong>Divine Providence</strong> — God's invisible hand guides events, even where His name is unspoken.</li>
    <li><strong>Courage &amp; Faithfulness</strong> — Standing firm in faith and taking bold action in moments of crisis.</li>
    <li><strong>Reversal of Fortune</strong> — The oppressed are elevated; the proud and wicked are brought low.</li>
  </ul>

  <h3>Related Old Testament Books</h3>
  <p>The events in Esther overlap with those in <strong>Ezra</strong> and <strong>Nehemiah</strong>, all of which take place during the Persian period of Israel's history.</p>

  <h3>Teaching Plan</h3>
  <ul>
    <li><strong>1.</strong> Introduction and Background — Chapter 1</li>
    <li><strong>2.</strong> Esther's Rise to Queen — Chapter 2</li>
    <li><strong>3.</strong> Haman's Plot and Mordecai's Response — Chapters 3–4</li>
    <li><strong>4.</strong> Esther's Intervention — Chapters 5–7</li>
    <li><strong>5.</strong> The Jews' Victory and Purim — Chapters 8–10</li>
    <li><strong>6.</strong> Application — Lessons from Esther for Today</li>
  </ul>

  <h3>Brief Timeline</h3>
  <ul class="book-timeline">
    <li><strong>483 BCE</strong> — Queen Vashti deposed (Esther 1)</li>
    <li><strong>479 BCE</strong> — Esther becomes queen (Esther 2)</li>
    <li><strong>474 BCE</strong> — Haman's plot against the Jews (Esther 3)</li>
    <li><strong>473 BCE</strong> — Jews delivered; Feast of Purim established (Esther 8–9)</li>
  </ul>

  <h3>Summary</h3>
  <p>The Book of Esther narrates the story of a Jewish woman who becomes queen of Persia and, with courage and wisdom, thwarts a plot to annihilate her people. Through Esther's bravery and Mordecai's guidance, the Jews are saved and the festival of Purim is established to commemorate their deliverance. The book powerfully underscores themes of <strong>divine providence</strong>, <strong>reversal of fortunes</strong>, and the enduring importance of standing up for one's people and faith — even at great personal cost.</p>

` },
  job: { title: "Job", body: `<p><strong>Author:</strong> Unknown | <strong>Date:</strong> Unknown (possibly earliest OT book)</p><p>Job explores the question of suffering and God's sovereignty through Job's trials, his dialogues with friends, and God's dramatic response from the whirlwind.</p><p><em>Key Themes:</em> Suffering, sovereignty of God, faith under trial, human wisdom's limits.</p>` },
  psalms: { title: "Psalms", body: `<p><strong>Author:</strong> David, Asaph, Sons of Korah, others | <strong>Date:</strong> ~1440–400 BC</p><p>The Psalms are Israel's hymn book — 150 poetic songs expressing the full range of human experience before God: praise, lament, thanksgiving, trust, and repentance.</p><p><em>Key Themes:</em> Worship, prayer, lament, messianic prophecy, God's character.</p>` },
  proverbs: { title: "Proverbs", body: `<p><strong>Author:</strong> Solomon, Agur, Lemuel | <strong>Date:</strong> ~950–700 BC</p><p>Proverbs is a collection of wise sayings for practical godly living — covering topics from relationships and work to speech and integrity.</p><p><em>Key Themes:</em> Wisdom, the fear of the Lord, practical righteousness.</p>` },
  ecclesiastes: { title: "Ecclesiastes", body: `<p><strong>Author:</strong> Qohelet (likely Solomon) | <strong>Date:</strong> ~935 BC</p><p>Ecclesiastes examines the meaning of life "under the sun" and concludes that wisdom, pleasure, and work are ultimately vanity apart from fearing God and keeping His commandments.</p><p><em>Key Themes:</em> Meaning, vanity, wisdom, fearing God.</p>` },
  "song-of-solomon": { title: "Song of Solomon", body: `<p><strong>Author:</strong> Solomon | <strong>Date:</strong> ~965 BC</p><p>A poetic celebration of love between a bride and groom, often interpreted as illustrating the relationship between God and Israel, or Christ and the Church.</p><p><em>Key Themes:</em> Love, marriage, devotion, the beauty of covenant relationship.</p>` },
  isaiah: { title: "Isaiah", body: `<p><strong>Author:</strong> Isaiah | <strong>Date:</strong> ~740–700 BC</p><p>Isaiah is the greatest of the writing prophets, containing prophecies of judgment and salvation, the suffering Servant (chapters 52–53), and the future glory of God's kingdom.</p><p><em>Key Themes:</em> Holiness of God, judgment, redemption, the Messiah, the new creation.</p>` },
  jeremiah: { title: "Jeremiah", body: `<p><strong>Author:</strong> Jeremiah | <strong>Date:</strong> ~627–585 BC</p><p>Jeremiah prophesied during Judah's final years before the Babylonian exile, calling for repentance and announcing the New Covenant God would make with His people.</p><p><em>Key Themes:</em> Judgment, repentance, the New Covenant, God's faithfulness.</p>` },
  lamentations: { title: "Lamentations", body: `<p><strong>Author:</strong> Jeremiah | <strong>Date:</strong> ~586 BC</p><p>A series of five acrostic poems mourning the destruction of Jerusalem. It acknowledges God's righteous judgment while clinging to hope in His mercies.</p><p><em>Key Themes:</em> Grief, confession, God's justice, enduring hope.</p>` },
  ezekiel: { title: "Ezekiel", body: `<p><strong>Author:</strong> Ezekiel | <strong>Date:</strong> ~593–571 BC</p><p>Ezekiel prophesied to the exiles in Babylon using dramatic visions and sign-acts. His prophecies include judgment on Israel and nations, and the promise of restoration and a new Temple.</p><p><em>Key Themes:</em> God's glory, judgment, individual responsibility, restoration, the new Temple.</p>` },
  daniel: { title: "Daniel", body: `<p><strong>Author:</strong> Daniel | <strong>Date:</strong> ~605–535 BC</p><p>Daniel records the faithfulness of Daniel and his companions in Babylon and contains apocalyptic visions about future world kingdoms and God's ultimate triumph.</p><p><em>Key Themes:</em> Faithfulness under pressure, God's sovereignty over history, the kingdom of God.</p>` },
  hosea: { title: "Hosea", body: `<p><strong>Author:</strong> Hosea | <strong>Date:</strong> ~755–715 BC</p><p>Hosea's marriage to an unfaithful wife becomes a living parable of Israel's spiritual adultery against God. God calls His people back to covenant faithfulness.</p><p><em>Key Themes:</em> Covenant love (hesed), spiritual adultery, repentance, restoration.</p>` },
  joel: { title: "Joel", body: `<p><strong>Author:</strong> Joel | <strong>Date:</strong> ~835 BC or ~400 BC</p><p>Joel uses a devastating locust plague as a call to national repentance and looks forward to the Day of the Lord and the outpouring of God's Spirit.</p><p><em>Key Themes:</em> Repentance, the Day of the Lord, the Holy Spirit.</p>` },
  amos: { title: "Amos", body: `<p><strong>Author:</strong> Amos | <strong>Date:</strong> ~760–750 BC</p><p>Amos, a shepherd from Tekoa, confronted Israel's social injustice and religious hypocrisy, announcing God's judgment and calling for justice to "roll down like waters."</p><p><em>Key Themes:</em> Social justice, true worship, judgment, restoration.</p>` },
  obadiah: { title: "Obadiah", body: `<p><strong>Author:</strong> Obadiah | <strong>Date:</strong> ~586 BC</p><p>The shortest OT book pronounces judgment on Edom for its pride and betrayal of Judah, and promises God's final victory and restoration of Israel.</p><p><em>Key Themes:</em> Pride, divine judgment, God's justice.</p>` },
  jonah: { title: "Jonah", body: `<p><strong>Author:</strong> Jonah | <strong>Date:</strong> ~793–753 BC</p><p>Jonah's flight from God and mission to Nineveh illustrate God's universal compassion. The Ninevites repent and God relents — challenging Israel's narrow view of grace.</p><p><em>Key Themes:</em> God's universal mercy, repentance, obedience, compassion for all peoples.</p>` },
  micah: { title: "Micah", body: `<p><strong>Author:</strong> Micah | <strong>Date:</strong> ~735–700 BC</p><p>Micah announces judgment against Israel and Judah while also promising the coming Messianic King from Bethlehem and the ultimate restoration of God's people.</p><p><em>Key Themes:</em> Justice, mercy, humility, the Messiah, restoration.</p>` },
  nahum: { title: "Nahum", body: `<p><strong>Author:</strong> Nahum | <strong>Date:</strong> ~663–612 BC</p><p>Nahum pronounces the complete destruction of Nineveh, the Assyrian capital, declaring God's righteous judgment against cruelty and oppression.</p><p><em>Key Themes:</em> God's justice, divine vengeance, the fate of the wicked.</p>` },
  habakkuk: { title: "Habakkuk", body: `<p><strong>Author:</strong> Habakkuk | <strong>Date:</strong> ~609–598 BC</p><p>Habakkuk wrestles with God over injustice and suffering, ultimately arriving at profound faith: "The righteous shall live by his faith."</p><p><em>Key Themes:</em> Faith, God's justice, theodicy, trust in God's purposes.</p>` },
  zephaniah: { title: "Zephaniah", body: `<p><strong>Author:</strong> Zephaniah | <strong>Date:</strong> ~640–609 BC</p><p>Zephaniah warns of the imminent Day of the Lord and calls Judah to repentance, closing with a beautiful promise of God rejoicing over His restored people with singing.</p><p><em>Key Themes:</em> Judgment, the Day of the Lord, repentance, restoration and joy.</p>` },
  haggai: { title: "Haggai", body: `<p><strong>Author:</strong> Haggai | <strong>Date:</strong> ~520 BC</p><p>Haggai urges the returned exiles to complete the rebuilding of the Temple, linking their neglect of God's house to economic hardship and calling them to prioritize God.</p><p><em>Key Themes:</em> Prioritizing God, worship, covenant faithfulness, future glory.</p>` },
  zechariah: { title: "Zechariah", body: `<p><strong>Author:</strong> Zechariah | <strong>Date:</strong> ~520–480 BC</p><p>Zechariah's visions encourage the returned exiles and contain rich messianic prophecies about Christ's first and second coming, His entry into Jerusalem, and His ultimate reign.</p><p><em>Key Themes:</em> Messianic prophecy, restoration, the kingdom of God, return of Christ.</p>` },
  malachi: { title: "Malachi", body: `<p><strong>Author:</strong> Malachi | <strong>Date:</strong> ~430 BC</p><p>The last OT book addresses the spiritual laxity of post-exilic Judah — corrupt priests, broken covenants, and withheld tithes — and promises the coming of Elijah before the great Day of the Lord.</p><p><em>Key Themes:</em> Covenant faithfulness, tithing, the forerunner, the Day of the Lord.</p>` },

  // NEW TESTAMENT
  matthew: { title: "Matthew", body: `<p><strong>Author:</strong> Matthew (Levi) | <strong>Date:</strong> ~50–70 AD</p><p>Matthew presents Jesus as the promised Messiah and King of Israel, fulfilling Old Testament prophecy. It includes five major discourses, the Sermon on the Mount, and the Great Commission.</p><p><em>Key Themes:</em> Jesus as Messiah, the Kingdom of Heaven, discipleship, fulfillment of Scripture.</p>` },
  mark: { title: "Mark", body: `<p><strong>Author:</strong> John Mark | <strong>Date:</strong> ~50–65 AD</p><p>The shortest Gospel emphasizes Jesus as the suffering Servant who came "not to be served but to serve." It is fast-paced and action-oriented, focusing on Jesus' works.</p><p><em>Key Themes:</em> Jesus as Servant, power, action, discipleship cost.</p>` },
  luke: { title: "Luke", body: `<p><strong>Author:</strong> Luke | <strong>Date:</strong> ~60–62 AD</p><p>Luke presents Jesus as the perfect Son of Man — compassionate, universal in reach. It emphasizes prayer, the Holy Spirit, women, the poor, and salvation for all peoples.</p><p><em>Key Themes:</em> Jesus as Son of Man, compassion, prayer, the Holy Spirit, the lost being found.</p>` },
  john: { title: "John", body: `<p><strong>Author:</strong> John | <strong>Date:</strong> ~85–95 AD</p><p>John's Gospel is the most theological, presenting Jesus as the eternal Word made flesh. It includes the seven "I AM" statements and signs pointing to Jesus' divine identity.</p><p><em>Key Themes:</em> Jesus as Son of God, belief, eternal life, the Word made flesh, love.</p>` },
  acts: { title: "Acts of the Apostles", body: `<p><strong>Author:</strong> Luke | <strong>Date:</strong> ~62 AD</p><p>Acts records the birth and expansion of the early Church through the Holy Spirit's power, tracing the gospel from Jerusalem to Rome through the ministries of Peter and Paul.</p><p><em>Key Themes:</em> The Holy Spirit, the Church, mission, the gospel spreading to all nations.</p>` },
  romans: { title: "Romans", body: `<p><strong>Author:</strong> Paul | <strong>Date:</strong> ~57 AD</p><p>Romans is Paul's most systematic treatment of the gospel — covering sin, justification by faith, the Holy Spirit, Israel, and practical Christian living.</p><p><em>Key Themes:</em> Righteousness of God, justification by faith, grace, sanctification, God's plan for Israel.</p>` },
  "1corinthians": { title: "1 Corinthians", body: `<p><strong>Author:</strong> Paul | <strong>Date:</strong> ~53–54 AD</p><p>Paul addresses divisions, immorality, spiritual gifts, and the resurrection in the church at Corinth, calling them to unity and maturity in Christ.</p><p><em>Key Themes:</em> Unity, love (chapter 13), spiritual gifts, the resurrection, Christian ethics.</p>` },
  "2corinthians": { title: "2 Corinthians", body: `<p><strong>Author:</strong> Paul | <strong>Date:</strong> ~55–56 AD</p><p>Paul defends his apostolic ministry, shares deeply personal struggles, and teaches on Christian suffering, generosity, and the new covenant.</p><p><em>Key Themes:</em> Weakness and God's power, genuine ministry, generosity, the new covenant.</p>` },
  galatians: { title: "Galatians", body: `<p><strong>Author:</strong> Paul | <strong>Date:</strong> ~48–49 AD</p><p>Paul firmly defends justification by faith alone against those who add works of the Law. Freedom in Christ, not legalism, marks true Christianity.</p><p><em>Key Themes:</em> Justification by faith, freedom in Christ, the fruit of the Spirit, opposing legalism.</p>` },
  ephesians: { title: "Ephesians", body: `<p><strong>Author:</strong> Paul | <strong>Date:</strong> ~60–62 AD</p><p>Ephesians reveals God's eternal plan to unite all things in Christ and calls believers to walk worthy of their calling — in unity, holiness, and spiritual warfare.</p><p><em>Key Themes:</em> God's eternal purpose, the Church as the Body of Christ, spiritual warfare, walking in love.</p>` },
  philippians: { title: "Philippians", body: `<p><strong>Author:</strong> Paul | <strong>Date:</strong> ~61–62 AD</p><p>Written from prison, Philippians radiates joy in Christ. Paul urges unity, humility (the Christ hymn), and contentment regardless of circumstances.</p><p><em>Key Themes:</em> Joy, humility, the mind of Christ, contentment, partnership in the gospel.</p>` },
  colossians: { title: "Colossians", body: `<p><strong>Author:</strong> Paul | <strong>Date:</strong> ~60–62 AD</p><p>Paul exalts Christ as supreme over all creation and the fullness of deity, correcting false teaching and calling believers to set their minds on things above.</p><p><em>Key Themes:</em> Supremacy of Christ, fullness in Christ, defeating false teaching, new life in Christ.</p>` },
  "1thessalonians": { title: "1 Thessalonians", body: `<p><strong>Author:</strong> Paul | <strong>Date:</strong> ~50–51 AD</p><p>One of Paul's earliest letters, encouraging a young church in suffering and clarifying questions about believers who have died before Christ's return.</p><p><em>Key Themes:</em> Faith under persecution, sanctification, the Second Coming.</p>` },
  "2thessalonians": { title: "2 Thessalonians", body: `<p><strong>Author:</strong> Paul | <strong>Date:</strong> ~51–52 AD</p><p>Paul corrects false teaching about the Day of the Lord having already come and calls believers to stand firm and work faithfully while awaiting Christ's return.</p><p><em>Key Themes:</em> The Day of the Lord, the man of lawlessness, perseverance, faithful work.</p>` },
  "1timothy": { title: "1 Timothy", body: `<p><strong>Author:</strong> Paul | <strong>Date:</strong> ~62–64 AD</p><p>Paul instructs Timothy on church leadership, sound doctrine, prayer, and proper order in the church at Ephesus, warning against false teachers.</p><p><em>Key Themes:</em> Church leadership, sound doctrine, prayer, godliness, guarding the faith.</p>` },
  "2timothy": { title: "2 Timothy", body: `<p><strong>Author:</strong> Paul | <strong>Date:</strong> ~66–67 AD</p><p>Paul's final letter, written before his martyrdom, urges Timothy to remain faithful, preach the Word, and endure hardship as a good soldier of Christ.</p><p><em>Key Themes:</em> Faithfulness, Scripture's authority (3:16–17), endurance, passing on the faith.</p>` },
  titus: { title: "Titus", body: `<p><strong>Author:</strong> Paul | <strong>Date:</strong> ~63–65 AD</p><p>Paul instructs Titus to appoint elders and promote sound doctrine in Crete, emphasizing that grace transforms behavior and produces godly living.</p><p><em>Key Themes:</em> Church order, sound doctrine, grace that transforms, good works.</p>` },
  philemon: { title: "Philemon", body: `<p><strong>Author:</strong> Paul | <strong>Date:</strong> ~60–62 AD</p><p>A personal letter interceding for Onesimus, a runaway slave, Paul appeals to Philemon to receive him back as a brother in Christ — a picture of forgiveness and reconciliation.</p><p><em>Key Themes:</em> Forgiveness, Christian fellowship, reconciliation, grace.</p>` },
  hebrews: { title: "Hebrews", body: `<p><strong>Author:</strong> Unknown (possibly Paul, Apollos, or Barnabas) | <strong>Date:</strong> ~60–70 AD</p><p>Hebrews demonstrates the superiority of Christ over the Old Covenant — over angels, Moses, Aaron, and the Levitical priesthood — calling Jewish believers to persevere in faith.</p><p><em>Key Themes:</em> Christ's supremacy, the new covenant, faith (chapter 11), perseverance.</p>` },
  james: { title: "James", body: `<p><strong>Author:</strong> James (brother of Jesus) | <strong>Date:</strong> ~44–49 AD</p><p>James is the practical letter of the NT, insisting that genuine faith produces works. It addresses trials, the tongue, worldliness, prayer, and care for the poor.</p><p><em>Key Themes:</em> Faith and works, wisdom, the tongue, prayer, caring for the poor.</p>` },
  "1peter": { title: "1 Peter", body: `<p><strong>Author:</strong> Peter | <strong>Date:</strong> ~62–64 AD</p><p>Written to suffering Christians, Peter encourages holy living, submission to authority, and joyful endurance in trials — looking to Christ as the ultimate example of suffering and glory.</p><p><em>Key Themes:</em> Suffering and hope, holiness, submission, Christ's example, living as strangers.</p>` },
  "2peter": { title: "2 Peter", body: `<p><strong>Author:</strong> Peter | <strong>Date:</strong> ~64–68 AD</p><p>Peter warns against false teachers and calls believers to grow in grace and knowledge, defending the truth of Christ's Second Coming.</p><p><em>Key Themes:</em> False teaching, spiritual growth, the return of Christ, Scripture's reliability.</p>` },
  "1john": { title: "1 John", body: `<p><strong>Author:</strong> John | <strong>Date:</strong> ~85–95 AD</p><p>John writes to assure believers of salvation and combat Gnostic errors. Assurance is grounded in doctrinal belief, moral conduct, and love for fellow believers.</p><p><em>Key Themes:</em> Assurance, love, light vs. darkness, truth vs. false teaching.</p>` },
  "2john": { title: "2 John", body: `<p><strong>Author:</strong> John | <strong>Date:</strong> ~85–95 AD</p><p>A brief letter urging truth and love, warning against welcoming false teachers who deny the incarnation of Christ.</p><p><em>Key Themes:</em> Truth, love, discernment, warning against false teachers.</p>` },
  "3john": { title: "3 John", body: `<p><strong>Author:</strong> John | <strong>Date:</strong> ~85–95 AD</p><p>A personal letter commending Gaius for his hospitality to traveling missionaries and rebuking Diotrephes for his pride and opposition to apostolic authority.</p><p><em>Key Themes:</em> Hospitality, humility, supporting gospel workers, church authority.</p>` },
  jude: { title: "Jude", body: `<p><strong>Author:</strong> Jude (brother of Jesus) | <strong>Date:</strong> ~65–80 AD</p><p>Jude urgently calls believers to contend for the faith against ungodly men who have infiltrated the church, using vivid examples of judgment on past apostates.</p><p><em>Key Themes:</em> Contending for the faith, apostasy, God's judgment, perseverance in love.</p>` },
  revelation: { title: "Revelation", body: `<p><strong>Author:</strong> John | <strong>Date:</strong> ~94–96 AD</p><p>The Apocalypse of John unveils Jesus Christ in His glory and the ultimate triumph of God's Kingdom over evil. It addresses seven churches and describes the final judgment, new creation, and eternal state.</p><p><em>Key Themes:</em> Christ's glory, victory over evil, the new heaven and earth, the worship of God.</p>` },

  // DOCTRINES
  "doctrine-scripture": { title: "Doctrine of Scripture (Bibliology)", body: `<p>The Doctrine of Scripture addresses the nature, authority, and interpretation of the Bible as God's written Word.</p><h3>Key Truths:</h3><ul><li><strong>Inspiration:</strong> "All Scripture is God-breathed" (2 Tim. 3:16) — the Bible's human authors were moved by the Holy Spirit (2 Pet. 1:21).</li><li><strong>Inerrancy:</strong> Scripture, in its original manuscripts, is without error in all it affirms.</li><li><strong>Authority:</strong> The Bible is the supreme and final authority for faith and life.</li><li><strong>Sufficiency:</strong> Scripture contains all we need for salvation and godliness.</li><li><strong>Clarity (Perspicuity):</strong> The main message of Scripture is understandable to careful readers.</li><li><strong>Canon:</strong> 66 books — 39 OT, 27 NT — constitute the complete Word of God.</li></ul>` },
  "doctrine-god": { title: "Doctrine of God (Theology Proper)", body: `<p>The study of God's existence, nature, and attributes.</p><h3>Key Truths:</h3><ul><li><strong>Existence:</strong> God's existence is revealed in creation (Ps. 19:1), conscience, and Scripture.</li><li><strong>The Trinity:</strong> One God eternally existing in three Persons — Father, Son, Holy Spirit — equal in essence, distinct in Person.</li><li><strong>Attributes:</strong> God is omniscient, omnipotent, omnipresent, eternal, immutable, holy, just, loving, and sovereign.</li><li><strong>Decrees:</strong> God has an eternal, sovereign plan for all of creation and history.</li><li><strong>"I AM":</strong> God's name YHWH (Exodus 3:14) reveals His self-existence and eternal nature.</li></ul>` },
  "doctrine-christ": { title: "Doctrine of Christ (Christology)", body: `<p>Christology studies the Person and work of Jesus Christ.</p><h3>Key Truths:</h3><ul><li><strong>Deity:</strong> Jesus is fully God — the eternal Son, the Word (John 1:1), equal with the Father (Phil. 2:6).</li><li><strong>Humanity:</strong> Jesus is fully human — born of a virgin, lived a sinless life, experienced genuine human limitations.</li><li><strong>Hypostatic Union:</strong> Two natures (divine and human) in one Person — without confusion, change, division, or separation (Council of Chalcedon, 451 AD).</li><li><strong>Offices:</strong> Christ is Prophet, Priest, and King.</li><li><strong>Atonement:</strong> His death was substitutionary (Isa. 53:5–6; 1 Pet. 3:18), propitiating God's wrath and reconciling sinners.</li><li><strong>Resurrection:</strong> Bodily resurrection, validating His person and work (1 Cor. 15:17).</li></ul>` },
  "doctrine-holyspirit": { title: "Doctrine of the Holy Spirit (Pneumatology)", body: `<p>Pneumatology studies the Person and ministry of the Holy Spirit.</p><h3>Key Truths:</h3><ul><li><strong>Personhood:</strong> The Holy Spirit is a Person, not a force — He thinks, speaks, grieves, and intercedes (Rom. 8:26–27).</li><li><strong>Deity:</strong> The Spirit is fully God, co-equal with the Father and Son (Acts 5:3–4).</li><li><strong>Regeneration:</strong> He gives new birth (John 3:5–8).</li><li><strong>Indwelling:</strong> Every believer is permanently indwelt (1 Cor. 6:19–20).</li><li><strong>Sealing:</strong> He seals believers until the day of redemption (Eph. 4:30).</li><li><strong>Filling:</strong> Ongoing Spirit-filled life produces fruit and empowers service (Eph. 5:18; Gal. 5:22–23).</li><li><strong>Gifts:</strong> He distributes spiritual gifts for the building up of the Body of Christ.</li></ul>` },
  "doctrine-man": { title: "Doctrine of Man (Anthropology)", body: `<p>Biblical Anthropology addresses the origin, nature, and purpose of humanity.</p><h3>Key Truths:</h3><ul><li><strong>Created by God:</strong> Man is not a product of chance but was directly created by God (Gen. 1:26–27; 2:7).</li><li><strong>Image of God (Imago Dei):</strong> Humanity uniquely bears God's image — the basis of human dignity, morality, and relationship with God.</li><li><strong>Dichotomy / Trichotomy:</strong> Humans consist of material body and immaterial soul/spirit.</li><li><strong>Purpose:</strong> To glorify God and enjoy fellowship with Him (1 Cor. 10:31; Rev. 4:11).</li><li><strong>Male and Female:</strong> The distinction of male and female is part of God's good design (Gen. 1:27).</li></ul>` },
  "doctrine-sin": { title: "Doctrine of Sin (Hamartiology)", body: `<p>Hamartiology examines the nature, origin, and consequences of sin.</p><h3>Key Truths:</h3><ul><li><strong>Origin:</strong> Sin entered through Adam's disobedience (Gen. 3; Rom. 5:12).</li><li><strong>Nature:</strong> Sin is any thought, word, action, or disposition that falls short of God's perfect standard (1 John 3:4; Rom. 3:23).</li><li><strong>Total Depravity:</strong> Every part of fallen human nature is affected by sin — not that we are as evil as possible, but that nothing in us is untouched by sin.</li><li><strong>Consequences:</strong> Spiritual death (separation from God), physical death, and eternal death for the unregenerate.</li><li><strong>Imputation:</strong> Adam's sin is imputed to all mankind; Christ's righteousness is imputed to all who believe.</li></ul>` },
  "doctrine-salvation": { title: "Doctrine of Salvation (Soteriology)", body: `<p>Soteriology covers God's plan to redeem sinners through Jesus Christ.</p><h3>Key Truths:</h3><ul><li><strong>Election:</strong> God chose those He would save before the foundation of the world (Eph. 1:4–5).</li><li><strong>Calling:</strong> God effectively draws the elect to Himself through the gospel (John 6:44).</li><li><strong>Regeneration:</strong> New birth — God grants a new heart and spirit (Ezek. 36:26; Tit. 3:5).</li><li><strong>Repentance and Faith:</strong> The human response to the gospel — turning from sin and trusting in Christ.</li><li><strong>Justification:</strong> God declares the sinner righteous through faith in Christ (Rom. 3:24; 5:1).</li><li><strong>Adoption:</strong> Believers are brought into God's family (Rom. 8:15).</li><li><strong>Sanctification:</strong> The lifelong process of growth in holiness by the Spirit.</li><li><strong>Glorification:</strong> The final completion of salvation at Christ's return (Rom. 8:30).</li></ul>` },
  "doctrine-church": { title: "Doctrine of the Church (Ecclesiology)", body: `<p>Ecclesiology is the study of the nature, purpose, and practice of the Church.</p><h3>Key Truths:</h3><ul><li><strong>Definition:</strong> The Church is the body of all true believers, united to Christ as Head.</li><li><strong>Universal Church:</strong> All regenerate believers of all times and places.</li><li><strong>Local Church:</strong> A gathered community of believers in a specific place, committed to word, sacraments, and discipline.</li><li><strong>Marks:</strong> True preaching of the Word, proper administration of Baptism and the Lord's Supper, and church discipline.</li><li><strong>Leadership:</strong> Elders/Pastors and Deacons (1 Tim. 3; Tit. 1).</li><li><strong>Mission:</strong> The Great Commission — making disciples of all nations (Matt. 28:18–20).</li></ul>` },
  "doctrine-angels": { title: "Doctrine of Angels (Angelology)", body: `<p>Angelology covers the nature and ministry of angelic and demonic beings.</p><h3>Key Truths:</h3><ul><li><strong>Good Angels:</strong> Created spiritual beings who serve God, worship Him, and minister to believers (Heb. 1:14; Rev. 5:11).</li><li><strong>Ranks:</strong> Seraphim (Isa. 6), Cherubim (Gen. 3; Ezek. 1), Archangels (Michael, Gabriel).</li><li><strong>Satan:</strong> A fallen angel, the adversary — a created being, not a rival god. He accuses, deceives, and opposes God's people (Job 1–2; Rev. 12:10).</li><li><strong>Demons:</strong> Fallen angels who follow Satan, actively opposing God's work.</li><li><strong>Christ's Victory:</strong> At the cross, Christ disarmed spiritual powers (Col. 2:15). Believers are protected (Eph. 6:10–18).</li></ul>` },
  "doctrine-lastthings": { title: "Doctrine of Last Things (Eschatology)", body: `<p>Eschatology studies biblical prophecy and the end of the age.</p><h3>Key Truths:</h3><ul><li><strong>Death:</strong> Physical death is the separation of body and soul. For the believer, it is "gain" (Phil. 1:21).</li><li><strong>Intermediate State:</strong> The souls of believers are with Christ after death (2 Cor. 5:8); unbelievers await judgment.</li><li><strong>Second Coming:</strong> Christ will return bodily and visibly to judge the living and the dead (Acts 1:11; 1 Thess. 4:16–17).</li><li><strong>Resurrection:</strong> Bodily resurrection of all — believers to glory, unbelievers to judgment (John 5:28–29).</li><li><strong>Judgment:</strong> The Great White Throne Judgment (Rev. 20:11–15) and the Judgment Seat of Christ for believers (2 Cor. 5:10).</li><li><strong>New Creation:</strong> God will create a new heaven and new earth — the eternal home of the redeemed (Rev. 21–22).</li></ul>` },

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
      <p>Video sermon podcasts will be available here soon. Stay tuned as we upload teachings from the Word of God.</p>
      <blockquote>"Preach the word; be ready in season and out of season." — 2 Timothy 4:2</blockquote>`
  },

  // AUDIO PODCAST SERMONS
  'audio-podcast': {
    title: 'Audio Podcast Sermons',
    body: `
      <p>Audio sermon podcasts will be available here soon. We are preparing sound biblical teaching for you to listen to anywhere.</p>
      <blockquote>"Faith comes from hearing, and hearing through the word of Christ." — Romans 10:17</blockquote>`
  },

  // THEOLOGY VIDEOS
  'theology-videos': {
    title: 'Theology Videos',
    body: `
      <h3 class="tv-section-heading">Bible Doctrine Survey</h3>
      <p class="tv-intro">Watch our Bible Doctrine Survey video series — 10 core doctrines of the Christian faith, taught from Scripture.</p>
      <div class="theology-video-grid">

        <a href="https://youtube.com/live/LoL6T45NLWo" target="_blank" rel="noopener noreferrer" class="tv-card">
          <div class="tv-thumb"><img src="https://img.youtube.com/vi/LoL6T45NLWo/hqdefault.jpg" alt="Doctrine of Scripture" loading="lazy" /><div class="tv-play">▶</div></div>
          <div class="tv-title">Doctrine of Scripture</div>
        </a>

        <a href="https://youtube.com/live/LoL6T45NLWo" target="_blank" rel="noopener noreferrer" class="tv-card">
          <div class="tv-thumb"><img src="https://img.youtube.com/vi/LoL6T45NLWo/hqdefault.jpg" alt="Doctrine of God" loading="lazy" /><div class="tv-play">▶</div></div>
          <div class="tv-title">Doctrine of God</div>
        </a>

        <a href="https://youtube.com/live/LoL6T45NLWo" target="_blank" rel="noopener noreferrer" class="tv-card">
          <div class="tv-thumb"><img src="https://img.youtube.com/vi/LoL6T45NLWo/hqdefault.jpg" alt="Doctrine of Christ" loading="lazy" /><div class="tv-play">▶</div></div>
          <div class="tv-title">Doctrine of Christ</div>
        </a>

        <a href="https://youtube.com/live/LoL6T45NLWo" target="_blank" rel="noopener noreferrer" class="tv-card">
          <div class="tv-thumb"><img src="https://img.youtube.com/vi/LoL6T45NLWo/hqdefault.jpg" alt="Doctrine of the Holy Spirit" loading="lazy" /><div class="tv-play">▶</div></div>
          <div class="tv-title">Doctrine of the Holy Spirit</div>
        </a>

        <a href="https://youtube.com/live/LoL6T45NLWo" target="_blank" rel="noopener noreferrer" class="tv-card">
          <div class="tv-thumb"><img src="https://img.youtube.com/vi/LoL6T45NLWo/hqdefault.jpg" alt="Doctrine of Man" loading="lazy" /><div class="tv-play">▶</div></div>
          <div class="tv-title">Doctrine of Man</div>
        </a>

        <a href="https://youtube.com/live/LoL6T45NLWo" target="_blank" rel="noopener noreferrer" class="tv-card">
          <div class="tv-thumb"><img src="https://img.youtube.com/vi/LoL6T45NLWo/hqdefault.jpg" alt="Doctrine of Sin" loading="lazy" /><div class="tv-play">▶</div></div>
          <div class="tv-title">Doctrine of Sin</div>
        </a>

        <a href="https://youtube.com/live/LoL6T45NLWo" target="_blank" rel="noopener noreferrer" class="tv-card">
          <div class="tv-thumb"><img src="https://img.youtube.com/vi/LoL6T45NLWo/hqdefault.jpg" alt="Doctrine of Salvation" loading="lazy" /><div class="tv-play">▶</div></div>
          <div class="tv-title">Doctrine of Salvation</div>
        </a>

        <a href="https://youtube.com/live/LoL6T45NLWo" target="_blank" rel="noopener noreferrer" class="tv-card">
          <div class="tv-thumb"><img src="https://img.youtube.com/vi/LoL6T45NLWo/hqdefault.jpg" alt="Doctrine of the Church" loading="lazy" /><div class="tv-play">▶</div></div>
          <div class="tv-title">Doctrine of the Church</div>
        </a>

        <a href="https://youtube.com/live/LoL6T45NLWo" target="_blank" rel="noopener noreferrer" class="tv-card">
          <div class="tv-thumb"><img src="https://img.youtube.com/vi/LoL6T45NLWo/hqdefault.jpg" alt="Doctrine of Angels" loading="lazy" /><div class="tv-play">▶</div></div>
          <div class="tv-title">Doctrine of Angels</div>
        </a>

        <a href="https://youtube.com/live/LoL6T45NLWo" target="_blank" rel="noopener noreferrer" class="tv-card">
          <div class="tv-thumb"><img src="https://img.youtube.com/vi/LoL6T45NLWo/hqdefault.jpg" alt="Doctrine of Last Things" loading="lazy" /><div class="tv-play">▶</div></div>
          <div class="tv-title">Doctrine of Last Things</div>
        </a>

      </div>`
  },

  // ── SPECIAL PAGES ────────────────────────────────────────────────────────────

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
            <img src="qr-community.png" alt="Scan QR to join GAG Community" class="wa-qr-img" />
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
            <img src="qr-group.png" alt="Scan QR to join GAG Bible Study Group" class="wa-qr-img" />
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

};

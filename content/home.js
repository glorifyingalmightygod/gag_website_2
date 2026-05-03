/* =============================================
   HOME PAGE & GOSPEL PRESENTATION
   ============================================= */

const CONTENT = {};

Object.assign(CONTENT, {

  home: {
    title: "Welcome to Glorifying Almighty GOD",
    body: `<p>A place to grow in the knowledge of His Word — exploring Scripture from Genesis to Revelation, doctrine by doctrine, book by book.</p>
    <p>Use the sidebar to navigate through the Old Testament, New Testament, or Bible Doctrine surveys. Each section is designed to help you study, understand, and apply God's Word to your life.</p>
    <blockquote>"Your word is a lamp to my feet and a light to my path." — Psalm 119:105</blockquote>`
  },

  'gospel-presentation': {
    title: "What Must I Do to Be Saved?",
    body: `
    <p class="gp-intro">The Bible has the answer to life's most important question. Here it is — explained simply, honestly, and straight from God's Word. Read through each question below.</p>

    <div class="gp-qa">
      <div class="gp-question"><span class="gp-q-num">Q 1</span> Does God really love me?</div>
      <div class="gp-answer">
        <p><strong>Yes — more than you can ever imagine.</strong> God created you, knows you by name, and has a wonderful plan for your life. His love is not based on how good you are or what you have done. He loves you just as you are, right now.</p>
        <blockquote>"For God so loved the world that He gave His one and only Son, that whoever believes in Him shall not perish but have eternal life." <cite>— John 3:16</cite></blockquote>
        <p class="gp-telugu">"దేవుడు లోకమును ఎంతో ప్రేమించెను కాబట్టి తన అద్వితీయ కుమారుని అనుగ్రహించెను; ఆయనయందు విశ్వాసముంచు ప్రతివాడు నశింపక నిత్యజీవమును పొందునట్లు అనుగ్రహించెను." — యోహాను 3:16</p>
      </div>
    </div>

    <div class="gp-qa">
      <div class="gp-question"><span class="gp-q-num">Q 2</span> Then why do I feel so far from God?</div>
      <div class="gp-answer">
        <p>If God loves us so much, why does life feel empty or broken sometimes? The Bible tells us there is a wall between us and God — and that wall is called <strong>sin</strong>.</p>
        <blockquote>"But your iniquities have separated you from your God; your sins have hidden His face from you, so that He will not hear." <cite>— Isaiah 59:2</cite></blockquote>
        <p class="gp-telugu">"అయితే మీ దోషములు మీకును మీ దేవునికిని అడ్డుగా వచ్చి మీ పాపములు ఆయన మొగము మీకు కనబడకుండ చేయుచున్నవి." — యెషయా 59:2</p>
      </div>
    </div>

    <div class="gp-qa">
      <div class="gp-question"><span class="gp-q-num">Q 3</span> What exactly is sin?</div>
      <div class="gp-answer">
        <p>Sin is simply <strong>going our own way instead of God's way.</strong> Lying, hatred, pride, greed, jealousy — but also just ignoring God in your daily life. And here is the honest truth — every single one of us has sinned. There are no exceptions.</p>
        <blockquote>"For all have sinned and fall short of the glory of God." <cite>— Romans 3:23</cite></blockquote>
        <p class="gp-telugu">"అందరు పాపము చేసి దేవుని మహిమకు తక్కువవారైరి." — రోమీయులకు 3:23</p>
      </div>
    </div>

    <div class="gp-qa">
      <div class="gp-question"><span class="gp-q-num">Q 4</span> What happens because of sin?</div>
      <div class="gp-answer">
        <p>Sin has a price. The Bible calls it <strong>death</strong> — not just physical death, but eternal separation from God. That is serious. But read the same verse carefully — it also holds the greatest news you will ever hear!</p>
        <blockquote>"For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord." <cite>— Romans 6:23</cite></blockquote>
        <p class="gp-telugu">"పాపము వలన వచ్చు జీతము మరణము; అయితే దేవుని కృపావరము మన ప్రభువైన క్రీస్తుయేసునందు నిత్యజీవము." — రోమీయులకు 6:23</p>
      </div>
    </div>

    <div class="gp-qa">
      <div class="gp-question"><span class="gp-q-num">Q 5</span> Did God just leave us like that?</div>
      <div class="gp-answer">
        <p><strong>Absolutely not!</strong> This is where the Good News truly begins. Even while we were deep in sin, God did something incredible — He sent His own Son, Jesus Christ, to rescue us. Not because we deserved it. Simply because He loves us.</p>
        <blockquote>"But God demonstrates His own love for us in this: while we were still sinners, Christ died for us." <cite>— Romans 5:8</cite></blockquote>
        <p class="gp-telugu">"అయితే మనమింకను పాపులుగా ఉండగా క్రీస్తు మనకొరకు మృతిపొందెను; ఇందులో దేవుడు మనయెడల తన ప్రేమను వ్యక్తపరచుచున్నాడు." — రోమీయులకు 5:8</p>
      </div>
    </div>

    <div class="gp-qa">
      <div class="gp-question"><span class="gp-q-num">Q 6</span> Who is Jesus Christ?</div>
      <div class="gp-answer">
        <p>Jesus is not just a good teacher or a prophet. He is <strong>God who became a man</strong> — born of a virgin, lived a perfect sinless life, and is the only bridge between you and God the Father. No other person in history has made this claim and proved it.</p>
        <blockquote>"Jesus answered, 'I am the way and the truth and the life. No one comes to the Father except through Me.'" <cite>— John 14:6</cite></blockquote>
        <p class="gp-telugu">"యేసు — నేనే మార్గమును సత్యమును జీవమును అయి ఉన్నాను; నా ద్వారా తప్ప ఎవడును తండ్రియొద్దకు రాడు అని చెప్పెను." — యోహాను 14:6</p>
      </div>
    </div>

    <div class="gp-qa">
      <div class="gp-question"><span class="gp-q-num">Q 7</span> Why did Jesus have to die for me?</div>
      <div class="gp-answer">
        <p>Sin demands a penalty — death. Jesus, who had no sin of His own, stepped in and took that penalty in our place. He died on the cross so that we would not have to face God's judgment. It was the greatest act of love in all of human history.</p>
        <blockquote>"Christ died for our sins according to the Scriptures, He was buried, and He was raised on the third day." <cite>— 1 Corinthians 15:3–4</cite></blockquote>
        <p class="gp-telugu">"లేఖనముల ప్రకారము క్రీస్తు మన పాపముల నిమిత్తము మృతిపొందెను; సమాధిచేయబడెను; లేఖనముల ప్రకారము మూడవ దినమున లేపబడెను." — 1 కొరింథీయులకు 15:3-4</p>
      </div>
    </div>

    <div class="gp-qa">
      <div class="gp-question"><span class="gp-q-num">Q 8</span> Did Jesus stay dead?</div>
      <div class="gp-answer">
        <p><strong>No! Jesus rose from the dead on the third day.</strong> This is called the Resurrection — the most important event in all of history. Because He is alive today, He can give us life too. No other religious leader in history has risen from the dead.</p>
        <blockquote>"I am the resurrection and the life. The one who believes in Me will live, even though they die." <cite>— John 11:25</cite></blockquote>
        <p class="gp-telugu">"పునరుత్థానమును జీవమును నేనే; నందు విశ్వాసముంచువాడు చనిపోయినను బ్రదుకును." — యోహాను 11:25</p>
      </div>
    </div>

    <div class="gp-qa gp-qa-highlight">
      <div class="gp-question"><span class="gp-q-num">Q 9</span> So what must I do to be saved?</div>
      <div class="gp-answer">
        <p>This is the most important question of your life — and the answer is beautifully simple:</p>
        <ul class="gp-steps-list">
          <li><strong>Believe</strong> — Trust that Jesus died for your sins and rose again</li>
          <li><strong>Confess</strong> — Admit to God that you are a sinner and need His forgiveness</li>
          <li><strong>Receive</strong> — Accept Jesus as your Lord and Saviour into your heart</li>
        </ul>
        <blockquote>"If you declare with your mouth 'Jesus is Lord,' and believe in your heart that God raised Him from the dead, you will be saved." <cite>— Romans 10:9</cite></blockquote>
        <p class="gp-telugu">"యేసు ప్రభువని నీ నోటితో అంగీకరించి, దేవుడు మృతులలో నుండి ఆయనను లేపెనని నీ హృదయమందు విశ్వసించినయెడల నీవు రక్షింపబడుదువు." — రోమీయులకు 10:9</p>
      </div>
    </div>

    <div class="gp-qa">
      <div class="gp-question"><span class="gp-q-num">Q 10</span> How can I be sure I am really saved?</div>
      <div class="gp-answer">
        <p>Salvation is not a feeling — it is a <strong>promise directly from God.</strong> Once you trust Jesus sincerely, His Word gives you full assurance. You do not need to wonder or doubt. God does not break His promises.</p>
        <blockquote>"I write these things to you who believe in the name of the Son of God so that you may know that you have eternal life." <cite>— 1 John 5:13</cite></blockquote>
        <p class="gp-telugu">"దేవుని కుమారుని నామమున విశ్వాసముంచు మీకు నిత్యజీవముండెనని మీరు తెలిసికొనుటకై ఈ సంగతులు మీకు వ్రాయుచున్నాను." — 1 యోహాను 5:13</p>
      </div>
    </div>

    <div class="gp-prayer-box">
      <div class="gp-prayer-title">🙏 A Simple Prayer to Receive Jesus</div>
      <p class="gp-prayer-note">If you are ready to accept Jesus as your Saviour, you can pray this prayer sincerely from your heart right now. God hears every honest prayer.</p>
      <div class="gp-prayer-text">
        <p>"Lord Jesus, I know I am a sinner. I believe You died for my sins and rose from the dead. Please forgive me of all my sins. I open my heart and receive You as my Lord and Saviour. Thank You for saving me. Help me to live for You from this day forward. Amen."</p>
      </div>
      <p class="gp-prayer-te">ప్రభువైన యేసు క్రీస్తూ, నేను పాపిని అని నాకు తెలుసు. నీవు నా పాపముల కోసం మరణించి మూడవ దినమున లేచితివని నమ్ముచున్నాను. నా పాపములన్నిటిని క్షమించుము. నేను నా హృదయమును తెరచి నిన్ను నా ప్రభువుగా స్వీకరించుచున్నాను. నన్ను రక్షించినందుకు కృతజ్ఞతలు. ఇప్పటి నుండి నీ కొరకు జీవించుటకు సహాయపడుము. ఆమెన్.</p>
    </div>

    <h3>What Do You Do Next?</h3>
    <p>If you prayed that prayer sincerely — <strong>welcome to God's family!</strong> Here are four simple steps to begin your new life:</p>
    <div class="gp-next-steps">
      <div class="gp-step"><span class="gp-step-icon">📖</span><div><strong>Read the Bible</strong><p>Start with the Gospel of John. Read a little every day and let God speak to you.</p></div></div>
      <div class="gp-step"><span class="gp-step-icon">🙏</span><div><strong>Pray Every Day</strong><p>Talk to God morning and night. He is always listening and He loves to hear from you.</p></div></div>
      <div class="gp-step"><span class="gp-step-icon">⛪</span><div><strong>Join a Church</strong><p>Find a Bible-believing church near you and grow together with other believers.</p></div></div>
      <div class="gp-step"><span class="gp-step-icon">💬</span><div><strong>Tell Someone</strong><p>Share what happened to you. Your testimony is powerful and can change lives.</p></div></div>
    </div>

    <div class="gp-closing">
      <p>"Therefore, if anyone is in Christ, the new creation has come: the old has gone, the new is here!"</p>
      <strong>— 2 Corinthians 5:17</strong>
    </div>`
  }

});

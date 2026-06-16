const worshipChorus = [
  'We WOR-ship you in the morning, and AGAIN in the noon day sun;',
  'We WOR-ship you in the evening, once MORE when the day is done.',
];

const lyricSections = [
  {
    lines: [
      'We WOR-ship you, We WOR-ship you; We WOR-ship you Lord Jesus',
      'We WOR-ship you, We WOR-ship you; We WOR-ship you, Our Lord.',
      'We WOR-ship you, We WOR-ship you; by SING-ing songs of Praise;',
      'We WOR-ship you, We WOR-ship you; for ALL our living days.',
    ],
  },
  {
    title: 'Chorus',
    lines: worshipChorus,
  },
  {
    lines: [
      'You ARE the Way, the TRUTH, the LIFE; Your WORD lasts on forever,',
      "Your BOND with us is FORGED in Love; there's NOTHING it can sever.",
      'We WOR-ship you, We WOR-ship you; We WOR-ship you Lord Jesus',
      'We WOR-ship you, We WOR-ship you; We WOR-ship you, Our Lord.',
    ],
  },
  {
    title: 'Chorus',
    lines: worshipChorus,
  },
  {
    lines: [
      'You DIED for us, You DIED for us, you DIED in ag-on-nee (agony)',
      'You DIED for us, You DIED for us; for ALL souls per-son-ly (personally)',
      "You PAID God's price, our DEBT of sin, our SIN-full souls erased;",
      "'Twas GOD's great gift, to ALL mankind His MER-cy, Love, and Grace.",
    ],
  },
  {
    title: 'Chorus',
    lines: worshipChorus,
  },
  {
    lines: [
      'You ROSE again, You ROSE again; To PROVE your SOVereignty,',
      'You LIVE once more, You live once more; For ALL Eternity.',
      "You ROSE again, You ROSE again; so HEAV'N we will receive,",
      'But FIRST we must con-FESS you, Lord; with ALL our hearts believe.',
    ],
  },
  {
    lines: [
      'Be BORN again, Be BORN again, We MUST be born again.',
      'Be LIEVE, receive; Be LIEVE, receive; We MUST be born again.',
      'Be BORN again, Be BORN again, We MUST be born again.',
      'Be LIEVE, receive; Be LIEVE, receive; We MUST be born again.',
    ],
  },
  {
    lines: [
      'Born again Jews and Christians, living in har-mon-nee, (harmony)',
      'Worshipping our Savior Jesus, a forever fam-i-lee (family)',
      'We WOR-ship you in the morning, and AGAIN in the noon day sun;',
      'We worship you every evening, and forever when our life is done.',
    ],
    finale: ['FOR ALL E-TER-NI-TY', 'FOR ALL E-TER-NI-TY'],
  },
];

const prayingLyrics = [
  {
    lines: [
      'Jesus, keep me safe today.',
      'Keep all evil harm away.',
      'Jesus, keep me safe today.',
      'Keep all evil harm away.',
    ],
  },
  {
    lines: [
      'Praying with my eyes wide open.',
      'Praying with my eyes wide open.',
    ],
  },
  {
    lines: [
      'Both eyes searching to and fro;',
      'Scanning for dangers high and low.',
      'Both eyes searching to and fro;',
      'Scanning for dangers high and low.',
    ],
  },
  {
    lines: [
      'Praying with my eyes wide open.',
      'Praying with my eyes wide open.',
    ],
  },
  {
    lines: [
      'O, trouble approaching,',
      'I need some coaching.',
      'Proverbs Twenty-two O three,',
      'Proverbs Twenty-two O three.',
    ],
  },
  {
    lines: [
      'O, trouble approaching,',
      'I need some coaching.',
      'Proverbs Twenty-two O three,',
      'Proverbs Twenty-two O three.',
    ],
  },
  {
    lines: [
      'Praying with my eyes wide open.',
      'Praying with my eyes wide open.',
    ],
  },
  {
    lines: [
      'O, danger\'s increasing, "pray without ceasing."',
      'First Thessalonians five seventeen.',
      'O, danger\'s increasing, "pray without ceasing."',
      'First Thessalonians five seventeen.',
    ],
  },
  {
    lines: [
      'Troubles passed and dangers gone.',
      'Praise the Lord in prayer and song.',
      'Troubles passed and dangers gone.',
      'Praise the Lord in prayer and song.',
    ],
  },
  {
    lines: [
      'Praying with my eyes wide open.',
      'Praying with my eyes wide open.',
      'Praying with my eyes wide open.',
      'Praying with my eyes wide open.',
    ],
  },
];

function SectionHeading({ children }) {
  return (
    <h2 className="mb-10 flex items-center justify-center gap-4 text-center text-[26px] font-bold uppercase tracking-[0.08em] text-[#2b1911] before:h-px before:flex-1 before:bg-[#5c3a26] before:content-[''] after:h-px after:flex-1 after:bg-[#5c3a26] after:content-[''] md:text-[34px]">
      {children}
    </h2>
  );
}

function LyricBlock({ section }) {
  return (
    <section className="pt-5 first:pt-0">
      {section.title && (
        <h3 className="mb-3 text-[17px] font-bold uppercase tracking-[0.12em] text-[#6a2418]">
          {section.title}
        </h3>
      )}
      <div className="space-y-1 text-[18px] leading-relaxed text-[#302018] md:text-[21px]">
        {section.lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      {section.finale && (
        <div className="mt-6 space-y-1 text-[22px] font-bold uppercase tracking-[0.12em] text-[#4b120f] md:text-[28px]">
          {section.finale.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      )}
    </section>
  );
}

export function MediaPage() {
  return (
    <main
      className="min-h-screen bg-[#4b2c20] bg-cover bg-fixed bg-top px-4 py-10 text-[#2c1912] md:px-6 md:py-16"
      style={{ backgroundImage: 'url("images/BG-VERSE.jpg")' }}
    >
      <article className="mx-auto max-w-[980px] px-5 py-8 md:px-12 md:py-12">
        <SectionHeading>Media & Assets</SectionHeading>

        <header className="text-center">
          <p className="text-[14px] font-bold uppercase tracking-[0.16em] text-[#7b2a1a]">Song Lyrics</p>
          <h1 className="mt-2 text-[36px] font-bold uppercase leading-tight tracking-[0.04em] text-[#24130d] md:text-[52px]">
            For All Eternity
          </h1>
          <p className="mt-3 text-[18px] text-[#3a2a1f] md:text-[22px]">By Ronald Lex Stout (2025)</p>
          <p className="mt-2 text-[15px] font-semibold text-[#5d4228] md:text-[18px]">
            Key Bible Verses: Psalms 28:7; 40:3; 69:30 NIV
          </p>
        </header>

        <aside className="mx-auto mt-8 max-w-[820px] px-4 py-5 text-left text-[15px] leading-relaxed text-[#3a2a1f] md:px-6 md:text-[17px]">
          <p>
            The composer gives his permission for SOLOISTS to use the pronouns "I, me, my, mine" etc.; and for GROUPS to use "we, our, ours, and us" substitutions in the lyrics. Cowboy style emphasis on the CAPITALIZED word or partial word.
          </p>
          <p className="mt-3">
            This song has the Gospel of Jesus Christ embedded within the lyrics. Various other Scriptures are reflected such as Psalms 6:1 and 13:6, John 14:6, John 3:3 and others. There is an interesting background story concerning this song's composition, provided upon request. Copyright applied for.
          </p>
        </aside>

        <div className="mx-auto mt-10 grid max-w-[860px] gap-7 text-center">
          {lyricSections.map((section, index) => (
            <LyricBlock key={`${section.title ?? 'verse'}-${index}`} section={section} />
          ))}
        </div>

        <div className="mx-auto my-14 h-px max-w-[760px] bg-[#6d4a31]/55" />

        <header className="text-center">
          <p className="text-[14px] font-bold uppercase tracking-[0.16em] text-[#7b2a1a]">Song Lyrics</p>
          <h1 className="mt-2 text-[32px] font-bold uppercase leading-tight tracking-[0.04em] text-[#24130d] md:text-[48px]">
            Praying With My Eyes Wide Open
          </h1>
          <p className="mx-auto mt-3 max-w-[760px] text-[16px] italic leading-relaxed text-[#3a2a1f] md:text-[20px]">
            A song for pilots, emergency vehicle drivers, truck drivers, and anyone driving the highways at high speeds
          </p>
          <p className="mt-3 text-[18px] text-[#3a2a1f] md:text-[22px]">By Ronald Stout</p>
        </header>

        <div className="mx-auto mt-10 grid max-w-[860px] gap-7 text-center">
          {prayingLyrics.map((section, index) => (
            <LyricBlock key={`praying-${index}`} section={section} />
          ))}
        </div>
      </article>
    </main>
  );
}

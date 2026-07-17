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
    emphasis: true,
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
    emphasis: true,
  },
  {
    lines: [
      'O, trouble approaching,',
      'I need some coaching.',
      'Proverbs Twenty-two O three,',
      'Proverbs Twenty-two O three.',
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
    emphasis: true,
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
    emphasis: true,
  },
];

function Ornament() {
  return (
    <div className="mx-auto my-5 flex max-w-[360px] items-center gap-3 text-[#6b4225]">
      <span className="h-px flex-1 bg-[#6b4225]" />
      <span className="text-[22px] leading-none">&loz;</span>
      <span className="h-px flex-1 bg-[#6b4225]" />
    </div>
  );
}

function MusicMark() {
  return (
    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#8b4d24] text-[34px] leading-none text-[#f7e2c4] shadow-sm md:h-16 md:w-16 md:text-[40px]">
      &#9834;
    </span>
  );
}

function LyricBlock({ section, centered = false }) {
  return (
    <section className={`${centered ? 'text-center' : ''} mt-4 first:mt-0`}>
      {section.title && (
        <h3 className="mb-1 text-[15px] font-bold italic text-[#7b371d] md:text-[16px]">
          {section.title}
        </h3>
      )}
      <div className={`${section.emphasis ? 'font-bold' : ''} space-y-[1px] text-[15px] leading-tight text-[#170d08] md:text-[16px]`}>
        {section.lines.map((line, index) => (
          <p key={`${line}-${index}`}>{line}</p>
        ))}
      </div>
      {section.finale && (
        <div className="mt-7 space-y-1 text-center text-[22px] font-bold uppercase leading-tight tracking-[0.08em] text-[#170d08] md:text-[26px]">
          {section.finale.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      )}
    </section>
  );
}

function DownloadPrompt({ href, fileName }) {
  return (
    <a
      className="mt-8 flex items-center justify-center gap-3 text-[18px] text-[#7b371d] no-underline md:text-[22px]"
      href={href}
      download={fileName}
    >
      <span className="text-[26px] leading-none">&#8681;</span>
      <span className="border-b border-[#7b371d] leading-tight">Download Lyrics (PDF)</span>
    </a>
  );
}

function SongPanel({ children }) {
  return (
    <article
      className="flex h-full flex-col border border-[#6f5237] bg-[#f4e4cc]/72 px-4 py-6 shadow-sm sm:px-6 sm:py-7 md:px-9 md:py-9"
      style={{
        clipPath:
          'polygon(16px 0, calc(100% - 16px) 0, 100% 16px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 16px 100%, 0 calc(100% - 16px), 0 16px)',
      }}
    >
      {children}
    </article>
  );
}

export function MediaPage() {
  return (
    <main className="bg-[#eadfcb] text-[#1b100b]">
      <section
        className="mx-auto max-w-[1440px] bg-[#eadfcb] bg-cover bg-center px-4 py-6 sm:px-5 sm:py-7 md:px-8 md:py-9"
        style={{ backgroundImage: 'url("images/homebg1.png")' }}
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <SongPanel>
            <header className="flex items-start gap-3 sm:gap-5">
              <MusicMark />
              <div>
                <p className="text-[18px] font-bold uppercase leading-none text-[#3a2014]">Song Lyrics</p>
                <h2 className="mt-2 text-[28px] font-bold uppercase leading-none tracking-[0.02em] text-[#2a160f] sm:text-[34px] md:text-[45px]">
                  For All Eternity
                </h2>
                <p className="mt-3 text-[17px] leading-snug">By Ronald Lex Stout (2025)</p>
                <p className="mt-1 text-[16px] leading-snug">Key Bible Verses: Psalms 28:7; 40:3; 69:30 NIV</p>
              </div>
            </header>

            <div className="mt-7 space-y-3 text-[14px] italic leading-tight text-[#170d08] md:text-[15px]">
              <p>
                The composer gives his permission for SOLOISTS to use the pronouns "I, me, my, mine" etc.; and for GROUPS to use "we, our, ours, and us" substitutions in the lyrics. Cowboy style emphasis on the CAPITALIZED word or partial word.
              </p>
              <p>
                This song has the Gospel of Jesus Christ embedded within the lyrics. Various other Scriptures are reflected such as Psalms 6:1 and 13:6, John 14:6, John 3:3 and others. There is an interesting background story concerning this song's composition, provided upon request. Copyright applied for.
              </p>
            </div>

            <Ornament />

            <div className="grow">
              {lyricSections.map((section, index) => (
                <LyricBlock key={`${section.title ?? 'verse'}-${index}`} section={section} />
              ))}
            </div>

            <DownloadPrompt
              href="assets/For%20All%20Eternity_Lyrics.pdf"
              fileName="For All Eternity Lyrics.pdf"
            />
          </SongPanel>

          <SongPanel>
            <header className="flex items-start gap-3 sm:gap-5">
              <MusicMark />
              <div>
                <p className="text-[18px] font-bold uppercase leading-none text-[#3a2014]">Song Lyrics</p>
                <h2 className="mt-2 text-[27px] font-bold uppercase leading-none tracking-[0.02em] text-[#2a160f] sm:text-[33px] md:text-[43px]">
                  Praying With<br />My Eyes Wide Open
                </h2>
              </div>
            </header>

            <p className="mx-auto mt-6 max-w-[520px] text-center text-[16px] italic leading-snug md:text-[18px]">
              A song for pilots, emergency vehicle drivers, truck drivers, and anyone driving the highways at high speeds
            </p>
            <p className="mt-5 text-center text-[18px] leading-snug">By Ronald Stout</p>
            <Ornament />

            <div className="mx-auto w-full max-w-[560px] grow">
              {prayingLyrics.map((section, index) => (
                <LyricBlock key={`praying-${index}`} section={section} />
              ))}
            </div>

            <DownloadPrompt
              href="assets/Praying%20With%20My%20Eyes%20Wide%20Open_Lyrics.pdf"
              fileName="Praying With My Eyes Wide Open Lyrics.pdf"
            />
          </SongPanel>
        </div>
      </section>
    </main>
  );
}

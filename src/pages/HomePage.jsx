import { books } from '../data/books';

function HomeSectionTitle({ children }) {
  return (
    <h2 className="mx-auto flex w-full items-center justify-center gap-[1.6vw] text-center text-[clamp(27px,2.85vw,45px)] font-bold uppercase tracking-[0.08em] text-[#2f1b14] before:h-px before:flex-1 before:bg-[#6d4a31] before:content-[''] after:h-px after:flex-1 after:bg-[#6d4a31] after:content-['']">
      {children}
    </h2>
  );
}

function MobileHomeSectionTitle({ children }) {
  return (
    <h2 className="flex items-center justify-center gap-3 text-center text-[24px] font-bold uppercase tracking-[0.08em] text-[#2f1b14] before:h-px before:flex-1 before:bg-[#6d4a31] before:content-[''] after:h-px after:flex-1 after:bg-[#6d4a31] after:content-['']">
      {children}
    </h2>
  );
}

function CompactBookCard({ book }) {
  return (
    <article className="grid min-h-[clamp(120px,9.5vw,160px)] grid-cols-[clamp(72px,6.3vw,94px)_minmax(0,1fr)] gap-[1.4vw] border border-[#5a3927] bg-[#d9b69e]/22 px-[1.2vw] py-[0.9vw] text-left shadow-sm">
      <img className="h-[clamp(94px,7.6vw,126px)] w-[clamp(60px,4.9vw,78px)] justify-self-center object-cover shadow-sm" src={book.img} alt={book.alt} />
      <div className="min-w-0 self-center text-center">
        <h3 className="text-[clamp(18px,1.58vw,24px)] font-bold uppercase leading-tight text-[#2c1912]">{book.title}</h3>
        <p className="mx-auto mt-1 max-w-[360px] text-[clamp(15px,1.22vw,20px)] leading-snug text-[#2c1912]">{book.text}</p>
        <a className="mt-[0.7vw] inline-block bg-[#52341f] px-[1vw] py-[0.35vw] text-[clamp(18px,1.44vw,22px)] font-semibold text-[#f1d1a7] no-underline" href={book.url} target="_blank" rel="noopener noreferrer">
          Amazon
        </a>
      </div>
    </article>
  );
}

function MobileBookCard({ book }) {
  return (
    <article className="grid grid-cols-[92px_minmax(0,1fr)] gap-4 border border-[#5a3927] bg-[#ead0bb]/70 p-4 text-left shadow-sm">
      <img className="h-[132px] w-[84px] object-cover shadow-sm" src={book.img} alt={book.alt} />
      <div className="min-w-0 self-center">
        <h3 className="text-[18px] font-bold uppercase leading-tight text-[#2c1912]">{book.title}</h3>
        <p className="mt-2 text-[14px] leading-snug text-[#2c1912]">{book.text}</p>
        <a className="mt-3 inline-block bg-[#52341f] px-4 py-2 text-[12px] font-semibold text-[#f1d1a7] no-underline" href={book.url} target="_blank" rel="noopener noreferrer">
          Amazon
        </a>
      </div>
    </article>
  );
}

export function HomePage() {
  return (
    <main className="overflow-x-hidden bg-[#2b1715] text-[#2c1912]">
      <div
        className="bg-[#c99c80] bg-cover bg-top bg-no-repeat md:hidden"
        style={{ backgroundImage: 'url("images/hero-bg.png")' }}
      >
        <section className="min-h-[520px] px-6 pt-[120px]">
          <div className="ml-auto max-w-[235px] bg-[#ead0bb]/45 p-3 text-left">
            <h1 className="text-[32px] font-normal leading-tight text-[#2c1912]">
              Ronald Lex &ldquo;Ronny&rdquo; Stout
            </h1>
            <p className="mt-3 text-[15px] leading-relaxed">
              Stories shaped by faith, forged through perseverance, and written to leave something lasting behind.
            </p>
          </div>
        </section>

        <section className="px-6 py-10 text-center">
          <div className="bg-[#ead0bb]/72 px-4 py-6">
            <MobileHomeSectionTitle>About the Author</MobileHomeSectionTitle>
            <div className="mx-auto mt-6 max-w-[340px] text-[16px] leading-relaxed">
              <p>
                If my grandmother would have had her way, I would have been Alexander Miller Stout V. My father, at IV, got so sick of the one bank in town, Glendale, California putting Dad's paychecks into HIS father's account that he went to Court and legally changed his official name to Lex Miller Stout.
              </p>
              <p className="mt-3">
                My father, at IV, got so sick of the one bank in town, Glendale, California...
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-10 text-center">
          <div className="bg-[#ead0bb]/76 px-4 py-6">
            <MobileHomeSectionTitle>Books & Writing</MobileHomeSectionTitle>
            <div className="mt-6 grid grid-cols-1 gap-4">
              {books.map((book) => (
                <MobileBookCard key={book.title} book={book} />
              ))}
            </div>
            <a className="mt-6 inline-block bg-[#52341f] px-4 py-2 text-[12px] font-semibold text-[#f1d1a7] no-underline" href="#/books">
              More Books
            </a>
          </div>
        </section>

        <section className="px-6 py-10 text-center">
          <div className="bg-[#ead0bb]/76 px-4 py-6">
            <MobileHomeSectionTitle>Media & Assets</MobileHomeSectionTitle>
            <div className="mx-auto mt-6 max-w-[340px] text-[16px] leading-relaxed">
              <p>
                For All Eternity<br />
                By Ronald Lex Stout 2025
              </p>
              <p className="mt-3">
                Key Bible Verses: Psalms 28:7; 40:3; 69:30 NIV
              </p>
              <p className="mt-3">
                The composer gives permission for soloists and groups to adapt pronouns in performance.
              </p>
              <p className="mt-3">
                This song has the Gospel of Jesus Christ embedded within the lyrics. Copyright applied for.
              </p>
            </div>
            <a className="mt-6 inline-block bg-[#52341f] px-4 py-2 text-[12px] font-semibold text-[#f1d1a7] no-underline" href="#/media">
              Media & Assets
            </a>
          </div>
        </section>

        <p className="px-6 pb-8 text-center text-[12px] text-[#f2d8bc]">
          &copy; 2026 Ron Stout. All Rights Reserved
        </p>
      </div>

      <div
        className="relative hidden aspect-[1366/2852] w-full bg-[#c99c80] bg-[length:100%_100%] bg-top bg-no-repeat md:block"
        style={{ backgroundImage: 'url("images/hero-bg.png")' }}
      >
        <section className="absolute left-[45.5%] top-[14%] w-[34%] text-left">
          <h1 className="text-[clamp(36px,3.83vw,60px)] font-normal leading-tight tracking-[0.02em] text-[#2c1912]">
            Ronald Lex &ldquo;Ronny&rdquo; Stout
          </h1>
          <p className="mt-[0.7vw] text-[clamp(20px,1.82vw,28px)] leading-relaxed">
            Stories shaped by faith, forged through perseverance, and written to leave something lasting behind
            <br />
            - for readers who believe courage, character, and conviction still matter.
          </p>
        </section>

        <section className="absolute left-1/2 top-[30%] w-[48%] -translate-x-1/2 text-center">
          <HomeSectionTitle>About the Author</HomeSectionTitle>
        </section>
        <section className="absolute left-1/2 top-[32%] w-[45%] -translate-x-1/2 text-center text-[clamp(22px,2.04vw,32px)] leading-relaxed">
          <p>
            If my grandmother would have had her way, I would have been Alexander Miller Stout V. My father, at IV, got so sick of the one bank in town, Glendale, California putting Dad's paychecks into HIS father's account that he went to Court and legally changed his official name to Lex Miller Stout.
          </p>
          <p className="mt-[0.7vw]">
            My father, at IV, got so sick of the one bank in town, Glendale, California...
          </p>
        </section>

        <section className="absolute left-1/2 top-[47.4%] w-[82%] -translate-x-1/2 text-center">
          <HomeSectionTitle>Books & Writing</HomeSectionTitle>
          <div className="mx-auto mt-[2.5vw] grid w-[74vw] max-w-[980px] grid-cols-2 gap-[1.3vw]">
          {books.map((book) => (
            <CompactBookCard key={book.title} book={book} />
          ))}
          </div>
          <a className="mt-[2vw] inline-block bg-[#52341f] px-[1vw] py-[0.35vw] text-[clamp(18px,1.44vw,22px)] font-semibold text-[#f1d1a7] no-underline" href="#/books">
          More Books
          </a>
        </section>

        <section className="absolute left-1/2 top-[72%] w-[58%] -translate-x-1/2 text-center">
          <HomeSectionTitle>Media & Assets</HomeSectionTitle>
          <div className="mx-auto mt-[2.5vw] w-[50vw] max-w-[760px] text-[clamp(18px,1.55vw,26px)] leading-relaxed">
          <p>
            For All Eternity<br />
            By Ronald Lex Stout 2025<br />
            For All Eternity<br />
            By Ronald Lex Stout 2025
          </p>
          <p className="mt-[0.7vw]">
            Key Bible Verses: Psalms 28:7; 40:3; 69:30 NIV
          </p>
          <p className="mt-[0.7vw]">
            The composer gives his permission for SOLOISTS to use the pronouns &ldquo;I, me, my, mine&rdquo;, etc., and for GROUPS to use &ldquo;we, our, ours, and us&rdquo; substitutions in the lyrics.
          </p>
          <p className="mt-[0.7vw]">
            This song has the Gospel of Jesus Christ embedded within the lyrics. Various other Scriptures are reflected such as the Psalms 6:1 and 13:6, John 3:3 and others. There is an interesting background story concerning this song's composition, provided upon request. Copyright applied for.
          </p>
          </div>
          <a className="mt-[1.7vw] inline-block bg-[#52341f] px-[1vw] py-[0.35vw] text-[clamp(18px,1.44vw,22px)] font-semibold text-[#f1d1a7] no-underline" href="#/media">
          Media & Assets
          </a>
        </section>

        <p className="absolute bottom-[1.6%] left-1/2 -translate-x-1/2 text-center text-[clamp(16px,1.3vw,20px)] text-[#f2d8bc]">
          &copy; 2026 Ron Stout. All Rights Reserved
        </p>
      </div>
    </main>
  );
}

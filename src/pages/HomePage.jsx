import { books } from '../data/books';

function HomeSectionTitle({ children, light = false }) {
  return (
    <h2 className={`mx-auto flex w-full items-center justify-center gap-4 text-center text-[28px] font-bold uppercase tracking-[0.08em] before:h-px before:flex-1 before:content-[''] after:h-px after:flex-1 after:content-[''] md:text-[38px] ${light ? 'text-[#f5dcc0] before:bg-[#b98a55] after:bg-[#b98a55]' : 'text-[#2f1b14] before:bg-[#6d4a31] after:bg-[#6d4a31]'}`}>
      {children}
    </h2>
  );
}

function TextButton({ href, children }) {
  return (
    <a className="inline-flex min-h-10 items-center justify-center bg-[#4b2a19] px-6 py-2 text-[14px] font-bold uppercase tracking-[0.08em] text-[#f2d7b5] no-underline shadow-sm" href={href}>
      {children}
    </a>
  );
}

function HomeBookCard({ book }) {
  return (
    <article className="grid min-h-[360px] grid-rows-[160px_auto_1fr_auto] border border-[#6a4a34] bg-[#d4aa8c]/30 px-5 py-5 text-center shadow-sm">
      <img className="h-[150px] w-[96px] justify-self-center object-cover shadow-md" src={book.img} alt={book.alt} />
      <h3 className="mt-3 text-[22px] font-bold uppercase leading-tight text-[#2b1811]">{book.title}</h3>
      <p className="mt-2 text-[16px] leading-snug text-[#2b1811]">{book.text}</p>
      <a className="mt-4 inline-flex min-h-9 items-center justify-center justify-self-center bg-[#4b2a19] px-5 py-2 text-[14px] font-semibold text-[#f2d7b5] no-underline" href={book.url} target="_blank" rel="noopener noreferrer">
        Amazon
      </a>
    </article>
  );
}

function MediaTile({ title, subtitle, image }) {
  return (
    <article className="grid min-h-[300px] grid-rows-[1fr_auto] overflow-hidden border border-[#8c693f] bg-[#2e1b12] text-center text-[#f6e2c5] shadow-sm">
      <div
        className="flex min-h-[190px] items-end justify-center bg-cover bg-center px-5 py-6"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(30,16,8,.08), rgba(30,16,8,.78)), url("${image}")`,
        }}
      >
        <h3 className="text-[24px] font-bold uppercase leading-tight tracking-[0.06em] [text-shadow:0_2px_4px_rgba(0,0,0,.45)]">
          {title}
        </h3>
      </div>
      <div className="px-5 py-5">
        <p className="text-[17px] leading-snug">{subtitle}</p>
        <div className="mt-4">
          <TextButton href="#/media">Read More</TextButton>
        </div>
      </div>
    </article>
  );
}

export function HomePage() {
  return (
    <main className="overflow-x-hidden bg-[#2b1715] text-[#2c1912]">
      <section className="border-b border-[#b98a55] bg-[#ead8c3] px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-[1180px] gap-9 md:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)] md:items-center">
          <div className="text-center md:text-left">
            <HomeSectionTitle>About the Author</HomeSectionTitle>
            <div className="mx-auto mt-7 max-w-[520px] text-[19px] leading-relaxed md:mx-0">
              <p>
                If my grandmother would have had her way, I would have been Alexander Miller Stout V. My father, at IV, got so sick of the one bank in town, Glendale, California putting Dad's paychecks into HIS father's account that he went to Court and legally changed his official name to Lex Miller Stout.
              </p>
            </div>
            <div className="mt-7">
              <TextButton href="#/about">Read More</TextButton>
            </div>
          </div>

          <figure className="border border-[#6a4a34] bg-[#f4ecde] p-1 shadow-lg">
            <img className="h-full max-h-[330px] w-full object-cover" src="images/books-bg.png" alt="Books, ink, and writing materials" />
          </figure>
        </div>
      </section>

      <section className="border-b border-[#c6aa7a]/40 bg-[#8c6249] px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-[1180px]">
          <HomeSectionTitle>Books & Writing</HomeSectionTitle>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {books.map((book) => (
              <HomeBookCard key={book.title} book={book} />
            ))}
          </div>
          <div className="mt-7 text-center">
            <TextButton href="#/books">More Books</TextButton>
          </div>
        </div>
      </section>

      <section className="bg-[#21130d] px-5 py-12 text-[#f6e2c5] md:px-8 md:py-16">
        <div className="mx-auto max-w-[1180px]">
          <HomeSectionTitle light>Media & Assets</HomeSectionTitle>
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(280px,1.25fr)]">
            <MediaTile
              title="For All Eternity"
              subtitle="By Ronald Lex Stout 2025"
              image="images/hero-bg-new.jpg"
            />
            <MediaTile
              title="Praying With My Eyes Wide Open"
              subtitle="By Ronald Lex Stout 2025"
              image="images/media-bg.png"
            />
            <aside className="border border-[#8c693f] px-7 py-7 text-left">
              <p className="text-center text-[18px] leading-snug">
                <strong className="block font-bold">Key Bible Verses:</strong>
                Psalms 28:7; 40:3; 69:30 NIV
              </p>
              <div className="my-6 h-px bg-[#8c693f]" />
              <p className="text-[16px] leading-relaxed">
                The composer gives his permission for SOLOISTS to use the pronouns "I, me, my, mine" etc., and for GROUPS to use "we, our, ours, and us" substitutions in the lyrics.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed">
                This song has the Gospel of Jesus Christ embedded within the lyrics. Various other Scriptures are reflected such as the Psalms 6:1 and 13:6, John 3:3 and others. There is an interesting background story concerning this song's composition, provided upon request. Copyright applied for.
              </p>
              <div className="mt-6 text-center">
                <TextButton href="#/media">Read More</TextButton>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <p className="bg-[#21130d] px-6 pb-8 text-center text-[12px] uppercase tracking-[0.08em] text-[#f2d8bc]">
        &copy; 2026 Ron Stout. All Rights Reserved
      </p>
    </main>
  );
}

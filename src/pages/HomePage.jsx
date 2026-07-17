import { books } from '../data/books';

function HomeSectionTitle({ children, light = false }) {
  return (
    <h2 className={`mx-auto flex w-full items-center justify-center gap-3 text-center text-[24px] font-bold uppercase leading-none tracking-normal md:gap-4 md:text-[38px] ${light ? 'text-[#ead0ad] before:bg-[#8a633c] after:bg-[#8a633c] [text-shadow:0_1px_1px_rgba(0,0,0,.55)]' : 'text-[#2f1b14] before:bg-[#6d4a31] after:bg-[#6d4a31]'} before:h-px before:flex-1 before:content-[''] after:h-px after:flex-1 after:content-['']`}>
      {children}
    </h2>
  );
}

function TextButton({ href, children }) {
  return (
    <a className="inline-flex min-h-10 items-center justify-center bg-[#4b2a19] px-6 py-2 text-[16px] font-bold text-[#f2d7b5] no-underline shadow-sm" href={href}>
      {children}
    </a>
  );
}

function HomeBookCard({ book }) {
  return (
    <article className="flex h-full min-h-[360px] flex-col border border-[#6a4a34]/70 bg-[#d4aa8c]/36 px-5 py-5 text-center shadow-sm">
      <img className="h-[158px] w-[104px] justify-self-center object-cover shadow-md self-center" src={book.img} alt={book.alt} />
      <h3 className="mt-4 text-[22px] font-bold uppercase leading-tight text-[#2b1811]">{book.title}</h3>
      <p className="mt-2 flex-1 text-[16px] leading-snug text-[#2b1811]">{book.text}</p>
      <a className="mt-4 inline-flex min-h-9 items-center justify-center self-center bg-[#4b2a19] px-5 py-2 text-[16px] font-semibold text-[#f2d7b5] no-underline" href={book.url} target="_blank" rel="noopener noreferrer">
        Amazon
      </a>
    </article>
  );
}

function MediaTile({ title, subtitle, image }) {
  return (
    <article className="flex h-full flex-col border border-[#8c693f] bg-[#2d1a12]/68 px-4 py-4 text-center text-[#f6e2c5] shadow-sm">
      <div className="grid aspect-[4/3] w-full place-items-center overflow-hidden bg-[#1e1008]/25">
        <img
          className="block max-h-full max-w-full object-contain"
          src={image}
          alt={`${title} song art`}
        />
      </div>
      <h3 className="mx-auto mt-4 flex min-h-[64px] max-w-[300px] items-center justify-center text-[25px] font-bold leading-tight tracking-normal [text-shadow:0_2px_4px_rgba(0,0,0,.5)]">
        {title}
      </h3>
      <p className="mt-1 flex min-h-[54px] items-start justify-center text-[20px] leading-snug">{subtitle}</p>
      <div className="mt-auto pt-4">
        <TextButton href="#/media">Read More</TextButton>
      </div>
    </article>
  );
}

export function HomePage() {
  return (
    <main className="overflow-x-hidden bg-[#eadfcb] text-[#2c1912]">
      <section className="bg-[#eadfcb]">
        <div
          className="mx-auto max-w-[1440px] border-b border-[#8d6745] bg-[#eadfcb] bg-cover bg-center px-4 py-8 md:px-8 md:py-10"
          style={{
            backgroundImage: 'url("images/homebg1.png")',
          }}
        >
          <div className="mx-auto grid max-w-[1160px] items-center gap-7 md:grid-cols-[minmax(0,.78fr)_minmax(0,1.22fr)] md:gap-9">
            <div className="text-center">
              <HomeSectionTitle>About the Author</HomeSectionTitle>
              <div className="mx-auto mt-6 max-w-[440px] text-left text-[17px] leading-snug md:mt-7 md:text-[19px]">
                <p>
                  If my grandmother would have had her way, I would have been Alexander Miller Stout V. My father, at IV, got so sick of the one bank in town, Glendale, California putting Dad's paychecks into HIS father's account that he went to Court and legally changed his official name to Lex Miller Stout.
                </p>
              </div>
              <div className="mt-6">
                <TextButton href="#/about">Read More</TextButton>
              </div>
            </div>

            <figure className="border border-[#6a4a34] bg-[#eadfcb]/55 p-1 shadow-lg">
              <img className="h-[260px] w-full object-cover object-right md:h-[300px]" src="images/books-bg.png" alt="Books, ink, and writing materials" />
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-[#eadfcb]">
        <div
          className="mx-auto max-w-[1440px] border-b border-[#c6aa7a]/35 bg-[#8c6249] bg-cover bg-center px-4 py-8 md:px-8 md:py-10"
          style={{
            backgroundImage: 'url("images/hombg2.png")',
          }}
        >
          <div className="mx-auto max-w-[1160px]">
            <HomeSectionTitle light>Books & Writing</HomeSectionTitle>
            <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {books.map((book) => (
                <HomeBookCard key={book.title} book={book} />
              ))}
            </div>
            <div className="mt-7 text-center">
              <TextButton href="#/books">More Books</TextButton>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eadfcb]">
        <div
          className="mx-auto max-w-[1440px] bg-[#21130d] bg-cover bg-center px-4 py-8 text-[#f6e2c5] md:px-8 md:py-10"
          style={{
            backgroundImage: 'url("images/homebg3.png")',
          }}
        >
          <div className="mx-auto max-w-[1160px]">
            <HomeSectionTitle light>Media & Assets</HomeSectionTitle>
            <div className="mt-7 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(300px,1.35fr)]">
              <MediaTile
                title="For All Eternity"
                subtitle="By Ronald Lex Stout 2025"
                image="images/etternity.png"
              />
              <MediaTile
                title="Praying With My Eyes Wide Open"
                subtitle="By Ronald Lex Stout 2025"
                image="images/praying.png"
              />
              <aside className="border border-[#8c693f] bg-[#2d1a12]/54 px-5 py-6 text-left md:px-7">
                <p className="text-center text-[18px] leading-snug md:text-[20px]">
                  <strong className="block font-bold">Key Bible Verses:</strong>
                  Psalms 28:7; 40:3; 69:30 NIV
                </p>
                <div className="my-6 h-px bg-[#8c693f]" />
                <p className="text-[16px] leading-snug md:text-[17px]">
                  The composer gives his permission for SOLOISTS to use the pronouns "I, me, my, mine" etc., and for GROUPS to use "we, our, ours, and us" substitutions in the lyrics.
                </p>
                <p className="mt-4 text-[16px] leading-snug md:text-[17px]">
                  This song has the Gospel of Jesus Christ embedded within the lyrics. Various other Scriptures are reflected such as the Psalms 6:1 and 13:6, John 3:3 and others. There is an interesting background story concerning this song's composition, provided upon request. Copyright applied for.
                </p>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

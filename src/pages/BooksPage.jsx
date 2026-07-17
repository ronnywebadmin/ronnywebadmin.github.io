import { books, comingBooks, otherBooks, sportsBooks } from '../data/books';

const comingDetails = {
  Splash: 'A story of courage, friendship, and finding your way in the deep end.',
  Penelope: 'A journey of faith, identity, and discovering your true purpose.',
  "Stout's Cider Mill": "The Life and Times of Stout's Cider Mill of Macks Creek.",
};

function SectionRule({ children }) {
  return (
    <h2 className="my-7 flex items-center justify-center gap-3 text-center text-[21px] uppercase leading-tight tracking-[0.04em] text-[#2d1a12] before:h-px before:flex-1 before:bg-[#8b6a3d] before:content-[''] after:h-px after:flex-1 after:bg-[#8b6a3d] after:content-[''] md:gap-4 md:text-[34px] md:leading-none md:tracking-[0.08em]">
      {children}
    </h2>
  );
}

function BookButton({ href, children }) {
  if (!href) {
    return (
      <span className="mt-auto inline-flex min-w-[104px] items-center justify-center bg-[#4a2110] px-4 py-2 text-center text-[13px] font-semibold text-[#f6dfbd] shadow-[2px_2px_0_rgba(255,255,255,.65)] md:min-w-[112px]">
        {children}
      </span>
    );
  }

  return (
    <a
      className="mt-auto inline-flex min-w-[104px] items-center justify-center bg-[#4a2110] px-4 py-2 text-center text-[13px] font-semibold text-[#f6dfbd] no-underline shadow-[2px_2px_0_rgba(255,255,255,.65)] md:min-w-[112px]"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

function MockBookCard({ book, coming = false }) {
  return (
    <article className="grid min-h-[260px] grid-cols-[96px_minmax(0,1fr)] gap-4 border border-[#8f765f] bg-[#f5e8d5]/82 p-4 text-left shadow-sm sm:min-h-[300px] sm:grid-cols-[120px_minmax(0,1fr)] sm:gap-5 sm:p-5">
      <img
        className="h-[150px] w-[96px] self-start border border-[#c9b18a] object-cover shadow-[0_4px_7px_rgba(45,26,18,.35)] sm:h-[190px] sm:w-[120px]"
        src={book.img}
        alt={book.alt}
      />
      <div className="flex min-w-0 flex-col items-start">
        <h3 className="text-[18px] font-bold uppercase leading-tight text-[#24130d] md:text-[21px]">
          {book.title}
        </h3>
        {coming && (
          <p className="mt-1 text-[14px] font-bold uppercase tracking-[0.08em] text-[#4b2115]">Coming Soon</p>
        )}
        <p className="mt-3 text-[15px] leading-snug text-[#24130d] md:text-[16px] md:leading-relaxed">
          {coming ? comingDetails[book.title] : book.text}
        </p>
        <BookButton href={coming ? null : book.url}>{coming ? 'Learn More' : 'View on Amazon'}</BookButton>
      </div>
    </article>
  );
}

function OrderCopiesPanel() {
  return (
    <section className="relative mt-8 overflow-hidden border border-[#c99446] bg-[#24140d] px-6 py-6 text-[#f7dfba] shadow-[0_0_0_4px_#3f2718_inset] md:px-9 md:py-7">
      <span className="absolute left-3 top-3 h-9 w-9 border-l-2 border-t-2 border-[#d7aa59]" aria-hidden="true" />
      <span className="absolute right-3 top-3 h-9 w-9 border-r-2 border-t-2 border-[#d7aa59]" aria-hidden="true" />
      <span className="absolute bottom-3 left-3 h-9 w-9 border-b-2 border-l-2 border-[#d7aa59]" aria-hidden="true" />
      <span className="absolute bottom-3 right-3 h-9 w-9 border-b-2 border-r-2 border-[#d7aa59]" aria-hidden="true" />

      <div className="relative grid gap-7 lg:grid-cols-[230px_minmax(0,1fr)_1px_520px] lg:items-center">
        <div className="flex justify-center lg:justify-start">
          <img
            className="h-[190px] w-[190px] object-contain md:h-[215px] md:w-[215px]"
            src="images/booksicon.png"
            alt="Stack of books with hat"
          />
        </div>

        <div className="text-center lg:text-left">
          <h2 className="text-[25px] font-bold uppercase leading-snug tracking-[0.08em] text-[#e2b86c] md:text-[33px] lg:max-w-[540px]">
            Would You Like to Order Copies of Ronny's Books?
          </h2>
          <p className="mt-5 max-w-[590px] text-[18px] leading-relaxed text-[#fff0d3] lg:text-[19px]">
            Ronny's books are available on Amazon and other online retailers. If you would like to order signed copies or have questions about bulk orders for events, churches, or book clubs, Ronny would love to hear from you!
          </p>
        </div>

        <span className="hidden h-[220px] bg-[#c99446] lg:block" aria-hidden="true" />

        <div className="text-center lg:pl-10">
          <div className="mx-auto grid max-w-[470px] gap-4 sm:grid-cols-[145px_minmax(0,1fr)] sm:items-center">
            <div className="mx-auto flex h-[145px] w-[145px] items-center justify-center">
              <img
                className="h-[135px] w-[135px] object-contain"
                src="images/golden_pen_and_ink_icon_transparent.png"
                alt=""
                aria-hidden="true"
              />
            </div>
            <div>
              <h3 className="text-[27px] font-bold uppercase leading-tight tracking-[0.06em] text-[#e2b86c] md:text-[30px]">Get in Touch</h3>
              <p className="mt-3 max-w-[370px] text-[18px] leading-relaxed text-[#fff0d3] lg:text-[19px]">
                For signed copies, bulk orders, or special requests, contact Ronny directly.
              </p>
            </div>
          </div>
          <a
            className="mt-7 inline-flex w-full max-w-[260px] items-center justify-center border border-[#f0c76a] bg-gradient-to-b from-[#e3bd67] to-[#b9852d] px-7 py-3 text-[18px] uppercase tracking-[0.04em] text-[#3a160f] no-underline shadow-[0_2px_0_rgba(0,0,0,.35)] sm:min-w-[260px] sm:text-[19px]"
            href="#/contact"
          >
            Contact Ronny
          </a>
          <p className="mt-6 text-center text-[19px] italic text-[#f0c76a] md:text-[22px]">
            He looks forward to sharing his stories with you!
          </p>
        </div>
      </div>
    </section>
  );
}

export function BooksPage() {
  const secondSectionBooks = [...sportsBooks, ...otherBooks];

  return (
    <main className="bg-[#eadfcb] text-[#2c1912]">
      <div
        className="mx-auto max-w-[1440px] px-4 pb-10 pt-7 sm:px-6 md:px-10"
        style={{
          backgroundColor: '#eadfcb',
          backgroundImage: 'linear-gradient(rgba(245,232,213,.88), rgba(245,232,213,.88)), url("images/homebg1.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <SectionRule>Books</SectionRule>
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
          {books.map((book) => (
            <MockBookCard key={book.title} book={book} />
          ))}
        </div>

        <SectionRule>Young Christian Women in Sports (2 Book Series)</SectionRule>
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
          {secondSectionBooks.map((book) => (
            <MockBookCard key={book.title} book={book} />
          ))}
        </div>

        <div className="mx-auto mt-4 grid max-w-[1140px] gap-4 lg:grid-cols-3">
          {comingBooks.map((book) => (
            <MockBookCard key={book.title} book={book} coming />
          ))}
        </div>

        <OrderCopiesPanel />
      </div>
    </main>
  );
}

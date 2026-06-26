import { BookCard } from '../components/BookCard';
import { books, comingBooks, otherBooks, sportsBooks } from '../data/books';

const goldTextOutline = {
  WebkitTextStroke: '0.18px rgba(215,161,58,.65)',
  textShadow: '0 0 1px rgba(242,210,138,.45), 0 1px 2px rgba(61,35,18,.22)',
};

function PageTitle({ children }) {
  return (
    <h1
      className="flex items-center justify-center gap-4 text-center text-[30px] font-bold uppercase tracking-[0.08em] text-[#281711] before:h-px before:flex-1 before:bg-[#d7a13a] before:content-[''] after:h-px after:flex-1 after:bg-[#d7a13a] after:content-[''] md:text-[40px]"
      style={goldTextOutline}
    >
      {children}
    </h1>
  );
}

function BookSection({ title, subtitle, books: sectionBooks, coming = false }) {
  return (
    <section className="mt-12">
      <div className="mb-6 flex flex-col gap-2 border-b border-[#b99666] pb-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-[24px] font-bold uppercase leading-tight tracking-[0.04em] text-[#281711]" style={goldTextOutline}>{title}</h2>
          {subtitle && <p className="mt-1 max-w-[620px] text-[15px] font-semibold leading-snug text-[#5b3f2a]">{subtitle}</p>}
        </div>
        <span className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#7b2a1a]">{sectionBooks.length} {sectionBooks.length === 1 ? 'Title' : 'Titles'}</span>
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {sectionBooks.map((book) => (
          <BookCard key={book.title} book={book} coming={coming} />
        ))}
      </div>
    </section>
  );
}

export function BooksPage() {
  return (
    <main
      className="min-h-screen bg-[#4b2c20] bg-cover bg-fixed bg-top px-4 py-10 md:px-6 md:py-14"
      style={{ backgroundImage: 'url("images/BG-VERSE.jpg")' }}
    >
      <div className="mx-auto max-w-[1100px] px-5 py-8 md:px-10 md:py-10">
        <PageTitle>Books & Writing</PageTitle>

        <BookSection
          title="Featured Titles"
          subtitle="Stories of perseverance, faith, competition, history, loss, and love."
          books={books}
        />

        <BookSection
          title="Young Christian Women in Sports"
          subtitle="A two-book sports series centered on grit, teamwork, and conviction."
          books={sportsBooks}
        />

        <BookSection
          title="Faith & Ministry"
          subtitle="Christian reflections, devotional writing, and practical ministry wisdom."
          books={otherBooks}
        />

        <BookSection
          title="Coming Soon"
          subtitle="Upcoming works currently in development."
          books={comingBooks}
          coming
        />
      </div>
    </main>
  );
}

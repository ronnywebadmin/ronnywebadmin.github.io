import { BookCard } from '../components/BookCard';
import { books, comingBooks, otherBooks, sportsBooks } from '../data/books';

export function BooksPage() {
  return (
    <main
      className="min-h-screen bg-cover bg-top px-6 py-12"
      style={{ backgroundImage: 'url("images/hero-bg2.jpg")' }}
    >
      <section>
        <h2 className="mb-10 flex items-center justify-center gap-4 text-center text-[30px] tracking-[2px] before:h-px before:flex-1 before:bg-[#5c3a26] before:content-[''] after:h-px after:flex-1 after:bg-[#5c3a26] after:content-['']">BOOKS & WRITING</h2>
        <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-6 md:grid-cols-2">
          {books.map((book) => <BookCard key={book.title} book={book} />)}
        </div>
      </section>

      <h2 className="my-10 flex items-center justify-center gap-4 text-center text-[30px] tracking-[2px] before:h-px before:flex-1 before:bg-[#5c3a26] before:content-[''] after:h-px after:flex-1 after:bg-[#5c3a26] after:content-['']">YOUNG CHRISTIAN WOMEN IN SPORTS (2 BOOK SERIES)</h2>
      <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-6 md:grid-cols-2">
        {sportsBooks.map((book) => <BookCard key={book.title} book={book} />)}
      </div>

      <div className="mx-auto mt-10 grid max-w-[800px] grid-cols-1 gap-6 md:grid-cols-2">
        {otherBooks.map((book) => <BookCard key={book.title} book={book} />)}
      </div>

      <div className="mx-auto mt-10 grid max-w-[800px] grid-cols-1 gap-6 md:grid-cols-2">
        {comingBooks.map((book) => <BookCard key={book.title} book={book} coming />)}
      </div>
    </main>
  );
}

import { useCallback, useEffect, useRef, useState } from 'react';
import { books, comingBooks, otherBooks, sportsBooks } from '../data/books';

function SectionRule({ children }) {
  return (
    <h2 className="my-7 flex items-center justify-center gap-3 text-center text-[21px] uppercase leading-tight tracking-[0.04em] text-[#2d1a12] before:h-px before:flex-1 before:bg-[#8b6a3d] before:content-[''] after:h-px after:flex-1 after:bg-[#8b6a3d] after:content-[''] md:gap-4 md:text-[34px] md:leading-none md:tracking-[0.08em]">
      {children}
    </h2>
  );
}

function getBookPreview(description) {
  const sentences = description.match(/[^.!?]+(?:[.!?]+[”"']?|$)/g)?.map((sentence) => sentence.trim()).filter(Boolean) || [description];
  const primarySentences = [sentences[0]];
  let primaryLength = sentences[0]?.length || 0;
  let nextSentenceIndex = 1;

  while (nextSentenceIndex < sentences.length - 1 && primaryLength < 70) {
    const nextSentence = sentences[nextSentenceIndex];

    if (primaryLength >= 50 && nextSentence.length > 105) break;

    primarySentences.push(nextSentence);
    primaryLength += nextSentence.length + 1;
    nextSentenceIndex += 1;
  }

  return {
    primaryText: primarySentences.join(' '),
    trailingSentence: sentences[nextSentenceIndex] || '',
  };
}

function BookPreview({ description }) {
  const { primaryText, trailingSentence } = getBookPreview(description);
  const fadingWords = trailingSentence.split(/\s+/).filter(Boolean).slice(0, 18);

  return (
    <div className="mt-3 h-[132px] overflow-hidden text-[15px] leading-snug text-[#24130d] md:text-[16px] md:leading-relaxed">
      <p
        style={{
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 3,
          overflow: 'hidden',
        }}
      >
        {primaryText}
      </p>
      {fadingWords.length > 0 && (
        <p
          className="mt-1.5"
          style={{
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
            overflow: 'hidden',
          }}
        >
          {fadingWords.map((word, index) => {
            const fadeProgress = fadingWords.length === 1 ? 1 : index / (fadingWords.length - 1);
            const opacity = 0.7 - (fadeProgress * 0.6);

            return (
              <span key={`${word}-${index}`} style={{ opacity }}>
                {word}{index < fadingWords.length - 1 ? ' ' : ''}
              </span>
            );
          })}
        </p>
      )}
    </div>
  );
}

function ThoughtsAboutBooks() {
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef(null);

  const toggleExpanded = () => {
    if (!expanded) {
      setExpanded(true);
      return;
    }

    setExpanded(false);
    window.requestAnimationFrame(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      sectionRef.current?.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });
    });
  };

  return (
    <section ref={sectionRef} className="mx-auto mb-8 max-w-[1180px] scroll-mt-6 border border-[#b99a73] bg-[#fffaf0]/65 px-5 py-6 shadow-[0_5px_16px_rgba(69,41,22,.06)] sm:px-7 md:px-9 md:py-7">
      <h2 className="text-center text-[25px] font-bold leading-tight text-[#24130d] md:text-[29px]">
        Thoughts About Ronny&apos;s Books
      </h2>
      <div
        id="thoughts-about-books-content"
        className={`mt-5 space-y-3 text-[15px] leading-[1.48] text-[#2c1912] md:text-[16px] xl:columns-2 xl:gap-10 [&>p]:break-inside-avoid ${expanded ? '' : '[&>p:nth-child(n+4)]:hidden'}`}
      >
        <p>
          After publishing <em>Fireflies</em> and <em>Top Ten</em>, Ronny settled down to explore what genre or genres he wanted to write. He had always been partial to athletics, with football being his number-one love. Perhaps, he thought, football could be his genre.
        </p>
        <p>
          Ronny had a short but successful high school football career that lasted only one year. His senior year at Eagle Rock was marred by three injuries, and he only played a few downs that entire season. Before he healed, the season was over.
        </p>
        <p>
          He looked forward to playing Division 3 football at Occidental College. He knew instinctively that he did not have the physical talent to play Division 1 football. In 1948, football started at Oxy two weeks before school began. Ronny showed up and became part of the squad. He went out for running back and was placed on the second team behind a 24-year-old veteran of the U.S. Marines returning from World War II. Ronny was only 17 years old.
        </p>
        <p>
          However, during the “wind sprints,” Ronny discovered that he was faster than Doug. Since speed is a prime quality in football, he knew he would play.
        </p>
        <p>
          The workouts were grueling but contained a degree of excitement. September matured and school started. During the very first week, the Dean called Ronny in to speak with him.
        </p>
        <p>“What are you doing playing football?” the Dean asked.</p>
        <p>“I don’t know what you mean,” Ronny answered.</p>
        <p>
          The Dean continued, “You can’t play football and be a pre-medical student. You have important labs four afternoons a week, which totally conflict with football practice.”
        </p>
        <p>
          Ronny was confronted with a huge decision. He withdrew to think the whole situation over and ultimately decided that he needed to quit football. All his life, he had looked forward to playing college football, but now he had to give it up. Deep anger built in his chest, but he felt he had to make his first “adult decision.”
        </p>
        <p>Ronny quit football.</p>
        <p>
          Resentment ran deep. Frankly, Ronny never got over it; it lasted his whole life. To release some of that resentment at the time, he went out for boxing, which had no “team workout time.” He could condition on his own and participate in scheduled fights they called “sparring rounds.” Ronny slammed the bags relentlessly and pounded a few opponents. He made the collegiate Golden Gloves Finals two years in a row but unfortunately lost on points both times.
        </p>
        <p>
          Ronny thought he could write about boxing, but while he was turning that idea over in his mind, Sylvester Stallone came out with his <em>Rocky</em> series. Ronny would just be a tag-along. No thanks.
        </p>
        <p>
          Then Ronny realized he had a granddaughter who was an integral part of two Willcox High School championship teams, and she did not even attend the school; she was being homeschooled. But the team members remembered her from grammar school and sent someone to recruit her to play with them, which she could legally do.
        </p>
        <p>
          First, Esther became an important starter on the Willcox basketball team, which went all the way to the Arizona State Championship game in Phoenix at the professional arena. At an early stage of the game, with the score 7–9, Esther brought the ball across the center line by only six or seven feet and set up for a long three-pointer. Everyone in the stadium, including her own teammates, thought, <em>Oh, no, too far!</em> But the shot arced true and hit “swish, nothing but net!” Willcox 10 – Opponent 9. That long shot made the evening news in Phoenix.
        </p>
        <p>
          In the spring, Esther was recruited to play softball. She played a variety of positions but finally ended up in center field because of her speed and catching ability. At the plate, however, she was awesome. She made her mark and was invited by the League to play in the All-Star game representing the South.
        </p>
        <p>
          Esther started her little sister, Amber, in pitching while Amber was still a pre-teen. By the time Amber reached high school, she had become one of the team’s most valuable players. In her senior year, she was chosen as one of the four best pitchers in the state to pitch in the North-South All-Star game. She also received other honors.
        </p>
        <p>
          Ronny and his wife followed the teams. They attended all the home games and most of the away games. They became involved, knew the players and their families, and followed the teams closely.
        </p>
        <p>
          More importantly, Esther would travel with Ronny on weekends to sell their pies at various distant locations. Of course, they talked about softball, but they also talked about problems different players were grappling with. That was when Ronny realized there was a genre no one was using: <strong>women and girls in sports.</strong>
        </p>
        <p>Ronny began to focus on different sports and the problems troubling the players.</p>
        <p>
          Really good athletes are usually close to top-level people. Most are intelligent, resourceful, and fiercely competitive, but each has their own set of peccadilloes. The most prevalent ones are arrogance, conceit—usually masked as overconfidence—and complacency. Ronny tries to bring these undesirable traits into every story to expose the negativity resulting from them.
        </p>
        <p>
          He also introduces the problems of the period, such as males trying to compete as women, antisemitism, racism, laziness, plus the usual lying, cheating, drugs, drinking, sexual orientation, and false gods.
        </p>
        <p>
          One of the problems Ronny has had with so-called “promoters” is that they try to promote his books without ever having read them. Each of his books can be read in a couple of hours. Speakers study and take notes, singers practice, and book reviewers <strong>should do their preparatory work too.</strong>
        </p>
        <p>
          Ronny also tries to embed examples in his stories, with a person of authority—such as a coach, teacher, principal, or another leader—sharing <strong>the two great evils of success</strong> with the readers. The odds are that the actual readers will be successful people, so they need to know about and be on guard for these two great evils that tend to afflict the successful. If either of them ever gets a foothold in a person&apos;s life, they can destroy that person.
        </p>
        <p>
          Ronny also tries to embed the <strong>Christian gospel</strong> in each story, not philosophically, but by example. Often, he has someone, usually the special girl in the book, lead another person to Christ.
        </p>
      </div>
      <div className="mt-6 flex justify-center">
        <button
          className="inline-flex min-w-[180px] items-center justify-center border border-[#7b5638] bg-[#4a2110] px-5 py-2.5 text-[14px] font-semibold uppercase tracking-[0.06em] text-[#f6dfbd] shadow-[2px_2px_0_rgba(255,255,255,.65)] transition hover:bg-[#603019] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7b5638]"
          type="button"
          aria-controls="thoughts-about-books-content"
          aria-expanded={expanded}
          onClick={toggleExpanded}
        >
          {expanded ? 'Show Less' : 'Continue Reading'}
        </button>
      </div>
    </section>
  );
}

function BookButton({ href, children }) {
  if (!href) {
    return (
      <span className="inline-flex min-w-[104px] items-center justify-center bg-[#4a2110] px-4 py-2 text-center text-[13px] font-semibold text-[#f6dfbd] shadow-[2px_2px_0_rgba(255,255,255,.65)] md:min-w-[112px]">
        {children}
      </span>
    );
  }

  return (
    <a
      className="inline-flex min-w-[104px] items-center justify-center bg-[#4a2110] px-4 py-2 text-center text-[13px] font-semibold text-[#f6dfbd] no-underline shadow-[2px_2px_0_rgba(255,255,255,.65)] transition hover:bg-[#603019] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7b5638] md:min-w-[112px]"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

function BookDetailsModal({ book, onClose }) {
  const closeButtonRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;

      const focusableElements = dialogRef.current?.querySelectorAll('a[href], button:not([disabled])');
      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#1d100b]/80 px-4 py-6 backdrop-blur-[2px] sm:px-6"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        ref={dialogRef}
        className="relative my-auto w-full max-w-[780px] border border-[#c49a61] bg-[#f8ecd9] p-5 text-[#24130d] shadow-[0_24px_70px_rgba(0,0,0,.55)] sm:p-7 md:p-9"
        role="dialog"
        aria-modal="true"
        aria-labelledby="book-details-title"
      >
        <button
          ref={closeButtonRef}
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center border border-[#7b5638] bg-[#4a2110] text-[27px] leading-none text-[#f6dfbd] transition hover:bg-[#603019] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7b5638]"
          type="button"
          aria-label={`Close ${book.title} details`}
          onClick={onClose}
        >
          <span aria-hidden="true">×</span>
        </button>

        <div className="grid gap-6 pr-8 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-8 sm:pr-0">
          <img
            className="mx-auto h-[230px] w-[150px] border border-[#b99769] object-cover shadow-[0_7px_16px_rgba(45,26,18,.35)] sm:mx-0 sm:h-[250px] sm:w-[160px]"
            src={book.img}
            alt={book.alt}
          />
          <div className="flex min-w-0 flex-col items-start sm:pt-3">
            <h2 id="book-details-title" className="pr-4 text-[27px] font-bold uppercase leading-tight text-[#24130d] md:text-[32px]">
              {book.title}
            </h2>
            {book.coming && (
              <p className="mt-2 text-[14px] font-bold uppercase tracking-[0.1em] text-[#6b2c18]">Coming Soon</p>
            )}
            <p className="mt-5 text-[16px] leading-relaxed text-[#2c1912] md:text-[17px]">
              {book.description}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {book.url ? (
                <BookButton href={book.url}>View on Amazon</BookButton>
              ) : (
                <span className="inline-flex items-center border border-[#8b6a3d] px-4 py-2 text-[12px] font-bold uppercase tracking-[0.08em] text-[#6a2418]">
                  Coming Soon
                </span>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function MockBookCard({ book, coming = false, onReadMore }) {
  const description = book.text;

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
        <BookPreview description={description} />
        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          <button
            className="inline-flex min-w-[104px] items-center justify-center border border-[#6f4b31] bg-[#f8ecd9] px-4 py-2 text-center text-[13px] font-semibold text-[#4a2110] shadow-[2px_2px_0_rgba(74,33,16,.16)] transition hover:bg-[#ead8bd] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7b5638] md:min-w-[112px]"
            type="button"
            aria-label={`Read more about ${book.title}`}
            aria-haspopup="dialog"
            onClick={(event) => onReadMore({ ...book, coming, description }, event)}
          >
            Read More
          </button>
          {!coming && <BookButton href={book.url}>View on Amazon</BookButton>}
        </div>
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
  const [activeBook, setActiveBook] = useState(null);
  const lastTriggerRef = useRef(null);
  const secondSectionBooks = [...sportsBooks, ...otherBooks];

  const openBookDetails = (book, event) => {
    lastTriggerRef.current = event.currentTarget;
    setActiveBook(book);
  };

  const closeBookDetails = useCallback(() => {
    setActiveBook(null);
    window.requestAnimationFrame(() => lastTriggerRef.current?.focus());
  }, []);

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
        <ThoughtsAboutBooks />

        <SectionRule>Books</SectionRule>
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
          {books.map((book) => (
            <MockBookCard key={book.title} book={book} onReadMore={openBookDetails} />
          ))}
        </div>

        <SectionRule>Young Christian Women in Sports (2 Book Series)</SectionRule>
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
          {secondSectionBooks.map((book) => (
            <MockBookCard key={book.title} book={book} onReadMore={openBookDetails} />
          ))}
        </div>

        <div className="mx-auto mt-4 grid max-w-[1360px] gap-4 lg:grid-cols-2 xl:grid-cols-4">
          {comingBooks.map((book) => (
            <MockBookCard key={book.title} book={book} coming onReadMore={openBookDetails} />
          ))}
        </div>

        <OrderCopiesPanel />
      </div>
      {activeBook && <BookDetailsModal book={activeBook} onClose={closeBookDetails} />}
    </main>
  );
}

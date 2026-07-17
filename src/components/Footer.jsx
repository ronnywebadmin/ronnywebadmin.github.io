export function Footer() {
  return (
    <footer className="bg-[#eadfcb]">
      <div className="relative mx-auto grid min-h-[130px] max-w-[1440px] grid-cols-1 gap-6 border-t border-[#f0c76a]/25 bg-[#251a17] px-5 py-8 text-left text-[#f2d7b5] sm:grid-cols-2 md:grid-cols-[250px_repeat(3,150px)_minmax(240px,1fr)] md:gap-8 md:px-12">
        <div className="flex items-center gap-3 text-[23px] uppercase leading-[.9] tracking-[1px] text-[#f5d7a0] md:text-[25px]">
          <span className="text-[34px] text-[#d39a2e]">&#10019;</span>
          <span>Ronald Lex<br />Stout</span>
        </div>
        <div>
          <h4 className="mb-2 text-[12px] font-bold uppercase tracking-[.8px] text-[#d7a13a]">Explore</h4>
          <a className="block text-[13px] leading-normal no-underline" href="#/home">Home</a>
          <a className="block text-[13px] leading-normal no-underline" href="#/books">Books & Writing</a>
          <a className="block text-[13px] leading-normal no-underline" href="#/media">Media & Assets</a>
        </div>
        <div>
          <h4 className="mb-2 text-[12px] font-bold uppercase tracking-[.8px] text-[#d7a13a]">About</h4>
          <a className="block text-[13px] leading-normal no-underline" href="#/about">About Ronny</a>
          <a className="block text-[13px] leading-normal no-underline" href="#/contact">Speaking</a>
          <a className="block text-[13px] leading-normal no-underline" href="#/contact">Testimonials</a>
        </div>
        <div>
          <h4 className="mb-2 text-[12px] font-bold uppercase tracking-[.8px] text-[#d7a13a]">Connect</h4>
          <a className="block text-[13px] leading-normal no-underline" href="#/contact">Contacts</a>
          <a className="block text-[13px] leading-normal no-underline" href="#/contact">Newsletter</a>
        </div>
        <blockquote className="text-[17px] leading-snug text-[#fff1d7] sm:col-span-2 md:col-span-1 md:text-[18px]">
          "Let all that you do be done in love."
          <span className="mt-1 block text-[14px]">1 Corinthians 16:14</span>
        </blockquote>
        <p className="text-[11px] text-[#bca983] md:absolute md:bottom-3 md:left-12">&copy; 2026 Ron Stout | Author & Speaker</p>
      </div>
    </footer>
  );
}

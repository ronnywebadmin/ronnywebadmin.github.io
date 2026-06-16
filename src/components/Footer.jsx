export function Footer({ route }) {
  if (route === 'home') {
    return null;
  }

  if (route === 'about') {
    return (
      <footer className="relative grid min-h-[130px] grid-cols-1 gap-8 border-t border-[#f0c76a]/25 bg-[#251a17] px-8 py-8 text-left text-[#f2d7b5] md:grid-cols-[250px_repeat(3,150px)_minmax(240px,1fr)] md:px-12">
        <div className="flex items-center gap-3 text-[25px] uppercase leading-[.9] tracking-[1px] text-[#f5d7a0]">
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
        <blockquote className="text-[18px] leading-snug text-[#fff1d7]">"Let all that you do be done in love."<span className="mt-1 block text-[14px]">1 Corinthians 16:14</span></blockquote>
        <p className="text-[11px] text-[#bca983] md:absolute md:bottom-3 md:left-12">&copy; 2026 Ron Stout | Author & Speaker</p>
      </footer>
    );
  }

  return (
    <footer className="bg-[#271b18] p-5 text-center text-[12px] text-[#f2d7b5]">
      <p>&copy; 2026 Ron Stout. All Rights Reserved</p>
    </footer>
  );
}

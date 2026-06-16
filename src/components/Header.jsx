import { useState } from 'react';

export function Header({ route }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    ['home', 'Home'],
    ['books', 'Books & Writing'],
    ['media', 'Media & Assets'],
    ['about', 'About Ronny'],
    ['contact', 'Speaking'],
    ['contact', 'Contacts'],
  ];

  return (
    <header className="m-0">
      <nav className="relative flex min-h-[70px] items-center justify-between gap-4 border-b-[3px] border-[#9b6a2b] bg-[#4b120f] px-4 py-2 text-center shadow-md md:gap-5 md:px-10" aria-label="Main navigation">
        <a className="flex items-center gap-3 text-left text-[18px] uppercase leading-[.9] tracking-[1px] text-[#f5d7a0] no-underline md:text-[22px]" href="#/home">
          <span className="text-[30px] leading-none text-[#d39a2e] md:text-[38px]">&#10019;</span>
          <span>Ronald Lex<br />Stout</span>
        </a>
        <div className="hidden flex-1 items-center justify-center gap-5 md:flex">
          {navItems.map(([target, label]) => (
            <a
              key={label}
              className={`relative py-2 text-[14px] tracking-[.3px] text-[#f2d7b5] no-underline after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#d7a13a] after:transition-all after:content-[''] ${route === target ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}
              href={`#/${target}`}
            >
              {label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a className="hidden whitespace-nowrap border border-[#f0c76a] bg-gradient-to-b from-[#d9ad4e] to-[#a97724] px-4 py-2 text-[13px] font-bold uppercase tracking-[.7px] text-[#3a160f] no-underline sm:inline-block md:px-6" href="#/contact">Contact Ronny</a>
          <button
            className="border border-[#f0c76a] bg-[#3b100d] px-3 py-2 text-[12px] font-bold uppercase tracking-[.7px] text-[#f2d7b5] md:hidden"
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-main-navigation"
            onClick={() => setMobileOpen((open) => !open)}
          >
            Menu
          </button>
        </div>
        <span className="hidden text-[30px] leading-none text-[#d39a2e] md:inline" aria-hidden="true">&#10019;</span>
      </nav>
      <div
        id="mobile-main-navigation"
        className={`${mobileOpen ? 'grid' : 'hidden'} border-b border-[#9b6a2b] bg-[#3b100d] px-4 py-3 shadow-md md:hidden`}
      >
        {navItems.map(([target, label]) => (
          <a
            key={label}
            className={`border-b border-[#f0c76a]/20 py-3 text-[15px] text-[#f2d7b5] no-underline last:border-b-0 ${route === target ? 'font-bold text-[#f0c76a]' : ''}`}
            href={`#/${target}`}
            onClick={() => setMobileOpen(false)}
          >
            {label}
          </a>
        ))}
        <a
          className="mt-3 border border-[#f0c76a] bg-gradient-to-b from-[#d9ad4e] to-[#a97724] px-4 py-3 text-center text-[13px] font-bold uppercase tracking-[.7px] text-[#3a160f] no-underline"
          href="#/contact"
          onClick={() => setMobileOpen(false)}
        >
          Contact Ronny
        </a>
      </div>
    </header>
  );
}

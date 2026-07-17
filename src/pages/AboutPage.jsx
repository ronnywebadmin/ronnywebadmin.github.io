import { authorComing, authorCurrent } from '../data/books';

const paper = 'bg-[#f4ecde]';
const border = 'border-[#d4bd95]';
const heading = 'font-bold uppercase tracking-[0.02em] text-[#26130e] before:hidden after:hidden !m-0 !block !text-left';

function SectionTitle({ number, children, light = false }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-8 w-8 shrink-0 place-items-center bg-[#4b120f] text-lg font-bold leading-none text-[#f2d7b5]">
        {number}
      </span>
      <h2 className={`${heading} min-w-0 !text-[22px] sm:!text-[24px] md:!text-[28px] !leading-tight md:!leading-none ${light ? 'text-[#fff3d9]' : ''}`}>
        {children}
      </h2>
    </div>
  );
}

function CheckList({ items, light = false }) {
  return (
    <ul className={`mt-5 space-y-2 text-[16px] leading-snug ${light ? 'text-[#f8e8c8]' : 'text-[#2d1a12]'}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="font-bold text-[#b88a35]">&#10003;</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function EarlyYearsIcon({ type }) {
  if (type === 'book') {
    return (
      <svg className="h-6 w-6 shrink-0 text-[#b8893d]" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
        <path d="M256 78.921 0 44.788v388.292l256 34.133 256-34.133V44.788L256 78.921Zm-23.273 338.23L46.545 392.327V97.952l186.182 24.824v294.375Zm232.728-24.824-186.182 24.824V122.776l93.091-12.412v147.188l23.273-15.515 23.273 15.515V104.158l46.545-6.206v294.375Z" />
      </svg>
    );
  }

  const paths = {
    calendar: (
      <>
        <path d="M7 3v4M17 3v4M4 9h16" />
        <rect x="4" y="5" width="16" height="16" rx="2" />
        <path d="M8 13h2M12 13h2M16 13h2M8 17h2M12 17h2M16 17h2" />
      </>
    ),
    pin: (
      <>
        <path d="M12 21s7-5.2 7-12a7 7 0 0 0-14 0c0 6.8 7 12 7 12Z" />
        <circle cx="12" cy="9" r="2.3" />
      </>
    ),
    people: (
      <>
        <circle cx="12" cy="7" r="3" />
        <circle cx="6.5" cy="10" r="2.5" />
        <circle cx="17.5" cy="10" r="2.5" />
        <path d="M7 20c.5-4 2.1-6 5-6s4.5 2 5 6" />
        <path d="M2.5 19c.4-3 1.7-4.5 4-4.5M21.5 19c-.4-3-1.7-4.5-4-4.5" />
      </>
    ),
  };

  return (
    <svg className="h-6 w-6 shrink-0 text-[#b8893d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[type]}
    </svg>
  );
}

function FamilyIconList() {
  const items = [
    {
      label: 'Father of three children',
      path: (
        <>
          <circle cx="8" cy="8" r="2.2" />
          <circle cx="16" cy="8" r="2.2" />
          <path d="M4.5 18c.4-3 1.6-4.8 3.5-4.8s3.1 1.8 3.5 4.8" />
          <path d="M12.5 18c.4-3 1.6-4.8 3.5-4.8s3.1 1.8 3.5 4.8" />
        </>
      ),
    },
    {
      label: 'Grandfather to many grandchildren',
      path: (
        <>
          <circle cx="12" cy="7" r="2.4" />
          <path d="M7.5 14c.6-2.4 2.1-3.7 4.5-3.7s3.9 1.3 4.5 3.7" />
          <circle cx="7" cy="15" r="1.8" />
          <circle cx="17" cy="15" r="1.8" />
          <path d="M3.8 20c.3-2.2 1.4-3.3 3.2-3.3s2.9 1.1 3.2 3.3" />
          <path d="M13.8 20c.3-2.2 1.4-3.3 3.2-3.3s2.9 1.1 3.2 3.3" />
        </>
      ),
    },
    {
      label: 'A man of deep faith and unwavering convictions',
      path: (
        <>
          <path d="M12 4v16" />
          <path d="M7 9h10" />
          <path d="M8 20h8" />
        </>
      ),
    },
    {
      label: 'A legacy of love, guidance, and perseverance',
      path: (
        <>
          <path d="M12 13c3.2-2 5-4 5-6.2A3 3 0 0 0 12 4.6 3 3 0 0 0 7 6.8c0 2.2 1.8 4.2 5 6.2Z" />
          <path d="M9 13.5 7 21l5-3 5 3-2-7.5" />
        </>
      ),
    },
  ];

  return (
    <ul className="mt-5 space-y-2 text-[16px] leading-snug text-[#2d1a12]">
      {items.map((item) => (
        <li key={item.label} className="flex items-start gap-3">
          <svg
            className="mt-[2px] h-5 w-5 shrink-0 text-[#8a6635]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {item.path}
          </svg>
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
}

function BookStrip({ title, books }) {
  return (
    <div className={`relative border ${border} px-4 pb-4 pt-6 md:px-5`}>
      <h3 className="absolute left-1/2 top-[-10px] -translate-x-1/2 bg-[#f4ecde] px-4 text-[13px] font-bold uppercase tracking-[0.08em] text-[#6d5a37]">
        {title}
      </h3>
      <div className={`grid gap-3 ${books.length > 3 ? 'grid-cols-2 sm:grid-cols-4 md:grid-cols-8' : 'grid-cols-2 sm:grid-cols-3'}`}>
        {books.map(([src, caption]) => (
          <figure key={caption} className="min-w-0 text-center">
            <img className="h-[130px] w-full border border-[#c9b38c] object-cover shadow-md md:h-[118px]" src={src} alt={`${caption} book cover`} />
            <figcaption className="mt-2 min-h-8 text-[13px] leading-tight text-[#2d1a12]">{caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function RanchIcon({ label }) {
  const common = 'h-full w-full';
  const icons = {
    Ranching: (
      <img className={`${common} object-contain`} src="images/cow-2-64.png" alt="" aria-hidden="true" />
    ),
    'Apple Orchards': (
      <svg className={common} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
        <path d="M29 31h6v23h-6V31Z" />
        <path d="M20 54h24v5H20v-5Z" />
        <path d="M32 7c5 0 8 4 8 8 6-1 11 4 11 10 0 5-4 9-9 10-2 5-7 8-12 6-4 3-10 1-12-4-6 0-10-5-9-11 0-5 4-9 9-9 1-6 6-10 14-10Z" />
        <circle cx="24" cy="24" r="3" />
        <circle cx="39" cy="23" r="3" />
        <circle cx="31" cy="33" r="3" />
      </svg>
    ),
    'Private Pilot': (
      <img className={`${common} object-contain`} src="images/airplane-6-64.png" alt="" aria-hidden="true" />
    ),
    Horsemanship: (
      <img className={`${common} scale-x-[-1] object-contain`} src="images/horse-2-64.png" alt="" aria-hidden="true" />
    ),
    Agriculture: (
      <svg className={common} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" aria-hidden="true">
        <path d="M32 54V10" />
        <path d="M32 45c-10-4-16-10-18-18 9 1 15 6 18 14" />
        <path d="M32 36c10-4 16-10 18-18-9 1-15 6-18 14" />
        <path d="M32 26c-7-3-12-8-14-15 7 1 12 5 14 11" />
        <path d="M32 19c6-3 10-7 12-13-6 1-10 5-12 10" />
      </svg>
    ),
  };

  return icons[label] ?? null;
}

function RanchStatIcon({ label }) {
  const common = 'h-full w-full';
  const icons = {
    'Pilot Hours': (
      <svg className={common} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" aria-hidden="true">
        <path d="M3 18h11L10 5h4l8 13h5c2 0 4 1 4 3s-2 3-4 3h-5l-8 5h-4l4-5H6l-3 3H1l2-6-2-6h2l3 3Z" />
      </svg>
    ),
    'Acres of Ranch': (
      <svg className={common} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" aria-hidden="true">
        <path d="M5 27V13l11-8 11 8v14" />
        <path d="M10 27V15h12v12" />
        <path d="M13 27v-8h6v8" />
        <path d="M5 27h22" />
        <path d="M8 13h16" />
        <path d="M12 11v4M16 8v7M20 11v4" />
      </svg>
    ),
    'Published Books': (
      <svg className={common} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" aria-hidden="true">
        <path d="M6 5h13a4 4 0 0 1 4 4v18H10a4 4 0 0 0-4 4V5Z" />
        <path d="M10 9h9M10 14h9M10 19h9" />
        <path d="M26 8v20" />
      </svg>
    ),
    'Years Married': (
      <svg className={common} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" aria-hidden="true">
        <path d="M11 13c3.5-5 9.5-2.7 9.5 2.3 0 5.1-7.8 8.7-9.5 10.4C9.3 24 1.5 20.4 1.5 15.3 1.5 10.3 7.5 8 11 13Z" />
        <path d="M21 13c3.5-5 9.5-2.7 9.5 2.3 0 5.1-7.8 8.7-9.5 10.4-1.1-1.1-4.7-3-7.1-5.7" />
      </svg>
    ),
  };

  return icons[label] ?? null;
}

function GraduationCapIcon() {
  return (
    <svg className="h-8 w-8 xl:h-10 xl:w-10" viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <path d="M32 9 4 23l28 14 28-14L32 9Z" />
      <path d="M17 31v12c0 5 7 9 15 9s15-4 15-9V31l-15 8-15-8Z" />
      <path d="M55 26v15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <circle cx="55" cy="45" r="3" />
    </svg>
  );
}

function CiderFeatureIcon({ type }) {
  if (type === 'abc') {
    return <img className="h-12 w-12 object-contain" src="images/abc.png" alt="" aria-hidden="true" />;
  }

  if (type === 'nbc') {
    return <img className="h-12 w-12 object-contain" src="images/nbc.png" alt="" aria-hidden="true" />;
  }

  if (type === 'apple') {
    return <img className="h-12 w-12 object-contain" src="images/apple-icon-transparent.png" alt="" aria-hidden="true" />;
  }

  return <img className="h-12 w-12 object-contain" src="images/star-icon-transparent.png" alt="" aria-hidden="true" />;
}

function RanchBand() {
  const ranchItems = [
    'Ranching',
    'Apple Orchards',
    'Private Pilot',
    'Horsemanship',
    'Agriculture',
  ];

  const stats = [
    ['700+', 'Pilot Hours'],
    ['1,040', 'Acres of Ranch'],
    ['11+', 'Published Books'],
    ['49', 'Years Married'],
  ];

  return (
    <article
      className="col-span-1 grid min-h-[230px] grid-cols-1 gap-8 bg-cover bg-center px-5 py-7 text-[#fff2d8] md:col-span-12 md:min-h-[300px] md:grid-cols-[minmax(0,1fr)_320px] md:px-7 xl:grid-cols-[minmax(0,1fr)_450px] xl:gap-10 xl:px-12 xl:py-8"
      style={{
        backgroundImage:
          'linear-gradient(90deg, rgba(42,28,13,.88), rgba(42,28,13,.56) 50%, rgba(42,28,13,.2)), url("images/Banner-No Texts.png")',
        backgroundPosition: '100% 88%',
        backgroundSize: '230% auto',
      }}
    >
      <div className="flex min-w-0 flex-col justify-between">
        <div>
          <SectionTitle number="5" light>Building a Ranch Legacy</SectionTitle>
          <p className="mt-5 max-w-xl text-[18px] leading-snug text-[#fff7e6]">
            At his 1,040-acre ranch in southeastern Arizona, Ronny embraced a life of agriculture and stewardship.
          </p>
        </div>
        <div className="mt-8 grid max-w-[760px] grid-cols-2 gap-4 sm:grid-cols-3 md:mt-0 md:grid-cols-5 md:gap-3 xl:gap-4">
          {ranchItems.map((label) => (
            <div key={label} className="flex flex-col items-center gap-2 xl:gap-3 text-center text-[11px] xl:text-[13px] font-bold uppercase text-[#fff6df] [text-shadow:0_1px_3px_rgba(0,0,0,.55)]">
              <span className="grid h-[52px] w-[52px] xl:h-[66px] xl:w-[66px] place-items-center rounded-full border-2 border-[#fff6df]/90 p-3 text-[#fff6df]">
                <RanchIcon label={label} />
              </span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="self-center border border-[#745330]/40 bg-[#f8efdf]/90 shadow-xl">
        <div className="grid grid-cols-2">
          {stats.map(([value, label], index) => (
            <div key={label} className={`grid min-h-[82px] xl:min-h-[105px] grid-cols-[32px_1fr] xl:grid-cols-[42px_1fr] items-center gap-2 xl:gap-3 px-4 xl:px-6 text-[#3a2a1f] ${index % 2 === 0 ? 'border-r' : ''} ${index < 2 ? 'border-b' : ''} border-[#745330]/25`}>
              <span className="grid h-8 w-8 place-items-center text-[#7d5731] xl:h-10 xl:w-10">
                <RanchStatIcon label={label} />
              </span>
              <span className="text-[11px] xl:text-[14px] font-bold uppercase leading-tight">
                <strong className="block text-[25px] xl:text-[34px] leading-none">{value}</strong>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export function AboutPage() {
  return (
    <main className="bg-[#eadfcb] text-left">
      <section className="!p-0 mx-auto grid max-w-[1440px] grid-cols-1 text-left md:grid-cols-12">
        <article className={`col-span-1 grid min-h-[300px] grid-rows-[auto_1fr] overflow-hidden border-b ${border} ${paper} px-5 py-6 md:col-span-5 md:border-r md:px-6 xl:min-h-[375px] xl:px-8 xl:py-7`}>
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 shrink-0 place-items-center bg-[#4b120f] text-lg font-bold leading-none text-[#f2d7b5]">
              1
            </span>
            <h2 className="!m-0 !block text-left !text-[24px] xl:!text-[28px] font-bold uppercase !leading-none tracking-[0.02em] text-[#26130e] before:hidden after:hidden">
              The Early Years
            </h2>
          </div>
          <div className="mt-5 grid grid-cols-1 items-start gap-5 sm:grid-cols-[40%_minmax(0,1fr)] xl:gap-7">
          <div className="grid place-items-start">
            <img className="max-h-[260px] xl:max-h-[315px] w-full border border-[#c9b38c] object-contain object-center shadow-md" src="images/section1.png" alt="Ronald Stout during his early Navy years" />
          </div>
          <div className="min-w-0">
            <div className="hidden items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center border border-[#b8893d] bg-[#6d1f18] text-[28px] font-bold leading-none text-[#f2d7b5] shadow-sm">
                1
              </span>
              <h2 className="!m-0 !block text-left !text-[28px] xl:!text-[38px] font-bold uppercase !leading-none tracking-[0.04em] text-[#2b1911] before:hidden after:hidden">
                The Early Years
              </h2>
            </div>
            <div className="hidden">
              <span className="h-px flex-1 bg-[#d0ad62]" />
              <span className="text-[18px] leading-none">&loz;</span>
              <span className="h-px flex-1 bg-[#d0ad62]" />
            </div>
            <ul className="space-y-3 text-[15px] xl:text-[17px] leading-snug text-[#3a2a1f]">
              {[
                ['calendar', 'Born February 22, 1931'],
                ['pin', 'Glendale, California'],
                ['people', 'Raised with strong values'],
                ['book', 'Developed passion for leadership, music, and learning'],
              ].map(([type, item]) => (
                <li key={item} className="flex items-start gap-4">
                  <EarlyYearsIcon type={type} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <blockquote className="mt-5 border border-[#d8bd8d] bg-[#f8efdf]/70 px-4 py-4 text-left text-[17px] xl:text-[19px] italic leading-snug text-[#3a2a1f]">
              <span className="mr-2 text-[34px] leading-none text-[#b8893d]">&ldquo;</span>
              Every chapter of life prepares us for the next.
              <span className="ml-2 text-[34px] leading-none text-[#b8893d]">&rdquo;</span>
            </blockquote>
          </div>
          </div>
        </article>

        <article
          className={`col-span-1 min-h-[300px] border-b ${border} bg-cover bg-right px-5 py-6 md:col-span-7 md:px-7 xl:min-h-[375px] xl:px-12 xl:py-9`}
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(255,248,236,.82), rgba(255,248,236,.68) 63%, rgba(255,248,236,.16)), url("images/books-bg.png")',
          }}
        >
          <SectionTitle number="2">Education & Formation</SectionTitle>
          <div className="mt-10 grid max-w-full grid-cols-1 gap-x-4 gap-y-10 text-center sm:grid-cols-2 md:mt-12 md:max-w-[88%] md:grid-cols-4 md:gap-3 xl:mt-20 xl:max-w-[82%] xl:gap-5">
            {[
              ['#6d1f18', 'Occidental College', "Bachelor's Degree"],
              ['#173242', 'LIFE Pacific College', 'Theology and Greek Studies'],
              ['#536326', 'University of Southern California', 'Graduate Studies in Finance'],
              ['#ad7b23', 'University of Arizona', 'Graduate Studies in Agriculture'],
            ].map(([color, school, detail]) => (
              <div key={school} className="relative border-t-[3px] border-[#6d7d34] pt-11 xl:pt-16">
                <span className="absolute left-1/2 top-[-26px] xl:top-[-34px] grid h-[52px] w-[52px] xl:h-[66px] xl:w-[66px] -translate-x-1/2 place-items-center rounded-full text-[#f8efdf]" style={{ backgroundColor: color }}>
                  <GraduationCapIcon />
                </span>
                <strong className="block text-[14px] xl:text-[17px] leading-tight text-[#281711]">{school}</strong>
                <span className="mt-1 block text-[12px] xl:text-[15px] leading-snug text-[#6b5a45]">{detail}</span>
              </div>
            ))}
          </div>
        </article>

        <article
          className="relative col-span-1 min-h-[360px] overflow-hidden border-b border-[#d4bd95] bg-cover px-5 py-6 text-[#f8e8c8] [--war-bg-position:center] [--war-bg-size:cover] md:col-span-7 md:min-h-[320px] md:border-r md:px-7 md:[--war-bg-position:130%_center] md:[--war-bg-size:85%_auto] xl:min-h-[390px] xl:px-12 xl:py-9"
          style={{
            backgroundImage:
              'linear-gradient(90deg, #020406 0%, #020406 15%, rgba(2,4,6,.74) 26%, rgba(2,4,6,.24) 39%, rgba(2,4,6,0) 54%), url("images/dd 783.png")',
            backgroundPosition: 'var(--war-bg-position)',
            backgroundSize: 'var(--war-bg-size)',
          }}
        >
          <div className="relative z-10 -ml-5 -my-6 max-w-[455px] bg-gradient-to-r from-[#020406] from-[0%] via-[#020406]/90 via-[42%] to-transparent px-5 py-6 pr-5 md:-ml-7 md:px-7 md:pr-16 xl:-ml-12 xl:-my-9 xl:px-12 xl:py-9 xl:pr-20">
            <SectionTitle number="3" light>Service During the Korean War</SectionTitle>
            <p className="mt-6 max-w-[520px] text-[18px] leading-snug">
              As a Navy Officer aboard the USS Gurke during the Korean War, Ronny experienced firsthand the realities of military service and leadership under pressure.
            </p>
            <CheckList light items={['Korean War Veteran', 'USS Gurke DD-783', 'Missions near hostile North Korea', 'Stories later documented in military history accounts']} />
            <a className="mt-5 inline-block bg-[#b17a22] px-4 py-3 text-[12px] font-bold uppercase text-[#fff2d2] sm:px-5 sm:text-[13px]" href="#/contact">Read Military Experiences</a>
          </div>
        </article>

        <article className={`col-span-1 min-h-[320px] border-b ${border} ${paper} px-5 py-6 md:col-span-5 md:px-7 xl:min-h-[390px] xl:px-12 xl:py-9`}>
          <SectionTitle number="4">Wall Street to Ranch Life</SectionTitle>
          <div className="relative mt-5 xl:mt-6 h-[90px] xl:h-[115px] overflow-hidden border border-[#c9b38c] shadow-md">
            <img className="h-full w-full object-cover opacity-85 brightness-110 contrast-90 saturate-75" src="images/wallstreet.png" alt="Wall Street" />
            <div className="pointer-events-none absolute inset-0 bg-[#f4ecde]/18 mix-blend-screen" />
          </div>
          <p className="mt-6 text-[17px] leading-snug">Following military service, Ronald built a successful career in finance as a stockbroker and branch manager for a New York Stock Exchange firm.</p>
          <p className="mt-4 text-[17px] leading-snug">He worked with prominent clients, entrepreneurs, inventors, and notable historical figures while maintaining his commitment to family and faith.</p>
        </article>

        <RanchBand />

        <div className="col-span-1 grid grid-cols-1 md:col-span-12 md:grid-cols-[minmax(0,4fr)_minmax(0,6fr)]">
        <article
          className={`relative min-h-[520px] overflow-hidden border-b ${border} ${paper} md:min-h-[360px] md:border-r xl:min-h-[410px]`}
        >
          <img
            className="absolute right-0 top-0 z-0 h-[72%] w-[72%] object-cover opacity-45 md:w-[100%] md:opacity-100"
            src="images/stouts.jpg"
            alt=""
            aria-hidden="true"
            style={{
              WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 10%, black 100%)',
              maskImage: 'linear-gradient(90deg, transparent 0%, black 10%, black 100%)',
            }}
          />
          <div className="relative z-10 max-w-[460px] px-5 py-6 md:px-7 xl:px-12 xl:py-9">
            <SectionTitle number="6">The Story of Stout's Cider Mill</SectionTitle>
            <div className="mt-8 inline-block bg-gradient-to-r from-[#f8efdf]/90 to-[#f8efdf]/50 px-3 py-2 md:mt-[55px]">
              <p className="text-[16px] leading-snug md:text-[17px]">What began as an apple-growing venture with his beloved wife became one of Arizona's most recognized cider destinations.</p>
              <p className="mt-4 text-[16px] leading-snug md:text-[17px]">The business gained national attention and was featured by major television networks.</p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-10 grid grid-cols-2 border-t border-[#d2bd9c] bg-[#f8efdf]/90 text-center text-[11px] font-bold uppercase text-[#3a2a1f] shadow-sm sm:grid-cols-4 xl:text-[13px]">
            {[
              ['abc', 'ABC Feature'],
              ['nbc', 'NBC Feature'],
              ['apple', '22 Years in Operation'],
              ['star', 'National Recognition'],
            ].map(([type, item]) => (
              <span key={item} className="grid min-h-[96px] place-items-center border-r border-[#d2bd9c] px-2 py-3 last:border-r-0">
                <CiderFeatureIcon type={type} />
                <span className="mt-2 block leading-tight">{item}</span>
              </span>
            ))}
          </div>
        </article>

        <article className={`relative overflow-hidden border-b ${border} ${paper}`}>
          <div className="px-5 py-6 md:px-7 xl:px-12 xl:py-9">
            <SectionTitle number="7">Family, Faith & Loss</SectionTitle>
          </div>
          <img
            className="block w-full border-t border-[#d4bd95] object-contain"
            src="images/For Section 7 (updated photo).png"
            alt="Family, marriage, children, grandchildren, faith journey, and losing his wife"
          />

          <blockquote className="hidden absolute bottom-10 left-[47%] z-10 w-[260px] border border-[#d2bd9c] bg-[#f8efdf]/90 p-4 text-center text-[18px] italic leading-snug text-[#16304a] shadow-lg">
            <span className="absolute left-5 top-[-18px] text-[58px] leading-none text-[#a37b32]">&ldquo;</span>
            Faith has carried me through both life's greatest blessings and its deepest sorrows.
          </blockquote>
        </article>
        </div>

        <article
          className={`col-span-1 min-h-[260px] cursor-pointer border-b ${border} ${paper} px-5 py-6 md:col-span-12 md:px-7 xl:px-12 xl:py-9`}
          role="link"
          tabIndex={0}
          aria-label="View Books and Writing"
          onClick={() => {
            window.location.hash = '/books';
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              window.location.hash = '/books';
            }
          }}
        >
          <div className="mb-8 flex flex-col items-start gap-4 md:flex-row md:gap-5">
            <SectionTitle number="8">Author & Storyteller</SectionTitle>
            <p className="max-w-[560px] text-[15px] leading-snug">Today, Ronny continues writing and publishing Christian books designed to inspire, educate, and encourage readers of all ages.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1fr)_300px] md:gap-5 xl:grid-cols-[minmax(0,1fr)_330px] xl:gap-6">
            <BookStrip title="Current Titles" books={authorCurrent} />
            <BookStrip title="Coming Soon" books={authorComing} />
          </div>
        </article>
      </section>

      <section className="mx-auto grid max-w-[1440px] grid-cols-1 text-left text-[#f8e7c5] md:grid-cols-[minmax(0,1fr)_430px]">
        <article
          className="min-h-[340px] bg-cover bg-center px-5 py-10 sm:px-7 md:px-12 lg:px-16 xl:px-20 xl:py-14"
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(18,12,9,.86), rgba(18,12,9,.58) 52%, rgba(18,12,9,.16)), url("images/Section 9.png")',
          }}
        >
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 shrink-0 place-items-center border border-[#d0ad62] bg-[#4b120f] text-lg font-bold leading-none text-[#f2d7b5]">
              9
            </span>
            <h2 className="!m-0 !block text-left !text-[22px] font-bold uppercase !leading-none tracking-[0.02em] text-[#efe1c8] before:hidden after:hidden">
              A Legacy Still Being Written
            </h2>
          </div>
          <p className="mt-5 max-w-[520px] text-[17px] leading-snug text-[#fff2d8]">
            At 95 years old, Ronald Stout remains committed to sharing stories of faith, perseverance, and purpose. His mission continues through every book he writes and every life he touches.
          </p>
          <blockquote className="relative mt-7 max-w-[600px] pl-8 text-[19px] italic leading-tight text-[#fff3d9] sm:pl-10 md:text-[23px]">
            <span className="absolute left-0 top-[-8px] text-[60px] not-italic leading-none text-[#d2a23a]">&ldquo;</span>
            I am the Way, the Truth, and the Life. No man comes to the Father, but by Me.
            <span className="ml-1 not-italic">&rdquo;</span>
            <cite className="mt-3 block text-[17px] not-italic text-[#fff2d8]">John 14:6</cite>
          </blockquote>
          <blockquote className="hidden">
            <span className="absolute left-0 top-[-8px] text-[60px] not-italic leading-none text-[#d2a23a]">&ldquo;</span>
          </blockquote>
        </article>
        <aside className="border-t border-[#c6aa7a]/50 bg-[#53140f] px-5 py-10 text-[#fff1d7] sm:px-7 md:border-l md:border-t-0 md:px-10 xl:px-12 xl:py-14">
          <h3 className="mb-4 text-[25px] font-bold text-[#fff3d9]">Let's Stay Connected</h3>
          <p className="mb-4 text-[17px] leading-snug">Whether you're a reader, fellow believer, or interested in having me speak at your event, please reach out.</p>
          <a className="mb-4 inline-block bg-[#b17a22] px-6 py-3 text-[13px] font-bold uppercase text-[#fff2d2]" href="#/contact">Contact Ronny</a>
          <p className="mb-2">ronstout85644@gmail.com</p>
          <p>P.O. Box 1100, Willcox, AZ 85644</p>
        </aside>
      </section>
    </main>
  );
}

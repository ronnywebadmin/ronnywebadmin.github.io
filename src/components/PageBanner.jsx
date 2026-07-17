const bannerContent = {
  home: {
    title: 'Ronald Lex "Ronny" Stout',
    text: 'Stories shaped by faith, forged through perseverance, and written to leave something lasting behind - for readers who believe courage, character, and conviction still matter.',
  },
  books: {
    title: 'BOOKS & WRITING',
    text: 'Stories of faith, perseverance, and purpose that inspire and uplift.',
  },
  media: {
    title: 'MEDIA & ASSETS',
    text: "Lyrics and media resources from Ronny's original songs.",
  },
  about: {
    title: 'ABOUT RONNY',
    text: "A life shaped by faith, service, family, and stories still being written.",
  },
  contact: {
    title: 'CONTACT RONNY',
    text: "We'd love to hear from you. Let's connect!",
  },
};

function Ornament() {
  return (
    <div className="mx-auto my-[clamp(6px,1.6vw,20px)] flex max-w-[280px] items-center gap-3 text-[#4b2a19]">
      <span className="h-px flex-1 bg-[#4b2a19]" />
      <span className="text-[24px] leading-none">&loz;</span>
      <span className="h-px flex-1 bg-[#4b2a19]" />
    </div>
  );
}

function FullImageBanner({ content, home = false }) {
  return (
    <section className="bg-[#eadfcb] text-[#2c1912]">
      <div className="relative mx-auto max-w-[1440px] overflow-hidden border-b border-[#8d6745] bg-[#eadfcb]">
        <img
          className="block h-auto w-full"
          src="images/Banner-No Texts.png"
          alt=""
          aria-hidden="true"
        />
        {home ? (
          <div className="absolute right-[4%] top-[7%] w-[61%] text-center sm:top-[8%] md:right-[5%] md:w-[58%]">
            <h1 className="text-[clamp(17px,5.2vw,76px)] font-bold leading-[.98] tracking-normal text-[#24130d] [text-shadow:0_1px_0_rgba(255,246,228,.75)]">
              {content.title}
            </h1>
            <p className="mx-auto mt-[clamp(4px,1.8vw,24px)] max-w-[620px] text-[clamp(9px,2.15vw,28px)] italic leading-snug text-[#2f1b14]">
              {content.text}
            </p>
          </div>
        ) : (
          <div className="absolute right-[4%] top-[12%] w-[61%] text-center md:right-[6%] md:top-[14%] md:w-[56%]">
            <h1 className="text-[clamp(18px,5vw,76px)] font-bold uppercase leading-none tracking-[0.03em] text-[#24130d] [text-shadow:0_1px_0_rgba(255,246,228,.75)]">
              {content.title}
            </h1>
            <Ornament />
            <p className="mx-auto max-w-[520px] text-[clamp(10px,2vw,28px)] italic leading-snug text-[#2f1b14]">
              {content.text}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export function PageBanner({ route }) {
  const content = bannerContent[route] ?? bannerContent.home;

  if (route === 'home') {
    return <FullImageBanner content={content} home />;
  }

  if (route === 'books' || route === 'media' || route === 'about' || route === 'contact') {
    return <FullImageBanner content={content} />;
  }

  return (
    <section className="bg-[#eadfcb] text-[#2c1912]">
      <div
        className="mx-auto flex min-h-[380px] max-w-[1325px] items-center justify-end border-b-4 border-[#c6aa7a] bg-cover bg-top bg-no-repeat px-6 py-12 md:min-h-[560px] md:px-[7%]"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(244,236,222,.04) 0%, rgba(244,236,222,.08) 33%, rgba(244,236,222,.82) 54%, rgba(244,236,222,.4) 100%), url("images/Banner-No Texts.png")',
          backgroundPosition: 'center top',
        }}
      >
        <div className="ml-auto max-w-[640px] text-left md:w-[52%]">
          {content.eyebrow && (
            <p className="mb-5 flex items-center justify-center gap-4 text-[13px] font-bold uppercase tracking-[0.12em] text-[#6b2a18] before:h-px before:w-20 before:bg-[#7b5c35] before:content-[''] after:h-px after:w-20 after:bg-[#7b5c35] after:content-[''] md:text-[15px]">
              {content.eyebrow}
            </p>
          )}
          <h1 className="text-[40px] font-bold leading-[.98] tracking-normal text-[#24130d] [text-shadow:0_1px_0_rgba(255,246,228,.7)] md:text-[58px] xl:text-[68px]">
            {content.title}
          </h1>
          <p className={`mt-7 max-w-[590px] text-[18px] leading-relaxed text-[#2f1b14] md:text-[21px] ${content.plainText ? '' : 'italic'}`}>
            {content.text}
          </p>
        </div>
      </div>
    </section>
  );
}

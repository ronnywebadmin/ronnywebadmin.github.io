const bannerContent = {
  home: {
    eyebrow: '',
    title: 'Ronald Lex "Ronny" Stout',
    text: 'Stories shaped by faith, forged through perseverance, and written to leave something lasting behind - for readers who believe courage, character, and conviction still matter.',
  },
  books: {
    eyebrow: 'Books & Writing',
    title: 'Stories of Faith, Grit, and Conviction',
    text: 'Books written to inspire readers through perseverance, courage, history, sports, and Christian faith.',
  },
  media: {
    eyebrow: 'Media & Assets',
    title: 'Lyrics, Scripture, and Creative Work',
    text: 'Songs and media resources rooted in worship, testimony, and the enduring message of the Gospel.',
  },
  about: {
    eyebrow: 'About Ronny',
    title: 'Meet Ronald Lex "Ronny" Stout',
    text: "For more than nine decades, Ronald Stout has lived a life defined by faith, resilience, service, and purpose. From serving as a Navy officer during the Korean War to building a nationally recognized cider mill and authoring Christian books, his journey reflects perseverance and God's guidance.",
    plainText: true,
  },
  contact: {
    eyebrow: 'Contacts',
    title: 'Connect With Ronny',
    text: 'For speaking invitations, media requests, reader notes, and publishing questions, please reach out.',
  },
};

export function PageBanner({ route }) {
  const content = bannerContent[route] ?? bannerContent.home;

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

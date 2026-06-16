import { useState } from 'react';
import { verses } from '../data/verses';

export function ContactPage() {
  const [currentVerse, setCurrentVerse] = useState(null);
  const verse = currentVerse ? verses[currentVerse - 1] : null;

  return (
    <section
      className="min-h-screen bg-cover bg-center px-6 py-[160px] text-center"
      style={{ backgroundImage: 'url("images/modal-bg.jpg")' }}
    >
      <h2 className="mb-10 flex items-center justify-center gap-4 text-[30px] tracking-[2px] before:h-px before:flex-1 before:bg-[#5c3a26] before:content-[''] after:h-px after:flex-1 after:bg-[#5c3a26] after:content-['']">CONTACTS</h2>
      <div className="mx-auto mb-5 max-w-[600px] text-[15px]">
        <p><strong>Publicist:</strong> Johanna Castillo</p>
        <p>Email: <a href="mailto:jcastillo@exemplumcircle.com">jcastillo@exemplumcircle.com</a>, <a href="mailto:johanna.castillo7878@gmail.com">johanna.castillo7878@gmail.com</a></p>
      </div>
      <form className="mx-auto flex max-w-[280px] flex-col items-center gap-3">
        <input className="w-[280px] border border-[#5a3d2b] bg-white/85 p-2" type="text" placeholder="Name" required />
        <input className="w-[280px] border border-[#5a3d2b] bg-white/85 p-2" type="email" placeholder="Email" required />
        <textarea className="w-[280px] border border-[#5a3d2b] bg-white/85 p-2" placeholder="Comment" rows="5" required />
        <button type="submit" className="mt-2 bg-[#4a3426] px-4 py-2 text-[13px] text-[#e5c7a1]">SEND</button>
      </form>

      {!currentVerse && (
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {verses.map((_, index) => (
            <button key={index + 1} type="button" onClick={() => setCurrentVerse(index + 1)} className="bg-[#4a3426] px-4 py-2 text-[13px] text-[#e5c7a1]">VERSE {index + 1}</button>
          ))}
        </div>
      )}

      {verse && (
        <div className="mt-8 w-full cursor-pointer" onClick={() => setCurrentVerse(null)}>
          <div className="relative mx-auto flex h-[350px] max-w-[700px] cursor-default flex-col bg-cover bg-center p-8 before:absolute before:inset-0 before:bg-[#fff0dc]/85 before:content-['']" style={{ backgroundImage: 'url("images/modal-bg.jpg")' }} onClick={(event) => event.stopPropagation()}>
            <div className="relative z-10 h-[300px]">
              <h3 className="mb-4 tracking-[2px]">VERSE {currentVerse}</h3>
              <div className="my-5 text-[16px] leading-loose">
                <p><strong>{verse[0]}</strong></p>
                <p>{verse[1]}</p>
              </div>
            </div>
            <button type="button" onClick={() => setCurrentVerse((currentVerse % verses.length) + 1)} className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 bg-[#4a3426] px-4 py-2 text-[13px] text-[#e5c7a1]">NEXT VERSE</button>
          </div>
        </div>
      )}
    </section>
  );
}

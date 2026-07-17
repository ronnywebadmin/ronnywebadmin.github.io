import { useState } from 'react';
import { verses } from '../data/verses';

const publicistEmail = 'johanna.castillo7878@gmail.com';
const contactRecipientEmail = publicistEmail;
const web3FormsEndpoint = 'https://api.web3forms.com/submit';
const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';

function Panel({ children, className = '' }) {
  return (
    <section className={`border border-[#8f765f] bg-[#f5e8d5]/86 p-6 shadow-sm md:p-8 ${className}`}>
      {children}
    </section>
  );
}

function FormField({ label, children }) {
  return (
    <label className="block text-left">
      <span className="mb-2 block text-[13px] font-bold uppercase tracking-[0.12em] text-[#4b2115]">{label}</span>
      {children}
    </label>
  );
}

function inputClasses(extra = '') {
  return `w-full border border-[#c7b08e] bg-[#fff8ee]/96 px-3 py-2 text-[15px] text-[#24130d] outline-none focus:border-[#4b120f] ${extra}`;
}

function Ornament({ className = '' }) {
  return (
    <div className={`mx-auto flex w-[130px] items-center gap-3 text-[#6b4a32] ${className}`}>
      <span className="h-px flex-1 bg-[#9d805d]" />
      <span className="text-[20px] leading-none">&loz;</span>
      <span className="h-px flex-1 bg-[#9d805d]" />
    </div>
  );
}

function VerseButtons({ currentVerse, onSelect }) {
  return (
    <div className="grid gap-3 px-4 py-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8 lg:py-6">
      {verses.map((verse, index) => {
        const verseNumber = index + 1;
        return (
          <button
            key={verse[0]}
            type="button"
            onClick={() => onSelect(verseNumber)}
            className={`border px-5 py-3 text-[15px] font-bold uppercase tracking-[0.08em] shadow-sm ${
              currentVerse === verseNumber
                ? 'border-[#4b120f] bg-[#4b120f] text-[#f6dfbd]'
                : 'border-[#8b6a3d] bg-[#f7e9d2] text-[#4b120f] hover:bg-[#f2dec0]'
            }`}
          >
            Verse {verseNumber}
          </button>
        );
      })}
    </div>
  );
}

function PublicistCard({ currentVerse }) {
  const verse = verses[currentVerse - 1];

  return (
    <aside className="h-full border-t border-[#d6c0a0] bg-[#f4e7d1]/72 px-5 py-8 text-center sm:px-8 lg:border-l lg:border-t-0">
      <div className="mx-auto flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#5b3a22] text-[#f6dfbd]">
        <span className="text-[34px]" aria-hidden="true">&#9993;</span>
      </div>
      <h2 className="mt-5 text-[23px] font-bold uppercase leading-tight tracking-[0.05em] text-[#4a3426]">
        Publicist Contact
      </h2>
      <Ornament className="my-4" />

      <div className="mx-auto mt-7 max-w-[250px] space-y-7 text-left text-[#3b2a20]">
        <div className="grid grid-cols-[32px_minmax(0,1fr)] gap-3">
          <span className="pt-1 text-[24px] text-[#6b4a32]" aria-hidden="true">&#9817;</span>
          <div>
            <p className="text-[16px] font-bold leading-tight">Johanna Castillo</p>
            <p className="text-[13px] font-semibold text-[#6b4a32]">Publicist</p>
          </div>
        </div>
        <div className="grid grid-cols-[32px_minmax(0,1fr)] gap-3">
          <span className="pt-1 text-[22px] text-[#6b4a32]" aria-hidden="true">&#9993;</span>
          <div>
            <p className="text-[16px] font-bold leading-tight">Email</p>
            <a className="break-words text-[13px] font-semibold text-[#6b4a32] no-underline" href={`mailto:${publicistEmail}`}>
              {publicistEmail}
            </a>
          </div>
        </div>
      </div>

      <blockquote className="mx-auto mt-10 max-w-[270px] border-t border-[#cbb28e] pt-7 text-center text-[16px] italic leading-relaxed text-[#6b4a32]">
        <span className="mb-2 block text-[42px] leading-none text-[#c6ad86]" aria-hidden="true">&ldquo;</span>
        Commit to the LORD whatever you do, and your plans will succeed.
        <span className="mt-2 block text-[15px] not-italic">&mdash; Proverbs 16:3 NIV</span>
      </blockquote>
      <div className="sr-only">
        <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#7b2a1a]">Selected Scripture</p>
        <p className="mt-2 font-bold text-[#4b120f]">{verse[0]}</p>
        <p className="mt-2 text-[16px] italic leading-relaxed text-[#24130d]">{verse[1]}</p>
      </div>
    </aside>
  );
}

function ShortStoriesPanel() {
  return (
    <section className="relative mt-8 overflow-hidden border border-[#b19670] bg-[#f1dfc4]/88 text-[#2c1912] shadow-sm">
      <span className="absolute left-3 top-3 h-8 w-8 border-l border-t border-[#9d805d]" aria-hidden="true" />
      <span className="absolute right-3 top-3 h-8 w-8 border-r border-t border-[#9d805d]" aria-hidden="true" />
      <span className="absolute bottom-3 left-3 h-8 w-8 border-b border-l border-[#9d805d]" aria-hidden="true" />
      <span className="absolute bottom-3 right-3 h-8 w-8 border-b border-r border-[#9d805d]" aria-hidden="true" />

      <div className="relative grid min-h-[220px] lg:min-h-[260px] lg:grid-cols-[420px_minmax(0,1fr)_270px]">
        <img
          className="h-full min-h-[210px] w-full object-cover object-center lg:min-h-[260px]"
          src="images/cowboybook.png"
          alt="Books, hat, notebook, and pen"
        />
        <div className="flex flex-col justify-center px-5 py-7 text-center sm:px-6 lg:px-10 lg:py-8 lg:text-left">
          <h2 className="text-[24px] font-bold uppercase leading-tight tracking-[0.04em] text-[#24130d] md:text-[38px] md:tracking-[0.06em]">
            Want to Read Ronny's Short Stories?
          </h2>
          <Ornament className="my-4 lg:mx-0" />
          <p className="max-w-[650px] text-[18px] font-semibold leading-snug text-[#3b2a20] md:text-[23px]">
            Ronny enjoys sharing stories that inspire, encourage, and reflect real-life lessons.
          </p>
          <p className="mt-5 max-w-[650px] text-[17px] leading-snug text-[#3b2a20] md:text-[22px]">
            If you'd like to read some of his short stories, <strong>just send us a message!</strong>
          </p>
          <p className="mt-4 max-w-[650px] text-[17px] leading-snug text-[#3b2a20] md:text-[22px]">
            We'll be happy to send you the download links.
          </p>
        </div>
        <div className="hidden items-center justify-center pr-10 lg:flex">
          <img
            className="h-[220px] w-[190px] object-contain opacity-70"
            src="images/quill_inkwell_true_transparent.png"
            alt=""
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}

function OrderBooksPanel() {
  return (
    <section className="relative mt-3 overflow-hidden border border-[#b19670] bg-[#f1dfc4]/88 p-6 text-[#2c1912] shadow-sm md:px-8 md:py-6">
      <span className="absolute left-3 top-3 h-8 w-8 border-l border-t border-[#9d805d]" aria-hidden="true" />
      <span className="absolute right-3 top-3 h-8 w-8 border-r border-t border-[#9d805d]" aria-hidden="true" />
      <span className="absolute bottom-3 left-3 h-8 w-8 border-b border-l border-[#9d805d]" aria-hidden="true" />
      <span className="absolute bottom-3 right-3 h-8 w-8 border-b border-r border-[#9d805d]" aria-hidden="true" />

      <div className="relative grid gap-5 md:grid-cols-[84px_minmax(0,1fr)_290px] md:items-center">
        <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#5b3a22] text-[#e4b64d] md:mx-0">
          <span className="text-[42px]" aria-hidden="true">&#128722;</span>
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-[24px] font-bold uppercase leading-tight tracking-[0.05em] text-[#4a3426] md:text-[28px]">
            Order Ronny's Books
          </h2>
          <p className="mt-2 text-[15px] leading-snug text-[#4b3425] md:text-[16px]">
            You can purchase Ronny's stocked books directly online by visiting the store.
            Browse currently available titles and have them delivered right to your door!
          </p>
        </div>
        <div className="text-center">
          <a
            href="#/books"
            className="inline-flex w-full max-w-[250px] items-center justify-center gap-2 border border-[#d7a94a] bg-gradient-to-b from-[#e3bd67] to-[#b9852d] px-5 py-3 text-[15px] font-bold uppercase tracking-[0.04em] text-[#3a160f] no-underline shadow-[0_2px_0_rgba(0,0,0,.25)] sm:min-w-[250px] sm:text-[16px]"
          >
            Order Ronny's Books <span aria-hidden="true">&#128722;</span>
          </a>
          <p className="mt-3 text-[13px] italic leading-snug text-[#4b3425]">
            Thank you for supporting Ronny's writing and sharing his message.
          </p>
        </div>
      </div>
    </section>
  );
}

export function ContactPage() {
  const [currentVerse, setCurrentVerse] = useState(1);
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const [form, setForm] = useState({
    topic: '',
    name: '',
    email: '',
    message: '',
  });

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const submittedForm = event.currentTarget;
    const submittedData = new FormData(submittedForm);

    if (submittedData.get('botcheck')) {
      setSubmitStatus('success');
      setSubmitMessage('Message sent. Thank you.');
      return;
    }

    if (!web3FormsAccessKey) {
      setSubmitStatus('error');
      setSubmitMessage('Web3Forms access key is not configured yet.');
      return;
    }

    setSubmitStatus('sending');
    setSubmitMessage('');

    try {
      const response = await fetch(web3FormsEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: web3FormsAccessKey,
          from_name: 'Ronny Website Contact',
          subject: `Ronny Website Contact: ${form.topic || 'Website contact'}`,
          name: form.name,
          email: form.email,
          message: form.message,
          recipient: contactRecipientEmail,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Web3Forms could not send the message.');
      }

      setSubmitStatus('success');
      setSubmitMessage('Message sent. Thank you.');
      setForm({
        topic: '',
        name: '',
        email: '',
        message: '',
      });
    } catch {
      setSubmitStatus('error');
      setSubmitMessage('Message could not be submitted. Please try again later.');
    }
  }

  return (
    <main className="bg-[#eadfcb] text-[#2c1912]">
      <div
        className="mx-auto max-w-[1440px] pb-10"
        style={{
          backgroundColor: '#eadfcb',
          backgroundImage: 'linear-gradient(rgba(245,232,213,.88), rgba(245,232,213,.88)), url("images/homebg1.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <VerseButtons currentVerse={currentVerse} onSelect={setCurrentVerse} />

        <div className="px-4 sm:px-6 md:px-8">
          <Panel className="overflow-hidden p-0 md:p-0">
            <div className="grid lg:grid-cols-[minmax(0,1fr)_360px]">
              <section className="px-5 py-8 text-center sm:px-8 md:px-16">
                <h1 className="text-[27px] font-bold uppercase leading-tight tracking-[0.04em] text-[#4a3426] md:text-[36px] md:tracking-[0.06em]">
                  Send a Message
                </h1>
                <p className="mx-auto mt-3 max-w-[600px] text-[15px] leading-snug text-[#4b3425] md:text-[16px]">
                  Have a question, want to invite Ronny to speak, or just want to say hello? Fill out the form below and we'll get back to you as soon as possible.
                </p>
                <Ornament className="my-4" />

                <form className="mx-auto mt-5 grid max-w-[660px] gap-4" onSubmit={handleSubmit}>
                  <FormField label="Name *">
                    <input
                      className={inputClasses()}
                      name="name"
                      placeholder="Your full name"
                      type="text"
                      value={form.name}
                      onChange={(event) => updateField('name', event.target.value)}
                      required
                    />
                  </FormField>

                  <FormField label="Email *">
                    <input
                      className={inputClasses()}
                      name="email"
                      placeholder="Your email address"
                      type="email"
                      value={form.email}
                      onChange={(event) => updateField('email', event.target.value)}
                      required
                    />
                  </FormField>

                  <FormField label="Subject">
                    <input
                      className={inputClasses()}
                      name="subject"
                      placeholder="What is this regarding?"
                      type="text"
                      value={form.topic}
                      onChange={(event) => updateField('topic', event.target.value)}
                    />
                  </FormField>

                  <FormField label="Message *">
                    <textarea
                      className={inputClasses('min-h-[130px] resize-y leading-relaxed')}
                      name="message"
                      placeholder="Type your message here..."
                      value={form.message}
                      onChange={(event) => updateField('message', event.target.value)}
                      required
                    />
                  </FormField>
                  <input
                    className="hidden"
                    type="checkbox"
                    name="botcheck"
                    tabIndex="-1"
                    autoComplete="off"
                  />

                  <div className="pt-1 text-center">
                    <button
                      type="submit"
                      disabled={submitStatus === 'sending'}
                      className="inline-flex w-full max-w-[280px] items-center justify-center gap-3 bg-[#4a2110] px-8 py-3 text-[13px] font-bold uppercase tracking-[0.08em] text-[#ead0ad] disabled:cursor-not-allowed disabled:opacity-70 sm:min-w-[280px]"
                    >
                      {submitStatus === 'sending' ? 'Sending...' : 'Send Message'} <span aria-hidden="true">&#9992;</span>
                    </button>
                    <p className="mt-3 text-[12px] text-[#6b4a32]">* Required fields</p>
                  </div>
                  {submitMessage && (
                    <p
                      className={`text-[14px] font-semibold ${submitStatus === 'success' ? 'text-[#225a28]' : 'text-[#8b1f18]'}`}
                      role="status"
                    >
                      {submitMessage}
                    </p>
                  )}
                </form>
              </section>

              <PublicistCard currentVerse={currentVerse} />
            </div>
          </Panel>

          <ShortStoriesPanel />
          <OrderBooksPanel />
        </div>
      </div>
    </main>
  );
}

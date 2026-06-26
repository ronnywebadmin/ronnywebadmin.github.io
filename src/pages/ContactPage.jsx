import { useState } from 'react';
import { verses } from '../data/verses';

const publicistEmail = 'jcastillo@exemplumcircle.com';
const alternateEmail = 'johanna.castillo7878@gmail.com';
const googleFormsEmail = 'ronnywebadmin@gmail.com';
const googleFormAction = import.meta.env.VITE_GOOGLE_FORM_ACTION;
const googleFormEntries = {
  topic: import.meta.env.VITE_GOOGLE_FORM_TOPIC_ENTRY,
  name: import.meta.env.VITE_GOOGLE_FORM_NAME_ENTRY,
  email: import.meta.env.VITE_GOOGLE_FORM_EMAIL_ENTRY,
  message: import.meta.env.VITE_GOOGLE_FORM_MESSAGE_ENTRY,
};

function PageTitle({ children }) {
  return (
    <h1 className="flex items-center justify-center gap-4 text-center text-[32px] font-bold uppercase tracking-[0.08em] text-[#281711] before:h-px before:flex-1 before:bg-[#5c3a26] before:content-[''] after:h-px after:flex-1 after:bg-[#5c3a26] after:content-[''] md:text-[46px]">
      {children}
    </h1>
  );
}

function ContactLink({ label, value }) {
  return (
    <div className="block border border-[#c7aa77]/70 bg-[#f4ecde]/70 px-4 py-4 text-left shadow-sm">
      <span className="block text-[12px] font-bold uppercase tracking-[0.12em] text-[#7b2a1a]">{label}</span>
      <span className="mt-1 block break-words text-[17px] font-semibold leading-snug text-[#2d1a12]">{value}</span>
    </div>
  );
}

function FormField({ label, children }) {
  return (
    <label className="block text-left">
      <span className="mb-2 block text-[12px] font-bold uppercase tracking-[0.12em] text-[#7b2a1a]">{label}</span>
      {children}
    </label>
  );
}

export function ContactPage() {
  const [currentVerse, setCurrentVerse] = useState(1);
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const [form, setForm] = useState({
    topic: 'Speaking inquiry',
    name: '',
    email: '',
    message: '',
  });

  const verse = verses[currentVerse - 1];

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!googleFormAction || Object.values(googleFormEntries).some((entry) => !entry)) {
      setSubmitStatus('error');
      setSubmitMessage('Google Forms is not configured yet.');
      return;
    }

    setSubmitStatus('sending');
    setSubmitMessage('');

    try {
      const formData = new FormData();
      formData.append(googleFormEntries.topic, form.topic);
      formData.append(googleFormEntries.name, form.name);
      formData.append(googleFormEntries.email, form.email);
      formData.append(googleFormEntries.message, form.message);

      await fetch(googleFormAction, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });

      setSubmitStatus('success');
      setSubmitMessage('Message submitted. Thank you.');
      setForm({
        topic: 'Speaking inquiry',
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
    <main
      className="min-h-screen bg-[#4b2c20] bg-cover bg-fixed bg-top px-4 py-10 text-[#2c1912] md:px-6 md:py-14"
      style={{ backgroundImage: 'url("images/BG-VERSE.jpg")' }}
    >
      <div className="mx-auto max-w-[1120px] px-4 py-8 md:px-8 md:py-10">
        <PageTitle>Contacts</PageTitle>

        <div className="mx-auto mt-6 max-w-[720px] text-center text-[17px] leading-relaxed text-[#3a2a1f] md:text-[20px]">
          <p>
            For speaking invitations, media requests, reader notes, and publishing questions, please reach out through the publicist contact below or send a message with the form.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="space-y-6">
            <section className="border border-[#c7aa77]/70 bg-[#f4ecde]/72 p-5 shadow-lg md:p-6">
              <h2 className="text-[24px] font-bold uppercase tracking-[0.05em] text-[#281711]">Start Here</h2>
              <p className="mt-3 text-[16px] leading-relaxed text-[#3a2a1f]">
                Include your event date, location, audience, and the best way to reply. For reader correspondence, a brief note is enough.
              </p>
              <div className="mt-5 grid gap-3">
                <ContactLink label="Publicist" value="Johanna Castillo" />
                <ContactLink label="Primary Email" value={publicistEmail} />
                <ContactLink label="Alternate Email" value={alternateEmail} />
              </div>
            </section>

            <section className="border border-[#c7aa77]/70 bg-[#f4ecde]/72 p-5 shadow-lg md:p-6">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-[22px] font-bold uppercase tracking-[0.05em] text-[#281711]">Scripture</h2>
                <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#7b2a1a]">Verse {currentVerse}</span>
              </div>
              <blockquote className="mt-4 text-[18px] italic leading-relaxed text-[#2d1a12]">
                <strong className="mb-2 block not-italic text-[#6d1f18]">{verse[0]}</strong>
                {verse[1]}
              </blockquote>
              <div className="mt-5 grid grid-cols-4 gap-2">
                {verses.map((_, index) => {
                  const verseNumber = index + 1;
                  return (
                    <button
                      key={verseNumber}
                      type="button"
                      onClick={() => setCurrentVerse(verseNumber)}
                      className={`border px-3 py-2 text-[12px] font-bold uppercase tracking-[0.08em] ${currentVerse === verseNumber ? 'border-[#4b120f] bg-[#4b120f] text-[#f2d7b5]' : 'border-[#8b6a3d] bg-[#f8efdf]/70 text-[#4b120f]'}`}
                    >
                      {verseNumber}
                    </button>
                  );
                })}
              </div>
            </section>
          </aside>

          <section className="border border-[#c7aa77]/70 bg-[#f4ecde]/82 p-5 shadow-xl md:p-7">
            <div className="mb-6">
              <h2 className="text-[28px] font-bold uppercase tracking-[0.05em] text-[#281711]">Send a Message</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-[#5b3f2a]">
                This submits directly to Google Forms without opening an email app.
              </p>
            </div>

            <form className="grid gap-5" onSubmit={handleSubmit}>
              <FormField label="Inquiry Type">
                <select
                  className="w-full border border-[#8b6a3d] bg-[#fff8ec]/90 px-3 py-3 text-[16px] text-[#2d1a12] outline-none focus:border-[#4b120f]"
                  value={form.topic}
                  onChange={(event) => updateField('topic', event.target.value)}
                >
                  <option>Speaking inquiry</option>
                  <option>Media request</option>
                  <option>Reader message</option>
                  <option>Publishing question</option>
                  <option>General contact</option>
                </select>
              </FormField>

              <div className="grid gap-5 md:grid-cols-2">
                <FormField label="Name">
                  <input
                    className="w-full border border-[#8b6a3d] bg-[#fff8ec]/90 px-3 py-3 text-[16px] text-[#2d1a12] outline-none focus:border-[#4b120f]"
                    type="text"
                    value={form.name}
                    onChange={(event) => updateField('name', event.target.value)}
                    required
                  />
                </FormField>

                <FormField label="Email">
                  <input
                    className="w-full border border-[#8b6a3d] bg-[#fff8ec]/90 px-3 py-3 text-[16px] text-[#2d1a12] outline-none focus:border-[#4b120f]"
                    type="email"
                    value={form.email}
                    onChange={(event) => updateField('email', event.target.value)}
                    required
                  />
                </FormField>
              </div>

              <FormField label="Message">
                <textarea
                  className="min-h-[190px] w-full resize-y border border-[#8b6a3d] bg-[#fff8ec]/90 px-3 py-3 text-[16px] leading-relaxed text-[#2d1a12] outline-none focus:border-[#4b120f]"
                  value={form.message}
                  onChange={(event) => updateField('message', event.target.value)}
                  placeholder="Share the event details, media request, or message here."
                  required
                />
              </FormField>

              <div className="flex flex-col gap-3 border-t border-[#c7aa77] pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[13px] leading-snug text-[#5b3f2a]">
                  Responses are saved in Google Forms for {googleFormsEmail}.
                </p>
                <button
                  type="submit"
                  disabled={submitStatus === 'sending'}
                  className="border border-[#f0c76a] bg-gradient-to-b from-[#d9ad4e] to-[#a97724] px-6 py-3 text-[13px] font-bold uppercase tracking-[0.08em] text-[#3a160f] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
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
        </div>
      </div>
    </main>
  );
}

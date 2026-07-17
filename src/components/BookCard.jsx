export function BookCard({ book, coming = false }) {
  return (
    <article className="grid h-full grid-cols-[104px_minmax(0,1fr)] gap-5 border border-[#5a3d2b] bg-[#fff8ec]/82 p-4 text-left shadow-sm">
      <img className="h-[158px] w-[104px] border border-[#c8aa75] object-cover shadow-md" src={book.img} alt={book.alt} />
      <div className="flex min-h-[158px] min-w-0 flex-col items-start">
        <h3 className="text-[20px] font-bold uppercase leading-tight text-[#281711]">{book.title}</h3>
        <p className="mt-2 text-[15px] leading-snug text-[#3a2a1f]">{coming ? 'Coming soon' : book.text}</p>
        {!coming && (
          <a href={book.url} target="_blank" rel="noopener noreferrer" className="mt-auto inline-block bg-[#4a3426] px-4 py-2 text-[13px] font-semibold text-[#e5c7a1] no-underline">Amazon</a>
        )}
        {coming && (
          <span className="mt-auto inline-block border border-[#8b6a3d] px-4 py-2 text-[12px] font-bold uppercase tracking-[0.08em] text-[#6a2418]">Coming Soon</span>
        )}
      </div>
    </article>
  );
}

export function BookCard({ book, coming = false }) {
  return (
    <div className="flex gap-4 border border-[#5a3d2b] bg-[#fff8ec]/80 p-4 text-left max-md:flex-col max-md:items-center max-md:text-center">
      <img className="w-[100px] max-md:w-[140px]" src={book.img} alt={book.alt} />
      <div>
        <h3 className="text-xl font-bold uppercase text-[#281711]">{book.title}</h3>
        <p>{coming ? 'COMING SOON' : book.text}</p>
        {!coming && (
          <a href={book.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block bg-[#4a3426] px-4 py-2 text-[13px] text-[#e5c7a1] no-underline">Amazon</a>
        )}
      </div>
    </div>
  );
}

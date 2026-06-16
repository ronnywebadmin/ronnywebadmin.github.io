export function BookGroup({ title, books, coming = false }) {
  return (
    <div className={`book-group ${coming ? 'coming-books' : 'current-books'}`}>
      <h3>{title}</h3>
      <div className="book-strip">
        {books.map(([img, titleText]) => (
          <figure key={titleText}>
            <img src={img} alt={`${titleText} book cover`} />
            <figcaption>{titleText}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

import { BookCard } from "../Accessories/BookCards";

export const Books = ({
  activeGenre,
  allBooks,
  fictionBooks,
  philosophyBooks,
  artBooks,
}) => {
  const getBooks = () => {
    switch (activeGenre) {
      case "Fiction":
        return fictionBooks;
      case "Science":
        return philosophyBooks;
      case "Buisness":
        return artBooks;
      case "All Genres":
      default:
        return allBooks;
    }
  };

  const booksToShow = getBooks();

  return (
    <section className="mx-auto max-w-7xl px-6 py-10 space-y-20">
      <h2 className="text-2xl font-serif mb-6">{activeGenre}</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {booksToShow?.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
};

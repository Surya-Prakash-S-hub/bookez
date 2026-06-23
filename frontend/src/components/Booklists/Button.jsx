
export const BookButton = ({ activeGenre, setActiveGenre }) => {
  const genres = [
    "All Genres",
    "Fiction",
    "Science",
    "Buisness",
  ];
  return (
    <>
      <section className="bg-soft py-5 bg-gray-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap gap-4">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setActiveGenre(genre)}
                className={`px-2 py-1 text-sm transition-colors ${ activeGenre === genre ? "border-b-2 border-brand font-semibold text-ink" : "font-medium text-ink/60 hover:text-ink cursor-pointer"
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};


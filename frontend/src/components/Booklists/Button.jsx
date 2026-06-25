import { ChevronRight } from "lucide-react";
export const BookButton = ({ activeGenre, setActiveGenre }) => {
  const genres = [
    "All Genres",
    "Fiction",
    "Science",
    "Buisness",
  ];
  return (
    <>
      <section className=" py-1">
        <div className="mx-auto my-0 max-w-345">
          <div className="flex align-middle justify-between py-5" >
            <div className="font-medium useFontHere text-neutral-800 text-2xl" >New Release</div>
            <div>
              <a href="#" className="morelinks text-[16px] uppercase flex text-red-500" >view all
                <ChevronRight className="font-medium rightarrow" />
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mb-5">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setActiveGenre(genre)}
                className={`px-2 py-1 text-[16px] text-neutral-500 transition-colors ${ activeGenre === genre ? "border-b-3 border-red-500 font-semibold text-red-400 " : "font-medium cursor-pointer"
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


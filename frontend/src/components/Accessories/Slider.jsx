import { useState, useEffect } from "react";
import { ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";
import book1 from "../../assets/images/book1.jpg";
import book2 from "../../assets/images/book3.jpg";
import book3 from "../../assets/images/book8.jpg";
import book4 from "../../assets/images/book9.jpg";
import book5 from "../../assets/images/book10.jpg";

export const Slider = () => {
  const books = [
    {
      title: "The Silent Forest",
      author: "Elena Vance",
      category: "Contemporary Fiction",
      quote: "A hushed, luminous debut about what the woods remember.",
      price: 18,
      oldPrice: 24,
      image: book1,
      badge: "Editor's Pick",       
    },
    {
      title: "The Ink Trail",
      author: "Sarah Chen",
      category: "Contemporary Fiction",
      quote: "Lines that linger like ink bleeding into rain-wet paper.",
      price: 21,
      oldPrice: 30,
      image: book2,
      badge: "Staff Favorite",
    },
    {
      title: "House of Mirrors",
      author: "Theo Park",
      category: "Philosophy",
      quote: "Refracted truths and the architecture of doubt.",
      price: 34,
      image: book3,
      badge: "Now Reading",
    },
    {
      title: "Letters from the North",
      author: "Ingrid Voss",
      category: "Biography",
      quote: "Letters from a vanishing winter — quiet, fierce, alive.",
      price: 22.1,
      oldPrice: 26,
      image: book4,
      badge: "Just Arrived",
    },
    {
      title: "The Cartographer",
      author: "Owen Hale",
      category: "Biography",
      quote: "An atlas of the imagination, mapped by a singular voice.",
      price: 38,
      image: book5,
      badge: "Folio Selects",
    },
  ];
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % books.length);
    }, 5500);

    return () => clearInterval(interval);
  }, [books.length]);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % books.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev === 0 ? books.length - 1 : prev - 1));
  };

  const book = books[active];
  return (
    <section className="mx-auto max-w-7xl m-4 rounded-xl px-6 py-6 bg-gray-100">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        {/* Left Content */}
        <div className="min-h-87.5 flex items-center">
          <div key={active} className="space-y-6 animate-fade">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
              {book.badge} · {active + 1} / {books.length}
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif">
              {book.title}
            </h1>

            <p className="text-sm uppercase tracking-widest text-gray-500">
              by {book.author} · {book.category}
            </p>

            <p className="text-xl italic text-gray-600 max-w-md">
              "{book.quote}"
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-serif">${book.price}</span>

                {book.oldPrice && (
                  <span className="line-through text-gray-400">
                    ${book.oldPrice}
                  </span>
                )}
              </div>

              <button className="flex items-center gap-2 bg-black px-8 py-4 text-white hover:bg-red-500 transition">
                <ShoppingBag size={18} />
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <div className="group relative mx-auto w-full max-w-70 aspect-4/5 overflow-hidden">
            <img
              src={book.image}
              alt={book.title}
              className="h-full w-full object-cover transition-all duration-700"
            />

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white shadow"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white shadow"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="mt-6 flex justify-center gap-3">
            {books.map((item, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`h-14 w-10 overflow-hidden transition-all ${
                  active === index
                    ? "scale-110 ring-2 ring-black"
                    : "opacity-50 hover:opacity-100"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mx-auto mt-4 h-1 w-40 bg-gray-200 overflow-hidden">
            <div key={active} className="h-full bg-black animate-progress" />
          </div>
        </div>
      </div>
    </section>
  );
};

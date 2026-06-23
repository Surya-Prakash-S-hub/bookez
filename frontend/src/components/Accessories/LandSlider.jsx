import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "../../assets/heroImg/slide-1.jpg";
import image2 from "../../assets/heroImg/slide-2.jpg";
import image3 from "../../assets/heroImg/slide-3.jpg";
import image4 from "../../assets/heroImg/slide-4.jpg";
import image5 from "../../assets/heroImg/slide-5.jpg";

export const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  const slides = [
    { title: "Where Stories Find a Home", img: image1, tag: "Bookshop" },
    { title: "Fresh Off the Press", img: image2, tag: "New" },
    { title: "Stories with a Past", img: image3, tag: "Vintage" },
    { title: "Slow Sundays", img: image4, tag: "Reading" },
    { title: "Floor-to-Ceiling Worlds", img: image5, tag: "Library" },
  ];

  // 🔥 AUTO SLIDE
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000); // change every 3 sec

    return () => clearInterval(timer); // cleanup
  }, [slides.length]);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full h-100 overflow-hidden">
      <div
        className="flex transition-transform duration-700 h-full"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((s, i) => (
          <div key={i} className="min-w-full h-full relative">

            <img
              src={s.img}
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50" />

            <div className="relative z-10 flex items-center h-full px-50 text-white">
              <div>
                <span className="text-xs bg-white/10 px-3 py-1 rounded-full">
                  {s.tag}
                </span>

                <h2 className="text-4xl font-serif mt-4">
                  {s.title}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="absolute cursor-pointer text-white bg-neutral-500 left-4 top-1/2 p-2 rounded-3xl -translate-y-1/2">
        <ChevronLeft />
      </button>

      <button onClick={nextSlide} className="absolute cursor-pointer bg-gray-500 text-white right-4 top-1/2 p-2 rounded-3xl -translate-y-1/2">
        <ChevronRight />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              index === i ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
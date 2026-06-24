import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import image1 from "../../assets/banners/banner1.webp";
import image2 from "../../assets/banners/banner2.gif";
import image3 from "../../assets/banners/banner3.webp";
import image4 from "../../assets/banners/banner4.webp";
import image5 from "../../assets/banners/banner5.gif";

export const HeroSlider = () => {
  const slides = [image1, image2, image3, image4, image5];
  const sliderData = [...slides, slides[0]];

  const [index, setIndex] = useState(0);
  const [transition, setTransition] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    if (index < slides.length) {
      setIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (index === 0) {
      setTransition(false);
      setIndex(slides.length - 1);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransition(true);
        });
      });
    } else {
      setIndex((prev) => prev - 1);
    }
  };

  const handleTransitionEnd = () => {
    if (index === slides.length) {
      setTransition(false);
      setIndex(0);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransition(true);
        });
      });
    }
  };

  return (
    <>
      <section className="group relative mx-auto h-109 max-w-[1800px] overflow-hidden">
        <div
          onTransitionEnd={handleTransitionEnd}
          className={`flex h-full ${
            transition ? "transition-transform duration-700 ease-in-out" : ""
          }`}
          style={{
            transform: `translate3d(-${index * 100}%, 0, 0)`,
          }}
        >
          {sliderData.map((img, i) => (
            <div key={i} className="h-full min-w-full shrink-0">
              <img
                src={img}
                alt={`slide-${i}`}
                className="block h-full w-full object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Previous */}
        <button
          onClick={prevSlide}
          className="
        absolute left-4 top-1/2 z-20
        -translate-y-1/2
        rounded-full bg-black/50 p-3 text-white
        opacity-0 transition-all duration-300
        group-hover:opacity-100
      "
        >
          <ChevronLeft size={22} />
        </button>

        {/* Next */}
        <button
          onClick={nextSlide}
          className="
        absolute right-4 top-1/2 z-20
        -translate-y-1/2
        rounded-full bg-black/50 p-3 text-white
        opacity-0 transition-all duration-300
        group-hover:opacity-100
      "
        >
          <ChevronRight size={22} />
        </button>
      </section>
      <div className="mt-4 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index % slides.length === i ? "w-8 bg-red-500" : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </>
  );
};

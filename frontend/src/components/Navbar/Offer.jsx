import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bgImg from "../../assets/beginner.png";

export const TopNav = () => {
  const slides = [
    {
      offer: "Unlock the Best Offer for your order at checkout. T&C apply.",
      image: bgImg,
    },
    {
      offer: "100% Original Books! Direct From Publishers.",
      image: bgImg,
    },
    {
      offer: "Free Shipping on Orders Above ₹999.",
      image: bgImg,
    },
    {
      offer: "Get Extra Discounts on Bestsellers.",
      image: bgImg,
    },
  ];

  const sliderData = [...slides, slides[0]];

  const [index, setIndex] = useState(0);
  const [transition, setTransition] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => prev + 1);
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
    <section className="group relative h-9 overflow-hidden bg-black">
      <div
        onTransitionEnd={handleTransitionEnd}
        className={`flex h-full ${
          transition ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {sliderData.map((slide, i) => (
          <div
            key={i}
            className="relative flex min-w-full items-center justify-center h-full shrink-0"
          >
            <img
              src={slide.image}
              alt={`slide-${i}`}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0" />

            <p className="relative z-10 text-center text-sm text-white font-medium">
              {slide.offer}
            </p>
          </div>
        ))}
      </div>

      {/* Previous */}
      <button
        onClick={prevSlide}
        className="
          absolute left-3 top-1/2 z-20
          -translate-y-1/2
          text-white opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
        "
      >
        <ChevronLeft size={18} />
      </button>

      {/* Next */}
      <button
        onClick={nextSlide}
        className="
          absolute right-3 top-1/2 z-20
          -translate-y-1/2
          text-white opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
        "
      >
        <ChevronRight size={18} />
      </button>
    </section>
  );
};
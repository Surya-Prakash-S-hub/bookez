import BannerImg from "../../assets/images/promo2.jpg";
import book1 from "../../assets/images/book2.jpg";
import book2 from "../../assets/images/book5.jpg";
import book3 from "../../assets/images/book8.jpg";
import book4 from "../../assets/images/book7.jpg";

export const Slideslide = () => {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="overflow-hidden rounded-sm bg-gray-100">
          <div className="grid md:grid-cols-2">
            <div className="order-2 flex flex-col justify-center p-8 md:order-1 md:p-12">
              <span className="mb-2 text-xs font-semibold uppercase tracking-widest text-orange-500">
                Gift Season
              </span>

              <h2 className="mb-4 font-serif text-3xl md:text-4xl">
                The Perfect Gift Bundle
              </h2>

              <p className="mb-8 max-w-md text-gray-600">
                Hand-picked trios for the readers in your life. Wrapped,
                ribboned, and ready to give.
              </p>

              <div className="flex gap-4">
                <button
                  class="group relative w-20 shrink-0 md:w-24"
                  title="Add fantasy Forms to cart"
                >
                  <div class="aspect-2/3 overflow-hidden rounded-sm shadow-lg">
                    <img
                      src={book1}
                      alt="Modernist Forms"
                      width="192"
                      height="288"
                      class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <span class="mt-2 block text-center text-[10px] font-medium">
                    $32.00
                  </span>
                </button>
                <button
                  class="group relative w-20 shrink-0 md:w-24"
                  title="Add loreum book to the cart"
                >
                  <div class="aspect-2/3 overflow-hidden rounded-sm shadow-lg">
                    <img
                      src={book2}
                      alt="Modernist Forms"
                      width="192"
                      height="288"
                      class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <span class="mt-2 block text-center text-[10px] font-medium">
                    $32.00
                  </span>
                </button>
                <button
                  class="group relative w-20 shrink-0 md:w-24"
                  title="Add Modernist Forms to cart"
                >
                  <div class="aspect-2/3 overflow-hidden rounded-sm shadow-lg">
                    <img
                      src={book3}
                      alt="Modernist Forms"
                      width="192"
                      height="288"
                      class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <span class="mt-2 block text-center text-[10px] font-medium">
                    $32.00
                  </span>
                </button>
                <button
                  class="group relative w-20 shrink-0 md:w-24"
                  title="Add Modernist Forms to cart"
                >
                  <div class="aspect-2/3 overflow-hidden rounded-sm shadow-lg">
                    <img
                      src={book4}
                      alt="Modernist Forms"
                      width="192"
                      height="288"
                      class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <span class="mt-2 block text-center text-[10px] font-medium">
                    $32.00
                  </span>
                </button>
              </div>

              <button className="mt-8 self-start bg-black px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-500">
                Build a Bundle
              </button>
            </div>

            <div className="relative order-1 h-64 md:order-2 md:h-auto">
              <img
                src={BannerImg}
                alt="Gift wrapped books"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-l from-transparent to-gray-100/40 md:bg-linear-to-r" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

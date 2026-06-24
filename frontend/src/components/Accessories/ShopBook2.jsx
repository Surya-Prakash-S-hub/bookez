import BannerImg from "../../assets/images/promo1.jpg";
import book1 from "../../assets/images/book4.jpg";
import book2 from "../../assets/images/book1.jpg";
import book3 from "../../assets/images/book10.jpg";
import book4 from "../../assets/images/book5.jpg";

export const Slideslide2 = () => {
    return(
        <>
            <section className="mx-auto max-w-7xl px-6 py-12">
                    <div className="overflow-hidden rounded-sm bg-[#3d2b1f]">
                      <div className="grid md:grid-cols-2">
                        <div className="relative h-64 md:h-auto">
                          <img
                            src={BannerImg}
                            alt="Gift wrapped books"
                            className="h-full w-full object-cover"
                          />
            
                          <div className="absolute inset-0 bg-linear-to-l from-transparent to-gray-100/40 md:bg-linear-to-r" />
                        </div>
                        <div className="flex flex-col justify-center p-8 md:p-12">
                          <span className="mb-2 text-xs font-semibold uppercase tracking-widest text-amber-300">
                            Gift Season
                          </span>
            
                          <h2 className="mb-4 font-serif text-3xl md:text-4xl text-gray-200">
                            The Perfect Gift Bundle
                          </h2>
            
                          <p className="mb-8 max-w-md text-gray-400">
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
                              <span class="mt-2 block text-center text-gray-300 text-[10px] font-medium">
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
                              <span class="mt-2 block text-center text-[10px] text-gray-300 font-medium">
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
                              <span class="mt-2 block text-center text-gray-300 text-[10px] font-medium">
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
                              <span class="mt-2 block text-center text-gray-300 text-[10px] font-medium">
                                $32.00
                              </span>
                            </button>
                          </div>
            
                          <button className="mt-8 self-start bg-amber-500 px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-amber-300 hover:text-gray-500">
                            Build a Bundle
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
        </>
    )
}
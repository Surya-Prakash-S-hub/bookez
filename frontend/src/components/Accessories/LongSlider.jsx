import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { Navigation } from "swiper/modules";
import img1 from "../../assets/SlideBanner/slide1.jpg";
import img2 from "../../assets/SlideBanner/slide2.jpg";
import img3 from "../../assets/SlideBanner/slide3.jpg";
import img4 from "../../assets/SlideBanner/slide4.jpg";
import img5 from "../../assets/SlideBanner/slide5.jpg";
import img6 from "../../assets/SlideBanner/slide6.jpg";
import img7 from "../../assets/SlideBanner/slide7.jpg";

export const BookTrailerSlider = () => {
  return (
    <>
      <section className="w-full px-31">
        <div className="font-baskerville text-2xl mx-auto max-w-345 px-3 text-neutral-800 m-5" >
          Book Trailers
        </div>
        <div className="swiperlayout w-full mx-w-345 px-38 mb-8">
          <Swiper
            slidesPerView={5}
            spaceBetween={15}
            modules={[Navigation]}
            className="mySwiper"
            navigation={{
              hideOnClick : true
            }}
          >
            <SwiperSlide>
              <div>
                <a href="#">
                  <img src={img1} alt="booktrailer" />
                  <div></div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <a href="#">
                  <img src={img2} alt="booktrailer" />
                  <div></div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <a href="#">
                  <img src={img3} alt="booktrailer" />
                  <div></div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <a href="#">
                  <img src={img4} alt="booktrailer" />
                  <div></div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <a href="#">
                  <img src={img5} alt="booktrailer" />
                  <div></div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <a href="#">
                  <img src={img6} alt="booktrailer" />
                  <div></div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <a href="#">
                  <img src={img7} alt="booktrailer" />
                  <div></div>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

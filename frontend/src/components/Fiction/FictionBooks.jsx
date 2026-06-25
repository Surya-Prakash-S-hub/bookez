// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Navigation } from "swiper/modules";

import bookshop1 from "../../assets/DesignText/shop1.webp"
import bookshop2 from "../../assets/DesignText/shop2.webp"
import bookshop3 from "../../assets/DesignText/shop3.webp"
import bookshop4 from "../../assets/DesignText/shop4.webp"
import bookshop5 from "../../assets/DesignText/shop5.webp"  
import bookshop6 from "../../assets/DesignText/shop6.webp"
import bookshop7 from "../../assets/DesignText/shop7.webp"
import bookshop8 from "../../assets/DesignText/shop8.webp"
import bookshop9 from "../../assets/DesignText/shop9.webp"

export const MiniSlider = () => {
  return (
    <>
      <div className="h-45">
        <div className="font-baskerville text-2xl text-neutral-800 mt-7" >
          Shop By Publishers
        </div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide className="mainswiper">
            <a href="#" style={{padding:'15px'}}>
              <img src={bookshop1} alt="shoplist" />
            </a>
            <a href="#">
              <img src={bookshop2} alt="shoplist" />
            </a>
            <a href="#">
              <img src={bookshop3} alt="shoplist" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="mainswiper">
            <a href="#">
              <img src={bookshop4} alt="shoplist" />
            </a>
            <a href="#">
              <img src={bookshop5} alt="shoplist" />
            </a>
            <a href="#">
              <img src={bookshop6} alt="shoplist" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="mainswiper">
            <a href="#">
              <img src={bookshop7} alt="shoplist" />
            </a>
            <a href="#">
              <img src={bookshop8} alt="shoplist" />
            </a>
            <a href="#">
              <img src={bookshop9} alt="shoplist" />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

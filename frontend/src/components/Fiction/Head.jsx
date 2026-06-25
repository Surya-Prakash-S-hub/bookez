import { MiniSlider } from "./FictionBooks";
import fictionBanner from "../../assets/banners/birthday.jpg";
import birthImg1 from "../../assets/banners/birth1.jpg";
import birthImg2 from "../../assets/banners/birth2.jpg";
import birthImg3 from "../../assets/banners/birth3.jpg";
import birthImg4 from "../../assets/banners/birth4.jpg";
import birthImg5 from "../../assets/banners/birth5.jpg";
import birthImg6 from "../../assets/banners/birth6.jpg";

export const Fiction = () => {
  return (
    <>
      <section className="mx-auto max-w-345 px-2 py-3">
        <div className="h-30">
          <a href="#" className="mx-auto">
            <img
              src={fictionBanner}
              alt="fiction banner"
              className="rounded-lg"
            />
          </a>
        </div>
        <div className=" text-2xl py-5 px-3 font-baskerville">
          Birthday Bookstars
        </div>
        <div className="flex gap-5 px-3" >
          <a href="#">
            <img src={birthImg1} alt="birth1" className="rounded-xl" />
          </a>
          <a href="#">
            <img src={birthImg2} alt="birth2" className="rounded-xl" />
          </a>
          <a href="#">
            <img src={birthImg3} alt="birth3" className="rounded-xl" />
          </a>
          <a href="#">
            <img src={birthImg4} alt="birth4" className="rounded-xl" />
          </a>
          <a href="#">
            <img src={birthImg5} alt="birth5" className="rounded-xl" />
          </a>
          <a href="#">
            <img src={birthImg6} alt="birth6" className="rounded-xl" />
          </a>
        </div>
        <MiniSlider />
      </section>
    </>
  );
};

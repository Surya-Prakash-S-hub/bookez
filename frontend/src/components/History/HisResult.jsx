import historyBanner from "../../assets/banners/music.jpg";
import musicl1 from "../../assets/banners/music1.jpg";
import musicl2 from "../../assets/banners/music2.jpg";
import musicl3 from "../../assets/banners/music3.jpg";
import romcom from "../../assets/banners/romcom.jpg";
import { ChevronRight } from "lucide-react";
import { HistoryBooks } from "./HisBooks";

export const History = () => {
  return (
    <>
      <section className="mx-auto max-w-345 px-2 py-2">
        <div className="fantasybanner h-35">
          <a href="#" className="mx-auto">
            <img
              src={historyBanner}
              alt="history banner"
              className="rounded-lg"
            />
          </a>
        </div>
        <div className="mx-auto max-w-365 h-60 mt-9 flex align-middle">
          <div className="px-4">
            <a href="#">
              <img src={musicl1} className="rounded-xl" alt="musicpic1" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={musicl2} className="rounded-xl" alt="musicpic2" />
            </a>
          </div>
          <div className="px-4">
            <a href="#">
              <img src={musicl3} className="rounded-xl" alt="musicpic3" />
            </a>
          </div>
        </div>
        <div className="mt-7">
          <a href="#" className="mx-auto">
            <img
              src={romcom}
              alt="history banner"
              className="rounded-lg h-70"
            />
          </a>
        </div>
        <div className="mx-auto max-w-345 px-6 py-4 space-y-4">
          <div className="flex align-middle justify-between py-3">
            <div className="font-medium font-baskerville text-neutral-800 text-2xl">
              LGBTQ Romance Reads
            </div>
            <div>
              <a
                href="#"
                className="morelinks text-[16px] uppercase flex text-red-500"
              >
                view all
                <ChevronRight className="font-medium rightarrow" />
              </a>
            </div>
          </div>
          <HistoryBooks />
        </div>
        <div className="mx-auto max-w-345 px-6 py-4 space-y-4">
          <div className="flex align-middle justify-between py-3">
            <div className="font-medium font-baskerville text-neutral-800 text-2xl">
              Queer Non-Fiction Books
            </div>
            <div>
              <a
                href="#"
                className="morelinks text-[16px] uppercase flex text-red-500"
              >
                view all
                <ChevronRight className="font-medium rightarrow" />
              </a>
            </div>
          </div>
          <HistoryBooks />
        </div>
      </section>
    </>
  );
};

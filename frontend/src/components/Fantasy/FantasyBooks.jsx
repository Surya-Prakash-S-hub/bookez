import fantasybanner from "../../assets/banners/sports.jpg";
import { BookLists } from "./FanDetails";
import { ChevronRight } from "lucide-react";

export const Fantasy = () => {
  return (
    <>
      <section className="mx-auto max-w-345 px-2 py-6">
        <div className="fantasybanner h-70">
          <a href="#" className="mx-auto">
            <img src={fantasybanner} alt="fantasy" className="rounded-lg" />
          </a>
        </div>
        <div className="mx-auto max-w-345 px-6 py-6">
          <div className="flex align-middle justify-between py-5">
            <div className="font-medium font-baskerville text-neutral-800 text-2xl">
              Exam Prep
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
          <BookLists />
        </div>
      </section>
    </>
  );
};

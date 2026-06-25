import { BookLists } from "./ProBooks";
import ProgramBanner from "../../assets/banners/orders.jpg"
import yogaBanner from "../../assets/banners/yoga.jpg"
import { ChevronRight } from "lucide-react";
export const ProgramLists = () => {
  return (
    <>
      <section className="mx-auto max-w-345 px-2 py-2">
        <div className="fantasybanner h-35">
          <a href="#" className="mx-auto">
            <img src={ProgramBanner} alt="Programmer" className="rounded-lg" />
          </a>
        </div>
        <div className="fantasybanner mt-5 h-70">
          <a href="#" className="mx-auto">
            <img src={yogaBanner} alt="Programmer" className="rounded-lg" />
          </a>
        </div>  
        <div className="mx-auto max-w-345 px-6 py-6 space-y-6">
          <div className="flex justify-between">
            <div className="font-medium font-baskerville text-neutral-800 text-2xl">
              Indian Graphic Novels
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

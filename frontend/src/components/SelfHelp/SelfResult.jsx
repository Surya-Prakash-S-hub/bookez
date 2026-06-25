import selfhelpBanner from "../../assets/banners/bts.jpg";
import bestone from "../../assets/banners/best1.webp";
import besttwo from "../../assets/banners/best2.webp";
import { ChevronRight } from "lucide-react";
import { SelfHelpLists } from "./SelfBooks";

export const SelfHelp = () => {
  return (
    <>
      <section className="mx-auto max-w-345 px-2 py-4">
        <div className="fantasybanner h-65">
          <a href="#" className="mx-auto">
            <img
              src={selfhelpBanner}
              alt="selfhelp banner"
              className="rounded-lg"
            />
          </a>
        </div>
        <div className="text-2xl font-baskerville py-4 px-4">
          Best Books Of 2026 (So Far...)
        </div>
        <div className="flex justify-evenly gap-5">
          <a href="#" className="mx-auto">
            <img
              src={bestone}
              alt="selfhelp banner"
              className="rounded-lg object-cover"
            />
          </a>
          <a href="#" className="mx-auto">
            <img
              src={besttwo}
              alt="selfhelp banner"
              className="rounded-lg object-cover"
            />
          </a>
        </div>
        <div className="mx-auto max-w-345 px-6 py-10 space-y-4">
          <div className="flex justify-between">
            <div className="font-medium font-baskerville text-neutral-800 text-2xl">
              Books By YouTube Educators
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
          <SelfHelpLists />
        </div>
        <div className="mx-auto max-w-345 px-6 py-3 space-y-4">
          <div className="flex justify-between">
            <div className="font-medium font-baskerville text-neutral-800 text-2xl">
              Acad Books: 2026 Edition
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
          <SelfHelpLists />
        </div>
      </section>
    </>
  );
};

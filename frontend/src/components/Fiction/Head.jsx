import fictionBanner from "../../assets/banners/fiction.png";
import fictionBanner2 from "../../assets/banners/fiction2.png";
import { FictionLists } from "./FictionBooks";

export const Fiction = () => {
  return (
    <>
      <section className="mx-auto max-w-7xl px-2 py-12">
        <div className="fictionbanner h-120 gap-3 flex flex-col">
          <a href="#" className="mx-auto">
            <img
              src={fictionBanner}
              alt="fiction banner"
              className="rounded-lg"
            />
          </a>
          <div className="h-80">
            <a href="#" className="mx-auto">
              <img
                src={fictionBanner2}
                alt="fiction banner"
                className="rounded-lg"
              />
            </a>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-10 space-y-20">
          <h2 className="text-2xl font-serif mb-6">
            Fiction & Story World
          </h2>
          <FictionLists />
        </div>
      </section>
    </>
  );
};

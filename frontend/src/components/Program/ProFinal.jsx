import { BookLists } from "./ProBooks";
import ProgramBanner from "../../assets/banners/program.png"
export const ProgramLists = () => {
  return (
    <>
      <section className="mx-auto max-w-7xl px-2 py-12">
        <div className="fantasybanner h-50">
          <a href="#" className="mx-auto">
            <img src={ProgramBanner} alt="Programmer" className="rounded-lg" />
          </a>
        </div>
        <div className="mx-auto max-w-7xl px-6 py-10 space-y-20">
          <h2 className="text-2xl font-serif mb-6">Programmer’s Collection</h2>
          <BookLists />
        </div>
      </section>
    </>
  );
};

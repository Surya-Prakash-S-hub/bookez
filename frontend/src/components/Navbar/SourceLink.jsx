import { ChevronDown, Smartphone, Zap } from "lucide-react";
import rapido from "../../assets/DesignText/rapidicon.svg";

export const SecondaryNav = () => {
  return (
    <nav>
      <div className="mx-auto flex h-13 max-w-[1800px] items-center justify-between px-6">
        <div className="flex items-center text-sm gap-10 font-bold text-gray-700">
            <div className=" tag flex items-center">
              <a href="#" className="transition-colors text-neutral-800">
                Bestseller
              </a>
            </div>
            <div className="tag flex items-center">
              <a href="#" className="transition-colors text-neutral-800">
                New Arrivals
              </a>
            </div>
            <div className="tag flex items-center">
              <a href="#" className="transition-colors text-neutral-800">
                Personalisation <span className="bg-yellow-300 px-1 text-neutral-500" >New</span>
              </a>
            </div>
            <div className="tag flex items-center">
              <a href="#" className="transition-colors text-neutral-800">
                Gifting
              </a>
            </div>
            <div className="tag flex items-center">
              <a href="#" className="transition-colors text-neutral-800">
                Top Publishers
              </a>
            </div>
            <div className="flex items-center">
              <a href="#" className="transition-colors text-neutral-800">
                Blog
              </a>
            </div>
        </div>
        <div className="flex items-center gap-5">
          <button className="cursor-pointer">
            <img src={rapido} className="size-12" alt="rapidicon" />
          </button>
          <button className="cursor-pointer tagBtn uppercase flex items-center gap-2 text-sm font-medium text-gray-700 transition-colors hover:text-black">
            <Smartphone size={25} className="text-orange-700" />
            Get App
          </button>
          <button className="flex cursor-pointer tagBtn items-center gap-2 text-sm font-medium text-gray-700 transition-colors hover:text-black">
            <Zap size={18} className="fill-red-500 text-red-500" />
            122290
            <ChevronDown className="text-gray-400" />
          </button>
        </div>
      </div>
    </nav>
  );
};

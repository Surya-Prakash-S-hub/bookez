import { Heart, ShoppingCart, User, Search, CircleAlert } from "lucide-react";
import logo from "../../assets/images/icon.svg";

export const MainNavbar = () => {
  return (
    <nav>
      <div className="mx-auto flex h-12 max-w-[1800px] items-center gap-8 px-6">
        <div className="shrink-0">
          <img
            src={logo}
            alt="Book Store"
            className="h-12 w-auto cursor-pointer"
          />
        </div>

        <div className="flex-1">
          <div className="flex h-11 items-center rounded-lg border border-gray-300 px-5 transition focus-within:border-black">
            <Search size={30} className="mr-3 text-gray-400" />

            <input
              type="text"
              placeholder="Search for activity books for kids, UPSC courses, short stories..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-8">
          <button className="flex items-center gap-2 bg-red-500 rounded-lg p-2 text-gray-100 text-xs font-bold hover:text-black">
            <User size={20} />
            <span className="uppercase font-bold">Sign In</span>
          </button>

          <button className="flex relative items-center gap-2 text-sm font-bold text-gray-700 hover:text-black">
            <Heart size={20} />
            <span>Bookshelf</span>
            <CircleAlert className="size-4 absolute right-0 translate-x-5 -translate-y-2" />
          </button>

          <button className="relative flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-black">
            <ShoppingCart size={20} />
            <span>Cart</span>

            {/* Cart count */}
            <span className="absolute left-2 -top-2 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-[11px] text-white">
              0
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

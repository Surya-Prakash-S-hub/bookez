import { useState, useRef } from "react";
import { BookDropdown } from "./Accessories/DropList";
import { Search, ShoppingCart, Tag, BadgePercent } from "lucide-react";

export const Navbar = () => {
  const inputRef = useRef(null);
  const [field, setField] = useState(false);
  const [value, setValue] = useState("");

  const showInputField = () => {
    setField((preValue) => !preValue);

    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };
  const readValues = (e) => {
    const { value } = e.target;
    if (value.length == 0) {
      setField((preValue) => !preValue);
    }
  };
  return (
    <>
      <nav className="sticky top-0 z-40 bg-paper/80 backdrop-blur-md">
        <div className=" saleSheet w-full overflow-hidden py-3 pb-2">
          <div className="flex animate-slider whitespace-nowrap">
            <div className="flex shrink-0 gap-50 px-10 text-white font-semibold text-lg">
              <a href="#">
                <span className="flex gap-1">
                  {" "}
                  <Tag /> Unlock the Best Book Deals
                </span>
              </a>
              <a href="#">
                <span> Limited-Time Offers on Best Sellers</span>
              </a>
              <a href="#">
                <span> % Open the Door to Incredible Reading Savings</span>
              </a>
              <a href="#">
                <span className="flex gap-1">
                  {" "}
                  <BadgePercent /> Discover Amazing Discounts on Every Genre
                </span>
              </a>
              <a href="#">
                <span> Grab Your Next Favorite Book at Special Prices</span>
              </a>
            </div>
            <div className="flex shrink-0 gap-50 px-10 text-white font-semibold text-lg">
              <a href="#">
                <span className="flex gap-1">
                  {" "}
                  <Tag /> Unlock the Best Book Deals
                </span>
              </a>
              <a href="#">
                <span> % Limited-Time Offers on Best Sellers</span>
              </a>
              <a href="#">
                <span className="flex gap-1">
                  {" "}
                  <BadgePercent /> Open the Door to Incredible Reading Savings
                </span>
              </a>
              <a href="#">
                <span> Discover Amazing Discounts on Every Genre</span>
              </a>
              <a href="#">
                <span> Grab Your Next Favorite Book at Special Prices</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-8">
            <a
              href="#top"
              className="font-serif text-2xl font-bold tracking-tight"
            >
              <span className="text-2xl font-bold tracking-wide">
                Book<span className="text-brand text-blue-600">ez</span>.
              </span>
            </a>
            <div className="homePointer hidden space-x-6 text-sm font-medium md:flex">
              <a
                href="#newbooks"
                className="hover:text-brand transition-colors"
              >
                New Arrivals
              </a>
              <a
                href="#bestsellers"
                className="hover:text-brand transition-colors"
              >
                Fantacy
              </a>
              <a href="#new" className="hover:text-brand transition-colors">
                History
              </a>
              <a href="#new" className="hover:text-brand transition-colors">
                Fantacy
              </a>
              <a href="#new" className="hover:text-brand transition-colors">
                Program
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <button
                className="flex items-center gap-2 text-sm font-medium hover:text-brand transition-colors"
                aria-label="Open search"
                onClick={showInputField}
                style={{ display: field ? "none" : "flex" }}
              >
                <Search className="size-5" />
                <span>Search</span>
              </button>
              {field && (
                <div
                  style={{ display: field ? "block" : "none" }}
                  className="flex w-96 flex-col"
                >
                  <div className="flex items-center gap-2 rounded-full bg-soft px-4 py-2">
                    <Search className="lucide lucide-search size-4 shrink-0" />
                    <input
                      id="search"
                      ref={inputRef}
                      placeholder="Search titles, authors…"
                      className="w-full bg-transparent text-sm outline-none placeholder:text-ink/40"
                      type="text"
                      value={value}
                      onChange={(e) => {
                        setValue(e.target.value);
                      }}
                      onBlur={readValues}
                    />
                  </div>
                </div>
              )}
            </div>
            <button
              className="relative flex items-center gap-2 text-sm font-medium hover:text-brand transition-colors"
              aria-label="Open cart"
            >
              <ShoppingCart className="size-5" />
              <span>Cart (0)</span>
            </button>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 text-sm border border-gray-300 rounded-full hover:bg-gray-200 transition">
                Login
              </button>

              <button className="px-4 py-2 text-sm bg-black text-white rounded-full hover:bg-red-500 transition">
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <BookDropdown />
      </nav>
    </>
  );
};

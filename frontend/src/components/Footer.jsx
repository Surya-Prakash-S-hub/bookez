import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <>
      <footer className="mx-auto max-w-7xl px-6 py-16 relative">
        <div className="absolute -right-2/12 top-7 flex" >
          <a href="#top" className="p-3 bg-gray-300 rounded-3xl hover:bg-gray-600 hover:text-gray-300 transition-all duration-150" >
            <ArrowUp />
          </a>
        </div>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <span className="font-serif text-xl font-bold">
              <span className="text-2xl font-bold tracking-wide">
                Book<span className="text-brand text-blue-600">ez</span>.
              </span>
            </span>
            <p className="text-sm leading-relaxed text-ink/60">
              Carefully curated titles for the discerning reader. Established
              2026.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest">
              Collections
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-950 transition-colors duration-150">
                  Award Winners
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-950 transition-colors duration-150">
                  Classic Noir
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-950 transition-colors duration-150">
                  Indie Press
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-950 transition-colors duration-150">
                  Art Monographs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest">
              Support
            </h4>
            <ul className="space-y-2 text-sm text-ink/60">
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-950 transition-colors duration-150">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-950 transition-colors duration-150">
                  Returns Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-950 transition-colors duration-150">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-950 transition-colors duration-150">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest">
              Social
            </h4>
            <ul className="space-y-2 text-sm text-ink/60">
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-950 transition-colors duration-150">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-950 transition-colors duration-150">
                  Substack
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-950 transition-colors duration-150">
                  Threads
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-ink/5 pt-8 text-center text-[10px] uppercase tracking-widest text-ink/40">
          © 2026 Bookez Booksellers. All rights reserved.
        </div>
      </footer>
    </>
  );
};

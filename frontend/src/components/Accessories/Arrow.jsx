  import { ChevronLeft, ChevronRight } from "lucide-react";
  
  export const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white p-2 rounded-full hover:bg-black opacity-0 group-hover:opacity-100 transition"
    >
      <ChevronRight size={18} />
    </button>
  );

  export const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white p-2 rounded-full hover:bg-black opacity-0 group-hover:opacity-100 transition"
    >
      <ChevronLeft size={18} />
    </button>
  );
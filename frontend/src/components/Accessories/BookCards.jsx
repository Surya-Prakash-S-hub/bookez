import { useState } from "react";
import { Star as StarFilled, Heart, ExternalLink } from "lucide-react";

export const BookCard = ({ book }) => {
  const [liked, setLiked] = useState(false);

  return (
    <article className="group flex flex-col space-y-4">
      <div
        title={book.description}
        className="bookShelf relative overflow-hidden w-full max-w-70 h-65"
      >
        <img
          src={book.image}
          alt={book.title}
          className="h-65 w-full object-contain"
        />
        <div className="hoverBtn">
          <a href="#" > quick view <ExternalLink className="size-4" /></a>
        </div>

        {book.discount && (
          <span className="absolute left-3 top-3 bg-brand bg-red-600 px-2 py-1 text-[12px] font-bold text-white">
            {book.discount}% off
          </span>
        )}
      </div>

      <div className="text-center">
        {book.rating ? (
          <span className="flex gap-2 justify-center ">
            <StarFilled size={16} fill="gold" className="text-yellow-400 " />
            {book.rating} / 5
          </span>
        ) : null}
        <h3
          title={book.title}
          className="font-serif line-clamp-1 text-lg capitalize"
        >
          {book.title}
        </h3>
        <p className="text-xs text-ink/60">{book.author}</p>

        <div className="flex items-center gap-2 justify-center">
          <span className="text-sm font-semibold text-ink">
            ₹
            {book.discount
              ? book.price - (book.price * book.discount) / 100
              : book.price}
          </span>
          {book.discount ? (
            <span className="text-sm text-gray-500 line-through">
              ₹{book.price}
            </span>
          ) : null}
        </div>

        <div className="flex gap-2">
          <div className="mt-3 flex-1/5 pl-4">
            <Heart
              onClick={() => setLiked(!liked)}
              className={`cursor-pointer transition ${
                liked ? "text-red-500" : "text-gray-400"
              }`}
              fill={liked ? "currentColor" : "none"}
            />
          </div>
          <button className="mt-2 w-full border py-2 text-xs uppercase hover:bg-black hover:text-white">
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
};

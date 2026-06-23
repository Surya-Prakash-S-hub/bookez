import { useEffect, useState } from "react";
import { BookCard } from "../Accessories/BookCards";
import { API_BASE_URL } from "../../config/api";

export const FictionLists = () => {
  const [bookDetails, setBookDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      fetch(`${API_BASE_URL}/books/fiction`)
        .then((response) => {
          if (!response.ok) {
            console.log("error occured");
          }
          return response.json();
        })
        .then((data) => {
          setBookDetails(data.output);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchData();
  }, []);
  if (loading) {
    return (
      <div className="w-250 mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="animate-pulse">
                {/* image placeholder */}
                <div className="h-40 bg-gray-300 rounded"></div>

                {/* title placeholder */}
                <div className="h-3 bg-gray-300 mt-2 w-3/4 rounded"></div>

                {/* author placeholder */}
                <div className="h-3 bg-gray-300 mt-2 w-1/2 rounded"></div>
              </div>
            ))}
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {bookDetails?.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </>
  );
};

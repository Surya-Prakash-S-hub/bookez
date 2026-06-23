import { useState, useEffect } from "react";
import { BookButton } from "./Button";
import { Books } from "./Booktypes";
import { API_BASE_URL } from "../../config/api";

export const FinalOut = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [fictionBooks, setFictionBooks] = useState([]);
  const [philosophyBooks, setPhilosophyBooks] = useState([]);
  const [artBooks, setArtBooks] = useState([]);
  const [activeGenre, setActiveGenre] = useState("All Genres");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [allRes, ficRes, philRes, artRes] = await Promise.all([
          fetch(`${API_BASE_URL}/allgenre/books`),
          fetch(`${API_BASE_URL}/specific/books?categoryId=3`),
          fetch(`${API_BASE_URL}/specific/books?categoryId=6`),
          fetch(`${API_BASE_URL}/specific/books?categoryId=7`),
        ]);

        const allData = await allRes.json();
        const ficData = await ficRes.json();
        const philData = await philRes.json();
        const artData = await artRes.json();

        setAllBooks(allData.output || []);
        setFictionBooks(ficData.output || []);
        setPhilosophyBooks(philData.output || []);
        setArtBooks(artData.output || []);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAllData();
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
      <section id="newbooks">
        <BookButton activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
        <Books
          activeGenre={activeGenre}
          allBooks={allBooks}
          fictionBooks={fictionBooks}
          philosophyBooks={philosophyBooks}
          artBooks={artBooks}
        />
      </section>
    </>
  );
};

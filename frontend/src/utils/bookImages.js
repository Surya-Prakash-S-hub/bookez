import book1 from "../assets/images/book1.jpg";
import book2 from "../assets/images/book2.jpg";
import book3 from "../assets/images/book3.jpg";
import book4 from "../assets/images/book4.jpg";
import book5 from "../assets/images/book5.jpg";
import book6 from "../assets/images/book6.jpg";
import book7 from "../assets/images/book7.jpg";
import book8 from "../assets/images/book8.jpg";
import book9 from "../assets/images/book9.jpg";
import book10 from "../assets/images/book10.jpg";

const bookImages = [
  book1,
  book2,
  book3,
  book4,
  book5,
  book6,
  book7,
  book8,
  book9,
  book10,
];

export const getBookImage = (id) => {
  return bookImages[id % bookImages.length];
};
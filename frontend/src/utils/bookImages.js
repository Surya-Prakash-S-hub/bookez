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
import book11 from "../assets/images/book11.jpg";
import book12 from "../assets/images/book12.jpg";
import book13 from "../assets/images/book13.jpg";
import book14 from "../assets/images/book14.jpg";
import book15 from "../assets/images/book15.jpg";
import book16 from "../assets/images/book16.jpg";
import book17 from "../assets/images/book17.jpg";
import book18 from "../assets/images/book18.jpg";
import book19 from "../assets/images/book19.jpg";
import book20 from "../assets/images/book20.jpg";
import book21 from "../assets/images/book21.jpg";
import book22 from "../assets/images/book22.jpg";
import book23 from "../assets/images/book23.jpg";
import book24 from "../assets/images/book24.jpg";
import book25 from "../assets/images/book25.jpg";
import book26 from "../assets/images/book26.jpg";
import book27 from "../assets/images/book27.jpg";
import book28 from "../assets/images/book28.jpg";
import book29 from "../assets/images/book29.jpg";
import book30 from "../assets/images/book30.jpg";

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
  book11,
  book12,
  book13,
  book14,
  book15,
  book16,
  book17,
  book18,
  book19,
  book20,
  book21,
  book22,
  book23,
  book24,
  book25,
  book26,
  book27,
  book28,
  book29,
  book30,
];

export const getBookImage = (id) => {
  return bookImages[id % bookImages.length];
};
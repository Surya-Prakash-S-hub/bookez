import { useState } from "react";
import {
  BookOpen,
  GraduationCap,
  Brain,
  Baby,
  ChevronDown,
  Sparkles,
  Book,
} from "lucide-react";

export const BookDropdown = () => {
  const [open, setOpen] = useState(false);

  const categories = [
    {
      name: "Academic",
      icon: <GraduationCap size={18} />,
      books: ["Engineering Math", "Physics Fundamentals", "Chemistry Basics"],
    },
    {
      name: "Fiction",
      icon: <BookOpen size={18} />,
      books: ["Harry Potter", "The Alchemist", "Sherlock Holmes"],
    },
    {
      name: "Non-Fiction",
      icon: <Sparkles size={18} />,
      books: ["Sapiens", "Atomic Habits", "Deep Work"],
    },
    {
      name: "Learning",
      icon: <Brain size={18} />,
      books: ["Learn React", "Node.js Guide", "Python Basics"],
    },
    {
      name: "Children's",
      icon: <Baby size={18} />,
      books: ["Fairy Tales", "Disney Stories", "Animal World"],
    },
  ];

  return (
    <div className="w-full relative">
      {/* HEADER BUTTON */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between px-4 py-3 border rounded-md cursor-pointer bg-white shadow-sm hover:shadow-md transition"
      >
        <span className="font-semibold text-ink flex"> <Book className="size-5 pr-1 mt-0.5" /> Book Categories</span>
        <ChevronDown
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {open && (
        <div className="absolute left-0 top-full w-full bg-white border mt-2 shadow-lg z-50 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, index) => (
              <div key={index} className="space-y-2">
                <h3 className="flex items-center gap-2 font-semibold text-lg text-gray-800">
                  {cat.icon}
                  {cat.name}
                </h3>

                <ul className="space-y-1 ml-2">
                  {cat.books.map((book, i) => (
                    <li
                      key={i}
                    >
                      <a href="#" className="text-sm text-gray-600 cursor-pointer transition-all duration-300 hover:text-brand  hover:translate-x-1.5 hover:text-gray-950 flex items-center gap-1">
                        {book}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
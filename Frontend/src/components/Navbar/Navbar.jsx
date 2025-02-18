import React, { useState } from "react";
import Navlinks from "./Navlinks.json";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full bg-white fixed top-0 z-50 flex items-center justify-between py-3 px-8 border-b-2 shadow-md nav">
      <div>
        <h1 className="font-bold text-3xl">LexiGen</h1>
      </div>

      <ul className="md:flex hidden">
        {Navlinks.map((items, idx) => {
          const { title, link } = items;

          return (
            <li key={idx} className="px-3 text-lg font-medium">
              <a href={link}>{title}</a>
            </li>
          );
        })}
      </ul>

      {/* mobile menu button */}
      <button
        className="md:hidden focus:outline-none   "
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {isOpen && (
        <ul className="md:hidden bg-gray-800 absolute  w-full h-screen left-0 top-16 py-4 flex flex-col items-center space-y-4">
          {Navlinks.map((items, idx) => {
            const { title, link } = items;

            return (
              <li key={idx} className="px-3 py-1 text-lg font-medium">
                <a href={link} key={idx}>
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

import React from "react";
import Navlinks from "./Navlinks.json";

const Navbar = () => {
  return (
    <div className="w-full bg-white z-[99] flex items-center justify-between py-3 px-8 border border-b-2 capitalize nav">
      <div>
        <h1 className="font-bold text-3xl">LexiGen</h1>
      </div>
      <div className="flex">
        {Navlinks.map((items, idx) => {
          const { title, link } = items;

          return (
            <ul>
              <li key={idx} className="px-3 text-lg font-medium">
                <a href={link}>{title}</a>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;

import React, { useRef, useState } from "react";

import menu_icon from "../icons/hamburger-menu.svg";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navLinksRef = useRef<HTMLUListElement>(null);

  function toggleNav() {
    console.log("toggling nav");
    setIsOpen(!isOpen);
  }
  return (
    <nav className="m-2  absolute w-min overflow-visible left-12 top-3 bg-transparent flex sm:hidden h-min ">
      <button
        className="opacity-[.6]"
        onClick={toggleNav}
        aria-label="toggle menu"
      >
        <img src={menu_icon.src} alt="menu" className="w-8 h-8 max-w-[50px]" />
      </button>
      <ul
        ref={navLinksRef}
        className={`
        flex flex-row ml-2 [&>li]:ml-2 last:mr-2 transform transition-all duration-500 ease-in-out ${isOpen ? "translate-x-0 opacity-100" : "translate-x-[-300px] opacity-0 "}
         flex-row  text-md text-center p-2`}
      >
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/projects">PROJECTS</a>
        </li>
        <li>
          <a href="/about">ABOUT</a>
        </li>
      </ul>
    </nav>
  );
}

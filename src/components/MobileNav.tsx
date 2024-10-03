import React, { useRef } from "react";

import menu_icon from "../icons/menu.svg";
const [isOpen, setIsOpen] = React.useState<boolean>(false);
const navLinksRef = useRef<HTMLUListElement>(null);
export default function MobileNav() {
  function toggleNav() {
    if (navLinksRef.current) {
      navLinksRef.current.classList.toggle("hidden");
    }
  }
  return (
    <nav className="bg-transparent block sm:hidden w-min h-min shadow-md">
      <button onClick={() => setIsOpen(!isOpen)} aria-label="toggle menu">
        <img src={menu_icon.src} alt="menu" className="w-8 h-8 m-2" />
      </button>
      // add utility classes to ul so that it transitions from hidden to visible
      and extends from the right using aos if need be
      <ul
        ref={navLinksRef}
        className={`
        ml-4 transform transition-all duration-300 ease-in-out ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 absolute"}
         hidden flex-row  text-xl text-center p-2`}
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

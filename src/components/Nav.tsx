import React from "react";

export default function Nav() {
  return (
    <nav
      data-aos="fade-right"
      className="w-min h-min m-2 border rounded-xl bg-opacity-50 border-white shadow-md  shadow-blue-50 ring-2 ring-offset-4 ring-offset-slate-100 bg-[linear-gradient(circle,rgba(1,156,213,0.8128501400560224)_30%,rgba(1,169,184,0.695203081232493)_90%,rgba(116,200,208,0.8548669467787114)_100%)]"
    >
      <ul className=" text-xl text-center p-2 [&>li]:mx-2 [&>li]:mt-4 last:mb-4 transition-transform duration-300 hover:[&>li]:shadow-sm hover:[&>li]:scale-105">
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

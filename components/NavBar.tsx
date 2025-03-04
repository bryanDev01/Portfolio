"use client";
import { Code, Code2 } from "lucide-react";
import { ArrowDown, ArrowUp } from "./icons/icons";
import { useState } from "react";
import Aside from "./Aside";
import { navLinks } from "@/data/data";

function NavBar() {
  const [showedAside, setShowedAside] = useState<boolean>(false);

  const handleBarsClick = () => {
    setShowedAside(!showedAside);
  };

  return (
    <nav className=" sticky top-0 w-full flex justify-between items-center p-4 shadow-md shadow-slate-200 bg-slate-200">
      <div className=" flex items-center justify-start gap-3">
        <Code className=" text-secondColor w-7" />
        <p className=" text-2xl font-medium">
          Bryan.
          <span className=" bg-baseColor/80 text-white rounded-md px-0.5">
            dev
          </span>
        </p>
        <Code2 className=" text-secondColor w-7" />
      </div>

      <button
        className="lg:hidden mr-2 md:mr-11 text-secondColor"
        onClick={handleBarsClick}
      >
       {showedAside ? <ArrowUp /> : <ArrowDown />}
      </button>

      <Aside showAside={showedAside} />

      <div className=" text-black hidden lg:flex gap-16 justify-center items-center text-xl mr-4 list-none">
        {navLinks.map((l) => (
          <li
            key={l.id}
            className=" hover:ring-4 hover:ring-secondColor hover:rounded-lg p-1 cursor-pointer"
          >
            {l.link}
          </li>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;

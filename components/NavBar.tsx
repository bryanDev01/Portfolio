"use client";

import { Code, Code2 } from "lucide-react";
import "@/styles/NavBar.css";
import { JsSVG, ReactSVG } from "./icons/icons";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/data";

function NavBar({
  changeActiveSection,
  activeSectionID,
}: {
  changeActiveSection: (id: string) => void;
  activeSectionID: string;
}) {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const checkScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    checkScroll();

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    setIsMounted(true);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        scrolled
          ? " sticky top-0 py-2 bg-white/80 backdrop-blur-sm shadow-sm w-full flex flex-col gap-6 justify-center items-center p-3 z-50"
          : "sticky top-0 w-full flex flex-col gap-6 justify-center items-center p-3 shadow-md shadow-white bg-gradient-to-b from-cyan-200 to-white z-50 "
      }`}
    >
      <div className=" flex items-center justify-start gap-3">
        {isMounted && !scrolled ? (
          <div className=" hidden lg:block">
            <div className=" absolute w-96 left-0">
              <ReactSVG className="h-[100px] w-[100px] absolute xl:right-0 lg:right-24 slow-spin" />
            </div>
            <div className="absolute w-96 right-0">
              <JsSVG className="w-[100px] h-[100px] absolute xl:left-0 lg:left-24 slow-balance" />
            </div>
          </div>
        ) : null}
        <Code className=" text-secondColor w-7" />
        <p className=" text-xl font-medium">
          Bryan.
          <span className=" bg-baseColor/80 text-white rounded-md px-0.5">
            dev
          </span>
        </p>
        <Code2 className=" text-secondColor w-7" />
      </div>

      <ul className=" text-black flex flex-wrap sm:gap-8 gap-5 justify-center items-center text-lg mr-3 list-none">
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => changeActiveSection(link.id)}
            className={
              activeSectionID === link.id
                ? "text-secondColor font-semibold cursor-pointer"
                : "hover:text-secondColor cursor-pointer"
            }
          >
            {link.link}
          </button>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;

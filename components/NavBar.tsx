"use client";

import { Code, Code2, Menu, X } from "lucide-react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    setIsMounted(true);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        scrolled
          ? "sticky top-0 py-2 bg-white/70 backdrop-blur-md shadow-md shadow-cyan-200/40"
          : "sticky top-0 shadow-md shadow-white bg-gradient-to-b from-cyan-200/90 to-white/90 backdrop-blur-sm"
      } w-full flex flex-col gap-6 justify-center items-center p-3 z-50 transition-all duration-500`}
    >
      <div className="w-full flex items-center justify-between px-4 lg:justify-start lg:gap-3">
        <div className="flex items-center gap-3 w-full">
          {isMounted && !scrolled ? (
            <div className="hidden lg:block">
              <div className="absolute w-96 left-10">
                <ReactSVG className="h-[100px] w-[100px] absolute xl:right-0 lg:right-24 slow-spin" />
              </div>
              <div className="absolute w-96 right-10">
                <JsSVG className="w-[100px] h-[100px] absolute xl:left-0 lg:left-24 slow-balance" />
              </div>
            </div>
          ) : null}
          <div className=" flex justify-center items-center gap-2 w-full">
            <Code className="text-secondColor w-6 sm:w-7" />
            <p className="text-lg sm:text-xl font-medium">
              Bryan.
              <span className="bg-gradient-to-r from-baseColor to-secondColor text-white rounded-md px-0.5 py-0.5">
                dev
              </span>
            </p>
            <Code2 className="text-secondColor w-6 sm:w-7" />
          </div>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="lg:hidden text-gray-600 hover:text-secondColor transition-colors"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      <ul
        className={`${isMenuOpen ? "flex" : "hidden"} lg:flex flex-col lg:flex-row w-full lg:w-auto text-black gap-4 lg:gap-8 justify-center items-center text-base sm:text-lg list-none p-4 lg:p-0 ${scrolled ? "bg-white/80 lg:bg-transparent" : "bg-cyan-100/90 lg:bg-transparent"} transition-all duration-300`}
      >
        {navLinks.map((link) => (
          <li key={link.id} className="w-full lg:w-auto">
            <button
              onClick={() => {
                changeActiveSection(link.id);
                setIsMenuOpen(false);
              }}
              aria-current={activeSectionID === link.id ? "true" : undefined}
              className={`
                relative w-full lg:w-auto px-4 py-2 lg:p-0 rounded-lg text-center
                transition-all duration-300
                after:content-[''] after:absolute after:left-4 after:right-4 after:-bottom-1 after:h-[3px] after:rounded-full
                after:bg-gradient-to-r after:from-baseColor after:to-secondColor after:transition-transform after:duration-300 after:origin-left
                ${
                  activeSectionID === link.id
                    ? "text-secondColor font-semibold bg-white/50 lg:bg-transparent after:scale-x-100"
                    : "hover:text-secondColor hover:bg-white/30 lg:hover:bg-transparent after:scale-x-0 hover:after:scale-x-50"
                }
              `}
            >
              {link.link}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;

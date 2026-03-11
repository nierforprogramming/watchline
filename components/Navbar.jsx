"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";

import { sectionLinks } from "@/assets";
import Logo from "./Logo";

const Navbar = () => {
  const [isBeingScrolled, setIsBeingScrolled] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // determines last scrolling position
    let lastScrollY = window.scrollY;

    // finds if the user is scrolling or not

    const controlNavbar = async () => {
      const currentScrollY = window.scrollY;

      // compare to find if the user is scrolling or not
      // if the user has scrolled and scrolled more than 100px
      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        // Being scrolled down  Navbar hides
        setIsBeingScrolled(false);
      } else {
        // Means page is being scrolled up
        // Therefore, showing navbar again
        setIsBeingScrolled(true);
      }

      // Updating the scroll position
      lastScrollY = currentScrollY;
    };

    // Triggering scroll event
    window.addEventListener("scroll", controlNavbar);

    // clean up when unmounted
    return () => window.removeEventListener("scroll", controlNavbar);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] rounded-xl bg-black/30 backdrop-blur-md py-2 text-white transition-transform duration-400  ${isBeingScrolled ? "translate-y-0" : "-translate-y-50"} `}
    >
      <div className="h-16 items-center flex justify-between">
        <Logo />
        {/* Desktop Menu */}
        <div className="hidden sm:block ml-auto">
          {sectionLinks.map((link) => (
            <Link
              className="text-white text-lg px-4"
              href={link.path}
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <button
          className="block sm:hidden px-4 text-3xl text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <RiMenu3Line />
        </button>
      </div>
      {/* Mobile View */}
      <div
        className={`${isOpen ? "block" : "hidden"} block sm:hidden bg-black/20`}
      >
        {sectionLinks.map((link) => (
          <Link
            className="text-white text-lg p-3 block"
            href={link.path}
            key={link.name}
            onClick={() => setIsOpen(!isOpen)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

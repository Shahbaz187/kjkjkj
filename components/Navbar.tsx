"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Poppins } from "next/font/google";
import gsap from "gsap";

import { BsGithub, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";

const poppins = Poppins({ weight: "900", subsets: ["latin"] });

const navLinks = [
  { id: 1, name: "home", href: "/" },
  { id: 2, name: "about", href: "#about" },
  { id: 4, name: "projects", href: "#projects" },
  { id: 5, name: "contact", href: "#contact" },
];

function Navbar() {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen((prev) => !prev);
  };

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate the navbar when page loads
    tl.from(".navbar-container", {
      y: -100,
      duration: 1,
      ease: "power2.out",
      opacity: 0,
    });

    if (isModalOpen) {
      // Modal animations when open
      gsap.from(".nav-wrapper", {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(".nav-link", {
        opacity: 0,
        x: -20,
        stagger: 0.5,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [isModalOpen]);

  return (
    <main>
      {/* Navbar */}
      <nav className="navbar-container sticky top-0 left-0 flex justify-between items-center mx-auto 3xl:h-[5rem] 3xl:w-[90%] xl:w-[90%] 2xl:h-[5rem] md:h-[5rem] md:w-[90%] sm:w-[90%] sm:h-[5rem] ">
        <Link href="/" className={`${poppins.className} text-2xl capitalize`}>
          ASHMAL RANA
        </Link>

        {/* Desktop Links */}
        <div className="xl:flex xl:justify-center xl:items-center xl:gap-14 md:hidden sm:hidden">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.id}
              className={`${
                pathname === link.href
                  ? "dark:text-white text-black"
                  : "hover:dark:text-white hover:text-black"
              } text-[#A7A7A7] capitalize`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Hamburger Button for Mobile */}
        <button
          type="button"
          onClick={handleModalOpen}
          className="text-3xl xl:hidden md:flex sm:flex"
          aria-label="Toggle Menu"
        >
          <HiOutlineBars3CenterLeft />
        </button>
      </nav>

      {/* Mobile Modal */}
      {isModalOpen && (
        <>
          <div
            onClick={handleModalOpen}
            className="fixed h-screen w-full top-0 left-0 dark:bg-[#f1f0f060] bg-[#00000080] z-10"
            aria-hidden="true"
          ></div>

          <div className="nav-wrapper fixed top-0 left-0 z-20 p-5 flex-col justify-start items-start gap-10 h-screen bg-[#191919] w-[80%] sm:w-[70%] xl:hidden md:flex sm:flex">
            {/* Close Button */}
            <div className="flex justify-between items-center w-full">
              <h1 className="uppercase text-white">ASHMAL</h1>
              <button
                type="button"
                onClick={handleModalOpen}
                className="text-2xl text-white ml-auto"
                aria-label="Close Menu"
              >
                <AiOutlineClose />
              </button>
            </div>

            {/* Modal Links */}
            <div className="flex flex-col justify-start items-start gap-10 md:text-xl">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`nav-link ${
                    pathname === link.href ? "text-white" : "text-[#A7A7A7]"
                  } capitalize`}
                  onClick={handleModalOpen}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </main>
  );
}

export default Navbar;

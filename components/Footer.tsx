import React from "react";
import Link from "next/link";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center gap-10 py-[5rem] pb-10 mx-auto xl:px-0 xl:w-[90%] md:w-full md:px-10 sm:px-5 sm:w-full">
      <hr className="w-full" />
      <p className="text-center">
        This is Ashmal's portfolio | Developed by{" "}
        <Link
          href="https://www.facebook.com/profile.php?id=61561335181043"
          target="_blank"
          className="text-gradient font-bold"
          aria-label="Shahbaz Ansari Facebook Profile"
        >
          Shahbaz Ansari
        </Link>{" "}
      </p>
    </footer>
  );
}

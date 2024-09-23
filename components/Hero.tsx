'use client'

import React, { useEffect } from 'react';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';

// Use the Google font Poppins
const poppins = Poppins({ weight: '900', subsets: ['latin'] });

export default function Hero() {
  useEffect(() => {
    const tl = gsap.timeline();

    // GSAP animation for the "greetings" class
    gsap.to('.greetings', {
      duration: 1,
      ease: 'sine.inOut',
      rotation: 360,
    });

    // Timeline animations for the rest of the elements
    tl.fromTo(
      'h1',
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        ease: 'back',
        duration: 1,
        opacity: 1,
      }
    )
      .fromTo(
        '.paragraph',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          ease: 'back',
          duration: 1,
          opacity: 1,
          delay: 0.5,
        }
      )
      .fromTo(
        '.btn',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          ease: 'back',
          duration: 1,
          opacity: 1,
          delay: 0.5,
        }
      )
      .fromTo(
        '.imgElem',
        { x: 100, opacity: 0 },
        {
          x: 0,
          ease: 'power2.inOut',
          duration: 1,
          opacity: 1,
          delay: 0.5,
        }
      );
  }, []);

  return (
    <main
      className="flex 3xl:py-[10rem] lg:flex-row lg:justify-center lg:items-center lg:gap-14 lg:px-14 md:flex-col md:justify-start md:items-start md:gap-10 md:px-10
        md:py-[5rem] sm:flex-col sm:justify-center sm:items-center sm:gap-10 sm:px-5 sm:pt-[5rem]"
    >
      <div className="content-container flex flex-col justify-start items-start gap-5 3xl:w-[50%] 2xl:w-[50%] xl:w-[50%]">
        <span className="greetings text-lg">Hey,</span>
        <h1
          className={`title ${poppins} 3xl:text-6xl 3xl:leading-[70px] 2xl:text-5xl 2xl:leading-[65px] 2xl:w-full xl:text-5xl md:text-5xl md:leading-[70px] md:w-[80%] sm:w-full sm:text-3xl sm:leading-[45px] font-bold opacity-100`}
        >
          I am Ashmal, a
          <span className="text-gradient"> WordPress Developer </span>
        </h1>
        <p className="paragraph w-[76%]">
          Welcome to my portfolio! I'm Ashmal Rana, a seasoned WordPress
          developer with over 2 years of experience. Specializing in custom
          theme development and plugin integration, I create dynamic and
          responsive websites. Explore my work and let's bring your digital
          vision to life!
        </p>
        <Link
          href="https://www.facebook.com/profile.php?id=100083660106479"
          target="_blank"
          className="btn bg-black font-bold text-white dark:bg-white dark:text-black hover:bg-[#E70FAA] py-3 px-5 rounded-lg flex justify-center items-center gap-2"
        >
          Hire Me
        </Link>
      </div>
      <div className="imgElem xl:w-[50%] md:w-full sm:w-full">
        <Image
          src="/avatar2.jpg"
          alt="Ashmal Rana"
          width={1600}
          height={1600}
          className="object-cover object-top rounded-xl mx-auto 3xl:w-[40rem] 3xl:h-[40rem] 2xl:w-[30rem] 2xl:h-[25rem] md:w-[25rem] md:h-[25rem] sm:w-[15rem] sm:h-[15rem]"
        />
      </div>
    </main>
  );
}

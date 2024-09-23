'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import experience from './workExperience.json'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const revealRefs = useRef<Array<HTMLElement>>([])

  useEffect(() => {
    revealRefs.current.forEach((el, index) => [
      gsap.fromTo(
        el,
        { y: -100, autoAlpha: 0 },
        {
          y: 0,
          duration: 1,
          ease: 'power2.out',
          autoAlpha: 1,
          stagger: 0.5,
          delay: 0.5,
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: 'top center+=20',
            end: 'bottom center',
            toggleActions: 'play none none reverse',
          },
        }
      ),
    ])
  }, [revealRefs])

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  return (
    <main
      id="about"
      className="flex flex-col justify-start items-start gap-5 3xl:my-[7rem] xl:my-[5rem] xl:px-0 md:my-[2rem] md:px-10 sm:my-[5rem] sm:px-5 "
    >
      <h1
        ref={addToRefs}
        className=" text-gradient xl:text-5xl md:text-4xl sm:text-3xl capitalize "
      >
        about me
      </h1>

      <p ref={addToRefs}>
        I am a proficient WordPress developer with over 4 years of experience in
        creating modern and responsive websites. My skillset encompasses a
        robust knowledge of WordPress themes, plugins, and custom post types,
        along with proficiency in PHP, HTML, CSS, and JavaScript. In addition, I
        demonstrate expertise in using tools like Elementor, Advanced Custom
        Fields (ACF), WooCommerce, and SEO optimization techniques. My passion
        lies in designing user-friendly and accessible WordPress websites that
        meet the specific needs and expectations of both clients and end users.
      </p>
      <p ref={addToRefs}>
        I am consistently driven by the desire to acquire knowledge of new
        WordPress technologies and enhance my skills. My team-oriented approach
        to work, along with the ability to collaborate with other developers,
        designers, and stakeholders, are qualities that I highly value.
        Additionally, I possess the capability to work independently,
        efficiently managing my time and tasks to deliver high-quality WordPress
        solutions.
      </p>

      <p ref={addToRefs}>
        My proficiencies include excellent communication and problem-solving
        skills, along with a strong commitment to delivering high-quality and
        maintainable WordPress code. I am currently seeking a challenging and
        fulfilling opportunity where I can apply my expertise and contribute to
        the success of your organization through innovative WordPress
        development solutions.
      </p>

      <div className="flex flex-col justify-start items-start gap-5 3xl:w-[50%] 2xl:w-[50%] xl:w-[50%] md:w-full md:pt-10 sm:w-full sm:pt-10 ">
        <h1
          ref={addToRefs}
          className="text-gradient xl:text-5xl md:text-4xl sm:text-3xl capitalize"
        >
          work experience{" "}
        </h1>
        <div className="flex flex-col justify-start items-start gap-5 w-full ">
          {experience.map((item) => {
            return (
              <section
                key={item.id}
                ref={addToRefs}
                className="flex w-full relative after:absolute after:border-b-[1px] after:w-full after:bottom-0 after:left-0 after:h-5 after:border-[#EBEAED] 
            after:dark:border-[#A7A7A7] xl:flex-row xl:justify-between xl:items-center xl:py-5 md:justify-between md:items-center md:py-5 sm:justify-between
            sm:items-center sm:py-2"
              >
                <div className="flex flex-col justify-start items-start gap-2">
                  <h3 className="xl:text-xl md:text-lg sm:text-base">
                    {item.role}
                  </h3>
                  <li className="text-[#A7A7A7] list-[square] xl:text-sm md:text-sm sm:text-xs">
                    {item.company}
                  </li>
                </div>
                <div className="flex flex-col justify-end items-end gap-2">
                  <span className="bg-[#D7FFE0] text-[#018C0F] xl:text-sm md:text-sm sm:text-xs px-2 py-1 rounded-full ">
                    {item.type_of_job}
                  </span>
                  <p className="text-[#A7A7A7] xl:text-sm md:text-sm sm:text-xs ">
                    {item.duration}
                  </p>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col justify-start items-start gap-5 3xl:w-[50%] 2xl:w-[50%] xl:w-[50%] md:w-full md:pt-10 sm:w-full sm:pt-10 ">
        <h1
          ref={addToRefs}
          className="text-gradient xl:text-5xl md:text-4xl sm:text-3xl capitalize"
        >
          education
        </h1>

        <section
          ref={addToRefs}
          className="flex w-full xl:flex-row xl:justify-between xl:items-center xl:py-5 md:justify-between md:items-center md:py-5 sm:justify-between
            sm:items-center sm:py-2"
        >
          <div className="flex flex-col justify-start items-start gap-2">
            <h3 className="xl:text-xl md:text-lg sm:text-base">
              Bachelor in Computer Science
            </h3>
            <li className="text-[#A7A7A7] list-[square] xl:text-sm md:text-sm sm:text-xs">
              National University Of Pakistan
            </li>
          </div>
          <div className="flex flex-col justify-end items-end gap-2">
            <span className="bg-[#D7FFE0] text-[#018C0F] xl:text-sm md:text-sm sm:text-xs px-2 py-1 rounded-full ">
              Full Time
            </span>
            <p className="text-[#A7A7A7] xl:text-sm md:text-sm sm:text-xs ">
              2014 - 2020
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

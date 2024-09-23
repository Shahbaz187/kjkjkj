import React from "react";
import Image from "next/image";
import Link from "next/link";

import { BsGithub, BsLink45Deg } from "react-icons/bs";

import projectJSON from "@/components/projects.json";

type ProjectProps = {
  addToRefs: any;
};

type Project = {
  id: number;
  title: string;
  liveSite: string;
  imagePath: string;
};

export default function Project({ addToRefs }: ProjectProps) {
  return (
    <main
      id="projects"
      className="xl:my-[3rem] xl:px-0 md:px-10 md:my-[3rem] md:gap-10 sm:gap-10 sm:px-5 sm:my-[2rem]"
    >
      {/* Section Title */}
      <h1
        ref={addToRefs}
        className="text-gradient xl:text-5xl md:text-4xl sm:text-3xl capitalize"
      >
        Projects
      </h1>

      {/* Project Grid */}
      <div
        className="grid md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-10 xl:content-center xl:place-items-start xl:pt-[2rem] 
        md:content-center md:place-items-center md:pt-[2rem] sm:grid-cols-1 sm:content-center sm:place-items-center sm:pt-[2rem]"
      >
        {projectJSON.map((item: Project) => {
          return (
            <div key={item.id} className="flex flex-col h-full">
              <Link
                href={item.liveSite}
                target="_blank"
                className="w-full h-full"
                aria-label={`Visit ${item.title} live site`}
              >
                <div
                  ref={addToRefs}
                  className="grid grid-cols-1 content-between place-items-center gap-10 dark:bg-white dark:text-black text-white bg-[#363636] 
                  shadow-2xl border-[1px] rounded-lg cursor-pointer h-full"
                >
                  {/* Project Image */}
                  <Image
                    src={item.imagePath}
                    alt={`Screenshot of ${item.title} project`}
                    width={500}
                    height={500}
                    className="rounded-t-lg w-full h-full object-cover"
                  />
                </div>
              </Link>

              {/* Project Info (Optional) */}
              {/* You can add project title or description here if needed */}
            </div>
          );
        })}
      </div>
    </main>
  );
}

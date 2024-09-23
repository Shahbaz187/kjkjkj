import React from "react";
import { DiSass } from "react-icons/di";
import {
  SiBootstrap,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { BsGit } from "react-icons/bs";

type Stack = {
  id: number;
  name: string;
  icon: JSX.Element;
};

const TechStacks: Stack[] = [
  { id: 1, name: "HTML5", icon: <SiHtml5 aria-label="HTML5" /> },
  { id: 2, name: "CSS3", icon: <SiCss3 aria-label="CSS3" /> },
  { id: 3, name: "JavaScript", icon: <SiJavascript aria-label="JavaScript" /> },
  { id: 4, name: "React JS", icon: <SiReact aria-label="React JS" /> },
  { id: 5, name: "Next JS", icon: <SiNextdotjs aria-label="Next JS" /> },
  { id: 6, name: "BootStrap", icon: <SiBootstrap aria-label="Bootstrap" /> },
  {
    id: 7,
    name: "Tailwind CSS",
    icon: <SiTailwindcss aria-label="Tailwind CSS" />,
  },
  { id: 8, name: "Git & GitHub", icon: <BsGit aria-label="Git & GitHub" /> },
  {
    id: 9,
    name: "Redux toolkit",
    icon: <SiRedux aria-label="Redux Toolkit" />,
  },
  { id: 11, name: "Sass", icon: <DiSass aria-label="Sass" /> },
];

type StackProps = {
  addToRefs: (ref: any) => void;
};

export default function Stacks({ addToRefs }: StackProps) {
  return (
    <div
      id="stack"
      className="flex flex-col justify-start items-start py-10 xl:py-20 gap-10 px-5 md:px-10"
    >
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center gap-5 w-full">
        <h1
          ref={addToRefs}
          className="text-gradient text-3xl md:text-4xl xl:text-5xl capitalize"
        >
          My Tech Stack
        </h1>
        <p ref={addToRefs} className="text-center">
          Below are my tech stacks and tools I use often
        </p>
      </div>

      {/* Tech Stack Icons */}
      <div
        ref={addToRefs}
        className="w-full flex justify-center items-center flex-wrap gap-10"
      >
        {TechStacks.map((stack) => (
          <div
            key={stack.id}
            className="flex flex-col justify-center items-center text-center gap-5 w-20 md:w-32 xl:w-40"
          >
            {/* Icon */}
            <span className="text-4xl md:text-5xl xl:text-6xl">
              {stack.icon}
            </span>
            {/* Technology Name */}
            <p className="capitalize">{stack.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

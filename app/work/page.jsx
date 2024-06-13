"use client";

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import WorkSlideBtns from "@/components/WorkSlideBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Coming soon",
    description: "It's a responsive website that provides a countdown.",
    stack: [{ name: "Html5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/coming.png",
    live: "https://coming-soon-peaches.vercel.app/",
    github: "https://github.com/ncls-brn/coming-soon",
  },
  {
    num: "02",
    category: "frontend",
    title: "Dataviz",
    description:
      "It's a responsive website that provides informations about space.",
    stack: [{ name: "Html5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/dataviz.png",
    live: "https://ncls-brn.github.io/",
    github: "https://github.com/ncls-brn/ncls-brn.github.io",
  },
  {
    num: "03",
    category: "Game",
    title: "Trump VS Panda",
    description:
      "It's a video game where you play as a panda to save the world.",
    stack: [{ name: "C" }, { name: "Other" }],
    image: "/assets/work/panda-vs-trump.png",
    live: "https://nclsbrn.itch.io/trump-vs-panda",
    github: "https://github.com/ncls-brn/pico-8-panda-vs-trump",
  },

  {
    num: "04",
    category: "frontend",
    title: "Travel",
    description:
      "This is a responsive website that provides travel information of all kinds.",
    stack: [
      { name: "Html5" },
      { name: "Css 3" },
      { name: "React" },
      { name: "Javascript" },
    ],
    image: "/assets/work/travel.png",
    live: "https://travel-life-app.vercel.app/",
    github: "https://github.com/ncls-brn/travel",
  },
  {
    num: "05",
    category: "frontend",
    title: "Meal",
    description:
      "It's a responsive website that provides information on menus of all kinds to suit your hunger.",
    stack: [
      { name: "Html5" },
      { name: "Css 3" },
      { name: "Vue" },
      { name: "Javascript" },
    ],
    image: "/assets/work/meal2.png",
    live: "https://meals-by-name.vercel.app/",
    github: "https://github.com/ncls-brn/meal-app",
  },
  {
    num: "06",
    category: "fullstack",
    title: "Netflix Application",
    description:
      "It's a responsive website that provides a library of movies, series, documentaries and TV shows.",
    stack: [{ name: "Css 3" }, { name: "TypeScript" }, { name: "React" }],
    image: "/assets/work/netflix.png",
    live: "https://netflix-app-indol.vercel.app/auth",
    github: "https://github.com/ncls-brn/netflix",
  },
  {
    num: "07",
    category: "fullstack",
    title: "CineMatch",
    description:
      "This is a responsive website that provides a match between several people based on the feeds you like.",
    stack: [
      { name: "Html5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "React" },
    ],
    image: "/assets/work/cinematch.png",
    live: "https://cinematch-app.vercel.app/login",
    github: "https://github.com/ncls-brn/movie-app-v4",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    //get current slide inde
    const currentIndex = swiper.activeIndex;
    //update project state based on current slide index
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/*outline */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/*project */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/*project description */}
              <p className="text-white/60">{project.description}</p>
              {/*stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/*remove last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/*border */}
              <div className="border border-white/20"></div>
              {/*button */}
              <div className="flex items-center gap-4">
                {/*live project button*/}
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/*github project button*/}
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/*overlay*/}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/*image*/}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/*slider buttons*/}
              <WorkSlideBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;

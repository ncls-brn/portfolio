"use client";

import { BiLogoGoLang } from "react-icons/bi";
import { SiExpress, SiMysql, SiMongodb } from "react-icons/si";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGit,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

//about
const about = {
  title: "About me",
  description:
    "Autonomous, curious and a team player, I'm ready to put what I've learned to work for a team and on ambitious projects. Finally, my military career has forged in me rigor, resilience and adaptability, qualities that I fully intend to put to good use in the field of IT security.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Nicolas Baran",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+33)6.79.27.34.71",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "French",
    },
    {
      fieldName: "Email",
      fieldValue: "nicolas.j.baran@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "French, English",
    },
  ],
};

//experience
const experience = {
  icon: "/assets/resume/resume.svg",
  title: "My experience",
  description:
    "After 10 years as an Staff Sergeant officer in the French Army, I decided to move into the digital sector. Having obtained a degree in web development, I now wish to specialize in cybersecurity, a field that echoes my background and my appetite for risk management. ",
  items: [
    {
      company: "Withings",
      position: "QA tester (apprenticeship)",
      duration: "2023-2024",
    },
    {
      company: "French Army",
      position: "Head of Technical Department",
      duration: "2021-2022",
    },
    {
      company: "French Army",
      position: "Group Leader",
      duration: "2011-2021",
    },
  ],
};

//education
const education = {
  icon: "/assets/resume/education.svg",
  title: "My education",
  description:
    "Obtained a degree in web development after 10 years in the French Army.",
  items: [
    {
      institution: "Hexagone",
      degree: `Cyberdefense Master's Degree 'Data, network and systems security manager'.`,
      duration: "2024-2026",
    },
    {
      institution: "Ada Tech School",
      degree: "licence Application designer and developer developer.",
      duration: "2022-2024",
    },
    {
      institution: "Engineer School French Army",
      degree: "First Level Specific Training",
      duration: "2018",
    },
    {
      institution: "Ecole Nationale des Sous-Officiers d'Active",
      degree: "First-level general training",
      duration: "2017",
    },
  ],
};

//skills
const skills = {
  title: " My skills",
  description:
    "articipation in projects in different fields, teams and languages (Javascript, Python,Git ), giving me great adaptability. Experimentation with a wide range of tools and day-to-day developer tasks (versioning, testing, project management tools), as well as different operating modes",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <BiLogoGoLang />,
      name: "golang",
    },
    {
      icon: <SiExpress />,
      name: "express",
    },
    {
      icon: <SiMysql />,
      name: "mysql",
    },
    {
      icon: <SiMongodb />,
      name: "mongodb",
    },
    {
      icon: <FaGit />,
      name: "git",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwindcss",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger>Experience</TabsTrigger>
            <TabsTrigger>Education</TabsTrigger>
            <TabsTrigger>Skills</TabsTrigger>
            <TabsTrigger>About me</TabsTrigger>
          </TabsList>
          <div>content</div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;

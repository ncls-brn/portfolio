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
import { FaC } from "react-icons/fa6";

//about
const about = {
  title: "About me",
  description:
    "Autonomous, curious and a team player, I'm ready to put what I've learned to work for a team and on ambitious projects. Finally, my military career has forged in me rigor, resilience and adaptability, qualities that I fully intend to put to good use in the field of IT security.",
  info: [
    {
      fieldName: "Name:",
      fieldValue: "Nicolas Baran",
    },
    {
      fieldName: "Phone:",
      fieldValue: "On demand",
    },
    {
      fieldName: "Experience:",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Nationality:",
      fieldValue: "French",
    },
    {
      fieldName: "Languages:",
      fieldValue: "French native , English (B2)",
    },
    {
      fieldName: "Email:",
      fieldValue: "On demand",
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
      company: "Mediametrie",
      position: "CISO assistant (apprenticeship)",
      duration: "2024-today",
      description:
        "Reporting to the CISO, implement and monitor IT security policies, ensuring the protection of the company's data and digital infrastructures. Involvement in risk analysis, employee awareness-raising and monitoring the application of security standards.",
    },
    {
      company: "Withings",
      position: "QA tester (apprenticeship)",
      duration: "2023-2024",
      description:
        "In charge of validating and ensuring the stability of the Withings health app, including bug tracking and non-regression testing on iOS/Android platforms.",
    },
    {
      company: "French Army",
      position: "Head of Technical Department",
      duration: "2021-2022",
      description:
        "In charge of supervising and coordinating the department's activities, organizing the logistics chain and maintaining equipment in operational condition.",
    },
    {
      company: "French Army",
      position: "Group Leader",
      duration: "2011-2021",
      description:
        "In charge of command, training and tactical and technical training of a group. Construction, destruction and defense of infrastructure required by combat units. Neutralization and defusing of explosive devices.",
    },
  ],
};

//education
const education = {
  icon: "/assets/resume/education.svg",
  title: "My education",
  description:
    "Graduated in web development after 10 years in the French army.",
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
    "articipation in projects in different fields, teams and languages (Javascript, Python,Git,etc ), giving me great adaptability. Experimentation with a wide range of tools and day-to-day developer tasks (versioning, testing, project management tools), as well as different operating modes",
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
      icon: <SiTailwindcss />,
      name: "tailwindcss",
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
      icon:<FaC />,
      name:"C",
    }
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
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skill">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
            {/*experience*/}
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.company}</p>
                            </div>
                            <p className="text-white/60">{item.description}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/*education*/}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">
                                {item.institution}
                              </p>
                            </div>
                            <p className="text-white/60">{item.description}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/*skill*/}
            <TabsContent value="skill" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/*about*/}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;

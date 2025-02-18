"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone:",
    description: "On demand",
  },
  {
    icon: <FaEnvelope />,
    title: "Email:",
    description: "On demand",
  },
  {
    icon: <FaLinkedin />,
    title: "Linkedin:",
    description: "https://www.linkedin.com/in/nicolas-baran/",
    alias: "Nicolas Baran ",
  },
];

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_sitsc8v", "template_qea3eor", form.current, {
        publicKey: "8G9KF2m5x8_fiJU7f",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form*/}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              ref={form}
              onSubmit={sendEmail}
            >
              <h3 className="text-4xl text-accent">Let's talk</h3>
              <p className="text-white/60">
                {" "}
                I'd be delighted to talk to you about projects, collaborations
                or simply to share ideas on web development, cybersecurity and
                various other IT topics.
              </p>
              {/*input*/}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  name="firstname"
                  placeholder="Firstname"
                />
                <Input type="lastname" name="lastname" placeholder="Lastname" />
                <Input type="email" name="email" placeholder="Email" />
                <Input type="phone" name="phone" placeholder="phone" />
              </div>

              {/*textarea*/}
              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Type your message here."
              />
              {/*button*/}
              <Button type="submit" size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          {/* info*/}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      {item.title === "Linkedin:" ? (
                        <a
                          href={item.description}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xl text-accent"
                        >
                          {item.alias}
                        </a>
                      ) : (
                        <h3 className="text-xl">{item.description}</h3>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

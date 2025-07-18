import React from "react";
import livnote from "/src/assets/images/livnote.png";
import { GithubIcon } from "../assets/icons/GithubIcon";
import { BottomArrow } from "../assets/icons/BottomArrow";
import { PlayButton } from "../assets/icons/PlayButton";
import { motion } from "framer-motion";

export const LivnoteHero = () => {


  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <section
        className="pt-40 px-2 flex flex-col justify-start items-center bg-livnoteBg overflow-x-hidden "
        id="home"
      >
        <div
          className="max-w-[1440px] w-full overflow-x-hidden overflow-y-hidden  pt-24 xll:px-12
  "
        >
            <div className="text-livnotePrimary h-8 text-sm font-bold flex justify-start text-left">
              <a
                className="flex justify-center items-center font-normal text-sm xl:text-base rounded-md bg-labelBackground h-full px-4 py-2 cursor-pointer"
                href="https://github.com/osvauld/web-client"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="whitespace-nowrap">We are open-source</span>
                <span className="h-full border-r-[1px] border-labelSperator mx-2"></span>
                <span className="flex text-white4 justify-center items-center whitespace-nowrap">
                  <span className="mr-2 flex justify-center items-center">
                    <GithubIcon color={"#A6B0BB"} size={18} />
                  </span>
                  Star us on GitHub
                  <span className="transform -rotate-90 mt-1">
                    <BottomArrow color={"#A6B0BB"} />
                  </span>
                </span>
              </a>
            </div>
            <h1 className=" text-white1 font-medium font-Jakartha text-left  text-5xl md:text-6xl lg:text-7xl xl:text-8xl  py-10">
              <span className=" whitespace-normal lg:whitespace-nowrap text-livnotePrimary font-JetBrainsMono tracking-tighter">
              Write together, <br /> stay private
              </span>
            </h1>
            <div className="text-faqAnswer font-light text-base md:text-lg xl:text-xl pt-12 tracking-wide max-w-[99vw] text-left font-JetBrainsMono">
            Livnote lets you create and edit notes with others. <br className="hidden md:block" />  live, offline-first, and end to end encrypted.
              <br className="hidden md:block" />  - without anything ever touching a cloud server. 
            </div>
            <div className="flex items-center justify-start gap-4 md:flex-row text-sm flex-wrap pt-12">
              <a
                className="text-livnotePrimary bg-dark4 border rounded-lg border-livnotePrimary flex justify-center items-center cursor-pointer transition whitespace-nowrap px-3 py-2"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="watch demo"
              >
                <PlayButton />
                <span className="ml-1 font-medium"> Watch Demo</span>
              </a>
              <a
                className="rounded-lg font-medium text-black bg-livnotePrimary px-3 py-2 text-sm whitespace-nowrap flex cursor-pointer"
                href="https://getwaitlist.com/waitlist/14960"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="get started"
              >
                <span className="pt-px">Join waitlist</span>
              </a>
            </div>
            <div className="flex justify-center items-center mt-12 border-[10px] border-calBorder rounded-xl">
              <img
                alt="dashboard of osvauld"
                src={livnote.src}
                className=" z-10"
              />
            </div>
         
        </div>
      </section>
    </motion.div>
  );
};

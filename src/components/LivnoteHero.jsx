import React from "react";
import dashboardMobile from "/src/assets/images/dashboardMobile.png";
import HeroKey from "/src/assets/images/HeroKey.png";
import HeroShield from "/src/assets/images/HeroShield.png";
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
        className="pt-20 px-2 flex flex-col justify-start items-center bg-dark4 overflow-x-hidden "
        id="home"
      >
        <div
          className="max-w-[1440px] w-full overflow-x-hidden overflow-y-hidden relative min-h-[55rem] xs:min-h-[60rem] sm:min-h-[65rem] lg:min-h-[80rem] xl:min-h-[95rem]
  "
        >
          <div className="flex justify-between relative">
            <div className="flex items-start">
              <img
                alt="dashboard of osvauld"
                src={HeroShield.src}
                className=""
              />
            </div>

            <div className="transform translate-y-20">
              <img
                alt="dashboard of osvauld"
                src={HeroKey.src}
                className="max-h-[660px]"
              />
            </div>
          </div>

          <div className="absolute top-12 lg:top-32 left-1/2 transform -translate-x-1/2 z-10 w-[95%] max-w-full ">
            <div className="text-blue1 h-8 text-sm font-bold flex justify-center">
              <a
                className="flex mx-auto justify-center items-center font-normal text-sm xl:text-base rounded-md bg-labelBackground h-full px-4 py-2 cursor-pointer"
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
            <h1 className=" text-white1 font-medium font-Jakartha text-center text-5xl md:text-6xl lg:text-7xl xl:text-8xl gradient-text py-10 px-4">
              <span className="whitespace-normal lg:whitespace-nowrap">
               Livnote Bro
              </span>
            </h1>
            <div className="text-faqAnswer font-Inter font-light text-base md:text-lg xl:text-xl text-center pt-12 px-4 tracking-wide max-w-[99vw]">
              Simplify how you manage data over internet. <br /> Keep your data
              offline, but synced. With Osvauld,
              <br className="hidden md:block" /> data exists only at you and your destination.
            </div>
            <div className="flex items-center justify-center gap-4 md:flex-row text-sm flex-wrap pt-12">
              <a
                className="text-blue1 bg-dark4 border rounded-lg border-blue1 flex justify-center items-center cursor-pointer transition whitespace-nowrap px-3 py-2"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="watch demo"
              >
                <PlayButton />
                <span className="ml-1 font-medium"> Watch Demo</span>
              </a>
              <a
                className="rounded-lg font-medium text-black bg-blue1 px-3 py-2 text-sm whitespace-nowrap flex cursor-pointer"
                href="https://getwaitlist.com/waitlist/14960"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="get started"
              >
                <span className="pt-px">Join waitlist</span>
              </a>
            </div>
            <div className="flex justify-center items-center pt-12">
              <img
                alt="dashboard of osvauld"
                src={dashboardMobile.src}
                className=" z-10"
              />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

import { motion } from "framer-motion";
import { useEffect } from "react";
import React from "react";
import mixpanel from "mixpanel-browser";
import dashboard from "/src/assets/images/dashboard.jpeg";

import { GithubIcon } from "../assets/icons/GithubIcon";
import { BottomArrow } from "../assets/icons/BottomArrow";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { PlayButton } from "../assets/icons/PlayButton";
import { BuyMeCoffee } from "../assets/icons/BuyMeCoffee";
import { Image } from "astro:assets";
import { HeroLock } from "../assets/icons/HeroLock";
import { HeroKey } from "../assets/icons/HeroKey";

export const Hero = React.memo(() => {
  // useEffect(() => {
  //   mixpanel.init("7c45196567d67468f4f47b3b1d63f931", {
  //     track_pageview: true,
  //   });
  // }, []);
  return (
    <section
      className="pt-24  px-2 flex flex-col justify-start items-center bg-faqDark min-h-screen overflow-x-hidden"
      id="home"
    >
      <div className="max-w-[1200px] overflow-x-hidden">
        <div className="flex justify-between  relative">
          <span className="items-start trasform -translate-y-10">
            <HeroLock />
          </span>
          <span className="w-[0px] md:w-[400px] "></span>
          <span className="transform -translate-y-24 md:translate-y-0">
            <HeroKey />
          </span>

          <div className="absolute top-[44%] left-1/2  transform -translate-x-1/2 -translate-y-1/2 ">
            <div className="text-blue1 h-8 text-sm font-bold ">
              <a
                className="flex w-3/4 md:w-1/2 mx-auto justify-center items-center font-normal text-sm rounded-md bg-labelBackground h-full px-4 py-2 cursor-pointer"
                href="https://github.com/osvauld/web-client"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="whitespace-nowrap">We are open-source</span>
                <span className="h-full border-r-[1px] border-labelSperator mx-2"></span>
                <span className="flex text-white4 justify-center items-center whitespace-nowrap">
                  <span className="mr-2 flex justify-center items-center">
                    <GithubIcon color={"#A6B0BB"} />
                  </span>
                  Star us on GitHub
                  <span className="transform -rotate-90 mt-1">
                    <BottomArrow color={"#A6B0BB"} />
                  </span>
                </span>
              </a>
            </div>
            <h1 className="text-6xl text-white1  font-Jakartha text-center lg:text-7xl gradient-text pt-16">
              <span className="md:whitespace-nowrap ">
                {" "}
                Credential management{" "}
              </span>
              <br /> for teams <br />
              <span className="">redefined</span>
            </h1>
            <div className="text-faqAnswer font-normal font-Inter text-lg text-left md:text-center pt-12 tracking-wide">
              Open-source, self-hosted tool designed to securely{" "}
              <br className="hidden" /> manage, audit, and share credentials
              within your team.
              <br className="hidden" /> No more scrounging over Slack or Google
              Sheets
            </div>
            <div className="flex justify-center  gap-2 md:flex-row  text-sm flex-wrap pt-12">
              <a
                className=" rounded-md font-normal text-black flex justify-center items-center cursor-pointer bg-blue1 transition whitespace-nowrap  px-3 py-2 "
                href="https://youtu.be/1esLbYmdHQY"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PlayButton />
                <span className="ml-1"> Watch Demo</span>
              </a>

              <a
                className="text-blue1
            bg-faqDark border border-blue1 rounded-md px-3 py-1.5 text-sm whitespace-nowrap  flex cursor-pointer"
                href="https://getwaitlist.com/waitlist/14960"
                target="_blank"
                aria-label="get started"
              >
                <span className="pt-px">Get started for free</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

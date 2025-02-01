import React from "react";
import { useState, useEffect } from "react";
import mixpanel from "mixpanel-browser";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";

import dashboardMobile from "/src/assets/images/dashboardMobile.png";
import HeroKey from "/src/assets/images/HeroKey.png";
import HeroShield from "/src/assets/images/HeroShield.png";
import { GithubIcon } from "../assets/icons/GithubIcon";
import { BottomArrow } from "../assets/icons/BottomArrow";
import { PlayButton } from "../assets/icons/PlayButton";
import { motion, AnimatePresence } from "framer-motion";
import DecryptedText from "./ui/utils/DecryptedText";
import { DiscordIcon } from "../assets/icons/DiscordIcon";

export const Hero = () => {
  const words = ["secrets", "notes", "pins", "credentials"];
  const [currentWord, setCurrentWord] = useState("secrets");
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
      setCurrentWord(words[(wordIndex + 1) % words.length]);
    }, 1500);

    return () => clearTimeout(timer);
  }, [wordIndex]);

  return (
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   whileInView={{ opacity: 1 }}
    //   viewport={{ once: true }}
    //   transition={{ duration: 0.2 }}
    // >
    <section
      className="pt-20 px-2 flex flex-col justify-start items-center bg-dark4 overflow-x-hidden "
      id="home"
    >
      <div className="max-w-[1640px] w-full overflow-x-hidden overflow-y-hidden relative min-h-[55rem] md:min-h-[70rem] lg:min-h-[80rem] xl:min-h-[95rem]">
        <div className="flex justify-center gap-20 relative">
          <div className="flex items-start min-w-[300px]">
            <img
              alt="representation image"
              src={HeroShield.src}
              className="max-h-[620px] xl:-translate-y-28 xl:-translate-x-32"
            />
          </div>

          <div className="transform translate-y-20 min-w-[300px]">
            <img
              alt="representation image"
              src={HeroKey.src}
              className="max-h-[660px]"
            />
          </div>
        </div>

        <div className="absolute top-12 lg:top-32 left-1/2 transform -translate-x-1/2 z-10 w-[95%] max-w-full ">
          <h1 className=" text-white1 font-medium font-Jakartha text-center text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight gradient-text py-10 px-4">
            <span className="whitespace-normal lg:whitespace-nowrap">
              One app {/* <br className="block md:hidden" /> */}
              for
            </span>{" "}
            <br className="block xl:hidden" />{" "}
            <span className="whitespace-normal md:whitespace-nowrap">
              all your <br className="block" />
              <div className="inline-block xl:mt-5">
                <DecryptedText
                  text={currentWord}
                  animateOn="view"
                  speed={75}
                  parentClassName="font-bold"
                  revealDirection="center"
                  className="font-semibold"
                />
              </div>
            </span>
          </h1>
          <div className="text-faqAnswer font-Inter font-light text-base md:text-lg xl:text-xl text-center pt-2 px-4 tracking-wide max-w-[99vw] ">
            Simplify how you manage sensitive data. <br /> Keep your passwords
            offline, but synced. With Osvauld,
            <br className="hidden md:block" /> your secrets are safe,
            accessible, and only yours.
          </div>
          <div className="flex items-center justify-center gap-4 md:flex-row text-sm flex-wrap pt-12">
            <a
              className="text-blue1 font-Jakartha  text-lg bg-dark4 border-2 rounded-xl border-blue1 flex justify-center items-center cursor-pointer transition whitespace-nowrap px-4 py-3"
              href="https://discord.com/invite/kV6gBeM6Fm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="watch demo"
            >
              <DiscordIcon color="#89B4FA" size="20" />
              <span className="ml-2 font-bold "> Connect with us</span>
            </a>
            <a
              className="w-[12.5rem] xs:w-auto flex justify-center items-center rounded-xl text-black bg-blue1 px-4 py-3 text-lg whitespace-nowrap  cursor-pointer"
              href="https://getwaitlist.com/waitlist/14960"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="get started"
            >
              <span className="pt-px font-Jakartha font-bold ">
                Join waitlist
              </span>
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
    // </motion.div>
  );
};

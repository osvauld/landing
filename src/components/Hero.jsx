import React from "react";
import { useEffect, useState } from "react";
import mixpanel from "mixpanel-browser";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";

import dashboardMobile from "/src/assets/images/dashboardMobile.png";
import { GithubIcon } from "../assets/icons/GithubIcon";
import { BottomArrow } from "../assets/icons/BottomArrow";
import { PlayButton } from "../assets/icons/PlayButton";
import { HeroLock } from "../assets/icons/HeroLock";
import { HeroShield } from "../assets/icons/HeroShield";
import { HeroKey } from "../assets/icons/HeroKey";

export const Hero = React.memo(() => {
  return (
    <section
      className="pt-20  px-2 flex flex-col justify-start items-center bg-faqDark overflow-x-hidden min-h-screen"
      id="home"
    >
      <div className="max-w-[1440px] overflow-x-hidden">
        <div className="flex justify-between relative">
          <span className="items-start trasform translate-x-48 lg:translate-x-0 xl:-translate-x-16 -translate-y-4 lg:-translate-y-10 ">
            <HeroShield />
          </span>
          <span className="w-[400px]"></span>
          <span className="transform  md:translate-y-8 lg:translate-y-[10rem] -translate-x-36 lg:translate-x-[8rem] ">
            <HeroKey />
          </span>

          <div className="absolute top-[48%] left-1/2  transform -translate-x-1/2 -translate-y-1/2 ">
            <div className="text-blue1 h-8 text-sm font-bold flex justify-center">
              <a
                className="flex  mx-auto justify-center items-center font-normal text-sm xl:text-base rounded-md bg-labelBackground h-full px-4 py-2 cursor-pointer"
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
            <h1 className="text-6xl text-white1 font-semibold font-Jakartha text-center lg:text-7xl xl:text-8xl gradient-text pt-16 px-4">
              <span className="whitespace-normal lg:whitespace-nowrap">
                Credential
                <br className="block lg:hidden" /> management,
              </span>{" "}
              <br className="block lg:hidden" />{" "}
              <span className="whitespace-normal lg:whitespace-nowrap">
                for teams, <br className="block lg:hidden" />{" "}
                <span className="tracking-wide">Redefined</span>
              </span>
            </h1>
            <div className="text-faqAnswer font-Inter font-light text-base md:text-lg xl:text-xl text-center pt-12 px-4 tracking-wide max-w-[99vw]">
              Open-source, self-hosted tool designed to securely{" "}
              <br className="hidden" /> manage, audit,{" "}
              <br className=" hidden xl:block" /> and share credentials within
              your team.
              <br className=" hidden xl:block" /> No more scrounging over Slack
              or Google Sheets
            </div>
            <div className="flex  items-center justify-center gap-4 md:flex-row  text-sm flex-wrap pt-12">
              <a
                className="rounded-lg font-medium text-black bg-blue1  px-3 py-2 text-sm whitespace-nowrap  flex cursor-pointer"
                href="https://docs.osvauld.com/installation/setting-up-osvauld/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="get started"
              >
                <span className="pt-px ">Get started for free</span>
              </a>
              <a
                className="text-blue1
                bg-faqDark border rounded-lg border-blue1  flex justify-center items-center cursor-pointer transition whitespace-nowrap  px-3 py-2 "
                href="https://youtu.be/1esLbYmdHQY"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="watch demo"
              >
                <PlayButton />
                <span className="ml-1 font-medium"> Watch Demo</span>
              </a>
            </div>
          </div>
        </div>
        <div className="transform  flex justify-center items-center">
          <img
            alt="dashboard of osvauld"
            src={dashboardMobile.src}
            className="w-[95vw] "
          />
        </div>
      </div>
    </section>
  );
});

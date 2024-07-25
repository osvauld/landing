import React from "react";
import { useEffect, useState } from "react";
import mixpanel from "mixpanel-browser";
import dashboard from "/src/assets/images/dashboard.png";
import { GithubIcon } from "../assets/icons/GithubIcon";
import { BottomArrow } from "../assets/icons/BottomArrow";
import { PlayButton } from "../assets/icons/PlayButton";
import { HeroLock } from "../assets/icons/HeroLock";
import { HeroKey } from "../assets/icons/HeroKey";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";

export const Hero = React.memo(() => {
  useEffect(() => {
    CookieConsent.run({
      categories: {
        analytics: {},
      },

      language: {
        default: "en",
        translations: {
          en: {
            consentModal: {
              title: "We use cookies",
              description:
                "We use cookies to understand how many users visit our site and where they come from, which helps us enhance our services. By continuing to browse, you agree to our use of cookies.",
              acceptAllBtn: "Accept",
              acceptNecessaryBtn: "Reject",
            },
          },
        },
      },

      onConsent: ({ cookie }) => {
        if (cookie.categories.length !== 0) {
          // mixpanel.init("7c45196567d67468f4f47b3b1d63f931", {
          //   track_pageview: true,
          // });
          console.log("Sending tracker");
        }
      },
    });
  }, []);

  return (
    <section
      className="pt-24  px-2 flex flex-col justify-start items-center bg-faqDark min-h-screen overflow-x-hidden"
      id="home"
    >
      <div className="max-w-[1400px] overflow-x-hidden">
        <div className="flex justify-between relative">
          <span className="items-start trasform -translate-y-10  translate-x-0 lg:translate-x-16">
            <HeroLock />
          </span>
          <span className="w-0 md:w-[400px] "></span>
          <span className="transform -translate-y-24 md:translate-y-0 md:-translate-x-20">
            <HeroKey />
          </span>

          <div className="absolute top-[44%] left-1/2  transform -translate-x-1/2 -translate-y-1/2 ">
            <div className="text-blue1 h-8 text-sm font-bold ">
              <a
                className="flex w-[80%] md:w-1/2 mx-auto justify-center items-center font-normal text-sm rounded-md bg-labelBackground h-full px-4 py-2 cursor-pointer"
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
            <h1 className="text-6xl text-white1 font-semibold font-Jakartha text-center lg:text-7xl gradient-text pt-16 px-4">
              Credential management for teams <br className="" />{" "}
              <span className="tracking-wide">redefined</span>
            </h1>
            <div className="text-faqAnswer font-Inter font-light text-base md:text-xl text-left md:text-center pt-12 px-4 tracking-wide">
              Open-source, self-hosted tool designed to securely{" "}
              <br className="hidden" /> manage, audit, and share credentials
              within your team.
              <br className="hidden" /> No more scrounging over Slack or Google
              Sheets
            </div>
            <div className="flex justify-center  gap-4 md:flex-row  text-sm flex-wrap pt-12">
              <a
                className=" rounded-lg font-normal text-black flex justify-center items-center cursor-pointer bg-blue1 transition whitespace-nowrap  px-3 py-2 "
                href="https://youtu.be/1esLbYmdHQY"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="watch demo"
              >
                <PlayButton />
                <span className="ml-1"> Watch Demo</span>
              </a>

              <a
                className="text-blue1
            bg-faqDark border border-blue1 rounded-lg px-3 py-1.5 text-sm whitespace-nowrap  flex cursor-pointer"
                href="https://docs.osvauld.com/installation/setting-up-osvauld/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="get started"
              >
                <span className="pt-px">Get started for free</span>
              </a>
            </div>
          </div>
        </div>
        <div className="transform -translate-y-[8rem]  flex justify-center items-center">
          <img
            src={dashboard.src}
            alt="dashboard of osvauld"
            className="w-[95vw] lg:w-full"
          />
        </div>
      </div>
    </section>
  );
});

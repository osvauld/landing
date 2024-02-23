import { motion } from "framer-motion";
import { useEffect } from "react";
import React from "react";
import mixpanel from "mixpanel-browser";
import dashboard from "../assets/images/dashboard.png";
import { GithubIcon } from "../assets/icons/GithubIcon";
import { BottomArrow } from "../assets/icons/BottomArrow";

export const Hero = React.memo(() => {
  useEffect(() => {
    mixpanel.init("7c45196567d67468f4f47b3b1d63f931", {
      track_pageview: true,
      persistence: "localStorage",
    });
    mixpanel.track_pageview();
  }, []);
  return (
    <section
      className="w-screen flex justify-center items-center bg-dark1 mb-0 md:mb-[18vw] lg:mb-[10vw] xl:mb-[10vw] 2xl:mb-60 hero-bg-gradient pb-10  md:pb-44 lg:pb-0"
      id="home"
    >
      <div className="w-[95%] md:w-[800px] xl:w-[1000px] flex flex-col justify-center items-start pt-16 xl:pt-10 md:pt-16 lg:pt-20 text-left">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-blue1 h-8 text-sm sm:text-base w-full mb-6 sm:mt-32 mt-16  font-bold">
            <button
              className="flex w-full justify-center items-center font-normal text-sm rounded-lg bg-blue2 h-full px-4 py-2 cursor-pointer"
              onClick={() => {
                location.assign("https://github.com/osvauld/web-client");
              }}
            >
              <h6>We are open-source</h6>
              <span className="h-full border-r-[1px] border-white4  mx-2"></span>
              <h6 className="flex text-white4 justify-center items-center">
                <span className="mr-2 flex justify-center items-center">
                  <GithubIcon color={"#A6B0BB"} />
                </span>
                Star us on github
                <span className="transform -rotate-90 mt-1">
                  <BottomArrow color={"#A6B0BB"} />
                </span>
              </h6>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl xl:tracking-[-0.2rem] tracking-wide  text-blue1 xl:font-normal xl:px-0 px-0 sm:px-8 md:px-20 lg:px-4 font-Jakartha">
            <h1>
              Share credentials <br />
              <span className="text-white1">within your team,</span> Securely.
            </h1>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="text-white1 font-light text-sm lg:text-base xl:text-lg xl:min-w-[30vw] xl:max-w-[50vw] sm:text-base mt-10 xl:mt-6 text-left">
            Open source solution built for collaboration to share all your{" "}
            <span className="text-blue1">
              sensitive account passwords or any other credentials.
            </span>{" "}
            No more struggles with Slack or Google Sheets. With osvauld, you are
            in full control of your data.
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="w-full"
        >
          <div className="flex justify-start  gap-2 md:flex-row mt-6 sm:mt-14 mb-24 xl:my-6 ">
            <div
              className="bg-blue1 rounded-lg flex justify-center items-center text-black font-normal px-3 !py-1.5 sm:mr-4 xl:mr-0 lg:mr-6 mb-2 sm:mb-0 whitespace-nowrap"
              onClick={() => setIsModalOpen(true)}
            >
              Get Started
            </div>
            <a
              className=" rounded-lg font-normal text-blue1 flex justify-center items-center cursor-pointer bg-dark1 transition whitespace-nowrap hover:bg-blue2 px-3"
              href="https://cal.com/abrahamgeorge/30min"
            >
              Book a demo
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10, zIndex: 20 }}
          animate={{ opacity: 1, y: 0, zIndex: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="relative w-screen top-10 xl:top-0 right-0 xl:right-20 flex justify-center md:justify-start items-center mb-40 xl:mb-[40vw]">
            <img
              src={dashboard}
              alt="dashboard of osvauld"
              className="w-full lg:w-3/4 xl:w-5/6 2xl:w-[1200px] mx-auto absolute z-10 rounded-xl hero-dashboard-border-gradient lg:top-6 xl:top-0"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
});

import { motion } from "framer-motion";
import React from "react";
import { GithubIcon } from "../assets/icons/GithubIcon";

export const OpenSourceV2 = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="h-[56rem] xs:h-[42rem] w-full max-w-[1200px] mx-auto px-8"
  >
    <h2 className="text-5xl lg:text-6xl  font-light font-Jakartha text-center lg:text-left gradient-text-bottom  leading-tight lg:leading-[1.15] mb-6">
      Audit, contribute, <br /> and redistribute. <br />
      <span className="font-semibold">
        Osvauld is fully <br /> open-source.
      </span>{" "}
    </h2>
    <h3 className=" text-center lg:text-left font-Jakartha font-extralight text-white1 gradient-text-bottom text-4xl ">
      Under AGPL-3.0 license.
    </h3>

    <div className="w-full h-[15rem] grid grid-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-4 gap-4 mt-12 text-base lg:text-xl">
      <a
        className="bg-labelBackground max-w-[16rem] max-h-[10rem] rounded-md flex flex-col justify-center items-center text-faqAnswer gap-2 lg:gap-4 cursor-pointer"
        target="_blank"
        href="https://github.com/osvauld/osvauld"
      >
        <GithubIcon color={"#A6B0BB"} size={32} />
        <span>Star us on Github</span>
      </a>
      <a
        className="bg-labelBackground max-w-[16rem] max-h-[10rem] rounded-md flex flex-col justify-center items-center text-faqAnswer gap-2 lg:gap-4 cursor-pointer"
        target="_blank"
        href="https://github.com/osvauld/osvauld/issues"
      >
        <GithubIcon color={"#A6B0BB"} size={32} />
        <span>Become a Contributor</span>
      </a>
      <a
        className="bg-labelBackground max-w-[16rem] max-h-[10rem] rounded-md flex flex-col justify-center items-center text-faqAnswer gap-2 lg:gap-4 cursor-pointer"
        target="_blank"
        href="https://buymeacoffee.com/osvauld"
      >
        <GithubIcon color={"#A6B0BB"} size={32} />
        <span>Become a Sponsor</span>
      </a>
      <a
        className="bg-labelBackground max-w-[16rem] max-h-[10rem] rounded-md flex flex-col justify-center items-center text-faqAnswer gap-2 lg:gap-4 cursor-pointer"
        target="_blank"
        href="https://buymeacoffee.com/osvauld"
      >
        <GithubIcon color={"#A6B0BB"} size={32} />
        <span>Buy me a Coffee</span>
      </a>
    </div>
  </motion.section>
);

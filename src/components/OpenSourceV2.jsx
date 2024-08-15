import { motion } from "framer-motion";
import React from "react";
import { GithubIcon } from "../assets/icons/GithubIcon";
import { BuyMeCoffee } from "../assets/icons/BuyMeCoffee";

export const OpenSourceV2 = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="h-[56rem] xs:h-[32rem] w-full max-w-[1200px] flex flex-col justify-start gap-4 md:flex-row md:justify-around  mx-auto mt-0 lg:mt-20 px-8"
  >
    <div>
      <h2 className="text-5xl lg:text-6xl  font-light font-Jakartha text-center lg:text-left gradient-text-bottom  leading-tight lg:leading-[1.15] mb-6">
        Audit, contribute, <br /> and redistribute. <br />
        <span className="font-semibold">
          Osvauld is fully <br /> open-source.
        </span>{" "}
      </h2>
      <h3 className=" text-center lg:text-left font-Jakartha font-extralight text-white1 gradient-text-bottom text-4xl ">
        Under AGPL-3.0 license.
      </h3>
    </div>

    <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[24rem]  text-base lg:text-xl">
      <a
        className="bg-dark5 h-[12rem] rounded-md flex flex-col justify-center items-center text-faqAnswer  cursor-pointer col-span-2  px-2"
        target="_blank"
        href="https://github.com/osvauld/osvauld"
      >
        <GithubIcon color={"#A6B0BB"} size={32} />
        <span>Star us on Github</span>
      </a>
      <a
        className="bg-dark5 h-[12rem] rounded-md flex flex-col justify-center items-center text-faqAnswer  cursor-pointer col-span-1 px-2"
        target="_blank"
        href="https://github.com/osvauld/osvauld/issues"
      >
        <GithubIcon color={"#A6B0BB"} size={32} />
        <span className="whitespace-nowrap">Become a Contributor</span>
      </a>
      <a
        className="bg-dark5 h-[12rem] rounded-md flex flex-col justify-center items-center text-faqAnswer  cursor-pointer col-span-1  px-2"
        target="_blank"
        href="https://buymeacoffee.com/osvauld"
      >
        <BuyMeCoffee color={"#A6B0BB"} size={32} />
        <span>Become a Sponsor</span>
      </a>
    </div>
  </motion.section>
);

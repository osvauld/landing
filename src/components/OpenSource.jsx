import { motion } from "framer-motion";
import { RustLogo } from "../assets/logos/RustLogo";
import { WasmLogo } from "../assets/logos/WasmLogo";
import { TypescriptLogo } from "../assets/logos/TypescriptLogo";
import { SvelteLogo } from "../assets/logos/SvelteLogo";
import { GolangLogo } from "../assets/logos/GolangLogo";

export const OpenSource = () => (
  <section className="py-12 bg-dark1 w-full">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5">
        <div className="text-center  font-light w-full h-full text-white3 flex flex-col gap-10 items-center">
          <h2 className="text-5xl font-light tracking-[-0.2rem]">
            Proudly Open-Source
          </h2>
          <div className="w-[60%] grid grid-cols-2 gap-4 sm:grid-cols-5 sm:gap-0">
            <span className="flex justify-center items-center">
              <SvelteLogo />
            </span>
            <span className="hidden md:flex md:justify-center md:items-center">
              <TypescriptLogo />
            </span>
            <span className="flex justify-center items-center -translate-x-3 md:-translate-x-0">
              <GolangLogo />
            </span>
            <span className="flex justify-center items-center">
              <WasmLogo />
            </span>
            <span className="flex justify-center items-center">
              <RustLogo />
            </span>
          </div>
          <h6 className="max-w-[95%] lg:max-w-[60vw] text-xl">
            Osvauld is 100% Open-source,{" "}
            <span className="text-blue1">
              source code comes under under the AGPL-3.0 license and can be
              easily self-hosted.
            </span>
            You are free to audit, contribute and redistribute it.
          </h6>
          <h6 className="max-w-[95%] lg:max-w-[50vw] text-xl">
            Osvauld’s Vulnerability Disclosure Program enlists the help of the
            hacker community to make Osvauld more secure.
          </h6>
          <div className="flex flex-col lg:flex-row gap-4 text-blue1">
            <button className="border border-blue1 hover:bg-blue1 hover:text-dark1 rounded-md px-3 py-1.5">
              Become a Contributor
            </button>
            <button className="border border-blue1 hover:bg-blue1 hover:text-dark1  rounded-md px-3 py-1.5">
              Become a Sponsor
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

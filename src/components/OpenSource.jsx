import { motion } from "framer-motion";
import React from "react";
import { GithubIcon } from "../assets/icons/GithubIcon";

export const OpenSource = () => (
  <section className="py-12 xl:pt-0 bg-dark4 w-full">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5 ">
        <div className="text-center text-lg font-extralight w-full h-full text-white3 flex flex-col items-center">
          <h2 className="text-3xl lg:text-4xl font-Jakartha  font-light xl:tracking-normal text-gradient mb-2">
            Audit, contribute, and redistribute.
          </h2>

          <span className="max-w-[95%] lg:max-w-[50vw] text-3xl lg:text-4xl font-medium text-gradient mb-12">
            Osvauld is fully open-source.{" "}
          </span>
          <span className="max-w-[95%] lg:max-w-[60vw] text-2xl lg:text-3xl font-light tracking-tight text-gradient ">
            Under MIT license.
          </span>
          <div className="mt-20 w-full flex flex-col lg:flex-row justify-center items-center gap-4 text-faqAnswer text-base lg:text-xl">
            <a
              href="https://github.com/osvauld"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-1/4  feature-card flex flex-col items-center px-48 py-10"
            >
              <GithubIcon size="32" />
              <span className="whitespace-nowrap mt-3">
                Become a Contributor
              </span>
            </a>
            <a
              href="https://github.com/osvauld"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-1/4 feature-card flex flex-col items-center px-48 py-10"
            >
              <GithubIcon size="32" />
              <span className="whitespace-nowrap mt-3">Star us on Github</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

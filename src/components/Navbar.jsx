import { useState } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { GithubIcon } from "../assets/icons/GithubIcon";
import { BottomArrow } from "../assets/icons/BottomArrow";

const navbarLinks = [
  { label: "Why Osvauld", href: "#why", ariaLabel: "why osvauld" },
  {
    label: "Documentation",
    href: "https://docs.osvauld.com",
    ariaLabel: "Documentation",
  },
  { label: "Community", href: "#community", ariaLabel: "Community" },
  { label: "About", href: "#about", ariaLabel: "About" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-[95%] h-20 xl:h-24 flex flex-col justify-center items-center fixed bg-dark1 lg:bg-dark1Transparent z-40 lg:backdrop-blur-xl ">
      <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex justify-start items-center grow basis-0">
            <h3 className="text-blue1 font-Jakartha font-semibold text-4xl">
              osvauld
            </h3>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
          className="xl:ml-auto xl:mr-4"
        >
          <div className="hidden lg:flex h-full gap-6 xl:mx-4">
            {navbarLinks.map(({ href, label, ariaLabel }, index) => (
              <React.Fragment key={label}>
                <a
                  className="text-white1 font-normal text-xs flex justify-center items-center"
                  href={href}
                  aria-label={ariaLabel}
                >
                  {label}
                  {index === 0 ? <BottomArrow color={"#fff"} /> : null}
                </a>
              </React.Fragment>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex justify-center items-center gap-2">
            <div className="grow basis-0 justify-end hidden lg:flex">
              <a
                className="text-white rounded-lg
            bg-dark1 cursor-pointer flex whitespace-nowrap text-sm  border border-blue1  px-3 py-1.5 "
                href="https://cal.com/abrahamgeorge/30min"
                target="_blank"
                aria-label="Book a demo"
                aria-labelledby="Book a demo"
              >
                <span className="pt-px">Book a demo</span>
              </a>
            </div>
            <div className="grow basis-0 justify-end hidden lg:flex">
              <a
                className="text-dark1
            bg-blue1 cursor-pointer rounded-lg px-3 py-1.5 text-sm whitespace-nowrap  flex"
                href="https://github.com/osvauld"
                target="_blank"
                aria-label="get started"
              >
                <span className="pt-px">Get started</span>
              </a>
            </div>
          </div>
        </motion.div>
        <div
          className="lg:hidden flex flex-col  px-2 py-3  bg-dark1 border-solid border border-gray-600 rounded-md cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500 "></div>
        </div>
      </div>
      {/* Mobile navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="flex flex-col mt-16 lg:hidden absolute top-4 left-0  bg-dark1 z-50 w-full 
        items-center gap-10 pb-10  border-y border-solid border-customDarkBg3 pt-10 text-sm
        "
            >
              {navbarLinks.map(({ label, href, ariaLabel }) => (
                <a
                  key={href}
                  className="navbar-link"
                  href={href}
                  onClick={() => setIsOpen(false)}
                  aria-label={ariaLabel}
                >
                  {label}
                </a>
              ))}
              <a
                className="text-dark1 custom-border-gray rounded-lg
           bg-blue1 cursor-pointer pl-6 pr-8 pt-2 pb-2 text-sm flex justify-center items-center whitespace-nowrap"
                href="https://github.com/osvauld"
                target="_blank"
              >
                <GithubIcon color={"black"} />
                <span className="ml-2">Contribute</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

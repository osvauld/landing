import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { OsvauldLogo } from "../assets/logos/OsvauldLogo";
import { GithubIcon } from "../assets/icons/GithubIcon";

const navbarLinks = [
  { label: "Why osvauld", href: "#why", ariaLabel: "why osvauld" },
  { label: "Community", href: "#community", ariaLabel: "Community" },
  { label: "About", href: "#about", ariaLabel: "About" },
  { label: "Documentation", href: "#home", ariaLabel: "Documentation" },
  { label: "Get started", href: "#getStarted", ariaLabel: "Get started" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-20 flex flex-col justify-center items-center fixed bg-dark1 lg:bg-dark1Transparent z-40 lg:backdrop-blur-xl">
      <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <a className="navbar-link" href="#home" aria-label="Home">
            <div className="flex justify-start items-center grow basis-0">
              <div className="text-white mr-2 text-6xl">
                <OsvauldLogo />
              </div>
              <div className="text-blue1 font-['Inter'] font-bold text-xl">
                osvauld
              </div>
            </div>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="hidden lg:flex h-full pl-12 pb-2">
            {navbarLinks.map(({ href, label, ariaLabel }) => (
              <a
                className="navbar-link"
                href={href}
                aria-label={ariaLabel}
                key={label}
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className='flex justify-center items-center gap-1'>
          <div className="grow basis-0 justify-end hidden lg:flex">
              <a
                className="text-white rounded-lg
            bg-dark1 cursor-pointer flex whitespace-nowrap text-sm  border border-blue1  px-2.5 py-1.5 "
                href="https://github.com/osvauld"
                target="_blank"
                aria-label="book demo"
              >
                <span className="pt-px">Book a demo</span>
              </a>
            </div>
              <div className="grow basis-0 justify-end hidden lg:flex">
              <a
                className="text-dark1
            bg-blue1 cursor-pointer rounded-lg px-2.5 py-1.5 text-sm whitespace-nowrap  flex"
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
        items-center gap-10 pb-10 border-y border-solid border-customDarkBg3 pt-10 text-sm
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
                className="text-dark1 custom-border-gray rounded-xl
           bg-blue1 cursor-pointer pl-6 pr-8 pt-2 pb-2 text-sm flex justify-center items-center whitespace-nowrap"
                href="https://github.com/"
                target="_blank"
              >
                <GithubIcon />
                Source code
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

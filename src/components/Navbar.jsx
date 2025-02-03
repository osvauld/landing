import React from "react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mixpanel from "mixpanel-browser";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";

import { HoverBorderGradient } from "./ui/hover-border-gradient";

import { GithubIcon } from "../assets/icons/GithubIcon";
import { BuyMeCoffee } from "../assets/icons/BuyMeCoffee";

const navbarLinks = [
  // {
  //   label: "Pricing",
  //   href: "/pricing",
  //   ariaLabel: "Pricing",
  // },
  {
    label: "Our Story",
    href: "/story",
    ariaLabel: "our story",
  },
  {
    label: "FAQ",
    href: "/faq",
    ariaLabel: "FAQ",
  },
  {
    label: "Book a Demo",
    href: "/demo",
    ariaLabel: "Book a Demo",
  },

  // {
  //   label: "About us",
  //   href: "https://docs.osvauld.com/introduction/overview/",
  //   ariaLabel: "About Us",
  // },
  // {
  //   label: "Documentation",
  //   href: "https://docs.osvauld.com/introduction/overview/",
  //   ariaLabel: "Documentation",
  // },
];

const scrollToTop = () => {
  window.location.href = "/";
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
              title: "We use analytics",
              description:
                "We use analytics to collect visitor insights, which helps us enhance our services. By continuing to browse, you agree to our use of analytics.",
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
        }
      },
    });
  }, []);

  return (
    <nav className="w-screen h-28 flex justify-center items-center fixed z-40 backdrop-blur-xl">
      <div className="w-full mx-auto px-4 flex items-center relative max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex justify-start items-center grow basis-0">
            <button
              className="text-white font-Jakartha font-bold text-4xl pl-2 p-3"
              onClick={scrollToTop}
            >
              <span>osvauld</span>
            </button>

            <HoverBorderGradient
              containerClassName="rounded-lg "
              as="button"
              className="bg-gradient-to-r from-[#373946] to-[#16171F] flex items-center space-x-2 px-2 py-1"
            >
              <span className="font-Mono font-medium text-sm"> BETA</span>
            </HoverBorderGradient>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          exit={{ opacity: 0 }}
          className="xl:ml-auto mr-4 ml-auto"
        >
          <div className="hidden lg:flex h-full gap-10 xl:mx-2 py-2 cursor-pointer ">
            {navbarLinks.map(({ href, label, ariaLabel }) => (
              <React.Fragment key={label}>
                <a
                  className="text-white1 font-medium font-Jakartha text-sm flex justify-center items-center"
                  href={href}
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}
                >
                  {label}
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
          <div className="flex justify-center items-center gap-8">
            <div className="grow basis-0 justify-end hidden lg:flex gap-5">
              <a
                className="font-Jakartha rounded-xl text-sm font-medium text-white2 flex justify-center items-center cursor-pointer bg-calBorder transition whitespace-nowrap hover:bg-blue2 px-3 py-2 "
                href="https://github.com/osvauld/osvauld"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon size="16" color="#F4F2F0" />
                <span className="ml-1">Star us on Github</span>
              </a>
              <a
                className=" rounded-xl text-sm font-medium  text-blue1 flex justify-center items-center cursor-pointer bg-dark4 transition whitespace-nowrap hover:bg-blue2 px-3 py-2 border-2 border-blue1"
                href="https://getwaitlist.com/waitlist/14960"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="ml-1">Join Waitlist</span>
              </a>
            </div>
          </div>
        </motion.div>
        <div
          className="lg:hidden flex flex-col  px-2 py-3  border-solid border border-gray-600 rounded-md cursor-pointer backdrop-blur-xl mr-2"
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
            exit={{ opacity: 0, transition: { duration: 0 } }}
            transition={{ duration: 0.1 }}
          >
            <div
              className={`bg-dark4 flex flex-col mt-16 lg:hidden absolute top-12 left-0   z-50 w-full 
        items-center gap-10 pb-10  border-y border-solid border-customDarkBg3 pt-10 text-sm
            `}
            >
              {navbarLinks.map(({ label, href, ariaLabel }) => (
                <a
                  key={href}
                  className=" text-white1 font-extralight font-Jakartha text-sm "
                  href={href}
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  aria-label={ariaLabel}
                >
                  {label}
                </a>
              ))}
              <a
                className="text-dark1 custom-border-gray rounded-md
           bg-blue1 cursor-pointer pl-6 pr-8 pt-2 pb-2 text-sm flex justify-center items-center whitespace-nowrap"
                href="https://github.com/osvauld"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon color={"black"} />
                <span className="ml-2 font-medium ">Star us on Github</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

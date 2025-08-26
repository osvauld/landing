import React from "react";
import { useState, useEffect } from "react";

import { GithubIcon } from "../assets/icons/GithubIcon";

const navbarLinks = [
  {
    label: "Livnote",
    href: "/livnote",
    ariaLabel: "Livnote",
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
  {
    label: "Our story",
    href: "/story",
    ariaLabel: "our story",
  },
];

const scrollToTop = () => {
  window.location.href = "/";
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const Navbar = ({ isLivnote }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFooterInContact, setIsFooterInContact] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("page-footer");
    if (!footer) return;

    let timeoutId;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const footerRect = footer.getBoundingClientRect();
        const footerTop = footerRect.top;

        // Check if footer top is at or above 80px from viewport top
        setIsFooterInContact(footerTop <= 80);
      }, 10); // 10ms debounce
    };

    window.addEventListener("scroll", handleScroll);

    // Check initial position
    const footerRect = footer.getBoundingClientRect();
    setIsFooterInContact(footerRect.top <= 80);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  // useEffect(() => {
  //   CookieConsent.run({
  //     categories: {
  //       analytics: {},
  //     },

  //     language: {
  //       default: "en",
  //       translations: {
  //         en: {
  //           consentModal: {
  //             title: "We use analytics",
  //             description:
  //               "We use analytics to collect visitor insights, which helps us enhance our services. By continuing to browse, you agree to our use of analytics.",
  //             acceptAllBtn: "Accept",
  //             acceptNecessaryBtn: "Reject",
  //           },
  //         },
  //       },
  //     },

  //     onConsent: ({ cookie }) => {
  //       if (cookie.categories.length !== 0) {
  //         // mixpanel.init("7c45196567d67468f4f47b3b1d63f931", {
  //         //   track_pageview: true,
  //         // });
  //       }
  //     },
  //   });
  // }, []);

  return (
    <nav className="w-screen h-20 flex justify-center items-center fixed z-40 backdrop-blur-xl">
      <div className="w-full mx-auto px-4 flex items-center relative max-w-[1400px]">
        <div className="flex justify-start items-center grow basis-0">
          <button
            className="font-Jakartha font-medium text-4xl pl-2 p-3"
            onClick={scrollToTop}
          >
            {isLivnote ? (
              <span
                className={`${
                  isFooterInContact ? "text-black" : "text-livnotePrimary"
                }`}
              >
                Livnote
              </span>
            ) : (
              <span
                className={`${
                  isFooterInContact ? "text-black" : "text-white3"
                }`}
              >
                osvauld
              </span>
            )}
          </button>
        </div>
        <div
          className="xl:ml-auto mr-4 ml-auto"
        >
          <div className="hidden lg:flex h-full gap-10 xl:mx-4 py-2 cursor-pointer ">
            {navbarLinks.map(({ href, label, ariaLabel }) => (
              <React.Fragment key={label}>
                <a
                  className="text-white1 font-extralight font-Jakartha text-sm flex justify-center items-center"
                  href={href}
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}
                >
                  {label}
                </a>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center gap-8">
          <div className="grow basis-0 justify-end hidden lg:flex">
            <a
              className={`rounded-md font-normal  flex justify-center items-center cursor-pointer bg-dark4 transition whitespace-nowrap hover:bg-blue2 px-3 py-2 border ${
                isLivnote
                  ? " text-livnotePrimary border-livnotePrimary bg-livnoteBg"
                  : " text-blue1 border-blue1 bg-dark4"
              }`}
              href="https://getwaitlist.com/waitlist/14960"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="ml-1">Join Waitlist</span>
            </a>
          </div>
        </div>
        <div
          className="lg:hidden flex flex-col  px-2 py-3  border-solid border border-gray-600 rounded-md cursor-pointer backdrop-blur-xl mr-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`w-5 h-0.5   mb-1 ${
              isFooterInContact ? "bg-black" : "bg-gray-500"
            }`}
          ></div>
          <div
            className={`w-5 h-0.5   mb-1 ${
              isFooterInContact ? "bg-black" : "bg-gray-500"
            }`}
          ></div>
          <div
            className={`w-5 h-0.5 ${
              isFooterInContact ? "bg-black" : "bg-gray-500"
            }`}
          ></div>
        </div>
      </div>
      {/* Mobile navbar */}
      {isOpen && (
        <div
          className={`${
            isLivnote ? "bg-livnoteBg" : "bg-dark4"
          } flex flex-col mt-16 lg:hidden absolute top-4 left-0   z-50 w-full 
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
            className={`text-dark1 custom-border-gray rounded-md
            cursor-pointer pl-6 pr-8 pt-2 pb-2 text-sm flex justify-center items-center whitespace-nowrap ${
              isLivnote ? "bg-livnotePrimary" : "bg-blue1"
            }`}
            href="https://github.com/osvauld"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon color={"black"} />
            <span className="ml-2">Contribute</span>
          </a>
        </div>
      )}
    </nav>
  );
};

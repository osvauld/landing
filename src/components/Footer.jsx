import { DiscordIcon } from "../assets/icons/DiscordIcon";
import { LinktreeIcon } from "../assets/icons/LinktreeIcon";
import { LinkdinIcon } from "../assets/icons/LinkdinIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { GithubIcon } from "../assets/icons/GithubIcon";

export const Footer = ({ faq }) => {
  return (
    <footer>
      <div
        className={`pt-10 lg:pt-20 lg:pb-12 ${
          faq ? " bg-faqDark" : "bg-dark1"
        } radius-for-skewed`}
      >
        <div className="w-full container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5">
          <div className=" flex flex-col sm:flex-row justify-start items-center">
            <div
              className={`${
                faq ? "hidden" : ""
              } w-full lg:w-1/2 flex justify-start items-center lg:justify-center xl:justify-start lg:mb-0`}
            >
              <div className=" w-full flex flex-col gap-4 font-light mb-6">
                <a
                  href="https://getwaitlist.com/waitlist/14960"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex bg-blue1 text-dark1  cursor-pointer justify-center items-center px-3 py-1.5 rounded whitespace-nowrap min-w-[20rem] w-full xl:w-auto">
                    <span className="ml-2 font-normal">Request Beta</span>
                  </button>
                </a>
                <a
                  href="https://cal.com/abrahamgeorge/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex border border-blue1 cursor-pointer rounded text-blue1 justify-center items-center px-3 py-1.5 whitespace-nowrap min-w-[20rem] w-full xl:w-auto">
                    <span className="ml-2">Book a demo</span>
                  </button>
                </a>
              </div>
            </div>
            <div className="w-[95%] lg:w-1/2  justify-center xl:justify-start items-start text-white1 gap-8 lg:gap-12 text-xs font-light hidden">
              <ul className="flex flex-col justify-start items-start gap-4">
                <li>
                  <span className="font-medium">Product</span>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white4 lg:text-white1"
                    aria-label="Features"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white4 lg:text-white1"
                    aria-label="Integrations"
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white4 lg:text-white1"
                    aria-label="Pricing"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white4 lg:text-white1"
                    aria-label="Roadmap"
                  >
                    Roadmap
                  </a>
                </li>
              </ul>
              <ul className="flex flex-col justify-start items-start gap-4">
                <li>
                  <span className="font-medium">Company</span>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white4 lg:text-white1"
                    aria-label="About"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white4 lg:text-white1"
                    aria-label="Our team"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white4 lg:text-white1 whitespace-nowrap"
                    aria-label="Our Values"
                  >
                    Our Values
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white4 lg:text-white1"
                    aria-label="Blog"
                  >
                    Blog
                  </a>
                </li>
              </ul>
              <ul className="flex flex-col justify-start items-start gap-4">
                <li>
                  <span className="font-medium">Community</span>
                </li>
                <li>
                  <a
                    href="https://discord.com/invite/kV6gBeM6Fm"
                    className="text-white4 lg:text-white1"
                    aria-label="Discord"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/osvauld"
                    className="text-white4 lg:text-white1"
                    aria-label="Github"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/osvauld"
                    className="text-white4 lg:text-white1"
                    aria-label="LinkedIn"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/osvauld/"
                    className="text-white4 lg:text-white1"
                    aria-label="Instagram"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
              <ul className="flex flex-col justify-start items-start gap-4">
                <li>
                  <span className="font-medium">Resources</span>
                </li>
                <li>
                  <a
                    href=""
                    className="text-white4 lg:text-white1"
                    aria-label="Downloads"
                  >
                    Downloads
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-white4 lg:text-white1"
                    aria-label="Docs"
                  >
                    Docs
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full my-6 gap-4 lg:gap-20 xl:gap-0">
            <div className="w-full xl:w-2/3 flex flex-col lg:flex-row justify-between lg:pr-14 items-center text-white4 text-xs gap-4">
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a
                  href="/Terms"
                  className="whitespace-nowrap hover:text-white1"
                >
                  Terms and Conditions
                </a>
                <a
                  href="/Privacy"
                  className="whitespace-nowrap hover:text-white1"
                >
                  Privacy Policy
                </a>
              </div>
              <span className="whitespace-nowrap text-center lg:text-left">
                ©2024 Osvauld. All rights reserved.
              </span>
            </div>
            <nav className="flex gap-8 my-4 xl:my-0">
              {[
                {
                  href: "https://linktr.ee/osvauld",
                  Icon: LinktreeIcon,
                  label: "Linktree",
                },
                {
                  href: "https://github.com/osvauld",
                  Icon: GithubIcon,
                  label: "Github",
                },
                {
                  href: "https://discord.gg/BVQtV6gS2c",
                  Icon: DiscordIcon,
                  label: "Discord",
                },
                {
                  href: "https://www.linkedin.com/company/osvauld",
                  Icon: LinkdinIcon,
                  label: "LinkedIn",
                },
                {
                  href: "https://www.instagram.com/osvauld/",
                  Icon: InstagramIcon,
                  label: "Instagram",
                },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={`${label} Icon`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Icon color="#A6B0BB" />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

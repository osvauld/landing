import { DiscordIcon } from "../assets/icons/DiscordIcon";
import { LinktreeIcon } from "../assets/icons/LinktreeIcon";
import { LinkdinIcon } from "../assets/icons/LinkdinIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { GithubIcon } from "../assets/icons/GithubIcon";

export const Footer = () => {
  return (
    <footer>
      <div className="pt-10  lg:pt-20 lg:pb-12 bg-dark1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-full md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className=" w-full lg:w-[95vw] h-[40vh  flex flex-col lg:flex-row justify-center items-center">
            <div className="w-full lg:w-1/2 flex justify-start items-center lg:justify-center xl:justify-start mb-10 lg:mb-0">
              <div className="bg-dark2 w-[90vw] lg:w-1/2 rounded-lg px-6 py-6 text-lg text-white1 flex flex-col justify-center items-start whitespace-nowrap">
                <span>We are rolling out our private beta</span>
                <a
                  className="flex bg-blue1 text-dark1 justify-center items-center px-3 py-1.5 rounded whitespace-nowrap mt-4 text-base"
                  aria-label="Join waitlist"
                  href="https://getwaitlist.com/waitlist/14960"
                >
                  {" "}
                  <span className="ml-2">Join waitlist</span>
                </a>
              </div>
            </div>
            <div className=" w-[95%] lg:w-1/2 flex justify-center xl:justify-start items-start text-white1 gap-8 lg:gap-12 text-xs font-light">
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
                    href="https://discord.gg/umffkNPd"
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
                    aria-label="Linkdin"
                  >
                    Linkdin
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
          <div className="pt-10 w-full flex flex-col lg:flex-row justify-between items-center text-white4 text-xs">
            <span className="whitespace-nowrap">© osvauld 2024 </span>
            <div className="w-full flex flex-col lg:flex-row gap-4 justify-center xl:justify-end items-center pb-10 lg:pb-0 ">
              <div className="w-2/3 xl:w-auto mt-6 xl:mt-3 flex gap-10 justify-center items-center my-2 xl:pr-12">
                <a href="https://linktr.ee/osvauld" aria-label="Linktree Icon">
                  <LinktreeIcon color={"#A6B0BB"} />
                </a>
                <a href="https://github.com/osvauld" aria-label="Github Icon">
                  <GithubIcon color={"#A6B0BB"} />
                </a>
                <a href="https://discord.gg/umffkNPd" aria-label="Discord Icon">
                  <DiscordIcon color={"#A6B0BB"} />
                </a>
                <a
                  href="https://www.linkedin.com/company/osvauld"
                  aria-label="LinkdinIcon"
                >
                  <LinkdinIcon color={"#A6B0BB"} />
                </a>
                <a
                  href="https://www.instagram.com/osvauld/"
                  aria-label="Instagram Icon"
                >
                  <InstagramIcon color={"#A6B0BB"} />
                </a>
              </div>
              <div className="w-2/3 xl:w-auto flex justify-between xl:justify-end xl:gap-4 items-center xl:pt-1">
                <span>Terms of use</span>
                <a href="/privacy">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

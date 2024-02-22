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
            <div className="w-full lg:w-1/2 mb-10">
              <div className="bg-dark2 w-[90vw] lg:w-1/2 rounded-lg px-3 py-8 text-lg text-white1 flex flex-col justify-center items-center">
                <h6>Any questions or feedbacks?</h6>
                <button className="flex bg-blue1 text-dark1 justify-center items-center px-3 py-1.5 rounded whitespace-nowrap mt-4 text-base">
                  {" "}
                  <DiscordIcon />
                  <span className="ml-2">Chat with us on Discord</span>
                </button>
              </div>
            </div>
            <div className=" w-full lg:w-1/2 flex text-white1 gap-12 text-xs font-light">
              <ul className="flex flex-col justify-start items-start gap-4">
                <h6 className="font-medium">Product</h6>
                <a href="" className="text-white4 lg:text-white1">
                  Features
                </a>
                <a href="" className="text-white4 lg:text-white1">
                  Integrations
                </a>
                <a href="" className="text-white4 lg:text-white1">
                  Pricing
                </a>
                <a href="" className="text-white4 lg:text-white1">
                  Roadmap
                </a>
                <a href="" className="text-white4 lg:text-white1">
                  Docs
                </a>
              </ul>
              <ul className="flex flex-col justify-start items-start gap-4">
                <h6 className="font-medium">Company</h6>
                <a href="" className="text-white4 lg:text-white1">
                  About
                </a>
                <a href="" className="text-white4 lg:text-white1">
                  Our Team
                </a>
                <a
                  href=""
                  className="text-white4 lg:text-white1 whitespace-nowrap"
                >
                  Our Values
                </a>
                <a href="" className="text-white4 lg:text-white1">
                  Blog
                </a>
              </ul>
              <ul className="flex flex-col justify-start items-start gap-4">
                <h6 className="font-medium">Community</h6>
                <a href="" className="text-white4 lg:text-white1">
                  Discord
                </a>
                <a href="" className="text-white4 lg:text-white1">
                  Github
                </a>
                <a href="" className="text-white4 lg:text-white1">
                  Linkdin
                </a>
                <a href="" className="text-white4 lg:text-white1">
                  Instagram
                </a>
              </ul>
              <ul className="flex flex-col justify-start items-start gap-4">
                <h6 className="font-medium">Resources</h6>
                <a href="" className="text-white4 lg:text-white1">
                  Downloads
                </a>
                <a href="" className="text-white4 lg:text-white1">
                  Documentation
                </a>
              </ul>
            </div>
          </div>
          <div className="pt-10 w-full flex flex-col lg:flex-row justify-between items-center text-white4 text-xs">
            <span className="whitespace-nowrap">© 2024 osvauld</span>
            <div className="w-full flex flex-col lg:flex-row gap-4 justify-center xl:justify-end items-center pb-10 lg:pb-0">
              <div className="w-2/3 xl:w-auto flex gap-10 justify-center items-center my-2">
                <LinktreeIcon color={"#A6B0BB"} />
                <GithubIcon color={"#A6B0BB"} />
                <DiscordIcon color={"#A6B0BB"} />
                <LinkdinIcon color={"#A6B0BB"} />
                <InstagramIcon color={"#A6B0BB"} />
              </div>
              <div className="w-2/3 xl:w-auto flex justify-between xl:justify-end xl:gap-4 items-center">
                <span>Terms of use</span>
                <span>Privacy Policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

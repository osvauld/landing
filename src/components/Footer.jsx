import { DiscordIcon } from "../assets/icons/DiscordIcon";
import { LinktreeIcon } from "../assets/icons/LinktreeIcon";
import { LinkdinIcon } from "../assets/icons/LinkdinIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { GithubIcon } from "../assets/icons/GithubIcon";

export const Footer = () => {
  return (
    <footer>
      <div className="pt-10  lg:pt-20 lg:pb-12 bg-dark1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="top-section w-full lg:w-[95vw] h-[40vh flex justify-center items-center">
            <div className="left-section w-1/2 ">
              <div className="bg-dark2 w-1/2 rounded-lg px-3 py-8 text-lg text-white1 flex flex-col justify-center items-center">
                <h6>Any questions or feedbacks?</h6>
                <button className="flex bg-blue1 text-dark1 justify-center items-center px-3 py-1.5 rounded whitespace-nowrap mt-4 text-base">
                  {" "}
                  <DiscordIcon />
                  <span className="ml-2">Chat with us on Discord</span>
                </button>
              </div>
            </div>
            <div className="right-section w-1/2 flex text-white1 gap-12 text-xs font-light">
              <ul className="flex flex-col justify-start items-start gap-4">
                <h6 className="font-medium">Product</h6>
                <a href="">Features</a>
                <a href="">Integrations</a>
                <a href="">Pricing</a>
                <a href="">Roadmap</a>
                <a href="">Docs</a>
              </ul>
              <ul className="flex flex-col justify-start items-start gap-4">
                <h6 className="font-medium">Company</h6>
                <a href="">About Osvauld</a>
                <a href="">Our Team</a>
                <a href="">Our Values</a>
                <a href="">Blog</a>
              </ul>
              <ul className="flex flex-col justify-start items-start gap-4">
                <h6 className="font-medium">Community</h6>
                <a href="">Discord</a>
                <a href="">Github</a>
                <a href="">Linkdin</a>
                <a href="">Instagram</a>
              </ul>
              <ul className="flex flex-col justify-start items-start gap-4">
                <h6 className="font-medium">Resources</h6>
                <a href="">Downloads</a>
                <a href="">Documentation</a>
              </ul>
            </div>
          </div>
          <div className="pt-10 w-full flex justify-between items-center text-white4 text-xs">
            <span>© 2024 osvauld</span>
            <div className="flex gap-6 ">
              <LinktreeIcon color={"#A6B0BB"} />
              <GithubIcon color={"#A6B0BB"} />
              <DiscordIcon color={"#A6B0BB"} />
              <LinkdinIcon color={"#A6B0BB"} />
              <InstagramIcon color={"#A6B0BB"} />
              <span>Terms of use</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

import { DiscordIcon } from "../assets/icons/DiscordIcon";
import { LinktreeIcon } from "../assets/icons/LinktreeIcon";
import { LinkdinIcon } from "../assets/icons/LinkdinIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { GithubIcon } from "../assets/icons/GithubIcon";
import { FooterOsvauld } from "../assets/logos/FooterOsvauld";
import Matrix from "../assets/logos/Matrix";
import Docker from "../assets/logos/Docker";
import Twitter from "../assets/logos/Twitter";
import Mastodon from "../assets/logos/Mastodon";

export const Footer = () => {
  return (
    <section className="w-full bg-blue1">
      <footer className="relative mx-auto h-[56rem] px-[24px] pt-[32px]  max-w-[1312px]  min-h-[545px] lg:px-[60px] lg:pt-[60px]">
        <div className="flex h-full flex-col gap-32">
          <div className="flex flex-col gap-24">
            <div className="icons flex items-center flex-wrap gap-10 mx-auto">
              <GithubIcon color={"black"} size={"45px"} />
              <DiscordIcon width={"45px"} height={"45px"} />{" "}
              <Matrix width={"45px"} height={"45px"} />
              <Mastodon width={"45px"} height={"45px"} />
              {/* <LinkdinIcon color={"black"} size={"45px"} />
              <InstagramIcon color={"black"} size={"45px"} /> */}
            </div>
            <span className="mx-auto text-[54px] xl:text-[64px] tracking-[-4px] font-Jakartha font-semibold">
              Protecting what matters the most.
            </span>
            <div className="flex flex-col xs:flex-row justify-center items-center gap-4">
              <button className="px-6 py-3 bg-black rounded-lg text-blue1 text-xl font-semibold flex justify-center items-center gap-4 min-w-[270px]">
                <span className="">Join Waitlist</span>
              </button>
            </div>
            <div className="text-center flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <a href="" className="ml-auto tracking-tight">
                  Terms of Use
                </a>
                <a href="" className="mr-auto tracking-tight">
                  Privacy Policy
                </a>
              </div>
              <p className="font-medium">
                Osvauld Security Solutions Pvt Limited @ 2024
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 px-[24px] lg:px-[60px]">
            <div className="flex w-full justify-center">
              <FooterOsvauld />
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

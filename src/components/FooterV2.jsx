import { motion } from "framer-motion";
import { DiscordIcon } from "../assets/icons/DiscordIcon";
import { GithubIcon } from "../assets/icons/GithubIcon";
import { FooterOsvauld } from "../assets/logos/FooterOsvauld";
import Matrix from "../assets/logos/Matrix";

import Mastodon from "../assets/logos/Mastodon";

export const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <section className="w-full bg-blue1 relative z-[999]">
        <footer className="relative mx-auto h-[45rem] lg:h-[56rem] px-[24px] pt-[32px]  max-w-[1312px]  min-h-[545px] lg:px-[60px] lg:pt-[60px]">
          <div className="flex h-full flex-col gap-32">
            <div className="flex flex-col gap-14">
              <span className="mx-auto text-[54px] lg:text-[96px] leading-[3rem] lg:leading-[6rem] tracking-[-2px] font-Jakartha font-semibold">
                Protecting what <br /> matters the most.
              </span>
              <div className="icons flex items-center flex-wrap gap-10 mx-auto">
                <GithubIcon color={"black"} size={"45px"} />
                <DiscordIcon size={"45px"} />{" "}
                <Matrix width={"45px"} height={"45px"} />
                <Mastodon width={"45px"} height={"45px"} />
                {/* <LinkdinIcon color={"black"} size={"45px"} />
              <InstagramIcon color={"black"} size={"45px"} /> */}
              </div>
              <div className="flex flex-col xs:flex-row justify-center items-center gap-4">
                <button className="px-6 py-3 bg-black rounded-lg text-blue1 text-xl font-semibold flex justify-center items-center gap-4 min-w-[270px]">
                  <a href="https://getwaitlist.com/waitlist/14960">
                    Join Waitlist
                  </a>
                </button>
              </div>
              <div className="text-center flex justify-center gap-2">
                <div className="flex flex-wrap justify-center items-center gap-6">
                  <a
                    href="/terms"
                    className="ml-auto tracking-tight whitespace-nowrap"
                  >
                    Terms of Use
                  </a>
                  <a
                    href="/privacy"
                    className="mr-auto tracking-tight whitespace-nowrap"
                  >
                    Privacy Policy
                  </a>
                  <p className="font-medium whitespace-nowrap">
                    Osvauld Security Solutions Pvt Limited @ 2025
                  </p>
                </div>
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
    </motion.div>
  );
};

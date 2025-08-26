import { DiscordIcon } from "../assets/icons/DiscordIcon";
import { GithubIcon } from "../assets/icons/GithubIcon";
import { FooterOsvauld } from "../assets/logos/FooterOsvauld";

export const Footer = ({ isLivnote }) => {
  const heading = isLivnote
    ? "Notes that live with you."
    : "Protecting what matters the most.";
  const buttonText = isLivnote ? "Explore Livnote" : "Join Waitlist";
  const buttonLink = isLivnote
    ? "https://github.com/osvauld/osvauld"
    : "https://getwaitlist.com/waitlist/14960";
  return (
      <section id="page-footer" className={`w-full ${isLivnote ? "bg-livnotePrimary" : "bg-blue1"} z-50`}>
        <footer className="relative mx-auto h-[56rem] px-[24px] pt-[32px]  max-w-[1312px]  min-h-[545px] lg:px-[60px] lg:pt-[60px]">
          <div className="flex h-full flex-col gap-32">
            <div className="flex flex-col gap-24">
              <div className="icons flex items-center flex-wrap gap-10 mx-auto">
                <GithubIcon color={"black"} size={"45px"} />
                <DiscordIcon width={"45px"} height={"45px"} />{" "}
                {/* <Matrix width={"45px"} height={"45px"} />
                <Mastodon width={"45px"} height={"45px"} /> */}
                {/* <LinkdinIcon color={"black"} size={"45px"} />
              <InstagramIcon color={"black"} size={"45px"} /> */}
              </div>
              <span className="mx-auto text-[54px] xl:text-[64px] tracking-[-2px] font-Jakartha font-semibold text-center">
                {heading}
              </span>
              <div className="flex flex-col xs:flex-row justify-center items-center gap-4">
                <button className={`px-6 py-3 ${isLivnote ? "bg-black text-livnotePrimary" : "text-blue1 bg-black"} rounded-lg text-xl font-semibold flex justify-center items-center gap-4 min-w-[270px]`}>
                  <a href={buttonLink}>{buttonText}</a>
                </button>
              </div>
              <div className="text-center flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <a
                    href="/terms"
                    className="ml-auto tracking-tight"
                    aria-label="Terms of Use"
                  >
                    Terms of Use
                  </a>
                  <a
                    href="/privacy"
                    className="mr-auto tracking-tight"
                    aria-label="Privacy Policy"
                  >
                    Privacy Policy
                  </a>
                </div>
                <p className="font-medium">
                  Osvauld Security Solutions Pvt Limited @ 2025
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

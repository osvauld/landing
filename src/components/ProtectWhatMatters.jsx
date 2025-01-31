import { motion } from "framer-motion";
import HomeStars from "/src/assets/images/HomeStars.png";
import HomeLock from "/src/assets/images/HomeLock.png";
import End2end from "/src/assets/images/end2end.png";
import Offline from "/src/assets/images/offline.png";
import { Iroh } from "../assets/icons/Iroh";

import SpotlightCard from "./ui/SpotlightCard";

export const ProtectWhatMatters = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, delay: 0.2 }}
      className="min-h-[75rem] sm:min-h-[60rem] w-full flex-grow flex flex-col items-center max-w-[1400px] mx-auto bg-dark4 px-4 pt-0 sm:pt-12 text-white relative"
    >
      <div className="flex justify-center gap-20 relative">
        <div className="flex items-start min-w-[300px]">
          <img
            alt="Conceptual image"
            src={HomeStars.src}
            className=" xl:-translate-y-28 xl:-translate-x-32"
          />
        </div>

        <div className="transform  min-w-[200px]">
          <img alt="Conceptual image" src={HomeLock.src} className="" />
        </div>
      </div>

      <div className="absolute top-12 lg:top-32 left-1/2 transform -translate-x-1/2 z-10  w-full max-w-[1400px] px-4 pt-2 flex flex-col items-center ">
        <span className="gradient-text-bottom font-Mono font-medium text-2xl">
          WHY OSVAULD?
        </span>
        <span className="flex flex-col items-center mb-14 mt-6 text-[40px] md:text-[48px] lg:text-7xl font-Jakartha font-medium tracking-tight text-balance gradient-text-bottom py-4 leading-10 md:leading-[54px]">
          <h2 className="text-center lg:text-left ">
            Protecting what <br /> matters the most.
          </h2>
        </span>

        <span className="pricing-content text-sm px-4 md:text-lg mb-16 text-center">
          Managing your digital life doesn’t have to be a headache.
          <br /> Forget the stress of remembering countless passwords <br /> or
          worrying about your data’s security.
        </span>

        <span className="gradient-text-bottom font-Mono font-medium text-2xl">
          OSVAULD IS HERE TO:
        </span>

        <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
          <SpotlightCard className="custom-spotlight-card">
            <span className="gradient-text-bottom font-Jakartha font-semibold text-2xl tracking-tighter ">
              Keep everything safe{" "}
            </span>
            <p className="font-Inter text-base font-normal text-faqAnswer mt-6">
              Your private details are <br />
              encrypted and stored securely.
            </p>
          </SpotlightCard>

          <SpotlightCard className="custom-spotlight-card">
            <span className="gradient-text-bottom font-Jakartha font-semibold text-2xl tracking-tighter ">
              Work without internet{" "}
            </span>
            <p className="font-Inter text-base font-normal text-faqAnswer mt-6">
              Stay in control even offline – <br /> access anytime, anywhere.
            </p>
          </SpotlightCard>

          <SpotlightCard className="custom-spotlight-card">
            <span className="gradient-text-bottom font-Jakartha font-semibold text-2xl tracking-tighter ">
              Sync across devices{" "}
            </span>
            <p className="font-Inter text-base font-normal text-faqAnswer mt-6">
              Get seamless access to your <br /> data on all your devices.
            </p>
          </SpotlightCard>
          <SpotlightCard className="custom-spotlight-card">
            <span className="gradient-text-bottom font-Jakartha font-semibold text-2xl tracking-tighter ">
              Put you in charge{" "}
            </span>
            <p className="font-Inter text-base font-normal text-faqAnswer mt-6">
              No third parties, no trackers – <br /> only you can access your
              data.
            </p>
          </SpotlightCard>
        </div>
      </div>
    </motion.section>
  );
};

import { motion } from "framer-motion";
import HomeStars from "/src/assets/images/HomeStars.png";
import HomeLock from "/src/assets/images/HomeLock.png";
import End2end from "/src/assets/images/end2end.png";
import Offline from "/src/assets/images/offline.png";
import { Iroh } from "../assets/icons/Iroh";

export const ProtectWhatMatters = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, delay: 0.2 }}
      className="w-full flex-grow flex flex-col items-center max-w-[1200px] mx-auto bg-dark4 px-4 pt-0 sm:pt-12 text-white"
    >
      <div className="flex flex-col justify-between items-center relative min-h-[90vh] w-full">
        <span className="absolute transform z-10 scale-50 -left-24  sm:scale-75 sm:-left-0 -top-12  md:-top-12 md:-left-0 lg:top-12 lg:left-0">
          <img
            alt="dashboard of osvauld"
            src={HomeStars.src}
            className="max-w-[350px]"
          />
        </span>
        <span className="w-0 md:w-[600px] "></span>
        <span className="absolute transform z-10 scale-50 -right-24 sm:scale-75 -top-16 sm:-right-6 md:-top-16 md:-right-6 lg:-top-16 lg:right-6">
          <img
            alt="dashboard of osvauld"
            src={HomeLock.src}
            className="max-w-[350px]"
          />
        </span>
        <div className="flex-grow w-full max-w-[1200px] px-4 pt-2 flex flex-col items-center z-20">
          <span className="flex flex-col items-center mb-14 mt-6 text-[40px] md:text-[48px] lg:text-7xl font-Jakartha font-medium tracking-tight text-balance gradient-text-bottom py-4 leading-10 md:leading-[54px]">
            <h1 className="text-center lg:text-left ">Why Use Osvauld?</h1>
          </span>

          <span className="pricing-content text-sm px-4 md:text-lg mb-16 text-center">
            Osvauld brings privacy-respecting and secure peer-to-peer solutions to the masses.
            <br className="hidden md:inline-block" />
            Data transfer between devices happens through direct connections.
          </span>

          <div className="cards grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-6 md:gap-x-10 w-full min-w-[360px] max-w-[331px] md:max-w-[900px] ">
            <div className="feature-card  h-[600px] w-full flex flex-col p-6">
              <h2 className="font-Jakartha font-normal tracking-tight text-4xl mb-4 gradient-text-bottom leading-tight">
                Always Accessible, Even Offline
              </h2>
              <p className="pricing-content mb-4">
                Never be stuck without your important information. Whether it's
                passwords, notes, or other essentials, you can view, create, and
                update everything without an internet connection. Once you're
                back online, your data automatically syncs across all your
                devices.
                <br />
                <br />
                It’s like having a personal notebook that’s always with you and
                keeps everything up-to-date seamlessly. Simple Yet Powerful
                Security.
              </p>
              <div className="grow flex justify-center items-center">
                <img
                  alt="image representing end-to-end Offline-First Implementation"
                  src={Offline.src}
                  className="w-full"
                />
              </div>
            </div>
            <div className="feature-card h-[600px] w-full flex flex-col p-6">
              <h2 className="font-Jakartha font-normal tracking-tight text-4xl mb-4 gradient-text-bottom leading-tight ">
                Simple yet powerful security
              </h2>
              <p className="pricing-content mb-4">
                Your data is safeguarded with top-tier encryption, ensuring
                everything stays secure and private. Imagine having a digital
                vault that only you can open-we make sure your information
                remains protected and inaccessible to anyone else, including us.
              </p>
              <img
                alt="image representing end-to-end encryption"
                src={End2end.src}
                className="w-full"
              />
            </div>
            <div className="feature-card  h-[600px] w-full md:h-[452px] md:col-span-2  p-6 grid grid-col-1 lg:grid-cols-2 text-left">
              <div>
                <h2 className="font-Jakartha font-normal leading-tight tracking-tight text-4xl mb-4 gradient-text-bottom">
                  Connect any two devices on the planet
                </h2>
                <p className="pricing-content mb-4 text-left ">
                  Lets you establish direct peer-to-peer connections whenever
                  possible, falling back to relay servers if necessary. This
                  gives you fast, reliable connections that are authenticated
                  and encrypted end-to-end using QUIC.
                  <br />
                  <br />
                  All your data management happens only on your device,
                  eliminating the need to send sensitive information to external
                  servers.
                </p>
              </div>
              <div className="flex justify-center items-center overflow-hidden">
                <Iroh />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

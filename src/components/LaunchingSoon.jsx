import { motion } from "framer-motion";

export const LaunchingSoon = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay: 0.4 }}
    className=" w-full max-w-[1200px] mx-auto my-10 px-8 flex flex-col items-center gap-16"
  >
    <div className="w-full feature-card p-10">
      <div className="gradient-text-bottom font-Mono font-medium text-2xl text-center">
        BE THE FIRST TO EXPERIENCE THE FUTURE OF DIGITAL SECURITY
      </div>
      <div className="mb-14 mt-6 text-[40px] md:text-[48px] lg:text-7xl font-Jakartha  font-medium tracking-tight text-balance ">
        <h2 className="text-center mb-14 gradient-text-bottom pb-3">
          Launching soon on
        </h2>
        <div className="grid grid-cols-2 grid-rows-3 lg:grid-cols-5 lg:grid-rows-1  gap-8 sm:px-44 xl:px-80">
          <div className="flex flex-col items-center gap-3">
            <span className="w-16 h-16 bg-white2"></span>
            <span className="font-Inter font-light text-base tracking-wide text-text2 whitespace-nowrap">
              Android
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span className="w-16 h-16 bg-white2"></span>
            <span className="font-Inter font-light text-base tracking-wide text-text2 whitespace-nowrap">
              iOS
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span className="w-16 h-16 bg-white2"></span>
            <span className="font-Inter font-light text-base tracking-wide text-text2 whitespace-nowrap">
              macOS
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span className="w-16 h-16 bg-white2"></span>
            <span className="font-Inter font-light text-base tracking-wide text-text2 whitespace-nowrap">
              Windows
            </span>
          </div>
          <div className="col-span-2 lg:col-span-1 flex flex-col items-center gap-3">
            <span className="w-16 h-16 bg-white2"></span>
            <span className="font-Inter font-light text-base tracking-wide text-text2 whitespace-nowrap">
              Linux
            </span>
          </div>
        </div>
      </div>
      <div>
        <a
          className="mx-auto max-w-[12.5rem] xs:w-auto flex justify-center items-center rounded-xl text-black bg-blue1 px-4 py-3 text-lg whitespace-nowrap  cursor-pointer"
          href="https://getwaitlist.com/waitlist/14960"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="get started"
        >
          <span className="pt-px font-Jakartha font-bold ">
            Join waitlist now
          </span>
        </a>
      </div>
    </div>
  </motion.section>
);

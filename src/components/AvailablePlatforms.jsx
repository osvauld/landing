import { motion } from "framer-motion";
import { Android } from "../assets/logos/Android";
import { Ios } from "../assets/logos/Ios";
import { Windows } from "../assets/logos/Windows";
import { MacOs } from "../assets/logos/MacOS";
import { Linux } from "../assets/logos/Linux";

export const AvailablePlatforms = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className=" w-full max-w-[1200px] mx-auto my-44 px-8"
  >
    <div className=" text-center mb-8 text-2xl md:text-5xl font-Jakartha font-medium tracking-tight text-balance gradient-text-bottom leading-10 md:leading-[54px]">
      We're everywhere!
    </div>
    <div className="flex justify-center items-center gap-8 lg:gap-16 flex-wrap w-full">
      <span>
        <Android />
      </span>
      <span>
        <Ios />
      </span>
      <span>
        <Windows />
      </span>
      <span>
        <MacOs />
      </span>
      <span className="flex ">
        <Linux />
      </span>
    </div>
  </motion.section>
);

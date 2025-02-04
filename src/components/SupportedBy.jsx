import { motion } from "framer-motion";
import aic from "../assets/images/aic.webp";
import ksum from "../assets/images/ksum.webp";
import rize from "../assets/images/rize.webp";

export const SupportedBy = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay: 0.4 }}
    className=" w-full max-w-[1200px] mx-auto my-10 px-8 flex flex-col items-center gap-16"
  >
    <div className=" w-full feature-card p-10">
      <div className="gradient-text-bottom font-Mono font-medium text-2xl mb-10 text-center">
        SUPPORTED BY
      </div>
      <div className="flex flex-wrap items-center justify-around gap-8">
        <div className="max-w-[20rem] rounded-3xl  overflow-hidden flex items-center justify-center">
          <img
            src={ksum.src}
            alt="Logo Kerala Startup mission"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="max-w-[20rem] rounded-3xl overflow-hidden flex items-center justify-center">
          <img
            src={rize.src}
            alt="Logo Razor pay rize"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="max-w-[20rem] rounded-3xl overflow-hidden flex items-center justify-center">
          <img
            src={aic.src}
            alt="Logo AIC Goa"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  </motion.section>
);

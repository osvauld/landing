import { motion } from "framer-motion";
import { EvervaultCard } from "./ui/evervault";

export const SecureByDesign = () => {
  return (
    <section className="w-full" id="features">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full flex justify-center items-center"
      >
        <div className="w-full min-h-[50vh] text-white3 xl:w-[1000px] xl:pt-20  text-center">
          {/* <h2 className="text-4xl font-Jakartha font-light text-blue1  xl:tracking-[-0.1rem] ">
            Secure By Design
          </h2> */}
          <EvervaultCard text="Secure By Design" />
        </div>
      </motion.div>
    </section>
  );
};

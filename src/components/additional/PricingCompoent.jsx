import { motion } from "framer-motion";

export const PricingCompoent = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2 }}
      className="w-full flex-grow flex flex-col items-center max-w-[1200px] mx-auto bg-faqDark px-4 pt-28 text-white"
    >
      <span className="text-[32px] md:text-[36px] flex flex-col items-center lg:text-[56px] gradient-text-bottom font-semibold mb-20">
        <h1>Affordable Pricing</h1>
        <h1>for teams of all sizes</h1>
      </span>
      <div className="cards grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-6 md:gap-x-10 w-full min-w-[300px] max-w-[331px] md:max-w-[800px] ">
        <div className="pricing-card h-[552px] w-full "></div>
        <div className="pricing-card h-[552px] w-full"></div>
        <div className="sm:pricing-card border border-faqBorder rounded-xl h-[552px] w-full md:h-[452px] md:col-span-2"></div>
      </div>
    </motion.section>
  );
};

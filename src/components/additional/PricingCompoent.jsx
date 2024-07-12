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
      <span className="text-[44px] flex flex-col items-center md:text-[56px] gradient-text-bottom font-semibold ">
        <h1>Affordable Pricing</h1>
        <h1>for teams of all sizes</h1>
      </span>
      <div className="cards grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-6">
        <div className="border border-red-500 h-[300px] min-w-[200px]"></div>
        <div className="border border-white1 h-[300px]"></div>
        <div className="border border-yellow-300 h-[300px] md:col-span-2"></div>
      </div>
    </motion.section>
  );
};

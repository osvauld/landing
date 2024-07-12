import { motion } from "framer-motion";

export const PricingCompoent = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2 }}
      className="w-full flex-grow max-w-[1200px] mx-auto bg-faqDark px-4 pt-28 text-white"
    >
      <h1>Pricinggg</h1>
    </motion.section>
  );
};

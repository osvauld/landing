import { motion } from "framer-motion";

export const Testimonials = () => (
  <section className="w-full flex justify-center pt-10 mb-16 lg:mb-32 bg-dark1 relative">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      ></motion.div>
    </div>
  </section>
);

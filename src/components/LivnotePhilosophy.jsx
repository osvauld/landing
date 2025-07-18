import conceptImage from "/src/assets/images/art.png";
import { motion } from "framer-motion";

export const LivnotePhilosophy = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="w-screen h-screen flex  flex-col justify-start items-center mx-auto px-auto bg-livnoteBg px-4 pt-0 sm:pt-12 text-white"
        >
              <img
                alt="Concept art on digital sovereignty"
                src={conceptImage.src}
                className="mx-auto"
              />
        </motion.section>)
}
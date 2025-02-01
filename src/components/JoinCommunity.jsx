import { motion } from "framer-motion";

export const JoinCommunity = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay: 0.4 }}
    className=" w-full max-w-[1200px] mx-auto my-10 px-8 flex flex-col items-center gap-16"
  >
    <div className="w-full feature-card p-10">
      <h3 className="gradient-text-bottom text-3xl lg:text-5xl font-Jakartha font-medium lg:leading-tight mb-8 text-center">
        Join our free community on Discord for
      </h3>
      <div className="flex items-center gap-12 justify-center flex-wrap">
        <span className="font-Inter font-medium text-lg text-text2 whitespace-nowrap">
          Community support & Chat
        </span>
        <span className="font-Inter font-medium text-lg text-text2 whitespace-nowrap">
          Public Roadmap
        </span>
        <span className="font-Inter font-medium text-lg text-text2 whitespace-nowrap">
          Release notes
        </span>
        <span className="font-Inter font-medium text-lg text-text2 whitespace-nowrap">
          Feature Tutorials
        </span>
      </div>
    </div>
  </motion.section>
);

import { motion } from "framer-motion";
import { DiscordIcon } from "../assets/icons/DiscordIcon";
import { GithubIcon } from "../assets/icons/GithubIcon";

export const FAQ = () => (
  <section className="relative pt-16 pb-16 bg-dark1 overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1100px] w-11/12 mx-auto">
        <div className="w-full h-[50vh] bg-dark2 rounded-xl text-white px-24 py-8 flex flex-col justify-around items-center">
          <h2 className="text-4xl font-Jakartha text-blue1 font-light xl:tracking-[-0.15rem]">
            Join us now
          </h2>
          <p className="text-center text-2xl max-w-[80%] font-extralight tracking-[-0.08rem]">
            Join the conversation, pitch your ideas, discover savvy solutions,
            and tap into the wisdom of a{" "}
            <span className="text-blue1">vibrant community of developers </span>{" "}
            and osvauld enthusiasts
          </p>
          <div className="w-7/12 flex flex-col lg:flex-row lg:justify-around">
            <button className="flex bg-blue1 text-dark1 justify-between items-center px-3 py-1.5 rounded">
              {" "}
              <DiscordIcon />
              <span className="ml-2">Join our Discord Community</span>
            </button>
            <button className="flex border border-blue1 rounded text-white1 justify-between items-center px-3 py-1.5">
              <GithubIcon />
              <span className="ml-2">Star us on Github</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

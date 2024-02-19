import { motion } from "framer-motion";

import sharing from "../assets/images/osvauldsharing.png";

export const Features2 = () => (
  <section className="w-full bg-dark1 mt-12 sm:mt-20 mb-10 lg:my-20 pt-4">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-32">
        <article className="text-white3 w-full text-left max-w-[80%]">
          <h3 className="text-4xl font-Jakartha font-light xl:tracking-[-0.15rem] xl:mb-10">
            <span className="text-blue1 ">
              Intutive sharing mechanism for seamless granular access
              distribution.
            </span>
            Enables you to share credentials with designated groups or users.
          </h3>
          <p className='max-w-[70%] text-lg'>
            Manage credentials access by assigning and revoking permissions as
            per your needs. Track the frequency and manner in which credentials
            are accessed with audit logs that offers insights into usage
            patterns.
          </p>
        </article>
        <motion.div
          initial={{ opacity: 0, y: 10, zIndex: 20 }}
          animate={{ opacity: 1, y: 0, zIndex: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="relative w-screen top-10 xl:top-0 right-0 xl:right-20 flex justify-center md:justify-start items-center mb-40 xl:mb-[40vw]">
            <img
              src={sharing}
              alt="sharing functionality of osvauld"
              className="w-full xl:w-5/6 2xl:w-[1200px] mx-auto absolute z-10 rounded-xl hero-dashboard-border-gradient lg:top-6 xl:top-10 xl:left-10"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

import { motion } from "framer-motion";

export const OnPremise = () => {
  return (
    <section className="lg:mb-16 w-full flex flex-col justify-center items-center bg-dark1 xl:pt-20 2xl:pt-0">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className=" 2xl:w-[1150px] xl:w-[1050px] lg:w-[980px]  md:w-4/5 flex justify-center bg-dark1  lg:pb-10 mx-auto xl:flex-row flex-col">
          <div>
            <div className="pl-0 lg:pl-10 text-left">
              <h2 className=" text-white1 text-2xl lg:text-4xl font-Jakartha font-light xl:tracking-[-0.1rem]">
                Cross-platform Support
              </h2>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 justify-center items-center xl:h-[20rem] 2xl:h-[22rem] mt-10">
              <article className="bg-dark2 h-[90%] rounded-lg w-[95vw] xl:w-[45%] p-10 overflow-hidden">
                <h3 className="text-xl lg:text-2xl font-Jakartha font-light  text-blue1 ">
                  Android and iOS
                </h3>
                <p className="text-lg font-extralight text-white1 pt-4 lg:pt-7">
                  <ul>
                    <li>Platform-specific mobile app bundles.</li>
                    <li>Native UI components.</li>
                    <li>Mobile-optimized networking.</li>
                    <li> Touch-based interactions.</li>
                  </ul>
                </p>
              </article>
              <article className="bg-dark2 h-[90%] rounded-lg w-[95vw] xl:w-[45%] p-10 overflow-hidden">
                <h3 className="text-xl lg:text-2xl font-Jakartha font-light  text-blue1 ">
                  Linux, macOS and Windows
                </h3>
                <p className="text-lg font-extralight text-white1 pt-4 lg:pt-7">
                  <ul>
                    <li>Desktop executables.</li>
                    <li>System tray integration.</li>
                    <li>File system access.</li>
                    <li> Native window management Cross-platform builds.</li>
                  </ul>
                </p>
              </article>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

import { motion } from "framer-motion";

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
          <h2 className="text-4xl font-Jakartha font-light text-blue1  xl:tracking-[-0.1rem] ">
            Secure By Design
          </h2>
          <div className="py-10 flex flex-col lg:flex-row justify-between items-center gap-4">
            <article className="bg-dark2 rounded-lg w-[95vw] lg:w-[30%] p-6 min-h-[20vh] flex justify-center items-center">
              <p className="text-base font-extralight">
                Your data remains encrypted end to end with your individual
                email and master password. We cannot see your private
                credentials.
              </p>
            </article>
            <article className="bg-dark2 rounded-lg  w-[95vw] lg:w-[30%]  p-6 min-h-[20vh] flex justify-center items-center">
              <p className="text-base font-extralight">
                Private key is generated on the browser when user signs up. It
                will never be transferred over network and will stay exclusively
                in client browser.
              </p>
            </article>
            <article className="bg-dark2 rounded-lg  w-[95vw] lg:w-[30%]  p-6 min-h-[20vh] flex justify-center items-center">
              <p className="text-base font-extralight">
                All your data is fully sealed with RSA 2048-bit encryption
                before it leaves your device, only the holder of private key can
                access the data.
              </p>
            </article>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

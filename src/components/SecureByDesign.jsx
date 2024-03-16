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
          <h2 className="text-5xl font-Jakartha font-light text-blue1 ">
            Fast and Secure
          </h2>
          <div className="py-10 flex flex-col lg:flex-row justify-between items-center gap-4">
            <article className="bg-dark2 rounded-lg w-[95vw] lg:w-[30%] p-6 min-h-[20vh] flex flex-col justify-center items-center">
              <h4 className="text-blue1">Robust Security</h4>
              <p className="text-base font-extralight mt-2">
                Powered by Sequoia-PGP and WebAssembly, ensuring strong
                encryption and secure operations directly in your browser.
              </p>
            </article>
            <article className="bg-dark2 rounded-lg  w-[95vw] lg:w-[30%]  p-6 min-h-[20vh] flex flex-col justify-center items-center">
              <h4 className="text-blue1">Modern Cryptography</h4>
              <p className="text-base font-extralight mt-2">
                ECC-Curve25519 for asymmetric encryption and AES-256 for
                symmetric encryption, providing state-of-the-art security.
              </p>
            </article>
            <article className="bg-dark2 rounded-lg  w-[95vw] lg:w-[30%]  p-6 min-h-[20vh] flex flex-col justify-center items-center">
              <h4 className="text-blue1">Lightning Batch Crypto</h4>
              <p className="text-base font-extralight mt-2">
                Optimized Rust implementation enables lightning-fast batch
                encryption and decryption, ensuring swift secure sharing.{" "}
              </p>
            </article>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

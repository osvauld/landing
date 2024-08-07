import { motion } from "framer-motion";
import HomeStars from "/src/assets/images/HomeStars.png";
import HomeLock from "/src/assets/images/HomeLock.png";

export const ProtectWhatMatters = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2 }}
      className="w-full flex-grow flex flex-col items-center max-w-[1200px] mx-auto bg-faqDark px-4 pt-28 text-white"
    >
      <div className="flex flex-col justify-between items-center relative min-h-[90vh] w-full">
        <span className="absolute transform z-10 -top-48 -left-48 lg:top-12 lg:left-0">
          <img
            alt="dashboard of osvauld"
            src={HomeStars.src}
            className="max-w-[350px]"
          />
        </span>
        <span className="w-0 md:w-[600px] "></span>
        <span className="absolute transform z-10 -top-32 -right-48 lg:-top-16 lg:right-6">
          <img
            alt="dashboard of osvauld"
            src={HomeLock.src}
            className="max-w-[350px]"
          />
        </span>
        <div className="flex-grow w-full max-w-[1200px] px-4 pt-2 flex flex-col items-center z-20">
          <span className="flex flex-col items-center mb-14 mt-6 text-[40px] md:text-[48px] lg:text-7xl font-Jakartha font-medium tracking-tight text-balance gradient-text-bottom leading-10 md:leading-[54px]">
            <h1 className="text-center lg:text-left ">Protect what</h1>
            <h1 className="text-center lg:text-left ">matters the most</h1>
          </span>

          <span className="pricing-content text-sm px-4 md:text-lg mb-16 text-left md:text-center">
            Secure your organization's critical digital assets, thereby{" "}
            <br className="hidden md:inline-block" />
            upholding and reinforcing the trust of your clients and partners
          </span>

          <div className="cards grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-6 md:gap-x-10 w-full min-w-[360px] max-w-[331px] md:max-w-[900px] ">
            <div className="feature-card  h-[600px] w-full flex flex-col p-6">
              <h2 className="font-Jakartha font-normal tracking-tight text-4xl mb-4 gradient-text-bottom ">
                Unbreakable Security with OpenPGP and ECC
              </h2>
              <p className="pricing-content mb-4">
                Experience unparalleled protection for your credentials, protect
                your vault keys with Osvauld's robust OpenPGP RFC 4880 standard
                coupled with ECC Curve25519.
              </p>
            </div>
            <div className="feature-card h-[600px] w-full flex flex-col p-6">
              <h2 className="font-Jakartha font-normal tracking-tight text-4xl mb-4 gradient-text-bottom ">
                Absolute End-to-End Encryption with Zero-Knowledge Security
              </h2>
              <p className="pricing-content mb-4">
                Your data stays safe with industry-leading encryption.
                Credentials and metadata are never exposed or unencrypted. Only
                you and your designated recipients can decrypt the data. <br />{" "}
                <br />
                Ensures that your sensitive information remains secure and
                inaccessible to anyone else, including us.
              </p>
            </div>
            <div className="feature-card  h-[600px] w-full md:h-[452px] md:col-span-2  p-6 grid grid-col-1 lg:grid-cols-2 text-left">
              <div>
                <h2 className="font-Jakartha font-normal tracking-tight text-4xl mb-4 gradient-text-bottom">
                  Blazing Fast, Secure and State-of-the-Art Cryptography
                </h2>
                <p className="pricing-content mb-4 text-left ">
                  Sequoia-PGP, trusted by RPM package managers for its
                  reliability and security, is combined with WebAssembly for
                  high-speed, secure and fast operations directly in your
                  browser. <br /> <br /> Rust-based WASM implementation delivers
                  near-native speeds for batch operations, providing quick,
                  secure sharing without compromising security, even in
                  resource-limited environments.
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

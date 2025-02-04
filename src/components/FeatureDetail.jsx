import { motion } from "framer-motion";
import { TracingBeam } from "./ui/tracing-beam";

export const FeatureDetail = () => (
  <motion.section
    initial={{ opacity: 0, x: -200 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay: 0.4 }}
    className=" w-full max-w-[1200px] mx-auto my-10 px-8 "
  >
    <TracingBeam>
      <div className="bg-cardBg my-8 feature-card  w-full p-10 flex flex-col md:flex-row justify-between gap-10 ">
        <div className="flex-1">
          <h3 className="gradient-text-bottom text-3xl lg:text-5xl font-Jakartha font-medium lg:leading-tight mb-8">
            Always accessible,
            <br /> even offline
          </h3>
          <p className="text-faqAnswer font-Inter text-base font-light">
            Never be stuck without your important information. Whether it's
            passwords, notes, or other essentials, you can view, create, and
            update everything without an internet connection. Once you're back
            online, your data automatically syncs across all your devices.{" "}
            <br /> <br /> It’s like having a personal notebook that’s always
            with you and keeps everything up-to-date.
          </p>
        </div>
        <div className="bg-white2 flex-1 min-h-[250px]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="bg-cardBg my-8 feature-card  w-full p-10 flex flex-col md:flex-row justify-between gap-10"
      >
        <div className="bg-white2 flex-1 min-h-[250px]"></div>
        <div className="flex-1">
          <h3 className="gradient-text-bottom text-3xl lg:text-5xl font-Jakartha font-medium lg:leading-tight mb-8">
            Simple yet <br />
            powerful security
          </h3>
          <p className="text-faqAnswer font-Inter text-base font-light">
            Your data is safeguarded with top-tier encryption, ensuring
            everything stays secure and private. Imagine having a digital vault
            that only you can open - we make sure your information remains
            protected and inaccessible to anyone else, including us.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="bg-cardBg my-8 feature-card  w-full p-10 flex flex-col md:flex-row justify-between gap-10"
      >
        <div className="flex-1">
          <h3 className="gradient-text-bottom text-3xl lg:text-5xl font-Jakartha font-medium lg:leading-tight mb-8">
            Seamless and secure <br /> device syncing
          </h3>
          <p className="text-faqAnswer font-Inter text-base font-light">
            All your data management happens directly on your device,
            eliminating the need to send sensitive information to external
            servers. This approach not only speeds up your experience but also
            enhances security. <br />
            <br />
            Plus, you won't have to remember multiple complex passwords for
            different services—your device handles the security effortlessly.
          </p>
        </div>
        <div className="bg-white2 flex-1 min-h-[250px]"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="bg-cardBg my-8 feature-card  w-full p-10 flex flex-col md:flex-row justify-between gap-10"
      >
        <div className="bg-white2 flex-1 min-h-[150px]"></div>
        <div className="flex-1">
          <h3 className="gradient-text-bottom text-3xl lg:text-5xl font-Jakartha font-medium lg:leading-tight mb-8">
            Free Forever
          </h3>
          <p className="text-faqAnswer font-Inter text-base font-light">
            Enjoy all these features at no cost, forever. <br />
            No hidden fees, no premium tiers—access your passwords, notes, and
            more without spending a dime.
          </p>
        </div>
      </motion.div>
    </TracingBeam>
  </motion.section>
);

import { motion } from "framer-motion";
import { CheckCircle } from "../../assets/icons/CheckCircle";

export const PricingCompoent = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2 }}
      className="w-full flex-grow flex flex-col items-center max-w-[1200px] mx-auto bg-faqDark px-4 pt-28 text-white"
    >
      <span className="text-[40px] flex flex-col items-center lg:text-[56px] gradient-text-bottom font-semibold mb-20 tracking-tight">
        <h1>Affordable Pricing</h1>
        <h1>for teams of all sizes</h1>
      </span>
      <div className="cards grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-6 md:gap-x-10 w-full min-w-[300px] max-w-[331px] md:max-w-[800px] ">
        <div className="pricing-card h-[552px] w-full flex flex-col p-4">
          <h2 className="font-Jakartha font-medium tracking-tight text-[32px] mb-4">
            Community Edition
          </h2>
          <p className="pricing-content mb-4">
            Built with small teams, startups and individuals in mind
          </p>
          <strong className="text-[46px] text-blue1 font-semibold font-Jakartha">
            $ 0
          </strong>
          <span className="my-2 pricing-content">Per Month</span>
          <span className="font-Jakartha text-blue1 text-xl ">
            Free forever
          </span>

          <button className="bg-blue1 text-xl text-black font-Jakartha font-medium rounded-md py-2 my-2">
            Get Started for Free
          </button>
          <div className="border-b border-[#2F303E] my-2 "></div>
          <ul className="text-white3">
            <li className="flex mt-1.5">
              <CheckCircle /> <span className="ml-2">Unlimited Folders</span>
            </li>
            <li className="flex mt-1.5">
              <CheckCircle />
              <span className="ml-2">Unlimited Credentials</span>
            </li>
            <li className="flex mt-1.5">
              <CheckCircle />
              <span className="ml-2"> Max 20 users</span>
            </li>
            <li className="flex mt-1.5">
              <CheckCircle />
              <span className="ml-2">Limited Secret Ops</span>
            </li>
            <li className="flex mt-1.5">
              <CheckCircle />
              <span className="ml-2">Community support</span>
            </li>
          </ul>
        </div>
        <div className="pricing-card h-[552px] w-full p-4"></div>
        <div className="border border-faqBorder rounded-xl h-[552px] w-full md:h-[452px] md:col-span-2"></div>
      </div>
    </motion.section>
  );
};

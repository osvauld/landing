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
      <span className="text-xs bg-labelBackground py-2 px-4 my-2 rounded-md text-blue1">
        Helping teams manage shared credentials
      </span>
      <span className="flex flex-col items-center mb-10 mt-6 text-[40px] md:text-[48px] lg:text-[56px] font-semibold tracking-tight text-balance gradient-text-bottom leading-10 md:leading-[54px]">
        <h1 className="text-center lg:text-left ">Affordable Pricing</h1>
        <h1 className="text-center lg:text-left ">for teams of all sizes</h1>
      </span>

      <span className="pricing-content mb-10 text-left md:text-center">
        Use Osvauld for free with your whole team. Upgrade to enable unlimited
        users, <br className="hidden md:inline-block" />
        enhanced security controls, and additional features.
      </span>

      <div className="cards grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-6 md:gap-x-10 w-full min-w-[300px] max-w-[331px] md:max-w-[800px] ">
        <div className="pricing-card h-[600px] w-full flex flex-col p-4">
          <h2 className="font-Jakartha font-medium tracking-tight text-[32px] mb-4">
            Community Edition
          </h2>
          <p className="pricing-content mb-4">
            Built with small teams, startups and individuals in mind
          </p>
          <strong className="text-[46px] text-blue1 font-semibold font-Jakartha">
            $0
          </strong>
          <span className="my-2 pricing-content">Per Month</span>
          <span className="font-Jakartha text-blue1 text-lg ">
            Free forever
          </span>

          <a
            className="bg-blue1 md:text-sm text-lg font-medium text-black font-Jakartha rounded-[4px] py-2 my-2 md:py-1 md:max-w-[55%] cursor-pointer z-20 flex items-center justify-center"
            href="https://docs.osvauld.com/installation/setting-up-osvauld/"
          >
            Get Started
          </a>
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
        <div className="pricing-card h-[600px] w-full flex flex-col p-4">
          <h2 className="font-Jakartha font-medium tracking-tight text-[32px] mb-4">
            Enterprise Edition
          </h2>
          <p className="pricing-content mb-4">
            Built with scalability, security, and enterprice grade feature set
            in mind
          </p>
          <strong className="text-[46px] text-blue1 font-semibold font-Jakartha">
            $25
          </strong>
          <span className="my-2 pricing-content">Per Month</span>
          <span className="font-Jakartha text-blue1 text-lg ">
            3 months and 12 months package
          </span>

          <a
            className="bg-blue1 md:text-sm text-lg font-medium text-black font-Jakartha rounded-[4px] py-2 my-2 md:py-1 md:px-16 md:max-w-[55%] z-30 flex justify-center items-center whitespace-nowrap"
            href="https://cal.com/abrahamgeorge/30min"
          >
            Book a Call
          </a>
          <div className="border-b border-[#2F303E] my-2 "></div>
          <span className="my-2 text-xs text-white3">
            Everything in community Edition Plus:
          </span>
          <ul className="text-white3">
            <li className="flex mt-1.5">
              <CheckCircle /> <span className="ml-2">Account Recovery</span>
            </li>
            <li className="flex mt-1.5">
              <CheckCircle />
              <span className="ml-2">Multi Factor Authentication</span>
            </li>
            <li className="flex mt-1.5">
              <CheckCircle />
              <span className="ml-2">Audit Logs</span>
            </li>
            <li className="flex mt-1.5">
              <CheckCircle />
              <span className="ml-2">Unlimited Users</span>
            </li>
            <li className="flex mt-1.5">
              <CheckCircle />
              <span className="ml-2">Unlimited Secret Ops</span>
            </li>
          </ul>
        </div>
        <div className="border border-faqBorder rounded-xl h-[600px] w-full md:h-[452px] md:col-span-2 flex flex-col md:items-center p-4">
          <h2 className="font-Jakartha font-medium tracking-tight text-[32px] mb-4">
            Priority Support
          </h2>
          <p className="pricing-content mb-4 text-left md:text-center">
            Built to ensure quicker issue resolution, dedicated live support for
            all users. Available for both Community and Enterprise Edition
            users.
          </p>
          <strong className="text-[46px] text-blue1 font-semibold font-Jakartha">
            $50
          </strong>
          <span className="my-2 pricing-content">Per Month</span>
          <span className="font-Jakartha text-blue1 text-lg ">
            3 months package
          </span>

          <a
            className="bg-blue1 md:text-sm text-lg font-medium text-black font-Jakartha rounded-[4px] py-2 my-2 md:py-1 md:px-16 md:max-w-[55%] flex justify-center items-center whitespace-nowrap z-30"
            href="https://cal.com/abrahamgeorge/30min"
          >
            Book a Call
          </a>
          <div className="border-b border-[#2F303E] my-2 md:w-full"></div>
          <ul className="text-white3">
            <li className="flex mt-1.5">
              <CheckCircle />{" "}
              <span className="ml-2">Priority Features in roadmap</span>
            </li>
            <li className="flex mt-1.5">
              <CheckCircle />
              <span className="ml-2">Dedicated Live Support</span>
            </li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

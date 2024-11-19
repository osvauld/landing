import { motion } from "framer-motion";
import meetOsvauld from "../../assets/images/meetOsvauld.png";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export const DemoComponent = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        styles: {
          branding: { brandColor: "#000000" },
        },
      });
    })();
  }, []);
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
      <span className="flex flex-col items-center mt-4 mb-8 md:mt-10 md:mb-14  text-[40px] md:text-[48px] lg:text-[62px] font-semibold tracking-normal text-balance leading-10 md:leading-[54px]">
        <h1 className="text-center lg:text-left font-Jakartha ">
          Request a live Demo
        </h1>
      </span>

      <span className="pricing-content mb-10 text-center">
        Schedule a personalized demo with Osvauld expert team to explore{" "}
        <br className="md:inline-block" />
        our product, security features, and its capabilities.
      </span>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-20 w-full md:pt-[6rem] pb-[6rem]">
        <div className="md:col-span-2 flex flex-col gap-12 mt-12  ">
          <span>
            <h2 className="font-Jakartha font-medium tracking-tighter text-[26px] md:text-[34px]">
              See it in action
            </h2>
            <p className="pricing-content md:text-lg">
              Explore the osvauld live, and ask any questions
            </p>
          </span>
          <span>
            <h2 className="font-Jakartha font-medium tracking-tighter text-[26px] md:text-[34px]">
              Setup & Deployment
            </h2>
            <p className="pricing-content md:text-lg">
              Learn more about our fast and easy on premise deployment
            </p>
          </span>
          <span>
            <h2 className="font-Jakartha font-medium tracking-tighter text-[26px] md:text-[34px]">
              Secure sharing
            </h2>
            <p className="pricing-content md:text-lg">
              Learn more about how we’ve built a platform with secure sharing of
              secrets as the #1 priority
            </p>
          </span>
        </div>
        <div className="md:col-span-3 md:mt-12 group">
          <button
            data-cal-link="abrahamgeorge/30min"
            className="relative border-[15px] border-calBorder rounded-2xl shadow-[0_0_40px_#000] overflow-hidden"
          >
            <img
              src={meetOsvauld}
              alt="dashboard of osvauld"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex items-center justify-center">
              <span className="text-white text-xl opacity-0 group-hover:opacity-100 transition duration-300">
                Click to Book
              </span>
            </div>
          </button>
        </div>
      </div>
    </motion.section>
  );
};

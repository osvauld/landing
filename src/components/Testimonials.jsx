import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/icons/QuoteIcon";
import testimonial1 from "../assets/images/testimonial1.png";
import testimonial2 from "../assets/images/testimonial2.png";
import testimonial3 from "../assets/images/testimonial3.png";

const testimonialsData = [
  {
    customerName: "Abraham George",
    customerTitle: "Engineer at osvauld",
    content:
      "Focus is on fortifying the security and enhancing the architecture of our open-source password manager. It's essential that our solution is not only secure against evolving threats but also robust, especially for on-premise environments. This commitment to security and efficiency is the cornerstone of our product.",
    image: testimonial1,
  },
  {
    customerName: "Tony Antony",
    customerTitle: "Engineer at osvauld",
    content:
      " Our business model would be centered around priority support and feature-requests. We will conduct Bug bounty programs and Third party audits once the product hit the market. Even if osvauld is not a commercial success, we will personally contribute to this project and release patches as members of open-source community",
    image: testimonial2,
  },
  {
    customerName: "Shravan Kumar",
    customerTitle: "Product Deginer at osvuald",
    content:
      "Aim is to combine functionality with aesthetics, creating a user experience that is as enjoyable as it is efficient. It's important that our password manager not only performs flawlessly but also presents a user interface that is intuitive and engaging. I believe great design is key to making our product stand out in the open-source community.",
    image: testimonial3,
  },
];

export const Testimonials = () => (
  <section className="w-full flex justify-center pt-10 mb-16 lg:mb-32 bg-dark1 relative">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="custom-block-subtitle text-center mb-6">
          Our Values
        </div>
        <div className="custom-block-big-title text-center mb-16 px-8 sm:px-24 md:px-48">
         Why we build and what we care
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 custom-border-gray-darker rounded-xl bg-dark1 flex flex-col px-6 py-4"
              key={`${testimonial.customerName}-${index}`}
            >
              <div className="flex mb-2">
                <QuoteIcon />
              </div>
              <div className="custom-content-text-white ">
                "{testimonial.content}"
              </div>
              <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4 ">
                <img src={testimonial.image} alt="" width="60px" />
                <div className="flex flex-col ml-4">
                  <div className="custom-content-text-white font-medium">
                    {testimonial.customerName}
                  </div>
                  <div className="custom-content-text-gray">
                    {testimonial.customerTitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

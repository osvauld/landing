import { motion } from "framer-motion";
import { useState } from "react";

import { InvitationModal } from "./InvitationModal";
import featuresdiagonal from "../assets/images/featuresdiagonal.png";

export const FeaturesDiagonal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="lg:mb-16 w-full flex flex-col justify-center items-center bg-dark1">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className=" 2xl:w-[1150px] xl:w-[1050px]  md:w-4/5 flex justify-center bg-dark1 pt-12 lg:pt-24 pb-8 lg:pb-20 mx-auto lg:flex-row flex-col">
          <div className="w-3/4 lg:w-1/2 flex flex-col lg:mx-unset mx-auto">
            <span className="custom-block-subtitle">
              Foe Better Control
            </span>
            <h2 className="mt-10 mb-8 text-4xl lg:text-5xl custom-block-big-title">
              Run it on your own server, natively
            </h2>
            <p className="mb-16 text-customGrayText leading-loose">
            Stay in control of your data, deploy osvauld within minutes, on-prem or on infrastructure you already trust.
            </p>
            <div
              className="w-[210px] h-12 custom-button-colored mr-10 "
              onClick={() => setIsModalOpen(true)}
            >
              Get Started
            </div>
          </div>
          <div className="w-4/5 flex justify-center mx-auto pt-16 ml-14">
            <img
              src={featuresdiagonal}
              alt="f1"
              className="rounded-xl  custom-border-gray object-cover top-left"
            />
          </div>
        </div>
      </motion.div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};

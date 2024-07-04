import { motion } from "framer-motion";

export const FaqComponent = () => {
  return (
    <section className="w-full" id="faqs">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2 }}
        className="w-full flex flex-col justify-center items-center pt-28 text-white"
      >
        <h1 className="text-[38px] font-Jakartha font-medium w-[350px] h-[246px] ">
          Frequesntly Asked Questions
        </h1>
        <div className="questions">
          <ul>
            <li>What is osvauld?</li>
            <li>Why osvauld?</li>
            <li>Who osvauld</li>
            <li>How osvauld</li>
            <li>When osvauld</li>
            <li>Where osvauld</li>
          </ul>
        </div>
        <div className="cta">
          Still have a question? Contact us. <br /> We will be happy to help
          you! <br />
          <div className="flex justify-between items-center">
            <button className="bg-blue1 text-black rounded-sm px-5 py-4">
              Get a Demo
            </button>
            <button className="bg-blue1 text-black rounded-sm  px-5 py-4">
              Chat with us
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

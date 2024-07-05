import { motion } from "framer-motion";
import { Calender } from "../../assets/icons/Calender";
import { DiscordIcon } from "../../assets/icons/DiscordIcon";

const data = [
  {
    Question: "What is osvauld?",
    Answer:
      " Osvauld is a fictional concept used as a placeholder in examples.",
  },
  {
    Question: "Why is osvauld?",
    Answer: "  Osvauld is used to illustrate how to structure and style FAQ",
  },
];

export const FaqComponent = () => {
  return (
    <section
      className="w-full min-h-screen max-w-[1200px] mx-auto bg-faqDark"
      id="faqs"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2 }}
        className="w-full flex flex-col justify-center items-start pt-28 text-white"
      >
        <h1 className="text-[68px] font-Jakartha font-medium w-[350px] h-[246px] leading-[81px] relative gradient-text">
          Frequently Asked Questions
        </h1>
        <div className="questions w-full px-10 sm:self-center">
          {data.map((item, index) => {
            return (
              <details className="mb-4" key={index}>
                <summary className="cursor-pointer text-xl font-semibold">
                  {item.Question}
                </summary>
                <p className="mt-2 text-lg">{item.Answer}</p>
              </details>
            );
          })}
        </div>
        <div className="cta px-6 py-4 h-[156px] flex flex-col justify-between bg-dark4 rounded-2xl font-Jakartha sm:self-center">
          <span className="font-medium text-xl">
            Still have a question? <br />
          </span>
          <span className="text-base font-extralight">
            Contact us. We will be happy to help you! <br />
          </span>
          <div className="flex justify-between items-center text-sm">
            <button className="bg-blue1 text-dark2 rounded-md px-5 py-2 gap-1 flex items-center flex-nowrap whitespace-nowrap font-semibold">
              <Calender color={"#0D1117"} />
              Get a Demo
            </button>
            <button className="bg-blue1 text-dark2 rounded-md  px-5 py-2 gap-1 flex items-center whitespace-nowrap font-semibold">
              <DiscordIcon color={"#0D1117"} />
              Chat with us
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

import { motion } from "framer-motion";
import { Calender } from "../../assets/icons/Calender";
import { DiscordIcon } from "../../assets/icons/DiscordIcon";

const data = [
  {
    Question: "How osvauld reduces cyber security risks?",
    Answer:
      "osvauld enterprise pne and enhances visibility of credential access across the team.",
  },
  {
    Question: "Is Osvauld free to use?",
    Answer:
      "Osvauld is currently Community edition only. It is free to use under AGPL 3.0, no strings attached.",
  },
  {
    Question: "Is Osvauld suitable only for big companies?",
    Answer: "Osvauld is suitable for both big ay.",
  },
];

export const FaqComponent = () => {
  return (
    <section
      className="w-full min-h-screen max-w-[1200px] mx-auto bg-faqDark px-4"
      id="faqs"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2 }}
        className="w-full pt-28 text-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center items-center md:items-start">
            <h1 className="text-[36px] md:text-[68px] font-Jakartha font-medium w-full md:w-[350px] md:h-[246px] leading-[41px] md:leading-[81px] relative gradient-text text-center md:text-left">
              Frequently Asked Questions
            </h1>
            <div className="cta px-6 py-4 h-[200px] md:h-[156px] flex flex-col justify-between bg-dark4 rounded-2xl font-Jakartha mt-4 md:mt-8 text-center md:text-left">
              <span className="font-medium text-xl">
                Still have a question? <br />
              </span>
              <span className="text-base font-extralight whitespace-nowrap">
                Contact us. We will be happy to help you! <br />
              </span>
              <div className="flex flex-col md:flex-row justify-between items-center text-sm mt-4 md:mt-0">
                <button className="bg-blue1 text-dark2 rounded-md px-5 py-2 gap-1 flex items-center flex-nowrap whitespace-nowrap font-semibold mb-2 md:mb-0 md:mr-4">
                  <Calender color={"#0D1117"} />
                  Get a Demo
                </button>
                <button className="bg-blue1 text-dark2 rounded-md px-5 py-2 gap-1 flex items-center flex-nowrap whitespace-nowrap font-semibold">
                  <DiscordIcon color={"#0D1117"} />
                  Chat with us
                </button>
              </div>
            </div>
          </div>
          <div className="questions px-0 md:px-10 w-full md:w-auto mt-8 md:mt-10">
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
        </div>
      </motion.div>
    </section>
  );
};

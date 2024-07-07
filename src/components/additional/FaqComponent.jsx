import { motion } from "framer-motion";
import { Calender } from "../../assets/icons/Calender";
import { DiscordIcon } from "../../assets/icons/DiscordIcon";
import { CloseIcon } from "../../assets/icons/CloseIcon";
import { Plus } from "../../assets/icons/Plus";

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
          <div className="flex flex-col justify-start items-center md:items-start">
            <h1 className="text-[36px] md:text-[68px] font-Jakartha font-medium w-full md:w-[350px] md:h-[246px] leading-[41px] md:leading-[81px] relative gradient-text text-center md:text-left md:ml-[1.5rem]">
              Frequently Asked Questions
            </h1>
            <div className="hidden md:visible px-6 py-4 h-[200px] md:h-[156px] md:flex flex-col justify-between bg-dark4 rounded-2xl font-Jakartha mt-4 md:mt-8 text-center md:text-left">
              <span className="font-light text-xl">
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
            {data.map((item, index) => (
              <details
                className="mb-4 bg-dark4 rounded-lg px-6 py-4 border border-transparent group open:border-faqBorder"
                key={index}
              >
                <summary className="cursor-pointer flex justify-between items-center text-xl list-none font-Jakarta font-light">
                  <span>{item.Question}</span>
                  <span className="rotate-45 group-open:rotate-90 transition-transform duration-75 ease-in">
                    <CloseIcon color={"#BFC0CC"} />
                  </span>
                </summary>
                <div className="mt-6 text-base text-faqAnswer font-Inter font-light">
                  <p>{item.Answer}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="cta md:hidden px-6 py-4 h-[200px] md:h-[156px] flex flex-col justify-between bg-dark4 rounded-2xl font-Jakartha mt-4 md:mt-8 text-center md:text-left">
            <span className="font-light text-xl">
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
      </motion.div>
    </section>
  );
};

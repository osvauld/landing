import conceptImage from "/src/assets/images/art.png";
import { motion } from "framer-motion";

export const LivnotePhilosophy = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="w-screen xll:h-screen 3xl:h-[110vh] flex  flex-col justify-start items-center mx-auto px-auto bg-livnoteBg px-4 pt-0 sm:pt-12 text-white"
        >

           <div className="relative w-full  mx-auto">
              <img
                alt="Concept art on digital sovereignty"
                src={conceptImage.src}
                className="mx-auto"
              />

              <h2 className="max-w-[1400px] mx-auto text-white font-JetBrainsMono text-left text-2xl font-bold my-10">
              Why Livnote?
              </h2>
              <p className="max-w-[1400px] mx-auto text-left text-base font-JetBrainsMono text-[#F1F7FE] opacity-70 ">
              We're building Livnote because we believe you shouldn't have to sacrifice privacy to work together. <br /><br />
In a world where collaboration means uploading your documents to corporate servers, we're creating an alternative where you can work directly with others while your data stays where it belongs—on your devices. <br /><br />
Your notes remain encrypted and under your control. When you collaborate, you connect directly with people you trust, not through some company's computers that can see everything you write.<br /><br />
We don't store your account details. We don't have access to your collaborative sessions. We don't even know what you're working on—and that's exactly how it should be.<br /><br />
Livnote is our contribution to a movement of digital sovereignty, where people work together freely without surrendering control of their shared creations.<br /><br />
              </p>
      </div>

        </motion.section>)
}
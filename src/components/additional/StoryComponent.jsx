import { motion } from "framer-motion";
import { Team } from "../Team.jsx";

export const StoryComponent = () => {
  return (
    <div className="w-full min-h-screen mb-[6rem] max-w-[1200px] mx-auto bg-dark4 px-4 pt-28 text-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2 }}
      >
        <span className="flex flex-col items-center mb-14 mt-6 text-[40px] md:text-[48px] lg:text-7xl font-Jakartha font-medium tracking-tight text-balance gradient-text-bottom ">
          <h1 className="text-center lg:text-left py-2">Our story</h1>
        </span>
        <div className="text-lg text-faqAnswer mb-20">
          {" "}
          Every great project starts with a challenge, and ours began when we
          saw a gap in the way organizations handle shared credentials. As
          backend engineers venturing into new territories, we were driven by a
          deep commitment to data privacy. The spark came from a conversation
          with a CTO friend who highlighted the need for a better shared
          credentials management solution. This insight, combined with our
          acceptance into the buildspace program, set us on an exciting path of
          creation and discovery. <br /> <br />
          <h2 className="text-white  text-xl mb-2"> Evolution of Our Vision</h2>
          <p className="text-lg text-faqAnswer">
            Our initial approach was building an open-source, self-hosted
            credentials manager. We chose Go for the backend, transitioned from
            a web app to a browser extension for enhanced security, and learned
            valuable lessons along the way. However, we soon discovered that
            while organizations needed such a solution, the complexities of
            self-hosting and compliance created significant barriers. This
            realization led us to pivot towards a personal password manager, but
            with an ambitious twist. We wanted to create something that would
            work seamlessly across desktop and mobile platforms. We built our
            core encryption and identity protocols in Rust, compiled to
            WebAssembly for maximum performance and security. Using Tauri for
            our desktop applications, we began addressing one of the most
            frustrating aspects of existing offline password managers like
            KeePass: synchronization.
          </p>
          <br />
          <h2 className="text-white  text-xl  mb-2">The Breakthrough</h2>{" "}
          <p className="text-lg text-faqAnswer">
            While developing our peer-to-peer synchronization solution using
            Iroh, we had an epiphany. What if users had a dedicated device for
            managing their digital identity and credentials? This thought
            evolved into something even more powerful: a platform where
            individuals could host their data and selectively share it with
            fine-grained access control.{" "}
          </p>
          <br />
          <h2 className="text-white  text-xl  mb-2">Looking Forward</h2>
          <p className="text-lg text-faqAnswer">
            Today, Osvauld is growing beyond its origins as a password manager.
            We're building a privacy-first platform that enables secure data
            hosting and sharing, with user control at its core. Our vision
            extends to creating applications and porting open-source projects to
            our platform, all while maintaining our commitment to privacy and
            security. We're not just building another password manager – we're
            creating a new paradigm for personal data management where privacy
            isn't just a feature, it's the foundation. Join us as we continue to
            evolve and shape the future of personal data management and privacy.
          </p>
        </div>
        <Team client:load />
      </motion.div>
    </div>
  );
};

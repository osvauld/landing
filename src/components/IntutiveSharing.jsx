import React, { lazy, Suspense } from "react";
import sharing from "../assets/images/osvauldsharing.webp";
const MotionDiv = lazy(() =>
  import("framer-motion").then((pkg) => ({ default: pkg.motion.div }))
);

export const IntutiveSharing = () => (
  <Suspense fallback={null}>
    <section className="w-full bg-dark1 mt-12 sm:mt-20 mb-10 lg:my-20 pt-4">
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-32">
          <article className="text-white3 w-[95vw] text-center  lg:text-left lg:max-w-[80%] font-light pb-32 lg:pb-12">
            <h3 className="text-2xl lg:text-4xl font-Jakartha font-light xl:tracking-[-0.1rem] mb-10">
              <span className="text-blue1">
                Intutive sharing mechanism for seamless granular access
                distribution.
              </span>{" "}
              Enables you to share credentials with designated groups or users.
            </h3>
            <p className="w-[95vw] lg:max-w-[70%] text-sm">
              Manage credentials access by assigning and revoking permissions as
              per your needs. Track the frequency and manner in which
              credentials are accessed with audit logs that offers insights into
              usage patterns.
            </p>
          </article>
          <MotionDiv
            initial={{ opacity: 0, y: 10, zIndex: 20 }}
            animate={{ opacity: 1, y: 0, zIndex: 20 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="relative w-screen top-10 sm:top-0 right-4 md:right-8 xl:right-20 flex justify-center md:justify-start items-center mb-40 sm:mb-[50vw] xl:mb-[40vw]">
              <img
                src={sharing}
                alt="sharing functionality of osvauld"
                className="w-[95%] sm:w-[90%] md:w-[84%] lg:w-3/4 xl:w-5/6 2xl:w-[1200px] mx-auto absolute z-10 rounded-xl hero-dashboard-border-gradient sm:top-0 md:top-2 lg:top-0 xl:top-0"
              />
            </div>
          </MotionDiv>
        </div>
      </MotionDiv>
    </section>
  </Suspense>
);

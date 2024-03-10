import React, { useState, useEffect, useRef } from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const firstPhrase = "More Transparency, More Control.";
const secondPhrase = "Handle your credentials with osvauld.";

export const UseOsvauld = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisible(entry.isIntersecting));
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex justify-start items-center bg-dark1 mx-auto w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 xl:pl-8 2xl:w-2/3"
    >
      <div className="text-3xl sm:text-6xl lg:text-6xl xl:text-6xl xl:tracking-[-0.2rem] tracking-wide text-blue1 xl:font-normal xl:px-0 px-0 sm:px-8 md:px-20 lg:px-4 font-Jakartha">
        <h1 className="">
          {isVisible && (
            <TextGenerateEffect words={firstPhrase} className={"text-blue1"} />
          )}
          <span className="">
            {isVisible && (
              <TextGenerateEffect
                words={secondPhrase}
                className={"text-white1"}
              />
            )}
          </span>
        </h1>
      </div>
    </section>
  );
};

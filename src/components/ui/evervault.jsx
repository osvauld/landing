"use client";
import { useMotionValue } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useMotionTemplate, motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const EvervaultCard = ({ text, className }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    let str = generateRandomString(3000);
    setRandomString(str);
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(5000);
    setRandomString(str);
  }

  return (
    <div
      className={cn(
        "p-0.5  bg-transparent aspect-auto  flex items-center justify-center w-full h-[28rem] relative",
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        className="group/card p-10 rounded-3xl w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />
        <div className="relative z-10 flex-col items-center justify-center">
          <div className="relative px-3 py-3 rounded-full flex items-center justify-center text-white ">
            <div className="absolute w-2/5 h-full bg-white/[0.8] dark:bg-black/[0.8] blur-sm" />
            <span className="dark:text-blue1 text-black z-20 whitespace-nowrap text-5xl font-Jakartha font-light tracking-tighter">
              {text}
            </span>
          </div>
          <div className="py-10 flex flex-col lg:flex-row justify-between items-center gap-4">
            <article className="bg-customDarkBgTransparentDarker rounded-lg w-[95vw] lg:w-[30%] p-6">
              <p>
                Your data remains encrypted end to end with your individual
                email and master password. We cannot see your private
                credentials.
              </p>
            </article>
            <article className="bg-customDarkBgTransparentDarker  rounded-lg  w-[95vw] lg:w-[30%]  p-6">
              <p>
                Private key is generated on the browser when user signs up. It
                will never be transferred over network and will stay exclusively
                in client browser.
              </p>
            </article>
            <article className="bg-customDarkBgTransparentDarker  rounded-lg  w-[95vw] lg:w-[30%]  p-6">
              <p>
                All your data is fully sealed with RSA 2048-bit encryption
                before it leaves your device, only the holder of private key can
                access the data.
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export function CardPattern({ mouseX, mouseY, randomString }) {
  let maskImage = useMotionTemplate`radial-gradient(ellipse 400px 250px at ${mouseX}px ${mouseY}px, white, transparent)`;

  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl  [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 opacity-0  group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay  group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export const generateRandomString = (length) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

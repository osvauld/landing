"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import env from "/src/assets/images/env.png";
import extension from "/src/assets/images/extension.png";
import vault from "/src/assets/images/vault.png";
import { BuyMeCoffee } from "../../assets/icons/BuyMeCoffee";

export const FadeInDiv = ({ className, tabs, hovering }) => {
  const isActive = (tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative w-full h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-full h-full absolute top-0 left-0", className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};

export const Tabs = ({
  propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}) => {
  const [active, setActive] = useState(propTabs[0]);
  const [tabs, setTabs] = useState(propTabs);

  const moveSelectedTabToTop = (idx) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const setImgPathToSelected = () => {};

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div className="h-[15rem]  w-full mb-4  text-white text-5xl lg:text-7xl  font-normal font-Jakartha flex items-start justify-between">
        <span className="gradient-text-bottom">{active.value}</span>
        <img
          alt="vault image"
          src={
            active.id === 2
              ? vault.src
              : active.id === 1
              ? env.src
              : extension.src
          }
          className="h-60 w-60 md:h-[24rem] md:w-[24rem]"
        />
      </div>
      <div
        className={cn(
          "flex flex-row items-center justify-between [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar  md:h-auto w-3/4 md:w-1/2  mx-auto sm:mx-0 p-1  border border-faqBorder rounded-xl ",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn("relative px-4 py-2 rounded-full  ", tabClassName)}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-gray-200 dark:bg-tabBg rounded-lg ",
                  activeTabClassName
                )}
              />
            )}

            <span className="relative  text-faqAnswer flex gap-1.5 items-center">
              <BuyMeCoffee
                color={active.value === tab.value ? "#BFC0CC" : "#67697C"}
              />{" "}
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-24", contentClassName)}
      />
    </>
  );
};

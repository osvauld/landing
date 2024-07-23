import { motion } from "framer-motion";
import { useEffect } from "react";
import React from "react";
import mixpanel from "mixpanel-browser";
import dashboard from "/src/assets/images/dashboard.jpeg";

import { GithubIcon } from "../assets/icons/GithubIcon";
import { BottomArrow } from "../assets/icons/BottomArrow";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { PlayButton } from "../assets/icons/PlayButton";
import { BuyMeCoffee } from "../assets/icons/BuyMeCoffee";
import { Image } from "astro:assets";

export const Hero = React.memo(() => {
  // useEffect(() => {
  //   mixpanel.init("7c45196567d67468f4f47b3b1d63f931", {
  //     track_pageview: true,
  //   });
  // }, []);
  return (
    <section
      className="pt-20 md:pt-32 flex flex-col justify-center items-center bg-faqDark min-h-screen"
      id="home"
    >
      <div className="max-w-[1200px] bg-red-400 w-full">Content</div>
    </section>
  );
});

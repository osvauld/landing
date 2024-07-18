import { useEffect, useState } from "react";
import { ScrollUp } from "../assets/icons/ScrollUp";

export const DemoBanner = ({ faq }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isBeingHovered, setisBeingHovered] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300 && scrolled < 2600) {
      setIsVisible(true);
    } else if (scrolled <= 300 || scrolled > 2600) {
      setIsVisible(false);
    }
  };

  const redirectToDemo = () => {};

  const curserEntered = () => {
    setisBeingHovered(true);
  };

  const curserRemoved = () => {
    setisBeingHovered(false);
  };

  return (
    <>
      {isVisible && (
        <div
          className={`${
            faq ? "bg-faqDark" : "bg-transparent"
          } w-full h-20 backdrop-blur-xl fixed bottom-0 cursor-pointer flex justify-between items-center transition z-50 px-10`}
          onClick={redirectToDemo}
          onMouseEnter={curserEntered}
          onMouseLeave={curserRemoved}
        >
          <div className="w-full max-w-[1200px] flex justify-between items-center mx-auto">
            <div className="flex flex-col">
              <h6 className="font-Inter text-blue1 font-semibold">
                Schedule a 1:1 demo
              </h6>
              <span className="pricing-content ">Meet our team</span>
            </div>
            <a
              className="rounded-md px-10 py-1.5 bg-labelBackground text-blue1"
              href="/demo"
            >
              Get a Demo
            </a>
          </div>
        </div>
      )}
    </>
  );
};

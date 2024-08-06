import { useEffect, useState } from "react";
import { ScrollUp } from "../assets/icons/ScrollUp";
import { CalenderDates } from "../assets/icons/CalenderDates";

export const DemoButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isBeingHovered, setisBeingHovered] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 2600) {
      setIsVisible(true);
    } else if (scrolled <= 2600) {
      setIsVisible(false);
    }
  };

  const redirectToDemo = () => {
    window.location.href = "/demo";
  };

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
          className={`bg-faqDark
          w-12 h-12 fixed bottom-24 left-6 border border-blue1 rounded-full hover:bg-blue1 cursor-pointer flex justify-center items-center transition z-50 group`}
          onClick={redirectToDemo}
          onMouseEnter={curserEntered}
          onMouseLeave={curserRemoved}
        >
          <CalenderDates color={isBeingHovered ? "#000" : "#89B4FA"} />
          <span className="absolute right-0 transform translate-x-[110%] mb-2 w-max px-3 py-1 text-sm text-blue1 bg-labelBackground rounded opacity-0 group-hover:opacity-100 transition duration-300">
            Book a Demo
          </span>
        </div>
      )}
    </>
  );
};

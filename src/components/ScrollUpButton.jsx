import { useEffect, useState } from "react";
import { ScrollUp } from "../assets/icons/ScrollUp";

export const ScrollUpButton = ({ faq }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isBeingHovered, setisBeingHovered] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setIsVisible(true);
    } else if (scrolled <= 300) {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setTimeout(() => {
      setisBeingHovered(false);
    }, 600);
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
          className={`${
            faq ? "bg-faqDark" : "bg-dark1"
          } w-12 h-12 fixed bottom-6 right-6 border border-blue1 rounded-lg   hover:bg-blue1 cursor-pointer flex justify-center items-center transition z-50`}
          onClick={scrollToTop}
          onMouseEnter={curserEntered}
          onMouseLeave={curserRemoved}
        >
          <ScrollUp color={isBeingHovered ? "#000" : "#89B4FA"} />
        </div>
      )}
    </>
  );
};

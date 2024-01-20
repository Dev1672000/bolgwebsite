import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { animateScroll as scroll } from "react-scroll";

const ScrollToTop = () => {
  const [showArrow, setShowArrow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {showArrow && (
        <IoIosArrowUp
          size={40}
          onClick={scrollToTop}
          className="fixed right-[7%] font-bold z-10 md:right-0 top-[90%] bg-[#c80000] text-white  transform -translate-y-1/2 animate-bounce cursor-pointer"
        />
      )}
    </div>
  );
};

export default ScrollToTop;

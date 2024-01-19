import React, { useRef } from "react";
import SwiperCore from "swiper";
import { useSwiper } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
SwiperCore.use([Navigation, Autoplay]);

const BreakingNews = () => {
  const swiperRef = useRef(null);
  const swiperParams = {
    spaceBetween: 50,
    slidesPerView: 1,
    effect: "slide",
    speed: 500,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 100,
      disableOnInteraction: false,
    },
  };

  return (
    <div className=" mx-auto md:mx-[20%] flex md:flex-row flex-col justify-center items-center gap-5 py-[2%]">
      <div className="uppercase  mx-auto md:w-[40%] bg-[#c80000] text-[12px] text-center font-bold text-white p-2">
        Breaking News
      </div>
      <Swiper {...swiperParams} ref={swiperRef} >
        <SwiperSlide >
          1. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo,
          dolor?
        </SwiperSlide>
        <SwiperSlide>
          2. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo,
          dolor?
        </SwiperSlide>
        <SwiperSlide>
          3. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo,
          dolor?
        </SwiperSlide>
      </Swiper>
      <div className="text-[20px] text-[#029fb2] md:flex   hidden">
        <MdOutlineKeyboardArrowLeft
          onClick={() => swiperRef.current?.swiper.slidePrev()}
          className="border-[#029fb2] m-2 border-[1px] cursor-pointer"
        />
        <MdOutlineKeyboardArrowRight
          onClick={() => swiperRef.current?.swiper.slideNext()}
          className="border-[#029fb2] m-2 border-[1px] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default BreakingNews;

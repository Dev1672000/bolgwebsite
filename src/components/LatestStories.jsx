import React, { useState, useRef } from "react";
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
const LatestStories = () => {
  const [itemsToShow, setItemsToShow] = useState(10);
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
      delay: 1000,
      disableOnInteraction: false,
    },
  };
  const loadMoreItems = () => {
    setItemsToShow(itemsToShow + 10);
  };
  const data = [
    {
      title: "locale",
      date: "Staff - January 17, 2024",
      description:
        "Le Premier Ministre Visite Plusieurs Régions Pour Evaluer Les Dégâts Causés Par Le Cyclone Belal Et Les Pluies Torrentielles",
      imageUrl: "news1.webp",
    },
    {
      title: "locale",
      date: "Staff - January 17, 2024",
      description:
        "Le Premier Ministre Visite Plusieurs Régions Pour Evaluer Les Dégâts Causés Par Le Cyclone Belal Et Les Pluies Torrentielles",
      imageUrl: "news1.webp",
    },
    {
      title: "locale",
      date: "Staff - January 17, 2024",
      description:
        "Le Premier Ministre Visite Plusieurs Régions Pour Evaluer Les Dégâts Causés Par Le Cyclone Belal Et Les Pluies Torrentielles",
      imageUrl: "news1.webp",
    },
    {
      title: "locale",
      date: "Staff - January 17, 2024",
      description:
        "Le Premier Ministre Visite Plusieurs Régions Pour Evaluer Les Dégâts Causés Par Le Cyclone Belal Et Les Pluies Torrentielles",
      imageUrl: "news1.webp",
    },
    {
      title: "locale",
      date: "Staff - January 17, 2024",
      description:
        "Le Premier Ministre Visite Plusieurs Régions Pour Evaluer Les Dégâts Causés Par Le Cyclone Belal Et Les Pluies Torrentielles",
      imageUrl: "news1.webp",
    },
    {
      title: "locale",
      date: "Staff - January 17, 2024",
      description:
        "Le Premier Ministre Visite Plusieurs Régions Pour Evaluer Les Dégâts Causés Par Le Cyclone Belal Et Les Pluies Torrentielles",
      imageUrl: "news1.webp",
    },
  ];

  return (
    <div>
      <div className="ml-[3.5%] my-[5%]">
        <h1 className="text-[90px] text-[#f3f3f3] uppercase font-[700]">
          latest
        </h1>
        <h1 className="text-[24px] text-[#c80000]  font-[900] pl-4 -mt-[15%] md:-mt-[4.5%]  text-xl">
          Stories
        </h1>
      </div>
      <div className="md:px-16 px-4 my-5 container mx-auto">
        <div className=" px-0 grid grid-cols-2 md:grid-cols-3 gap-4">
          {data.map((item, index) => (
            <div>
              <div key={index} className="relative  py-3 w-full">
                <img
                  className="w-full md:h-56 object-cover"
                  src={item.imageUrl}
                  alt={item.title}
                />
                <div className="absolute bottom-3 left-0 bg-[#029fb2] text-white p-1">
                  <h1 className="font-semibold text-[10px] uppercase">
                    {" "}
                    {item.title}
                  </h1>
                </div>
              </div>
              <h1 className="  font-bold md:text-[16px] text-[14px] mt-1">{item.description}</h1>
              <p className="text-gray-600 md:pl-2  text-sm mt-1">{item.date}</p>
            </div>
          ))}
        </div>
        <Swiper {...swiperParams} ref={swiperRef}>
          <div className="text-[20px] text-[#029fb2] flex ">
            <MdOutlineKeyboardArrowLeft
              onClick={() => swiperRef.current?.swiper.slidePrev()}
              className="border-[#029fb2] bg-[#029fb2] text-white m-2 border-[1px] cursor-pointer"
            />
            <MdOutlineKeyboardArrowRight
              onClick={() => swiperRef.current?.swiper.slideNext()}
              className="border-[#029fb2] bg-[#029fb2] text-white m-2 border-[1px] cursor-pointer"
            />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default LatestStories;

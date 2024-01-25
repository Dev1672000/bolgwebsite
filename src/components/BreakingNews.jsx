import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
SwiperCore.use([Navigation, Autoplay]);

const BreakingNews = () => {
  const swiperRef = useRef(null);
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
const navigate=useNavigate()
  const fetchArticles = async () => {
    try {
      const articlesResponse = await axios.get(
        `${process.env.REACT_APP_API_URL}/getLatestArticles`,
        {
          params: {
            language: "english",
            numOfArticles: 10,
            skippedArticles: (currentPage - 1) * 10,
          },
        }
      );

      if (Array.isArray(articlesResponse.data)) {
        setArticles(articlesResponse.data);
        setError(null);
      } else {
        setArticles([]);
        setError("Invalid response format. Please try again later.");
      }
    } catch (error) {
      console.error("Error fetching articles:", error);
      setArticles([]);
      setError("Error fetching articles. Please try again later.");
    }
  };

  useEffect(() => {
    // Call the fetchArticles function when the currentPage changes
    fetchArticles();
  }, [currentPage]);

  const swiperParams = {
    spaceBetween: 50,
    slidesPerView: 1,
    effect: "slide",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  };

  return (
    <div className="mx-auto md:mx-[13%] flex md:flex-row flex-col justify-center items-center  py-[2%]">
      <div className="uppercase  md:w-[14%] bg-[#c80000] text-[12px] text-center font-bold text-white p-2">
        Breaking News
      </div>
      <Swiper {...swiperParams} ref={swiperRef} className="md:w-[75%]">
        {articles.map((article) => (
          <SwiperSlide key={article._id}>
            <Link to={`/news/${article._id}`}>{article.engHeading}</Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text-[20px] md:w-[8%] text-[#029fb2] md:flex hidden">
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

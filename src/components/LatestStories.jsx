import React, { useState, useEffect,useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SwiperCore from "swiper";
import { Swiper } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
SwiperCore.use([Navigation, Autoplay]);
const LatestStories = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchArticles = async () => {
    try {
      const articlesResponse = await axios.get(
        `${process.env.REACT_APP_API_URL}/getLatestArticles`,
        {
          params: {
            language: "english",
            numOfArticles: 6,
            skippedArticles: (currentPage - 1) * 10,
          },
        }
      );

      const articlesWithFormattedDate = await Promise.all(
        articlesResponse.data.map(async (article) => {
          const imageResponse = await axios.get(
            `${process.env.REACT_APP_API_URL}/getImage`,
            {
              params: {
                imageID: article.images[0],
              },
            }
          );

          const decodedImage = imageResponse.data.imageBase64;

          // Format the publication date
          const options = { year: "numeric", month: "long", day: "numeric" };
          const date = new Date(article.publicationDate);
          const formattedDate = date.toLocaleDateString("en-US", options);

          return {
            ...article,
            decodedImage,
            formattedDate: `${formattedDate}`,
          };
        })
      );

      setArticles(articlesWithFormattedDate);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

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
          {articles.map((article) => (
            <div to={`/news/${article._id}`} key={article._id}>
              <div className="relative  py-3 w-full">
                {article.decodedImage && (
                  <img
                    className="w-full md:h-56 object-cover"
                    src={`data:image/jpeg;base64,${article.decodedImage}`}
                    alt={`Image ${article.filename}`}
                  />
                )}
                <div className="absolute bottom-3 left-0 bg-[#029fb2] text-white p-1">
                  <h1 className="font-semibold text-[10px] uppercase">
                    {" "}
                    {article.engCategories && article.engCategories[0]}
                  </h1>
                </div>
              </div>
              <h1 className="  font-bold md:text-[16px] text-[14px] mt-1">
                {article.engHeading}
              </h1>
              <p className="text-gray-600 md:pl-2  text-sm mt-1">
                {" "}
                {`${article.author} - ${article.formattedDate}`}
              </p>
            </div>
          ))}
        </div>
        <Swiper {...swiperParams} ref={swiperRef}>
          <div className="text-[20px] text-[#029fb2] flex ">
            <MdOutlineKeyboardArrowLeft
              // onClick={() => swiperRef.current?.swiper.slidePrev()}
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="border-[#029fb2] bg-[#029fb2] text-white m-2 border-[1px] cursor-pointer"
            />
            <MdOutlineKeyboardArrowRight
              // onClick={() => swiperRef.current?.swiper.slideNext()}
              onClick={handleNextPage}
              className="border-[#029fb2] bg-[#029fb2] text-white m-2 border-[1px] cursor-pointer"
            />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default LatestStories;

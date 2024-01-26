import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import ReactPaginate from "react-paginate";
const CategorySports = () => {
  const [articles, setArticles] = useState([]);
  const [articlesEntnmntStories, setArticlesEntnmntStories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const fetchArticles = async () => {
    try {
      const articlesResponse = await axios.get(
        `${process.env.REACT_APP_API_URL}/getLatestArticles`,
        {
          params: {
            language: "english",
            numOfArticles: 5,
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

  return (
    <div className="">
      {articles.map((article) => (
        <Link
          to={`/${article._id}`}
          key={article._id}
          className="flex gap-5 space-y-5"
        >
          <div className="relative pt-5 w-full h-full">
            {article.decodedImage && (
              <img
                src={`data:image/jpeg;base64,${article.decodedImage}`}
                alt={`Image ${article.filename}`}
                className="w-full h-28 md:h-52  md:w-52 object-cover"
              />
            )}
            <div className="absolute bottom-0 left-0 bg-[#029fb2] text-white p-1">
              <h1 className="font-semibold text-[10px] uppercase">
                {article.engCategories && article.engCategories[0]}
              </h1>
            </div>
          </div>

          <div className="border-t-[1px] p-2 ">
            <p className="font-bold md:text-xl hover:text-[#C80000]">
              {" "}
              {article.engHeading}
            </p>
            <span className="text-[14px] italic">
              {`${article.author} - ${article.formattedDate}`}
            </span>
            <p className="text-gray-500 md:block hidden ">
              {article.engContent[0]}
            </p>
          </div>
        </Link>
      ))}
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
    </div>
  );
};

export default CategorySports;

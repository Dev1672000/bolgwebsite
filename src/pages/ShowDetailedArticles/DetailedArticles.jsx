import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import ReactPaginate from "react-paginate";
import LatestNews from "../Category/LatestNews";
// ... (your imports)

const DetailedArticles = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchArticles = async () => {
    try {
      const articlesResponse = await axios.get(
        `${process.env.REACT_APP_API_URL}/getLatestArticles`,
        {
          params: {
            language: "english",
            numOfArticles: 1,
            skippedArticles: (currentPage - 1) * 10,
          },
        }
      );

      const articlesWithFormattedDate = await Promise.all(
        articlesResponse.data.map(async (article) => {
          const imageContentPairs = await Promise.all(
            article.images.map(async (imageId, index) => {
              const imageResponse = await axios.get(
                `${process.env.REACT_APP_API_URL}/getImage`,
                {
                  params: {
                    imageID: imageId,
                  },
                }
              );

              const decodedImage = imageResponse.data.imageBase64;

              return {
                decodedImage,
                content: article.engContent[index] || "", // Handle if content is undefined
              };
            })
          );

          const options = { year: "numeric", month: "long", day: "numeric" };
          const date = new Date(article.publicationDate);
          const formattedDate = date.toLocaleDateString("en-US", options);

          return {
            ...article,
            imageContentPairs,
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
    <div>
      <div className="">
        {articles.map((article) => (
          <div to={`/news/${article._id}`} key={article._id} className="">
            <div>
              <span className="bg-[#029fb2] uppercase text-[10px] text-white p-1">
                {article.engCategories && article.engCategories[0]}
              </span>
              <p className="text-3xl font-bold">{article.engHeading}</p>
              <span className="italic">
                {`${article.author} - ${article.formattedDate}`}
              </span>
            </div>

            <div>
              {article.imageContentPairs.map((pair, index) => (
                <React.Fragment key={index}>
                  <div className="relative pt-5 w-full h-full">
                    {pair.decodedImage && (
                      <img
                        src={`data:image/jpeg;base64,${pair.decodedImage}`}
                        alt={`Image ${article.filename}`}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="p-2">
                    <p className="text-gray-500">{pair.content}</p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailedArticles;



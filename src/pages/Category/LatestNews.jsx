import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const LatestNews = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchArticles = async () => {
    try {
      const articlesResponse = await axios.get(
        `${process.env.REACT_APP_API_URL}/getLatestArticles`,
        {
          params: {
            language: "english",
            numOfArticles: 4,
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
          const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
          };
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
  return (
    <div className="py-[2%] border-[1px] border-gray-100 px-2 mt-5 ">
      <h1 className="text-[24px] px-2 text-[#c80000]  font-[900]">
        Latest News
      </h1>
      <div className="grid grid-cols-1  rounded-lg">
        {articles.map((article) => (
          <div
            key={article._id}
            className=" py-4 px-2 gap-3 flex justify-between"
          >
            <div className="bg-white ">
              <Link
                to={`/news/${article._id}`}
                className="text-black hover:text-[#c80000]  font-bold "
              >
                <p className=" mt-2 font-bold italic ">{article.engHeading} </p>
                <p className="text-xs mt-2 italic text-gray-500">
                  {`${article.author} - ${article.formattedDate}`}
                </p>
              </Link>
            </div>
            {article.decodedImage && (
              <img
                src={`data:image/jpeg;base64,${article.decodedImage}`}
                alt={`Image ${article.filename}`}
                className="object-cover w-20 h-24 "
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;

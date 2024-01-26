import React, { useState, useEffect } from "react";
// import Image from "../../assests";
import axios from "axios";
import { Link } from "react-router-dom";
const Sports = () => {
  const [articles, setArticles] = useState([]);
  const [articlesBusinessFinance, setArticlesBusinessFinance] = useState([]);
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
  const fetchArticlesBusinessFinance = async () => {
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

      setArticlesBusinessFinance(articlesWithFormattedDate);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    fetchArticles();
    fetchArticlesBusinessFinance();
  }, [currentPage]);

  return (
    <div className="md:mx-5 mx-2 my-[5%]">
      <div className="bg-[#029fb2] px-4 py-9 text-cent  text-white  md:p-16">
        <h1 className="md:text-6xl text-3xl font-bold">World Of Sports</h1>
        <p>
          Everything you need to know about the latest happenings from the world
          of sports.
        </p>
      </div>
      <div className="md:flex gap-5">
        <div className="md:w-[40%]  ">
          {articles.map((article) => (
            <Link to={`/${article._id}`} key={article._id}>
              <div className="relative  -mt-5 md:-mt-9 ">
                {article.decodedImage && (
                  <img
                    src={`data:image/jpeg;base64,${article.decodedImage}`}
                    alt={`Image ${article.filename}`}
                    className="w-[90%] h-[500px] mx-auto object-cover"
                  />
                )}
                <div className="absolute bottom-0 left-0 bg-[#029fb2] text-white ml-7 p-1">
                  <h1 className="font-semibold text-[10px] uppercase">
                    {article.engCategories && article.engCategories[0]}
                  </h1>
                </div>
              </div>

              <div className="pl-5 mt-3 hover:text-[#c80000] font-bold text-3xl">
                <h1>Cycling : African Track</h1>
                <h1>Championships : Samuel Dupuy Rolls On Gold</h1>
                <p className="text-xs mt-2 italic text-gray-500 font-normal">
                  {`${article.author} - ${article.formattedDate}`}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="md:w-[60%] mt-5">
          <div className="md:mb-12 px-0 grid grid-cols-2 md:grid-cols-2 gap-4">
            {" "}
            {articlesBusinessFinance.map((article) => (
              <Link to={`/${article._id}`} key={article._id}>
                <div className="relative   w-full">
                  {" "}
                  {article.decodedImage && (
                    <img
                      className="w-full h-44 object-cover"
                      src={`data:image/jpeg;base64,${article.decodedImage}`}
                      alt={`Image ${article.filename}`}
                    />
                  )}
                  <div className="absolute bottom-0 left-0 bg-[#029fb2] text-white p-1">
                    <h1 className="font-semibold text-[10px] uppercase">
                      {" "}
                      {article.engCategories && article.engCategories[0]}
                    </h1>
                  </div>
                </div>
                <h1 className="  font-bold text-sm mt-3 hover:text-[#C80000]">
                  {article.engHeading}
                </h1>
                <p className="text-xs mt-2 italic text-gray-500">
                  {" "}
                  {`${article.author} - ${article.formattedDate}`}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sports;

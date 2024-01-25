import React, { useState, useEffect } from "react";
import Image from "../assests";
import axios from "axios";
import { Link } from "react-router-dom";
const HomeMain = () => {
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
             numOfArticles: 3,
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
    <div className=" gap-7 lg:px-10 px-6 md:py-5">
      <div className="lg:flex  justify-center">
        {articles.map((article) => (
          <div className="flex flex-col  gap-8 h-full lg:w-[50%]">
            <Link to={`/${article._id}`}>
              <span className="bg-[#029fb2] uppercase text-[10px] text-white p-1">
                {article.engCategories && article.engCategories[0]}
              </span>
              <p className="text-3xl font-bold">{article.engHeading}</p>
              <span className="italic">
                {" "}
                {`${article.author} - ${article.formattedDate}`}
              </span>
            </Link>
            <div className="space-y-6 ">
              {article.decodedImage && (
                <img
                  src={`data:image/jpeg;base64,${article.decodedImage}`}
                  alt={`Image ${article.filename}`}
                  className=""
                />
              )}
              <p>{article.engContent[0]}</p>
            </div>
          </div>
        ))}

        <div className="lg:ml-6 lg:mt-0 mt-7  gap-5 lg:w-[20%] w-full flex lg:flex-col sm:flex-row flex-col items-center ">
          {articlesBusinessFinance.map((article) => (
            <div className="" key={article._id}>
              <Link to={`/news/${article._id}`}>
                <div className="relative overflow-hidden">
                  {article.decodedImage && (
                    <img
                      src={`data:image/jpeg;base64,${article.decodedImage}`}
                      alt={`Image ${article.filename}`}
                      className="h-44 w-full"
                    />
                  )}
                  <div className="absolute bottom-0 left-0 bg-[#029fb2] text-white p-1">
                    <h1 className="font-semibold text-[10px] uppercase">
                      {article.engCategories && article.engCategories[0]}
                    </h1>
                  </div>
                </div>

                <p className="font-bold">{article.engHeading}</p>
                <span className="italic text-[14px]">
                  {`${article.author} - ${article.formattedDate}`}
                </span>
              </Link>
            </div>
          ))}
        </div>

        <div className="flex mt-5 md:mt-0 md:mx-5 lg:w-[23%]  flex-col">
          <div>
            <h1 className="text-[#C80000] mb-5 text-[18px] font-bold">
              Editor Picks
            </h1>{" "}
            {articlesBusinessFinance.map((article) => (
              <div
                to={`/news/${article._id}`}
                key={article._id}
                className=" mx-auto   pb-2 flex sm:mx-auto mb-2 items-center"
              >
                <div className="space-y-2">
                  <p className="font-bold  hover:text-[#C80000]">
                    {article.engHeading}
                  </p>
                  <p className="text-xs italic text-gray-600">
                    {`${article.author} - ${article.formattedDate}`}
                  </p>
                </div>
                {article.decodedImage && (
                  <img
                    src={`data:image/jpeg;base64,${article.decodedImage}`}
                    alt={`Image ${article.filename}`}
                    className="h-20 w-20 rounded-full object-cover "
                  />
                )}
              </div>
            ))}
            <div>
              <h1 className="text-[#C80000] mb-5 text-[18px] font-bold">
                Business & Finance
              </h1>
              {articlesBusinessFinance.map((article) => (
                <div
                  to={`/news/${article._id}`}
                  key={article._id}
                  className=" mx-auto   pb-2 flex sm:mx-auto mb-2 items-center"
                >
                  <div className="space-y-2">
                    <p className="font-bold  hover:text-[#C80000]">
                      {article.engHeading}
                    </p>
                    <p className="text-xs italic text-gray-600">
                      {`${article.author} - ${article.formattedDate}`}
                    </p>
                  </div>
                  {article.decodedImage && (
                    <img
                      src={`data:image/jpeg;base64,${article.decodedImage}`}
                      alt={`Image ${article.filename}`}
                      className="h-20 w-20 rounded-full object-cover "
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../store/articlesSlice";
const Sidebar = () => {
  //  const dispatch = useDispatch();
  //  const articles = useSelector((state) => state.articles.data);
  //  const error = useSelector((state) => state.articles.error);
  //  const currentPage = 1; // Assuming you want to fetch for currentPage 1 initially

  //  useEffect(() => {
  //    dispatch(fetchArticles(currentPage));
  //  }, [dispatch, currentPage]);
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

  return (
    <div className="2xl:mx-auto my-[5%] 2xl:container  gap-7 ">
      <div className="2xl:mx-auto flex md:flex-row flex-col 2xl:container  gap-7 lg:px-10 px-0">
        <div className="py-[2%] border-[1px] border-gray-100 px-2  md:w-[20%] ">
          <h1 className="text-[24px] mx-2 text-[#c80000]  font-[900] mb-5">
            Global News
          </h1>
          {articles.map((article) => (
            <Link to={`/${article._id}`} key={article._id}>
              <div>
                <div className="relative mx-2 overflow-hidden">
                  {article.decodedImage && (
                    <img
                      src={`data:image/jpeg;base64,${article.decodedImage}`}
                      alt={`Image ${article.filename}`}
                      className="object-cover "
                    />
                  )}
                  <div className="absolute bottom-0 left-0 bg-[#029fb2] text-white p-1">
                    <h1 className="font-semibold text-[10px] uppercase">
                      {article.engCategories && article.engCategories[0]}
                      {/* {item.tag} */}
                    </h1>
                  </div>
                </div>

                <div className="bg-white p-2">
                  <h1 className=" hover:text-[#c80000] text-sm text-justify font-bold ">
                    {article.engHeading}
                    {/* {item.link} */}
                  </h1>
                  <p className="text-xs mt-2 italic text-gray-500">
                    {`${article.author} - ${article.formattedDate}`}
                    {/* {item.date} */}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="py-[2%] px-[4%] md:px-0 md:-mt-[7%] w-full md:w-[55%] ">
          <h1 className="text-[90px] text-[#f3f3f3] uppercase font-[700]">
            latest
          </h1>
          <h1 className="text-[24px] text-[#c80000]  font-[900] pl-4 -mt-[15%] md:-mt-[8%]  text-xl">
            News From Mauritius
          </h1>
          {articles.map((article) => (
            <div className="flex gap-5 space-y-5">
              <Link
                to={`/${article._id}`}
                key={article._id}
                className="relative pt-10 w-full h-full"
              >
                {article.decodedImage && (
                  <img
                    src={`data:image/jpeg;base64,${article.decodedImage}`}
                    alt={`Image ${article.filename}`}
                    className="w-full h-20 md:h-52  object-cover"
                  />
                )}
                <div className="absolute text-[10px] bottom-0 left-0 uppercase bg-[#029fb2] text-white p-1 ">
                  <h1 className="font-semibold  uppercase">
                    {" "}
                    {article.engCategories && article.engCategories[0]}
                  </h1>
                </div>
              </Link>

              <div className="border-t-[1px] p-2 ">
                <p className="font-bold md:text-xl text-sm text-justify hover:text-[#C80000]">
                  {article.engHeading}
                </p>
                <span className="text-xs mt-2 italic text-gray-500">
                  {`${article.author} - ${article.formattedDate}`}
                </span>
                <p className="text-gray-500 text-justify md:block hidden">
                  {article.engContent[0]}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="py-[2%] border-[1px] border-gray-100 px-2  md:w-[25%] ">
          <h1 className="text-[24px] px-2 text-[#c80000]  font-[900]">
            Society
          </h1>
          <div className="grid grid-cols-1  rounded-lg">
            {articles.map((article) => (
              <div
                key={article._id}
                className=" py-4 px-2 gap-3 flex justify-between"
              >
                <div className="bg-white ">
                  <Link
                    to={`/${article._id}`}
                    className="text-black hover:text-[#c80000]  font-bold "
                  >
                    <p className=" mt-2 font-bold text-sm text-justify  hover:text-[#C80000]">
                      {article.engHeading}{" "}
                    </p>
                    <p className="text-xs mt-2 italic font-normal text-gray-500">
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
      </div>
    </div>
  );
};

export default Sidebar;

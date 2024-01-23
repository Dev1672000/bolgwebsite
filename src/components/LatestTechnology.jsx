import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const LatestTechnology = () => {
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
  const fetchArticlesEntertainmentStories = async () => {
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

      setArticlesEntnmntStories(articlesWithFormattedDate);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    fetchArticles();
    fetchArticlesEntertainmentStories();
  }, [currentPage]);

  const Img = [
    {
      img: `news1.webp`,
      tag: "Tonde",
      date: "January 16, 2024",
      link: "Le Pape François Accepte La Résistance À La Bénédiction Des Couples De Même Sexe Mais Déclare Que “Le Seigneur Bénit Tout Le Monde”",
    },
    {
      img: "news1.webp",
      tag: "Tonde",
      date: "January 16, 2024",
      link: "L’ONU Retirera Sa Mission De Paix Au Congo D’ici La Fin Décembre",
    },
    {
      img: "news1.webp",
      tag: "Tonde",
      date: "January 16, 2024",
      link: "Le Roi Frederik X Du Danemark Monte Sur Le Trône Après L’abdication De La Reine",
    },
    {
      img: "news1.webp",
      date: "January 16, 2024",
      tag: "Tonde",
      link: "Les Maldives Demandent À L’inde De Retirer Ses Troupes D’ici Au 15 Mars",
    },
  ];
  const Img2 = [
    {
      img: "news1.webp",
      link: "Pas De Classes Ce Mercredi, Les Crèches Seront Ouvertes",
      date: "January 17, 2024",
    },
    {
      img: "news1.webp",
      link: "A Melrose : Un Condamné Meurt Par Asphyxia Dans Sa Cellule",
      date: "January 17, 2024",
    },
    {
      img: "news1.webp",
      link: "Belal A Fait Une Deuxième Victime",
      date: "January 17, 2024",
    },
    {
      img: "news1.webp",
      date: "January 17, 2024",
      link: " Emporté Par Les Flots, Un Motocycliste Meurt Sur L’autoroute De Pailles Le Lundi Matin Du 15 Janvier",
    },
    {
      img: "news1.webp",
      date: "January 17, 2024",
      link: "Le Premier Ministre Jugnauth Honore La Nouvelle Centenaire Mme Rookmabaye Kistnah",
    },
  ];
  return (
    <div className="2xl:mx-auto 2xl:container my-[5%] gap-7 mx-3 ">
      <div className="2xl:mx-auto flex md:flex-row flex-col 2xl:container  gap-7 lg:px-10 px-0">
        <div className="py-[2%] border-[1px] border-gray-100 px-2  md:w-[20%] ">
          <h1 className="text-[24px] mx-2 text-[#c80000]  font-[900] mb-5">
            Lifestyle
          </h1>
          {articles.map((article) => (
            <Link to={`/news/${article._id}`} key={article._id}>
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

                <div className="bg-white p-4">
                  <h1 className=" hover:text-[#c80000]  font-bold ">
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
        <div className="py-[2%] -mt-[7%] md:w-[55%] ">
          <h1 className="text-[90px] text-[#f3f3f3] uppercase font-[700]">
            latest
          </h1>
          <h1 className="text-[24px] text-[#c80000]  font-[900] pl-4 -mt-16 md:-mt-[8%]  text-xl">
            Entertainment Stories
          </h1>{" "}
          {articlesEntnmntStories.map((article) => (
            <div
              to={`/news/${article._id}`}
              key={article._id}
              className=" gap-5 space-y-5"
            >
              <div className="relative pt-10 w-full h-full">
                {article.decodedImage && (
                  <img
                    src={`data:image/jpeg;base64,${article.decodedImage}`}
                    alt={`Image ${article.filename}`}
                    className="w-full h-[40%] object-cover"
                  />
                )}
                <div className="absolute text-[10px] bottom-0 left-0 uppercase bg-[#029fb2] text-white p-1 ">
                  <h1 className="font-semibold  uppercase">
                    {" "}
                    {article.engCategories && article.engCategories[0]}
                  </h1>
                </div>
              </div>

              <div className=" p-2">
                <p className="font-bold md:text-xl">{article.engHeading}</p>
                <span className="text-[14px] italic">
                  {`${article.author} - ${article.formattedDate}`}
                </span>
                <p className="text-gray-500">{article.engContent[0]}</p>
              </div>
            </div>
          ))}
          {articles.map((article) => (
            <div
              to={`/news/${article._id}`}
              key={article._id}
              className="flex gap-5 space-y-5"
            >
              <div className="relative pt-10 w-full h-full">
                {article.decodedImage && (
                  <img
                    src={`data:image/jpeg;base64,${article.decodedImage}`}
                    alt={`Image ${article.filename}`}
                    className="w-full h-28 md:h-52 object-cover"
                  />
                )}
                <div className="absolute bottom-0 left-0 bg-[#029fb2] text-white p-1">
                  <h1 className="font-semibold text-[10px] uppercase">
                    {article.engCategories && article.engCategories[0]}
                  </h1>
                </div>
              </div>

              <div className="border-t-[1px] p-2 ">
                <p className="font-bold md:text-xl"> {article.engHeading}</p>
                <span className="text-[14px] italic">
                  {`${article.author} - ${article.formattedDate}`}
                </span>
                <p className="text-gray-500 md:block hidden ">
                  {article.engContent[0]}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className=" space-y-9 border-gray-100    md:w-[25%] ">
          <div className="border-[1px] p-3">
            <h1 className="text-[24px]  text-[#c80000]  font-[900]">
              Technology
            </h1>
            <div className="grid grid-cols-1  rounded-lg">
              {articles.map((article) => (
                <div
                  key={article._id}
                  className=" py-4 px-2 gap-3 flex justify-between"
                >
                  <div className="bg-white ">
                    <p className="uppercase text-gray-500">
                      {" "}
                      {article.engCategories && article.engCategories[0]}
                    </p>
                    <Link
                      to={`/news/${article._id}`}
                      className="text-black hover:text-[#c80000]  font-bold text-justify"
                    >
                      {article.engHeading}
                    </Link>
                    <p className=" mt-2 font-bold italic "></p>
                    <p className="text-xs mt-2 italic text-gray-500">
                      {`${article.author} - ${article.formattedDate}`}
                    </p>
                  </div>{" "}
                  {article.decodedImage && (
                    <img
                      src={`data:image/jpeg;base64,${article.decodedImage}`}
                      alt={`Image ${article.filename}`}
                      className="object-cover w-20 "
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="border-[1px] p-3">
            <h1 className="text-[24px]  text-[#c80000]  font-[900]">
              Environment
            </h1>
            <div className="grid grid-cols-1  rounded-lg">
              {articles.map((article) => (
                <div
                  key={article._id}
                  className=" py-4 px-2 gap-3 flex justify-between"
                >
                  <div className="bg-white ">
                    <p className="uppercase text-gray-500">
                      {" "}
                      {article.engCategories && article.engCategories[0]}
                    </p>
                    <Link
                      to={`/news/${article._id}`}
                      className="text-black hover:text-[#c80000]  font-bold text-justify"
                    >
                      {article.engHeading}
                    </Link>
                    <p className=" mt-2 font-bold italic "></p>
                    <p className="text-xs mt-2 italic text-gray-500">
                      {`${article.author} - ${article.formattedDate}`}
                    </p>
                  </div>{" "}
                  {article.decodedImage && (
                    <img
                      src={`data:image/jpeg;base64,${article.decodedImage}`}
                      alt={`Image ${article.filename}`}
                      className="object-cover w-20 "
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

export default LatestTechnology;

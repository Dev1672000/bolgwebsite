import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const LocalNews = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);

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

      const imageIds = articlesResponse.data.map(
        (article) => article.images[0]
      );

      if (imageIds.length === 0) {
        setArticles([]);
        return;
      }

      const imagesResponse = await axios.get(
        `${process.env.REACT_APP_API_URL}/getImage`,
        {
          params: {
            imageID: articles.images[0],
          },
        }
      );

      const imagesMap = imagesResponse.data.reduce((map, image) => {
        map[image.imageID] = image.imageBase64;
        return map;
      }, {});

      const articlesWithFormattedDate = articlesResponse.data.map((article) => {
        const decodedImage = imagesMap[article.images[0]];

        // Format the publication date
        const options = { year: "numeric", month: "long", day: "numeric" };
        const date = new Date(article.publicationDate);
        const formattedDate = date.toLocaleDateString("en-US", options);

        return {
          ...article,
          decodedImage,
          formattedDate: `${formattedDate}`,
        };
      });

      setArticles(articlesWithFormattedDate);
      setError(null);
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

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="container mx-auto p-4">
      {error && (
        <div className="text-red-500">
          <p>{error}</p>
        </div>
      )}

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link to={`/news/${article._id}`} key={article._id}>
            <div className="border p-4 cursor-pointer">
              {/* Displaying image with ngCategories */}
              <div className="relative mb-2">
                {article.decodedImage && (
                  <img
                    src={`data:image/jpeg;base64,${article.decodedImage}`}
                    alt={`Image ${article.filename}`}
                    className="w-full h-40 object-cover"
                  />
                )}
                <span className="absolute top-0 right-0 bg-gray-800 text-white p-2">
                  {article.engCategories && article.engCategories[0]}
                </span>
              </div>

              {/* Displaying author and publication date */}
              <p className="text-gray-600">
                {`${article.author} - ${article.formattedDate}`}
              </p>

              {/* Displaying engHeading */}
              <h3 className="text-lg font-semibold mt-2">
                {article.engHeading}
              </h3>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="flex items-center px-4 py-2 bg-blue-500 text-white disabled:opacity-50"
        >
          <FaArrowLeft className="mr-2" /> Prev
        </button>
        <button
          onClick={handleNextPage}
          className="flex items-center px-4 py-2 bg-blue-500 text-white"
        >
          Next <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default LocalNews;

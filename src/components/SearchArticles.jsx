import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
const SearchArticles = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchPopup, setShowSearchPopup] = useState(false);

  const searchInputRef = useRef(null);
 const [currentPage, setCurrentPage] = useState(1);
  const fetchArticles = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/getSearchKeywordArticles`,
        {
          params: {
            language: "english",
            numOfArticles: 10,
            searchWord: searchQuery,
          },
        }
      );

      const articlesWithFormattedDate = await Promise.all(
        response.data.map(async (article) => {
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
      if (Array.isArray(response.data)) {
        setArticles(response.data);
        setError(null);
      } else {
        setArticles([]);
        setError("Invalid response format. Try again later.");
      }
    } catch (error) {
      console.error("Error fetching articles:", error);
      setArticles([]);
      setError("Error fetching articles. Try again later.");
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim() !== "") {
      fetchArticles();
      setShowSearchPopup(true);
    } else {
      setArticles([]);
      setShowSearchPopup(false);
    }
  };

  const handleSearchIconClick = () => {
    setShowSearchPopup(true);
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    if (showSearchPopup && searchQuery.trim() !== "") {
      fetchArticles();
    }
  }, [searchQuery, showSearchPopup]);

  return (
    <div>
      <div className="flex items-center">
        <span onClick={handleSearchIconClick}>
          <BsSearch />
        </span>
      </div>
      {showSearchPopup && (
        <div className="search-popup absolute z-30 w-[50%] right-10 bg-white shadow-md p-5">
          <form
            onSubmit={handleFormSubmit}
            className="flex justify-center items-center"
          >
            <input
              type="text"
              className="bg-gray-100 p-2 focus:border-none focus:outline-none"
              ref={searchInputRef}
              value={searchQuery}
              onChange={handleSearchInputChange}
            />

            <button
              className="text-white bg-[#c80000] px-3 py-2"
              type="button"
              onClick={handleFormSubmit}
            >
              Search
            </button>
          </form>
          <div>
            {error && <p>{error}</p>}
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
                      <p className=" mt-2 font-bold italic ">
                        {article.engHeading}{" "}
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
      )}
    </div>
  );
};

export default SearchArticles;

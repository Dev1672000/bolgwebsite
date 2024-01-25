import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { BsSearch } from "react-icons/bs";

const SearchArticles = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchPopup, setShowSearchPopup] = useState(false);

  const searchInputRef = useRef(null);

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
        <div className="search-popup absolute z-30 w-96 right-10 bg-white shadow-md p-5">
          <form
            onSubmit={handleFormSubmit}
            className="flex justify-center items-center"
          >
            <input
              type="text"
              className="bg-gray-100 p-2"
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
            {articles.length > 0 ? (
              articles.map((article) => (
                <div key={article._id}>
                  <h3>{article.engHeading}</h3>
                </div>
              ))
            ) : ""}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchArticles;

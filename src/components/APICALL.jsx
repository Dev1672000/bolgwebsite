import React, { useState, useEffect } from "react";
import axios from "axios";

const YourComponent = () => {
  // State to store the fetched data
  const [latestArticles, setLatestArticles] = useState([]);
  // State to track loading state
  const [isLoading, setIsLoading] = useState(true);
  // State to track error
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch data using Axios
    const fetchData = async () => {
      try {
        // Update loading state to true while fetching
        setIsLoading(true);

        // Make GET request using Axios
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/getLatestArticles`,
          {
            params: {
              language: "english",
              numOfArticles: 10,
              skippedArticles: 0,
            },
          }
        );

        // Update state with fetched data
        setLatestArticles(response.data);

        // Update loading state to false after successful fetch
        setIsLoading(false);
      } catch (error) {
        // Handle errors
        setError(error);
        // Update loading state to false on error
        setIsLoading(false);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className="container mx-auto p-4">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div>
          <h1 className="text-2xl font-bold mb-4">Latest Articles</h1>
          <ul>
            {latestArticles.map((article) => (
              <li key={article.id} className="mb-2">
                {article.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default YourComponent;

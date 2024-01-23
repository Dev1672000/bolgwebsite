
import React, { useState, useEffect } from "react";
import axios from "axios";

const LocalNewsDetailed = ({ match }) => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/getArticle/${match.params.id}`
        );
        console.log(response.data);
        setArticle(response.data);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    fetchArticle();
  }, [match.params.id]);

  return (
    <div className="container mx-auto p-4">
      {article && (
        <div>
          <h2 className="text-xl font-bold mb-2">{article.engTags[0]}</h2>
          {/* Display other details similar to the grid item */}
          <div className="border p-4">
            {/* Displaying image with ngCategories */}
            <div className="relative mb-2">
              <img
                src={`https://example.com/images/${article.images[0]}`}
                alt={`Image ${article.images[0]}`}
                className="w-full h-40 object-cover"
              />
              <span className="absolute top-0 right-0 bg-gray-800 text-white p-2">
                {article.engCategories[0]}
              </span>
            </div>

            {/* Displaying author and publication date */}
            <p className="text-gray-600">
              {article.author} - {article.publicationDate}
            </p>

            {/* Displaying engHeading */}
            <h3 className="text-lg font-semibold mt-2">{article.engHeading}</h3>

            {/* Displaying engContent in a list */}
            <ul className="list-disc mt-4">
              {article.engContent.map((content, index) => (
                <li key={index}>{content}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocalNewsDetailed;



// ArticleDetail.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchArticles } from "../store/articlesSlice";

const ArticleDetail = () => {
  const { articleId } = useParams();
  const dispatch = useDispatch();
  const article = useSelector((state) =>
    state.articles.data.find((a) => a._id === articleId)
  );
console.log("nb", articleId);
  useEffect(() => {
    // If the article is not present in the state, fetch it
    if (!article) {
      dispatch(fetchArticles());
    }
  }, [dispatch, article]);

  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{article.engHeading}</h2>
      {/* Display other details of the article */}
      <p>{article.author}</p>
      <p>{article.formattedDate}</p>
      {/* Add other details as needed */}
    </div>
  );
};

export default ArticleDetail;

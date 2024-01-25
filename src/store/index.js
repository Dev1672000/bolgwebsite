// store/index.js
import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./articlesSlice";

const store = configureStore({
  reducer: {
    articles: articlesReducer,
    // other reducers if any
  },
});

export default store;
export { fetchArticles } from "./articlesSlice"; // Export any other necessary items

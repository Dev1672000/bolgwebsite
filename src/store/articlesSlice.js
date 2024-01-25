// articlesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async (currentPage) => {
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

      return articlesWithFormattedDate;
    } catch (error) {
      console.error("Error fetching articles:", error);
      throw error;
    }
  }
);
export const fetchArticleById = createAsyncThunk(
  "articles/fetchArticleById",
  async (articleId) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/getArticleById/${articleId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching article by ID:", error);
      throw error;
    }
  }
);
const articlesSlice = createSlice({
  name: "articles",
  initialState: { data: [], details: null, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.data = [];
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.data = [];
        state.error = action.error.message;
      })
      .addCase(fetchArticleById.pending, (state) => {
        state.details = null;
        state.error = null;
      })
      .addCase(fetchArticleById.fulfilled, (state, action) => {
        state.details = action.payload;
        state.error = null;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.details = null;
        state.error = action.error.message;
      });
  },
});

export default articlesSlice.reducer;

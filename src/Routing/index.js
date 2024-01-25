import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBarComponents from "../components/NavBarComponents";
import HomeMain from "../pages/HomePage";
// import HomeMain from "../components/HomeMain";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import ArticleDetail from "../components/ArticleDetail";
import LocalNews from "../pages/LocalNews/LocalNews";
import CategorySports from "../pages/Category/index";
import ShowDetailedArticle from "../pages/ShowDetailedArticles/index";
import API from "../components/Apis";
const Index = () => {
  return (
    <div>
      {/* <API/> */}
      <ScrollToTop />
      <NavBarComponents />
      <Routes>
        <Route exact path="/" element={<HomeMain />} />
        {/* <Route path="/" element={<LocalNews />} /> */}
        {/* <Route path="/news/:articleId" element={<LocalNews />} /> */}
        <Route path="/news/:articleId" element={<ArticleDetail />} />
        {/* <Route path="/" element={<ShowDetailedArticle />} /> */}
        {/* <Route path="/news/:articleId" element={<CategorySports />} /> */}
        {/* <ShowDetailedArticle /> */}
        {/* <CategorySports/> */}
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default Index;

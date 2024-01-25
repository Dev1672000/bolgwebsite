import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarComponents from "./components/NavBarComponents";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LandingPage from "./pages/HomePage";
import ShowDetailedArticle from "./pages/ShowDetailedArticles";
import CategorySports from "./pages/Category";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBarComponents />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:articleId" element={<ShowDetailedArticle />} />
        {/* <Route path="news/:articleId" element={<ShowDetailedArticle />} /> */}
        {/* <Route path="/Category/:articleId" element={<CategorySports />} /> */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

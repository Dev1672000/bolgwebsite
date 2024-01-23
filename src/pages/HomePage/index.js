import React from "react";
import Sidebar from "../../components/Sidebar";
import LatestStories from "../../components/LatestStories";
import HomeMain from "./HomeMain";
import NavBarComponents from "./NavBarComponents";
import Sports from "../../components/Sports";
import LatestTechnology from "../../components/LatestTechnology";
import LatestVideos from "../../components/LatestVideos";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import LocalNews from '../../pages/LocalNews';
const Index = () => {
  return (
    <div className="overflow-hidden">
      {/* <LocalNews /> */}
      <NavBarComponents />
      <HomeMain />
      <Sidebar />

      <Sports />
      <LatestTechnology />
      <ScrollToTop />
      <LatestVideos />
      <LatestStories />
      <Footer />
    </div>
  );
};

export default Index;

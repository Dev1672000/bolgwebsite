import React from 'react'
import Sidebar from '../../components/Sidebar'
import LatestStories from "../../components/LatestStories";
import HomeMain from './HomeMain'
import NavBarComponents from './NavBarComponents'
import Sports from '../../components/Sports'
import BreakingNews from '../../components/BreakingNews'
import Technology from '../../components/LatestTechnology'
import LatestVideos from '../../components/LatestVideos';
import Footer from "../../components/Footer"
import ScrollToTop from '../../components/ScrollToTop';
const Index = () => {
  return (
    <div className="overflow-hidden">
      <NavBarComponents />
      
      <HomeMain />
      <Sidebar />
      <Sports />
      <Technology />
      <ScrollToTop/>
      {/* <LatestVideos/> */}
      <LatestStories />
      <Footer/>
    </div>
  );
}

export default Index
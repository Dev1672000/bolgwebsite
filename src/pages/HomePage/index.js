import React from 'react'
import Sidebar from '../../components/Sidebar'
import LatestStories from "../../components/LatestStories";
import HomeMain from './HomeMain'
import NavBarComponents from './NavBarComponents'
import Sports from '../../components/Sports'
import BreakingNews from '../../components/BreakingNews'
import Technology from '../../components/Technology'
import LatestVideos from '../../components/LatestVideos';

const Index = () => {
  return (
    <div className="">
      <NavBarComponents />
      
      <HomeMain />
      <Sidebar />
      <Sports />
      <Technology />
      {/* <LatestVideos/> */}
      <LatestStories />
    </div>
  );
}

export default Index
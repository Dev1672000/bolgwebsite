import Sidebar from "../../components/Sidebar";
import LatestStories from "../../components/LatestStories";
import HomeMain from "../../components/HomeMain";
import Sports from "../../components/Sports";
import LatestTechnology from "../../components/LatestTechnology";
import LatestVideos from "../../components/LatestVideos";
import BreakingNews from "../../components/BreakingNews";
import CategorySports from "../Category/CategorySports";
import ShowDetailedArticle from "../ShowDetailedArticles";
const Index = () => {
  return (
    <div className="overflow-hidden pt-[18%] md:pt-0">
      {/* <ShowDetailedArticle /> */}
      {/* <CategorySports /> */}
      <BreakingNews />
      <HomeMain />
      <Sidebar />
      <Sports />
      <LatestTechnology />
      <LatestVideos />
      <LatestStories />
    </div>
  );
};

export default Index;

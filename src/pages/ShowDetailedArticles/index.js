import React from 'react'
import LatestNews from '../Category/LatestNews'
import DetailedArticles from './DetailedArticles'
import LocalNewsDetailed from "../LocalNews/LocalNewsDetailed"

const Index = () => {
  return (
    <div className="mx-[5%] flex my-5 gap-10">
      <div className="w-[70%]">
        <DetailedArticles />
      </div>
      <div className="w-[25%]">
        <LatestNews />
      </div>
    </div>
  );
}

export default Index
import React from 'react'
import LatestNews from '../Category/LatestNews'
import DetailedArticles from './DetailedArticles'
import LocalNewsDetailed from "../LocalNews/LocalNewsDetailed"

const Index = () => {
  return (
    <div className="mx-[5%] pt-[20%] md:pt-0 md:flex my-5 gap-10">
      <div className="md:w-[70%]">
        <DetailedArticles />
      </div>
      <div className="md:w-[25%]">
        <LatestNews />
      </div>
    </div>
  );
}

export default Index
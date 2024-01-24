import React from 'react'
import CategorySports from './CategorySports'
import LatestNews from './LatestNews'

const Index = () => {
  return (
    <div className="mx-[9%]">
      <div className="text-center text-[#757575] font-semibold my-[3%] mx-[15%] ">
        <h5 className="uppercase text-[12px] font-bold">CATEGORY</h5>
        <h1 className="text-black text-5xl mb-3 ">Sports</h1>
        <p className="italic">
          Read about the latest sports news from all over the world. Follow us
          to know about match schedules, teams, players and much more from the
          world of sports.
        </p>
      </div>
      <div className="flex justify-center gap-10">
        <div className='w-[70%]'>
          {" "}
          <CategorySports />
        </div>
        <div className='w-[25%]'>
          {" "}
          <LatestNews />
        </div>
      </div>
    </div>
  );
}

export default Index
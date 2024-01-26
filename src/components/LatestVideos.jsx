import React, { useState } from "react";

const LatestVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState("yuSJbpXfv1I");

  const handleVideoClick = (videoId) => {
    setSelectedVideo(videoId);
  };

  return (
    <div className="md:mx-[11.5%] mx-5">
      <div className=" my-[5%] ">
        <h1 className="text-[90px] text-[#f3f3f3] uppercase font-[700]">
          latest
        </h1>
        <h1 className="text-[24px] text-[#c80000]  font-[900] pl-4 -mt-[14%] md:-mt-[4.5%]  text-xl">
          Videos
        </h1>
      </div>
      <div className=" mx-5  md:flex justify-center items-center">
        <div className="md:w-[70%] h-96">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            muted
          />
        </div>
        <div className="md:w-[30%] h-96 overflow-hidden">
          <ul className="bg-black h-full w-full  px-5 text-sm  space-y-4 text-white list-decimal p-3">
            <li onClick={() => handleVideoClick("yuSJbpXfv1I")}>
              Rising waters submerge cars and cause traffic jam on the M1
              freeway in Port
            </li>
            <li onClick={() => handleVideoClick("yuSJbpXfv1I")}>
              Rising waters submerge cars and cause traffic jam on the M1
              freeway in Port
            </li>
            <li onClick={() => handleVideoClick("yuSJbpXfv1I")}>
              Rising waters submerge cars and cause traffic jam on the M1
              freeway in Port
            </li>
            <li onClick={() => handleVideoClick("yuSJbpXfv1I")}>
              Rising waters submerge cars and cause traffic jam on the M1
              freeway in Port
            </li>
            <li onClick={() => handleVideoClick("yuSJbpXfv1I")}>
              Rising waters submerge cars and cause traffic jam on the M1
              freeway in Port
            </li>
            <li onClick={() => handleVideoClick("sZwz5bcq_UA")}>
              PM Jugnauth speaks on Cyclone Belal at the National Disaster Risk
              Reduction and Management Centre
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LatestVideos;

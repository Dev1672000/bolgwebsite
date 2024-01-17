import React, { useState } from "react";

const Lastest = () => {
  const [itemsToShow, setItemsToShow] = useState(10);

  const loadMoreItems = () => {
    setItemsToShow(itemsToShow + 10);
  };
  const data = [
    {
      title: "locale",
      date: "Staff - January 17, 2024",
      description:
        "Le Premier Ministre Visite Plusieurs Régions Pour Evaluer Les Dégâts Causés Par Le Cyclone Belal Et Les Pluies Torrentielles",
      imageUrl: "news1.webp",
    },
    {
      title: "locale",
      date: "Staff - January 17, 2024",
      description:
        "Le Premier Ministre Visite Plusieurs Régions Pour Evaluer Les Dégâts Causés Par Le Cyclone Belal Et Les Pluies Torrentielles",
      imageUrl: "news1.webp",
    },
    {
      title: "locale",
      date: "Staff - January 17, 2024",
      description:
        "Le Premier Ministre Visite Plusieurs Régions Pour Evaluer Les Dégâts Causés Par Le Cyclone Belal Et Les Pluies Torrentielles",
      imageUrl: "news1.webp",
    },
    {
      title: "locale",
      date: "Staff - January 17, 2024",
      description:
        "Le Premier Ministre Visite Plusieurs Régions Pour Evaluer Les Dégâts Causés Par Le Cyclone Belal Et Les Pluies Torrentielles",
      imageUrl: "news1.webp",
    },
    {
      title: "locale",
      date: "Staff - January 17, 2024",
      description:
        "Le Premier Ministre Visite Plusieurs Régions Pour Evaluer Les Dégâts Causés Par Le Cyclone Belal Et Les Pluies Torrentielles",
      imageUrl: "news1.webp",
    },
    {
      title: "locale",
      date: "Staff - January 17, 2024",
      description:
        "Le Premier Ministre Visite Plusieurs Régions Pour Evaluer Les Dégâts Causés Par Le Cyclone Belal Et Les Pluies Torrentielles",
      imageUrl: "news1.webp",
    },
  ];
  
  
  return (
    <div>
      <h4 className="">
        <span className="text-red-600 font-bold">Nouvelles</span>
        <div className="text-5xl text-gray-100 uppercase font-bold">Latest</div>
      </h4>
      <div className="md:px-16 pb-12 px-4 container mx-auto">
        <div className="md:mb-12 px-0 grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.map((item, index) => (
            <div>
              <div key={index} className="relative  pt-10 w-full">
                <img
                  className="w-full h-56 object-cover"
                  src={item.imageUrl}
                  alt={item.title}
                />
                <div className="absolute bottom-0 left-0 bg-[#029fb2] text-white p-2">
                  <h1 className="font-semibold text-sm uppercase">
                    {" "}
                    {item.title}
                  </h1>
                </div>
              </div>
              <h1 className="text-gray-600 pl-2 font-semibold text-sm mt-3">
                {item.description}
              </h1>
              <p className="text-gray-600 pl-2  text-sm mt-3">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lastest;

import React from 'react'
import Image from "../assests"
const Sports = () => {
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
    
   ];
  return (
    <div className="mx-5">
      <div className="bg-[#029fb2] text-white  p-16">
        <h1 className="text-6xl font-bold">World Of Sports</h1>
        <p>
          Everything you need to know about the latest happenings from the world
          of sports.
        </p>
      </div>
      <div className="flex gap-5">
        <div className="w-[40%]  ">
          <div>
            <div className="relative z-10 -mt-9 w-full h-full">
              <img
                src={Image.samuel}
                alt="fingerprint recognition"
                className="w-[90%] h-[500px] mx-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-blue-500 text-white ml-7 p-1">
                <h1 className="font-semibold text-sm uppercase">Education</h1>
              </div>
            </div>

            <h1 className="pl-7  font-bold text-3xl mt-3">
              Cycling : African Track
            </h1>
            <h1 className=" pl-7 font-bold text-3xl ">
              Championships : Samuel Dupuy Rolls On Gold
            </h1>
            <p className="text-gray-600 pl-7  text-sm mt-3">
              Staff -January 18, 2024
            </p>
          </div>
        </div>
        <div className="w-[60%] mt-5">
          <div className="md:mb-12 px-0 grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.map((item, index) => (
              <div>
                <div key={index} className="relative   w-full">
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
    </div>
  );
}

export default Sports
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Images from "../assests";
const Sidebar = () => {
  const [itemsToShow, setItemsToShow] = useState(10);

  const loadMoreItems = () => {
    setItemsToShow(itemsToShow + 10);
  };
  const Img = [
    {
      img: `news1.webp`,
      tag: "Tonde",
      date: "January 16, 2024",
      link: "Le Pape François Accepte La Résistance À La Bénédiction Des Couples De Même Sexe Mais Déclare Que “Le Seigneur Bénit Tout Le Monde”",
    },
    {
      img: "news1.webp",
      tag: "Tonde",
      date: "January 16, 2024",
      link: "L’ONU Retirera Sa Mission De Paix Au Congo D’ici La Fin Décembre",
    },
    {
      img: "news1.webp",
      tag: "Tonde",
      date: "January 16, 2024",
      link: "Le Roi Frederik X Du Danemark Monte Sur Le Trône Après L’abdication De La Reine",
    },
    {
      img: "news1.webp",
      date: "January 16, 2024",
      tag: "Tonde",
      link: "Les Maldives Demandent À L’inde De Retirer Ses Troupes D’ici Au 15 Mars",
    },
  ];

  const Img2 = [
    {
      img: "news1.webp",
      link: "Pas De Classes Ce Mercredi, Les Crèches Seront Ouvertes",
      date: "January 17, 2024",
    },
    {
      img: "news1.webp",
      link: "A Melrose : Un Condamné Meurt Par Asphyxia Dans Sa Cellule",
      date: "January 17, 2024",
    },
    {
      img: "news1.webp",
      link: "Belal A Fait Une Deuxième Victime",
      date: "January 17, 2024",
    },
    {
      img: "news1.webp",
      date: "January 17, 2024",
      link: " Emporté Par Les Flots, Un Motocycliste Meurt Sur L’autoroute De Pailles Le Lundi Matin Du 15 Janvier",
    },
    {
      img: "news1.webp",
      date: "January 17, 2024",
      link: "Le Premier Ministre Jugnauth Honore La Nouvelle Centenaire Mme Rookmabaye Kistnah",
    },
  ];
  return (
    <div className="2xl:mx-auto 2xl:container  gap-7 ">
      <div className="2xl:mx-auto flex md:flex-row flex-col 2xl:container  gap-7 lg:px-10 px-0">
        <div className="py-[2%] border-[2px] border-gray-100 px-2  md:w-[20%] ">
          <h1 className="text-3xl text-red-600  font-bold mb-5">Global News</h1>
          {Img.slice(0, itemsToShow).map((item, i) => {
            return (
              <div key={i}>
                <div className="relative mx-2 overflow-hidden">
                  <img src={item.img} alt="" className="object-cover " />
                  <div className="absolute bottom-0 left-0 bg-[#029fb2] text-white p-1">
                    <h1 className="font-semibold text-xs uppercase">
                      {item.tag}
                    </h1>
                  </div>
                </div>

                <div className="bg-white p-4">
                  <Link
                    to="/Sports/Description"
                    className=" hover:text-red-800  font-medium text-justify"
                  >
                    {item.link}
                  </Link>
                  <p className="text-xs mt-2 italic text-gray-500">
                    {item.date}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="py-[2%]  md:w-[55%] ">
          <h1 className="text-red-600 font-bold text-xl">
            Nouvelles De L'île Maurice
          </h1>
          <div className="flex gap-5 space-y-5">
            <div className="relative pt-10 w-full h-full">
              <img
                src={Images.News1}
                alt="fingerprint recognition"
                className="w-full h-52 object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-blue-500 text-white p-2">
                <h1 className="font-semibold text-sm uppercase">Education</h1>
              </div>
            </div>

            <div className="border-t-[1px] p-2 border-b-[1px]">
              <p className="font-bold text-xl">
                Le Premier Ministre Visite Plusieurs Régions Pour Evaluer Les
                Dégâts Causés Par Le Cyclone Belal Et Les Pluies Torrentielles
              </p>
              <span className="text-[14px] italic">
                Staff - January 17, 2024
              </span>
              <p className="text-gray-500">
                Le cyclone Belal a laissé des traces dans le pays et hier matin,
                alors que les alertes cycloniques ont été levées par les
                services...
              </p>
            </div>
          </div>{" "}
          <div className="flex gap-5 space-y-5">
            <div className="relative pt-10 w-full h-full">
              <img
                src={Images.News1}
                alt="fingerprint recognition"
                className="w-full h-52 object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-blue-500 text-white p-2">
                <h1 className="font-semibold text-sm uppercase">Education</h1>
              </div>
            </div>

            <div className="border-t-[1px] p-2 border-b-[1px]">
              <p className="font-bold text-xl">
                Le Premier Ministre Visite Plusieurs Régions Pour Evaluer Les
                Dégâts Causés Par Le Cyclone Belal Et Les Pluies Torrentielles
              </p>
              <span className="text-[14px] italic">
                Staff - January 17, 2024
              </span>
              <p className="text-gray-500">
                Le cyclone Belal a laissé des traces dans le pays et hier matin,
                alors que les alertes cycloniques ont été levées par les
                services...
              </p>
            </div>
          </div>{" "}
          <div className="flex gap-5 space-y-5">
            <div className="relative pt-10 w-full h-full">
              <img
                src={Images.News1}
                alt="fingerprint recognition"
                className="w-full h-52 object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-blue-500 text-white p-2">
                <h1 className="font-semibold text-sm uppercase">Education</h1>
              </div>
            </div>

            <div className="border-t-[1px] p-2 border-b-[1px]">
              <p className="font-bold text-xl">
                Le Premier Ministre Visite Plusieurs Régions Pour Evaluer Les
                Dégâts Causés Par Le Cyclone Belal Et Les Pluies Torrentielles
              </p>
              <span className="text-[14px] italic">
                Staff - January 17, 2024
              </span>
              <p className="text-gray-500">
                Le cyclone Belal a laissé des traces dans le pays et hier matin,
                alors que les alertes cycloniques ont été levées par les
                services...
              </p>
            </div>
          </div>{" "}
          <div className="flex gap-5 space-y-5">
            <div className="relative pt-10 w-full h-full">
              <img
                src={Images.News1}
                alt="fingerprint recognition"
                className="w-full h-52 object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-blue-500 text-white p-2">
                <h1 className="font-semibold text-sm uppercase">Education</h1>
              </div>
            </div>

            <div className="border-t-[1px] p-2 border-b-[1px]">
              <p className="font-bold text-xl">
                Le Premier Ministre Visite Plusieurs Régions Pour Evaluer Les
                Dégâts Causés Par Le Cyclone Belal Et Les Pluies Torrentielles
              </p>
              <span className="text-[14px] italic">
                Staff - January 17, 2024
              </span>
              <p className="text-gray-500">
                Le cyclone Belal a laissé des traces dans le pays et hier matin,
                alors que les alertes cycloniques ont été levées par les
                services...
              </p>
            </div>
          </div>
          <div className="flex gap-5 space-y-5">
            <div className="relative pt-10 w-full h-full">
              <img
                src={Images.News1}
                alt="fingerprint recognition"
                className="w-full h-52 object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-blue-500 text-white p-2">
                <h1 className="font-semibold text-sm uppercase">Education</h1>
              </div>
            </div>

            <div className="border-t-[1px] p-2 border-b-[1px]">
              <p className="font-bold text-xl">
                Le Premier Ministre Visite Plusieurs Régions Pour Evaluer Les
                Dégâts Causés Par Le Cyclone Belal Et Les Pluies Torrentielles
              </p>
              <span className="text-[14px] italic">
                Staff - January 17, 2024
              </span>
              <p className="text-gray-500">
                Le cyclone Belal a laissé des traces dans le pays et hier matin,
                alors que les alertes cycloniques ont été levées par les
                services...
              </p>
            </div>
          </div>
        </div>
        <div className="py-[2%] border-[2px] border-gray-100 px-2   md:w-[25%] ">
          <h1 className="text-3xl  font-bold mb-1 text-red-600">Société</h1>
          <div className="grid grid-cols-1  rounded-lg">
            {Img2.slice(0, itemsToShow).map((item, i) => {
              return (
                <div key={i} className=" py-4 px-2 gap-3 flex justify-between">
                  <div className="bg-white ">
                    <p className="uppercase text-gray-500">{item.tag}</p>
                    <Link
                      to="/Sports/Description"
                      className="text-black hover:text-red-500 text-xs font-medium text-justify"
                    >
                      {item.link}
                    </Link>
                    <p className=" mt-2 font-bold italic ">{item.Shares}</p>
                    <p className="text-xs mt-2 italic text-gray-500">
                      {item.date}
                    </p>
                  </div>
                  <img src={item.img} alt="" className="object-cover w-20 " />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
import React from "react";
import Image from "../../assests";
const HomeMain = () => {
  return (
    <div className=" gap-7 lg:px-10 px-6 md:py-5">
      <div className="lg:flex  justify-center">
        <div className="flex flex-col  gap-8 h-full lg:w-[40%]">
          <div>
            <span className="bg-[#029fb2] text-[10px] text-white p-1">
              LOCALE
            </span>
            <p className="text-3xl font-bold">
              Le Premier Ministre Visite Plusieurs Régions Pour Evaluer Les
              Dégâts Causés Par Le Cyclone Belal Et Les Pluies Torrentielles
            </p>
            <span className="italic">Staff -January 17, 2024</span>
          </div>
          <div className="space-y-6 ">
            <img src={Image.News1} alt="fingerprint recognition" className="" />
            <p>
              Le cyclone Belal a laissé des traces dans le pays et hier matin,
              alors que les alertes cycloniques ont été levées par les services
              météorologiques mauriciens, le Premier ministre,...
            </p>
          </div>
        </div>

        <div className="lg:ml-6 lg:mt-0 mt-7  gap-5 lg:w-[25%] w-full flex lg:flex-col sm:flex-row flex-col items-center ">
          <div className="">
            <a href="https://yourlink.com" target="_blank">
              <div className="relative overflow-hidden">
                <img
                  src={Image.News1}
                  alt="fingerprint recognition"
                  className="h-44 w-full"
                />
                <div className="absolute bottom-0 left-0 bg-[#029fb2] text-white p-1">
                  <h1 className="font-semibold text-xs uppercase">Education</h1>
                </div>
              </div>

              <p className="font-bold">
                Pas De Classes Ce Mercredi, Les Crèches Seront Ouvertes
              </p>
              <span className="italic text-[14px]">
                Staff -January 17, 2024
              </span>
            </a>
          </div>
          <div className="">
            <a href="https://yourlink.com" target="_blank">
              <div className="relative overflow-hidden">
                <img
                  src={Image.News1}
                  alt="fingerprint recognition"
                  className="h-44 w-full "
                />
                <div className="absolute bottom-0 left-0 bg-[#029fb2] text-white p-1">
                  <h1 className="font-semibold text-xs uppercase">Education</h1>
                </div>
              </div>

              <p className="font-bold">
                Pas De Classes Ce Mercredi, Les Crèches Seront Ouvertes
              </p>
              <span className="italic text-[14px]">
                Staff -January 17, 2024
              </span>
            </a>
          </div>
          <div className="">
            <a href="https://yourlink.com" target="_blank">
              <div className="relative overflow-hidden">
                <img
                  src={Image.News1}
                  alt="fingerprint recognition"
                  className="h-44 w-full"
                />
                <div className="absolute bottom-0 left-0 bg-[#029fb2] text-white p-1">
                  <h1 className="font-semibold text-xs uppercase">Education</h1>
                </div>
              </div>

              <p className="font-bold">
                Pas De Classes Ce Mercredi, Les Crèches Seront Ouvertes
              </p>
              <span className="italic text-[14px]">
                Staff -January 17, 2024
              </span>
            </a>
          </div>
        </div>

        <div className="flex mt-5 md:mt-0 md:mx-5 lg:w-[25%]  flex-col">
          <div>
            <h1 className="text-red-500 mb-5 text-[18px] font-bold">
              Notre Choix
            </h1>
            <div className=" mx-auto   pb-2 flex sm:mx-auto mb-2 items-center">
              <div className="space-y-2">
                <p className="font-bold  hover:text-red-600">
                  5 Etapes Que Chaque PME En Ligne Peut Entreprendre Pour
                  Satisfaire Ses Clients
                </p>
                <p className="text-xs italic text-gray-600">
                  September 22, 2023
                </p>
              </div>
              <img
                src={Image.Renminbi}
                alt
                className="h-20 w-20 rounded-full object-cover "
              />
            </div>
            <div className=" mx-auto   pb-2 flex sm:mx-auto mb-2 items-center">
              <div className="space-y-2">
                <p className="font-bold hover:text-red-600">
                  5 Etapes Que Chaque PME En Ligne Peut Entreprendre Pour
                  Satisfaire Ses Clients
                </p>
                <p className="text-xs italic text-gray-600">
                  September 22, 2023
                </p>
              </div>
              <img
                src={Image.Renminbi}
                alt
                className="h-20 w-20 rounded-full object-cover "
              />
            </div>
            <div className=" mx-auto   pb-2 flex sm:mx-auto mb-2 items-center">
              <div className="space-y-2">
                <p className="font-bold  hover:text-red-600">
                  5 Etapes Que Chaque PME En Ligne Peut Entreprendre Pour
                  Satisfaire Ses Clients
                </p>
                <p className="text-xs italic text-gray-600">
                  September 22, 2023
                </p>
              </div>
              <img
                src={Image.Renminbi}
                alt
                className="h-20 w-20 rounded-full object-cover "
              />
            </div>
            <div>
              <h1 className="text-red-500 mb-5 text-[18px] font-bold">
                Finances Et Entreprises
              </h1>
              <div className=" mx-auto   pb-2 flex sm:mx-auto mb-2 items-center">
                <div className="space-y-2">
                  <p className="font-bold  hover:text-red-600">
                    Les Inscriptions Au NPQEA 2024 En Cours
                  </p>
                  <p className="text-xs italic text-gray-600">
                    September 22, 2023
                  </p>
                </div>
                <img
                  src={Image.Renminbi}
                  alt
                  className="h-20 w-20 rounded-full object-cover "
                />
              </div>
              <div className=" mx-auto   pb-2 flex sm:mx-auto mb-2 items-center">
                <div className="space-y-2">
                  <p className="font-bold  hover:text-red-600">
                    L’Académie Du Design Et De L’innovation Et Ciel Textile Ltd
                    S’associent Pour Stimuler L’industrie Textile
                  </p>
                  <p className="text-xs italic text-gray-600">
                    September 22, 2023
                  </p>
                </div>
                <img
                  src={Image.Renminbi}
                  alt
                  className="h-20 w-20 rounded-full object-cover "
                />
              </div>
              <div className=" mx-auto   pb-2 flex sm:mx-auto mb-2 items-center">
                <div className="space-y-2">
                  <p className="font-bold  hover:text-red-600">
                    MCB Et UPI Célèbrent 15 Ans De Collaboration Fructueuse
                  </p>
                  <p className="text-xs italic text-gray-600">
                    September 22, 2023
                  </p>
                </div>
                <img
                  src={Image.Renminbi}
                  alt
                  className="h-20 w-20 rounded-full object-cover "
                />
              </div>
              <div className=" mx-auto   pb-2 flex sm:mx-auto mb-2 items-center">
                <div className="space-y-2">
                  <p className="font-bold  hover:text-red-600">
                    Nouveau Directeur Pour Palmar Beach Hotel
                  </p>
                  <p className="text-xs italic text-gray-600">
                    September 22, 2023
                  </p>
                </div>
                <img
                  src={Image.Renminbi}
                  alt
                  className="h-20 w-20 rounded-full object-cover "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;

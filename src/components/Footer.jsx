import React from "react";
import Images from "../assests";
import { FaWhatsapp, FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
export default function App() {
  return (
    <footer className="text-white text-center w-[100vw]  mx-auto  lg:text-left">
      <div className=" p-6 bg-gradient-to-b from-[#493535] to-[#36353c]">
        <div className="md:flex justify-evenly text-center items-center">
          <div className="mb-6 flex-shrink-0  max-w-md">
            <h5 className="mb-5 font-bold text-center  text-xl text-[#029fb2]">
              About Us
            </h5>
            <ul className="mb-0 list-none space-y-3">
              <li>
                {" "}
                <img
                  src={Images.Logo}
                  alt="Le Matinal Logo"
                  className="w-[300px] mx-auto"
                 
                />
              </li>
              <li>
                <p className=" ">
                  Le Matinal est une plate-forme médiatique d’avant-garde de
                  Maurice qui couvre les dernières nouvelles du monde et de la
                  région. Nous vous apportons les derniers événements de la
                  politique, du sport, de la technologie, de l'économie, du
                  divertissement, de la mode, de la santé et encore plus.
                </p>
              </li>
              <li>
                <p>
                  Nous maintenons une politique éditoriale stricte et nous
                  veillons à ce que toutes nos sources d'informations soient
                  vérifiées deux fois. Nous nous engageons à fournir une
                  couverture médiatique fiable, factuelle et inclusive avec une
                  intégrité absolue, une énergie sans limites et un dévouement
                  au rôle essentiel de servir le pays. Notre objectif est d'être
                  un média 24/7 et couvrant les événements locaux, régionaux et
                  mondiaux.
                </p>
              </li>
            </ul>
          </div>

          <div className="mb-6 group  flex-shrink-0 max-w-md">
            <h5 className="mb-5 font-bold  text-xl text-[#029fb2]">
              Important Links
            </h5>
            <ul className="mb-0 list-none  space-y-7 text-[18px] font-bold">
              <li>
                <a href="aaa" className="hover:text-[#029fb2]">
                  Contactez-nous
                </a>
              </li>
              <li>
                <a href="aaa" className=" hover:text-[#029fb2]">
                  Faire De La Publicité
                </a>
              </li>
              <li>
                <a href="aaa" className="hover:text-[#029fb2] ">
                  Politique Éditoriale
                </a>
              </li>
              <li>
                <a href="aaa" className="hover:text-[#029fb2] ">
                  Conditions D’Utilisation
                </a>
              </li>
              <li>
                <a href="aaa" className="hover:text-[#029fb2] ">
                  Politique De Confidentialité
                </a>
              </li>
            </ul>
            <div>
              <div
                href="aaa"
                className="text-[#029fb2] mt-5 font-bold text-[24px] text-center "
              >
                Suivez Nous
              </div>
              <ul className="flex gap-5 text-xl mt-5 justify-center">
                <li>
                  <a href="">
                    <FaWhatsapp />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaXTwitter />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-6 flex-shrink-0 max-w-md">
            <h5 className="mb-5 font-bold  text-xl text-[#029fb2]">
              Editor Picks
            </h5>

            <ul className="mb-0 list-none space-y-5 text-start text-[16px] md:text-[18px] font-bold">
              <li className="flex gap-2">
                <div>
                  <a href="aaa" className=" hover:text-[#029fb2]">
                    5 Etapes Que Chaque PME En Ligne Peut Entreprendre Pour
                    Satisfaire Ses Clients
                  </a>
                  <p className="text-[16px]  font-normal italic">
                    September 22, 2023
                  </p>
                </div>
                <img src={Images.Peach} alt="Logo" width="100px" />
              </li>

              <li className="flex gap-2">
                <div>
                  <a href="aaa" className="hover:text-[#029fb2] ">
                    P. Alain Romaine : Le Code Noir : L’esclavage Gravé Dans La
                    Loi
                  </a>
                  <p className="text-[16px] font-normal italic">
                    February 1, 2023
                  </p>
                </div>

                <img src={Images.LeCode} alt="Logo" width="100px" />
              </li>
              <li className="flex gap-2">
                <div>
                  <a href="aaa" className="hover:text-[#029fb2] ">
                    Le Renminbi, Une Monnaie Qui Gagne Du Terrain !
                  </a>
                  <p className="text-[16px] font-normal italic">
                    January 27, 2023
                  </p>
                </div>
                <img src={Images.Renminbi} alt="Logo" width="100px" />
              </li>
            </ul>
            <div className="flex justify-between mx-[9%] mt-9">
              <img src={Images.Google} alt="Google" width="100px" />
              <img src={Images.Playstore} alt="Playstore" width="100px" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black font-[500] p-2 text-center md:text-[16px] text-[14px] text-[#029fb2]">
        Copyright ©
        <a className=" dark:text-neutral-400" href="https://tw-elements.com/">
          Le Matinal Media. All Rights Reserved.
        </a>
      </div>
    </footer>
  );
}

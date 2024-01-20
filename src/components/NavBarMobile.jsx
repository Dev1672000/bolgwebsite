import React, { useState } from "react";
import { Link } from "react-router-dom";
import Images from "../assests";
import { IoIosSearch } from "react-icons/io";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const NavBarMobile = () => {
  const [open, setOpen] = useState(false);
  const [activeTitle, setActiveTitle] = useState("");
  const [subtitleOpen, setSubtitleOpen] = useState({});

  const menuData = [
    { title: "Global", subtitles: ["Subtitle 1", "Subtitle 2", "Subtitle 3"] },
    { title: "Local news", subtitles: ["Subtitle A", "Subtitle B"] },
    { title: "Business & Finance", subtitles: ["Subtitle A", "Subtitle B"] },
    { title: "Society", subtitles: ["Subtitle A", "Subtitle B"] },
    { title: "Sports", subtitles: ["Subtitle A", "Subtitle B"] },
    { title: "Lifestyle", subtitles: ["Subtitle A", "Subtitle B"] },
    { title: "Divertissement", subtitles: ["Subtitle A", "Subtitle B"] },
    { title: "More", subtitles: ["Subtitle A", "Subtitle B"] },
  ];

  const openPopupHandler = (title) => {
    setActiveTitle(title);
    setSubtitleOpen((prevSubtitleOpen) => ({
      ...prevSubtitleOpen,
      [title]: !prevSubtitleOpen[title],
    }));
    setOpen(true);
  };

  return (
    <nav className="z-[5] absolute shadow-lg w-full">
      <div>
        <div className="px-[3%] pt-5 py-3 md:w-auto flex justify-between items-center lg:hidden md:hidden">
          <Link to="/">
            <img
              src={Images.Logo}
              alt="logo"
              width="160px"
              height="160px"
              className="md:cursor-pointer object-cover"
            />
          </Link>
          <div className="flex gap-5">
            <IoIosSearch size={35} />
            <RxHamburgerMenu
              size={35}
              className="pr-2 md:hidden"
              onClick={() => setOpen(!open)}
              name={`${open ? "close" : "menu"}`}
            />
          </div>
        </div>

        <div
          className={`bg-gradient-to-br from-sky-500 to-transparent w-[100vw]
            md:hidden text-white fixed  top-0 overflow-y-auto bottom-0 pt-[2%]
            duration-500 ${open ? "left-0" : "left-[-100%]"}
          `}
        >
          <div className="px-[4%] pt-2 flex justify-between md:hidden">
            <div className="flex gap-3 pt-3 justify-center">
              <Link to="">
                <FaFacebookF />
              </Link>
              <Link to="">
                <FaInstagram />
              </Link>
              <Link to="">
                <FaXTwitter />
              </Link>
              <Link to="">
                <FaYoutube />
              </Link>
            </div>
            <RxCross2
              size={50}
              name={`${open ? "close" : "menu"}`}
              className="pr-2 text-white md:hidden"
              onClick={() => setOpen(false)}
            />
          </div>
          <ul className="mt-[7%]">
            {menuData.map((menuItem, index) => (
              <li key={index}>
                <div
                  className="flex items-center justify-between pb-2 text-lg px-5 cursor-pointer"
                  onClick={() => openPopupHandler(menuItem.title)}
                >
                  <div>{menuItem.title}</div>
                  {subtitleOpen[menuItem.title] ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </div>
                {subtitleOpen[menuItem.title] && (
                  <div className="text-xs pl-5">
                    {menuItem.subtitles.map((subtitle, subIndex) => (
                      <div key={subIndex} className="pl-5">
                        {subtitle}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBarMobile;

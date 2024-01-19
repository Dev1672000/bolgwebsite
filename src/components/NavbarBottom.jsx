import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { register } from "swiper/element/bundle";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsSearch } from "react-icons/bs";
import Images from "../assests";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const menuItems = [
  {
    title: "Global",
    link: "/",
    subMenu: [
      {
        title: `Ram Dhurmea, Qui Affirmait N’avoir Jamais Démissionné, A Eté Limogé Hier`,
        imgPostLink: "news1.webp",
        subTitle: "Locale",
        postDate: "January 27, 2023",
      },
      {
        title: `Ram Dhurmea, Qui Affirmait N’avoir Jamais Démissionné, A Eté Limogé Hier`,
        imgPostLink: "news1.webp",
        subTitle: "Locale",
        postDate: "January 27, 2023",
      },
      {
        title: `Ram Dhurmea, Qui Affirmait N’avoir Jamais Démissionné, A Eté Limogé Hier`,
        imgPostLink: "news1.webp",
        subTitle: "Locale",
        postDate: "January 27, 2023",
      },
      {
        title: `Ram Dhurmea, Qui Affirmait N’avoir Jamais Démissionné, A Eté Limogé Hier`,
        imgPostLink: "news1.webp",
        subTitle: "Locale",
        postDate: "January 27, 2023",
      },
      {
        title: `Ram Dhurmea, Qui Affirmait N’avoir Jamais Démissionné, A Eté Limogé Hier`,
        imgPostLink: "news1.webp",
        subTitle: "Locale",
        postDate: "January 27, 2023",
      },
    ],
  },
  {
    title: "Local news",
    link: "/",
    subMenu: [
      {
        title: `Ram Dhurmea, Qui Affirmait N’avoir Jamais Démissionné, A Eté Limogé Hier`,
        imgPostLink: "news1.webp",
        subTitle: "Locale",
        postDate: "January 27, 2023",
      },
      {
        title: `Ram Dhurmea, Qui Affirmait N’avoir Jamais Démissionné, A Eté Limogé Hier`,
        imgPostLink: "news1.webp",
        subTitle: "Locale",
        postDate: "January 27, 2023",
      },
      {
        title: `Ram Dhurmea, Qui Affirmait N’avoir Jamais Démissionné, A Eté Limogé Hier`,
        imgPostLink: "news1.webp",
        subTitle: "Locale",
        postDate: "January 27, 2023",
      },
      {
        title: `Ram Dhurmea, Qui Affirmait N’avoir Jamais Démissionné, A Eté Limogé Hier`,
        imgPostLink: "news1.webp",
        subTitle: "Locale",
        postDate: "January 27, 2023",
      },
      {
        title: `Ram Dhurmea, Qui Affirmait N’avoir Jamais Démissionné, A Eté Limogé Hier`,
        imgPostLink: "news1.webp",
        subTitle: "Locale",
        postDate: "January 27, 2023",
      },
    ],
  },
  {
    title: "Business & Finance",
    link: "/",
    subMenu: [
      {
        title: `Ram Dhurmea, Qui Affirmait N’avoir Jamais Démissionné, A Eté Limogé Hier`,
        imgPostLink: "news1.webp",
        subTitle: "Locale",
        postDate: "January 27, 2023",
      },
      {
        title: `Ram Dhurmea, Qui Affirmait N’avoir Jamais Démissionné, A Eté Limogé Hier`,
        imgPostLink: "news1.webp",
        subTitle: "Locale",
        postDate: "January 27, 2023",
      },
      {
        title: `Ram Dhurmea, Qui Affirmait N’avoir Jamais Démissionné, A Eté Limogé Hier`,
        imgPostLink: "news1.webp",
        subTitle: "Locale",
        postDate: "January 27, 2023",
      },
      {
        title: `Ram Dhurmea, Qui Affirmait N’avoir Jamais Démissionné, A Eté Limogé Hier`,
        imgPostLink: "news1.webp",
        subTitle: "Locale",
        postDate: "January 27, 2023",
      },
      {
        title: `Ram Dhurmea, Qui Affirmait N’avoir Jamais Démissionné, A Eté Limogé Hier`,
        imgPostLink: "news1.webp",
        subTitle: "Locale",
        postDate: "January 27, 2023",
      },
    ],
  },
  {
    title: "Society",
    link: "/",
    subMenu: [
      {
        title: `Ram Dhurmea, Qui Affirmait N’avoir Jamais Démissionné, A Eté Limogé Hier`,
        imgPostLink: "news1.webp",
        subTitle: "Locale",
        postDate: "January 27, 2023",
      },
      {
        title: `Ram Dhurmea, Qui Affirmait N’avoir Jamais Démissionné, A Eté Limogé Hier`,
        imgPostLink: "news1.webp",
        subTitle: "Locale",
        postDate: "January 27, 2023",
      },
      {
        title: `Ram Dhurmea, Qui Affirmait N’avoir Jamais Démissionné, A Eté Limogé Hier`,
        imgPostLink: "news1.webp",
        subTitle: "Locale",
        postDate: "January 27, 2023",
      },
      {
        title: `Ram Dhurmea, Qui Affirmait N’avoir Jamais Démissionné, A Eté Limogé Hier`,
        imgPostLink: "news1.webp",
        subTitle: "Locale",
        postDate: "January 27, 2023",
      },
      {
        title: `Ram Dhurmea, Qui Affirmait N’avoir Jamais Démissionné, A Eté Limogé Hier`,
        imgPostLink: "news1.webp",
        subTitle: "Locale",
        postDate: "January 27, 2023",
      },
    ],
  },
  {
    title: "Sports",
    link: "/",
    subMenu: [
      {
        title: `Ram Dhurmea, Qui Affirmait N’avoir Jamais Démissionné, A Eté Limogé Hier`,
        imgPostLink: "news1.webp",
        subTitle: "Locale",
        postDate: "January 27, 2023",
      },
      {
        title: `Ram Dhurmea, Qui Affirmait N’avoir Jamais Démissionné, A Eté Limogé Hier`,
        imgPostLink: "news1.webp",
        subTitle: "Locale",
        postDate: "January 27, 2023",
      },
      {
        title: `Ram Dhurmea, Qui Affirmait N’avoir Jamais Démissionné, A Eté Limogé Hier`,
        imgPostLink: "news1.webp",
        subTitle: "Locale",
        postDate: "January 27, 2023",
      },
      {
        title: `Ram Dhurmea, Qui Affirmait N’avoir Jamais Démissionné, A Eté Limogé Hier`,
        imgPostLink: "news1.webp",
        subTitle: "Locale",
        postDate: "January 27, 2023",
      },
      {
        title: `Ram Dhurmea, Qui Affirmait N’avoir Jamais Démissionné, A Eté Limogé Hier`,
        imgPostLink: "news1.webp",
        subTitle: "Locale",
        postDate: "January 27, 2023",
      },
    ],
  },
  {
    title: "Lifestyle",
    link: "/",
    subMenu: [
      {
        title: `Ram Dhurmea, Qui Affirmait N’avoir Jamais Démissionné, A Eté Limogé Hier`,
        imgPostLink: "news1.webp",
        subTitle: "Locale",
        postDate: "January 27, 2023",
      },
      {
        title: `Ram Dhurmea, Qui Affirmait N’avoir Jamais Démissionné, A Eté Limogé Hier`,
        imgPostLink: "news1.webp",
        subTitle: "Locale",
        postDate: "January 27, 2023",
      },
      {
        title: `Ram Dhurmea, Qui Affirmait N’avoir Jamais Démissionné, A Eté Limogé Hier`,
        imgPostLink: "news1.webp",
        subTitle: "Locale",
        postDate: "January 27, 2023",
      },
      {
        title: `Ram Dhurmea, Qui Affirmait N’avoir Jamais Démissionné, A Eté Limogé Hier`,
        imgPostLink: "news1.webp",
        subTitle: "Locale",
        postDate: "January 27, 2023",
      },
      {
        title: `Ram Dhurmea, Qui Affirmait N’avoir Jamais Démissionné, A Eté Limogé Hier`,
        imgPostLink: "news1.webp",
        subTitle: "Locale",
        postDate: "January 27, 2023",
      },
    ],
  },
  {
    title: "Divertissement",
    link: "/blog",
    subMenu: [
      {
        title: `Ram Dhurmea, Qui Affirmait N’avoir Jamais Démissionné, A Eté Limogé Hier`,
        imgPostLink: "news1.webp",
        subTitle: "Locale",
        postDate: "January 27, 2023",
      },
      {
        title: `Ram Dhurmea, Qui Affirmait N’avoir Jamais Démissionné, A Eté Limogé Hier`,
        imgPostLink: "news1.webp",
        subTitle: "Locale",
        postDate: "January 27, 2023",
      },
      {
        title: `Ram Dhurmea, Qui Affirmait N’avoir Jamais Démissionné, A Eté Limogé Hier`,
        imgPostLink: "news1.webp",
        subTitle: "Locale",
        postDate: "January 27, 2023",
      },
      {
        title: `Ram Dhurmea, Qui Affirmait N’avoir Jamais Démissionné, A Eté Limogé Hier`,
        imgPostLink: "news1.webp",
        subTitle: "Locale",
        postDate: "January 27, 2023",
      },
      {
        title: `Ram Dhurmea, Qui Affirmait N’avoir Jamais Démissionné, A Eté Limogé Hier`,
        imgPostLink: "news1.webp",
        subTitle: "Locale",
        postDate: "January 27, 2023",
      },
    ],
  },
  {
    title: "More",
    link: "/",
    subMenu: [
      {
        title: "Opinion",
      },
      {
        title: "Environnment",
      },
      {
        title: "Science ET Tech",
      },
    ],
  },
];

const SubMenuItem = ({
  title,
  link,
  subSubMenu,
  postDate,
  imgPostLink,
  subTitle,
}) => {
  const hasSubSubMenu = Array.isArray(subSubMenu) && subSubMenu.length > 0;

  return (
    <li
      className={`relative bg-white group  ${
        hasSubSubMenu ? "group-hover:bg-gray-50" : ""
      } w-80 `}
    >
      <Link
        to={link}
        className={`flex flex-col items-center justify-between p-2 text-gray-900 rounded `}
      >
        {" "}
        <div className="relative  pt-10 w-full">
          <img
            className="w-full h-40 object-cover"
            src={imgPostLink}
            alt={title}
          />
          <div className="absolute bottom-0 left-0 bg-[#029fb2] text-white p-1">
            <h1 className=" text-[14px] uppercase"> {subTitle}</h1>
          </div>
        </div>
        <h1>{title}</h1>
        <span className="text-[11px] italic">{postDate}</span>
      </Link>
    </li>
  );
};

const MenuItem = ({ title, link, subMenu }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [hoveredSubMenuIndex, setHoveredSubMenuIndex] = useState(null);
  const subMenuItems = Array.isArray(subMenu) ? subMenu : [];

  const handleToggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };
  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };
  const handleSubMenuTitleHover = (index) => {
    setHoveredSubMenuIndex(index === hoveredSubMenuIndex ? null : index);
  };

  return (
    <li
      className="relative group"
      onMouseEnter={handleToggleSubMenu}
      onMouseLeave={handleToggleSubMenu}
    >
      <div
        className={`block uppercase text-center text-gray-900 rounded ${
          subMenuItems.length > 0
            ? "cursor-pointer"
            : "group-hover:bg-gray-100 md:border-0 md:group-hover:text-black"
        }`}
        onMouseEnter={() => handleSubMenuTitleHover(1)}
        onMouseLeave={() => handleSubMenuTitleHover(null)}
        onClick={toggleSubMenu}
      >
        <Link to={link}>{title}</Link>
        {subMenuItems.length > 0 && (
          <FiChevronDown className="w-4 h-4 ml-1 inline-block" />
        )}
      </div>

      {subMenuItems.length > 0 && isSubMenuOpen && (
        <ul className="absolute flex left-0 top-full ">
          {subMenuItems.map((subItem, index) => (
            <Swiper
              width="100%"
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={2}
              slidesPerView={2}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              <SwiperSlide key={subItem.title}>
                <SubMenuItem
                  title={subItem.title}
                  link={subItem.link}
                  subSubMenu={subItem.subSubMenu}
                  postDate={subItem.postDate}
                  imgPostLink={subItem.imgPostLink}
                  subTitle={subItem.subTitle}
                  onMouseEnter={() => handleSubMenuTitleHover(index + 1)}
                  onMouseLeave={() => handleSubMenuTitleHover(null)}
                  onClick={() => handleSubMenuTitleHover(index + 1)}
                />
              </SwiperSlide>{" "}
            </Swiper>
          ))}
        </ul>
      )}
    </li>
  );
};

const NavbarBottom = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 180);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav>
      <nav
        className={`bg-white md:block hidden border-gray-200 transition-all ${
          isScrolled ? "fixed top-0 left-0 w-full py-2 shadow-md z-50" : "py-4"
        }`}
      >
        <div className="max-w-screen-xl ml-[5%]">
          <div className="flex justify-between items-center">
            <img
              className={`logo w-32 transition-opacity ${
                isScrolled ? "opacity-100" : "hidden opacity-0"
              }`}
              src={Images.Logo}
              alt=""
            />

            <ul className="flex  font-bold space-x-7">
              {menuItems.map((item) => (
                <MenuItem
                  key={item.title}
                  title={item.title}
                  link={item.link}
                  subMenu={item.subMenu}
                />
              ))}
            </ul>

            <div className={` ${isScrolled ? "hidden" : ""}`}>
              <BsSearch />
            </div>
          </div>
        </div>
      </nav>

      <nav className="bg-white md:hidden  border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="h/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={Images.Logo}
              className="h-8"
              alt="Flowbite Logo"
            />
           
          </a>
          <div className="flex md:order-2">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500  hover:bg-gray-100  rounded-lg text-sm p-2.5 me-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
              />
            </div>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 "
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
                placeholder="Search..."
              />
            </div>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </nav>
  );
};

export default NavbarBottom;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { register } from "swiper/element/bundle"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
    title: "Locale",
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
    title: "Finances Enterprises",
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
    title: "Societe",
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
        className={`block text-center px-1 text-gray-900 rounded ${
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
          <FiChevronDown className="w-4 h-4 ml-2 inline-block" />
        )}
      </div>

      {subMenuItems.length > 0 && isSubMenuOpen && (
        <ul className="absolute flex left-0 top-full z-20">
          {subMenuItems.map((subItem, index) => (
            <Swiper width="100%"
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
     
  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="hidden md:block"> 
          <ul className="flex font-bold space-x-4">
            {menuItems.map((item) => (
              <MenuItem
                key={item.title}
                title={item.title}
                link={item.link}
                subMenu={item.subMenu}
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarBottom;

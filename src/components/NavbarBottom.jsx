import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import Images from "../assests";

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
      className={`relative  group  ${
        hasSubSubMenu ? "group-hover:bg-gray-50" : ""
      } w-80 `}
    >
      <Link
        to={link}
        className={`flex flex-col items-center justify-between p-2  rounded `}
      >
        {" "}
        <div className="relative   w-full">
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
        className={`block uppercase text-center  rounded ${
          subMenuItems.length > 0
            ? "cursor-pointer"
            : ""
        }`}
        onMouseEnter={() => handleSubMenuTitleHover(1)}
        onMouseLeave={() => handleSubMenuTitleHover(null)}
        onClick={toggleSubMenu}
      >
        <Link to={link}>{title}</Link>
        {subMenuItems.length > 0 && (
          <FiChevronDown className="w-3 h-3 ml-1 inline-block" />
        )}
      </div>
      {subMenuItems.length > 0 && isSubMenuOpen && (
        <ul className="absolute p-5 z-50 bg-white shadow-lg flex left-0 top-full ">
          {subMenuItems.map((subItem, index) => (
            <div key={subItem.title} className="w-[100%]">
              
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
            </div>
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
    <nav
      className={`bg-white md:block hidden border-gray-200 transition-all ${
        isScrolled ? "fixed top-0 left-0 w-[100vw] py-2 shadow-md z-50" : "py-4"
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
  );
};

export default NavbarBottom;

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import Images from "../assests";
import SearchArticles from "./SearchArticles";

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
    ],
  },
  {
    title: "More",
    link: "/",
    subMenu: [],
  },
];

const SubMenuItem = ({
  title,
  link,
  subSubMenu,
  postDate,
  imgPostLink,
  subTitle,
  handleSubMenuClick,
}) => {
  const hasSubSubMenu = Array.isArray(subSubMenu) && subSubMenu.length > 0;

  return (
    <div
      className={`relative group ${
        hasSubSubMenu ? "group-hover:bg-gray-50" : ""
      } w-80`}
      onClick={handleSubMenuClick}
    >
      <Link
        to={link}
        className="flex flex-col text-justify justify-between p-2 rounded"
      >
        <div className="relative w-full">
          <img
            className="w-full h-40 object-cover"
            src={imgPostLink}
            alt={title}
          />
          <div className="absolute bottom-0 left-0 bg-[#029fb2] text-white p-1">
            <h1 className="text-[14px] uppercase">{subTitle}</h1>
          </div>
        </div>
        <h1>{title}</h1>
        <span className="text-xs mt-2 font-normal  italic text-gray-500">
          {postDate}
        </span>
      </Link>
    </div>
  );
};

const MenuItem = ({ title, link, subMenu }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const subMenuItems = Array.isArray(subMenu) ? subMenu : [];

  const handleToggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const handleSubMenuTitleHover = (value) => {
    setIsHovered(value);
    if (value) {
      setIsSubMenuOpen(true);
    } else {
      setIsSubMenuOpen(false);
    }
  };

  const handleSubMenuClick = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsSubMenuOpen(false);
        setIsHovered(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div ref={menuRef} className="relative group">
      <div
        className={`block uppercase text-center rounded ${
          subMenuItems.length > 0 ? "cursor-pointer" : ""
        }`}
        onMouseEnter={() => handleSubMenuTitleHover(true)}
        onMouseLeave={() => handleSubMenuTitleHover(false)}
        onClick={handleToggleSubMenu}
      >
        <Link to={link}>{title}</Link>
        {subMenuItems.length > 0 && (
          <FiChevronDown className="w-3 h-3 ml-1 inline-block" />
        )}
      </div>
      {subMenuItems.length > 0 && (isSubMenuOpen || isHovered) && (
        <div className="fixed shadow-xl flex z-50 left-5 bg-white right-5 overflow-y-auto">
          {/* Left Side Submenu */}
          <div className="w-[5%] p-5 mt-5 bg-white">
            <p>All</p>
            <p>Political</p>
            <p>Education</p>
            <p>Local</p>
          </div>
          {/* Right Side Submenu */}
          <ul className="w-[100%] flex p-5">
            {subMenuItems.map((subItem, index) => (
              <div key={subItem.title} className="w-[100%]">
                <SubMenuItem
                  title={subItem.title}
                  link={subItem.link}
                  subSubMenu={subItem.subSubMenu}
                  postDate={subItem.postDate}
                  imgPostLink={subItem.imgPostLink}
                  subTitle={subItem.subTitle}
                  handleSubMenuClick={handleSubMenuClick}
                />
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const NavbarBottom = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchQuery) => {
    console.log("Search query:", searchQuery);
    setSearchResults([]);
  };

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
          <Link to="/">
            {" "}
            <img
              className={`logo w-32 transition-opacity ${
                isScrolled ? "opacity-100" : "hidden opacity-0"
              }`}
              src={Images.Logo}
              alt="Logo"
            />
          </Link>

          <ul className="flex font-bold space-x-7">
            {menuItems.map((item) => (
              <MenuItem
                key={item.title}
                title={item.title}
                link={item.link}
                subMenu={item.subMenu}
              />
            ))}
          </ul>

          <div className={`${isScrolled ? "hidden" : ""}`}>
            <SearchArticles onSearch={handleSearch} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarBottom;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import EffectualLogo from "../assests/Peach-Payments.webp";

const menuItems = [
  {
    title: "Home",
    link: "/",
    subMenu: [],
  },
  {
    title: "About Us",
    link: "/",
    subMenu: [
      { title: "Comapny Overview", link: "/CompanyOverview" },
      { title: "Company History", link: "/CompanyHistory" },
      { title: "Awards & Recognition", link: "/AwardsRecognition" },
      { title: "Founding Members", link: "/FoundingMembers" },
      { title: "Leadership Team", link: "/LeadershipTeam" },
      { title: "Careers", link: "/Careers" },
    ],
  },
  {
    title: "Patent Services",
    link: "/",
    subMenu: [
      {
        title: "Patent Creation",
        link: "/",
        subSubMenu: [
          {
            title: "Patent Drafting",
            link: "/PatentServices/PatentCreation/PatentDrafting",
          },
          {
            title: "Office Action Response",
            link: "/PatentServices/PatentCreation/OfficeActionResponse",
          },
          {
            title: "Patent Filing Services",
            link: "/PatentServices/PatentCreation/PatentFilingServices",
          },
          {
            title: "Formal Patent Drawings/ Illustration",
            link: "/PatentServices/PatentCreation/FormalPatentDrawings",
          },
          {
            title: "Design Patent Drawings",
            link: "/PatentServices/PatentCreation/Design-Patent-Drawings",
          },
          {
            title: "Defensive Publiction",
            link: "/PatentServices/PatentCreation/Defensive-Publication",
          },
        ],
      },
      {
        title: "Indian Patent Services",
        link: "/",
        subSubMenu: [
          {
            title: "Indian Patent Application Drafting",
            link: "/PatentServices/Indian-Patent-Services/Indian-Patent-Application-Drafting",
          },
          {
            title: "Design Patent Appliction",
            link: "/PatentServices/Indian-Patent-Services/Design-Patent-Application",
          },
          {
            title: "Opposition Searches",
            link: "/PatentServices/Indian-Patent-Services/Opposition-Searches",
          },
          {
            title: "Licensing & Litigation Support",
            link: "/PatentServices/Indian-Patent-Services/Licensing-Litigation-Support",
          },
          {
            title: "India Entry Strategy",
            link: "/PatentServices/Indian-Patent-Services/India-Entry-Strategy",
          },
        ],
      },
      {
        title: "Patent Management",
        link: "/",
        subSubMenu: [
          {
            title: "Patent Proofreading",
            link: "/PatentServices/Patent-Management/Patent-Proofreading",
          },
          {
            title: "Remote Patent Docketing",
            link: "/PatentServices/Patent-Management/Remote-Patent-Docketing",
          },
          {
            title: "Patent Translations",
            link: "/PatentServices/Patent-Management/Patent-Translations",
          },
          {
            title: "PTA Calculations",
            link: "/PatentServices/Patent-Management/PTA-Calculations",
          },
          {
            title: "File History Analysis",
            link: "/PatentServices/Patent-Management/File-History-Analysis",
          },
          {
            title: "IDS Management",
            link: "/PatentServices/Patent-Management/IDS-Management",
          },
          {
            title: "Data Verficatoin",
            link: "/PatentServices/Patent-Management/Data-Verficatoin",
          },
        ],
      },
      {
        title: "Patent Searches",
        link: "/",
        subSubMenu: [
          {
            title: "Knock Search",
            link: "/PatentServices/Patent-Searches/Knock-Search",
          },
          {
            title: "Patentability Search",
            link: "/PatentServices/Patent-Searches/Patentability-Search",
          },
          {
            title: "Accelerated Examination Search",
            link: "/PatentServices/Patent-Searches/Accelerated-Examination-Search",
          },
          {
            title: "Design Search",
            link: "/PatentServices/Patent-Searches/Design-Search",
          },
          {
            title: "Patent Invalidation search",
            link: "/PatentServices/Patent-Searches/Patent-Invalidation-search",
          },
          {
            title: "Freedom to Operate Search",
            link: "/PatentServices/Patent-Searches/Freedom-to-Operate-Search",
          },
          {
            title: "Asian Language searches",
            link: "/PatentServices/Patent-Searches/Asian-Language-searches",
          },
          {
            title: "Patent Landscape",
            link: "/PatentServices/Patent-Searches/Patent-Landscape",
          },
          {
            title: "State of Art Search",
            link: "/PatentServices/Patent-Searches/State-of-Art-Search",
          },
          {
            title: "Bio-Sequence Search",
            link: "/PatentServices/Patent-Searches/Bio-Sequence-Search",
          },
          {
            title: "Chemical Structure Search",
            link: "/PatentServices/Patent-Management/Chemical-Structure-Search",
          },
        ],
      },
      {
        title: "Patent Litigation Services",
        link: "/",
        subSubMenu: [
          {
            title: "Pre-Litigation Assessment",
            link: "/PatentServices/Patent-Litigation-Services/Pre-Litigation-Assessment",
          },
          {
            title: "Infringement Contentions",
            link: "/PatentServices/Patent-Litigation-Services/Infringement-Contentions",
          },
          {
            title: "Rule 11/337 Investigation Support",
            link: "/PatentServices/Patent-Litigation-Services/Rule-Investigation-Support",
          },
          {
            title: "Prior Art Search",
            link: "/PatentServices/Patent-Litigation-Services/Prior-Art-Search",
          },
          {
            title: "Product Testing & Code Review",
            link: "/PatentServices/Patent-Litigation-Services/Product-Testing-Code-Review",
          },
        ],
      },
      {
        title: "Patent Licensing Services",
        link: "/",
        subSubMenu: [
          {
            title: "Patent Mining",
            link: "/PatentServices/Patent-Licensing-Services/Patent-Mining",
          },
          {
            title: "EOU Chart",
            link: "/PatentServices/Patent-Licensing-Services/EOU-Chart",
          },
          {
            title: "Market Research",
            link: "/PatentServices/Patent-Licensing-Services/Market-Research",
          },
          {
            title: "Infringement Search",
            link: "/PatentServices/Patent-Licensing-Services/Infringement-Search",
          },
          {
            title: "Bucketing and Ranking",
            link: "/PatentServices/Patent-Licensing-Services/Bucketing-and-Ranking",
          },
          {
            title: "Patent Due Diligence",
            link: "/PatentServices/Patent-Licensing-Services/Patent-Due-Diligence",
          },
        ],
      },
    ],
  },
  {
    title: "Research and Development",
    link: "/",
    subMenu: [
      { title: "Technology LandScapes", link: "/TechnologyLandScapes" },
      {
        title: "Competitive Intelligence & IP Watch",
        link: "/CompetitiveIntelligenceIPWatch",
      },
      {
        title: "Portfolio & whitespace Analysis",
        link: "/PortfolioWhitespaceAnalysis",
      },
      { title: "Opportunity Assessment", link: "/OpportunityAssessment" },
      { title: "Partner Identification", link: "/PartnerIdentification" },
      { title: "Innovation Scouting", link: "/InnovationScouting" },
    ],
  },
  {
    title: "Trademark Services",
    link: "/",
    subMenu: [
      { title: "Trademark Management", link: "/TrademarkManagement" },
      { title: "Trademark Search", link: "/TrademarkSearch" },
      { title: "Trademark Registration", link: "/TrademarkRegistration" },
    ],
  },
  {
    title: "Resource",
    link: "/",
    subMenu: [
      { title: "IP Minute to Go", link: "/IPMinutetoGo" },
      { title: "Case Studies", link: "/CaseStudies" },
      { title: "Articles", link: "/Category/Articles/" },
      { title: "Press Releases", link: "/Category/press-releases/" },
      { title: "Report autoMation Tool", link: "/ReportAutomationTool" },
      { title: "Ten Successful Years", link: "/TenSuccessfulYears" },
    ],
  },
  {
    title: "Blog",
    link: "/blog",
    subMenu: [],
  },
  {
    title: "Contact",
    link: "/ContactUs",
    subMenu: [],
  },
];

const SubMenuItem = ({ title, link, subSubMenu }) => {
  const hasSubSubMenu = Array.isArray(subSubMenu) && subSubMenu.length > 0;

  return (
    <li
      className={`relative bg-white group border ${
        hasSubSubMenu ? "group-hover:bg-gray-50" : ""
      } w-60`}
    >
      <Link
        to={link}
        className={`flex items-center justify-between p-2 text-gray-900 rounded ${
          hasSubSubMenu ? "md:border-0 md:group-hover:text-black" : ""
        }`}
      >
        <h1>{title}</h1>
        {hasSubSubMenu && <FiChevronRight />}
      </Link>
    </li>
  );
};

const SubSubMenuItem = ({ title, link }) => {
  return (
    <li className="relative group border bg-white group-hover:bg-gray-50 w-60">
      <Link
        to={link}
        className="block p-2 text-gray-900 rounded md:border-0 md:group-hover:text-black"
      >
        {title}
      </Link>
    </li>
  );
};

const MenuItem = ({ title, link, subMenu }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isSubSubMenuOpen, setIsSubSubMenuOpen] = useState(false);
  const [hoveredSubMenuIndex, setHoveredSubMenuIndex] = useState(null);
  const subMenuItems = Array.isArray(subMenu) ? subMenu : [];
  const hasSubSubMenu = subMenuItems.some(
    (subItem) =>
      Array.isArray(subItem.subSubMenu) && subItem.subSubMenu.length > 0
  );

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
        <ul className="absolute left-0 top-full z-50">
          {subMenuItems.map((subItem, index) => (
            <React.Fragment key={subItem.title}>
              <SubMenuItem
                title={subItem.title}
                link={subItem.link}
                subSubMenu={subItem.subSubMenu}
                onMouseEnter={() => handleSubMenuTitleHover(index + 1)}
                onMouseLeave={() => handleSubMenuTitleHover(null)}
                onClick={() => handleSubMenuTitleHover(index + 1)}
              />
              {Array.isArray(subItem.subSubMenu) &&
                subItem.subSubMenu.length > 0 && (
                  <ul
                    className={`absolute left-60 top-0 z-50 py-2 ${
                      index === hoveredSubMenuIndex ? "block" : ""
                    }`}
                  >
                    {subItem.subSubMenu.map((subSubItem, subIndex) => (
                      <SubSubMenuItem
                        key={subSubItem.title}
                        title={subSubItem.title}
                        link={subSubItem.link}
                      />
                    ))}
                  </ul>
                )}
            </React.Fragment>
          ))}
        </ul>
      )}
    </li>
  );
};

const Nav = () => {
  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img src={EffectualLogo} alt="Logo" width={180} className="rounded" />
        </Link>
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

export default Nav;

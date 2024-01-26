import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  FaFacebook,
  FaTwitter,
  FaShareAlt,
  FaPinterest,
  FaWhatsapp,
  FaPrint,
} from "react-icons/fa";

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import ReactPaginate from "react-paginate";
import LatestNews from "../Category/LatestNews";
// ... (your imports)

const DetailedArticles = ({ shareUrl, title }) => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  const [activeTag, setActiveTag] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    saveInfo: false,
  });

  const facebookShareUrl = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(
    shareUrl
  )}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    title
  )}&url=${encodeURIComponent(shareUrl)}`;
  const pinterestShareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
    shareUrl
  )}&description=${encodeURIComponent(title)}`;
  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    title
  )}%0A%0A${encodeURIComponent(shareUrl)}`;

  const handlePrint = () => {
    // Add print logic here
    console.log("Print button clicked");
  };
  const fetchArticles = async () => {
    try {
      const articlesResponse = await axios.get(
        `${process.env.REACT_APP_API_URL}/getLatestArticles`,
        {
          params: {
            language: "english",
            numOfArticles: 1,
            skippedArticles: (currentPage - 1) * 10,
          },
        }
      );

      const articlesWithFormattedDate = await Promise.all(
        articlesResponse.data.map(async (article) => {
          const imageContentPairs = await Promise.all(
            article.images.map(async (imageId, index) => {
              const imageResponse = await axios.get(
                `${process.env.REACT_APP_API_URL}/getImage`,
                {
                  params: {
                    imageID: imageId,
                  },
                }
              );

              const decodedImage = imageResponse.data.imageBase64;

              return {
                decodedImage,
                content: article.engContent[index] || "", // Handle if content is undefined
              };
            })
          );

          const options = { year: "numeric", month: "long", day: "numeric" };
          const date = new Date(article.publicationDate);
          const formattedDate = date.toLocaleDateString("en-US", options);

          return {
            ...article,
            imageContentPairs,
            formattedDate: `${formattedDate}`,
          };
        })
      );

      setArticles(articlesWithFormattedDate);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Comment submitted:", formData);
  };

  return (
    <div>
      <div className="">
        {articles.map((article) => (
          <div to={`/${article._id}`} key={article._id} className="">
            <div>
              <span className="bg-[#029fb2] uppercase text-[10px] text-white p-1">
                {article.engCategories && article.engCategories[0]}
              </span>
              <p className="text-3xl font-bold">{article.engHeading}</p>
              <div className="md:flex justify-between items-center">
                <span className="text-xs  italic text-gray-500">
                  {`${article.author} - ${article.formattedDate}`}
                </span>
                <div className="flex gap-3 justify-center items-center">
                  <div className="flex p-3 gap-2 border-gray-200  justify-center items-center border-[1px]">
                    <FaShareAlt />
                    <span className="text-gray-200">|</span>
                    <div className="">Share</div>
                  </div>
                  <Link
                    className="bg-[#516eab] text-white p-3"
                    to={facebookShareUrl}
                    title="Facebook"
                  >
                    <FaFacebook />
                  </Link>
                  <Link
                    className="bg-[#29c5f6] text-white p-3"
                    to={twitterShareUrl}
                    title="Twitter"
                  >
                    <FaTwitter />
                  </Link>
                  <Link
                    className="bg-[#ca212a] text-white p-3"
                    to={pinterestShareUrl}
                    title="Pinterest"
                  >
                    {" "}
                    <FaPinterest />
                  </Link>
                  <Link
                    className="bg-[#7bbf6a] text-white p-3"
                    to={whatsappShareUrl}
                    title="WhatsApp"
                  >
                    {" "}
                    <FaWhatsapp />
                  </Link>
                  <Link
                    className="bg-[#333] text-white p-3 "
                    to="#"
                    title="Print"
                    onClick={handlePrint}
                  >
                    <FaPrint />
                  </Link>
                </div>
              </div>
            </div>

            <div>
              {article.imageContentPairs.map((pair, index) => (
                <div key={index}>
                  <div className="relative pt-5 w-full h-full">
                    {pair.decodedImage && (
                      <img
                        src={`data:image/jpeg;base64,${pair.decodedImage}`}
                        alt={`Image ${article.filename}`}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="">
                    <p className="text-gray-500 text-justify">{pair.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex">
              <div className="flex flex-wrap content-center items-center text-center">
                {article.engTags.map((tag, index) => (
                  <span
                    key={index}
                    className={`${
                      activeTag === tag
                        ? "bg-[#029fb2] p-1 text-center text-white"
                        : "border-[1px] m-1 p-1 text-gray-700"
                    } uppercase text-[10px]  cursor-pointer`}
                    onClick={() => setActiveTag(tag)}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 justify-center items-center">
                <div className="flex p-3 gap-2 border-gray-200  justify-center items-center border-[1px]">
                  <FaShareAlt />
                  <span className="text-gray-200">|</span>
                  <div className="">Share</div>
                </div>
                <Link
                  className="bg-[#516eab] text-white p-3"
                  to={facebookShareUrl}
                  title="Facebook"
                >
                  <FaFacebook />
                </Link>
                <Link
                  className="bg-[#29c5f6] text-white p-3"
                  to={twitterShareUrl}
                  title="Twitter"
                >
                  <FaTwitter />
                </Link>
                <Link
                  className="bg-[#ca212a] text-white p-3"
                  to={pinterestShareUrl}
                  title="Pinterest"
                >
                  {" "}
                  <FaPinterest />
                </Link>
                <Link
                  className="bg-[#7bbf6a] text-white p-3"
                  to={whatsappShareUrl}
                  title="WhatsApp"
                >
                  {" "}
                  <FaWhatsapp />
                </Link>
                <Link
                  className="bg-[#333] text-white p-3 "
                  to="#"
                  title="Print"
                  onClick={handlePrint}
                >
                  <FaPrint />
                </Link>
              </div>
            </div>
            <div className=" mt-8 p-6 ">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="comment"
                    className="block mb-5 font-medium text-gray-900"
                  >
                    Leave A Reply
                  </label>
                  <textarea
                    rows={10}
                    type="text"
                    id="comment"
                    name="comment"
                    className="mt-1 p-2 outline-none w-full border rounded-md"
                    placeholder="Comment:"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex gap-10">
                  <div className="mb-4">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 outline-none p-2 w-full border rounded-md"
                      placeholder="Your Name :*"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 outline-none p-2 w-full border rounded-md"
                      placeholder="Your Email :*"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="url"
                      id="website"
                      name="website"
                      className="mt-1 outline-none p-2 w-full border rounded-md"
                      placeholder="Your Website:"
                      value={formData.website}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      id="saveInfo"
                      name="saveInfo"
                      className="mr-2"
                      checked={formData.saveInfo}
                      onChange={handleChange}
                    />
                    <span className="text-sm text-gray-500 font-medium">
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </span>
                  </label>
                </div>
                <button
                  type="submit"
                  className="bg-black uppercase text-sm font-medium text-white p-2  hover:bg-red-800 focus:outline-none focus:ring focus:border-gray-500"
                >
                  post comment
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailedArticles;

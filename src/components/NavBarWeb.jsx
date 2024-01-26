import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaApple,
  FaPlay,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLongArrowAltRight,
} from "react-icons/fa";
import {
  FaXTwitter,
} from "react-icons/fa6";
import { WiCloudy } from "react-icons/wi";
import { HiMoon } from "react-icons/hi";
import axios from "axios";

const NavBarWeb = () => {
  const [temperature, setTemperature] = useState("");
  const currentDate = new Date();
  const hour = currentDate.getHours();
  const isDaytime = hour >= 6 && hour < 18;
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    const API_KEY = "afd2bfe6efmsha10f6ebc25853c1p1dc9b6jsn9adac5c45f3f"; // Replace with your RapidAPI key
    const API_HOST = "cities-temperature.p.rapidapi.com"; // Replace with the host of the API you're using
    const URL = "https://cities-temperature.p.rapidapi.com/weather/v1"; // Replace with the specific endpoint URL

    const options = {
      method: "GET",
      url: URL,
      params: { city: "Port Louis", units: "metric" },
      headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": API_HOST,
      },
    };

    axios
      .request(options)
      .then((response) => {
        setTemperature(response.data["temperatureC"]);
      })
      .catch((error) => {
        console.error("Error fetching the weather data", error);
      });
  }, []);

  return (
    <div className="md:flex flex-col text-white hidden">
      <div className="bg-black flex items-center p-1 px-5">
        <div className="flex items-center text-white font-semibold">
          {isDaytime ? (
            <WiCloudy size={25} color="white" className="text-white" />
          ) : (
            <HiMoon size={18} />
          )}
          <p className="text-[15px] font-bold">
            {temperature ? temperature : "23"}&deg;<sup>c</sup>
          </p>
          <p className="text-[11px] pl-2">Port Louis</p>
        </div>
        <div className="flex items-center ml-7 gap-2 text-[11px]">
          <p>{formattedDate}</p>
        </div>
        <div className="flex text-[11px] ml-7 text-white gap-3">
          <p>Download The App:</p>
          <ul className="flex justify-center items-center gap-3">
            <Link to={`https://apps.apple.com/us/app/le-matinal/id1573438989`}>
              <FaApple />
            </Link>
            <Link
              to={`https://play.google.com/store/apps/details?id=com.lematinal`}
            >
              <FaPlay />
            </Link>
          </ul>
        </div>
        <div className="flex items-center text-white ml-auto gap-4">
          <ul className="flex gap-3 justify-center">
            <li>
              <Link to={`https://www.facebook.com/lematinalmedia`}>
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link to={`https://www.instagram.com/lematinal_media/`}>
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link to={`https://twitter.com/lematinal_media`}>
                <FaXTwitter />
              </Link>
            </li>
            <li>
              <Link
                to={`https://www.youtube.com/channel/UC1lu1c_4zbhOuneNIq4Qmug`}
              >
                <FaYoutube />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex text-[11px] justify-center items-center ml-7">
          <p>
            <Link
              to="https://lematinal.media/"
              className="hover:text-[#C80000]"
            >
              {" "}
              Read in French{" "}
            </Link>
          </p>
          <FaLongArrowAltRight size={18} className="ml-1" />
        </div>
      </div>
      <div className="p-5 flex justify-between items-center">
        <img
          src="https://lematinal.media/wp-content/uploads/2021/06/Le-Matinal-Header-Logo.png"
          alt="Logo"
          className="w-[15%] h-[10%]"
        />
        <img
          src="https://lematinal.media/wp-content/uploads/2023/10/Stop-Accident-Banner-Ad.png"
          alt="Banner"
          className="w-[50%]"
        />
      </div>
      <div className="mt-4 mx-2">
        <hr />
      </div>
    </div>
  );
};

export default NavBarWeb;

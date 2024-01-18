import React, { useEffect, useState } from "react";
import {
  FaApple,
  FaPlay,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { FaWhatsapp, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { WiCloudy } from "react-icons/wi";
import { HiSun, HiMoon } from "react-icons/hi";
import axios from "axios";

const NavBar = () => {
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
    <div className="flex flex-col text-white ">
      <div className="bg-black flex items-center p-1 px-5">
        <div className="flex items-center text-white font-semibold ">
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
            <li>
              <FaApple />
            </li>
            <li>
              <FaPlay />
            </li>
          </ul>
        </div>
        <div className="flex items-center text-white ml-auto gap-4">
          <ul className="flex gap-3  justify-center">
            <li>
              <a href="">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="">
                <FaInstagram />
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
        <div className="flex text-[11px] justify-center items-center ml-7">
          <p>
            <a href="https://lematinal.media/"> Read in French </a>
          </p>
          <FaLongArrowAltRight size={18} className="ml-1" />
        </div>
      </div>
      <div className="mt-4 mx-5 flex justify-between items-center">
        <img
          src="https://lematinal.media/wp-content/uploads/2021/06/Le-Matinal-Header-Logo.png"
          alt=""
          className="w-[16%] h-[10%]"
        />
        <img
          src="https://lematinal.media/wp-content/uploads/2023/10/Stop-Accident-Banner-Ad.png"
          alt=""
          className="w-[55%]"
        />
      </div>
      <div className="mt-4 mx-2">
        <hr />
      </div>
    </div>
  );
};

export default NavBar;
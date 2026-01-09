"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";

function CarouselComponent() {

  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

const [newsData, setNewsData] = useState([]);

  const getNews = async () => {
    try {
      let result = await fetch("https://marketing-dashboard.integerstech.com/analyze/trends/global-news/latest");
      let data = await result.json();
      const newsArray = data
        .split("\n")                 
        .map(item => item.trim())
        .filter(Boolean);            // remove empty string
      setNewsData(newsArray);
     // console.log(newsArray);
    }
    catch (err) {
      console.log("something went wrong...");
    }
  }

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="h-full overflow-hidden rounded-lg">
      <Slider {...settings} className="h-full dark-card">
        {newsData?.map((txt, i) => {
          return (
            <div className="h-full flex items-center justify-center rounded-lg p-2">
              <h3 className="text-center font-bold text-gray-300 py-0.5">News {i+1}</h3>
              <div className="flex-1 overflow-hidden text-xs lg:text-xl">
               {txt}
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default CarouselComponent;

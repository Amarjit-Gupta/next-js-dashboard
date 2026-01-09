// "use client";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick"

// function CarouselComponent() {

//     var settings = {
//         // dots: true,
//         arrows: false,
//         infinite: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 20000,
//         pauseOnHover: true
//     };

//     return (
//         <div className="slider-container border h-full border-green-500">
//             <Slider {...settings}>
//                 <div className="border border-red-500">
//                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit qui quas eos harum reprehenderit assumenda necessitatibus modi consectetur esse possimus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, amet.                </div>


//                 <div className="border ">
//                     <h3 className="border text-center font-bold text-gray-500 py-0.5">Month</h3>
//                     <div className="overflow-hidden rounded-lg border px-2">

//                         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita repellat eius laborum ullam ducimus debitis porro d
//                     </div>
//                 </div>
//                 <div className="border ">
//                     <h3 className="border text-center font-bold text-gray-500 py-0.5">Year</h3>
//                     <div className="overflow-hidden rounded-lg border px-2">

//                         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita repellat eius laborum ullam ducimus debitis p
//                     </div>
//                 </div>
//             </Slider>
//         </div>
//     );
// }

// export default CarouselComponent;





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
      //  console.log("iamges--1: ",data);
      const newsArray = data
        .split("\n")                 
        .map(item => item.trim())    // extra white spaces
        .filter(Boolean);            // remove empty string
      setNewsData(newsArray);
      console.log(newsArray);
    }
    catch (err) {
      console.log("something went wrong...");
    }
  }

  useEffect(() => {
    getNews();
  }, []);

  console.log("news: ", newsData);

  // let a1 = "U.S. military operation captures Venezuelan President Nicolás Maduro.Yemen faces worsening humanitarian crisis amid funding cuts.Iran protests escalate; UN warns against bloodshed.Central African Republic's President Touadéra reelected amid tensions.China bans dual-use exports to Japan amid rising military tensions.6.2 magnitude earthquake strikes western Japan; no tsunami warning.Gaza meets basic food needs for first time since 2023.Escalating violence in Sudan raises civilian safety concerns.U.N. Security Council divided over U.S. actions in Venezuela.Flash floods in Indonesia leave 14 dead, several missing."



  return (
    <div className="h-full overflow-hidden rounded-lg">
      <Slider {...settings} className="h-full bg-gray-100">
        {newsData?.map((v, i) => {
          return (
            <div className="h-full flex items-center justify-center rounded-lg p-1">
              <h3 className="text-center font-bold text-gray-500 py-0.5">News {i+1}</h3>
              <div className="flex-1 overflow-hidden text-xs lg:text-xl">
               {v}
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  );
}

export default CarouselComponent;

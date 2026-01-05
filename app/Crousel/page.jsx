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

function CarouselComponent() {
  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 20000,
    pauseOnHover: true,
  };

  return (
    <div className="h-full overflow-hidden">
      <Slider {...settings} className="h-full">
        <div className="h-full flex items-center justify-center border border-red-500 ">
          <h3 className="text-center font-bold text-gray-500 py-0.5">Today</h3>
          <div className="flex-1 overflow-hidden border text-[17px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita repellat eius laborum ullam ducimus Lorem ipsum dolor sit Lorem ipsum dolor sit dolor sit Lorem ipsum dolor sit dolor sit dolor sit Lorem ipsum dolor sit
          </div>
        </div>

        <div className="h-full flex flex-col border">
          <h3 className="text-center font-bold text-gray-500 py-0.5">Month</h3>
          <div className="flex-1 overflow-hidden border text-[17px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita repellat eius laborum ullam ducimus Lorem ipsum dolor sit Lorem ipsum dolor sit dolor sit Lorem ipsum dolor sit dolor sit dolor sit Lorem ipsum dolor sit
          </div>
        </div>

        <div className="h-full flex flex-col border ">
          <h3 className="text-center font-bold text-gray-500 py-0.5">Year</h3>
          <div className="flex-1 overflow-hidden border text-[17px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita repellat eius laborum ullam ducimus Lorem ipsum dolor sit Lorem ipsum dolor sit dolor sit Lorem ipsum dolor sit dolor sit dolor sit Lorem ipsum dolor sit
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default CarouselComponent;

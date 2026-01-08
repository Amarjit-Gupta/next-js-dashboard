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
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <div className="h-full overflow-hidden rounded-lg">
      <Slider {...settings} className="h-full bg-gray-100">

        {/* 1 */}
        <div className="h-full flex items-center justify-center rounded-lg p-1">
          <h3 className="text-center font-bold text-gray-500 py-0.5">News 1</h3>
          <div className="flex-1 overflow-hidden text-xs lg:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita repellat eius laborum ullam ducimus Lorem ipsum
          </div>
        </div>

        {/* 2 */}
        <div className="h-full flex items-center justify-center rounded-lg p-1">
          <h3 className="text-center font-bold text-gray-500 py-0.5">News 2</h3>
          <div className="flex-1 overflow-hidden text-xs lg:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita repellat eius laborum ullam ducimus Lorem ipsum
          </div>
        </div>

        {/* 3 */}
        <div className="h-full flex items-center justify-center rounded-lg p-1">
          <h3 className="text-center font-bold text-gray-500 py-0.5">News 3</h3>
          <div className="flex-1 overflow-hidden text-xs lg:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita repellat eius laborum ullam ducimus Lorem ipsum
          </div>
        </div>


        {/* 4 */}
        <div className="h-full flex items-center justify-center rounded-lg p-1">
          <h3 className="text-center font-bold text-gray-500 py-0.5">News 4</h3>
          <div className="flex-1 overflow-hidden text-xs lg:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita repellat eius laborum ullam ducimus Lorem ipsum
          </div>
        </div>

        {/* 5 */}
        <div className="h-full flex items-center justify-center rounded-lg p-1">
          <h3 className="text-center font-bold text-gray-500 py-0.5">News 5</h3>
          <div className="flex-1 overflow-hidden text-xs lg:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita repellat eius laborum ullam ducimus Lorem ipsum
          </div>
        </div>

        {/* 6 */}
        <div className="h-full flex items-center justify-center rounded-lg p-1">
          <h3 className="text-center font-bold text-gray-500 py-0.5">News 6</h3>
          <div className="flex-1 overflow-hidden text-xs lg:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita repellat eius laborum ullam ducimus Lorem ipsum
          </div>
        </div>

        {/* 7 */}
        <div className="h-full flex items-center justify-center rounded-lg p-1">
          <h3 className="text-center font-bold text-gray-500 py-0.5">News 7</h3>
          <div className="flex-1 overflow-hidden text-xs lg:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita repellat eius laborum ullam ducimus Lorem ipsum
          </div>
        </div>

        {/* 8 */}
        <div className="h-full flex items-center justify-center rounded-lg p-1">
          <h3 className="text-center font-bold text-gray-500 py-0.5">News 8</h3>
          <div className="flex-1 overflow-hidden text-xs lg:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita repellat eius laborum ullam ducimus Lorem ipsum
          </div>
        </div>

        {/* 9 */}
        <div className="h-full flex items-center justify-center rounded-lg p-1">
          <h3 className="text-center font-bold text-gray-500 py-0.5">News 9</h3>
          <div className="flex-1 overflow-hidden text-xs lg:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita repellat eius laborum ullam ducimus Lorem ipsum
          </div>
        </div>

        {/* 10 */}
        <div className="h-full flex items-center justify-center rounded-lg p-1">
          <h3 className="text-center font-bold text-gray-500 py-0.5">News 10</h3>
          <div className="flex-1 overflow-hidden text-xs lg:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita repellat eius laborum ullam ducimus Lorem ipsum
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default CarouselComponent;

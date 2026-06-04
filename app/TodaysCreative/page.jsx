"use client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { backend_url } from "../URL";
const TodaysCreative = () => {
  const [imgURL, setImgURL] = useState([]);

  const getImageURL = async () => {
    try {
      let response = await fetch(`${backend_url}/analyze/daily-creatives`);

      if (!response.ok) {
        throw new Error(`Server Error: ${response.status}`);
      }

      let data = await response.json();
      // console.log("images: ",data?.images);

      if (!data?.images) {
        throw new Error("Images data not found");
      }

      setImgURL(data?.images);
    } catch (err) {
      // console.log("something went wrong...");
      toast.error("something went wrong...", {
        duration: 3000,
        position: "bottom-right",
      });
    }
  };

  useEffect(() => {
    getImageURL();
  }, []);

  // console.log("img",imgURL);

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <h2 className="font-medium text-xs lg:text-lg mb-2">Today’s Creative</h2>
      <div className="flex-1 grid grid-cols-2 gap-3 overflow-hidden">
        <div className="w-full overflow-hidden rounded-lg">
          <img src={imgURL[0]?.url} alt="image" className="w-full h-full" />
        </div>
        <div className="w-full overflow-hidden rounded-lg">
          <img src={imgURL[1]?.url} alt="image" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default TodaysCreative;

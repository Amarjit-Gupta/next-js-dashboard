"use client"
import { useEffect, useState } from 'react';

const TodaysCreative = () => {

  const [imgURL, setImgURL] = useState([]);

  const getImageURL = async () => {
    try {
      let result = await fetch("https://marketing-dashboard.integerstech.com/analyze/daily-creatives");
      let data = await result.json();
      // console.log("iamges: ",data?.images);
      setImgURL(data?.images);
    }
    catch (err) {
      console.log("something went wrong...");
    }
  }

  useEffect(() => {
    getImageURL();
  }, []);

  // console.log("im",imgURL);

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <h2 className="font-medium text-xs lg:text-lg mb-2">
        Today’s Creative
      </h2>
      <div className="flex-1 grid grid-cols-2 gap-3 overflow-hidden">
        <div className="w-full overflow-hidden rounded-lg">
          <img
            src={imgURL[0]?.url}
            alt="image"
            className="w-full h-full"
          />
        </div>
        <div className="w-full overflow-hidden rounded-lg">
          <img
            src={imgURL[1]?.url}
            alt="image"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TodaysCreative;

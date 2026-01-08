// import Image from 'next/image';

// const TodaysCreative = () => {
//   return (
//     <div className="h-full flex flex-col border">

//       {/* Header – fixed height */}
//       <h2 className="font-bold text-xl ">
//         Todays Creative
//       </h2>

//       {/* Images – remaining space */}
//       <div className="grid grid-cols-2 gap-4 ">

//         <div className="overflow-hidden rounded-lg border">
//           {/* <img
//             src="./R.jpeg"
//             alt="img"
//           /> */}

//      <Image
//   src="/R.jpeg"
//   alt="Example image"
//   width={100}
//   height={50}
//   className="object-cover w-auto h-auto"
//   priority
// />

//         </div>

//         <div className="overflow-hidden rounded-lg border">
//           <Image
//   src="/R.jpeg"
//   alt="Example image"
//   width={100}
//   height={50}
//   className="object-cover w-auto h-auto"
//   priority
// />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default TodaysCreative;




import Image from 'next/image';

let SIGNED_URL = "https://dashboard-asset-library.s3.amazonaws.com/assets/cf118093-9035-46f3-aa4d-2da8de215558_pharma.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA5RA6WRQ325X2CWDH%2F20260108%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20260108T060559Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=fb4737570aa9f47783c2d80086ad9de9efa30c48545764ffad7289aedf47b1b0";

const TodaysCreative = () => {
  return (
    <div className="h-full flex flex-col overflow-hidden">

      {/* Header – fixed height */}
      <h2 className="font-medium text-xs lg:text-lg mb-2">
        Todays Creative
      </h2>

      {/* Images – fill remaining space */}
      <div className="flex-1 grid grid-cols-2 gap-3 overflow-hidden">

        {/* Image 1 */}
        {/* <div className="relative overflow-hidden rounded-lg border">
          <Image
            src="/R.jpeg"
            alt="Example image"
            fill
            className="object-cover"
            priority
          />
        </div> */}
        <div className="w-full overflow-hidden rounded-lg border border-gray-200">
          <img
            src="/a3.jpg"
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>


        {/* <img src="https://dashboard-asset-library.s3.amazonaws.com/assets/cf118093-9035-46f3-aa4d-2da8de215558_pharma.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA5RA6WRQ325X2CWDH%2F20260108%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20260108T060559Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=fb4737570aa9f47783c2d80086ad9de9efa30c48545764ffad7289aedf47b1b0" className='object-cover' alt="" /> */}


        {/* Image 2 */}
        <div className="relative overflow-hidden rounded-lg border border-gray-200 w-full">
          <Image
            src="/about.png"
            alt="Example image"
            fill
            className="object-cover"
            priority
            sizes="50vw"
          />
        </div>

      </div>
    </div>
  );
};

export default TodaysCreative;

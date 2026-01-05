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

const TodaysCreative = () => {
  return (
    <div className="h-full flex flex-col overflow-hidden">

      {/* Header – fixed height */}
      <h2 className="font-bold text-xl mb-2">
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

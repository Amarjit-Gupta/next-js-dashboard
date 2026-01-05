// const KPI = ({ txt1, txt2, val1, val2 }) => {

//   return (
//     <div className="h-full">
//       <div className="bg-white h-full rounded-2xl p-3 shadow-sm border border-gray-100 ">

//         <p className="">
//           <span className="text-gray-500 font-medium">{txt1}</span> :
//           <br />
//            <span className="font-bold text-2xl">{val1}</span>
//         </p>

//         {txt2 && val2 != null && (
//           <p className="mt-1">
//             {/* {txt2}: {val2} */}

//             <span className="text-gray-500 font-medium">{txt2}</span> : <span className="font-bold text-2xl">{val2}</span>
//           </p>
//         )}

//       </div>
//     </div>
//   );
// };

// export default KPI;






const KPI = ({ txt1, txt2, val1, val2 }) => {
  const showSecond = txt2 && val2 != null;

  return (
    <div className="h-full">
      <div className="bg-white h-full rounded-xl p-3 border border-gray-200">

        <p>
          <span className="text-gray-500 font-medium">{txt1}</span> :&nbsp;

          {!showSecond && <br />}

          <span className="font-bold text-2xl">
            {val1}
          </span>
        </p>

        {showSecond && (
          <p className="mt-1">
            <span className="text-gray-500 font-medium">{txt2}</span> :
            <span className="font-bold text-2xl ml-1">{val2}</span>
          </p>
        )}

      </div>
    </div>
  );
};

export default KPI;
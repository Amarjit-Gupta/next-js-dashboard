// const Emailer = () => {
//     return(
//         <div className=" grid grid-cols-2 gap-5 p-3">
//             <div className="">
//                 <h1 className="font-bold text-xl h-10 border">Emailer</h1>
//                 <div className="border border-red-500 flex-1 grid grid-cols-2">
//                     <div className="border">d</div>
//                     <div className="border">d</div>
//                     <div className="border">d</div>
//                     <div className="border">d</div>
//                 </div>
//             </div>
//             <div className="border">dcd</div>
//         </div>
//     );
// }

// export default Emailer;







const Emailer = () => {
    return (
        <div className="grid grid-cols-2 gap-3 h-full">

            <div className="flex flex-col h-full">

                <h1 className="font-medium text-xs lg:text-lg mb-2">
                    Emailer
                </h1>

                <div className=" border-red-500 flex-1 grid grid-cols-2 gap-2">
                    <div className=" flex flex-col justify-center px-1 bg-gray-100 rounded-lg">
                        <p className="text-gray-500 text-xs xl:text-sm wrap-break-word">Total Send</p>
                        <p className="text-xs lg:text-xl">65455</p>
                    </div>
                    <div className=" flex flex-col justify-center px-1 bg-gray-100 rounded-lg">
                        <p className="text-gray-500  text-xs xl:text-sm wrap-break-word">Click Rate</p>
                        <p className="text-xs lg:text-xl">65455</p>
                    </div>
                    <div className=" flex flex-col justify-center px-1 bg-gray-100 rounded-lg">
                        <p className="text-gray-500  text-xs xl:text-sm wrap-break-word">Open Rate</p>
                        <p className="text-xs lg:text-xl">65455</p>
                    </div>
                    <div className=" flex flex-col justify-center px-1 bg-gray-100 rounded-lg">
                        <p className="text-gray-500  text-xs xl:text-sm wrap-break-word">Subscribers</p>
                        <p className="text-xs lg:text-xl">65455</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col h-full">

                <h1 className="font-medium text-xs lg:text-lg mb-2">Ad</h1>

                <div className="flex-1 grid grid-cols-2 gap-2">
                    <div className=" flex flex-col justify-center px-1 bg-gray-100 rounded-lg">
                        <p className="text-gray-500 text-xs xl:text-sm wrap-break-word">Keyword</p>
                        <p className="text-xs lg:text-xl">65455</p>
                    </div>
                    <div className=" flex flex-col justify-center px-1 bg-gray-100 rounded-lg">
                        <p className="text-gray-500 text-xs xl:text-sm wrap-break-word">Campaign</p>
                        <p className="text-xs lg:text-xl">65455</p>
                    </div>
                    <div className=" flex flex-col justify-center px-1 bg-gray-100 rounded-lg">
                        <p className="text-gray-500 text-xs xl:text-sm">Ad Spent</p>
                        <p className="text-xs lg:text-xl">65455</p>
                    </div>
                    <div className=" flex flex-col justify-center px-1 bg-gray-100 rounded-lg">
                        <p className="text-gray-500 text-xs xl:text-sm wrap-break-word">Competitor</p>
                        <p className="text-xs lg:text-xl">65455</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Emailer;



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
// };

// export default Emailer;







const Emailer = () => {
    return (
        <div className="grid grid-cols-2 gap-5 h-full">

            <div className="flex flex-col h-full">

                <h1 className="font-bold text-xl mb-2">
                    Emailer
                </h1>

                <div className="border border-red-500 flex-1 grid grid-cols-2 gap-2">
                    <div className="border flex flex-col justify-center px-1">
                        <p className="text-gray-500">Total Send:</p>
                        <p className="text-xl">65455</p>
                    </div>
                    <div className="border flex flex-col justify-center px-1">
                        <p className="text-gray-500 ">Click Rate:</p>
                        <p className="text-xl">65455</p>
                    </div>
                    <div className="border flex flex-col justify-center px-1">
                        <p className="text-gray-500 ">Open Rate:</p>
                        <p className="text-xl">65455</p>
                    </div>
                    <div className="border flex flex-col justify-center px-1">
                        <p className="text-gray-500 ">Subscribers:</p>
                        <p className="text-xl">65455</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col h-full">

                <h1 className="font-bold text-xl mb-2">
                    Ad Spent
                </h1>

                <div className="border border-red-500 flex-1 grid grid-cols-2 gap-2">
                    <div className="border flex flex-col justify-center px-1">
                        <p className="text-gray-500 text-[15px]">Best keyword:</p>
                        <p className="text-xl">65455</p>
                    </div>
                    <div className="border flex flex-col justify-center px-1">
                        <p className="text-gray-500">Best Ad:</p>
                        <p className="text-xl">65455</p>
                    </div>
                    <div className="border flex flex-col justify-center px-1">
                        <p className="text-gray-500">Best product:</p>
                        <p className="text-xl">65455</p>
                    </div>
                    <div className="border flex flex-col justify-center px-1">
                        <p className="text-gray-500">Best product:</p>
                        <p className="text-xl">65455</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Emailer;



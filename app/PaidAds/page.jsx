const PaidAds = () => {
    return(
        <div className="flex flex-col h-full">

                <h1 className="font-medium text-xs lg:text-lg mb-2">Paid Ads</h1>

                <div className="flex-1 grid grid-cols-2 gap-2">
                    <div className=" flex flex-col justify-center px-1 bg-gray-100 rounded-lg">
                        <p className="text-gray-500 text-[8px] lg:text-sm wrap-break-word">Keyword</p>
                        <p className="text-xs lg:text-xl">65455</p>
                    </div>
                    <div className=" flex flex-col justify-center px-1 bg-gray-100 rounded-lg">
                        <p className="text-gray-500 text-[8px] lg:text-sm wrap-break-word">Campaign</p>
                        <p className="text-xs lg:text-xl">65455</p>
                    </div>
                    <div className=" flex flex-col justify-center px-1 bg-gray-100 rounded-lg">
                        <p className="text-gray-500 text-[8px] lg:text-sm">Ad Spent</p>
                        <p className="text-xs lg:text-xl">65455</p>
                    </div>
                    <div className=" flex flex-col justify-center px-1 bg-gray-100 rounded-lg">
                        <p className="text-gray-500 text-[7px] lg:text-sm wrap-break-word">Competitor</p>
                        <p className="text-xs lg:text-xl">65455</p>
                    </div>
                </div>
            </div>
    );
};
export default PaidAds;
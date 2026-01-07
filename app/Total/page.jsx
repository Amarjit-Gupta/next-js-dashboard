import Image from "next/image";


const Total = () => {
  return (
    <div className="grid grid-cols-3 gap-3 h-full p-3">
      <CardData title1="Bounce" title2="Last month" value1={'45%'} value2={'50%'} icon="/frame-1.svg"/>
      <CardData title1="Eng. time" title2="Last month" value1={'20m'} value2={'20m'} icon="/frame-2.svg" />
      <CardData title1="Clicks" title2="Last month" value1={8} value2={15} icon="/frame-3.svg" />
    </div>
  );
};

export default Total;


const CardData = ({ title1, title2, value1, value2,icon }) => {
  // console.log(typeof(value1));
  // console.log(typeof(value2));
  return (
    <div className="bg-gray-100 shadow-xs rounded-lg p-2 flex flex-col justify-around items-center">

      {/* Icon */}
      <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center relative">
        <Image
          src={icon}
          alt="icon"
          fill
          className="object-cover rounded-full"
          sizes="(max-width: 640px) 40px, 40px"
          priority
        />
    
      </div>

      {/* First metric */}
      <div className="text-center">
        <p className="text-gray-500 font-medium text-xs">{title1}</p>
        <p className="text-xs font-medium lg:font-bold">{value1}</p>
      </div>

      {/* Second metric */}
      <div className="text-center">
        <p className="text-gray-500 font-medium text-xs">{title2}</p>
        <p className="text-xs font-medium lg:font-bold">{value2}</p>
      </div>
    </div>
  );
};
import Image from "next/image";


const Total = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 h-full p-3">
      <CardData title1="Bounce rate" title2="Last month" value1={'45%'} value2={'50%'} />
      <CardData title1="Engagement time" title2="Last month" value1={'20m 15s'} value2={'20m 15s'} />
      <CardData title1="Clicks" title2="Last month" value1={8} value2={15} />
    </div>
  );
};

export default Total;


const CardData = ({ title1, title2, value1, value2 }) => {
  // console.log(typeof(value1));
  // console.log(typeof(value2));
  return (
    <div className="bg-gray-100 shadow-xs rounded-lg p-4 flex flex-col justify-between items-center">

      {/* Icon */}
      <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center border relative">
        <Image
          src="/about.png"
          alt="icon"
          fill
          className="object-cover rounded-full"
          sizes="(max-width: 640px) 40px, 40px"
          priority
        />
      </div>

      {/* First metric */}
      <div className="text-center border">
        <p className="text-gray-500 font-medium">{title1}:</p>
        <p className="text-2xl font-bold">{value1}</p>
      </div>

      {/* Second metric */}
      <div className="text-center border">
        <p className="text-gray-500 font-medium">{title2}:</p>
        <p className="text-2xl font-bold">{value2}</p>
      </div>
    </div>
  );
};









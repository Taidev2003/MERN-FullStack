const Card = () => {
  const images = require("../assets/images/card1.jpg");
  return (
    <div className="flex flex-col justify-start items-start leading-none ">
      <img
        src={images}
        alt="..."
        className="w-[285px] h-[428px] object-contain"
      />
      <div className=" space-y-2 leading-4">
        <p className="text-sm font-light">Fantasy</p>
        <p className="text-base font-medium">The Born of APLEX</p>
        <p className="text-base font-medium">$26.00</p>
      </div>
    </div>
  );
};

export default Card;

import Button from "../buttonComponents/buttonComponents";

const Banner = () => {
  const imgUrl = require("../assets/images/banner.jpg");
  return (
    <section className=" bg-[#f2f5f7] ">
      <div className=" grid grid-cols-2 w-[80%] mx-auto    ">
        <div className="flex flex-col justify-start items-start ml-10">
          <p className="flex text-[#5f4ecb] text-base pt-10 my-5 ml-10  font-medium space-x-2 tracking-wider uppercase">
            new release
          </p>
          <div className="my-5 ml-10  text-7xl leading-relaxed font-medium">
            The Sons of the Empire
          </div>
          <p className="my-5 mx-10 w-[70%]">
            Justo habitant at augue ac sed proin consectetur ac urna nisl elit
            nulla facilisis viverra dolor sagittis nisi risus egestas adipiscing
            nibh euismod.
          </p>
          <div className="my-5 space-x-3 ml-10">
            <Button
              className="btn btn-active bg-[#5f4ecb] text-white hover:bg-[#5f4ecb]"
              label="Buy Now"
              type="button"
            />

            <Button
              label="Read Sample"
              type="button"
              className="btn btn-outline text-[#bdb9e7] hover:bg-[#5f4ecb] "
            />
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={imgUrl}
            alt="banner"
            className=" p-5 mx-10 mb-10 object-contain h-400 w-600 "
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;

import React from "react";
const Title = (props) => {
  const { title, description } = props;

  return (
    <div className="flex flex-col justify-center items-center  text-center leading-4 space-y-4 my-4 ">
      <h2 className="font-semibold text-4xl ">{title}</h2>
      <p className="w-[70%] text-center leading-8">{description}</p>
    </div>
  );
};

export default Title;

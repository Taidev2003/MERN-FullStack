import React from "react";
import Header from "../HederComponent/HeaderComponents";

const DefaultPage = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default DefaultPage;

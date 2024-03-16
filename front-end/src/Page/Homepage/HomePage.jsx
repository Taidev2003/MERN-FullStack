import Banner from "../../Components/BannerComponents/Banner";
import Card from "../../Components/Card/Card";
import Footer from "../../Components/Footer/Footer";

import Title from "../../Components/Title/Title";
import ToNow from "../../Components/ToNow/ToNow";
import Collection from "../../Components/article/Collection";
import SaleVideo from "../../Components/asside/SaleComponet";
import Button from "../../Components/buttonComponents/buttonComponents";
import Listbook from "../../Components/listBook/listbook";
import "./Homepage.css";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Collection />
      <div className="w-[80%] mx-auto px-36 text-center">
        <Title
          title="Best Selling Books"
          description="Vulputate vulputate eget cursus nam ultricies mauris, malesuada elementum lacus arcu, sit dolor ipsum, ac felis, egestas vel tortor eget aenean."
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-[70%] mx-auto ">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="text-center my-10">
        <Button
          label="Shop All Books"
          type="button"
          className="btn btn-outline text-[#bdb9e7] hover:bg-[#5f4ecb] "
        />
      </div>
      <div className="my-10">
        <SaleVideo />
      </div>
      <div className=" text-center my-20  ">
        <Listbook />
      </div>
      <ToNow />
      <Footer />
    </div>
  );
};

export default HomePage;

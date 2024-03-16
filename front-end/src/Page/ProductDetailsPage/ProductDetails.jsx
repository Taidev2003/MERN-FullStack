import { useState } from "react";
import InputField from "../../Components/FormInput/InputField";
import Button from "../../Components/buttonComponents/buttonComponents";
import Card from "../../Components/Card/Card";
import ToNow from "../../Components/ToNow/ToNow";
import Footer from "../../Components/Footer/Footer";

const ProductDetails = () => {
  const imgURL = require("../../Components/assets/images/card1.jpg");
  const [numberValue, setNumberValue] = useState(1);
  return (
    <section className="bg-[#f2f5f7]">
      <div className="bg-white w-[70%] mx-auto">
        <div className=" my-10 grid  lg:grid-cols-2 gap-2">
          <img src={imgURL} alt="..." className="w-[493px] h-[740px] p-10" />
          <div className="flex-col p-10 font-extralight space-y-4">
            <div className="text-sm breadcrumbs  ">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="*">Fantasy</a>
                </li>
                <li>The Born of APLEX</li>
              </ul>
            </div>
            <div className="text-base">Fantasy</div>
            <div className="text-3xl font-semibold">The Born of APLEX</div>
            <div className="flex items-center  space-x-2 ">
              <span className="text-2xl font-medium">$26.00</span>
              <span>+ Free Shipping</span>
            </div>
            <div className="pr-10 tracking-widest">
              Platea mauris in sit aliquam commodo ipsum, pharetra tempus proin
              diam metus eget quis lobortis commodo scelerisque etiam placerat
              amet, commodo tincidunt pellentesque porttitor elit est cras eu
              duis bibendum viverra eu est mattis vitae viverra vel non egestas
              commodo faucibus mi ipsum cursus euismod risus morbi ut.
            </div>
            <div className="space-x-4 py-4">
              <InputField
                inputType="number"
                data={numberValue}
                setData={setNumberValue}
                classStyle="input input-bordered w-16"
              />
              <Button
                label="Add To Cart"
                type="button"
                className="btn btn-outline w-[250px]  text-[#bdb9e7] hover:bg-[#5f4ecb] "
              />
            </div>
          </div>
        </div>
        {/* section2 */}
        <div className=" mt-10  ">
          <div role="tablist" className="tabs tabs-bordered px-4">
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="Description"
              checked
            />
            <div role="tabpanel" className="tab-content p-10 space-y-4">
              <p>
                Platea mauris in sit aliquam commodo ipsum, pharetra tempus
                proin diam metus eget quis lobortis commodo scelerisque etiam
                placerat amet, commodo tincidunt pellentesque porttitor elit est
                cras eu duis bibendum viverra eu est mattis vitae viverra vel
                non egestas commodo faucibus mi ipsum cursus euismod risus morbi
                ut.
              </p>
              <p>
                Amet in pretium libero vitae mattis at bibendum iaculis
                suspendisse enim interdum vel commodo sed est placerat volutpat
                commodo adipiscing odio egestas euismod egestas lacus iaculis
                aenean porttitor facilisis cras elit felis purus vel mi, elit
                cursus scelerisque lectus morbi elementum vulputate augue non
                rhoncus morbi nisl, volutpat integer blandit nullam pellentesque
                ornare quam tincidunt pharetra, volutpat purus elementum, enim
                et feugiat quam congue.
              </p>
            </div>

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="Review"
            />
            <div role="tabpanel" className="tab-content p-10 ">
              There are no reviews yet.
              <div className="w-full mx-auto border-2 border-solid my-4 flex flex-col gap-2 font-normal ">
                <div className="mx-4 pt-5 space-y-3">
                  <p className="text-xl">
                    Be the first to review “The Born of APLEX”
                  </p>
                  <p>
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                </div>
                <div className="flex flex-row space-x-2 mx-4">
                  <p>Your Rating *: </p>
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                  </div>
                </div>
                <div className="mx-4 space-y-2">
                  <p>Your Review *:</p>

                  <InputField
                    inputType="textarea"
                    data="Write your review   "
                    classStyle="textarea textarea-bordered textarea-md w-full     "
                  />
                </div>
                <div className=" grid grid-cols-2 justify-center space-x-4 mx-4">
                  <div className="flex flex-col  leading-5">
                    <p>Name *</p>
                    <InputField
                      inputType="text"
                      classStyle="input input-bordered input-sm w-full my-4   "
                    />
                  </div>
                  <div className="flex flex-col  leading-5">
                    <p>Email *</p>
                    <InputField
                      inputType="text"
                      classStyle="input input-bordered input-sm w-full my-4"
                    />
                  </div>
                </div>
                <div className="form-control items-start  mx-4">
                  <label className="label cursor-pointer space-x-2">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox "
                    />
                    <span className="label-text">
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </span>
                  </label>
                </div>
                <div className="mx-4 my-4">
                  <Button
                    label="Submit"
                    type="button"
                    className="btn btn-outline   text-[#bdb9e7] hover:bg-[#5f4ecb] "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex flex-col p-10 ">
            <p className="text-4xl font-semibold">Related products</p>

            <div className="grid grid-cols-3 justify-start gap-4 w-[80%]  ">
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
      <ToNow />
      <Footer />
    </section>
  );
};

export default ProductDetails;

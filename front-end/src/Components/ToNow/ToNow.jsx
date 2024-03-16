import InputField from "../FormInput/InputField";
import Title from "../Title/Title";
import Button from "../buttonComponents/buttonComponents";

const ToNow = () => {
  return (
    <div className="bg-white w-full mx-auto py-28 px-36 text-center my-10">
      <Title
        title="Be the first to know"
        description="ectus amet scelerisque fusce est venenatis, eget enim dolor amet vitae pharetra"
        className="text-center"
      />
      <div className="flex flex-row justify-center items-center space-x-4 my-4">
        <InputField
          data="Your email please"
          classStyle="input input-bordered w-full max-w-xs"
        />
        <Button
          label="Subcribe"
          type="button"
          className="btn btn-outline w-40 text-[#bdb9e7] hover:bg-[#5f4ecb] "
        />
      </div>
    </div>
  );
};

export default ToNow;

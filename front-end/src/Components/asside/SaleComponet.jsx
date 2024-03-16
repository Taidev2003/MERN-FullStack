const SaleVideo = () => {
  return (
    <section>
      <div className="grid grid-cols-1  lg:grid-cols-2 w-[70%] mx-auto gap-x-4 ">
        <div className="">
          {" "}
          <img
            src="https://websitedemos.net/book-store-02/wp-content/uploads/sites/834/2021/04/author-book-store-latest-movie-bg-img.jpg"
            alt="..."
            className="object-cover  brightness-90 w-full"
          />
        </div>
        <div className="flex flex-col px-10 leading-normal   ">
          <div>
            <p className="flex flex-row gap-3 items-center my-4 text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.43em"
                height="1em"
                viewBox="0 0 256 180"
              >
                <path
                  fill="#f00"
                  d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"
                ></path>
                <path
                  fill="#fff"
                  d="m102.421 128.06l66.328-38.418l-66.328-38.418z"
                ></path>
              </svg>
              <p>Latest On YouTube</p>
            </p>
            <p className="text-3xl font-semibold my-5">
              The Descendant of Hope
            </p>
            <p className="w-[90%]">
              Tellus tellus mattis pulvinar nulla euismod fermentum rhoncus sed
              vestibulum neque praesent pharetra ut fames viverra suscipit
              gravida dictumst volutpat ullamcorper lacus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaleVideo;

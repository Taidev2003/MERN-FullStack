import Title from "../Title/Title";

const Listbook = () => {
  const item = [
    {
      name: "Teebo: A Fallen Empire",
      image:
        "https://websitedemos.net/book-store-02/wp-content/uploads/sites/834/2021/04/author-book-store-audio-book-img-1.jpg",
    },
    {
      name: "Future and Beyond",
      image:
        "https://websitedemos.net/book-store-02/wp-content/uploads/sites/834/2021/04/author-book-store-audio-book-img-2.jpg",
    },
    {
      name: "The Darkside of IT",
      image:
        "https://websitedemos.net/book-store-02/wp-content/uploads/sites/834/2021/04/author-book-store-audio-book-img-3.jpg",
    },
    {
      name: "Data Has a Better Idea",
      image:
        "https://websitedemos.net/book-store-02/wp-content/uploads/sites/834/2021/04/author-book-store-audio-book-img-4.jpg",
    },
  ];
  return (
    <section>
      <div className="text-center w-[80%] mx-auto ">
        <Title
          title="Latest Audiobook"
          description="Vulputate vulputate eget cursus nam ultricies mauris, malesuada elementum lacus arcu, sit dolor ipsum, ac felis, egestas vel tortor eget aenean."
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[80%] mx-auto">
        {item.map((items, index) => {
          return (
            <div
              key={items.index}
              className="flex flex-col pl-12 my-5 justify-start items-start "
            >
              <img src={items.image} alt={items.name} />
              <p className="text-lg font-semibold py-5">{items.name}</p>
              <p className="flex flex-row justify-center items-center space-x-4 text-[#7a6dd3] font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#7a6dd3"
                    d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12s12-5.376 12-12S18.624 0 12 0m0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104s-3.18 7.104-7.104 7.104m0-13.332c-3.432 0-6.228 2.796-6.228 6.228S8.568 18.228 12 18.228s6.228-2.796 6.228-6.228S15.432 5.772 12 5.772M9.684 15.54V8.46L15.816 12z"
                  ></path>
                </svg>
                <p>Listen Now</p>
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Listbook;

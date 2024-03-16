import Button from "../buttonComponents/buttonComponents";

const Collection = () => {
  const imgUrl = require("../assets/images/tacgia.jpg");
  const item = [
    {
      title: "Best Author Awards 2012",
      desc: "Arcu pellentesque nisi consectetur netus aenean metus sit mattis sit sed",
      img: "https://websitedemos.net/book-store-02/wp-content/uploads/sites/834/2021/04/author-book-store-awards-logo-1.svg",
    },
    {
      title: "BWorld's #1 Best-selling Book",
      desc: "Diam nibh non in enim nunc suscipit risus, adipiscing aenean quisque viverra.",
      img: "https://websitedemos.net/book-store-02/wp-content/uploads/sites/834/2021/04/author-book-store-awards-logo-.svg",
    },
    {
      title: "NYT Best-selling Author 2014",
      desc: "Urna donec dolor bibendum lectus arcu purus eget nisl, ut nisl vitae.",
      img: "https://websitedemos.net/book-store-02/wp-content/uploads/sites/834/2021/04/author-book-store-awards-logo-3.svg",
    },
    {
      title: "Best Author Awards 2018",
      desc: "Morbi odio sodales et facilisis mi nibh fringilla quis risus ultricies facilisis.",
      img: "https://websitedemos.net/book-store-02/wp-content/uploads/sites/834/2021/04/author-book-store-awards-logo-4.svg",
    },
  ];
  return (
    <section className="mt-4">
      <div className="grid grid-cols-2 w-[80%] mx-auto  ">
        <div className="flex ml-10">
          <img
            src={imgUrl}
            alt="..."
            className="px-5 ml-4 object-contain h-[600px] w-[600px]"
          />
        </div>
        <div className="flex flex-col m-10 px-5 justify-start items-start  ">
          <div className="pl-10 space-y-5 ">
            <p className="text-[#5f4ecb] my-10 tracking-wider uppercase font-semibold text-base ">
              BIOGRAPHY
            </p>
            <p className="text-5xl mb-5 font-semibold">John Roberts</p>
            <p className="leading-normal tracking-wider">
              Tellus tellus mattis pulvinar nulla euismod fermentum rhoncus sed
              vestibulum neque praesent pharetra ut fames viverra suscipit
              gravida dictumst volutpat ullamcorper lacus, malesuada enim proin
              volutpat mattis nunc amet, eget vitae egestas.
            </p>
            <p className="leading-normal tracking-wider">
              Vulputate vulputate eget cursus nam ultricies mauris, malesuada
              elementum lacus arcu, sit dolor ipsum, ac felis, egestas vel
              tortor eget aenean nam.
            </p>
            <Button
              label="Read Sample"
              type="button"
              className="btn btn-outline text-[#bdb9e7] hover:bg-[#5f4ecb] "
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[80%] mx-auto my-10">
        {item.map((item, index) => (
          <div
            key={index}
            className="flex flex-col pl-12 my-5 justify-start items-start "
          >
            <img
              src={item.img}
              alt={item.title}
              className="mb-4 object-contain"
            />
            <p className="text-lg mb-2 font-semibold">{item.title}</p>
            <p className="text-sm leading-normal tracking-wider">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collection;

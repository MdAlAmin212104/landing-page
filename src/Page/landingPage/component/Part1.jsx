import { CiSearch } from "react-icons/ci";

const Part1 = () => {
  return (
    <div className="hero mb-24 mt-[400px] md:mt-0 Montserrat">
      <div className="hero-content items-start flex-col lg:flex-row  h-[504px] relative">
        <div className="md:w-1/2 lg:relative">
          <img
            src="/image/house1.jpeg"
            className="w-[460px] h-[400px] rounded-2xl"
          />
          <img
            src="/image/house2.jpeg"
            className="w-[450px] h-[240px] lg:absolute -bottom-24 right-10 rounded-2xl mt-6 md:mt-0"
          />
          <img
            src="/image/mxPlayer.png"
            alt=""
            className="w-[72px] lg:absolute right-28 top-56 hidden md:flex"
          />
        </div>
        <div className="md:w-1/2 md:mt-0 mt-72 relative -bottom-36">
          <div className="flex items-center text-[#F06711] font-semibold text-[22px] popping">
            <hr className="w-12 bg-[#F06711] mt-2 border-none h-1" />
            <p className="ml-4">Property buying</p>
          </div>

          <h1 className="md:text-4xl text-2xl font-bold mt-4">
            Efficient and Transparent
            <br />
            Home Buying Solutions
          </h1>
          <p className="py-6 popping">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <button className="btn bg-[#ECF5FF] text-[#0059B1] border-none md:mb-0 mb-24"> <CiSearch className="text-[#0059B1]"/> Find Property</button>
        </div>
      </div>
    </div>
  );
};

export default Part1;

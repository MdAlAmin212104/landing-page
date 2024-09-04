import { CiSearch } from "react-icons/ci";

const Part2 = () => {
  return (
    <div className="hero lg:mb-24 mb-[600px] Montserrat">
      <div className="hero-content items-start flex-col lg:flex-row h-[504px] relative">
        <div className="md:w-1/2 mt-0 relative">
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
          <button className="btn bg-[#ECF5FF] text-[#0059B1] border-none md:mb-0 mb-24">
            <CiSearch className="text-[#0059B1]" /> Find Property
          </button>
        </div>
        <div className="md:w-1/2 relative md:mt-0 top-[300px] md:top-0">
          <img
            src="/image/house2.jpeg"
            className="lg:w-[450px] h-[240px] rounded-2xl lg:ml-40 z-40 lg:relative"
          />
          <img
            src="/image/house1.jpeg"
            className="w-[460px] h-[400px] rounded-2xl lg:ml-10 lg:absolute top-28 z-0 mt-8 md:mt-0"
          />
          <img
            src="/image/mxPlayer.png"
            alt=""
            className="w-[72px] z-50 lg:relative left-32 -top-44 hidden md:flex"
          />
        </div>
      </div>
    </div>
  );
};

export default Part2;

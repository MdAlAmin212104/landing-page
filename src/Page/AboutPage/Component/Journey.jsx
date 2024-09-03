const Journey = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse popping">
           <div className="md:w-1/3">
            <img
            src="/image/about-house.avif"
            className="w-[390px] rounded-lg shadow-2xl ml-10"
          />
          </div>
          <div className="md:w-2/3">
          <div className="flex items-center text-[#F06711] font-semibold text-[22px]">
            <hr className="w-12 bg-[#F06711] mt-2 border-none h-1" />
            <p className="ml-4">Meet the Team For Book Consultation</p>
          </div>
          <h1 className="text-5xl font-bold Montserrat">
            Meet the stewards of your <br /> heritage journey
          </h1>
          <p className="py-6 font-medium">each member an embodiment of expertise and warmth, dedicated to guiding you home, <br /> every step of the way.
          </p>
          <button className="btn bg-[#0059B1] text-white ">Book Consultation Now</button>
          </div>
      </div>
    </div>
  );
};

export default Journey;

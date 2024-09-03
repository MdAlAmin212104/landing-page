const About1 = () => {
  return (
    <div className="hero md:mb-56">
      <div className="hero-content flex-col lg:flex-row">
        <div className="md:w-3/4">
        <img
          src="image/about-image.avif"
          className="w-full h-[455px]"
        />
        </div>
        <div className="md:w-1/4 mt-6">
          <div className="bg-[#ECF5FF] popping md:w-[590px] w-full md:relative right-72 top-56 p-6">
          <div className="flex items-center text-[#F06711] font-semibold text-[22px]">
            <hr className="w-12 bg-[#F06711] mt-2 border-none h-1" />
            <p className="ml-4">Our store</p>
          </div>
            <h1 className="text-4xl font-bold Montserrat">Efficient and Transparent Home Buying Solutions</h1>
            <p className="font-medium">In the symphony of bustling markets and serene landscapes, Heritage-Nest was born—a vision to</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;

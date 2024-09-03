
const About2 = () => {
    return (
        <div className="hero md:mb-56">
      <div className="hero-content flex-col lg:flex-row">
        <div className="md:w-1/4 mt-6">
          <div className="bg-[#FDF0E7] popping md:w-[590px] w-full md:relative top-56 p-6">
          <div className="flex items-center text-[#F06711] font-semibold text-[22px]">
            <hr className="w-12 bg-[#F06711] mt-2 border-none h-1" />
            <p className="ml-4">Mission Statement</p>
          </div>
            <h1 className="text-4xl font-bold">Efficient and Transparent Home Buying Solutions</h1>
            <p className="font-medium">To bridge the miles with smiles, Heritage-Nest pledges to be the golden thread connecting NRIs to their homeland, through trust, transparency, and tailored real estate solutions.</p>
          </div>
        </div>
        <div className="md:w-3/4">
        <img
          src="image/about-image.avif"
          className="w-full h-[455px]"
        />
        </div>
      </div>
    </div>
    );
};

export default About2;
import { BsHouse } from "react-icons/bs";

const Services1 = () => {
    return (
        <div className="container mx-auto relative top-[550px] md:top-0">
      <h1 className="md:text-5xl text-2xl font-bold text-center mb-12">
        Other Services
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-4 mb-16">
        <div className="flex justify-center items-start bg-[#ECF5FF] h-[200px] lg:w-[380px]">
        <div className="w-12 h-12 bg-[#EE6611] p-4 mt-4 ml-4">
        <BsHouse  className="text-white"/>
        </div>
        <div className="ml-6">
            <h1 className="text-2xl font-semibold m-4">Advanced Property Search</h1>
            <p className="m-4 font-medium">Effortlessly find your dream property with advanced search filters.</p>
        </div>
        </div>
        <div className="flex justify-center items-start bg-[#ECF5FF] h-[200px] lg:w-[380px]">
        <div className="w-12 h-12 bg-[#EE6611] p-4 mt-4 ml-4">
        <BsHouse  className="text-white"/>
        </div>
        <div className="ml-6">
            <h1 className="text-2xl font-semibold m-4">Virtual Tours and Multimedia</h1>
            <p className="m-4 font-medium">Explore properties through immersive virtual tours and HD photos.</p>
        </div>
        </div>
        <div className="flex justify-center items-start bg-[#ECF5FF] h-[200px] lg:w-[380px]">
        <div className="w-12 h-12 bg-[#EE6611] p-4 mt-4 ml-4">
        <BsHouse  className="text-white"/>
        </div>
        <div className="ml-6">
            <h1 className="text-2xl font-semibold m-4">Secure Online Transactions</h1>
            <p className="m-4 font-medium">Ensure secure transactions and e-sign documents seamlessly online.</p>
        </div>
        </div>
      </div>
    </div>
    );
};

export default Services1;
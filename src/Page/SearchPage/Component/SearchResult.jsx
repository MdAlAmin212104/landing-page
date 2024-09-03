import { IoLocationOutline } from "react-icons/io5";
import useData from "../../../hook/useData";
import { FaRegSquare } from "react-icons/fa";
import { PiFlowerThin } from "react-icons/pi";
import { VscScreenNormal } from "react-icons/vsc";

const SearchResult = () => {
  const [house] = useData();
  return (
    <div className="container mx-auto my-6">
      <div className="font-medium flex gap-6 mb-4">
        <button className="bg-[#0059B1] p-2 text-white">
          properties ({house.length})
        </button>
        <button className="bg-[#ECF5FF] p-2 text-[#4B5563]">
          New Projects ({house.length})
        </button>
        <button className="bg-[#ECF5FF] p-2 text-[#4B5563]">
          Pre-launch offers
        </button>
      </div>
      <hr />
      <h1 className="text-2xl font-bold my-6">
        {house.length} results for rental
      </h1>
      {house.map((item) => (
        <div key={item.image} className=" bg-[#F9FAFB] m-4 md:w-3/4">
          <div className="hero-content flex-col lg:flex-row items-start">
            <div className="md:w-1/4">
              <img src={item.image} className="" />
            </div>
            <div className="md:w-3/4">
              <div className="flex justify-between mr-4 text-xl font-semibold">
                <h1>{item.title}</h1>
                <p>${item.fixed_price}</p>
              </div>
              <div className="flex justify-between pt-4 mr-4">
                <h1 className="flex">
                  <IoLocationOutline className="mt-1 text-[#EE6611]" />
                  {item.location}
                </h1>
                <button className="Montserrat text-[#363636] border py-1 px-2  border-black">
                  Bid Property
                </button>
              </div>
              <div className="flex items-center pt-4 space-x-1">
                <p className="px-3 text-sm dark:text-gray-600">Property details</p>
                <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
              </div>
              <div className="mt-2 flex justify-between">
                <div className="flex gap-2">
                    <PiFlowerThin className="w-10 h-10 bg-[#EE6611] text-white"/>
                    <div className="-mt-1">
                    <p className="">Total Area</p>
                    <p>{item.area}</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <FaRegSquare className="w-10 h-10 bg-[#EE6611] text-white"/>
                    <div className="-mt-1">
                    <p className="">Status</p>
                    <p>Ready to move</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <VscScreenNormal className="w-10 h-10 bg-[#EE6611] text-white"/>
                    <div className="-mt-1">
                    <p className="">Facing</p>
                    <p>{item.facing}</p>
                    </div>
                </div>
              
              
              </div>
            </div>
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default SearchResult;

import { HiOutlineArrowCircleDown } from "react-icons/hi";

const ListedCard = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 my-16 container mx-auto popping">
      <div className="card bg-[#FDF0E7] text-black max-w-72">
        <div className="card-body">
          <h2 className="text-5xl font-bold Montserrat text-[#D95D0F]">2K+</h2>
          <p>New Flat Listed</p>
          <div className="card-actions justify-between text-[#EE6611]">
            <button className="underline">View all</button>
            <button className="text-3xl"><HiOutlineArrowCircleDown className="" /></button>
          </div>
        </div>
      </div>
      <div className="card bg-[#ECF5FF] text-black w-72">
        <div className="card-body">
          <h2 className="text-5xl font-bold Montserrat text-[#0051A1]">2K+</h2>
          <p>New Flat Listed</p>
          <div className="card-actions justify-between text-[#0059B1]">
            <button className="underline">View all</button>
            <button className="text-3xl"><HiOutlineArrowCircleDown className="" /></button>
          </div>
        </div>
      </div>
      <div className="card bg-[#FDF0E7] text-black w-72">
        <div className="card-body">
          <h2 className="text-5xl font-bold Montserrat text-[#D95D0F]">2K+</h2>
          <p>New Flat Listed</p>
          <div className="card-actions justify-between text-[#EE6611]">
            <button className="underline">View all</button>
            <button className="text-3xl"><HiOutlineArrowCircleDown className="" /></button>
          </div>
        </div>
      </div>
      <div className="card bg-[#ECF5FF] text-black w-72">
        <div className="card-body">
          <h2 className="text-5xl font-bold Montserrat text-[#0051A1]">2K+</h2>
          <p>New Flat Listed</p>
          <div className="card-actions justify-between text-[#0059B1]">
            <button className="underline">View all</button>
            <button className="text-3xl"><HiOutlineArrowCircleDown className="" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedCard;

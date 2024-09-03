import { CgGym } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { FaBaby } from "react-icons/fa";
import { GiBed, GiFurnace, GiGardeningShears, GiLift, GiSecurityGate } from "react-icons/gi";
import { IoMdBatteryCharging } from "react-icons/io";
import { LiaBedSolid } from "react-icons/lia";
import { LuParkingSquare, LuWarehouse } from "react-icons/lu";
import { MdOutlineContactPage } from "react-icons/md";
import { PiParkFill } from "react-icons/pi";
import { RiCustomerService2Line, RiWaterFlashFill } from "react-icons/ri";
import { TbParkingCircle } from "react-icons/tb";
import { useLoaderData } from "react-router-dom";

const Description = () => {
  const data = useLoaderData();
  const {
    title,
    location,
    image,
    min_price,
    max_price,
    fixed_price,
    bedRoom,
    bathRoom,
    balcony,
    area,
    lift,
    facing,
    additionalRooms,
    AgeOfConstruction,
    Status,
  } = data;
  return (
    <div>
      <div className="md:flex gap-4">
        <div className="md:w-3/4">
          <div className="flex text-xl font-bold text-black mt-6">
            <h1>{title}</h1>
            <p className="ml-12 font-extrabold">${fixed_price}</p>
          </div>
          <p className="flex gap-2 text-xl">
            <CiLocationOn className="text-[#EE6611] text-xl mt-1" />
            {location}
          </p>
          <hr className="my-4" />
          <div className="card h-[400px]">
            <figure>
              <img
                src={image}
                alt="Shoes"
                className="w-full"
                style={{ objectFit: "cover" }}
              />
            </figure>
          </div>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 my-4">
            <div className="card">
              <figure>
                <img
                  src="/image/interior1.jpeg"
                  alt="Shoes"
                  className="w-full h-[160px]"
                />
              </figure>
            </div>
            <div className="card">
              <figure>
                <img
                  src="/image/interior2.jpeg"
                  alt="Shoes"
                  className="w-full h-[160px]"
                />
              </figure>
            </div>
            <div className="card">
              <figure>
                <img
                  src="/image/interior3.jpeg"
                  alt="Shoes"
                  className="w-full h-[160px]"
                />
              </figure>
            </div>
          </div>
          <div className="card bg-[#E5E7EB] px-6">
            <h1 className="Montserrat text-2xl font-semibold p-4">Overview</h1>
            <div className="font-bold flex gap-6 justify-evenly m-2 bg-white rounded p-2">
              <h1 className="flex text-[16px] gap-2">
                <LiaBedSolid className="mt-1" />
                {bedRoom} Beds
              </h1>
              <h1 className="flex text-[16px] gap-2">
                <GiBed className="mt-1" />
                {bathRoom} bathroom
              </h1>
              <h1 className="flex text-[16px] gap-2">
                <FaBaby className="mt-1" />
                {balcony} Balcony
              </h1>
              <h1 className="flex text-[16px] gap-2">
                <GiFurnace className="mt-1" /> Fully Furnished
              </h1>
            </div>
            <div className="my-4 flex justify-between">
              <div>
                <h1 className="text-[#5C5C5C]">Carpet Area</h1>
                <p>{area}</p>
              </div>
              <div>
                <h1 className="text-[#5C5C5C]">Floor</h1>
                <p>Second (Out of 6th floor)</p>
              </div>
              <div>
                <h1 className="text-[#5C5C5C]">Transaction Type</h1>
                <p>Ready to move</p>
              </div>
              <div>
                <h1 className="text-[#5C5C5C]">Lift</h1>
                <p>{lift ? "Yes" : "No"}</p>
              </div>
            </div>
            <div className="flex justify-between mb-8">
              <div>
                <h1 className="text-[#5C5C5C]">Facing</h1>
                <p>{facing}</p>
              </div>
              <div>
                <h1 className="text-[#5C5C5C]">Additional Rooms</h1>
                <p>
                  {additionalRooms} servant room & {additionalRooms} gust room
                </p>
              </div>
              <div>
                <h1 className="text-[#5C5C5C]">Age of construction</h1>
                <p>{AgeOfConstruction}</p>
              </div>
              <div>
                <h1 className="text-[#5C5C5C]">Status</h1>
                <p>{Status}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/4 mt-24">
          <div className="card bg-[#ECF5FF] Poppins p-4 rounded-none">
            <h1 className="text-[#6B7280]">property value</h1>
            <p className="text-2xl font-bold">
              ${min_price} - ${max_price}
            </p>
            <p className="font-medium pt-6">
              Your bid can not be than 10% of the property Minimum value.
            </p>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Min</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Max</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <input
              type="range"
              min={0}
              max="100"
              defaultValue={""}
              className="range mt-4"
              step="25"
            />
            <div className="flex w-full justify-between px-2 text-xs">
              <span>${min_price}</span>
              <span>${max_price}</span>
            </div>
            <button className="bg-[#0059B1] text-white font-medium text-[18px] mx-auto btn w-[170px]">
              Bid Property
            </button>
          </div>
          <div className="card  image-full mt-8 h-[420px] shadow-xl">
            <figure>
              <img src="/image/map.jpg" alt="Shoes" />
            </figure>
          </div>
        </div>
      </div>
      <div className="card bg-[#E5E7EB] my-8 Montserrat">
        <h2 className="ml-4 mt-4 text-2xl font-semibold">Amenities </h2>
        <div className="flex justify-between mx-8 my-4 font-medium">
            <div className="space-y-8">
                <h1 className="flex gap-2"><IoMdBatteryCharging className="mt-1"/> Power Back Up</h1>
                <h1 className="flex gap-2"><PiParkFill className="mt-1"/>Park</h1>
                <h1 className="flex gap-2"><GiGardeningShears className="mt-1"/>Private Terrace/Garden</h1>
                <h1 className="flex gap-2"><IoMdBatteryCharging className="mt-1"/> Power Back Up</h1>
                <h1 className="flex gap-2"><PiParkFill className="mt-1"/>Park</h1>
                <h1 className="flex gap-2"><GiGardeningShears className="mt-1"/>Private Terrace/Garden</h1>
            </div>
            <div className="space-y-8">
                <h1 className="flex gap-2"><GiLift className="mt-1"/> Lift</h1>
                <h1 className="flex gap-2"><TbParkingCircle className="mt-1"/>Reserved Parking</h1>
                <h1 className="flex gap-2"><MdOutlineContactPage className="mt-1"/>Vaastu Compliant</h1>
                <h1 className="flex gap-2"><GiLift className="mt-1"/> Lift</h1>
                <h1 className="flex gap-2"><TbParkingCircle className="mt-1"/>Reserved Parking</h1>
                <h1 className="flex gap-2"><MdOutlineContactPage className="mt-1"/>Vaastu Compliant</h1>
            </div>

            <div className="space-y-8">
                <h1 className="flex gap-2"><LuWarehouse className="mt-1"/> Club House</h1>
                <h1 className="flex gap-2"><GiSecurityGate className="mt-1"/>Security</h1>
                <h1 className="flex gap-2"><RiCustomerService2Line className="mt-1"/>Service/Goods Lift</h1>
                <h1 className="flex gap-2"><LuWarehouse className="mt-1"/> Club House</h1>
                <h1 className="flex gap-2"><GiSecurityGate className="mt-1"/>Security</h1>
                <h1 className="flex gap-2"><RiCustomerService2Line className="mt-1"/>Service/Goods Lift</h1>
            </div>
            <div className="space-y-8">
                <h1 className="flex gap-2"><CgGym className="mt-1"/> Gymnasium</h1>
                <h1 className="flex gap-2"><RiWaterFlashFill className="mt-1"/>Water Storage</h1>
                <h1 className="flex gap-2"><LuParkingSquare className="mt-1"/>Visitor Parking</h1>
                <h1 className="flex gap-2"><CgGym className="mt-1"/> Gymnasium</h1>
                <h1 className="flex gap-2"><RiWaterFlashFill className="mt-1"/>Water Storage</h1>
                <h1 className="flex gap-2"><LuParkingSquare className="mt-1"/>Visitor Parking</h1>
            </div>
           
        </div>
        
      </div>
    </div>
  );
};

export default Description;

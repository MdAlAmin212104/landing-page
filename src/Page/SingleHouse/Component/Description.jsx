import { CiLocationOn } from "react-icons/ci";
import { FaBaby } from "react-icons/fa";
import { GiBed, GiFurnace } from "react-icons/gi";
import { LiaBedSolid } from "react-icons/lia";
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
    <div className="md:flex gap-4">
      <div className="md:w-3/4">
        <div className="flex text-xl font-bold text-black">
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
              {bedRoom} bad
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
            <img
              src="/image/map.jpg"
              alt="Shoes"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Description;

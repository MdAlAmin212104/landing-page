import { AiFillDollarCircle } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { FaHouseUser } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const BoxSection = () => {
  return (
    <div className="md:w-[990px] bg-white container mx-auto -mt-56 shadow">
      <div role="tablist" className="tabs tabs-bordered p-4">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab pl-0"
          aria-label="Buy"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content mt-6">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input type="text" className="grow" placeholder="Search" />
          </label>
          <div className="md:md:flex gap-4">
          <label className="form-control w-full max-w-xs mt-6">
            <div className="label">
              <span className="label-text flex gap-2 font-semibold">
              <IoLocationOutline className=" text-[#EE6611] text-xl" />Your Location
              </span>
            </div>
            <select className="select select-bordered bg-[#ECF5FF]">
              <option  defaultValue="">
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </label>
          <label className="form-control w-full max-w-xs mt-6">
            <div className="label">
              <span className="label-text flex gap-2 font-semibold">
              <FaHouseUser className=" text-[#EE6611] text-xl" />Your Location
              </span>
            </div>
            <select className="select select-bordered bg-[#ECF5FF]">
              <option  defaultValue="">
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </label>
          <label className="form-control w-full max-w-xs mt-6">
            <div className="label">
              <span className="label-text flex gap-2 font-semibold">
              <AiFillDollarCircle className=" text-[#EE6611] text-xl" />Budget
              </span>
            </div>
            <select className="select select-bordered bg-[#ECF5FF]">
              <option  defaultValue="">
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </label>

          </div>
          <button className="btn bg-[#0059B1] text-white border-none w-full mt-4 font-semibold mb-8"> <CiSearch className="text-2xl"/> Find Property</button>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab pl-0"
          aria-label="Rent"
        />
        <div role="tabpanel" className="tab-content mt-6">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input type="text" className="grow" placeholder="Search" />
          </label>
          <div className="md:flex gap-4">
          <label className="form-control w-full max-w-xs mt-6">
            <div className="label">
              <span className="label-text flex gap-2 font-semibold">
              <IoLocationOutline className=" text-[#EE6611] text-xl" />Your Location
              </span>
            </div>
            <select className="select select-bordered bg-[#ECF5FF]">
              <option  defaultValue="">
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </label>
          <label className="form-control w-full max-w-xs mt-6">
            <div className="label">
              <span className="label-text flex gap-2 font-semibold">
              <FaHouseUser className=" text-[#EE6611] text-xl" />Your Location
              </span>
            </div>
            <select className="select select-bordered bg-[#ECF5FF]">
              <option  defaultValue="">
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </label>
          <label className="form-control w-full max-w-xs mt-6">
            <div className="label">
              <span className="label-text flex gap-2 font-semibold">
              <AiFillDollarCircle className=" text-[#EE6611] text-xl" />Budget
              </span>
            </div>
            <select className="select select-bordered bg-[#ECF5FF]">
              <option  defaultValue="">
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </label>

          </div>
          <button className="btn bg-[#0059B1] text-white border-none w-full mt-4 font-semibold mb-8"> <CiSearch className="text-2xl"/> Find Property</button>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab pl-0"
          aria-label="PG"
        />
        <div role="tabpanel" className="tab-content mt-6">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input type="text" className="grow" placeholder="Search" />
          </label>
          <div className="md:flex gap-4">
          <label className="form-control w-full max-w-xs mt-6">
            <div className="label">
              <span className="label-text flex gap-2 font-semibold">
              <IoLocationOutline className=" text-[#EE6611] text-xl" />Your Location
              </span>
            </div>
            <select className="select select-bordered bg-[#ECF5FF]">
              <option  defaultValue="">
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </label>
          <label className="form-control w-full max-w-xs mt-6">
            <div className="label">
              <span className="label-text flex gap-2 font-semibold">
              <FaHouseUser className=" text-[#EE6611] text-xl" />Your Location
              </span>
            </div>
            <select className="select select-bordered bg-[#ECF5FF]">
              <option  defaultValue="">
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </label>
          <label className="form-control w-full max-w-xs mt-6">
            <div className="label">
              <span className="label-text flex gap-2 font-semibold">
              <AiFillDollarCircle className=" text-[#EE6611] text-xl" />Budget
              </span>
            </div>
            <select className="select select-bordered bg-[#ECF5FF]">
              <option  defaultValue="">
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </label>

          </div>
          <button className="btn bg-[#0059B1] text-white border-none w-full mt-4 font-semibold mb-8"> <CiSearch className="text-2xl"/> Find Property</button>
        </div>
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab pl-0"
          aria-label="Plot"
        />
        <div role="tabpanel" className="tab-content mt-6">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input type="text" className="grow" placeholder="Search" />
          </label>
          <div className="md:flex gap-4">
          <label className="form-control w-full max-w-xs mt-6">
            <div className="label">
              <span className="label-text flex gap-2 font-semibold">
              <IoLocationOutline className=" text-[#EE6611] text-xl" />Your Location
              </span>
            </div>
            <select className="select select-bordered bg-[#ECF5FF]">
              <option  defaultValue="">
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </label>
          <label className="form-control w-full max-w-xs mt-6">
            <div className="label">
              <span className="label-text flex gap-2 font-semibold">
              <FaHouseUser className=" text-[#EE6611] text-xl" />Your Location
              </span>
            </div>
            <select className="select select-bordered bg-[#ECF5FF]">
              <option  defaultValue="">
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </label>
          <label className="form-control w-full max-w-xs mt-6">
            <div className="label">
              <span className="label-text flex gap-2 font-semibold">
              <AiFillDollarCircle className=" text-[#EE6611] text-xl" />Budget
              </span>
            </div>
            <select className="select select-bordered bg-[#ECF5FF]">
              <option  defaultValue="">
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </label>

          </div>
          <button className="btn bg-[#0059B1] text-white border-none w-full mt-4 font-semibold mb-8"> <CiSearch className="text-2xl"/> Find Property</button>
        </div>
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab pl-0"
          aria-label="Commercial"
        />
        <div role="tabpanel" className="tab-content mt-6">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input type="text" className="grow" placeholder="Search" />
          </label>
          <div className="md:flex gap-4">
          <label className="form-control w-full max-w-xs mt-6">
            <div className="label">
              <span className="label-text flex gap-2 font-semibold">
              <IoLocationOutline className=" text-[#EE6611] text-xl" />Your Location
              </span>
            </div>
            <select className="select select-bordered bg-[#ECF5FF]">
              <option  defaultValue="">
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </label>
          <label className="form-control w-full max-w-xs mt-6">
            <div className="label">
              <span className="label-text flex gap-2 font-semibold">
              <FaHouseUser className=" text-[#EE6611] text-xl" />Your Location
              </span>
            </div>
            <select className="select select-bordered bg-[#ECF5FF]">
              <option  defaultValue="">
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </label>
          <label className="form-control w-full max-w-xs mt-6">
            <div className="label">
              <span className="label-text flex gap-2 font-semibold">
              <AiFillDollarCircle className=" text-[#EE6611] text-xl" />Budget
              </span>
            </div>
            <select className="select select-bordered bg-[#ECF5FF]">
              <option  defaultValue="">
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </label>

          </div>
          <button className="btn bg-[#0059B1] text-white border-none w-full mt-4 font-semibold mb-8"> <CiSearch className="text-2xl"/> Find Property</button>
        </div>
      </div>
    </div>
  );
};

export default BoxSection;

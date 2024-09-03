import { CiLocationOn } from "react-icons/ci";
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
              <img src="/image/interior1.jpeg" alt="Shoes" className="w-full h-[160px]" />
            </figure>
          </div>
          <div className="card">
            <figure>
              <img src="/image/interior2.jpeg" alt="Shoes" className="w-full h-[160px]" />
            </figure>
          </div>
          <div className="card">
            <figure>
              <img src="/image/interior3.jpeg" alt="Shoes" className="w-full h-[160px]" />
            </figure>
          </div>
        </div>
        <p>Min Price: {min_price}</p>
        <p>Max Price: {max_price}</p>

        <p>Bedrooms: {bedRoom}</p>
        <p>Bathrooms: {bathRoom}</p>
        <p>Balcony: {balcony}</p>
        <p>Area: {area}</p>
        <p>Lift: {lift ? "Yes" : "No"}</p>
        <p>Facing: {facing}</p>
        <p>Additional Rooms: {additionalRooms}</p>
        <p>Age of Construction: {AgeOfConstruction}</p>
        <p>Status: {Status}</p>
      </div>
      <div className="md:w-1/4"></div>
    </div>
  );
};

export default Description;

import { IoLocationOutline } from "react-icons/io5";
import useData from "../../../hook/useData";

const NewListed = () => {
    const [house] = useData()
    const newListed = house.slice(3, 6);
    return (
        <div className="container mx-auto mt-8 Poppins">
          <div className="flex justify-between">
            <h1 className="text-3xl font-semibold Montserrat">
            New Listed Properties  
            </h1>
            <p className="text-[#0059B1] underline">See all propeety</p>
          </div>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mt-4">
            {newListed.map((item) => (
              <div
                key={item.image}
                className=" card-compact bg-[#F9FAFB]"
              >
                <figure>
                  <img
                    src={item.image}
                    alt="House Image"
                    className="w-full h-[200px]"
                  />
                </figure>
                <div className="flex justify-between m-4">
                    <h1 className="text-[#00254A] bg-[#C5E2FF] rounded-xl px-2">Apartment </h1>
                    <p className="font-medium"><span className="text-[#EE6611]">&#9632;</span>Ready to Move</p>
                </div>
                <hr className="mx-4"/>
                <div className="card-body">
                    <h2 className="card-title Montserrat">{item.title}</h2>
                    <p className="flex gap-2"><IoLocationOutline className="text-xl text-[#EE6611]"/>{item.location}</p>
                    <div className="card-actions justify-start">
                        <p className="Montserrat text-2xl font-semibold">${item.fixed_price}</p>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
};

export default NewListed;
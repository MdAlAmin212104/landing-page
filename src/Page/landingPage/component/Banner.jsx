import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div
      className="hero min-h-[544px] Montserrat md:mb-16 mb-32"
      style={{
        backgroundImage:
          "url(/image/banner.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-95"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="">
          <h1 className="mb-5 md:text-6xl text-3xl font-bold">Your Portal to India`s <br /> Exquisite Real Estate</h1>
          <p className="mb-5 popping text-[14px]">Seamlessly connecting you to the heartbeat of India`s prime properties.
          </p>
          <Link to='/property'><button className="btn bg-[#0059B1] text-white border-none"> <CiSearch /> Find Property</button></Link>
        </div>
      </div>
    </div>
    );
};

export default Banner;
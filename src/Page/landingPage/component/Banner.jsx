import { CiSearch } from "react-icons/ci";

const Banner = () => {
    return (
        <div
      className="hero min-h-[544px] Montserrat mb-16"
      style={{
        backgroundImage:
          "url(/image/banner.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-90"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="">
          <h1 className="mb-5 text-6xl font-bold">Your Portal to India`s <br /> Exquisite Real Estate</h1>
          <p className="mb-5">Seamlessly connecting you to the heartbeat of India`s prime properties.
          </p>
          <button className="btn bg-[#0059B1] text-white"> <CiSearch /> Find Property</button>
        </div>
      </div>
    </div>
    );
};

export default Banner;
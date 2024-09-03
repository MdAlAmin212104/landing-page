import PopularSection from "../BuyerPage/Component/PopularSection";
import Services from "../landingPage/component/Services";
import Description from "./Component/Description";

const SingleHouse = () => {
    return (
        <div className="container mx-auto">
            <Description/>
            <Services/>
            <PopularSection/>
            <hr className="mb-16"/>
        </div>
    );
};

export default SingleHouse;
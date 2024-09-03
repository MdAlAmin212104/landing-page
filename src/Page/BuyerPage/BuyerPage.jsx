import Banner from "../AboutPage/Component/Banner";
import ListedCard from "../AboutPage/Component/ListedCard";
import Testimonials from "../AboutPage/Component/Testimonials";
import BoxSection from "./Component/BoxSection";
import NewListed from "./Component/NewListed";
import PopularSection from "./Component/PopularSection";

const BuyerPage = () => {
    return (
        <div>
            <Banner/>
            <BoxSection/>
            <ListedCard/>
            <PopularSection/>
            <NewListed/>
            <Testimonials/>
        </div>
    );
};

export default BuyerPage;
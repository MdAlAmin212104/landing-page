import About1 from "./Component/About1";
import About2 from "./Component/About2";
import Banner from "./Component/Banner";
import Journey from "./Component/Journey";
import ListedCard from "./Component/ListedCard";
import Team from "./Component/Team";
import Testimonials from "./Component/Testimonials";

const AboutPage = () => {
    return (
        <div>
            <Banner/>
            <ListedCard/>
            <About1/>
            <About2/>
            <Team/>
            <Journey/>
            <Testimonials/>
        </div>
    );
};

export default AboutPage;
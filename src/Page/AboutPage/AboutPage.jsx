import About1 from "./Component/About1";
import About2 from "./Component/About2";
import Banner from "./Component/Banner";
import ListedCard from "./Component/ListedCard";

const AboutPage = () => {
    return (
        <div>
            <Banner/>
            <ListedCard/>
            <About1/>
            <About2/>
        </div>
    );
};

export default AboutPage;
import Banner from "./component/banner";
import Part1 from "./component/Part1";
import Part2 from "./component/Part2";
import Services from "./component/Services";

const LandingPage = () => {
    return (
        <div>
            <Banner/>
            <Part1/>
            <Part2/>
            <Part1/>
            <Services/>
        </div>
    );
};

export default LandingPage;
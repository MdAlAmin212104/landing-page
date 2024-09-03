import Testimonials from "../AboutPage/Component/Testimonials";
import PageButton from "./Component/PageButton";
import Range from "./Component/Range";
import SearchResult from "./Component/SearchResult";

const SearchPage = () => {
    return (
        <div>
            <SearchResult/>
            <PageButton/>
            <Range/>
            <Testimonials/>
        </div>
    );
};

export default SearchPage;
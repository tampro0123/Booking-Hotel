import searchList from "../../../data/search.json";
import SearchItem from "../SearchItem/SearchItem";
import { Link } from "react-router-dom";
import "./SearchList.css";
function SearchList() {
    return (
        <div className="search-list-contain">
            {searchList.map((item, index) => {
                return (
                    <Link to={"/detail"} key={index}>
                        <SearchItem props={item} />
                    </Link>
                );
            })}
        </div>
    );
}

export default SearchList;

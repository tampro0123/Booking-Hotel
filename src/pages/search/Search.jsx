import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SearchPopup from "../../components/Search/SearchPopup/SearchPopup.jsx";
import SearchList from "../../components/Search/SearchList/SearchList.jsx";
import "./Search.css";
function Search() {
    return (
        <div>
            <Navbar />
            <div className="contain-search">
                <div className="search-popup">
                    <SearchPopup />
                </div>
                <div className="search-list">
                    <SearchList />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Search;

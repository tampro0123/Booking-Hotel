import detail from "../../data/detail.json";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Detail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Detail() {
    return (
        <div>
            <Navbar />
            <div className="detail-contain">
                <div className="detail-head">
                    <div className="detail-info">
                        <h2 className="detail-head-text">{detail.name}</h2>
                        <div className="detail-address">
                            <FontAwesomeIcon icon="fa-sharp fa-solid fa-location-dot" />
                            {detail.address}
                        </div>
                        <p className="detail-distance">{detail.distance}</p>
                        <p className="detail-price">{detail.price}</p>
                    </div>
                    <div>
                        <button className="detail-head-btn">
                            Reserve or Book Now!
                        </button>
                    </div>
                </div>
                <div className="detail-body">
                    {detail.photos.map((photo, index) => {
                        return (
                            <div key={index} className="image">
                                <img src={photo} alt="ảnh detail" />
                            </div>
                        );
                    })}
                </div>
                <div className="detail-footer">
                    <div className="detail-desc">
                        <h2 className="detail-footer-title"> {detail.title}</h2>
                        <p className="detail-footer-description">
                            {detail.description}
                        </p>
                    </div>
                    <div className="detail-footer-price">
                        <h3>Perfect for 9-night stay!</h3>
                        <p>
                            Located in the real heart of Krakow, this property
                            has an excellent location score of 9.8
                        </p>
                        <p>
                            <b className="fw700"> ${detail.nine_night_price}</b>{" "}
                            <i>(9 night)</i>
                        </p>
                        <button>Reserve or Book Now!</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Detail;

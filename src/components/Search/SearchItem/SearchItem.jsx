import "./SearchItem.css";

function SearchItem(props) {
    const prop = { ...props.props };
    return (
        <div className="search-item">
            <div className="item-image">
                <img src={prop.image_url} alt={prop.name} />
            </div>

            <div className="item-info">
                <h2 className="item-name">{prop.name}</h2>
                <p className="address">{prop.distance} from center</p>
                <div>
                    <span className="item-tag">{prop.tag}</span>
                </div>
                <p className="item-decs">{prop.description}</p>
                <p className="item-type">{prop.type}</p>
                {prop.free_cancel ? (
                    <div className="cancel">
                        <p className="cancel-head">Free cancellation</p>
                        <p className="cancel-text">
                            You can cancle later, so lock in this great price
                            today!
                        </p>
                    </div>
                ) : (
                    <div className="cancel-text"></div>
                )}
            </div>
            <div className="item-rate">
                <div className="rate-head">
                    <div className="rate-text">{prop.rate_text}</div>
                    <span className="rate-point">{prop.rate}</span>
                </div>
                <div className="rate-foot">
                    <div className="item-price">${prop.price}</div>
                    <p className="item-price-text">Includes taxes and feels</p>
                    <button className="item-btn">See availability</button>
                </div>
            </div>
        </div>
    );
}

export default SearchItem;

import "./SearchPopup.css";
import "./SearchPopup.css";
import { useState } from "react";
function SearchPopup() {
    const [destination, setDestination] = useState("");
    const [dateRange, setDateRange] = useState("06-24-2022 to 06-24-2022");

    const handleDateRangeChange = (event) => {
        setDateRange(event.target.value);
    };
    const [field1, setField1] = useState("");
    const [field2, setField2] = useState("");
    const [field3, setField3] = useState("");
    const [field4, setField4] = useState("");
    const [field5, setField5] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(
            `Submitted form: ${destination} ${dateRange} ${field1} ${field2} ${field3} ${field4} ${field5}`
        );
    };
    return (
        <div className="popup-contain">
            <h2 className="popup-header">Search</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Destination
                    <input
                        className="input-destination"
                        type="text"
                        value={destination}
                        onChange={(event) => setDestination(event.target.value)}
                    />
                </label>
                <br />
                <label>
                    Check-in Date
                    <input
                        className="input-checkin-date"
                        type="text"
                        value={dateRange}
                        onChange={handleDateRangeChange}
                    />
                </label>
                <br />
                <p className="option-search">Options</p>
                <label className="option">
                    Min price per night
                    <input
                        type="text"
                        value={field1}
                        onChange={(event) => setField1(event.target.value)}
                    />
                </label>
                <br />
                <label className="option">
                    Max price per night
                    <input
                        type="text"
                        value={field2}
                        onChange={(event) => setField2(event.target.value)}
                    />
                </label>
                <br />
                <label className="option">
                    Adult
                    <input
                        type="text"
                        value={field3}
                        onChange={(event) => setField3(event.target.value)}
                    />
                </label>
                <br />
                <label className="option">
                    Children
                    <input
                        type="text"
                        value={field4}
                        onChange={(event) => setField4(event.target.value)}
                    />
                </label>
                <br />
                <label className="option">
                    Room
                    <input
                        type="text"
                        value={field5}
                        onChange={(event) => setField5(event.target.value)}
                    />
                </label>
                <br />
                <button type="submit" className="submit-btn">
                    Search
                </button>
            </form>
        </div>
    );
}

export default SearchPopup;

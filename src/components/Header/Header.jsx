import { faBed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState, useEffect, useRef } from "react";
import { DateRange } from "react-date-range";
function Header() {
    const [showDateRange, setShowDateRange] = useState(false);
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);

    const handleDateRangeChange = (item) => {
        setState([item.selection]);
    };

    const handleInputClick = () => {
        setShowDateRange(!showDateRange);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.replace("./search");
    };
    const modalRef = useRef();
    const inputDateRef = useRef();

    useEffect(() => {
        const handleOutsideClick = (event) => {
            console.log(showDateRange);
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target) &&
                event.target !== inputDateRef.current
            ) {
                if (showDateRange === true) {
                    setShowDateRange(!showDateRange);
                }
            }
        };

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [showDateRange]);

    return (
        <div className="header">
            <h1>A lifetime of discounts? It's Genius</h1>
            <p>
                Get reward for your travels - unlock instant saving of 10% or
                more with a free account
            </p>
            <button className="action-btn">Sign in / Register</button>
            <form className="form-header">
                <div>
                    <FontAwesomeIcon icon={faBed} className="navbar-icon" />
                    <input
                        placeholder="Where are you going?"
                        className="input-no-border"
                    ></input>
                </div>
                <div className="date-range-wrapper">
                    <FontAwesomeIcon icon="fa-sharp fa-solid fa-calendar-days" />
                    <input
                        onClick={handleInputClick}
                        defaultValue={`${state[0].startDate.toLocaleDateString()} to ${state[0].endDate.toLocaleDateString()}`}
                        className="date-range-input"
                        ref={inputDateRef}
                    />
                    {showDateRange && (
                        <div ref={modalRef} className="date-range">
                            <DateRange
                                editableDateInputs={true}
                                onChange={handleDateRangeChange}
                                moveRangeOnFirstSelection={false}
                                ranges={state}
                            />
                        </div>
                    )}
                </div>
                <select id="guests" name="guests">
                    <option value="1">1 adult, 0 children, 1 room </option>
                    <option value="2">2 adult, 0 children, 2 room </option>
                    <option value="3">2 adult, 1 children, 1 room </option>
                    <option value="4">2 adult, 2 children, 2 room </option>
                    <option value="5">3 adult, 0 children, 1 room </option>
                    <option value="6">3 adult, 1 children, 2 room </option>
                </select>
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="action-btn"
                >
                    Search
                </button>
            </form>
        </div>
    );
}

export default Header;

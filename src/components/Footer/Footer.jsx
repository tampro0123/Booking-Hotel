import footerData from "../../data/footer.json";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
    return (
        <div className="footer">
            {footerData.map((column) => (
                <div key={column.col_number} className="footer-column">
                    {column.col_values.map((value) => (
                        <Link className="footer-router" key={value} to="#">
                            {value}
                        </Link>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Footer;

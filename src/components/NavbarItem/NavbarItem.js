import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './NavbarItem.css'

function NavbarItem(item) {
  return (<li className={item.props.active ? "navbar-item active" : "navbar-item"}>
    <a href="/" className="navbar-link">
      <FontAwesomeIcon icon={item.props.icon} className="navbar-icon" />
      <p> {item.props.type}</p>

    </a>
  </li>);
}

export default NavbarItem;
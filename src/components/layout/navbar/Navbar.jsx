import logo from "../../../assets/logo.png";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
const Navbar = ({handleClick}) => {
  
  return (
    <div className="nav-container">
      <img src={logo} alt="Logo de marca" className="nav-logo" />
      <ul className="nav-menu">
        <li onClick={handleClick} className="menu-item">
          Pantalones
        </li>
        <li onClick={handleClick} className="menu-item">
          Medias
        </li>
        <li onClick={handleClick} className="menu-item">
          Ropa interior
        </li>
        <li onClick={handleClick} className="menu-item">
          Gorras y gorritos
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;

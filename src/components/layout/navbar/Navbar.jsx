import logo from "../../../assets/logo.png";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
const Navbar = ({handleClick}) => {
  
  return (
    <div className="nav-container">
      <img src={logo} alt="Logo de marca" className="nav-logo" />
      <ul className="nav-menu">
        <li onClick={handleClick} className="menu-item">
          Home
        </li>
        <li onClick={handleClick} className="menu-item">
          Todos
        </li>
        <li onClick={handleClick} className="menu-item">
          Perfumeria
        </li>
        <li onClick={handleClick} className="menu-item">
          Maquillaje
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;

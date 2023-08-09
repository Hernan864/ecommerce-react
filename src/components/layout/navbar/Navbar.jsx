import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
const Navbar = ({userRol}) => {
  
  return (
    <div className="nav-container">
      <Link to="/">
        <img src={logo} alt="Logo de marca" className="nav-logo" />
      </Link>
      <ul className="nav-menu">
        <Link to="/">
          <li className="menu-item">Todos</li>
        </Link>
        <Link to="/category/perfumeria">
          <li className="menu-item">Perfumeria</li>
        </Link>
        <Link to="/category/maquillaje">
          <li className="menu-item">Maquillaje</li>
        </Link>
     
        {
          userRol === "admin" && <Link to="/dashboard"><li className="menu-item">Admin</li></Link>
        }
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;

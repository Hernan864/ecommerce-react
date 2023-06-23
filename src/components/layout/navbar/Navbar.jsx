import logo from "../../../assets/logo.png";
import CartWidget from "../../cartWidget/CartWidget";
import "./Navbar.css";
const Navbar = () => {
  const handleClick = (e) => {
    console.log("Ya clickeaste", e.target.innerText);
    switch (e.target.innerText.toUpperCase()) {
      case "HOME":
        alert("Preciono el Link del Home");

        break;
      case "NATURA":
        alert("Preciono el Link del Natura");

        break;
      case "TUPPERWARE":
        alert("Preciono el Link del Tupperware");

        break;
      case "CARRITO":
        alert("Preciono el Link del carrito");

        break;

      default:
        break;
    }
  };
  return (
    <div className="nav-container">
      <img src={logo} alt="Logo de marca" className="nav-logo" />
      <ul className="nav-menu">
        <li onClick={handleClick} className="menu-item">
          Home
        </li>
        <li onClick={handleClick} className="menu-item">
          Natura
        </li>
        <li onClick={handleClick} className="menu-item">
          Tupperware
        </li>
        <li onClick={handleClick} className="menu-item">
          Carrito
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;

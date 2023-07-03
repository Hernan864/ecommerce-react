import Navbar from "./Navbar"

const NavbarContainer = () => {
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
        <div>
            <Navbar handleClick={handleClick}/>
        </div>
    )
}

export default NavbarContainer
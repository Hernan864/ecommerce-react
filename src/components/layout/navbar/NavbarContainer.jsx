import Navbar from "./Navbar"

const NavbarContainer = () => {
    const handleClick = (e) => {
        console.log("Ya clickeaste", e.target.innerText);
        switch (e.target.innerText.toUpperCase()) {
          case "HOME":
            alert("Preciono el Link del Home");
    
            break;
          case "TODOS":
            alert("Preciono el Link de todos");
    
            break;
          case "PERFUMERIA":
            alert("Preciono el Link de perfumeria");
    
            break;
          case "MAQUILLAJE":
            alert("Preciono el Link de maquillaje");
    
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
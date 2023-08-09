import Navbar from "./Navbar"

const NavbarContainer = () => {
    let userRol="admin";
    return (
        <div>
            <Navbar userRol={userRol}/>
        </div>
    )
}

export default NavbarContainer
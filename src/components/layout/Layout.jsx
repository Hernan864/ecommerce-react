import { Outlet } from "react-router-dom"
import NavbarContainer from "./navbar/NavbarContainer"
import FooterContainer from "./footer/FooterContainer"

const Layout = () => {
  return (
    <div>
      <NavbarContainer/>
      <Outlet/>
      <FooterContainer/>
    </div>
  )
}

export default Layout
import DesktopNavbar from "../src/assets/Navbar/DesktopNavbar";
import { Outlet } from "react-router-dom";
import MobileNavbar from "../src/assets/Navbar/MobileNavbar";

function Layout({changeLan, fadeLan, toggleLan, navbarBg}) {
  return (
    <div className="font-urbanist pt-20 text-white bg-gradient-to-b from-[#0B1120] to-[#483D8B] min-h-screen">
        <MobileNavbar {...{changeLan, fadeLan, toggleLan, navbarBg}} />
        <DesktopNavbar {...{changeLan, fadeLan, toggleLan, navbarBg}} />
        <Outlet />
    </div>
  )
}

export default Layout
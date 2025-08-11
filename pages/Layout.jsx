import Navbar from "../src/assets/Navbar/Navbar"
import { Outlet } from "react-router-dom"

function Layout({changeLan, fadeLan, toggleLan, navbarBg}) {
  return (
    <div className="font-urbanist pt-20 text-white bg-gradient-to-b from-[#0B1120] to-[#483D8B] min-h-screen">
        <Navbar changeLan={changeLan} fadeLan={fadeLan} toggleLan={toggleLan} navbarBg={navbarBg} />
        <Outlet />
    </div>
  )
}

export default Layout
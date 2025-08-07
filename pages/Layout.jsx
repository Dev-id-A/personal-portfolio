import Navbar from "../src/assets/Navbar/Navbar"
import { Outlet } from "react-router-dom"

function Layout({changeLan, fadeLan, toggleLan}) {
  return (
    <div className="bg-gradient-to-b from-[#2C4A9D]  via-[#3B82F6] to-[#93C5FD] min-h-screen">
        <Navbar changeLan={changeLan} fadeLan={fadeLan} toggleLan={toggleLan} />
        <Outlet />
    </div>
  )
}

export default Layout
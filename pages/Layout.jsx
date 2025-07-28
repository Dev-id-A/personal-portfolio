import Navbar from "../src/assets/Navbar/Navbar"
import { Outlet } from "react-router-dom"

function Layout({changeLan, fadeLan, toggleLan}) {
  return (
    <div>
        <Navbar changeLan={changeLan} fadeLan={fadeLan} toggleLan={toggleLan} />
        <Outlet />
    </div>
  )
}

export default Layout
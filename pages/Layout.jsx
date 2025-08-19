import DesktopNavbar from "../src/assets/Navbar/DesktopNavbar";
import { Outlet } from "react-router-dom";
import MobileNavbar from "../src/assets/Navbar/MobileNavbar";
import LoadingPage from "../pages/LoadingPage";
import { useState, useEffect } from 'react';

function Layout({changeLan, fadeLan, toggleLan, navbarBg}) {
    const [loading, setLoading] = useState(false);
    
  
    useEffect(()=>{

      if(!sessionStorage.getItem("visited")){
        setLoading(true)
        const loadingTimer = setTimeout(()=>{
        sessionStorage.setItem("visited","true");
        setLoading(false);
        },2000)

      return ()=> clearTimeout(loadingTimer)
      }
    },[])

  return (
    <div className="font-urbanist text-white bg-gradient-to-b from-[#0B1120] to-[#483D8B] min-h-screen">
    {loading ? (<LoadingPage />) :
    (
      <div className="pt-20">
        <MobileNavbar {...{changeLan, fadeLan, toggleLan, navbarBg}} />
        <DesktopNavbar {...{changeLan, fadeLan, toggleLan, navbarBg}} />
        <Outlet />
      </div>
    )}
    
    </div>
  )
}

export default Layout
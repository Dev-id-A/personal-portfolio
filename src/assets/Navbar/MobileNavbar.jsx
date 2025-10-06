import { useState } from 'react';
import NavbarLink from './NavbarLink';
import Hamburger from './Hamburger';
import XButton from './XButton';

function MobileNavbar({changeLan, fadeLan, toggleLan, navbarBg}) {
  const [displayNavbar, setDisplayNavbar] = useState(false)

  return (
        <div className={`flex fixed items-center text-2xl px-3 w-full 
          ${navbarBg ? "animation-all duration-300 bg-[#0b1120a6] backdrop-blur-md":""}
          ${displayNavbar ? "h-full flex-col bg-[#0b1120a6] backdrop-blur-md":"h-20 flex-row" } fixed z-50 top-0 
          animation-all duration-500
          sm:hidden`}>

        <div className={`${displayNavbar ? "flex flex-col":"hidden"}`}>
        <img src="/dev-id-logo.svg" alt="Dev-id-logo" className="size-30 mx-auto drop-shadow-[0_0_30px_#48D1CC]" />

          <NavbarLink to="/" id="home-nav" {...{changeLan, fadeLan, setDisplayNavbar}} ><h2>{changeLan == "es" ? "Inicio":"Home"}</h2></NavbarLink>

          <NavbarLink to="aboutMe" id="about-me-nav" {...{changeLan, fadeLan, setDisplayNavbar}} ><h2>{changeLan == "es" ? "Sobre mí":"About me"}</h2></NavbarLink>

          <NavbarLink to="projects" id="projects-nav" {...{changeLan, fadeLan, setDisplayNavbar}} ><h2>{changeLan == "es" ? "Proyectos":"Projects"}</h2></NavbarLink>

          <NavbarLink to="contact" id="contact-nav" {...{changeLan, fadeLan, setDisplayNavbar}} ><h2>{changeLan == "es" ? "Contacto":"Contact"}</h2></NavbarLink>
        </div>

        <button onClick={()=> setDisplayNavbar(!displayNavbar)} className={`${displayNavbar ? "mt-15":""}`}>
          {displayNavbar ? <XButton/>:<Hamburger/>}
        </button>

        <button id="change-language" onClick={toggleLan} className={`${displayNavbar ? "hidden":""} ml-auto h-10 w-20 rounded-full bg-gray-600 px-2 cursor-pointer`}>
            <div className="h-8 w-16 rounded-full bg-gray-400">
                <div className={`text-lg border size-8 rounded-full bg-gray-500 transition-all duration-300 ease-in-out 
                  ${changeLan =="es" ? "translate-x-0":"translate-x-8"}`}>
                    <p className="xl:hidden">{changeLan == "es" ? "ES":"EN"}</p>
                </div>
            </div>
        </button>

    </div>
  )
}

export default MobileNavbar
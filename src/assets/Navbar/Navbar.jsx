import React from 'react'
import NavbarA from './NavbarA'

function Navbar({changeLan, fadeLan, toggleLan}) {
  return (
    <div className="flex items-center justify-end gap-10 px-20
                    w-full h-20 text-2xl">
        <h1 id="name-navbar" className="mr-auto text-3xl">Dev-id</h1>

          <NavbarA id="home-nav" changeLan={changeLan} fadeLan={fadeLan}><h2>{changeLan == "es" ? "Inicio":"Home"}</h2></NavbarA>

          <NavbarA id="about-me-nav" changeLan={changeLan} fadeLan={fadeLan}><h2>{changeLan == "es" ? "Sobre mí":"About me"}</h2></NavbarA>

          <NavbarA id="projects-nav" changeLan={changeLan} fadeLan={fadeLan}><h2>{changeLan == "es" ? "Proyectos":"Projects"}</h2></NavbarA>

          <NavbarA id="contact-nav" changeLan={changeLan} fadeLan={fadeLan}><h2>{changeLan == "es" ? "Contacto":"Contact"}</h2></NavbarA>
                    
        <button id="change-language" onClick={toggleLan} className="h-10 w-20 rounded-full bg-gray-600 px-2 cursor-pointer">
            <div className="h-8 w-16 rounded-full bg-gray-400">
                <div className={`border size-8 rounded-full bg-gray-500 transition-all duration-300 ease-in-out ${changeLan =="es" ? "translate-x-0":"translate-x-8"}`}></div>
            </div>
        </button>

        <div id="actual-languaje" className={`size-8 transition-opacity duration-300 ${fadeLan ? "opacity-0":"opacity-100"}`}>
          <h2 className="text-3xl">{changeLan == "es" ? "ES":"EN"}</h2>
        </div>
    </div>
  )
}

export default Navbar
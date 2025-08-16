import NavbarLink from './NavbarLink';

function DesktopNavbar({changeLan, fadeLan, toggleLan, navbarBg}) {
  return (
    <div className={`hidden items-center text-lg justify-end px-3 w-full h-20 fixed z-50 top-0 
    ${navbarBg ? " animation-all duration-500 bg-[#0b1120a6] backdrop-blur-md":""} 
    xl:gap-10 xl:px-15
    lg:text-2xl 
    sm:flex
    `}>
        <img src="/dev-id-logo.svg" alt="Dev-id-logo" className="md:size-55 size-30 mr-auto drop-shadow-[0_0_30px_#48D1CC]" />

          <NavbarLink to="/" id="home-nav" changeLan={changeLan} fadeLan={fadeLan}><h2>{changeLan == "es" ? "Inicio":"Home"}</h2></NavbarLink>

          <NavbarLink to="aboutMe" id="about-me-nav" changeLan={changeLan} fadeLan={fadeLan}><h2>{changeLan == "es" ? "Sobre mí":"About me"}</h2></NavbarLink>

          <NavbarLink to="projects" id="projects-nav" changeLan={changeLan} fadeLan={fadeLan}><h2>{changeLan == "es" ? "Proyectos":"Projects"}</h2></NavbarLink>

          <NavbarLink to="contact" id="contact-nav" changeLan={changeLan} fadeLan={fadeLan}><h2>{changeLan == "es" ? "Contacto":"Contact"}</h2></NavbarLink>
                    
        <button id="change-language" onClick={toggleLan} className="h-10 w-20 rounded-full bg-gray-600 px-2 cursor-pointer">
            <div className="h-8 w-16 rounded-full bg-gray-400">
                <div className={`text-lg border size-8 rounded-full bg-gray-500 transition-all duration-300 ease-in-out 
                  ${changeLan =="es" ? "translate-x-0":"translate-x-8"}`}>
                    <p className="xl:hidden">{changeLan == "es" ? "ES":"EN"}</p>
                </div>
            </div>
        </button>

        <div id="actual-languaje" className={`size-8 transition-opacity duration-300 ${fadeLan ? "opacity-0":"opacity-100"}`}>
          <h2 className="text-2xl hidden xl:block">{changeLan == "es" ? "ES":"EN"}</h2>
        </div>
    </div>
  )
}

export default DesktopNavbar
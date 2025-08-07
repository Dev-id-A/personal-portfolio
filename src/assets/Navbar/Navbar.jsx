import NavbarLink from './NavbarLink';

function Navbar({changeLan, fadeLan, toggleLan}) {
  return (
    <div className="flex items-center justify-end gap-10 px-20
                    w-full h-20 text-2xl">
        <img src="public/dev-id-logo.svg" alt="Dev-id-logo" className="size-55 mr-auto drop-shadow-[0_0_30px_#48D1CC]" />

          <NavbarLink to="/" id="home-nav" changeLan={changeLan} fadeLan={fadeLan}><h2>{changeLan == "es" ? "Inicio":"Home"}</h2></NavbarLink>

          <NavbarLink to="aboutMe" id="about-me-nav" changeLan={changeLan} fadeLan={fadeLan}><h2>{changeLan == "es" ? "Sobre mí":"About me"}</h2></NavbarLink>

          <NavbarLink to="projects" id="projects-nav" changeLan={changeLan} fadeLan={fadeLan}><h2>{changeLan == "es" ? "Proyectos":"Projects"}</h2></NavbarLink>

          <NavbarLink to="contact" id="contact-nav" changeLan={changeLan} fadeLan={fadeLan}><h2>{changeLan == "es" ? "Contacto":"Contact"}</h2></NavbarLink>
                    
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
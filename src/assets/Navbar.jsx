import React from 'react'

function Navbar() {
  return (
    <div className="flex items-center justify-end gap-20 px-20
                    w-full h-20  text-2xl">
        <h1 id="name-navbar" className="mr-auto text-3xl">David Aranzana</h1>

        <a href="#about-me" id="about-me-nav" className="hover:scale-110 hover:text-white"><h2>Sobre mí</h2></a>
        <a href="#projects" id="projects-nav" className="hover:scale-110 hover:text-white"><h2>Proyectos</h2></a>
        <a href="#contact" id="contact-nav" className="hover:scale-110 hover:text-white"><h2>Contacto</h2></a>

        <button id="change-language" onClick={()=>console.log("hola")} className="h-10 w-20 rounded-full bg-gray-600 px-1.5 cursor-pointer">
            <div className="h-8 w-16  rounded-full bg-gray-400">
                <div className="border size-8 rounded-full bg-gray-500"></div>
            </div>
        </button>

        <h2 className="text-3xl">ES</h2>
    </div>
  )
}

export default Navbar
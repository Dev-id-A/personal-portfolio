import React from 'react'

function NavbarA({fadeLan, children}) {
  return (
    <a className={`w-40 hover:scale-110 hover:text-white transition-opacity duration-300" 
    ${fadeLan ? "opacity-0":"opacity-100"}`}>{children}</a>
  )
}

export default NavbarA
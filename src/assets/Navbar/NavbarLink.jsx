import { Link } from "react-router-dom"

function NavbarLink({to, fadeLan, children, setDisplayNavbar}) {
  return (
    <Link to={to} onClick={()=> setDisplayNavbar(false)} className={`relative w-50 text-center 
      hover:scale-110 transition-transform duration-300 ease-in-out hover:text-white 
      after:content-[""] after:origin-center after:absolute after:block after:scale-x-0 after:bg-white
      after:h-[2px] after:w-full after:transition-transform after:duration-300 hover:after:scale-x-50
      transition-opacity duration-300" ${fadeLan ? "opacity-0":"opacity-100"}`}>{children}</Link>
  )
}

export default NavbarLink
import { Link } from "react-router-dom"

function NavbarLink({to, fadeLan, children, setDisplayNavbar}) {
  return (
    <Link to={to} onClick={()=> setDisplayNavbar && setDisplayNavbar(false)} className={`relative text-center
      hover:scale-110 hover:text-white border-y sm:border-none w-screen md:w-50 py-9
      after:content-[""] after:origin-center after:absolute after:block after:scale-x-0 after:bg-white
      after:h-[2px] after:w-full after:transition-transform after:duration-300 hover:after:scale-x-50
      transition-all duration-300 ease-in-out" ${fadeLan ? "opacity-0":"opacity-100"}`}>{children}</Link>
  )
}

export default NavbarLink
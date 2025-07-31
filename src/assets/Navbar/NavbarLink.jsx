import { Link } from "react-router-dom"

function NavbarLink({to, fadeLan, children}) {
  return (
    <Link to={to} className={`w-40 hover:scale-110 transition-transform duration-300 ease-in-out
      transition-opacity duration-300" ${fadeLan ? "opacity-0":"opacity-100"}`}>{children}</Link>
  )
}

export default NavbarLink
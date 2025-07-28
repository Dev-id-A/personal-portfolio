import { Link } from "react-router-dom"

function HeroBtn({fadeLan, children, to}) {
  return (
    <Link to={to}><button id="hero-btn" className={`border h-25 w-50 rounded-3xl text-2xl text-center 
        hover:cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out
        transition-opacity duration-300" ${fadeLan ? "opacity-0":"opacity-100"}`}>{children}</button></Link>
  )
}

export default HeroBtn
import { Link } from "react-router-dom"

function HeroBtn({children, to}) {
  return (
    <Link to={to}><button id="hero-btn" className="bg-[#483D8F] hover:shadow-[0_0_15px_white] border h-25 w-50 rounded-3xl text-2xl text-center 
        hover:cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
        >{children}</button></Link>
  )
}

export default HeroBtn
import { Link } from "react-router-dom"

function HeroBtn({children, to}) {
  return (
    <Link to={to}><button id="hero-btn" className="bg-[#483D8F] hover:shadow-[0_0_15px_white] border rounded-3xl text-center h-15 w-22 text-md 
        lg:h-25 lg:w-50
        md:h-20 md:w-40 md:text-2xl
        hover:cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
        >{children}</button></Link>
  )
}

export default HeroBtn
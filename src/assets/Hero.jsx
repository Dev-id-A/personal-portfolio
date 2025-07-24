import React from 'react'

function Hero({changeLan, fadeLan}) {
  return (
    <section className="grid grid-cols-1 place-items-center mt-20" id="hero-section">
        <img className="size-100 border" alt="David Aranzana" id="presentation-img"></img>
        <h1 id="presentation" className={`mt-10 text-5xl
            transition-opacity duration-300" ${fadeLan ? "opacity-0":"opacity-100"}`}>
            {changeLan == "es" ? "¡Hola! Soy David Aranzana, un desarrollador Front-end":"Hi! I'm David Aranzana, Front-end developer"}
        </h1>
    </section>
  )
}

export default Hero
import HeroBtn from "./HeroBtn";

function Hero({changeLan, fadeLan}) {
  return (
    <main id="hero-main" className={`grid grid-cols-1 place-items-center mt-20 transition-opacity duration-300" ${fadeLan ? "opacity-0":"opacity-100"}`}>
        <img className="size-100 border" alt="David Aranzana" id="presentation-img"></img>
        <h1 id="presentation" className="mt-10 text-5xl">
            {changeLan == "es" ? "¡Hola! Soy David Aranzana, desarrollador Front-end":
            "Hi! I'm David Aranzana, Front-end developer"}
        </h1>

        <h2  id="description" className="mt-18 text-2xl text-center px-100">
          {changeLan == "es" ? `Soy un desarrollador web autodidacta con muchas ganas de aprender y seguir creciendo para dar el salto al mundo profesional. 
          Siempre me implico al máximo en cada uno de mis proyectos, cuidando que todo funcione bien, sea accesible y se vea bien en cualquier dispositivo.`:

          `I'm a self-taught web developer with a strong desire to keep learning and growing, aiming to start my journey in the professional world. I always 
          give my best in every project, ensuring everything runs smoothly, is accessible, and responsive.`}
          </h2>

          <section id="btn-section" className="grid grid-cols-3 gap-20 mt-18">

            <HeroBtn  to="aboutMe">{changeLan == "es" ? "Sobre mí":"About me"}</HeroBtn>
            <HeroBtn  to="projects">{changeLan == "es" ? "Proyectos":"Projects"}</HeroBtn>
            <HeroBtn  to="contact">{changeLan == "es" ? "Contacto":"Contact"}</HeroBtn>

          </section>
    </main>
  )
}

export default Hero
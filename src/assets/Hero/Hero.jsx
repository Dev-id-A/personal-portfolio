import HeroBtn from "./HeroBtn";

function Hero({changeLan, fadeLan}) {
  return (
    <main id="hero-main" className={`grid grid-cols-1 place-items-center mt-10 transition-opacity duration-300
      sm:mt-15" 
    ${fadeLan ? "opacity-0":"opacity-100"}`}>
        <img className="md:size-100 size-50 border" alt="David Aranzana" id="presentation-img"></img>
        <h1 id="presentation" className="mt-10 md:text-5xl text-xl text-center px-10">
            {changeLan == "es" ? "¡Hola! Soy David Aranzana, desarrollador Front-end":
            "Hi! I'm David Aranzana, Front-end developer"}
        </h1>

        <h2  id="description" className="text-sm mt-8 text-center px-5
        xl:px-100
        lg-px-50
        md:mt-18 md:text-2xl md:px-20">
          {changeLan == "es" ? `Soy un desarrollador web autodidacta con muchas ganas de aprender y seguir creciendo para dar el salto al mundo profesional. 
          Siempre me implico al máximo en cada uno de mis proyectos, cuidando que todo funcione bien, sea accesible y se vea bien en cualquier dispositivo.`:

          `I'm a self-taught web developer with a strong desire to keep learning and growing, aiming to start my journey in the professional world. I always 
          give my best in every project, ensuring everything runs smoothly, is accessible, and responsive.`}
          </h2>

          <section id="btn-section" className="grid grid-cols-3 gap-5 mt-18 pb-10
          sm:px-20 sm:gap-20
          ">

            <HeroBtn  to="aboutMe">{changeLan == "es" ? "Sobre mí":"About me"}</HeroBtn>
            <HeroBtn  to="projects">{changeLan == "es" ? "Proyectos":"Projects"}</HeroBtn>
            <HeroBtn  to="contact">{changeLan == "es" ? "Contacto":"Contact"}</HeroBtn>

          </section>
    </main>
  )
}

export default Hero
import SVG from "../src/assets/SVG"

const svgData = [
  {src: "html5", alt: "HTML"},
  {src: "css", alt: "CSS"},
  {src: "javascript", alt: "JavaScript"},
  {src: "typescript", alt: "TypeScript"},
  {src: "react", alt: "React"},
  {src: "nodedotjs", alt: "Node.js"},
  {src: "bootstrap", alt: "Bootstrap"},
  {src: "jquery", alt: "jQuery"},
  {src: "sass", alt: "SASS"},
  {src: "tailwindcss", alt: "TailwindCSS"},
  {src: "d3", alt: "D3.js"},
  {src: "postgresql", alt: "PostgreSQL"}
]

function AboutMe({fadeLan, changeLan}) {
  return (
    <main className={`transition-opacity duration-300 ${fadeLan ? "opacity-0":"opacity-100"}`}>
      <h1 id="username" className="text-center text-5xl mt-10">David Aranzana</h1>

      <section className="grid grid-cols-2">

        <div id="about-me-text" className="text-justify px-30 mt-10">

          <h2 id="about-me-title" className="text-center text-4xl">{changeLan == "es" ? "Sobre mí":"About me"}</h2>

          <p id="presentation" className={`text-xl mt-10 transition-opacity duration-300`}>

          {changeLan == "es"? 
          //ES version
          `Hola, soy David Aranzana, un desarrollador Front-end que continúa aprendiendo y formándose cada día. Especializándose en el campus 
          virtual de freeCodeCamp. En todo este tiempo he conseguido una grán base en este campo, empezando por HTML, CSS y JavaScript, y reforzándolo
          estudiando React. Además de aprender con librerías y frameworks como Bootstrap, TailwindCSS o jQuery que nos facilitan el día a día como 
          desarrolladores.`

          //EN version
          :`Hi, I’m David Aranzana, a Front-end developer who keeps learning and growing every day, currently specializing through the freeCodeCamp 
          virtual campus. During this time, I’ve built a solid foundation in web development, starting with HTML, CSS, and JavaScript, and 
          strengthening it with React. I’ve also worked with libraries and frameworks like Bootstrap, TailwindCSS, and jQuery, which help streamline 
          the day-to-day work of a developer.`}
          </p>

          <p id="projects" className={`text-xl mt-10 transition-opacity duration-300`}>

          {changeLan == "es" ? 

          //ES version
          `Mis proyectos son, en su mayoría, parte de los certificados de freeCodeCamp. Cada uno de ellos ha sido una oportunidad para aprender, 
          mejorar mis habilidades y descubrir lo apasionante que puede ser el desarrollo web. Gracias a ellos también he aprendido a enfrentar 
          problemas reales y encontrar soluciones prácticas. Ayudándome así, también, a aprender nuevas formas de resolver los problemas que van surgiendo 
          y siempre trato de hacer mis proyectos responsivos y tener un código limpio y bien estructurado.`:

          //EN version
          `Most of my projects are part of the freeCodeCamp certifications. Each one has been an opportunity to learn, improve my skills, 
          and discover how exciting web development can be. Projects have also helped me face real challenges and find practical solutions. I 
          always aim to make my projects responsive, with clean, well-structured code`}
          </p>

          <p id="conclusion" className="text-xl mt-10">

          {changeLan == "es" ? 
          `Por último, me llama mucho la atención el back-end. Creo que aprenderlo me puede ayudar a ser más completo como desarrollador y también a 
          entender mejor todo lo que hay detrás de una aplicación. Ahora mismo estoy metiéndome con bases de datos usando PostgreSQL. Tengo muchas ganas de 
          seguir creciendo y empezar a trabajar con un buen equipo.`:
          `Finally, I’m really interested in back-end development. I believe learning it will help me become a more well-rounded developer and also better 
          understand everything behind an application. Right now, I’m diving into databases using PostgreSQL. I’m eager to keep growing and start working 
          with a great team.`}
          
          </p>

        </div>

        <div id="tecnologies-div" className="mt-10 flex flex-col items-center">
          <h2 id="tecnologies-title" className="text-4xl">{changeLan == "es" ? "Tecnologías":"Tecnologies"}</h2>

          <div id="technologies-icons" className="grid grid-cols-3 gap-20 mt-15 space-around">

            {svgData.map((svg) => (
              <SVG src={svg.src} key={svg.alt} alt={svg.alt}/>
            ))}
            
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutMe
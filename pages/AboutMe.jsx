import SVG from "../src/assets/SVG/SVG"
import {paths} from "../src/assets/SVG/Paths"


const svgData = [
  {src: paths.html, alt: "HTML", color: "#E34F26"},
  {src: paths.css, alt: "CSS", color: "#1572B6"},
  {src: paths.javascript, alt: "JavaScript", color: "#F7DF1E"},
  {src: paths.typescript, alt: "TypeScript", color: "#3178C6"},
  {src: paths.react, alt: "React", color: "#61DAFB"},
  {src: paths.node, alt: "Node.js", color: "#339933"},
  {src: paths.bootstrap, alt: "Bootstrap", color: "#7952B3"},
  {src: paths.jquery, alt: "jQuery", color: "#0769AD"},
  {src: paths.sass, alt: "SASS", color: "#CC6699"},
  {src: paths.tailwind, alt: "TailwindCSS", color: "#06B6D4"},
  {src: paths.d3, alt: "D3.js", color: "#F9A03C"},
  {src: paths.postgre, alt: "PostgreSQL", color: "#336791"}
]

function AboutMe({fadeLan, changeLan}) {
  return (
    <main className={`px-10 transition-opacity duration-300 ${fadeLan ? "opacity-0":"opacity-100"}`}>

      <h1 id="name" className="font-doto2xl mx-auto text-5xl mt-10 w-fit transition-all drop-shadow-[0_0_30px_white] 
      hover:cursor-default hover:drop-shadow-[0_0_10px_white] hover:text-[#48D1CC]">
        David Aranzana Medina</h1>

      <section className="grid grid-cols-2">

        <div id="about-me-text" className="group text-justify py-10 px-30 mt-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_5px_1px_white]">

          <h2 id="about-me-title" className="group-hover:text-white transition-colors duration-500 text-center text-4xl">
            {changeLan == "es" ? "Sobre mí":"About me"}</h2>

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

        <div id="tecnologies-div" className="group/div mt-10 flex flex-col items-center py-10
        transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_5px_1px_white]">
          <h2 id="tecnologies-title" className="group-hover/div:text-white transition-colors duration-500 text-4xl">
          {changeLan == "es" ? "Tecnologías":"Tecnologies"}</h2>

          <div id="technologies-icons" className="grid grid-cols-3 gap-20 mt-15 space-around">

            {svgData.map((svg) => (
              <SVG d={svg.src} key={svg.alt} alt={svg.alt} color={svg.color}/>
            ))}
            
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutMe
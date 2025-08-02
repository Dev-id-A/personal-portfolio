import Project from "../src/assets/Project"

function Projects({fadeLan, changeLan }) {
  return (
    <main id="projects-main" className={`px-20 transition-opacity duration-300 ${fadeLan ? "opacity-0":"opacity-100"}`}>
      <h1 id="projects-title" className="text-center text-5xl mt-10">{changeLan == "es" ? "Proyectos":"Projects"}</h1>
      
      <section id="projects-section" className="grid grid-cols-6 place-items-center mt-40 gap-6">
        <Project divClass={"col-span-2"}></Project>
        <Project divClass={"col-span-2"}></Project>
        <Project divClass={"col-span-2"}></Project>
        <Project divClass={"col-span-3"}></Project>
        <Project divClass={"col-span-3"}></Project>
      </section>
      
      
    </main>
  )
}

export default Projects
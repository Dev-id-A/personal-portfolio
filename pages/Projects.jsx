import { useState } from "react";
import Project from "../src/assets/Project/Project";
import { ProjectData } from "../src/assets/Project/ProjectData";

function Projects({fadeLan, changeLan }) {
  const [certifications, setCertifications] = useState(false);
  const [displayProjects, setDisplayProjects] = useState("all");
  const [fadeProjects, setFadeProjects] = useState(false)
  const filteredProjects = ProjectData.filter(project => displayProjects === "all" || project.type === displayProjects);

  const toggleFade = (displayProjects) =>{
    setFadeProjects(true);
    setTimeout(()=> setFadeProjects(false),600);
    setTimeout(()=> setDisplayProjects(displayProjects),400)
  }

  return (
    <main id="projects-main" className={`px-20 transition-opacity duration-300 ${fadeLan ? "opacity-0":"opacity-100"}`}>
      <h1 id="projects-title" className="text-center text-5xl mt-10">{changeLan == "es" ? "Proyectos":"Projects"}</h1>
      
        <section id="project-btn-section" className="flex flex-cols justify-center mt-30 gap-20 text-center text-3xl">

          <button id="all" className="border hover:cursor-pointer hover:scale-110 hover:text-blue-500 rounded-2xl p-3
          transition-transform duration-300" 
          onClick={()=> toggleFade("all")}>
            {changeLan == "es" ? "Todos los proyectos":"All projects"}</button>
          <button id="certifications" className="border hover:cursor-pointer hover:scale-110 hover:text-blue-500 rounded-2xl p-3
          transition-transform duration-300" 
          onClick={()=>setCertifications(!certifications)}>
            {changeLan == "es" ? "Certificados":"Certifications"}</button>

        </section>


          <div className={`flex flex-cols text-2xl justify-center mt-10 gap-5 
          transition-opacity duration-500 ${certifications == true ? "opacity-100": "opacity-0"}`}>
            <button className="border hover:cursor-pointer hover:scale-110 hover:text-blue-500 rounded-2xl p-3
            transition-transform duration-300" 
            onClick={()=> toggleFade("Front end")}>
              Front-end</button>
            <button className="border hover:cursor-pointer hover:scale-110 hover:text-blue-500 rounded-2xl p-3
            transition-transform duration-300" 
            onClick={()=> toggleFade("Data visualization")}>
              Data visualization</button>
          </div>

        <section className={`grid grid-cols-6 gap-30 place-items-center mt-20 pb-20 
        transition-opacity duration-500 ${fadeProjects == true? "opacity-0":"opacity-100"}`}>
           {filteredProjects.map((project, i)=>
                <Project key={i} projectName={project.alt} src={project.src} 
              githubLink={project.githubLink} pagesLink={project.pagesLink} 
              changeLan={changeLan} divClass={
                i === filteredProjects.length - 2 && filteredProjects.length % 3 == 2 ? "col-start-2":
                i === filteredProjects.length - 1 && filteredProjects.length % 3 == 1 ? "col-start-3":"" }/>   
           )}
        </section>
      
    </main>
  )
}

export default Projects
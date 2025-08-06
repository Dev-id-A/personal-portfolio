import { use, useState } from "react";
import Project from "../src/assets/Project/Project";
import { ProjectData } from "../src/assets/Project/ProjectData";

function Projects({fadeLan, changeLan }) {
  const [certifications, setCertifications] = useState(false)

  return (
    <main id="projects-main" className={`px-20 transition-opacity duration-300 ${fadeLan ? "opacity-0":"opacity-100"}`}>
      <h1 id="projects-title" className="text-center text-5xl mt-10">{changeLan == "es" ? "Proyectos":"Projects"}</h1>
      
        <section id="project-btn-section" className="flex flex-cols justify-center mt-30 gap-20 text-center text-3xl">

          <button id="all" className="border hover:cursor-pointer rounded-2xl p-3">{changeLan == "es" ? "Todos los proyectos":"All projects"}</button>
          <button id="certifications" className="border hover:cursor-pointer rounded-2xl p-3" onClick={()=>setCertifications(!certifications)}>
            {changeLan == "es" ? "Certificados":"Certifications"}</button>

        </section>


          <div className={`flex flex-cols text-2xl justify-center mt-10 gap-5 
          transition transition-opacity duration-500 ${certifications == true ? "opacity-100": "opacity-0"}`}>
            <button className="border hover:cursor-pointer rounded-2xl p-3">Front-end</button>
            <button className="border hover:cursor-pointer rounded-2xl p-3">Data visualization</button>
          </div>

        <section className="grid grid-cols-6 gap-30 place-items-center mt-20 pb-20">
           {ProjectData.map((project, i)=>
              <Project key={i} projectName={project.alt} src={project.src} 
              githubLink={project.githubLink} pagesLink={project.pagesLink} 
              changeLan={changeLan} divClass={
                i === ProjectData.length-2 && ProjectData.length % 3 == 2 ? "col-start-2":
                i === ProjectData.length - 1 && ProjectData.length % 3 == 1 ? "col-start-3":"" }/>
           )}
        </section>
      
    </main>
  )
}

export default Projects
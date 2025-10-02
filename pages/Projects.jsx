import { useState } from "react";
import { ProjectData } from "../src/assets/Project/ProjectData";
import XlProjectSection from "../src/assets/Project/XlProjectSection";
import LgProjectSection from "../src/assets/Project/LgProjectSection";
import MobileProjectSection from "../src/assets/Project/MobileProjectSection";

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
    <main id="projects-main" className={`px-5 sm:px-20 transition-opacity duration-300 
    ${fadeLan ? "opacity-0":"opacity-100"}`}>
      <h1 id="projects-title" className={`text-center mx-auto text-5xl mt-15 w-fit relative hover:scale-110 hover:cursor-default
      after:content-[""] after:origin-center after:absolute after:block after:scale-x-0 after:bg-white
      after:h-[2px] after:w-full after:transition-transform after:duration-300 hover:after:scale-x-105
      transition-all duration-300`}>{changeLan == "es" ? "Mis proyectos":"My projects"}</h1>
      
        <section id="project-btn-section" className="flex flex-col justify-center mt-20 gap-5 text-center text-xl
        sm:flex-row sm:gap-20 sm:text-3xl">

          <button id="all" className="border hover:cursor-pointer hover:scale-110 hover:text-blue-500 rounded-2xl p-3
          transition-transform duration-300" 
          onClick={()=> toggleFade("all")}>
            {changeLan == "es" ? "Todos los proyectos":"All projects"}</button>
          <button id="certifications" className="border hover:cursor-pointer hover:scale-110 hover:text-blue-500 rounded-2xl p-3
          transition-transform duration-300" 
          onClick={()=>setCertifications(!certifications)}>
            {changeLan == "es" ? "Certificados":"Certifications"}</button>

        </section>


          <div className={`flex flex-col text-lg justify-center mt-10 gap-5 px-5
          transition-opacity duration-500 ${certifications == true ? "opacity-100": "opacity-0"}
          sm:flex-row sm:text-2xl`}>
            <button className="border hover:cursor-pointer hover:scale-110 hover:text-blue-500 rounded-2xl p-3
            transition-transform duration-300" 
            onClick={()=> toggleFade("Front end")}>
              Front-end</button>
            <button className="border hover:cursor-pointer hover:scale-110 hover:text-blue-500 rounded-2xl p-3
            transition-transform duration-300" 
            onClick={()=> toggleFade("Data visualization")}>
              Data visualization</button>
          </div>
      
          <LgProjectSection {...{changeLan, filteredProjects, fadeProjects}} />

          <MobileProjectSection {...{changeLan, filteredProjects, fadeProjects}} />
    </main>
  )
}

export default Projects
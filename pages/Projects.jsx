import { useState } from "react";
import { ProjectData } from "../src/assets/Project/ProjectData";
import LgProjectSection from "../src/assets/Project/LgProjectSection";
import MobileProjectSection from "../src/assets/Project/MobileProjectSection";
import ProjectBtn from "../src/assets/Project/ProjectBtn";

function Projects({fadeLan, changeLan }) {
  const [certifications, setCertifications] = useState(false);
  const [displayProjects, setDisplayProjects] = useState("Relevant");
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

          <ProjectBtn children={changeLan == "es" ? "Destacados":"Relevant"} click={()=> toggleFade("Relevant")}/>

          <ProjectBtn children={changeLan == "es" ? "Todos los proyectos":"All projects"} click={()=> toggleFade("all")}/>

          <ProjectBtn children={changeLan == "es" ? "Certificados":"Certifications"} click={()=>setCertifications(!certifications)}/>

        </section>


          <div className={`flex flex-col text-lg justify-center mt-10 gap-5 px-5
          transition-opacity duration-500 ${certifications == true ? "opacity-100": "opacity-0"}
          sm:flex-row sm:text-2xl`}>

            <ProjectBtn children={"Front-end"} click={()=> toggleFade("Front end")}/>

            <ProjectBtn children={"Data visualization"} click={()=> toggleFade("Data visualization")}/>

          </div>
      
          <LgProjectSection {...{changeLan, filteredProjects, fadeProjects}} />

          <MobileProjectSection {...{changeLan, filteredProjects, fadeProjects}} />
    </main>
  )
}

export default Projects
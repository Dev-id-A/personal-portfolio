import Project from "./Project"

function LgProjectSection({changeLan, filteredProjects, fadeProjects}) {
  return (
                <section className={`grid-cols-4 gap-15 place-items-center mt-20 pb-20 
        transition-opacity duration-500 ${fadeProjects == true? "opacity-0":"opacity-100"}
        hidden lg:grid`}>
           {filteredProjects.map((project, i)=>
                <Project key={i} projectName={project.alt} src={project.src} 
              githubLink={project.githubLink} pagesLink={project.pagesLink} 
              changeLan={changeLan} description={changeLan == "es" ? project.descriptionES:project.descriptionEN}
              divClass={
                i === filteredProjects.length - 1 && filteredProjects.length % 2 == 1 ? "col-start-2":"" }/>   
           )}
        </section>
  )
}

export default LgProjectSection;
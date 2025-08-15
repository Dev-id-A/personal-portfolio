import Project from "./Project";

function XlProjectSection({changeLan, filteredProjects, fadeProjects}) {
  return (
            <section className={`grid-cols-6 gap-10 place-items-center mt-20 pb-20 
        transition-opacity duration-500 ${fadeProjects == true? "opacity-0":"opacity-100"}
        hidden xl:grid`}>
           {filteredProjects.map((project, i)=>
                <Project key={i} projectName={project.alt} src={project.src} 
              githubLink={project.githubLink} pagesLink={project.pagesLink} 
              changeLan={changeLan} divClass={
                i === filteredProjects.length - 2 && filteredProjects.length % 3 == 2 ? "col-start-2":
                i === filteredProjects.length - 1 && filteredProjects.length % 3 == 1 ? "col-start-3":"" }/>   
           )}
        </section>
  )
}

export default XlProjectSection
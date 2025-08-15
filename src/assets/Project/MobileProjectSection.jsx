import Project from "./Project"

function MobileProjectSection({changeLan, filteredProjects, fadeProjects}) {
  return (
        <section className={`grid-cols-2 gap-15 place-items-center mt-20 pb-20 
        transition-opacity duration-500 ${fadeProjects == true? "opacity-0":"opacity-100"}
        grid lg:hidden`}>
           {filteredProjects.map((project, i)=>
                <Project key={i} projectName={project.alt} src={project.src} 
              githubLink={project.githubLink} pagesLink={project.pagesLink} 
              changeLan={changeLan} />   
           )}
        </section>
  )
}

export default MobileProjectSection
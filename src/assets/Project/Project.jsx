function Project({projectName, description, divClass, changeLan}) {
  return (
    <div id="project" className={`border h-130 w-full ${divClass}`}>
        <img className="flex border h-70 w-full self-center"/>
        <h1 className="text-center text-3xl mt-5">Project name</h1>
        <p className="p-8 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi assumenda reiciendis dolorum iusto totam sit delectus magni qui sed et autem velit, consectetur officia culpa eius saepe ratione temporibus voluptas?</p>

        <div className="flex flex-cols justify-center gap-60"> 
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><p>{changeLan == "es" ? "Enlace al código":"Code Link"}</p></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><p>{changeLan == "es" ? "Enlace al proyecto":"Proyect Link"}</p></a>
        </div>
    </div>
  )
}

export default Project
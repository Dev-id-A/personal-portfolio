function Project({projectName, description, divClass, changeLan, src, githubLink, pagesLink}) {
  return (
    <div id="project" className={`border h-150 w-full p-5 rounded-xl col-span-2 ${divClass}`}>
        <img src={src} className="mx-auto border h-70 w-120"/>
        <h1 className="text-center text-3xl mt-5">{projectName}</h1>
        <p className="p-8 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi assumenda reiciendis dolorum iusto totam sit delectus magni qui sed et autem velit, consectetur officia culpa eius saepe ratione temporibus voluptas?</p>

        <div className="flex flex-cols justify-center gap-30"> 
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <p className="border w-40 h-10 flex items-center justify-center rounded-xl 
            hover:scale-120 hover:text-blue-500 animate transition-transform duration-300">
              {changeLan == "es" ? "Enlace al código":"Code Link"}</p>
          </a>
          <a href={pagesLink} target="_blank" rel="noopener noreferrer">
            <p className="border w-40 h-10 flex items-center justify-center rounded-xl 
            hover:scale-120 hover:text-blue-500 animate transition-transform duration-300" >
              {changeLan == "es" ? "Enlace al proyecto":"Proyect Link"}</p>
            </a>
        </div>
    </div>
  )
}

export default Project
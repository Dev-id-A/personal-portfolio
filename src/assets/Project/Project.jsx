function Project({ projectName, description, divClass, changeLan, src, githubLink, pagesLink}) {
  return (
    <div id="project" className={`flex flex-col justify-between text-[#0B1120] bg-white border h-full w-full p-5 rounded-xl col-span-2 
    transition-all drop-shadow-[0_0_10px_#00e1ffff] hover:scale-105 ${divClass}`}>
        <img src={src} className="mx-auto border h-40 w-120
        sm:h-70"/>
        <h1 className="text-center text-xl sm:text-3xl mt-5">{projectName}</h1>
        <p className="p-8 text-justify text-md">{description}</p>

        <div className="flex flex-col items-center justify-center gap-5
        sm:flex-row"> 
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <p className="border w-40 h-10 flex items-center justify-center rounded-xl bg-[#a9c9c1ff]
            hover:scale-120 animate transition-transform duration-300">
              {changeLan == "es" ? "Enlace al código":"Code Link"}</p>
          </a>
          <a href={pagesLink} target="_blank" rel="noopener noreferrer">
            <p className="border w-40 h-10 flex items-center justify-center rounded-xl bg-[#a9c9c1ff]
            hover:scale-120 animate transition-transform duration-300" >
              {changeLan == "es" ? "Enlace al proyecto":"Proyect Link"}</p>
            </a>
        </div>
    </div>
  )
}

export default Project
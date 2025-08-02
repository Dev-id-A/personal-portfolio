function Project({projectName, description, divClass}) {
  return (
    <div id="project" className={`border h-130 w-full ${divClass}`}>
        <img className="flex border h-70 w-full self-center"/>
        <h1 className="text-center text-3xl mt-5">Project name</h1>
        <p className="p-8 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi assumenda reiciendis dolorum iusto totam sit delectus magni qui sed et autem velit, consectetur officia culpa eius saepe ratione temporibus voluptas?</p>
    </div>
  )
}

export default Project
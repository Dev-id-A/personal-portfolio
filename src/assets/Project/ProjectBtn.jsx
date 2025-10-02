function ProjectBtn({click, children}) {
  return (
    <button id="certifications" className="border hover:cursor-pointer hover:scale-110 hover:text-blue-500 rounded-2xl p-3
          transition-transform duration-300" onClick={click}>
            {children}</button>

  )
}

export default ProjectBtn
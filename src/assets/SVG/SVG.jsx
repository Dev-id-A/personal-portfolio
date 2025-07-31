function SVG({d, alt}) {
  return (
    <div className="group size-25 hover:-translate-y-8 transition-transform duration-300">
       <svg viewBox="0 0 24 24" fill="currentColor">
            <path d={`${d}`}></path>
        </svg>
        <h2 className="text-center text-2xl mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{alt}</h2>
    </div>
  )
}

export default SVG
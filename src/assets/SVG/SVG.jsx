function SVG({d, alt, color}) {
  return (
    <div className="group size-12 hover:-translate-y-8 transition-all 
    duration-300 lg:opacity-60 hover:opacity-100 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]
    md:size-25">
       <svg viewBox="0 0 24 24" fill={`${color}`}>
            <path d={`${d}`}></path>
        </svg>
        <h2 className="text-center max-[350px]:opacity-0 opacity-100 mt-3 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300
        md:text-2xl">{alt}</h2>
    </div>
  )
}

export default SVG
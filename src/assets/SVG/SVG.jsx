function SVG({d, alt, color}) {
  return (
    <div className="group size-25 hover:-translate-y-8 transition-all duration-300 opacity-60 hover:opacity-100 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
       <svg viewBox="0 0 24 24" fill={`${color}`}>
            <path d={`${d}`}></path>
        </svg>
        <h2 className="text-center text-2xl mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{alt}</h2>
    </div>
  )
}

export default SVG
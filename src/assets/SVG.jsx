function SVG({src, alt}) {
  return (
    <div className="group size-25 hover:-translate-y-8 transition-transform duration-300">
        <img src={`src/assets/icons/${src}.svg`} alt={`${alt}`} />
        <h2 className="text-center text-2xl mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{alt}</h2>
    </div>
  )
}

export default SVG
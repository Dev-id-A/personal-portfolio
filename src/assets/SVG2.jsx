function SVG2({d}) {
  return (
    <div className="size-24 text-[#000000]">
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d={`${d}`}></path>
        </svg>
    </div>
  )
}

export default SVG2
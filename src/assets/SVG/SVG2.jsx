function SVG2({d, color}) {
  return (
    <div className={`size-24 text-[${color}]`}>
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d={`${d}`}></path>
        </svg>
    </div>
  )
}

export default SVG2
function SVG({src, alt}) {
  return (
    <div className="size-25">
        <img src={`src/assets/icons/${src}.svg`} alt={`${alt}`} />
    </div>
  )
}

export default SVG
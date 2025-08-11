function SocialButton({altContainer, alt, svgContainer , mainDiv ,d}) {
  return (
    <div className={`group flex hover:shadow-[0_0_5px_5px_white] ${mainDiv} p-5 items-center border rounded-xl
    hover:cursor-pointer hover:-translate-y-5 transition-all duration-300`}>
        <div className={`group-hover:drop-shadow-[0_0_3px_white] ${svgContainer}`}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d={`${d}`}></path>
          </svg>
        </div>
        <h2 className={`${altContainer}`}>{alt}</h2>
    </div>
  )
}

export default SocialButton
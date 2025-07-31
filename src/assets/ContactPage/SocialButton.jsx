function SocialButton({d, alt, color, w, h, ml, mt ,iconSize}) {
  return (
    <div className={`flex w-${w} h-${h} mt-${mt} p-5 items-center border rounded-xl
    hover:cursor-pointer hover:-translate-y-5 transition-all duration-300`}>
        <div className={`size-${iconSize} text-[${color}]`}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d={`${d}`}></path>
          </svg>
        </div>
        <h2 className={`ml-${ml}`}>{alt}</h2>
    </div>
  )
}

export default SocialButton
import SVG2 from "../SVG/SVG2"
import {paths} from "../src/assets/SVG/Paths"

function SocialButton() {
  return (
    <div className="flex w-80 p-5 items-center border rounded-xl">
        <SVG2 d={paths.github} color={"#000000"}></SVG2>
        <h2 className="ml-10">Github</h2>
    </div>
  )
}

export default SocialButton
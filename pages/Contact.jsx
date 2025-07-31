import Label from "../src/assets/ContactPage/Label"
import {paths} from "../src/assets/SVG/Paths"
import SocialButton from "../src/assets/ContactPage/SocialButton"

function Contact({fadeLan, changeLan}) {
  return (
    <main id="contact-main" className={`grid grid-cols-2 gap-20 px-30 transition-opacity duration-300 ${fadeLan ? "opacity-0":"opacity-100"}`}>


      <section className="mt-10">
          <h1 id="contact-title" className="text-5xl text-center mt-10 ">{changeLan == "es" ? "Contáctame":"Get in touch"}</h1>


          <div id="social-media-section" className="mt-20 flex flex-cols justify-center gap-10 text-4xl">

            <div className="flex w-80 p-5 items-center border rounded-xl">
              <SVG2 d={paths.github}></SVG2>
              <h2 className="ml-10">Github</h2>
            </div>

            <div className="flex w-80 p-5 items-center border rounded-xl">
              <SVG2 d={paths.linkedin}></SVG2>
              <h2 className="ml-10">LinkedIn</h2>
            </div>

          </div>

          <div className="grid justify-center text-4xl mt-15">
          <h2 className="mt-20 text-center">{changeLan =="es" ? "Puedes contactarme también a través de:":"You can also contact me through:"}</h2>

              <SocialButton d={paths.gmail} alt={"email@cualsea.com"} color={"#000000"} w={"160"} h={"30"} ml={"10"} mt={"15"} iconSize={"18"}/>

          </div>
      </section>

      <form name="contact" className="w-200 h-200 mt-20 border rounded-lg py-10 px-10 flex flex-col">

        <h1 className="text-center text-2xl">{changeLan == "es" ? "Contáctame mediante el siguiente formulario.":"Get in touch through the form below."}</h1>
        <h2 className="text-center text-l">{changeLan == "es" ? "Las solicitudes serán enviadas a mi email.":"Request are sent to my email."}</h2>

        <Label>{changeLan =="es" ? "Nombre:":"Name:"}</Label>
        <input className="text-xl w-full h-15 px-3 border" type="text" placeholder={changeLan == "es" ? "Tu nombre":"Your name"}/>

        <Label>{changeLan =="es" ? "Email":"Email:"}</Label>
        <input className="text-xl w-full h-15 px-3 border" type="email" placeholder={changeLan =="es" ? "Pontu@email.aqui":"Putyour@email.here"}/>

        <Label>{changeLan =="es" ? "Solicitud:":"Resquest:"}</Label>
        <textarea className="text-xl w-full min-h-100 p-3 border" name="message" id="contact-message" 
        placeholder={changeLan == "es" ? "Hazme una pagina Vite+React...":"Make me a page with Vite+React..."}></textarea>

        <button type="submit" className="text-xl border w-30 h-15 mt-10 self-center hover:cursor-pointer">{changeLan =="es" ? "Enviar":"Submit"}</button>
      </form>
    </main>
  )
}

export default Contact
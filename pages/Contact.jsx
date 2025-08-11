import {paths} from "../src/assets/SVG/Paths"
import SocialButton from "../src/assets/ContactPage/SocialButton"

function Contact({fadeLan, changeLan}) {
  return (
    <main id="contact-main" className={`grid grid-cols-2 gap-20 px-30 transition-opacity duration-300 ${fadeLan ? "opacity-0":"opacity-100"}`}>


      <section className="mt-10">
          <h1 id="contact-title" className="text-6xl text-center mt-10 ">{changeLan == "es" ? "Contáctame":"Get in touch"}</h1>


          <div id="social-media-section" className="mt-20 flex flex-cols justify-center gap-10 text-4xl">

            <SocialButton d={paths.github} alt={"Github"} mainDiv={"w-100 h-30 mt-15"} altContainer={"ml-10"} svgContainer={"size-24 color-[#000000]"}/>

            <SocialButton d={paths.linkedin} alt={"LinkedIn"} mainDiv={"w-100 h-30 mt-15"} altContainer={"ml-10"} svgContainer={"size-24 color-[#000000]"}/>

          </div>

          <div className="grid justify-center text-4xl mt-15">
          <h2 className="mt-20 text-center">{changeLan =="es" ? "Puedes contactarme también a través de:":"You can also contact me through:"}</h2>

              <SocialButton d={paths.gmail} alt={"email@cualsea.com"}  mainDiv={"w-160 h-30 mt-15"} altContainer={"ml-25"} svgContainer={"size-18 color-[#000000]"}/>

          </div>
      </section>

      <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" 
      className="w-220 h-200 mt-20 border rounded-lg py-10 px-10 flex flex-col bg-[#1e2c51ff]
      transition-all hover:drop-shadow-[0_0_10px_white]">

        {/*Hidden form for bots*/}
        <input type="hidden" name="form-name" value="contact"/>
        <p className="hidden">
          <label>
            Don't fill this: <input name="bot-field" type="text"/>
          </label>
        </p>


        <h1 className="text-center text-2xl">
          {changeLan == "es" ? "Contáctame mediante el siguiente formulario.":"Get in touch through the form below."}
        </h1>
        <h2 className="text-center text-l">
          {changeLan == "es" ? "Las solicitudes serán enviadas a mi email.":"Request are sent to my email."}
        </h2>

        <div className="mt-5">
          <label>{changeLan =="es" ? "Nombre:":"Name:"}</label>
          <input name="name" className="text-xl w-full h-15 px-3 border bg-[#7E77B0]" type="text" required
          placeholder={changeLan == "es" ? "Tu nombre":"Your name"}/>
        </div>

        <div className="mt-5">
          <label className="mt-5">
            {changeLan =="es" ? "Email:":"Email:"}
          </label>
          <input className="text-xl w-full h-15 px-3 border bg-[#7E77B0]" name="email" type="email" required
          placeholder={changeLan =="es" ? "Pontu@email.aqui":"Putyour@email.here"}/>
        </div>

        <div className="mt-5">
          <label className="mt-5">{changeLan =="es" ? "Solicitud:":"Request:"}</label>
          <textarea className="text-xl w-full min-h-90 p-3 border bg-[#7E77B0]" name="message" id="contact-message" required 
          placeholder={changeLan == "es" ? "Hazme una pagina Vite+React...":"Make me a page with Vite+React..."}></textarea>
        </div>

        <button type="submit" className="text-l border w-30 h-15 mt-10 self-center 
        transition-all duration-300 hover:scale-110 hover:shadow-[0_0_3px_3px_white] hover:cursor-pointer bg-blue-900">
          {changeLan =="es" ? "Enviar":"Submit"}</button>
      </form>
    </main>
  )
}

export default Contact
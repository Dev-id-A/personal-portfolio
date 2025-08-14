import {paths} from "../src/assets/SVG/Paths";
import SocialButton from "../src/assets/ContactPage/SocialButton";

function Contact({fadeLan, changeLan}) {
  return (
    <main id="contact-main" className={`grid grid-cols-1 gap-20 px-5 transition-opacity duration-300 ${fadeLan ? "opacity-0":"opacity-100"}
      xl:grid-cols-2 xl:px-30`}>


      <section className="mt-10
      lg:px-0
      md:px-10">
          <h1 id="contact-title" className="text-4xl md:text-6xl text-center mt-10">{changeLan == "es" ? "Contáctame":"Get in touch"}</h1>


          <div id="social-media-section" className="mt-20 flex flex-col justify-center gap-10 text-3xl
          md:flex-row md:text-4xl">

            <SocialButton d={paths.github} alt={"Github"} mainDiv={"mx-auto w-70 h-30 mt-5 sm:mt-15 sm:w-100"} altContainer={"ml-10"} svgContainer={"size-24 color-[#000000]"}/>

            <SocialButton d={paths.linkedin} alt={"LinkedIn"} mainDiv={"mx-auto w-70 h-30 mt-5 sm:mt-15 sm:w-100"} altContainer={"ml-10"} svgContainer={"size-24 color-[#000000]"}/>

          </div>

          <div className="grid justify-center text-3xl md:text-4xl mt-5 sm:mt-15">
          <h2 className="mt-20 text-center">{changeLan =="es" ? "Puedes contactarme también a través de:":"You can also contact me through:"}</h2>

              <SocialButton d={paths.gmail} alt={"Email"}  mainDiv={"mx-auto w-70 h-30 mt-5 sm:mt-15 sm:w-100 md:w-160"} altContainer={"ml-20 sm:ml-25"} 
              svgContainer={"size-18 color-[#000000]"}/>

          </div>
      </section>

      <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" 
      className="justify-self-center h-180 border mt-10 rounded-lg py-10 px-10 flex flex-col bg-[#1e2c51ff] mb-10
      transition-all hover:drop-shadow-[0_0_10px_white]
      lg:w-220 lg:h-200
      sm:mt-20">

        {/*Hidden form for bots*/}
        <input type="hidden" name="form-name" value="contact"/>
        <p className="hidden">
          <label>
            Don't fill this: <input name="bot-field" type="text"/>
          </label>
        </p>


        <h1 className="text-center text-2xl sm:text-3xl">
          {changeLan == "es" ? "Contáctame mediante el siguiente formulario.":"Get in touch through the form below."}
        </h1>
        <h2 className="text-center text-lg sm:text-xl mt-1">
          {changeLan == "es" ? "Las solicitudes serán enviadas a mi email.":"Request are sent to my email."}
        </h2>

        <div className="mt-5 text-xl">
          <label htmlFor="name">{changeLan =="es" ? "Nombre:":"Name:"}</label>
          <input id="name" name="name" className="text-xl w-full h-15 px-3 border bg-[#7E77B0]" type="text" required
          autoComplete="name" placeholder={changeLan == "es" ? "Tu nombre":"Your name"}/>
        </div>

        <div className="mt-5">
          <label htmlFor="email" className="mt-5 text-xl">
            {changeLan =="es" ? "Email:":"Email:"}
          </label>
          <input className="text-xl w-full h-15 px-3 border bg-[#7E77B0]" id="email" name="email" type="email" required
          autoComplete="email" placeholder={changeLan =="es" ? "Pontu@email.aqui":"Putyour@email.here"}/>
        </div>

        <div className="mt-5 text-xl">
          <label htmlFor="message" className="mt-5">{changeLan =="es" ? "Solicitud:":"Request:"}</label>
          <textarea className="text-xl w-full p-3 border bg-[#7E77B0] min-h-40
          lg:min-h-80 
          sm:min-h-55" 
          name="message" id="message" required 
          placeholder={changeLan == "es" ? "Hazme una pagina Vite+React...":"Make me a page with Vite+React..."}></textarea>
        </div>

        <button type="submit" className="text-2xl border w-30 max-[321px]:mt-1 mt-10 self-center 
        transition-all duration-300 hover:scale-110 hover:shadow-[0_0_3px_3px_white] hover:cursor-pointer bg-blue-900"
        >{changeLan =="es" ? "Enviar":"Submit"}</button>
      </form>
    </main>
  )
}

export default Contact
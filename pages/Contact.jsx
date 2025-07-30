import Label from "../src/assets/Label"

function Contact({fadeLan, changeLan}) {
  return (
    <main id="contact-main" className={`transition-opacity duration-300 ${fadeLan ? "opacity-0":"opacity-100"}`}>
      <h1 id="contact-title" className="text-5xl text-center mt-10 ">{changeLan == "es" ? "Contáctame":"Get in touch"}</h1>

      <section id="social-media-section" className="mt-30 flex flex-cols justify-center gap-100 text-4xl">

        <p>Github</p>
        <p>LinkedIn</p>

      </section>

      <form name="contact" className="border px-20">

        <Label>Name:</Label>
        <input className="w-full border" type="text" />

        <Label>Email:</Label>
        <input className="w-full border" type="email" />

        <Label>Message:</Label>
        <textarea className="w-full border" name="" id=""></textarea>

      </form>
    </main>
  )
}

export default Contact
import { useState } from "react"
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Layout from "../pages/Layout"
import Home from "../pages/Home"
import AboutMe from "../pages/AboutMe"
import Projects from "../pages/Projects"
import Contact from "../pages/Contact"

function App() {
    const [changeLan, setChangeLan] = useState("es")
    const [fadeLan, setFadeLan] = useState(false)

    const toggleLan = () => {
        setFadeLan(true)
        setTimeout(() => {
        changeLan == "es" ? setChangeLan("en"):setChangeLan("es")
        setFadeLan(false)
        }, 200)
    }

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout {...{changeLan, fadeLan, toggleLan}} />}>

          <Route index element={<Home {...{changeLan, fadeLan}} />} />
          <Route path="aboutMe" element={<AboutMe {...{changeLan, fadeLan}} />} />
          <Route path="projects" element={<Projects {...{changeLan, fadeLan}} />} />
          <Route path="contact" element={<Contact {...{changeLan, fadeLan}} />} />
  
      </Route>
     </Routes>
    </>
  )
}

export default App
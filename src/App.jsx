import { useState } from "react"
import "./App.css"
import { Route, Routes } from 'react-router-dom'
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
    <Routes>
      <Route path="/" element={<Home {...{changeLan, setChangeLan, fadeLan, setFadeLan, toggleLan}} />} />
      <Route path="/aboutMe" element={<AboutMe {...{changeLan, setChangeLan, fadeLan, setFadeLan, toggleLan}} />} />
      <Route path="/projects" element={<Projects {...{changeLan, setChangeLan, fadeLan, setFadeLan, toggleLan}} />} />
      <Route path="/contact" element={<Contact {...{changeLan, setChangeLan, fadeLan, setFadeLan, toggleLan}} />} />
    </Routes>
  )
}

export default App
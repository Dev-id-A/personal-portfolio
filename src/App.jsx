import { useEffect, useState } from "react"
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Layout from "../pages/Layout"
import Home from "../pages/Home"
import AboutMe from "../pages/AboutMe"
import Projects from "../pages/Projects"
import Contact from "../pages/Contact"

function App() {
    const [changeLan, setChangeLan] = useState(()=>{
      return localStorage.getItem("lang") || "es";
    });
    const [fadeLan, setFadeLan] = useState(false);
    const [navbarBg, setNavbarBg] = useState(false);

    useEffect(() =>{
      const windowScroll = () => setNavbarBg(window.scrollY > 10)
        window.addEventListener("scroll", windowScroll);
        return () => window.removeEventListener("scroll", windowScroll)
    }
    ,[])

    const toggleLan = () => {
        setFadeLan(true)
        setTimeout(() => {
          const nextLang = changeLan === "es" ? "en":"es";
          setChangeLan(nextLang)
          changeLan == "es" ? setChangeLan("en"):setChangeLan("es")
          localStorage.setItem("lang", nextLang);
          setFadeLan(false)
        }, 200)
    };

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout {...{changeLan, fadeLan, toggleLan, navbarBg}} />}>
          
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
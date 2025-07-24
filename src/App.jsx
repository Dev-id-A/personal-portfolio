import { use, useState } from 'react'
import './App.css'
import Navbar from './assets/Navbar/Navbar'
import Hero from './assets/Hero'

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
    <main className="">
    <Navbar changeLan={changeLan} fadeLan={fadeLan} toggleLan={toggleLan}></Navbar>
    <Hero changeLan={changeLan} fadeLan={fadeLan}></Hero>
    </main>
  )
}

export default App

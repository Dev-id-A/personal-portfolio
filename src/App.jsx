import { use, useState } from 'react'
import './App.css'
import Navbar from './assets/navbar'

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
    <main className="bg-blue-500">
    <Navbar changeLan={changeLan} fadeLan={fadeLan} toggleLan={toggleLan}></Navbar>
    </main>
  )
}

export default App

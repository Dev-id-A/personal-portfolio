import Navbar from '../src/assets/Navbar/Navbar'
import Hero from '../src/assets/Hero'

function Home({fadeLan, changeLan, toggleLan}) {

  return (
    <main className="">
    <Navbar changeLan={changeLan} fadeLan={fadeLan} toggleLan={toggleLan}></Navbar>
    <Hero changeLan={changeLan} fadeLan={fadeLan}></Hero>
    </main>
  )
}

export default Home

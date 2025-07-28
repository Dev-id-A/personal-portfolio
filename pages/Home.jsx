import Navbar from '../src/assets/Navbar/Navbar'
import Hero from '../src/assets/Hero/Hero'

function Home({fadeLan, changeLan}) {

  return (
    <main className="">
    <Hero changeLan={changeLan} fadeLan={fadeLan}></Hero>
    </main>
  )
}

export default Home

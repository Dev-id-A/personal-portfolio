import Navbar from '../src/assets/Navbar/Navbar'

function AboutMe({fadeLan, changeLan, toggleLan}) {
  return (
    <main>
      <Navbar changeLan={changeLan} fadeLan={fadeLan} toggleLan={toggleLan}></Navbar>
    </main>
  )
}

export default AboutMe
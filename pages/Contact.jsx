import Navbar from '../src/assets/Navbar/Navbar'

function Contact({fadeLan, changeLan, toggleLan}) {
  return (
    <main>
      <Navbar changeLan={changeLan} fadeLan={fadeLan} toggleLan={toggleLan}></Navbar>
    </main>
  )
}

export default Contact
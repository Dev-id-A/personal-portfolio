import Hero from '../src/assets/Hero/Hero';

function Home({fadeLan, changeLan}) {

  return (
    <main>
      <Hero changeLan={changeLan} fadeLan={fadeLan} />
    </main>
  )
}

export default Home

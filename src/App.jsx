import "preline/preline"
import '@fortawesome/fontawesome-free/css/all.min.css'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Features from './components/Features'
import Background from './components/Background'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <div className="flex min-h-screen">
        <div className="hidden lg:block sm:w-2/5 Hero sticky top-0 h-screen overflow-hidden"></div>

        <div className="w-full lg:w-3/5 bg-white overflow-y-auto">
          <Navbar />
          <section id="Home">
            <Home />
          </section>
          <section id="Features">
            <Features />
          </section>
          <section id="Background">
            <Background />
          </section>
          <section id="Contact">
            <Contact />
          </section>
        </div>
      </div>
    </>
  )
}

export default App

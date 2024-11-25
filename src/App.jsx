import "preline/preline";
import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from './components/Navbar'
import Home from './components/Home'
import Features from './components/Features'
import Background from './components/Background'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <div className="flex min-h-screen">
        <div className="hidden lg:block sm:w-2/5 Hero sticky top-0 h-screen">
        </div>

        <div className="w-full lg:w-3/5 bg-gray-100 overflow-y-auto">
          <Navbar />
          <Home />
          <Features/>
          <Background/>
          <Contact/>
        </div> 
      </div>
    </>
  )
}

export default App

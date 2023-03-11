import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Services from './Components/Services'
import About from './Components/About'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Addemp from './Components/Addemp'
import Viewemp from './Components/Viewemp'
import Editemp from './Components/Editemp'
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='services' element={<Services />} />
          <Route path='about' element={<About />} />
          <Route path='addemployee' element={<Addemp />} />
          <Route path='view/:id' element={<Viewemp />} />
          <Route path='edit/:id' element={<Editemp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

import './App.css'
import { Route, Routes } from 'react-router-dom'
import RootLayout from './components/layouts/RootLayout'
import Home from './components/pages/Index'
import About from './components/pages/About'
import Service from './components/pages/Service'
import Contact from './components/pages/Contact'
import Protfolio from './components/pages/Portfolio'



function App() {
  

  return (
    <>
      <Routes>
        <Route element={<RootLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/portfolio' element={<Protfolio/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Route>
      </Routes>
      
    </>
  )
}

export default App

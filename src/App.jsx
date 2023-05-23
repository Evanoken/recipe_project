import Header from './components/Header'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'

import './App.css'

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/favourites" element={<Favourites />}/>
      <Route path="/about" element={ <About /> }/>
      <Route path="*" element={<NotFound />}/>
      
    </Routes>
    <Footer />
    </BrowserRouter>
    <About />
    <NotFound />
    <Favourites />
    </>
  )
}

export default App

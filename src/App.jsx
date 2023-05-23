import Header from './components/Header'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Favorite from './pages/Favorite'
import Recipe from './pages/recipe'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/recipe" element={<Recipe />}/>
      <Route path="/Favorite" element={<Favorite />}/>
      <Route path="/About" element={ <About /> }/>
      <Route path="*" element={<NotFound />}/>
      
    </Routes>
    <Footer />
    </BrowserRouter>
  
    </>
  )
}

export default App

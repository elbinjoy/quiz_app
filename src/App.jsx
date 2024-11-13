import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../src/pages/Home'
import Mainq from '../src/pages/Mainq'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/quiz' element={<Mainq/>}></Route>
    </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App

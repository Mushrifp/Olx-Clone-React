import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import ViewProduct from './pages/ViewProduct'
import Errors from './pages/Errors'
import NavBar from './components/NavBar'
import {Context } from './context/context'
import { ToastContainer } from "react-toastify"
import Sell from './pages/Sell'
import {Products} from './context/products'


function App() {
  

  return (
    <>
    <Context>
         <Products>
           <NavBar/> 
           <ToastContainer position="top-center"/>
         <Routes>
             <Route path='/' element={<Home/>} />
             <Route path='/home' element={<Home/>} />
             <Route path='/signup' element={<Signup/>} />
             <Route path='/login' element={<Login/>} />
             <Route path='/view/:id' element={<ViewProduct/>} />
             <Route path='/sell' element={<Sell/>} />
             <Route path="*" element={<Errors/>} />
         </Routes>
      </Products>
    </Context>
    </>
  )
}

export default App

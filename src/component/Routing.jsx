import React from 'react'
import Signin from './Signin'
import { Route ,Routes,Router, BrowserRouter} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
const Routing = () => {
  return(
    <BrowserRouter>
   <Routes>
     <Route exact path='/' element={<Signin/>}/>
     <Route path='/loginpage' element={<Login/>}/>
     <Route path='/home' element={<Home/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default Routing
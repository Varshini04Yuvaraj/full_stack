import React from 'react'
import { Route ,Routes,Router, BrowserRouter} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Brow from './Brow'
import Signin from './Signin'
import AdLogin from './AdLogin'
import BefNavbar from './BefNavbar';
import About from './About';
import Afhome from './Afhome';
import MyBooking from './MyBooking';
import Allevent from './Allevent';
import Booking from './Booking';
import MyPayment from './MyPayment';
import AdAllevent from './AdAllevent';
import AdAfhome from './AdAfhome';
import AdBookings from './AdBookings';
import PrivateRoute from './PrivateRoute';

const Routing = () => 
{
  return(
    <BrowserRouter>
   <Routes>
   
     <Route exact path='/' element={<Home/>}/>
     <Route path='/loginpage' element={<Login/>}/>
     <Route path='/home' element={<Home/>}/>
     <Route path='/brow' element={<Brow/>}/>
     <Route path='/sign' element={<Signin/>}/>
     <Route path='/adlogin' element={<AdLogin/>}/>
     <Route path='/befnav' element={<BefNavbar/>}/>
     <Route path='/about' element={<About/>}/>
     {/* <Route path='/afhome' element={<Afhome/>}/> */}
     <Route path='/mybooking' element={<MyBooking/>}/>
     <Route path='/allevent' element={<Allevent/>}/>
     <Route path='/booking' element={<Booking/>}/>
     <Route path='/payment' element={<MyPayment />} />
     <Route path='/adallevent' element={<AdAllevent/>}/>
     <Route path='adafhome' element={<PrivateRoute><AdAfhome/></PrivateRoute>}/>
     <Route path='/adbookings' element={<AdBookings/>}/>
     <Route path='/afhome' element={<PrivateRoute element={<Afhome/>} />} /> {/* Protect the Afhome route */}
   </Routes>
   </BrowserRouter>
  )
}
export default Routing

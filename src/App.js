import React from 'react';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Navbar from './Components/Navbar';

function App() {
  return (
   <div>
   
   <BrowserRouter>
   <Navbar/>
   <Routes>
   <Route path='/Home' element={<Home/>}/>
   <Route path='/Cart' element={<Cart/>}/>
   </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;

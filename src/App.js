import React from 'react';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Navbar from './Components/Navbar';

import { Provider } from 'react-redux';
import store from './Store/store';

function App() {
  return (
   <div>
   <Provider store={store}>
   <BrowserRouter>
   <Navbar/>
   <Routes>
   <Route path='/Home' element={<Home/>}/>
   <Route path='/Cart' element={<Cart/>}/>
   </Routes>
   </BrowserRouter>
   </Provider>
  

   </div>
  );
}

export default App;

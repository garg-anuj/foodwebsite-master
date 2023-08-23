import {Routes,Route} from 'react-router-dom'
import { useState } from 'react';

import './App.css'
import Home from './Home';
import Navbar from './Navbar';
import Popularity from './Popularity'
import Speciality from './Speciality'
import Feedback from './Feedback';
import Working from './Working';
import Gallery from './Gallery';
// import Order from './Order';
import OrderP2 from './OrderP2';
import Footer from './Footer';
import Cart from './ShopingCart/Cart';
import AdminDashbord from './AdminDashbord';

// apis
import menu from './apis/food';
import galleryApi from './apis/galleryApi';
import popularApi from './apis/popularApi';
import useCartCountContext from './utils/useCartCountContext';

// import AdminDashbord from './AdminDashbord';

const App= ()=> {
  const [cartQuantity, setCardQuantity] = useState({count:9})
  return (
    <main>
    <useCartCountContext.Provider value={{cartCount:{count:cartQuantity.count}}}>
    {/* //means we need Card quantity undate only in this NavBar */}
        <Navbar />  
    </useCartCountContext.Provider>

      <Routes>
          {/* <Route exact path='/home' element={<Home />} /> */}
          <Route exact path='/' element={<Home />} />
          <Route exact path='/speciality' element={<Speciality sources={menu}/>} />
          <Route exact path='/popular' element={<Popularity sources={popularApi}/>} />
          <Route exact path='/gallery' element={<Gallery sources = {galleryApi} />} />
          <Route exact path='/review' element={<Feedback />} /> 
          <Route exact path='/working' element={<Working />} /> 
          {/* <Route exact path='/order' element={<Order />} /> */}
          <Route exact path='/order' element={<OrderP2 />} />  
          {/* <Route exact path='/dashbord' element={<AdminDashbord />} />   */}

          <Route exact path='/cart' element={<Cart />} /> 
          <Route exact path='/admin' element={<AdminDashbord />} /> 
      </Routes> 

      <Footer />
    </main>
  )
}


export default App;



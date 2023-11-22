import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import Productdata from './component/product/product';
import { Provider } from 'react-redux';
import productsliceReducer from "./component/product/productslice"
import Cart from './component/cart/cart';
import cartReducer from "./component/cart/cartslice"
import Checkout from './component/checkout/checkout';
import Success from './component/success';
import Image from './component/productdetail';
import Order from './component/myorder/myorder';
import orderReducer from "./component/myorder/myoderslice";
import Orderdetails from './component/myorder/orderdetails';
import addressReducers from './component/checkout/addressreducer';
import Register from './component/auth.js/resigter';
import Login from './component/auth.js/login';
import otpReducer from "./component/auth.js/otpslice"
import registerReducer from "./component/auth.js/resigterslice"
import loginReducer from "./component/auth.js/loginslice";
import Forgetpassword from './component/auth.js/forgetpassword';
import forgetpasswordsliceReducer  from './component/auth.js/forgetpassslice';

const store = configureStore({
reducer:{
 products:productsliceReducer,
 cart:cartReducer,
 order:orderReducer,
 address:addressReducers,
 otp:otpReducer,
 register: registerReducer,
 login:loginReducer,
 forgetpassword:forgetpasswordsliceReducer

},

})







const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element=<App />>

    <Route path='' element=<Productdata />></Route>
    <Route path='cart' element=<Cart />></Route>
    <Route path='cart' element=<Cart />></Route>
    <Route path='cart/checkout' element=<Checkout />></Route>
    <Route path='Checkout/success' element=<Success />></Route>
    
    <Route  path='/product/:id' element=<Image />></Route>
    <Route  path='myorder' element=<Order />></Route>
    <Route  path='myorder/:id' element=<Orderdetails />></Route>
    <Route  path='auth/signup' element=<Register />></Route>
    <Route  path='auth/login' element=<Login />></Route> 
    <Route  path='auth/forgetpassword' element=<Forgetpassword />></Route> 
    

   
    
</Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
   <Provider store={store}>
  <RouterProvider router={router}></RouterProvider>
   </Provider>

  </React.StrictMode>
);

;

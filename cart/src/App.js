
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './component/header';


import{Toaster} from "react-hot-toast"
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getproduct } from './component/product/productslice';
import Footer from './component/footer';


function App(){
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getproduct())
},[])
  const Loading  = useSelector(state=>state.products.Loading);


  return (

Loading ?  <div>
    
<Header></Header>
<Toaster></Toaster>
<Outlet></Outlet>
<Footer></Footer>



</div> : <div className=' flex justify-center items-center w-full h-[600px]'><ClipLoader color="#36d7b7" size={55} /> </div> 
    
  )
}

export default App;
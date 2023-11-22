

import { useEffect } from "react";
import { getcart } from "./cartslice";
import { useDispatch } from "react-redux";
import {  useSelector } from "react-redux/es/hooks/useSelector";
import {NavLink} from "react-router-dom"
// import {boxicons} from "boxicons"
import { deletecart } from "./cartslice";


function Cart(){

    const  dispatch = useDispatch()

    useEffect(()=>{
dispatch(getcart());
    },[dispatch])
     const cart = useSelector((state)=>state.cart.cartitem);
     let price = 0;
     cart.forEach((item) => {
        price = item.price+price
     });
  
     
     
    return(
        <div>
            <div className="flex justify-center items-center w-full h-[100px]">
                <div className="w-[50px] h-[3px] md:w-[180px] md:h-[7px] bg-blue-900 rounded-tl-lg rounded-bl-lg"></div>
               <h2 className=" font-Inter bg-gray-900 w-[30px]  h-[30px] rounded-full text-white text-center flex items-center justify-center ml-2 ">1</h2>
               <div className=" w-[100px] h-[3px] md:w-[300px] md:h-[7px] bg-black rounded-tl-lg rounded-bl-lg ml-3"></div>
               <h2 className=" font-Inter ml-2 bg-slate-300 w-[30px]  h-[30px] rounded-full text-white text-center flex items-center justify-center">2</h2>
               <div className="md:w-[300px] md:h-[7px] w-[100px] h-[3px] bg-black rounded-tl-lg rounded-bl-lg ml-3"></div>
               <h2 className=" font-Inter bg-slate-300 w-[30px]  h-[30px] rounded-full text-white text-center flex items-center justify-center md:w-[30px] ml-3">3</h2>
            
            </div>

            <div className=" flex justify-center items-center gap-[85px] md:gap-[190px]">
                <p className=" font-Inter text-[11px] font-semibold relative left-[60px] md:text-[14px]">Shopping Cart</p>
                <p className=" font-Inter  text-[11px] font-semibold relative left-7 md:text-[14px] md:relative md:left-[90px]">Shopping and Checkout</p>
                <p className=" font-Inter  text-[11px] font-semibold md:text-[14px] md:relative md:left-[130px]">Confirmation</p>
            </div>
          
    <div className="w-[500px] h-auto bg-white shadow-sm flex  relative md:left-[500px] flex-col mt-[80px] md:items-center">

        {
            cart&& cart.map((item,i)=>{
             return    <div className="w-[400px] h-[70px] bg-white shadow flex  justify-center items-center pl-[20px] md:pl-[0px] mt-4 mr-1 rounded-lg"  key={i}>
            <div className=" relative left-[1px]">
                <img src={item.image} alt="cart product" className="w-[100px]  h-[60px] object-cover rounded-md"></img>
            </div>
            <div  className="flex  items-center w-full h-full gap-4 ml-4">
 <p className="text-center font-Inter"> {item.title}</p>
 <h3 className="font-Inter">₹{item.price}</h3>
<button onClick={()=>dispatch(deletecart(item._id))}> <box-icon name='x'></box-icon></button>
              
            </div>
        </div>
    
            })
        }
        <span className="relative top-[60px] font-Inter right-10">Total Price:${price}</span>
        <NavLink to="/cart/checkout" className="mt-7 font-Inter bg-green-500 w-[100px] h-[40px] text-center flex justify-center items-center rounded-[5px] text-white relative left-[180px] mb-2">Checkout</NavLink>
    </div>
    </div>
    )
}

export default Cart;

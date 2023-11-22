import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux"
import { getcart } from "./cart/cartslice";
import { createorder } from "./myorder/myoderslice";
import { getadd } from "./checkout/addressreducer";



function Success(){
 const dispatch =  useDispatch();
 const email = "jawanmurari@gmail.com"
 const address = useSelector((state)=>state.address.address);
 
 const cart = useSelector((state)=>state.cart.cartitem);





useEffect(()=>{
  dispatch(getadd())
},[])
 


const result = cart.map((item)=>{
    return {...item , email:email}
})

 
// useEffect(()=>{
//  if(!cart.length){
//   dispatch(getcart())
//  }

// cart.length> 0 ? dispatch(createorder(cart)) : console.log("hel")
// },[cart])

useEffect(()=>{
dispatch(getcart())
},[])
  
useEffect(()=>{
if(cart.length>0){
dispatch(createorder(result))
}

 },[cart])
 
  

    return(
        <div className="flex justify-center items-center flex-col ">
            <img src="https://img.freepik.com/free-vector/confirmed-concept-illustration_114360-545.jpg?size=626&ext=jpg&ga=GA1.1.199643987.1698675769&semt=ais" alt="sucesfull"></img>
            <h1 className=" font-Inter text-green-700 text-2xl relative bottom-[50px] inline-block">Paymnet Sucesfull</h1>
            <img src="https://img.freepik.com/free-vector/green-double-circle-check-mark_78370-1749.jpg?size=626&ext=jpg&ga=GA1.1.199643987.1698675769&semt=ais" alt="tick" className=" w-[100px] h-[100px] relative left-[170px] bottom-[115px]"></img>
        </div>
    )
}

export default Success
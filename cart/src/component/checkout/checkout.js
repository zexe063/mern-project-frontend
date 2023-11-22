import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { getcart } from "../cart/cartslice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { createadd,deletead,updateadd } from "./addressreducer";
import {loadStripe} from '@stripe/stripe-js';
import Register from "../auth.js/resigter";

// import {boxicons} from "boxicons"

function Checkout(){
const dispatch = useDispatch();
const address = useSelector((state)=>state.address.address);
const Loadingaddress = useSelector((state)=>state.address.Loadingaddress);
console.log(Loadingaddress)
const cart = useSelector((state)=>state.cart.cartitem);
 const [data,setData] = useState({});
 const nameref = useRef(null);
 const lastnameRef = useRef(null);
 const countryRef = useRef(null);
 const stateRef = useRef(null);
 const districtRef = useRef(null);
 const cityRef = useRef(null);
 const fullAddressRef = useRef(null);
 const streetRef = useRef(null);
 const roomRef = useRef(null);
 const mobileRef = useRef(null);
 const pincodeRef = useRef(null);


const arr = [nameref.current,lastnameRef.current,pincodeRef.current,countryRef.current,stateRef.current,districtRef.current,cityRef.current,fullAddressRef.current,streetRef.current,roomRef.current,mobileRef.current]
 useEffect(()=>{
    dispatch(getcart())
   },[dispatch])

function handleset(){
    // setArr([...arr,{id:arr.length+1, ...data}])
    dispatch(createadd({...data, id:address.length+1}));
}

function handleclick(e){
   setData({...data,[e.target.title]:e.target.value});
}


// HERE THE UPADTE ADRRESSS

function upadteclick(value){
const addarr = [];
for(let x in value){
 addarr.push(value[x])
}
const data = arr.forEach((item,i)=>{
   item.value = addarr[i]

})

dispatch(updateadd(data))
}



let price = 0;
cart.forEach((item) => {
   price = item.price+price
});
const discountprice =  price/100*2;
const totalprice = price-discountprice;


async function payment(){
    const {data} = await axios.post("http://localhost:9000/payment",{
        price:totalprice
    });

    const stripe = await loadStripe("pk_test_51O8RRfSDzajLVKipiTq6TatPzMqJNMUG1N5fV3QSl9XZadLPnpb8qrePgOwyzgb9PjELmeNd3f6fl2hINU7ioCbH00ChVh6BXY");
    const session = data.id;

  
    const result = stripe.redirectToCheckout({
        sessionId:session
    })
  

}






    return(
    <div className="w-full md:h-[800px] h-auto">
<div className="flex justify-center items-center w-full h-[100px]">
                <div className="w-[50px] h-[3px] md:w-[180px] md:h-[7px] bg-blue-900 rounded-tl-lg rounded-bl-lg"></div>
               <h2 className=" font-Inter bg-gray-900 w-[30px]  h-[30px] rounded-full text-white text-center flex items-center justify-center ml-2 ">1</h2>
               <div className=" w-[100px] h-[3px] md:w-[300px] md:h-[7px] bg-blue-900 rounded-tl-lg rounded-bl-lg ml-3"></div>
               <h2 className=" font-Inter ml-2 bg-slate-900 w-[30px]  h-[30px] rounded-full text-white text-center flex items-center justify-center">2</h2>
               <div className="md:w-[300px] md:h-[7px] w-[100px] h-[3px] bg-black rounded-tl-lg rounded-bl-lg ml-3"></div>
               <h2 className=" font-Inter bg-slate-300 w-[30px]  h-[30px] rounded-full text-white text-center flex items-center justify-center md:w-[30px] ml-3">3</h2>
            
            </div>

            <div className=" flex justify-center items-center gap-[85px] md:gap-[190px]">
                <p className=" font-Inter text-[11px] font-semibold relative left-[60px] md:text-[14px]">Shopping Cart</p>
                <p className=" font-Inter  text-[11px] font-semibold relative left-7 md:text-[14px] md:relative md:left-[90px]">Shopping and Checkout</p>
                <p className=" font-Inter  text-[11px] font-semibold md:text-[14px] md:relative md:left-[130px]">Confirmation</p>
            </div>


{/* adrees form */}

<div className=" md:w-[500px] w-[350px] h-auto md:mt-3">
<h3 className=" font-Inter text-blue-800 text-xl absolute top-[-10px]">Add a Address</h3>
    <div className="w-full h-full inline-grid grid-cols-2  justify-center items-center  gap-4 bg-white shadow rounded-md p-5 md:ml-20">
    
        <input type="text" title="name" placeholder="Name" className="border-blue-900 border-2 font-Inter p-3 rounded-md text-black" onChange={handleclick} ref={nameref}></input>
        <input type="text" title="Lastname" placeholder="LastName" className="border-blue-900 border-2 font-Inter p-3 rounded-md" onChange={handleclick} ref={lastnameRef}></input>
        <input type="text" title="Pincode" placeholder="Pincode" className="border-blue-900 border-2 font-Inter p-3 rounded-md" onChange={handleclick} ref={pincodeRef} ></input>

        <input type="text" title="Country" placeholder="Country" className="border-blue-900 border-2  font-Inter p-3 rounded-md" onChange={handleclick} ref={countryRef}></input>

        <input type="text" title="State" placeholder="State" className="border-blue-900 border-2 font-Inter p-3 rounded-md" onChange={handleclick} ref={stateRef}></input>

        <input type="text" title="District" placeholder="District" className="border-blue-900 border-2 font-Inter p-3 rounded-md" onChange={handleclick} ref={districtRef}></input>

        <input type="text" title="City" placeholder="City" className="border-blue-900 border-2 font-Inter p-3 rounded-md" onChange={handleclick} ref={cityRef}></input>

        <input type="text" title="FullAddress" placeholder="Full Address" className="border-blue-900 border-2 font-Inter p-3 rounded-md" onChange={handleclick}ref={fullAddressRef}></input>

        <input type="text" title="Street" placeholder="Street" className="border-blue-900 border-2 font-Inter p-3 rounded-md" onChange={handleclick} ref={streetRef}></input>

        <input type="text" title="Room" placeholder="Room-No" className="border-blue-900 border-2 font-Inter p-3 rounded-md" onChange={handleclick} ref={roomRef}></input>

        <input type="number" title="Mobile" placeholder="Mobile-No" className="border-blue-900 border-2 font-Inter p-3 rounded-md" onChange={handleclick} ref={mobileRef}></input>

        <button className=" font-Inter  text-center w-[120px] rounded-md h-[40px] bg-green-700 relative top-3 text-white ml-9" onClick={handleset}>Add Address</button>
        </div>

        {/* address card */}

<div className=" md:relative md:left-[90px] md:top-[50px] relative left-2">
       {
        address.map((item,i)=>{
            return  <div className="w-[600px] h-auto flex flex-col justify-center" key={i}>
            <h3 className=" font-Inter text-white font-semibold text-xl bg-blue-800 rounded-sm mt-[10px] md:w-full w-[350px]"key={i}>Delivery Address</h3>
                <div className=" text-center md:w-[600px] h-[100px] bg-#695cfe shadow rounded-sm gap-2 border-top-gray-500 border-2 pt-5  w-[350px]">
                    <div className=" font-Inter inline-block">{item.name},</div>
                    <div className=" font-Inter inline-block">{item.Lastname},</div>
                    <div className=" font-Inter inline-block">{item.Pincode},</div>
                    <div className=" font-Inter inline-block">{item.Country},</div>
                    <div className=" font-Inter inline-block">{item.State},</div>
                    <div className=" font-Inter inline-block">{item.District},</div>
                    <div className=" font-Inter inline-block">{item.City},</div>
                    <div className=" font-Inter inline-block">{item.FullAddress},</div>
                    <div className=" font-Inter inline-block">{item.Room},</div>
                    <div className=" font-Inter inline-block">{item.Mobile}</div>
                
                   <button onClick={()=>dispatch(deletead(item.id))} className=" relative  md:left-[70px] bg-another-white md:p-1 md:rounded-lg rounded-md ml-2"><box-icon name='x'></box-icon></button>
                  <button className=" md:p-1 rounded-lg text-center bg-another-white md:ml-0 ml-4" onClick={()=>upadteclick(item)}>{Loadingaddress? <box-icon type='solid' name='edit-alt'></box-icon>:'save'}</button>
                  
                    {/* <button onClick={()=>update(item.name)}>update</button> */}
    
    
                
                </div>
            </div>
        })
       }
        </div>

        <div className=" md:absolute md:right-[260px] md:top-[180px]">

        {
            cart&& cart.map((item,i)=>{
             return    <div className="w-[360px] h-auto bg-white shadow flex  justify-around items-center  relative right-8 md:pl-[0px] mt-4 ml-7 rounded-lg gap-4" key={i}>
            <div className=" relative left-[1px]">
                <img src={item.image} alt="cart product" className="w-[100px]  h-[60px] object-cover rounded-md z-30"></img>
            </div>
            <div  className="flex  items-center w-full h-full gap-4 ml-4">
 <p className="text-center font-Inter"> {item.title}</p>
 <h3 className="font-Inter ">₹{item.price}</h3>

              
            </div>
        </div>
    
            })
        }
       

        </div>
        

        {/* total payment */}

      <div className=" bg-sky-white w-[340px] md:w-[450px] h-[230px] shadow-sm relative top-2 left-2 rounded-md border-gray-500 border-[0.1px] md:absolute md:top-[500px] md:ml-[800px]">

        <div className="flex w-full h-[60px] justify-between border-bottom-gray-600 border-[0.5px] items-center"> 
            <p className=" font-Inter ml-2">SubTotal</p>
            
            <h3  className=" font-Inter text-sm mr-4">₹{price}</h3>
        </div>
        <div className=" w-full h-[100px] flex justify-between border-bottom-gray-600 border-[2px] items-center">
          <p className=" w-[200px] font-Inter ml-2">Pay with diwali bonus  and get 2% discount</p>
          <h3 className=" font-Inter mr-2">-₹{discountprice}</h3>
        </div>

        <div className=" w-full h-[100px] flex justify-between items-center">
          <p className=" font-Inter mb-6 ml-2 font-semibold text-lg">Total</p>
          <h3 className=" font-Inter mr-2 mb-6">₹{totalprice}</h3>
        </div>
        
       <div>
            <button className=" w-[300px] h-[60px] bg-blue-900  rounded-[6px] flex justify-center items-center text-white font-semibold text-xl md:ml-20 ml-9" onClick={payment}>Proceed To Payment</button>
         </div>

        </div>      

        

         

</div>



</div>// checkout parent

    )

    
}

export default Checkout;
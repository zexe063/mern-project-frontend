import { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { forgetpassword } from "./forgetpassslice";
import { getotp } from "./otpslice";
import ClipLoader from "react-spinners/ClipLoader";


function Forgetpassword(){
    const dispatch = useDispatch()
    const [reset,setReset] = useState({});
const hashedvalue = useSelector((state)=>state.otp.hashedvalue);
const otp = useSelector((state)=>state.otp.otp);



    function inputclick(e){
       setReset({...reset, [e.target.title] : e.target.value, hashedvalue:hashedvalue })
    }


    return(
        

<div className=" w-full h-[600px] flex justify-center items-center flex-col bg-another-white gap-2">
        <div className=" w-[300px] h-[340px] flex flex-col  bg-white shadow-2xl  items-center pt-7 gap-5 rounded-md">
          
          <input type=" text" placeholder="Email" title="email" className=" border-gray-900 border-[2px] p-3 rounded-md hover:outline-1 outline-offset-4 outline-another-blue font-Inter text-[14px]  tracking-widest" onChange={inputclick}></input>
          <input type=" text" placeholder=" new Password" title="password" className=" border-gray-900 border-[2px] p-3 rounded-md hover:outline-1 outline-offset-4 outline-another-blue font-Inter text-[14px] tracking-widest" onChange={inputclick}></input>
          <input type=" text" placeholder="otp" title="otp" className=" border-gray-900 border-[2px] p-3 rounded-md hover:outline-1 outline-offset-4 outline-another-blue font-Inter text-[14px] tracking-widest" onChange= {inputclick} ></input>
       <NavLink className=" relative bottom-[55px] left-[70px] cursor-pointer text-another-blue font-Inter" onClick={()=>dispatch(getotp(reset.email))}>{otp? 'Getotp' : <ClipLoader></ClipLoader>}</NavLink>
          
           
          <button className=" w-[200px] h-[50px] md:h-[45px] bg-another-blue rounded-md text-white font-Inter" onClick={()=>dispatch(forgetpassword(reset))}>Reset password</button>
    
        </div>

        <div>
         
        </div>
        </div>
    )
}

export default Forgetpassword;
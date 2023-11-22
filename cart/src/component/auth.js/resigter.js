import { NavLink } from "react-router-dom";
import {  useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getotp } from "./otpslice";
import { createuser } from "./resigterslice";
import ClipLoader from "react-spinners/ClipLoader";



function Register(){

const [data, setData] = useState({});
const otpiref = useRef();



const dispatch =  useDispatch();
const otp = useSelector((state)=>state.otp.otp);
const hashedvalue = useSelector((state)=>state.otp.hashedvalue);

const reg = useSelector((state)=>state.register.register)




    function inputclick(e){
       setData({...data,[e.target.title]: e.target.value, hashotp:hashedvalue})
   }
 
   
    return(
     <div className=" w-full h-[600px] flex justify-center items-center flex-col bg-another-white gap-2">
        <div className=" w-[300px] h-[520px] flex flex-col  bg-white shadow-2xl  items-center pt-7 gap-5 rounded-md">
          
          <input type=" text" placeholder=" First Name" title="FirstName"  className=" border-gray-900 border-[2px] p-3 rounded-md hover:outline-1 outline-offset-4outline-another-blue font-Inter text-[14px]  tracking-widest" onChange={inputclick}></input>
          <input type=" text" placeholder="Last Name" title="LastName" className=" border-gray-900 border-[2px] p-3 rounded-md hover:outline-1 outline-offset-4 outline-another-blue font-Inter text-[14px] tracking-widest" onChange={inputclick}></input>
          <input type=" text" placeholder="Enter Gmail" title="email" className=" border-gray-900 border-[2px] p-3 rounded-md hover:outline-1 outline-offset-4 outline-another-blue  font-Inter text-[14px] tracking-widest" onChange={inputclick}></input>
          <button className=" w-[100px] h-[50px] md:h-[45px] bg-green-600 rounded-md text-white font-Inter" onClick={()=>dispatch(getotp(data.email))}>{otp ? 'Get Otp' : 'Loading...'}</button>
          <input type=" text" placeholder="Password" title="password" className=" border-gray-900 border-[2px] p-3 rounded-md hover:outline-1 outline-offset-4 outline-another-blue font-Inter text-[14px] tracking-widest" onChange={inputclick} ></input>
          <input type=" text" placeholder="Otp" title="otp"  className=" border-gray-900 border-[2px] p-3 rounded-md hover:outline-1 outline-offset-4 outline-another-blue  font-Inter text-[14px] tracking-widest" onChange={inputclick}></input>
           
          <button className=" w-[200px] h-[50px] md:h-[45px] bg-another-yellow rounded-md  text-another-grey font-Inter" onClick={()=>dispatch(createuser(data))}>{reg ? 'Register' :  <ClipLoader color="#36d7b7" size={35} /> } </button>
    
        </div>
        <div>
            <NavLink to={'/auth/login'} className=" text-another-blue font-Inter text-[16px]">
                Log In
            
            </NavLink>
        </div>
        </div>
    )
}

export default Register;
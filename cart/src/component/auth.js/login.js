

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { getuser } from "./loginslice";
import { useDispatch } from "react-redux";
import axios from "axios";





   function Login(){
   
const dispatch = useDispatch()
    const [data, setData] = useState({});
 
    function inputclick(e){
        setData({...data, [e.target.title]: e.target.value});
    }
   



    return (
        
<div className=" w-full h-[600px] flex justify-center items-center flex-col bg-another-white gap-2">
        <div className=" w-[300px] h-[300px] flex flex-col  bg-white shadow-2xl  items-center pt-7 gap-5 rounded-md">
          
          <input type=" text" placeholder="Email" title="email" className=" border-gray-900 border-[2px] p-3 rounded-md hover:outline-1 outline-offset-4 outline-another-blue font-Inter text-[14px]  tracking-widest" onChange={inputclick}></input>
          <input type=" text" placeholder="Password" title="password" className=" border-gray-900 border-[2px] p-3 rounded-md hover:outline-1 outline-offset-4 outline-another-blue font-Inter text-[14px] tracking-widest" onChange={inputclick}></input>
          <NavLink to={'/auth/forgetpassword'}  className=" font-Inter text-[10px] text-another-blue w-full h-auto flex justify-end mr-8">forgetpassword</NavLink>
           
          <button className=" w-[200px] h-[50px] md:h-[45px] bg-another-yellow rounded-md  text-another-grey font-Inter" onClick={()=>dispatch(getuser(data))}>Login</button>
    
        </div>

        <div>
            <NavLink to={'/auth/signup'} className=" text-another-blue font-Inter text-[16px]">
                sigunup
            
            </NavLink>
        </div>
        </div>
    )
   }

   export default Login;
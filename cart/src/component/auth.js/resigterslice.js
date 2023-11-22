


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";



export const createuser = createAsyncThunk(
    "register/createuser",
    async(id)=>{
      
        const {data}= await axios.post("http://localhost:9000/auth/signup", id);
        console.log(data)
        if(data == "resgister"){
            
            toast.success("register sucess");
            window.location.replace('http://localhost:3000/auth/login')
        }
         else if(data == "invalid token"){
 toast.error("invalid token")
         }
         else if("email registered"){
    toast.error("user registered")
         }
        else{
            toast.error("donot mind please send the otp again")
        }
    }
)

const register = createSlice({
    name:'register',
    initialState:{
        register:true
    },
    
    extraReducers:(builder)=>{
     builder.addCase(createuser.pending,(state,action)=>{
  state.register = false
     })
     builder.addCase(createuser.fulfilled, (state,action)=>{
        state.register = true;
     })
    }
})

export default register.reducer;
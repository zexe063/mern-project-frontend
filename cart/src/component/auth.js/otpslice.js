




import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";



export const getotp = createAsyncThunk(
    "oto/getopt",
    async(id)=>{
   
        const {data}= await axios.post("https://mern-project-woad.vercel.app/otp", {
            email:id
        });
          
        if(data.id){
            toast.success("otp send sucessfully");
        }
        else{
            toast.error("please enter email")
        }
     
        return data.otp;


    }
)

const otp = createSlice({
    name:'otp',
    initialState:{
        otp:true,
        hashedvalue:'abcdefghti'
    },
    
    extraReducers:(builder)=>{
     builder.addCase(getotp.pending,(state,action)=>{
  state.otp = false
     })
     builder.addCase(getotp.fulfilled, (state,action)=>{
        state.otp = true;
        state.hashedvalue = action.payload;
     })
    }
})

export default otp.reducer;
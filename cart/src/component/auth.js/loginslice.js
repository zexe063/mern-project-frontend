import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


export const getuser = createAsyncThunk(
    "login/getuser",
    async(id)=>{
   console.group(id)
const data = await axios.post('https://mern-project-woad.vercel.app/auth/login',id);

if(data.status==200){
 toast.success("login sucess");
 window.location.replace("https://mern-frontend-smoky.vercel.app/")


return data.data;
}
else if(data.status == 267){
toast.error("user not found")
}
else{
    toast.error("Err:username and Password")
}
    }
)
const login = createSlice({
    name:"login",
    initialState:{
        login:true,
        logindata:false
    },
    extraReducers :((builder)=>{
        builder.addCase(getuser.pending,(state,action)=>{
            state.login = false;
        })
        builder.addCase(getuser.fulfilled,(state,action)=>{
            state.login= true;
            state.logindata = action.payload;
          

            
        })
    })
})


export default login.reducer;
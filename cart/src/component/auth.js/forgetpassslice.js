import axios from "axios";
import toast from "react-hot-toast";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");



export const forgetpassword = createAsyncThunk(
    "forgetpassword/password",
    async(id)=>{
        
        const {data} = await axios.post("https://mern-project-woad.vercel.app/auth/forgetpassword",id);
        if(data == 'forget'){
toast.success("password reset sucessfull")
window.location.replace("https://mern-frontend-smoky.vercel.app//auth/login")
        }
        else if(data== "user not register"){
  toast.error("user not register")
        }
         else if(data == "wrong otp"){
 toast.error("wrong otp")
         }
        else{
            toast.error("Err:inavlid token")
        }
        
    }
)

const forgetpasswordslice = createSlice({
    name:forgetpassword,
    initialState:{
        password:true
    },
    extraReducers:((builder)=>{
  builder.addCase(forgetpassword.pending,(state,action)=>{
    state.password = false;
  })
    })
})

export default forgetpasswordslice.reducer;
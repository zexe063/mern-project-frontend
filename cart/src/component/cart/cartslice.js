import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";


 export const getcart = createAsyncThunk(
    "cart/getcart",
    async(id)=>{
     const  {data} = await axios.get("http://localhost:9000/cart");
     
     return data;
    }
)

export const createcart = createAsyncThunk(
    "cart/craetecart",
    async(id)=>{
        const {data} = await axios.post("http://localhost:9000/cart",id);
        toast.success("cart added")
        return data;
       

        
    }
)
export const deletecart = createAsyncThunk(
    "cart/deletecart",
    async(id)=>{
        const {data}  = await axios.delete(`http://localhost:9000/cart/${id}`);
        toast.success("product deleted")
        return id;
       
    }
)

const cart = createSlice({
    name:'cart',

    initialState:{
        cartitem:[]
    },
    extraReducers:((builder)=>{
        builder.addCase(getcart.fulfilled,(state,action)=>{
            state.cartitem = action.payload;
        })
        .addCase(createcart.fulfilled,(state,action)=>{
            state.cartitem.push(action.payload)
        })
        .addCase(deletecart.fulfilled,(state,action)=>{
      const index = state.cartitem.findIndex((item)=>{
        return item._id === action.payload;
      })

      state.cartitem.splice(index,1);
         
        })
    })

})
export  default cart.reducer;


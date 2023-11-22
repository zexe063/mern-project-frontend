
import axios  from "axios";



import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useId } from "react";
import toast from "react-hot-toast";


export const getorder = createAsyncThunk(
    "order/getorder",
    async(id)=>{
const {data} = await axios.get("http://localhost:9000/orders");
return data;

    }
)
 export const createorder = createAsyncThunk(
    "order/createorder",
    async (id, {getState})=>{

        const formattedCart = id.map(({ _id, ...rest }) => rest);
       
      
        const {data} = await axios.post("http://localhost:9000/orders",formattedCart);
        
        return data;
    }
)
export const deleteorder = createAsyncThunk(
    "order/deleteorder",
    async(id)=>{
      
const data = await axios.delete(`http://localhost:9000/orders/${id}`);
toast.success("order cancel")
return id;

    }
)


const order = createSlice({
    name:"order",
    initialState:{
        orderitem:[],
        Loading:true
    },
   
 extraReducers:(builder)=>{
    builder.addCase(getorder.pending, (state,action)=>{
    state.Loading = true;
    })
    builder.addCase(getorder.fulfilled, (state,action)=>{
        state.orderitem = action.payload;
        state.Loading = false;
    })

    builder.addCase(createorder.fulfilled,(state,action)=>{
        state.orderitem.push(action.payload)
    })
    builder.addCase(deleteorder.fulfilled,(state,action)=>{
      state.orderitem = state.orderitem;
    })
   
 }

})

export default order.reducer;
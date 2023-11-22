
import { createAction, createReducer } from "@reduxjs/toolkit";


export const createadd = createAction('add/create');
export const getadd = createAction('add/get');
export const deletead = createAction('add//delete');
export const updateadd =  createAction('add/upadte');

let intialState={
    address:[],
    Loadingaddress:true
}

const addressReducers= createReducer(intialState,(builder)=>{
    
       builder.addCase(createadd,(state,action)=>{
     state.address.push(action.payload)
       
       })
    builder.addCase(getadd,(state,action)=>{
        return state;
    })
    builder.addCase(deletead,(state,action)=>{
 
         const  value = state.address.filter((item)=>{
               return item.id !== action.payload
        })
        state.address = value
    })
    builder.addCase(updateadd,(state,action)=>{
        state.Loadingaddress = !state.Loadingaddress;
        console.log(action.payload)
    })
})

export default addressReducers;
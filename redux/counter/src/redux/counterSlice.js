import { createSlice } from "@reduxjs/toolkit";



 export const counterSlice=createSlice({
    name:'counterApp',
    initialState:{
        value:0

    },
            // action are created inside the reducer key as object

    reducers:{

       //logics to update state
       //fn to increment number
       increment:(state,action)=>{
        //if its an argument fn then it can only be accessed by action value in payload
        state.value +=action.payload
       },
       //fn to decrement
       decrement:(state,action)=>{
        state.value -=action.payload
       },
       //fn to reset
       reset:(state)=>{
        state.value =0
       }
    }
})
//action is required by in order to update slice
export const{increment,decrement,reset}=counterSlice.actions
//reducer is required by in order to update slice
export default counterSlice.reducer

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add(state,action){
            return [...state,action.payload]
        }
    }
})

export const {add} = cartSlice.actions;

export default cartSlice.reducer;
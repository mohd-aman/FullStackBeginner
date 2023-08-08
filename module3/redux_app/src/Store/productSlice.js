import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const productSlice = createSlice({
    name:"product",
    initialState:{
        data:[],
        status:"success"
    },
    reducers:{
        setProducts(state,action){
            state.data = action.payload;
        },
        setStatus(state,action){
            state.status = action.payload;
        }
    }
})

export const {setProducts,setStatus} = productSlice.actions;

export default productSlice.reducer;

export function fetchProducts(){

    return async function(dispatch){
        dispatch(setStatus("loading"));
        try{
            const res = await axios.get("https://fakestoreapi.com/products");
            dispatch(setProducts(res.data))
            dispatch(setStatus("success"));
        }catch(error){
            dispatch(setStatus("error"));
        }
    }
}
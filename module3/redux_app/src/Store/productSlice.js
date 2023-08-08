import { createSlice } from "@reduxjs/toolkit";


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
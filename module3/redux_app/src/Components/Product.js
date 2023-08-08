
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import {add} from "../Store/cartSlice"
import { fetchProducts,STATUSES } from "../Store/productSlice";

export default function Product(){
    let {data,status} = useSelector((state)=>state.products)
    let dispatch = useDispatch();

    let handleClick = (product)=>{
        dispatch(add(product))
    }

    useEffect(()=>{
        dispatch(fetchProducts());
    },[])

    if(status == STATUSES.LOADING){
        return <h2>...Loading</h2>
    }
    if(status == STATUSES.ERROR){
        return <h2>Oops, Something went wrong</h2>
    }

    return(
        <div className="productsWrapper">
        {data.map((product)=>{
            return <div key={product.id} className="card">
            <img src={product.image}></img>
            <h6>{product.title}</h6>
            <h5>{product.price}$</h5>
            <button className="btn" onClick={()=>handleClick(product)}>Add to Cart</button>
        </div>
        })}
        </div>
    )
}
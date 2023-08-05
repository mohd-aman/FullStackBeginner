import axios from "axios"
import { useEffect, useState } from "react";
import {useDispatch} from "react-redux"
import {add} from "../Store/cartSlice"

export default function Product(){
    let [products,setProducts] = useState([]);
    let dispatch = useDispatch();

    let handleClick = (product)=>{
        dispatch(add(product))
    }

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(function(res){
        setProducts(res.data);
    })
    },[])

    return(
        <div className="productsWrapper">
        {products.map((product)=>{
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
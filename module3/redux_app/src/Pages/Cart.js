import { useDispatch, useSelector } from "react-redux"
import { remove } from "../Store/cartSlice";

export default function Cart(){
    let items = useSelector((state)=>state.cart)
    let dispatch = useDispatch();
    console.log(items);

    let handleRemove = (id)=>{
        dispatch(remove(id));
    }
    return(
       <div >
        {items.map((item)=>{
            return <div className="cartCard">
                <img src={item.image}></img>
                <h5>{item.title}</h5>
                <h5>{item.price}</h5>
                <button className="remove-btn" onClick={()=>handleRemove(item.id)}>Remove from Cart</button>
            </div>
        })}
        </div>
    )
}
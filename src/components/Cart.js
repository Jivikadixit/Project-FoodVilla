import {useDispatch, useSelector } from "react-redux"
import {clearCart} from "../utils/cartSlice";
import FoodItem from "./FoodItem";

//import foodItem from "./foodItem";

export const Cart=()=>{
    
     const cartItems=useSelector((store)=>store.cart.items);
     const dispatch=useDispatch();
     const handleClearCart=()=>{
        dispatch(clearCart());
     };
     console.log(cartItems.items);
    // return (<div><h1>cartItems-{cartItems.length}</h1>
    //         <button onClick={()=>handleClearCart()}>clear Cart</button>
    //         <div>{cartItems.map((item)=>(<foodItem key={item.id} {...item}/>))}</div>
    // </div>)
return(
    <div>
      <div className="flex m-4 p-4">
      <h1 className="px-4 m-2 font-bold text-2xl ">cartItems-{cartItems.length}</h1>
    <button className="bg-red-500 rounded-xl p-2 visited:bg-green-700" onClick={()=>handleClearCart()}>clear Cart</button>
      </div>
    
   <div className="p-[20px] flex flex-wrap m-[2px]">{cartItems.map((item)=>
   (<FoodItem key={item.id} {...item}/>))
   }</div>
   </div>
)
};
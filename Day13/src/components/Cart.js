import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearItem } from "../utils/cartSlice";
const Cart = () =>{
    const cartItems=useSelector((store)=>store.cart.items)
    const dispatch=useDispatch()
    const handleClearCart = () =>{
        dispatch(clearItem())
    }
    console.log(cartItems[0],"----cartItems",cartItems[0]?.card?.info)
    return (
        <div>
            <div className="flex">
        <h1 className="font-bold text-3xl">Cart Page - {cartItems.length}</h1>
        <button className="p5 m-2 bg-green-100" onClick={()=>{
            handleClearCart()
        }}>Clear Cart</button>
        </div>
        <div className="flex">
            {cartItems.map((item)=>{
                return (
                 <FoodItem key={item?.card?.info?.id} {...item?.card?.info} />
                )})}
            {/* <FoodItem {...cartItemss} /> */}
        </div>
        </div>
    )
}

export default Cart
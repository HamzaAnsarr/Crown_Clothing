import "./checkout.styles.scss"
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckOutPage = ()=>{
    const {cartItems , AdditemsToCart , RemoveItemsFromCart} = useContext(CartContext)
    const IncrementHandler = (cartItem)=>{
        AdditemsToCart(cartItem)
    }
    return(
        <>
        <h2>I am CHECKOUT Page</h2>
        <div>
            {cartItems.map((cartItem)=>{
                const {id , name , quantity } = cartItem
                return <div>
                    <h2>{name}</h2>
                    <span>{quantity}</span>
                    <br/>
                    <span onClick={()=>RemoveItemsFromCart(cartItem)}>decrement</span>
                    <br/>
                    <span onClick={ () => IncrementHandler(cartItem)}>increment</span>
                    </div>
            })}
        </div>
        </>
    )
}

export default CheckOutPage;
import "./CartDropdown.styles.scss"
import Button from "../button/button.component"
import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"
import { useNavigate } from "react-router-dom"

import CartItem from "../cart-item/cart-item.component"

const CartDropDown = ()=>{

    const {cartItems} = useContext(CartContext)
    const navigate = useNavigate()

    const checkOutClickHandler = () =>{
        navigate("/checkout")
    }

    return(
        <div className="cart_dropdown">
            <div className="cart_items">
                {cartItems.map((item)=>{
                    return <CartItem key={item.id} cartItem={item} />
                })}
            </div>
            <Button button_type={"inverted"} onClick={checkOutClickHandler}>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropDown;
import "./CartDropdown.styles.scss"
import Button from "../button/button.component"

const CartDropDown = ()=>{
    return(
        <div className="cart_dropdown">
            <div className="cart_items" />
            <Button button_type={"inverted"}>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropDown;
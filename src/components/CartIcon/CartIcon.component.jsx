import {ReactComponent as CartIconImg} from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./CartIcon.styles.scss";

const CartIcon = ()=>{
    const {isCartOpen,setIsCartOpen , cartCount} = useContext(CartContext)
    const toggleIsCartOpen = ()=> setIsCartOpen(!isCartOpen)
    return(
        <div className="cartIconContainer" onClick={toggleIsCartOpen}>
            <CartIconImg className="shopping-icon" />
            <span className="item-count">{cartCount}</span>
        </div>
    )
}

export default CartIcon;
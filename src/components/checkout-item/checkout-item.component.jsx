import "./checkout-item.styles.scss"
import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"

const CheckOutItem = ({cartItem})=>{

    const { ClearItemFromCart , AdditemsToCart , RemoveItemsFromCart } = useContext(CartContext)

    const { name , imageUrl , price , quantity} = cartItem

    const clearItemHandler = ()=>{
        ClearItemFromCart(cartItem)
    }

    const addItemHandler = () => AdditemsToCart(cartItem)
    const removeItemHandler = () => RemoveItemsFromCart(cartItem)
    return(
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt="Imagehere"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={removeItemHandler}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={addItemHandler}>&#10095;</div>
                </span>
            <span className="price">{price}</span>
            <span className="remove-button" onClick={clearItemHandler}>&#10005;</span>
        </div>
    )
}

export default CheckOutItem;
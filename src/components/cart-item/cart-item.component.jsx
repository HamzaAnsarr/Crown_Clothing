import "./cart-item.styles.scss"

const CartItem = ({cartItem})=>{
    const {name , quantity , imageUrl , price} = cartItem
    return(
        <div className="cart_single_item">
            <img src={imageUrl} alt="Imagehere"/>
            <div className="details">
            <span>{name}</span>
            <span>{quantity} x ${price} = {quantity*price}</span>
            </div>
        </div>
    )
}

export default CartItem;
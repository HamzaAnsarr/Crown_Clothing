import "./product_card.styles.scss"
import Button from "../button/button.component"
import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"

const ProductCard = ({product})=>{

    const { AdditemsToCart } = useContext(CartContext)
    const { name , price , imageUrl , id } = product

    const addProductToCart = ()=>{
        AdditemsToCart(product)
    }

    return(
        <div className="product_card_container" key={id}>
            <img src={imageUrl} alt="Imagehere"/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <div className="btn">
            <Button button_type="inverted" onClick={addProductToCart}>Add to Cart</Button>
            </div>
            
        </div>
    )
}

export default ProductCard
import "./product_card.styles.scss"
import Button from "../button/button.component"

const ProductCard = ({product})=>{

    const { name , price , imageUrl , id } = product

    return(
        <div className="product_card_container" key={id}>
            <img src={imageUrl} alt="Imagehere"/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <div className="btn">
            <Button button_type="inverted">Add to Cart</Button>
            </div>
            
        </div>
    )
}

export default ProductCard
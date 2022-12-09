// import Shop_Data from "../../Shop_Data.json"
import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../product_card/product_card.component"

import "./Shop.Data.styles.scss"

const Shop = ()=>{
    const {products} =  useContext(ProductsContext)
    return(
        <div className="products_card">
            {products.map((product)=>{
                // console.log(product)
                return(
                    // <div key={id}>
                    //     <h1>{name}</h1>
                    // </div>
                    <ProductCard product={product} key={product.id} />
                )
                
            })}
        </div>
    )
}

export default Shop;
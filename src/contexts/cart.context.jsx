import { useEffect } from "react";
import { createContext , useState } from "react";

const addCartItems = (cartItems , ProductToAdd)=>{

    console.log("hello from add cart items")

    const existingCartItem = cartItems.find((cartItem)=>{
        console.log(cartItem)
        console.log(ProductToAdd)
        return cartItem.id === ProductToAdd.id
    } )


    if(existingCartItem){
        console.log("existing")
        return cartItems.map((cartItem)=>{
           return cartItem.id === ProductToAdd.id ? {...cartItem , quantity : cartItem.quantity + 1} : cartItem
            })
    }


    return [...cartItems , {...ProductToAdd , quantity : 1}]
}

const RemoveCartItems = (cartItems , CartItemToRemove)=>{
    const existingCartItem = cartItems.find((CartItem)=>{
        return CartItem.id === CartItemToRemove.id
    })

    if(existingCartItem.quantity===1){
        return cartItems.filter((cartItem)=> cartItem.id !== CartItemToRemove.id )
    }
    return cartItems.map((cartItem)=>{
       return cartItem.id === CartItemToRemove.id ? {...cartItem , quantity : cartItem.quantity -1} : cartItem
    })
}

const ClearCartItems = (cartItems , CartItemToClear)=>{
    return cartItems.filter((cartItem)=> cartItem.id !== CartItemToClear.id)
}
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: ()=>{},
    cartItems : [],
    AdditemsToCart : ()=>{},
    RemoveItemsFromCart : ()=>{},
    ClearItemFromCart:()=>{},
    cartCount : 0,
    totalCount:0
})

export const CartProvider = ({children})=>{

    const [isCartOpen , setIsCartOpen] = useState(false)
    const [cartItems , setCartItems] = useState([])
    const [cartCount , setCartCount] = useState(0)
    const [totalCount , setTotalCount] = useState(0)

    useEffect(()=>{
        const newCartCount = cartItems.reduce((total , cartItem)=> total + cartItem.quantity ,0)
        setCartCount(newCartCount)
    },[cartItems])

    useEffect(()=>{
        const newtotalCount = cartItems.reduce((total, cartItem)=> total + (cartItem.quantity*cartItem.price) , 0 )
        setTotalCount(newtotalCount);
    },[cartItems])

    const AdditemsToCart = (ProductToAdd)=>{
        setCartItems(addCartItems(cartItems , ProductToAdd))
    }

    const RemoveItemsFromCart = (CartItemToRemove)=>{
        setCartItems(RemoveCartItems(cartItems , CartItemToRemove))
    }

    const ClearItemFromCart = (CartItemToClear)=>{
        setCartItems(ClearCartItems(cartItems , CartItemToClear))
    }

    const value = {isCartOpen , setIsCartOpen , cartItems , AdditemsToCart , RemoveItemsFromCart ,ClearItemFromCart, cartCount , totalCount}


    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}
